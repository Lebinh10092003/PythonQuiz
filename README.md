# PythonQuiz IDE

A standalone GitHub Pages IDE for learning Python with **English (default)** and **Japanese** explanations.

## Learning workflow

- 70 coding exercises, aligned with W3Schools Python Tutorial topics. Each exercise links to its corresponding W3Schools lesson.
- **54 exercises** (syntax, input/output, variables, numbers, strings, collections, conditions, loops, modules, JSON, RegEx, exceptions, file handling, and combined practice) use ordinary Python scripts; no artificial function wrapper.
- Script exercises read with `input()` (when needed) and output via `print()`. The **Program input** field supplies stdin to **Run**. **Test** checks the program with independent input/output examples.
- Function, lambda, class, decorator and iterator tasks retain function/class definitions where those concepts are explicitly being assessed.
- Code editor powered by Ace; Python runs locally in the browser through Pyodide and a worker.
- Auto-grading against multiple test cases. Wrong outputs show expected/received values.
- Scrolling works in the exercises sidebar and IDE on desktop, and down the page on mobile.

## Save and resume

- Drafts, input samples, current exercise, completion status, and grading history are stored in **localStorage** on this browser.
- **Save** stores data on this device immediately. Drafts are also saved automatically as you type.
- **Export** creates `pythonquiz-progress.json` with drafts and progress; **Import** restores the backup, including on a different device.
- Function-style drafts from the old beginner exercises are archived in local storage and included in exported backups; new versions start with script-style instructions.
- **Limitation:** GitHub Pages does not itself provide accounts, a shared database, or cross-device automatic synchronization. Clearing site data may delete local progress; export a backup first.

## GitHub Pages

1. Open **Settings → Pages**.
2. Choose **Deploy from a branch**.
3. Select **main** and **/(root)** and Save.
4. Visit https://lebinh10092003.github.io/PythonQuiz/

No server or build step is needed.

## Testing

GitHub Actions runs JavaScript syntax checks and Python grading tests:

- 70 original reference solutions for function/advanced exercises
- 54 ordinary-program reference solutions, covering all non-function Python topics
- Separate tests for wrong answers, missing returns, Boolean typing, Python syntax errors, and stdin/stdout behavior.

## Files

```
index.html
styles.css
app.js
questions.js
python-worker.js
tests/grader.test.cjs
tests/golden.json
tests/program-golden.json
.github/workflows/quality.yml
```

## Security

All grading runs on the client; test cases can be viewed in the browser. This tool is for learning and practice, not a secure exam system with protected tests.
