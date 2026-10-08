(() => {
  "use strict";

  const questions = Array.isArray(window.QUESTIONS) ? window.QUESTIONS : [];
  const $ = (id) => document.getElementById(id);
  const STORAGE = {
    progress: "pythonquiz.progress.v1",
    code: "pythonquiz.code.v1",
    language: "pythonquiz.language.v1",
    theme: "pythonquiz.theme.v1",
    current: "pythonquiz.current.v1",
    inputs: "pythonquiz.stdin.v2"
  };

  const ui = {
    sidebar: $("sidebar"), questionList: $("questionList"), searchInput: $("searchInput"),
    levelFilter: $("levelFilter"), topicFilter: $("topicFilter"), languageSelect: $("languageSelect"),
    progressText: $("progressText"), progressBar: $("progressBar"), progressLabel: $("progressLabel"),
    sidebarTitle: $("sidebarTitle"), runtimePill: $("runtimePill"), runtimeText: $("runtimeText"),
    titleJa: $("titleJa"), titleEn: $("titleEn"), promptJa: $("promptJa"), promptEn: $("promptEn"),
    jaBlock: $("jaBlock"), enBlock: $("enBlock"), levelBadge: $("levelBadge"), topicLabel: $("topicLabel"),
    questionNumber: $("questionNumber"), exampleCode: $("exampleCode"), exampleLabel: $("exampleLabel"),
    hintJa: $("hintJa"), hintEn: $("hintEn"), hintSummary: $("hintSummary"),
    runBtn: $("runBtn"), submitBtn: $("submitBtn"), resetBtn: $("resetBtn"),
    prevBtn: $("prevBtn"), nextBtn: $("nextBtn"), themeBtn: $("themeBtn"),
    openSidebarBtn: $("openSidebarBtn"), closeSidebarBtn: $("closeSidebarBtn"),
    mobileQuestionIndex: $("mobileQuestionIndex"), clearConsoleBtn: $("clearConsoleBtn"),
    consoleOutput: $("consoleOutput"), testOutput: $("testOutput"), unsavedDot: $("unsavedDot"),
    resultPanel: $("resultPanel"), resultEyebrow: $("resultEyebrow"), resultTitle: $("resultTitle"),
    resultMessage: $("resultMessage"), scoreLabel: $("scoreLabel"), scoreValue: $("scoreValue"),
    toast: $("toast"),
    lessonLink: $("lessonLink"), stdinPanel: $("stdinPanel"), stdinInput: $("stdinInput"),
    stdinLabel: $("stdinLabel"), saveBtn: $("saveBtn"), saveProgressBtn: $("saveProgressBtn"),
    exportProgressBtn: $("exportProgressBtn"), importProgressBtn: $("importProgressBtn"),
    importFile: $("importFile"), saveStatus: $("saveStatus")
  };

  const readJson = (key, fallback) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch (_) { return fallback; }
  };
  const progress = readJson(STORAGE.progress, {});
  const savedCode = readJson(STORAGE.code, {});
  const savedInputs = readJson(STORAGE.inputs, {});
  const validQuestionIds = new Set(questions.map(q => q.id));
  // Preserve old function-based starter drafts when migrating the introductory
  // chapters to standalone programs. A backup stays in localStorage.
  const archivedDrafts = readJson("pythonquiz.legacy-drafts.v1", {});
  let migratedCount = 0;
  for (const q of questions) {
    if (q.mode !== "program" || typeof savedCode[q.id] !== "string") continue;
    const legacyCall = q.checks?.[0]?.expr?.match(/^([A-Za-z_]\w*)\(/);
    if (!legacyCall) continue;
    const legacyFunction = new RegExp("^\\s*def\\s+" + legacyCall[1] + "\\s*\\(");
    if (!legacyFunction.test(savedCode[q.id])) continue;
    archivedDrafts[q.id] = savedCode[q.id];
    delete savedCode[q.id];
    migratedCount++;
  }
  if (migratedCount) {
    try {
      localStorage.setItem("pythonquiz.legacy-drafts.v1", JSON.stringify(archivedDrafts));
      localStorage.setItem(STORAGE.code, JSON.stringify(savedCode));
    } catch (_) {}
  }

  let saveStatusTimer = null;

  function saveSnapshot(notify = false) {
    try {
      localStorage.setItem(STORAGE.code, JSON.stringify(savedCode));
      localStorage.setItem(STORAGE.inputs, JSON.stringify(savedInputs));
      localStorage.setItem(STORAGE.progress, JSON.stringify(progress));
      if (current) localStorage.setItem(STORAGE.current, current.id);
      ui.saveStatus.textContent = language === "en" ? "Saved on this device" : "この端末に保存しました";
      clearTimeout(saveStatusTimer);
      saveStatusTimer = setTimeout(() => {
        ui.saveStatus.textContent = language === "en" ? "Autosave enabled" : "自動保存が有効です";
      }, 2200);
      if (notify) toast(language === "en" ? "Your work has been saved" : "学習データを保存しました");
    } catch (error) {
      ui.saveStatus.textContent = language === "en" ? "Storage unavailable" : "保存できません";
      if (notify) toast(String(error));
    }
  }

  function exportSnapshot() {
    if (current && editor) savedCode[current.id] = editor.getValue();
    if (current) savedInputs[current.id] = ui.stdinInput.value;
    saveSnapshot();
    const snapshot = {
      format: "PythonQuiz-progress", version: 2, exportedAt: new Date().toISOString(),
      code: savedCode, inputs: savedInputs, progress, legacyDrafts: archivedDrafts,
      currentId: current?.id || questions[0]?.id
    };
    const url = URL.createObjectURL(new Blob([JSON.stringify(snapshot, null, 2)], {type:"application/json"}));
    const link = document.createElement("a");
    link.href = url;
    link.download = "pythonquiz-progress.json";
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
    toast(language === "en" ? "Backup exported" : "バックアップを書き出しました");
  }

  async function importSnapshot(file) {
    if (!file) return;
    if (file.size > 2_000_000) throw Error("File is too large");
    const snapshot = JSON.parse(await file.text());
    if (snapshot.format !== "PythonQuiz-progress" || snapshot.version !== 2) throw Error("Invalid backup format");
    for (const [key, value] of Object.entries(snapshot.legacyDrafts || {})) {
      if (validQuestionIds.has(key) && typeof value === "string") archivedDrafts[key] = value;
    }
    try { localStorage.setItem("pythonquiz.legacy-drafts.v1", JSON.stringify(archivedDrafts)); } catch (_) {}
    for (const [key, value] of Object.entries(snapshot.code || {})) {
      if (validQuestionIds.has(key) && typeof value === "string") savedCode[key] = value;
    }
    for (const [key, value] of Object.entries(snapshot.inputs || {})) {
      if (validQuestionIds.has(key) && typeof value === "string") savedInputs[key] = value;
    }
    for (const [key, value] of Object.entries(snapshot.progress || {})) {
      if (validQuestionIds.has(key) && value && typeof value === "object") {
        progress[key] = {...progress[key], ...value};
      }
    }
    saveSnapshot();
    renderProgress();
    if (snapshot.currentId && validQuestionIds.has(snapshot.currentId)) current = questions.find(q => q.id === snapshot.currentId);
    renderCurrent();
    toast(language === "en" ? "Progress imported" : "進捗を読み込みました");
  }
  const storedLanguage = localStorage.getItem(STORAGE.language);
  let language = ["en", "ja"].includes(storedLanguage) ? storedLanguage : "en";
  if (storedLanguage !== language) localStorage.setItem(STORAGE.language, language);
  const LEVEL_LABELS = {
    Starter: {en:"Starter", ja:"入門"},
    Basic: {en:"Basic", ja:"基礎"},
    Core: {en:"Core", ja:"基本演習"},
    Intermediate: {en:"Intermediate", ja:"中級"},
    Advanced: {en:"Advanced", ja:"上級"}
  };
  const levelText = (value) => LEVEL_LABELS[value]?.[language] || value;
  let currentId = localStorage.getItem(STORAGE.current) || questions[0]?.id || "";
  let current = questions.find(q => q.id === currentId) || questions[0] || null;
  let runtimeReady = false;
  let worker = null;
  let requestCounter = 0;
  let pendingTimer = null;
  let pendingRequestId = null;
  let pendingQuestionId = null;
  let pendingWasTest = false;
  let editor = null;
  let suppressEditorChange = false;
  let toastTimer = null;

  function textFor(obj) {
    if (!obj) return "";
    return obj[language] || obj.en || "";
  }

  function toast(message) {
    ui.toast.textContent = message;
    ui.toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => ui.toast.classList.remove("show"), 1800);
  }

  function setTheme(theme) {
    document.body.classList.toggle("light", theme === "light");
    localStorage.setItem(STORAGE.theme, theme);
    ui.themeBtn.textContent = theme === "light" ? "☾" : "☼";
    if (editor) editor.setTheme(theme === "light" ? "ace/theme/chrome" : "ace/theme/one_dark");
  }

  function initEditor() {
    if (!window.ace) {
      const host = $("editor");
      const textarea = document.createElement("textarea");
      textarea.style.cssText = "width:100%;height:100%;resize:none;border:0;padding:16px;font:14px/1.6 monospace;background:#0b1020;color:#eef4ff;";
      host.replaceChildren(textarea);
      editor = {
        getValue: () => textarea.value,
        setValue: (v) => { textarea.value = v; },
        setTheme: () => {},
        focus: () => textarea.focus(),
        onChange: (fn) => textarea.addEventListener("input", fn)
      };
    } else {
      const aceEditor = ace.edit("editor");
      aceEditor.session.setMode("ace/mode/python");
      aceEditor.session.setTabSize(4);
      aceEditor.session.setUseSoftTabs(true);
      aceEditor.setOptions({
        fontSize: "14px",
        showPrintMargin: false,
        highlightActiveLine: true,
        enableBasicAutocompletion: false,
        useWorker: false,
        scrollPastEnd: 0.35
      });
      aceEditor.commands.addCommand({
        name: "runCode",
        bindKey: {win: "Ctrl-Enter", mac: "Command-Enter"},
        exec: () => runCurrent(false)
      });
      aceEditor.commands.addCommand({
        name: "testCode",
        bindKey: {win: "Ctrl-Shift-Enter", mac: "Command-Shift-Enter"},
        exec: () => runCurrent(true)
      });
      editor = {
        getValue: () => aceEditor.getValue(),
        setValue: (v) => aceEditor.setValue(v, -1),
        setTheme: (t) => aceEditor.setTheme(t),
        focus: () => aceEditor.focus(),
        onChange: (fn) => aceEditor.session.on("change", fn)
      };
    }

    editor.onChange(() => {
      if (suppressEditorChange || !current) return;
      savedCode[current.id] = editor.getValue();
      progress[current.id] = {...progress[current.id], started:true, editedAt: Date.now()};
      saveSnapshot();
      ui.unsavedDot.classList.add("visible");
      ui.resultPanel.classList.remove("success", "failure");
      ui.resultTitle.textContent = language === "en" ? "Code modified" : "コードを変更しました";
      ui.resultMessage.textContent = language === "en"
        ? "Run Test again to check the updated solution."
        : "変更後の解答を確認するには、もう一度テストしてください。";
      ui.scoreValue.textContent = "—";
    });

    setTheme(localStorage.getItem(STORAGE.theme) || "dark");
  }

  function startWorker() {
    if (worker) worker.terminate();
    runtimeReady = false;
    ui.runBtn.disabled = true;
    ui.submitBtn.disabled = true;
    ui.runtimePill.className = "runtime-pill";
    ui.runtimeText.textContent = language === "en" ? "Loading Python…" : "Python を読み込み中…";
    worker = new Worker("./python-worker.js");
    worker.onmessage = onWorkerMessage;
    worker.onerror = () => {
      ui.runtimePill.className = "runtime-pill error";
      ui.runtimeText.textContent = "Python error";
      ui.consoleOutput.textContent = language === "en" ? "Failed to initialize Python runtime." : "Python 実行環境の初期化に失敗しました。";
      runtimeReady = false;
    };
    worker.postMessage({type:"init"});
  }

  function onWorkerMessage(event) {
    const data = event.data || {};
    if (data.type === "ready") {
      runtimeReady = true;
      ui.runBtn.disabled = false;
      ui.submitBtn.disabled = false;
      ui.runtimePill.className = "runtime-pill ready";
      ui.runtimeText.textContent = "Python " + (data.version || "") + " ready";
      if (ui.consoleOutput.textContent.includes("loading") || ui.consoleOutput.textContent.includes("読み込み中")) {
        ui.consoleOutput.textContent = "Python ready. Ctrl+Enter: Run • Ctrl+Shift+Enter: Test";
      }
      return;
    }
    if (data.type === "status" && data.status === "error") {
      ui.runtimePill.className = "runtime-pill error";
      ui.runtimeText.textContent = "Python error";
      ui.consoleOutput.textContent = data.message || "Runtime error";
      return;
    }
    if (data.type === "result" && data.requestId === pendingRequestId) {
      const testedQuestionId = pendingQuestionId;
      const testedWasTest = pendingWasTest;
      clearTimeout(pendingTimer);
      pendingTimer = null;
      pendingRequestId = null;
      pendingQuestionId = null;
      pendingWasTest = false;
      ui.runBtn.disabled = !runtimeReady;
      ui.submitBtn.disabled = !runtimeReady;
      if (testedQuestionId !== current?.id) {
        if (testedWasTest && data.result?.ok && data.result.total > 0 &&
            data.result.passed === data.result.total) {
          progress[testedQuestionId] = {completed:true, score:100, updatedAt:Date.now()};
          localStorage.setItem(STORAGE.progress, JSON.stringify(progress));
          renderProgress();
          renderQuestionList();
        }
        return;
      }
      handleResult(data.result, testedWasTest);
    }
  }

  function handleResult(result, withTests) {
    const outputParts = [result.stdout?.trimEnd(), result.stderr?.trimEnd(), result.error?.trimEnd()].filter(Boolean);
    ui.consoleOutput.textContent = outputParts.join("\n") ||
      (withTests
        ? (language === "en" ? "No printed output. Tests check return values." : "出力はありません。テストでは戻り値を確認します。")
        : (language === "en" ? "Code executed. No printed output. Use Test to check function return values." : "実行完了。出力はありません。関数の戻り値はテストで確認できます。"));
    ui.resultPanel.classList.remove("success", "failure");

    if (result.error) {
      ui.testOutput.replaceChildren();
      ui.resultPanel.classList.add("failure");
      ui.resultEyebrow.textContent = language === "en" ? "RESULT" : "結果";
      ui.resultTitle.textContent = result.errorType === "grader_error"
        ? (language === "en" ? "Test configuration error" : "テスト設定エラー")
        : (language === "en" ? "Python error" : "Python エラー");
      ui.resultMessage.textContent = language === "en"
        ? "See OUTPUT for the error and line number. Correct your code and test again."
        : "出力タブでエラーと行番号を確認し、修正して再テストしてください。";
      ui.scoreValue.textContent = withTests && result.errorType !== "grader_error" ? "0%" : "—";
      activateConsoleTab("output");
      return;
    }

    if (withTests && result.total > 0) {
      renderTests(result.details || []);
      activateConsoleTab("tests");
      const score = Math.round((result.passed / result.total) * 100);
      ui.scoreValue.textContent = score + "%";
      if (result.passed === result.total) {
        ui.resultPanel.classList.add("success");
        ui.resultTitle.textContent = language === "en" ? "All tests passed" : "すべてのテストに合格しました";
        ui.resultMessage.textContent = language === "en" ? "This exercise is marked complete." : "この課題を完了済みにしました。";
        progress[current.id] = {completed:true, score:100, updatedAt:Date.now()};
        localStorage.setItem(STORAGE.progress, JSON.stringify(progress));
        ui.unsavedDot.classList.remove("visible");
        renderProgress();
        renderQuestionList();
        toast(language === "en" ? "Exercise completed" : "課題を完了しました");
      } else {
        ui.resultPanel.classList.add("failure");
        ui.resultTitle.textContent = language === "en" ? "Some tests failed" : "不合格のテストがあります";
        ui.resultMessage.textContent = (result.passed || 0) + "/" + result.total +
          (language === "en" ? " tests passed." : " 件のテストに合格しました。");
      }
    } else if (withTests) {
      ui.resultPanel.classList.add("failure");
      ui.resultTitle.textContent = language === "en" ? "No tests configured" : "テストがありません";
      ui.resultMessage.textContent = language === "en" ? "This exercise has no tests." : "この課題にはテストが設定されていません。";
      ui.scoreValue.textContent = "—";
      activateConsoleTab("tests");
    } else {
      activateConsoleTab("output");
    }
  }

  function renderTests(details) {
    ui.testOutput.replaceChildren();
    for (const d of details) {
      const row = document.createElement("div");
      row.className = "test-row";
      const icon = document.createElement("span");
      icon.className = d.ok ? "ok" : "fail";
      icon.textContent = d.ok ? "✓" : "×";
      const main = document.createElement("div");
      main.className = "test-main";
      const heading = document.createElement("div");
      heading.className = "test-expression";
      heading.textContent = (language === "en" ? "Test " : "テスト ") + d.index + ": " + d.expr;
      main.appendChild(heading);
      if (typeof d.input === "string") {
        const input = document.createElement("div");
        input.className = "test-input";
        input.textContent = (language === "en" ? "Input: " : "入力: ") +
          (d.input ? JSON.stringify(d.input.trimEnd()) : "(none)");
        main.appendChild(input);
      }
      const comparison = document.createElement("div");
      comparison.className = "test-comparison";
      if (d.ok) {
        const passed = document.createElement("span");
        passed.className = "ok";
        passed.textContent = (language === "en" ? "Passed: " : "合格: ") + d.actual;
        comparison.appendChild(passed);
      } else {
        const expected = document.createElement("span");
        expected.textContent = (language === "en" ? "Expected: " : "期待値: ") + d.expected;
        const received = document.createElement("span");
        received.textContent = (language === "en" ? "Received: " : "実際の値: ") + d.actual;
        received.className = "fail";
        comparison.append(expected, received);
      }
      main.appendChild(comparison);
      if (!d.ok) {
        const tip = document.createElement("div");
        tip.className = "test-tip";
        if (d.issue === "missing_return") {
          tip.textContent = language === "en"
            ? "This function returned None. Use return for a value; print() only displays text and pass does nothing."
            : "関数が None を返しました。値を返すには return を使います。print() は表示のみで、pass は何もしません。";
        } else if (d.issue === "wrong_type") {
          tip.textContent = language === "en"
            ? "Wrong type: use a Boolean (True/False), not a number (1/0), or vice versa."
            : "型が違います。真偽値（True/False）と数値（1/0）を区別してください。";
        } else if (d.issue === "wrong_output") {
          tip.textContent = language === "en"
            ? "Output does not match. Check print() values, spacing, case and line breaks."
            : "出力が一致しません。print()、スペース、大文字小文字、改行を確認してください。";
        } else if (d.issue === "test_exception") {
          tip.textContent = language === "en"
            ? "Your function raised an exception. Check its name, arguments and body."
            : "関数の実行中に例外が発生しました。関数名・引数・処理を確認してください。";
        }
        if (tip.textContent) main.appendChild(tip);
      }
      row.append(icon, main);
      ui.testOutput.appendChild(row);
    }
  }

  function runCurrent(withTests) {
    if (!runtimeReady || !current || pendingRequestId !== null) return;
    const requestId = ++requestCounter;
    pendingRequestId = requestId;
    pendingQuestionId = current.id;
    pendingWasTest = withTests;
    ui.runBtn.disabled = true;
    ui.submitBtn.disabled = true;
    ui.consoleOutput.textContent = withTests ? (language === "en" ? "Running tests…" : "テストを実行中…") : (language === "en" ? "Running…" : "実行中…");
    ui.testOutput.replaceChildren();
    activateConsoleTab(withTests ? "tests" : "output");
    worker.postMessage({
      type: "execute",
      requestId,
      code: editor.getValue(),
      checks: withTests ? current.checks : [],
      programTests: withTests && current.mode === "program" ? current.programTests : [],
      mode: current.mode || "function",
      stdin: current.mode === "program" ? ui.stdinInput.value : "",
      withTests
    });
    pendingTimer = setTimeout(() => {
      pendingRequestId = null;
      pendingQuestionId = null;
      pendingWasTest = false;
      ui.consoleOutput.textContent = language === "en"
        ? "Execution stopped: code exceeded 6 seconds. The Python worker was restarted."
        : "実行を停止しました：処理が6秒を超えたため、Python ワーカーを再起動しました。";
      ui.resultPanel.classList.remove("success");
      ui.resultPanel.classList.add("failure");
      ui.resultTitle.textContent = language === "en" ? "Time limit exceeded" : "実行時間の制限を超えました";
      ui.resultMessage.textContent = language === "en" ? "Check for an infinite loop or inefficient code." : "無限ループや効率の悪い処理がないか確認してください。";
      ui.scoreValue.textContent = "—";
      startWorker();
    }, 6000);
  }

  function activateConsoleTab(name) {
    document.querySelectorAll(".console-tab").forEach(btn => btn.classList.toggle("active", btn.dataset.tab === name));
    ui.consoleOutput.classList.toggle("hidden", name !== "output");
    ui.testOutput.classList.toggle("hidden", name !== "tests");
  }

  function filteredQuestions() {
    const term = ui.searchInput.value.trim().toLowerCase();
    const level = ui.levelFilter.value;
    const topic = ui.topicFilter.value;
    return questions.filter(q => {
      const haystack = [q.title.ja,q.title.en,q.topic.ja,q.topic.en].join(" ").toLowerCase();
      return (!term || haystack.includes(term))
        && (level === "all" || q.level === level)
        && (topic === "all" || q.topic.en === topic);
    });
  }

  function renderQuestionList() {
    const list = filteredQuestions();
    ui.questionList.replaceChildren();
    if (!list.length) {
      const empty = document.createElement("div");
      empty.style.cssText = "padding:20px 10px;color:var(--muted);font-size:12px;text-align:center;";
      empty.textContent = language === "en" ? "No exercises found." : "該当する課題がありません。";
      ui.questionList.appendChild(empty);
      return;
    }

    let lastLevel = "";
    list.forEach(q => {
      if (q.level !== lastLevel) {
        lastLevel = q.level;
        const head = document.createElement("div");
        head.className = "question-group-title";
        head.textContent = levelText(q.level);
        ui.questionList.appendChild(head);
      }
      const index = questions.indexOf(q) + 1;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "question-item" + (q.id === current?.id ? " active" : "") +
        (progress[q.id]?.completed ? " completed" : "") +
        (progress[q.id]?.started && !progress[q.id]?.completed ? " in-progress" : "");
      const idx = document.createElement("span");
      idx.className = "question-index";
      idx.textContent = String(index).padStart(2,"0");
      const copy = document.createElement("span");
      copy.className = "question-name";
      copy.textContent = textFor(q.title);
      const topic = document.createElement("span");
      topic.className = "question-topic";
      topic.textContent = textFor(q.topic);
      copy.appendChild(topic);
      const dot = document.createElement("span");
      dot.className = "completion-dot";
      button.append(idx, copy, dot);
      button.addEventListener("click", () => {
        selectQuestion(q.id);
        ui.sidebar.classList.remove("open");
      });
      ui.questionList.appendChild(button);
    });
  }

  function renderProgress() {
    const completed = questions.filter(q => progress[q.id]?.completed).length;
    const started = questions.filter(q => !progress[q.id]?.completed && progress[q.id]?.started).length;
    ui.progressText.textContent = completed + " / " + questions.length + " ✓ · " + started +
      (language === "en" ? " in progress" : " 作業中");
    ui.progressBar.style.width = questions.length ? ((completed / questions.length) * 100) + "%" : "0%";
  }

  function renderLanguageUI() {
    document.documentElement.lang = language;
    ui.sidebarTitle.textContent = language === "en" ? "Coding exercises" : "コーディング課題";
    ui.progressLabel.textContent = language === "en" ? "Progress" : "進捗";
    ui.exampleLabel.textContent = language === "en" ? "Example" : "例";
    ui.lessonLink.textContent = language === "en" ? "↗ Learn this topic on W3Schools" : "↗ W3Schools でこのトピックを学ぶ";
    ui.stdinLabel.textContent = language === "en" ? "Program input (stdin) · used by Run" : "プログラム入力（stdin）・実行時に使用";
    ui.stdinInput.placeholder = language === "en" ? "Values for input(), one per line" : "input() に渡す値を1行ずつ入力";
    ui.saveBtn.textContent = language === "en" ? "↓ Save" : "↓ 保存";
    ui.saveProgressBtn.textContent = language === "en" ? "Save" : "保存";
    ui.exportProgressBtn.textContent = language === "en" ? "Export" : "書き出し";
    ui.importProgressBtn.textContent = language === "en" ? "Import" : "読み込み";
    ui.saveStatus.textContent = language === "en" ? "Autosave enabled" : "自動保存が有効です";
    ui.hintSummary.textContent = language === "en" ? "Hint" : "ヒント";
    ui.scoreLabel.textContent = language === "en" ? "Score" : "スコア";
    ui.resultEyebrow.textContent = language === "en" ? "RESULT" : "結果";
    ui.openSidebarBtn.textContent = language === "en" ? "☰ Exercises" : "☰ 課題一覧";
    ui.searchInput.placeholder = language === "en" ? "Search exercises…" : "課題を検索…";
    ui.levelFilter.options[0].textContent = language === "en" ? "All levels" : "すべてのレベル";
    ui.prevBtn.title = language === "en" ? "Previous exercise" : "前の課題";
    ui.nextBtn.title = language === "en" ? "Next exercise" : "次の課題";
    ui.themeBtn.title = language === "en" ? "Toggle theme" : "テーマを切り替え";
    ui.closeSidebarBtn.title = language === "en" ? "Close" : "閉じる";
    ui.clearConsoleBtn.textContent = language === "en" ? "Clear" : "消去";
    ui.resetBtn.textContent = language === "en" ? "↺ Reset" : "↺ リセット";
    ui.runBtn.textContent = language === "en" ? "▶ Run" : "▶ 実行";
    ui.submitBtn.textContent = language === "en" ? "✓ Test" : "✓ テスト";
    document.querySelector('[data-tab="output"]').textContent = language === "en" ? "OUTPUT" : "出力";
    document.querySelector('[data-tab="tests"]').textContent = language === "en" ? "TESTS" : "テスト";
  }

  function renderCurrent() {
    if (!current) return;
    const index = questions.indexOf(current);
    ui.levelBadge.textContent = levelText(current.level);
    ui.topicLabel.textContent = textFor(current.topic);
    ui.questionNumber.textContent = "#" + String(index + 1).padStart(2,"0");
    ui.mobileQuestionIndex.textContent = (index + 1) + " / " + questions.length;
    ui.titleJa.textContent = current.title.ja;
    ui.titleEn.textContent = current.title.en;
    ui.promptJa.textContent = current.prompt.ja;
    ui.promptEn.textContent = current.prompt.en;
    ui.hintJa.textContent = current.hint.ja;
    ui.hintEn.textContent = current.hint.en;
    ui.exampleCode.textContent = current.example;
    ui.lessonLink.href = current.lessonUrl || "https://www.w3schools.com/python/default.asp";
    ui.stdinPanel.classList.toggle("hidden", current.mode !== "program");
    ui.stdinInput.value = Object.prototype.hasOwnProperty.call(savedInputs, current.id) ? savedInputs[current.id] : (current.programTests?.[0]?.input || "");
    ui.jaBlock.classList.toggle("hidden", language !== "ja");
    ui.hintJa.classList.toggle("hidden", language !== "ja");
    ui.hintEn.classList.toggle("hidden", language !== "en");
    ui.enBlock.classList.toggle("hidden", language !== "en");
    ui.prevBtn.disabled = index <= 0;
    ui.nextBtn.disabled = index >= questions.length - 1;

    suppressEditorChange = true;
    editor.setValue(Object.prototype.hasOwnProperty.call(savedCode, current.id) ? savedCode[current.id] : current.starter);
    suppressEditorChange = false;
    ui.unsavedDot.classList.remove("visible");

    ui.resultPanel.classList.remove("success","failure");
    if (progress[current.id]?.completed) {
      ui.resultPanel.classList.add("success");
      ui.resultTitle.textContent = language === "en" ? "Completed" : "完了済み";
      ui.resultMessage.textContent = language === "en" ? "You can edit and test again at any time." : "いつでもコードを修正し、再テストできます。";
      ui.scoreValue.textContent = (progress[current.id].score || 100) + "%";
    } else {
      ui.resultTitle.textContent = language === "en" ? "Not submitted yet" : "未提出";
      ui.resultMessage.textContent = language === "en" ? "Write your solution and press Test." : "解答を入力し、テストボタンで確認してください。";
      ui.scoreValue.textContent = "—";
    }
    ui.consoleOutput.textContent = runtimeReady ? "Ctrl+Enter: Run • Ctrl+Shift+Enter: Test" : "Python runtime is loading…";
    ui.testOutput.replaceChildren();
    activateConsoleTab("output");
    localStorage.setItem(STORAGE.current, current.id);
    renderQuestionList();
  }

  function selectQuestion(id) {
    const found = questions.find(q => q.id === id);
    if (!found) return;
    current = found;
    currentId = id;
    renderCurrent();
    const panel = document.querySelector(".main-panel");
    if (panel && panel.scrollHeight > panel.clientHeight) panel.scrollTo({top:0, behavior:"smooth"});
    else window.scrollTo({top:0, behavior:"smooth"});
  }

  function buildFilters() {
    [...new Set(questions.map(q => q.level))].forEach(level => {
      const option = document.createElement("option");
      option.value = level;
      option.textContent = level;
      ui.levelFilter.appendChild(option);
    });
    const topics = [];
    const seen = new Set();
    questions.forEach(q => {
      if (!seen.has(q.topic.en)) {
        seen.add(q.topic.en);
        topics.push(q.topic);
      }
    });
    topics.forEach(topic => {
      const option = document.createElement("option");
      option.value = topic.en;
      option.textContent = language === "en" ? topic.en : topic.ja;
      ui.topicFilter.appendChild(option);
    });
  }

  function rebuildTopicFilter() {
    const selected = ui.topicFilter.value;
    while (ui.topicFilter.options.length > 1) ui.topicFilter.remove(1);
    const label = language === "en" ? "All topics" : "すべてのトピック";
    ui.topicFilter.options[0].textContent = label;
    const topics = [];
    const seen = new Set();
    questions.forEach(q => {
      if (!seen.has(q.topic.en)) { seen.add(q.topic.en); topics.push(q.topic); }
    });
    topics.forEach(topic => {
      const option = document.createElement("option");
      option.value = topic.en;
      option.textContent = language === "en" ? topic.en : topic.ja;
      ui.topicFilter.appendChild(option);
    });
    ui.topicFilter.value = [...ui.topicFilter.options].some(o => o.value === selected) ? selected : "all";
  }

  function bindEvents() {
    ui.languageSelect.value = language;
    ui.stdinInput.addEventListener("input", () => {
      if (!current) return;
      savedInputs[current.id] = ui.stdinInput.value;
      saveSnapshot();
    });
    const saveNow = () => {
      if (current) {
        savedCode[current.id] = editor.getValue();
        savedInputs[current.id] = ui.stdinInput.value;
      }
      saveSnapshot(true);
    };
    ui.saveBtn.addEventListener("click", saveNow);
    ui.saveProgressBtn.addEventListener("click", saveNow);
    ui.exportProgressBtn.addEventListener("click", exportSnapshot);
    ui.importProgressBtn.addEventListener("click", () => ui.importFile.click());
    ui.importFile.addEventListener("change", async () => {
      try { await importSnapshot(ui.importFile.files[0]); }
      catch (e) { toast((language === "en" ? "Import failed: " : "読み込みエラー: ") + e.message); }
      finally { ui.importFile.value = ""; }
    });
    ui.languageSelect.addEventListener("change", () => {
      language = ui.languageSelect.value;
      localStorage.setItem(STORAGE.language, language);
      renderLanguageUI();
      rebuildTopicFilter();
      renderCurrent();
      if (!runtimeReady) ui.runtimeText.textContent = language === "en" ? "Loading Python…" : "Python を読み込み中…";
    });
    ui.searchInput.addEventListener("input", renderQuestionList);
    ui.levelFilter.addEventListener("change", renderQuestionList);
    ui.topicFilter.addEventListener("change", renderQuestionList);
    ui.runBtn.addEventListener("click", () => runCurrent(false));
    ui.submitBtn.addEventListener("click", () => runCurrent(true));
    ui.resetBtn.addEventListener("click", () => {
      if (!current) return;
      suppressEditorChange = true;
      editor.setValue(current.starter);
      suppressEditorChange = false;
      delete savedCode[current.id];
      saveSnapshot();
      ui.unsavedDot.classList.remove("visible");
      toast(language === "en" ? "Starter code restored" : "初期コードを復元しました");
    });
    ui.prevBtn.addEventListener("click", () => {
      const i = questions.indexOf(current);
      if (i > 0) selectQuestion(questions[i-1].id);
    });
    ui.nextBtn.addEventListener("click", () => {
      const i = questions.indexOf(current);
      if (i >= 0 && i < questions.length - 1) selectQuestion(questions[i+1].id);
    });
    ui.themeBtn.addEventListener("click", () => setTheme(document.body.classList.contains("light") ? "dark" : "light"));
    ui.openSidebarBtn.addEventListener("click", () => ui.sidebar.classList.add("open"));
    ui.closeSidebarBtn.addEventListener("click", () => ui.sidebar.classList.remove("open"));
    ui.clearConsoleBtn.addEventListener("click", () => {
      ui.consoleOutput.textContent = "";
      ui.testOutput.replaceChildren();
    });
    document.querySelectorAll(".console-tab").forEach(btn => btn.addEventListener("click", () => activateConsoleTab(btn.dataset.tab)));
  }

  function init() {
    if (!questions.length) {
      document.body.innerHTML = "<p style='padding:24px'>Question bank failed to load.</p>";
      return;
    }
    initEditor();
    buildFilters();
    bindEvents();
    renderLanguageUI();
    renderProgress();
    renderCurrent();
    startWorker();
  }

  init();
})();
