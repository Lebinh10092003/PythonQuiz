const PYODIDE_INDEX = "https://cdn.jsdelivr.net/pyodide/v0.28.3/full/";
let pyodide = null;

async function ensureRuntime() {
  if (pyodide) return pyodide;
  postMessage({ type: "status", status: "loading" });
  importScripts(PYODIDE_INDEX + "pyodide.js");
  pyodide = await loadPyodide({ indexURL: PYODIDE_INDEX });
  postMessage({ type: "ready", version: pyodide.runPython("import sys; sys.version.split()[0]") });
  return pyodide;
}

function makeHarness() {
  return `
import io, json, ast, traceback, math, builtins
from contextlib import redirect_stdout, redirect_stderr

_user_code = USER_CODE
_checks = json.loads(CHECKS_JSON)
_program_checks = json.loads(globals().get("PROGRAM_CHECKS_JSON", "[]"))
_mode = globals().get("MODE", "function")
_run_input = globals().get("RUN_INPUT", "")
_with_tests = bool(WITH_TESTS)
_stdout = io.StringIO()
_stderr = io.StringIO()
_details = []
_passed = 0
_error = None
_error_type = None

def _same(actual, expected):
    if type(actual) is bool or type(expected) is bool:
        return type(actual) is type(expected) and actual == expected
    if isinstance(actual, (int, float)) and isinstance(expected, (int, float)):
        if isinstance(actual, float) or isinstance(expected, float):
            return math.isclose(actual, expected, rel_tol=1e-9, abs_tol=1e-9)
        return actual == expected
    if type(actual) is not type(expected):
        return False
    if isinstance(expected, (list, tuple)):
        return len(actual) == len(expected) and all(_same(a, b) for a, b in zip(actual, expected))
    if isinstance(expected, dict):
        return actual.keys() == expected.keys() and all(_same(actual[k], v) for k, v in expected.items())
    if isinstance(expected, (set, frozenset)):
        unmatched = list(actual)
        for item in expected:
            match = next((i for i, value in enumerate(unmatched) if _same(value, item)), None)
            if match is None:
                return False
            unmatched.pop(match)
        return not unmatched
    return actual == expected

def _short(value):
    text = repr(value)
    return text if len(text) <= 180 else text[:177] + "..."

def _normal_output(s):
    return s.replace("\\r\\n", "\\n").rstrip("\\n")

def _run_program(compiled_code, stdin_text):
    input_stream = io.StringIO(stdin_text)
    def _read_input(prompt=""):
        if prompt:
            print(prompt, end="")
        line = input_stream.readline()
        if line == "":
            raise EOFError("No more input available")
        return line.rstrip("\\r\\n")
    guarded = builtins.__dict__.copy()
    guarded["input"] = _read_input
    local_out = io.StringIO()
    local_err = io.StringIO()
    ns = {"__name__": "__main__", "__builtins__": guarded}
    exc_text = None
    with redirect_stdout(local_out), redirect_stderr(local_err):
        try:
            exec(compiled_code, ns)
        except BaseException:
            exc_text = traceback.format_exc()
    return local_out.getvalue(), local_err.getvalue(), exc_text

try:
    _compiled = compile(_user_code, "solution.py", "exec")
except BaseException:
    _compiled = None
    _error = traceback.format_exc()
    _error_type = "submission_error"

if _compiled is not None and _mode == "program":
    if _with_tests:
        for i, case in enumerate(_program_checks):
            expected = _normal_output(case["expected"])
            stdout, stderr, failure = _run_program(_compiled, case.get("input", ""))
            actual = _normal_output(stdout)
            correct = failure is None and actual == expected
            if correct:
                _passed += 1
            _details.append({
                "index": i + 1,
                "ok": correct,
                "input": case.get("input", ""),
                "expr": "Program output",
                "expected": expected,
                "actual": (failure.strip().splitlines()[-1] if failure else actual),
                "issue": "test_exception" if failure else ("wrong_output" if not correct else ""),
                "stderr": stderr
            })
        # Program cases each have their own fresh namespace and input stream.
    else:
        stdout, stderr, failure = _run_program(_compiled, _run_input)
        _stdout.write(stdout)
        _stderr.write(stderr)
        if failure:
            _error = failure
            _error_type = "submission_error"

elif _compiled is not None and _mode == "function":
    ns = {"__name__": "__main__"}
    try:
        with redirect_stdout(_stdout), redirect_stderr(_stderr):
            exec(_compiled, ns)
    except BaseException:
        _error = traceback.format_exc()
        _error_type = "submission_error"
    if _with_tests and _error is None:
        for i, check in enumerate(_checks):
            expr = check["expr"]
            try:
                expected = ast.literal_eval(check["expected"])
            except BaseException:
                _error = "Invalid test configuration at test " + str(i + 1) + ": " + traceback.format_exc()
                _error_type = "grader_error"
                break
            try:
                with redirect_stdout(_stdout), redirect_stderr(_stderr):
                    actual = eval(compile(expr, "<test " + str(i + 1) + ">", "eval"), ns)
                correct = _same(actual, expected)
                if correct:
                    _passed += 1
                _details.append({
                    "index": i + 1,
                    "ok": correct,
                    "expr": expr,
                    "expected": _short(expected),
                    "actual": _short(actual),
                    "issue": "missing_return" if actual is None and expected is not None else (
                        "wrong_type" if not correct and type(actual) is bool and type(expected) is not bool else (
                            "wrong_type" if not correct and type(expected) is bool and type(actual) is not bool else "wrong_answer"
                        )
                    )
                })
            except BaseException as exc:
                _details.append({
                    "index": i + 1,
                    "ok": False,
                    "expr": expr,
                    "expected": _short(expected),
                    "actual": type(exc).__name__ + ": " + str(exc),
                    "issue": "test_exception"
                })

json.dumps({
    "ok": _error is None,
    "error": _error,
    "errorType": _error_type,
    "stdout": _stdout.getvalue(),
    "stderr": _stderr.getvalue(),
    "passed": _passed,
    "total": (len(_program_checks) if _mode == "program" else len(_checks)) if _with_tests else 0,
    "details": _details
}, ensure_ascii=False)
`;
}

