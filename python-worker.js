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
import io, json, ast, traceback, math
from contextlib import redirect_stdout, redirect_stderr

_user_code = USER_CODE
_checks = json.loads(CHECKS_JSON)
_stdout = io.StringIO()
_stderr = io.StringIO()
_details = []
_passed = 0
_error = None
_error_type = None
_ns = {"__name__": "__main__"}

def _same(actual, expected):
    # Python considers True == 1, but Boolean answers must be real Booleans.
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
        # Also reject sets like {True} when the expected value is {1}.
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

try:
    with redirect_stdout(_stdout), redirect_stderr(_stderr):
        exec(compile(_user_code, "solution.py", "exec"), _ns)
except BaseException:
    _error = traceback.format_exc()
    _error_type = "submission_error"

if WITH_TESTS and _error is None:
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
                actual = eval(compile(expr, "<test " + str(i + 1) + ">", "eval"), _ns)
            passed = _same(actual, expected)
            if passed:
                _passed += 1
            _details.append({
                "index": i + 1,
                "ok": passed,
                "expr": expr,
                "expected": _short(expected),
                "actual": _short(actual),
                "issue": "missing_return" if actual is None and expected is not None else (
                    "wrong_type" if not passed and type(actual) is bool and type(expected) is not bool else (
                        "wrong_type" if not passed and type(expected) is bool and type(actual) is not bool else "wrong_answer"
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
    "total": len(_checks) if WITH_TESTS else 0,
    "details": _details
}, ensure_ascii=False)
`;
}

async function execute(payload) {
  const runtime = await ensureRuntime();
  runtime.globals.set("USER_CODE", payload.code || "");
  runtime.globals.set("CHECKS_JSON", JSON.stringify(payload.checks || []));
  runtime.globals.set("WITH_TESTS", Boolean(payload.withTests));

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
