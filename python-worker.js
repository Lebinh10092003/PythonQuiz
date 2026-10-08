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

function makeHarness(withTests) {
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

def _same(actual, expected):
    if isinstance(actual, float) and isinstance(expected, float):
        return math.isclose(actual, expected, rel_tol=1e-9, abs_tol=1e-9)
    return actual == expected

def _short(value):
    text = repr(value)
    return text if len(text) <= 180 else text[:177] + "..."

_ns = {"__name__": "__main__"}

try:
    with redirect_stdout(_stdout), redirect_stderr(_stderr):
        exec(_user_code, _ns)
        if WITH_TESTS:
            for i, check in enumerate(_checks):
                expr = check["expr"]
                expected = ast.literal_eval(check["expected"])
                try:
                    actual = eval(expr, _ns)
                    ok = _same(actual, expected)
                    if ok:
                        _passed += 1
                    _details.append({
                        "index": i + 1,
                        "ok": ok,
                        "expr": expr,
                        "expected": _short(expected),
                        "actual": _short(actual)
                    })
                except Exception as exc:
                    _details.append({
                        "index": i + 1,
                        "ok": False,
                        "expr": expr,
                        "expected": _short(expected),
                        "actual": type(exc).__name__ + ": " + str(exc)
                    })
except Exception:
    _error = traceback.format_exc()

json.dumps({
    "ok": _error is None,
    "error": _error,
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
    const raw = await runtime.runPythonAsync(makeHarness(payload.withTests));
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
