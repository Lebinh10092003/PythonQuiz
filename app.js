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
    titleVi: $("titleVi"), titleEn: $("titleEn"), promptVi: $("promptVi"), promptEn: $("promptEn"),
    viBlock: $("viBlock"), enBlock: $("enBlock"), levelBadge: $("levelBadge"), topicLabel: $("topicLabel"),
    questionNumber: $("questionNumber"), exampleCode: $("exampleCode"), exampleLabel: $("exampleLabel"),
    hintVi: $("hintVi"), hintEn: $("hintEn"), hintSummary: $("hintSummary"),
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
  let language = localStorage.getItem(STORAGE.language) || "both";
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
    if (language === "en") return obj.en || obj.vi || "";
    return obj.vi || obj.en || "";
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
    ui.runtimeText.textContent = language === "en" ? "Loading Python…" : "Đang tải Python…";
    worker = new Worker("./python-worker.js");
    worker.onmessage = onWorkerMessage;
    worker.onerror = () => {
      ui.runtimePill.className = "runtime-pill error";
      ui.runtimeText.textContent = "Python error";
      ui.consoleOutput.textContent = "Không thể khởi tạo Python runtime / Failed to initialize Python runtime.";
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
      if (ui.consoleOutput.textContent.includes("loading") || ui.consoleOutput.textContent.includes("Đang tải")) {
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
        ui.resultEyebrow.textContent = language === "en" ? "RESULT" : "KẾT QUẢ";
        ui.resultTitle.textContent = language === "en" ? "All tests passed" : "Đã vượt qua toàn bộ test";
        ui.resultMessage.textContent = language === "en" ? "This exercise is marked complete." : "Bài này đã được đánh dấu hoàn thành.";
        progress[current.id] = {completed:true, score:100, updatedAt:Date.now()};
        localStorage.setItem(STORAGE.progress, JSON.stringify(progress));
        ui.unsavedDot.classList.remove("visible");
        renderProgress();
        renderQuestionList();
        toast(language === "en" ? "Exercise completed" : "Hoàn thành bài tập");
      } else {
        ui.resultPanel.classList.add("failure");
        ui.resultTitle.textContent = language === "en" ? "Some tests failed" : "Còn test chưa đạt";
        ui.resultMessage.textContent = (result.passed || 0) + "/" + result.total + (language === "en" ? " tests passed." : " test đạt.");
      }
    } else if (result.error) {
      ui.resultPanel.classList.remove("success");
      ui.resultPanel.classList.add("failure");
      ui.resultTitle.textContent = language === "en" ? "Runtime error" : "Lỗi khi chạy";
      ui.resultMessage.textContent = language === "en" ? "Check the OUTPUT panel for details." : "Xem chi tiết lỗi trong tab OUTPUT.";
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
      main.textContent = "Test " + d.index + ": " + d.expr;
      const sub = document.createElement("span");
      sub.className = "test-sub";
      sub.textContent = d.ok ? ("✓ " + d.actual) : ("expected " + d.expected + " • got " + d.actual);
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
    ui.consoleOutput.textContent = withTests ? "Running tests…" : "Running…";
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
      ui.consoleOutput.textContent = "Execution stopped: code exceeded 6 seconds. The Python worker was restarted.\n\nĐã dừng: mã chạy quá 6 giây. Python worker đã được khởi động lại.";
      ui.resultPanel.classList.remove("success");
      ui.resultPanel.classList.add("failure");
      ui.resultTitle.textContent = language === "en" ? "Time limit exceeded" : "Vượt giới hạn thời gian";
      ui.resultMessage.textContent = language === "en" ? "Check for an infinite loop or inefficient code." : "Kiểm tra vòng lặp vô hạn hoặc mã chưa tối ưu.";
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
      const haystack = [q.title.vi,q.title.en,q.topic.vi,q.topic.en].join(" ").toLowerCase();
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
      empty.textContent = language === "en" ? "No exercises found." : "Không tìm thấy bài phù hợp.";
      ui.questionList.appendChild(empty);
      return;
    }

    let lastLevel = "";
    list.forEach(q => {
      if (q.level !== lastLevel) {
        lastLevel = q.level;
        const head = document.createElement("div");
        head.className = "question-group-title";
        head.textContent = q.level;
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
    ui.sidebarTitle.textContent = language === "en" ? "Coding exercises" : "Bài luyện tập";
    ui.progressLabel.textContent = language === "en" ? "Progress" : "Tiến độ";
    ui.exampleLabel.textContent = language === "en" ? "Example" : (language === "vi" ? "Ví dụ" : "Ví dụ / Example");
    ui.hintSummary.textContent = language === "en" ? "Hint" : (language === "vi" ? "Gợi ý" : "Gợi ý / Hint");
    ui.scoreLabel.textContent = language === "en" ? "Score" : "Điểm";
    ui.openSidebarBtn.textContent = language === "en" ? "☰ Exercises" : "☰ Bài tập";
  }

  function renderCurrent() {
    if (!current) return;
    const index = questions.indexOf(current);
    ui.levelBadge.textContent = current.level;
    ui.topicLabel.textContent = textFor(current.topic);
    ui.questionNumber.textContent = "#" + String(index + 1).padStart(2,"0");
    ui.mobileQuestionIndex.textContent = (index + 1) + " / " + questions.length;
    ui.titleVi.textContent = current.title.vi;
    ui.titleEn.textContent = current.title.en;
    ui.promptVi.textContent = current.prompt.vi;
    ui.promptEn.textContent = current.prompt.en;
    ui.hintVi.textContent = current.hint.vi;
    ui.hintEn.textContent = current.hint.en;
    ui.exampleCode.textContent = current.example;
    ui.viBlock.classList.toggle("hidden", language === "en");
    ui.enBlock.classList.toggle("hidden", language === "vi");
    ui.prevBtn.disabled = index <= 0;
    ui.nextBtn.disabled = index >= questions.length - 1;

    suppressEditorChange = true;
    editor.setValue(Object.prototype.hasOwnProperty.call(savedCode, current.id) ? savedCode[current.id] : current.starter);
    suppressEditorChange = false;
    ui.unsavedDot.classList.remove("visible");

    ui.resultPanel.classList.remove("success","failure");
    if (progress[current.id]?.completed) {
      ui.resultPanel.classList.add("success");
      ui.resultTitle.textContent = language === "en" ? "Completed" : "Đã hoàn thành";
      ui.resultMessage.textContent = language === "en" ? "You can edit and test again at any time." : "Bạn vẫn có thể sửa code và chấm lại bất kỳ lúc nào.";
      ui.scoreValue.textContent = (progress[current.id].score || 100) + "%";
    } else {
      ui.resultTitle.textContent = language === "en" ? "Not submitted yet" : "Chưa chấm bài";
      ui.resultMessage.textContent = language === "en" ? "Write your solution and press Test." : "Viết lời giải và nhấn Test để kiểm tra với các test case.";
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
      option.textContent = language === "en" ? topic.en : topic.vi;
      ui.topicFilter.appendChild(option);
    });
  }

  function rebuildTopicFilter() {
    const selected = ui.topicFilter.value;
    while (ui.topicFilter.options.length > 1) ui.topicFilter.remove(1);
    const label = language === "en" ? "All topics" : "Tất cả chủ đề";
    ui.topicFilter.options[0].textContent = label;
    const topics = [];
    const seen = new Set();
    questions.forEach(q => {
      if (!seen.has(q.topic.en)) { seen.add(q.topic.en); topics.push(q.topic); }
    });
    topics.forEach(topic => {
      const option = document.createElement("option");
      option.value = topic.en;
      option.textContent = language === "en" ? topic.en : topic.vi;
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
      if (!runtimeReady) ui.runtimeText.textContent = language === "en" ? "Loading Python…" : "Đang tải Python…";
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
      toast(language === "en" ? "Starter code restored" : "Đã khôi phục code mẫu");
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
