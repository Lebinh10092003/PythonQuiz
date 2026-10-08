(() => {
  "use strict";

  const questions = Array.isArray(window.QUESTIONS) ? window.QUESTIONS : [];
  const $ = (id) => document.getElementById(id);
  const STORAGE = {
    progress: "pythonquiz.progress.v1",
    code: "pythonquiz.code.v1",
    language: "pythonquiz.language.v1",
    theme: "pythonquiz.theme.v1",
    current: "pythonquiz.current.v1"
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
    toast: $("toast")
  };

  const readJson = (key, fallback) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch (_) { return fallback; }
  };
  const progress = readJson(STORAGE.progress, {});
  const savedCode = readJson(STORAGE.code, {});
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
      localStorage.setItem(STORAGE.code, JSON.stringify(savedCode));
      ui.unsavedDot.classList.add("visible");
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
      clearTimeout(pendingTimer);
      pendingTimer = null;
      pendingRequestId = null;
      ui.runBtn.disabled = !runtimeReady;
      ui.submitBtn.disabled = !runtimeReady;
      handleResult(data.result);
    }
  }

  function handleResult(result) {
    const outputParts = [];
    if (result.stdout) outputParts.push(result.stdout.trimEnd());
    if (result.stderr) outputParts.push(result.stderr.trimEnd());
    if (result.error) outputParts.push(result.error.trimEnd());
    ui.consoleOutput.textContent = outputParts.filter(Boolean).join("\n") || "(no output)";

    if (result.total > 0) {
      renderTests(result.details || []);
      activateConsoleTab("tests");
      const score = Math.round((result.passed / result.total) * 100);
      ui.scoreValue.textContent = score + "%";
      ui.resultPanel.classList.remove("success","failure");

      if (result.ok && result.passed === result.total) {
        ui.resultPanel.classList.add("success");
        ui.resultEyebrow.textContent = language === "en" ? "RESULT" : "結果";
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
        ui.resultMessage.textContent = (result.passed || 0) + "/" + result.total + (language === "en" ? " tests passed." : " 件のテストに合格しました。");
      }
    } else if (result.error) {
      ui.resultPanel.classList.remove("success");
      ui.resultPanel.classList.add("failure");
      ui.resultTitle.textContent = language === "en" ? "Runtime error" : "実行時エラー";
      ui.resultMessage.textContent = language === "en" ? "Check the OUTPUT panel for details." : "詳細は OUTPUT タブを確認してください。";
      ui.scoreValue.textContent = "—";
      activateConsoleTab("output");
    } else {
      activateConsoleTab("output");
    }
  }

  function renderTests(details) {
    ui.testOutput.replaceChildren();
    details.forEach(d => {
      const row = document.createElement("div");
      row.className = "test-row";
      const icon = document.createElement("span");
      icon.className = d.ok ? "ok" : "fail";
      icon.textContent = d.ok ? "✓" : "×";
      const main = document.createElement("div");
      main.className = "test-main";
      main.textContent = (language === "en" ? "Test " : "テスト ") + d.index + ": " + d.expr;
      const sub = document.createElement("span");
      sub.className = "test-sub";
      sub.textContent = d.ok ? ("✓ " + d.actual) : ((language === "en" ? "expected " : "期待値 ") + d.expected + (language === "en" ? " • got " : " • 実際 ") + d.actual);
      main.appendChild(sub);
      row.append(icon, main);
      ui.testOutput.appendChild(row);
    });
  }

  function runCurrent(withTests) {
    if (!runtimeReady || !current || pendingRequestId !== null) return;
    const requestId = ++requestCounter;
    pendingRequestId = requestId;
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
      withTests
    });
    pendingTimer = setTimeout(() => {
      pendingRequestId = null;
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
      button.className = "question-item" + (q.id === current?.id ? " active" : "") + (progress[q.id]?.completed ? " completed" : "");
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
    ui.progressText.textContent = completed + " / " + questions.length;
    ui.progressBar.style.width = questions.length ? ((completed / questions.length) * 100) + "%" : "0%";
  }

  function renderLanguageUI() {
    document.documentElement.lang = language;
    ui.sidebarTitle.textContent = language === "en" ? "Coding exercises" : "コーディング課題";
    ui.progressLabel.textContent = language === "en" ? "Progress" : "進捗";
    ui.exampleLabel.textContent = language === "en" ? "Example" : "例";
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
    window.scrollTo({top:0, behavior:"smooth"});
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
      localStorage.setItem(STORAGE.code, JSON.stringify(savedCode));
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
