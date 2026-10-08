# PythonQuiz IDE

Browser-based Python coding exercises and automatic test-case grading.

## Languages

- **English** — default.
- **日本語 (Japanese)** — selectable in the language switcher.
- All 70 coding exercises, topic names, prompts, and hints are available in both English and Japanese.
- Older language settings from the former English/Vietnamese prototype automatically fall back to English.
- Language changes preserve work-in-progress code in your browser.

## Features

- 70 self-written coding exercises across 19 topics and five difficulty levels.
- Follows the broad learning progression of the W3Schools Python Tutorial; no verbatim copies of its questions.
- Ace editor with Python syntax highlighting and light/dark themes.
- Python execution in the browser using Pyodide, isolated in a Web Worker with a time limit.
- Run code, test solutions with automatic test cases, and track completed exercises.
- Progress and drafts saved to browser localStorage.
- Search and filters; responsive layout for desktop and mobile.
- Static hosting only — no backend or API keys.

## Publish with GitHub Pages

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Choose branch **main** and folder **/(root)**; click **Save**.
4. Open https://lebinh10092003.github.io/PythonQuiz/ after GitHub Pages finishes publishing.

No GitHub Actions workflow is required for branch-based publishing.

## Run locally

```bash
python -m http.server 8000
```

Visit http://localhost:8000.

## Files

```
index.html
styles.css
questions.js
app.js
python-worker.js
.nojekyll
```

**Security note:** Grading is performed entirely in the browser. Test cases can be inspected by learners; this is intended for practice and formative assessment, not a secure high-stakes examination.
