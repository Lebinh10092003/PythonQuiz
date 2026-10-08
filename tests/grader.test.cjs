const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const { spawnSync } = require("node:child_process");

const root = require("node:path").resolve(__dirname, "..");
const questionContext = { window: {} };
vm.runInNewContext(fs.readFileSync(root + "/questions.js", "utf8"), questionContext);
const questions = JSON.parse(JSON.stringify(questionContext.window.QUESTIONS));

const workerContext = {};
vm.runInNewContext(fs.readFileSync(root + "/python-worker.js", "utf8") + "\n__harness = makeHarness();", workerContext);
const harness = workerContext.__harness.replace(/\njson\.dumps\(/, "\n__result = json.dumps(") + "\nprint(__result)\n";
function grade(code, checks) {
  const prefix = "USER_CODE = " + JSON.stringify(code) + "\nCHECKS_JSON = " +
    JSON.stringify(JSON.stringify(checks)) + "\nWITH_TESTS = True\n";
  const run = spawnSync("python3", ["-"], { input: prefix + harness, encoding: "utf8", timeout: 7000, maxBuffer: 2_000_000 });
  assert.equal(run.error, undefined, "Python process error: " + run.error);
  assert.equal(run.status, 0, "Python process failed: " + run.stderr);
  return JSON.parse(run.stdout.trim());
}
const solutions = JSON.parse(fs.readFileSync(root + "/tests/golden.json", "utf8"));

test("every exercise has EN/JA text, valid expected literals and >= 3 distinct tests", () => {
  assert.equal(questions.length, 70);
  const allChecks = [];
  const ids = new Set();
  for (const q of questions) {
    assert(!ids.has(q.id), "Duplicate id: " + q.id);
    ids.add(q.id);
    for (const prop of ["topic", "title", "prompt", "hint"]) {
      assert(q[prop].en && q[prop].ja, "Incomplete localization: " + q.id + "/" + prop);
    }
    assert(q.checks.length >= 3, "Too few tests: " + q.id);
    assert.equal(new Set(q.checks.map(c => c.expr)).size, q.checks.length, "Duplicate test: " + q.id);
    allChecks.push(...q.checks);
    assert.equal(typeof solutions[q.id], "string", "Missing golden solution: " + q.id);
  }
  assert.equal(allChecks.length, 333);
  const exprs = allChecks.map(c => c.expected);
  const run = spawnSync("python3", ["-c", "import ast,json,sys; [ast.literal_eval(x) for x in json.loads(sys.stdin.read())]; print('OK')"], {input:JSON.stringify(exprs),encoding:"utf8"});
  assert.equal(run.status,0,"Invalid expected literal: "+run.stderr);
});

for (const q of questions) {
  test("valid solution must pass all test cases: " + q.id, () => {
    const result = grade(solutions[q.id], q.checks);
    assert.equal(result.ok, true, "Python error: " + result.error);
    assert.equal(result.passed, q.checks.length, JSON.stringify(result.details.filter(x=>!x.ok)));
    assert.equal(result.total, q.checks.length);
  });
}

test("pass and print are not return values", () => {
  const checks = questions.find(x => x.id === "hello-world").checks;
  for (const code of ["def hello():\n    pass", "def hello():\n    print('Hello, World!')"]) {
    const result = grade(code, checks);
    assert.equal(result.passed,0);
    assert.equal(result.details[0].issue,"missing_return");
    assert.equal(result.details[0].actual,"None");
  }
});

test("Boolean True is not integer 1", () => {
  const q = questions.find(x => x.id === "is-even");
  const result = grade("def is_even(n): return 1", q.checks);
  assert.equal(result.passed,0);
  assert.equal(result.details[0].issue,"wrong_type");
});

test("Python syntax errors are distinguished from failed assertions", () => {
  const q = questions.find(x=>x.id === "hello-world");
  const result = grade("def hello(:\n    pass",q.checks);
  assert.equal(result.ok,false);
  assert.equal(result.errorType,"submission_error");
  assert.equal(result.details.length,0);
  assert.match(result.error,/SyntaxError/);
});

test("per-test exceptions preserve failure details", () => {
  const q=questions.find(x=>x.id === "hello-world");
  const result=grade("def other(): return 1",q.checks);
  assert.equal(result.ok,true);
  assert.equal(result.passed,0);
  assert.equal(result.details[0].issue,"test_exception");
  assert.match(result.details[0].actual,/NameError/);
});
