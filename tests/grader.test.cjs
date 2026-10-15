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
  assert.equal(allChecks.length, 335);
  const exprs = allChecks.map(c => c.expected);
  const run = spawnSync("python3", ["-c", "import ast,json,sys; [ast.literal_eval(x) for x in json.loads(sys.stdin.read())]; print('OK')"], {input:JSON.stringify(exprs),encoding:"utf8"});
  assert.equal(run.status,0,"Invalid expected literal: "+run.stderr);
});

for (const q of questions) {
  test("legacy function-bank compatibility (including migrated programs): " + q.id, () => {
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

const programSolutions = JSON.parse(fs.readFileSync(root + "/tests/program-golden.json", "utf8"));

function gradeProgram(code, cases, withTests=true, stdin="", requiredCalls=[]) {
  const prefix =
    "USER_CODE = " + JSON.stringify(code) + "\n" +
    "CHECKS_JSON = '[]'\n" +
    "PROGRAM_CHECKS_JSON = " + JSON.stringify(JSON.stringify(cases)) + "\n" +
    "REQUIRED_CALLS_JSON = " + JSON.stringify(JSON.stringify(requiredCalls)) + "\n" +
    "WITH_TESTS = " + (withTests ? "True" : "False") + "\n" +
    "MODE = 'program'\n" +
    "RUN_INPUT = " + JSON.stringify(stdin) + "\n";
  const run = spawnSync("python3", ["-"], {input:prefix+harness, encoding:"utf8", timeout:7000, maxBuffer:2_000_000});
  assert.equal(run.status,0,"Python subprocess failed: "+run.stderr+" "+run.error);
  return JSON.parse(run.stdout.trim());
}

test("program-style questions have appropriate stdin/stdout cases", () => {
  const programQuestions = questions.filter(q => q.mode === "program");
  assert.equal(programQuestions.length,54);
  assert.equal(Object.keys(programSolutions).length,54);
  for (const q of questions) {
    assert.match(q.lessonUrl, /^https:\/\/www\.w3schools\.com\/python\/python_[\w]+\.asp$/);
    if (q.mode !== "program") continue;
    assert.equal(typeof q.starter,"string");
    assert(!/def\s+\w+\s*\(/.test(q.starter),"Function wrapper in program starter: "+q.id);
    assert(Array.isArray(q.programTests) && q.programTests.length > 0);
    for (const c of q.programTests) {
      assert.equal(typeof c.input,"string");
      assert.equal(typeof c.expected,"string");
    }
  }
});

for (const question of questions.filter(q => q.mode === "program")) {
  test("ordinary Python program passes stdin/stdout tests: "+question.id, () => {
    const result=gradeProgram(programSolutions[question.id],question.programTests);
    assert.equal(result.ok,true,result.error);
    assert.equal(result.passed,question.programTests.length,JSON.stringify(result.details.filter(x=>!x.ok)));
  });
}

test("a direct print statement completes Hello World without def", () => {
  const first=questions[0];
  const result=gradeProgram('print("Hello, World!")',first.programTests);
  assert.equal(result.passed,first.programTests.length);
});

test("incorrect program output is rejected", () => {
  const first=questions[0];
  const result=gradeProgram('print("Hi")',first.programTests);
  assert.equal(result.passed,0);
  assert.equal(result.details[0].issue,"wrong_output");
});

test("program cases are independent", () => {
  const q=questions.find(q=>q.id==="add-two");
  const result=gradeProgram("a = int(input())\nb = int(input())\nprint(a+b)",q.programTests);
  assert.equal(result.passed,q.programTests.length);
});

test("Run accepts provided stdin and prints output", () => {
  const r=gradeProgram("name=input()\nprint('Hi '+name)",[],false,"Yuki\n");
  assert.equal(r.ok,true,r.error);
  assert.equal(r.stdout,"Hi Yuki\n");
  assert.equal(r.total,0);
});


test("native type() output is full Python class representation, not just short names", () => {
  const q = questions.find(q => q.id === "type-name");
  const output = "<class 'tuple'>\n<class 'str'>\n<class 'int'>";
  assert.equal(q.mode, "program");
  assert.equal(q.programTests[0].expected, output);
  assert.match(q.prompt.en, /type\(items\)/);
  const correct = gradeProgram(programSolutions[q.id], q.programTests);
  assert.equal(correct.passed, correct.total, JSON.stringify(correct.details));
  const shortened = gradeProgram("print('tuple')\nprint('str')\nprint('int')", q.programTests);
  assert.equal(shortened.passed, 0, "Short type names must not pass type() exercise");
  const wrongOrder = gradeProgram("print(type(15))\nprint(type('Python'))\nprint(type((1,2,3)))", q.programTests);
  assert.equal(wrongOrder.passed, 0, "Output order must match the prompt");
});

test("program mode rejects printed integer in place of Boolean True", () => {
  const q = questions.find(q => q.id === "is-even");
  const result = gradeProgram("print(1)", q.programTests);
  assert.equal(result.passed, 0);
});

test("program tests include decimal scores and true division", () => {
  const scores = questions.find(q => q.id === "grade");
  assert(scores.programTests.some(x => x.input === "89.5\n"));
  const r1 = gradeProgram(programSolutions[scores.id], scores.programTests);
  assert.equal(r1.passed, r1.total);
  const division = questions.find(q => q.id === "safe-divide");
  assert(division.programTests.some(x => x.input === "9\n4\n" && x.expected === "2.25"));
  const r2 = gradeProgram(programSolutions[division.id], division.programTests);
  assert.equal(r2.passed, r2.total);
});

test("each active grading mode validates what learners actually submit", () => {
  const ids = new Set();
  for (const q of questions) {
    assert(!ids.has(q.id), "Duplicate question id: " + q.id);
    ids.add(q.id);
    if (q.mode === "program") {
      assert(Array.isArray(q.programTests) && q.programTests.length > 0,
        "Missing active program tests: " + q.id);
      assert.equal(typeof programSolutions[q.id], "string",
        "Missing executable standalone solution: " + q.id);
      const pairs = q.programTests.map(t => JSON.stringify([t.input, t.expected]));
      assert.equal(new Set(pairs).size, pairs.length,
        "Duplicate input-output pair: " + q.id);
    } else {
      assert(Array.isArray(q.checks) && q.checks.length > 0,
        "Missing active function checks: " + q.id);
      assert.equal(typeof solutions[q.id], "string",
        "Missing executable function solution: " + q.id);
    }
  }
});


test("a generator must yield, not simply return a list", () => {
  const q = questions.find(q => q.id === "even-generator");
  const imposter = "def even_numbers(n):\n    return list(range(0, n+1, 2))";
  const result = grade(imposter, q.checks);
  assert(result.passed < result.total, "Returning a list is not a generator");
  assert(result.details.some(d => !d.ok && d.expr.includes("__name__")));
});

test("an iterator must return itself from iter()", () => {
  const q = questions.find(q => q.id === "countdown-iterator");
  const imposter =
    "class Countdown:\n" +
    "    def __init__(self, start): self.start=start\n" +
    "    def __iter__(self): return iter(range(self.start, 0, -1))";
  const result = grade(imposter, q.checks);
  assert(result.passed < result.total, "A reusable iterable is not necessarily an iterator");
  assert(result.details.some(d => !d.ok && d.expr.includes("iter(iterator) is iterator")));
});


test("type() lesson rejects hardcoded output even when its text is correct", () => {
  const q = questions.find(x => x.id === "type-name");
  assert.deepEqual(q.requiredCalls, ["type"]);
  const correct = gradeProgram(programSolutions[q.id], q.programTests, true, "", q.requiredCalls);
  assert.equal(correct.total, 2);
  assert.equal(correct.passed, correct.total, JSON.stringify(correct.details));
  const forged = [
    "print(\"<class 'tuple'>\")",
    "print(\"<class 'str'>\")",
    "print(\"<class 'int'>\")"
  ].join("\n");
  const dishonest = gradeProgram(forged, q.programTests, true, "", q.requiredCalls);
  assert.equal(dishonest.total, 2);
  assert.equal(dishonest.passed, 1);
  assert(dishonest.details.some(d => d.issue === "missing_required_call"));
});