async function execute(payload) {
  const runtime = await ensureRuntime();
  runtime.globals.set("USER_CODE", payload.code || "");
  runtime.globals.set("CHECKS_JSON", JSON.stringify(payload.checks || []));
  runtime.globals.set("WITH_TESTS", Boolean(payload.withTests));
  runtime.globals.set("MODE", payload.mode === "program" ? "program" : "function");
  runtime.globals.set("PROGRAM_CHECKS_JSON", JSON.stringify(payload.programTests || []));
  runtime.globals.set("RUN_INPUT", payload.stdin || "");

  try {
    const raw = await runtime.runPythonAsync(makeHarness());
    postMessage({ type: "result", requestId: payload.requestId, result: JSON.parse(raw) });
  } catch (error) {
    postMessage({
      type: "result",
      requestId: payload.requestId,
      result: { ok: false, error: String(error), stdout: "", stderr: "", passed: 0, total: 0, details: [] }
    });
  } finally {
    try {
      runtime.globals.delete("USER_CODE");
      runtime.globals.delete("CHECKS_JSON");
      runtime.globals.delete("WITH_TESTS");
      runtime.globals.delete("MODE");
      runtime.globals.delete("PROGRAM_CHECKS_JSON");
      runtime.globals.delete("RUN_INPUT");
    } catch (_) {}
  }
}

onmessage = async (event) => {
  const payload = event.data || {};
  if (payload.type === "init") {
    try { await ensureRuntime(); }
    catch (error) { postMessage({ type: "status", status: "error", message: String(error) }); }
    return;
  }
  if (payload.type === "execute") {
    await execute(payload);
  }
};
