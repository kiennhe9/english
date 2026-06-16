/**
 * LingoGrammar - Application Logic (script.js)
 * Contains: shuffle, state management, navigation, quiz engine, grading, UI, modal, bootstrap
 * Reads curriculum data from window.UNITS_REGISTRY (populated by data/unitX.js files)
 */

// ==========================================================================
// 0. BUILD COMBINED DATA FROM UNIT REGISTRY
// ==========================================================================

let LESSONS_DATA = {};
let QUESTION_BANK = [];
let activeUnitId = "";
let activeLessonKey = "";

function buildFromRegistry() {
  const registry = window.UNITS_REGISTRY || {};
  const units = Object.values(registry);
  LESSONS_DATA = {};
  QUESTION_BANK = [];

  units.forEach(unit => {
    // Merge lessons with qualified keys
    for (const [lessonKey, lessonValue] of Object.entries(unit.lessons)) {
      const qualifiedKey = `${unit.unitId}_${lessonKey}`;
      LESSONS_DATA[qualifiedKey] = lessonValue;
    }
    // Generate & merge questions
    if (typeof unit.generateQuestions === "function") {
      const questions = unit.generateQuestions(shuffle);
      questions.forEach(q => {
        q.lessonId = `${unit.unitId}_${q.lessonId}`;
      });
      QUESTION_BANK = QUESTION_BANK.concat(questions);
    }
  });

  console.log(`LingoGrammar Synchronized. Units loaded: ${units.length}. Question bank size: ${QUESTION_BANK.length} questions.`);
}

function getActiveUnit() {
  const registry = window.UNITS_REGISTRY || {};
  const units = Object.values(registry);
  return units.find(u => u.unitId === activeUnitId) || units[0] || null;
}

// Helper to shuffle array
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

// ==========================================================================
// 3. APPLICATION STATE & LOCAL STORAGE
// ==========================================================================

const DEFAULT_STATE = {
  completedLessons: [] // Completed lesson IDs like "unit1_1-1", "unit1_1-2"
};

let appState = { ...DEFAULT_STATE };

function loadState() {
  const saved = localStorage.getItem("lingo_grammar_academic_state");
  if (saved) {
    try {
      appState = JSON.parse(saved);
      if (!appState.completedLessons) appState.completedLessons = [];
    } catch (e) {
      console.error("Failed to parse saved state, resetting", e);
      appState = { ...DEFAULT_STATE };
    }
  } else {
    appState = { ...DEFAULT_STATE };
  }
  updateProgressUI();
}

// Save state to Local Storage
function saveState() {
  localStorage.setItem("lingo_grammar_academic_state", JSON.stringify(appState));
  updateProgressUI();
}

function resetProgress() {
  showCustomConfirm("Bạn có chắc chắn muốn xóa toàn bộ tiến trình học tập không? Tất cả bài học hoàn thành sẽ được đặt lại.", () => {
    appState = { completedLessons: [] };
    saveState();
    switchScreen("screen-lesson");
    const activeUnit = getActiveUnit();
    if (activeUnit) {
      const firstLessonKey = Object.keys(activeUnit.lessons)[0];
      activeLessonKey = `${activeUnit.unitId}_${firstLessonKey}`;
      renderSidebarNavigation();
      loadLesson(activeLessonKey);
    }
  });
}

function updateProgressUI() {
  const activeUnit = getActiveUnit();
  if (!activeUnit) return;

  const activeUnitId = activeUnit.unitId;
  const lessonKeys = Object.keys(activeUnit.lessons);
  const total = lessonKeys.length;
  const completed = lessonKeys.filter(k => appState.completedLessons.includes(`${activeUnitId}_${k}`)).length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  document.getElementById("progress-percent").textContent = `${percent}%`;
  document.getElementById("progress-fill-bar").style.width = `${percent}%`;

  const progressText = document.getElementById("progress-text-summary");
  if (completed === 0) {
    progressText.textContent = "Chưa hoàn thành bài nào";
  } else {
    progressText.textContent = `Đã hoàn thành ${completed}/${total} bài học`;
  }

  // Set visual checkmarks on sidebar buttons
  lessonKeys.forEach(k => {
    const indicator = document.getElementById(`status-${activeUnitId}_${k}`);
    if (indicator) {
      if (appState.completedLessons.includes(`${activeUnitId}_${k}`)) {
        indicator.className = "status-indicator completed";
      } else {
        indicator.className = "status-indicator";
      }
    }
  });
}

// ==========================================================================
// 4. ROUTER & LESSON RENDERER
// ==========================================================================

function initNavigation() {
  // Populate Unit Selector dropdown
  const registry = window.UNITS_REGISTRY || {};
  const units = Object.values(registry);
  const unitSelect = document.getElementById("unit-select");
  unitSelect.innerHTML = "";
  
  units.forEach(unit => {
    const option = document.createElement("option");
    option.value = unit.unitId;
    option.textContent = unit.title;
    unitSelect.appendChild(option);
  });

  // Handle Unit Selection Change
  unitSelect.addEventListener("change", (e) => {
    activeUnitId = e.target.value;
    const activeUnit = getActiveUnit();
    if (activeUnit) {
      const firstLessonKey = Object.keys(activeUnit.lessons)[0];
      activeLessonKey = `${activeUnit.unitId}_${firstLessonKey}`;
      renderSidebarNavigation();
      loadLesson(activeLessonKey);
      updateProgressUI();
    }
  });

  // Dark/Light Mode switch
  const themeToggle = document.getElementById("btn-theme-toggle");
  const themeText = document.getElementById("theme-text");

  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-mode");
    if (isDark) {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      themeText.textContent = "Chế độ tối";
      localStorage.setItem("lingo_grammar_theme", "light");
    } else {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      themeText.textContent = "Chế độ sáng";
      localStorage.setItem("lingo_grammar_theme", "dark");
    }
  });

  const savedTheme = localStorage.getItem("lingo_grammar_theme") || "light";
  if (savedTheme === "dark") {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    themeText.textContent = "Chế độ sáng";
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    themeText.textContent = "Chế độ tối";
  }

  document.getElementById("btn-reset-progress").addEventListener("click", resetProgress);
}

function renderSidebarNavigation() {
  const activeUnit = getActiveUnit();
  if (!activeUnit) return;

  const navMenu = document.getElementById("nav-menu-container");
  navMenu.innerHTML = "";

  // Group lessons by chapter
  const chapters = {};
  for (const [lessonKey, lesson] of Object.entries(activeUnit.lessons)) {
    const chapterName = lesson.chapter || "Chương khác";
    if (!chapters[chapterName]) {
      chapters[chapterName] = [];
    }
    chapters[chapterName].push({ key: lessonKey, lesson });
  }

  // Render chapters and lessons
  for (const [chapterName, items] of Object.entries(chapters)) {
    const groupDiv = document.createElement("div");
    groupDiv.className = "menu-group";

    const headerDiv = document.createElement("div");
    headerDiv.className = "menu-group-header";
    headerDiv.textContent = chapterName;
    groupDiv.appendChild(headerDiv);

    const itemsDiv = document.createElement("div");
    itemsDiv.className = "menu-group-items";

    items.forEach(item => {
      const btn = document.createElement("button");
      btn.className = "nav-btn";
      if (`${activeUnit.unitId}_${item.key}` === activeLessonKey) {
        btn.classList.add("active");
      }
      btn.setAttribute("data-target", "lesson");
      btn.setAttribute("data-lesson-id", `${activeUnit.unitId}_${item.key}`);

      const indicator = document.createElement("span");
      indicator.className = "status-indicator";
      indicator.id = `status-${activeUnit.unitId}_${item.key}`;

      const text = document.createElement("span");
      text.className = "nav-btn-text";
      text.textContent = item.lesson.shortTitle || item.lesson.title;

      btn.appendChild(indicator);
      btn.appendChild(text);
      
      btn.addEventListener("click", () => {
        document.querySelectorAll(".nav-menu .nav-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeLessonKey = `${activeUnit.unitId}_${item.key}`;
        switchScreen("screen-lesson");
        loadLesson(activeLessonKey);
      });

      itemsDiv.appendChild(btn);
    });

    groupDiv.appendChild(itemsDiv);
    navMenu.appendChild(groupDiv);
  }

  // Append Comprehensive Test button
  const testGroup = document.createElement("div");
  testGroup.className = "menu-group";

  const testHeader = document.createElement("div");
  testHeader.className = "menu-group-header";
  testHeader.textContent = "Kiểm tra & Đánh giá";
  testGroup.appendChild(testHeader);

  const testItems = document.createElement("div");
  testItems.className = "menu-group-items";

  const testBtn = document.createElement("button");
  testBtn.className = "nav-btn";
  if (activeLessonKey === "test-setup") {
    testBtn.classList.add("active");
  }
  testBtn.id = "btn-nav-test-setup";
  testBtn.setAttribute("data-target", "test-setup");

  const testIndicator = document.createElement("span");
  testIndicator.className = "status-indicator test-icon";
  testIndicator.textContent = "📝";

  const testText = document.createElement("span");
  testText.className = "nav-btn-text font-bold";
  testText.textContent = "Kiểm tra tổng hợp";

  testBtn.appendChild(testIndicator);
  testBtn.appendChild(testText);

  testBtn.addEventListener("click", () => {
    document.querySelectorAll(".nav-menu .nav-btn").forEach(b => b.classList.remove("active"));
    testBtn.classList.add("active");
    switchScreen("screen-test-setup");
  });

  testItems.appendChild(testBtn);
  testGroup.appendChild(testItems);
  navMenu.appendChild(testGroup);
}

function switchScreen(screenId) {
  document.querySelectorAll(".app-screen").forEach(s => s.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");

  const container = document.querySelector(`#${screenId} .scroll-container`);
  if (container) {
    container.scrollTop = 0;
  }

  if (screenId === "screen-test-setup") {
    updateTestSetupUI();
  }
}

function updateTestSetupUI() {
  const activeUnit = getActiveUnit();
  if (!activeUnit) return;

  const pathEl = document.getElementById("test-setup-path");
  const descEl = document.getElementById("test-setup-desc");
  const rulesEl = document.getElementById("test-setup-rules");

  const registry = window.UNITS_REGISTRY[activeUnit.unitId] || {};
  const rulesMap = registry.rules || {};
  const rulesList = Object.keys(rulesMap);

  if (activeUnit.unitId === "unit1") {
    if (pathEl) pathEl.textContent = "Unit 1 / Kiểm tra tổng hợp";
    if (descEl) {
      descEl.textContent = "Bài kiểm tra sẽ lấy ngẫu nhiên các câu hỏi trong ngân hàng 300+ câu hỏi thuộc cả hai thì Present Simple và Present Continuous. Hệ thống sẽ thống kê chi tiết tỷ lệ làm đúng trên từng quy tắc ngữ pháp để chẩn đoán điểm mạnh/yếu của bạn.";
    }
  } else if (activeUnit.unitId === "unit2") {
    if (pathEl) pathEl.textContent = "Unit 2 / Kiểm tra tổng hợp";
    if (descEl) {
      descEl.textContent = "Bài kiểm tra sẽ lấy ngẫu nhiên các câu hỏi trong ngân hàng 300+ câu hỏi thuộc cả hai thì Present Perfect và Past Simple. Hệ thống sẽ thống kê chi tiết tỷ lệ làm đúng trên từng quy tắc ngữ pháp để chẩn đoán điểm mạnh/yếu của bạn.";
    }
  } else if (activeUnit.unitId === "unit3") {
    if (pathEl) pathEl.textContent = "Unit 3 / Kiểm tra tổng hợp";
    if (descEl) {
      descEl.textContent = "Bài kiểm tra sẽ lấy ngẫu nhiên các câu hỏi trong ngân hàng 300+ câu hỏi thuộc cả hai thì Past Continuous và Past Perfect. Hệ thống sẽ thống kê chi tiết tỷ lệ làm đúng trên từng quy tắc ngữ pháp để chẩn đoán điểm mạnh/yếu của bạn.";
    }
  } else if (activeUnit.unitId === "unit4") {
    if (pathEl) pathEl.textContent = "Unit 4 / Kiểm tra tổng hợp";
    if (descEl) {
      descEl.textContent = "Bài kiểm tra sẽ lấy ngẫu nhiên các câu hỏi trong ngân hàng 300+ câu hỏi thuộc hai thì Tương lai gần (be going to) và Tương lai đơn (will). Hệ thống sẽ thống kê chi tiết tỷ lệ làm đúng trên từng quy tắc ngữ pháp để chẩn đoán điểm mạnh/yếu của bạn.";
    }
  } else if (activeUnit.unitId === "unit5") {
    if (pathEl) pathEl.textContent = "Unit 5 / Kiểm tra tổng hợp";
    if (descEl) {
      descEl.textContent = "Bài kiểm tra sẽ lấy ngẫu nhiên các câu hỏi trong ngân hàng 280+ câu hỏi thuộc hai thì Tương lai tiếp diễn (Future Continuous) và Tương lai hoàn thành (Future Perfect). Hệ thống sẽ thống kê chi tiết tỷ lệ làm đúng trên từng quy tắc ngữ pháp để chẩn đoán điểm mạnh/yếu của bạn.";
    }
  } else {
    if (pathEl) pathEl.textContent = `${activeUnit.title} / Kiểm tra tổng hợp`;
    if (descEl) {
      descEl.textContent = "Bài kiểm tra sẽ lấy ngẫu nhiên các câu hỏi thuộc chương này để thống kê tỷ lệ làm đúng trên từng quy tắc ngữ pháp.";
    }
  }

  if (rulesEl) {
    rulesEl.innerHTML = "";
    rulesList.forEach(r => {
      const li = document.createElement("li");
      li.innerHTML = `<code>${r}</code> - ${rulesMap[r]}`;
      rulesEl.appendChild(li);
    });
  }
}

function loadLesson(key) {
  const data = LESSONS_DATA[key];
  if (!data) return;

  document.getElementById("lesson-chapter-title").textContent = `${data.chapter} / Bài ${data.lessonNum}`;
  document.getElementById("lesson-title").textContent = data.title;
  document.getElementById("lesson-explanation").innerHTML = data.explanation;
  document.getElementById("lesson-common-errors").innerHTML = data.commonErrors;
  document.getElementById("lesson-tips").innerHTML = data.tips;

  // Sentence component analysis
  const container = document.getElementById("lesson-examples");
  container.innerHTML = "";

  data.examples.forEach(ex => {
    const item = document.createElement("div");
    item.className = "example-item";

    const sentenceDiv = document.createElement("div");
    sentenceDiv.className = "sentence-analysis";

    ex.tokens.forEach(tok => {
      const tokenSpan = document.createElement("div");
      tokenSpan.className = `word-token role-${tok.role}`;
      tokenSpan.title = tok.label;

      const wordSpan = document.createElement("span");
      wordSpan.className = "word-text";
      wordSpan.textContent = tok.text;

      const labelSpan = document.createElement("span");
      labelSpan.className = "word-label";
      labelSpan.textContent = tok.label;

      tokenSpan.appendChild(wordSpan);
      tokenSpan.appendChild(labelSpan);
      sentenceDiv.appendChild(tokenSpan);
    });

    item.appendChild(sentenceDiv);

    const trans = document.createElement("div");
    trans.className = "example-translation";
    trans.textContent = ` dịch nghĩa: "${ex.viet}"`;
    item.appendChild(trans);

    const note = document.createElement("div");
    note.className = "example-note";
    note.innerHTML = `<strong>Phân tích thành phần:</strong> ${ex.note}`;
    item.appendChild(note);

    container.appendChild(item);
  });

  updateIrregularPracticePanel(data);

  // Custom initialization for Lesson 16: Irregular Verbs search tool
  if (key === "unit2_2-16") {
    initIrregularVerbsSearch();
  }
}

function initIrregularVerbsSearch() {
  const searchInput = document.getElementById("verb-search-input");
  const tableBody = document.getElementById("verbs-table-body");
  const countEl = document.getElementById("verbs-count");
  const verbs = window.COMPREHENSIVE_IRREGULAR_VERBS || [];

  if (!searchInput || !tableBody) return;

  function renderTable(filterText) {
    const query = filterText.toLowerCase().trim();
    tableBody.innerHTML = "";
    
    let filtered = verbs;
    if (query !== "") {
      filtered = verbs.filter(v => 
        v.v1.toLowerCase().includes(query) ||
        v.v2.toLowerCase().includes(query) ||
        v.v3.toLowerCase().includes(query) ||
        v.meaning.toLowerCase().includes(query)
      );
    }

    if (countEl) {
      countEl.textContent = `Hiển thị ${filtered.length} / ${verbs.length} động từ`;
    }

    if (filtered.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 20px; color: var(--text-muted);">Không tìm thấy động từ nào khớp với từ khóa "${filterText}"</td></tr>`;
      return;
    }

    filtered.forEach(v => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td style="padding: 12px;"><strong style="color: var(--primary-color);">${v.v1}</strong></td>
        <td style="padding: 12px;"><strong style="color: var(--secondary-color);">${v.v2}</strong></td>
        <td style="padding: 12px;"><strong style="color: var(--accent-gradient-end, #ef4444);">${v.v3}</strong></td>
        <td style="padding: 12px;">${v.meaning}</td>
      `;
      tableBody.appendChild(row);
    });
  }

  searchInput.addEventListener("input", (e) => {
    renderTable(e.target.value);
  });

  // Initial render
  renderTable("");
}

// ==========================================================================
// 5. INTERACTIVE QUIZ ENGINE
// ==========================================================================

let activeQuiz = {
  questions: [],
  currentIndex: 0,
  isTestingComprehensive: false,
  userAnswers: [],
  selectedOption: null,
  fillValue: "",
  isAnswered: false
};

let activeIrregularPracticeLevel = "easy";

const IRREGULAR_PRACTICE_LEVELS = {
  easy: { label: "Dễ", limit: 40, description: "40 câu nhóm động từ rất thường gặp." },
  medium: { label: "Trung bình", limit: 50, description: "50 câu nhóm động từ phổ biến nhưng dễ nhầm." },
  hard: { label: "Khó", limit: 60, description: "60 câu nhóm động từ ít gặp hơn." },
  all: { label: "Tổng hợp", limit: null, description: "Toàn bộ câu hỏi Bài 16." }
};

function isIrregularVerbLesson(lesson, activeUnit) {
  return activeUnit && activeUnit.unitId === "unit2" && lesson && lesson.lessonNum === 16;
}

function getIrregularLevelPool(pool, level) {
  if (level === "all") return pool;
  const levelPool = pool.filter(q => q.practiceLevel === level);
  const limit = IRREGULAR_PRACTICE_LEVELS[level].limit;
  return shuffle([...levelPool]).slice(0, limit);
}

function updateIrregularPracticePanel(lesson) {
  const activeUnit = getActiveUnit();
  const panel = document.getElementById("practice-level-panel");
  const countEl = document.getElementById("practice-level-count");
  if (!panel || !countEl) return;

  if (!isIrregularVerbLesson(lesson, activeUnit)) {
    panel.hidden = true;
    return;
  }

  const targetLessonId = `${activeUnit.unitId}_${lesson.lessonNum}`;
  const pool = QUESTION_BANK.filter(q => q.lessonId === targetLessonId);
  const selectedPool = getIrregularLevelPool(pool, activeIrregularPracticeLevel);
  const levelConfig = IRREGULAR_PRACTICE_LEVELS[activeIrregularPracticeLevel];

  panel.hidden = false;
  countEl.textContent = `${levelConfig.description} Sẵn sàng luyện ${selectedPool.length} câu.`;

  document.querySelectorAll(".practice-level-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.level === activeIrregularPracticeLevel);
  });
}

function initQuizActions() {
  document.querySelectorAll(".practice-level-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeIrregularPracticeLevel = btn.dataset.level || "easy";
      const lesson = LESSONS_DATA[activeLessonKey];
      updateIrregularPracticePanel(lesson);
    });
  });

  document.getElementById("btn-start-practice").addEventListener("click", () => {
    const activeUnit = getActiveUnit();
    if (!activeUnit) return;
    const lesson = LESSONS_DATA[activeLessonKey];
    if (!lesson) return;
    const targetLessonId = `${activeUnit.unitId}_${lesson.lessonNum}`;
    let pool = QUESTION_BANK.filter(q => q.lessonId === targetLessonId);
    let title = `Luyện tập: Bài ${lesson.lessonNum}`;

    if (isIrregularVerbLesson(lesson, activeUnit)) {
      pool = getIrregularLevelPool(pool, activeIrregularPracticeLevel);
      const levelLabel = IRREGULAR_PRACTICE_LEVELS[activeIrregularPracticeLevel].label;
      title = `Luyện tập: Bài ${lesson.lessonNum} - Mức ${levelLabel} (${pool.length} câu)`;
    }

    startQuiz(pool, title, false);
  });

  document.getElementById("btn-start-test").addEventListener("click", () => {
    const activeUnit = getActiveUnit();
    if (!activeUnit) return;
    const qtyRadio = document.querySelector('input[name="test-questions"]:checked');
    const count = parseInt(qtyRadio ? qtyRadio.value : 30);
    // Filter questions belonging to the active unit
    const unitQuestions = QUESTION_BANK.filter(q => q.lessonId.startsWith(`${activeUnit.unitId}_`));
    const testPool = shuffle([...unitQuestions]).slice(0, count);
    startQuiz(testPool, `Kiểm tra tổng hợp (${count} câu)`, true);
  });

  document.getElementById("btn-quiz-skip").addEventListener("click", () => {
    recordAnswer(null, false);
    showFeedback(false, "Đã bỏ qua câu hỏi!");
  });

  document.getElementById("btn-quiz-action").addEventListener("click", () => {
    const actionBtn = document.getElementById("btn-quiz-action");
    if (actionBtn.textContent === "Kiểm tra") {
      gradeAnswer();
    } else {
      nextQuestion();
    }
  });

  document.getElementById("btn-exit-quiz").addEventListener("click", () => {
    showCustomConfirm("Bạn có chắc chắn muốn thoát khỏi bài luyện tập này? Tiến trình làm bài sẽ không được lưu.", () => {
      if (activeQuiz.isTestingComprehensive) {
        switchScreen("screen-test-setup");
      } else {
        switchScreen("screen-lesson");
      }
    });
  });

  document.getElementById("btn-result-retry").addEventListener("click", () => {
    switchScreen("screen-test-setup");
  });

  document.getElementById("btn-result-back-home").addEventListener("click", () => {
    switchScreen("screen-lesson");
    const firstBtn = document.querySelector('.nav-menu .nav-btn[data-target="lesson"]');
    if (firstBtn) firstBtn.click();
  });
}

function startQuiz(questionsPool, title, isComprehensive = false) {
  activeQuiz.questions = shuffle([...questionsPool]);
  activeQuiz.currentIndex = 0;
  activeQuiz.isTestingComprehensive = isComprehensive;
  activeQuiz.userAnswers = [];
  activeQuiz.selectedOption = null;
  activeQuiz.fillValue = "";
  activeQuiz.isAnswered = false;

  document.getElementById("quiz-title-display").textContent = title;

  const feedback = document.getElementById("feedback-panel");
  feedback.classList.remove("active", "correct-state", "incorrect-state");

  switchScreen("screen-quiz");
  loadQuizQuestion();
}

function loadQuizQuestion() {
  const q = activeQuiz.questions[activeQuiz.currentIndex];
  const total = activeQuiz.questions.length;

  document.getElementById("quiz-question-counter").textContent = `Câu ${activeQuiz.currentIndex + 1}/${total}`;
  const progressPct = Math.round((activeQuiz.currentIndex / total) * 100);
  document.getElementById("quiz-progress-fill-bar").style.width = `${progressPct}%`;

  const feedback = document.getElementById("feedback-panel");
  feedback.classList.remove("active", "correct-state", "incorrect-state");

  activeQuiz.selectedOption = null;
  activeQuiz.fillValue = "";
  activeQuiz.isAnswered = false;

  const actionBtn = document.getElementById("btn-quiz-action");
  actionBtn.textContent = "Kiểm tra";
  actionBtn.setAttribute("disabled", "true");

  document.getElementById("btn-quiz-skip").style.display = "inline-flex";

  const textHolder = document.getElementById("quiz-question-text");
  if (q.type === "sort") {
    textHolder.innerHTML = q.question;
  } else {
    textHolder.innerHTML = q.question.replace("________", `<span class="blank" id="quiz-blank-placeholder">&nbsp;</span>`);
  }

  const inputArea = document.getElementById("quiz-input-area");
  inputArea.innerHTML = "";

  if (q.type === "choice") {
    // Converted to text input (fill) for better learning
    const container = document.createElement("div");
    container.className = "fill-input-container";

    const input = document.createElement("input");
    input.type = "text";
    input.className = "quiz-fill-input";
    input.placeholder = "Nhập đáp án đúng...";
    input.autocomplete = "off";

    input.addEventListener("input", () => {
      activeQuiz.fillValue = input.value.trim();

      const blank = document.getElementById("quiz-blank-placeholder");
      if (blank) {
        blank.textContent = activeQuiz.fillValue !== "" ? activeQuiz.fillValue : "\u00A0";
      }

      if (activeQuiz.fillValue.length > 0) {
        actionBtn.removeAttribute("disabled");
      } else {
        actionBtn.setAttribute("disabled", "true");
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && activeQuiz.fillValue.length > 0) {
        e.preventDefault();
        e.stopPropagation();
        if (actionBtn.textContent === "Kiểm tra") {
          gradeAnswer();
        }
      }
    });

    container.appendChild(input);
    inputArea.appendChild(container);
    input.focus();
  } else if (q.type === "sort") {
    activeQuiz.sortSelectedWords = [];
    activeQuiz.sortWordsPool = q.words.map((w, idx) => ({ id: idx, word: w, used: false }));
    
    // Shuffle the pool
    activeQuiz.sortWordsPool = shuffle([...activeQuiz.sortWordsPool]);

    const container = document.createElement("div");
    container.className = "sort-question-container";

    const answerContainer = document.createElement("div");
    answerContainer.className = "sort-answer-container";

    const poolContainer = document.createElement("div");
    poolContainer.className = "sort-words-pool";

    container.appendChild(answerContainer);
    container.appendChild(poolContainer);
    inputArea.appendChild(container);

    function renderSortUI() {
      answerContainer.innerHTML = "";
      if (activeQuiz.sortSelectedWords.length === 0) {
        const placeholder = document.createElement("span");
        placeholder.className = "sort-placeholder";
        placeholder.textContent = "Nhấp vào các từ để ghép thành câu...";
        answerContainer.appendChild(placeholder);
      } else {
        activeQuiz.sortSelectedWords.forEach((wordObj, idx) => {
          const wordBtn = document.createElement("button");
          wordBtn.className = "sort-word-btn active-word";
          wordBtn.textContent = wordObj.word;
          wordBtn.addEventListener("click", () => {
            activeQuiz.sortSelectedWords.splice(idx, 1);
            const poolItem = activeQuiz.sortWordsPool.find(item => item.id === wordObj.id);
            if (poolItem) poolItem.used = false;
            renderSortUI();
          });
          answerContainer.appendChild(wordBtn);
        });
      }

      poolContainer.innerHTML = "";
      activeQuiz.sortWordsPool.forEach(item => {
        const wordBtn = document.createElement("button");
        wordBtn.className = "sort-word-btn";
        wordBtn.textContent = item.word;
        if (item.used) {
          wordBtn.classList.add("used");
          wordBtn.setAttribute("disabled", "true");
        } else {
          wordBtn.addEventListener("click", () => {
            activeQuiz.sortSelectedWords.push(item);
            item.used = true;
            renderSortUI();
          });
        }
        poolContainer.appendChild(wordBtn);
      });

      if (activeQuiz.sortSelectedWords.length > 0) {
        actionBtn.removeAttribute("disabled");
      } else {
        actionBtn.setAttribute("disabled", "true");
      }
    }

    renderSortUI();
  } else {
    const container = document.createElement("div");
    container.className = "fill-input-container";

    const input = document.createElement("input");
    input.type = "text";
    input.className = "quiz-fill-input";
    input.placeholder = "Nhập đáp án đúng...";
    input.autocomplete = "off";

    input.addEventListener("input", () => {
      activeQuiz.fillValue = input.value.trim();

      const blank = document.getElementById("quiz-blank-placeholder");
      if (blank) {
        blank.textContent = activeQuiz.fillValue !== "" ? activeQuiz.fillValue : "\u00A0";
      }

      if (activeQuiz.fillValue.length > 0) {
        actionBtn.removeAttribute("disabled");
      } else {
        actionBtn.setAttribute("disabled", "true");
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && activeQuiz.fillValue.length > 0) {
        e.preventDefault();
        e.stopPropagation();
        if (actionBtn.textContent === "Kiểm tra") {
          gradeAnswer();
        }
      }
    });

    container.appendChild(input);
    inputArea.appendChild(container);
    input.focus();
  }
}

function gradeAnswer() {
  if (activeQuiz.isAnswered) return;

  const q = activeQuiz.questions[activeQuiz.currentIndex];
  let isCorrect = false;
  let userAns = "";

  if (q.type === "sort") {
    // Sort uses word arrangement UI
    userAns = activeQuiz.sortSelectedWords.map(w => w.word).join(" ");
    const normalizedUser = userAns.toLowerCase().replace(/['']/g, "'").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").replace(/\s+/g, " ").trim();
    const normalizedTarget = q.answer.toLowerCase().replace(/['']/g, "'").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").replace(/\s+/g, " ").trim();
    isCorrect = (normalizedUser === normalizedTarget);

    recordAnswer(userAns, isCorrect);
    showFeedback(isCorrect, isCorrect ? "Chính xác! Làm rất tốt." : "Chưa chính xác!", userAns);
    return;
  }

  // Choice and fill both use text input
  userAns = activeQuiz.fillValue;

  const normalizedUser = userAns.toLowerCase().replace(/['']/g, "'").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").replace(/\s+/g, " ").trim();
  const normalizedTarget = q.answer.toLowerCase().replace(/['']/g, "'").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").replace(/\s+/g, " ").trim();

  // Contraction alignments - accept both contracted and expanded forms
  const contractions = [
    ["doesn't", "does not"],
    ["don't", "do not"],
    ["isn't", "is not"],
    ["aren't", "are not"],
    ["haven't", "have not"],
    ["hasn't", "has not"],
    ["didn't", "did not"],
    ["wasn't", "was not"],
    ["weren't", "were not"],
    ["won't", "will not"],
    ["can't", "cannot"],
    ["couldn't", "could not"],
    ["shouldn't", "should not"],
    ["wouldn't", "would not"]
  ];

  isCorrect = (normalizedUser === normalizedTarget);

  if (!isCorrect) {
    for (const [short, long] of contractions) {
      if (normalizedTarget.includes(short) || normalizedTarget.includes(long)) {
        const altTarget = normalizedTarget.includes(short)
          ? normalizedTarget.replace(short, long)
          : normalizedTarget.replace(long, short);
        if (normalizedUser === altTarget) {
          isCorrect = true;
          break;
        }
      }
    }
  }

  recordAnswer(userAns, isCorrect);
  showFeedback(isCorrect, isCorrect ? "Chính xác! Làm rất tốt." : "Chưa chính xác!", userAns);
}

function recordAnswer(userAns, isCorrect) {
  const q = activeQuiz.questions[activeQuiz.currentIndex];
  activeQuiz.userAnswers.push({
    questionId: q.id,
    questionText: q.question,
    userInput: userAns ? userAns : "[Bỏ qua]",
    correctAnswer: q.answer,
    isCorrect: isCorrect,
    rule: q.rule,
    explanation: q.explanation
  });
}

function showFeedback(isCorrect, statusTitle, userAns) {
  activeQuiz.isAnswered = true;

  const q = activeQuiz.questions[activeQuiz.currentIndex];
  const feedback = document.getElementById("feedback-panel");
  feedback.classList.remove("active", "correct-state", "incorrect-state");

  feedback.classList.add("active", isCorrect ? "correct-state" : "incorrect-state");

  document.getElementById("feedback-title").textContent = statusTitle;

  const ruleTag = document.getElementById("feedback-rule-tag");
  ruleTag.textContent = `Quy tắc vi phạm: ${q.rule}`;
  ruleTag.style.display = isCorrect ? "none" : "inline-block";

  const blank = document.getElementById("quiz-blank-placeholder");
  if (blank) {
    blank.textContent = q.answer;
    blank.className = isCorrect ? "blank correct-blank" : "blank incorrect-blank";
  }

  let correctSentenceText = "";
  if (q.type === "sort") {
    correctSentenceText = q.answer;
  } else {
    correctSentenceText = q.question.replace("________", q.answer);
  }

  const correctSentenceEl = document.getElementById("feedback-correct-sentence");
  if (isCorrect) {
    correctSentenceEl.innerHTML = `<span style="font-weight: normal; font-size: 13px; color: var(--success-color); display: block; margin-bottom: 4px;">Câu trả lời chính xác:</span>${correctSentenceText}`;
  } else {
    const formattedUserAns = userAns ? userAns.trim() : "[Bỏ trống]";
    correctSentenceEl.innerHTML = `
      <div style="margin-bottom: 8px;">
        <span style="font-weight: normal; font-size: 13px; color: var(--text-muted); display: block;">Câu trả lời của bạn:</span>
        <span style="color: var(--error-color); font-weight: 600; text-decoration: line-through;">${formattedUserAns}</span>
      </div>
      <div>
        <span style="font-weight: normal; font-size: 13px; color: var(--text-muted); display: block;">Đáp án đúng:</span>
        <span style="color: var(--success-color); font-weight: 800; font-size: 19px;">${q.answer}</span>
      </div>
      <div style="margin-top: 8px; font-size: 14.5px; color: var(--text-main); font-weight: normal; border-top: 1px dashed var(--border-color); padding-top: 8px;">
        <strong>Câu hoàn chỉnh:</strong> ${correctSentenceText}
      </div>
    `;
  }
  
  const transEl = document.getElementById("feedback-translation");
  if (transEl) {
    if (q.translation) {
      transEl.textContent = `Dịch nghĩa: "${q.translation}"`;
      transEl.style.display = "block";
    } else {
      transEl.style.display = "none";
    }
  }

  document.getElementById("feedback-explanation").textContent = q.explanation;

  document.getElementById("btn-quiz-skip").style.display = "none";

  const actionBtn = document.getElementById("btn-quiz-action");
  actionBtn.textContent = "Tiếp tục";
  actionBtn.removeAttribute("disabled");
}

function nextQuestion() {
  activeQuiz.currentIndex++;
  if (activeQuiz.currentIndex < activeQuiz.questions.length) {
    loadQuizQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  if (activeQuiz.isTestingComprehensive) {
    showTestResults();
  } else {
    const key = activeLessonKey;
    if (!appState.completedLessons.includes(key)) {
      appState.completedLessons.push(key);
      saveState();
    }

    const correctCount = activeQuiz.userAnswers.filter(a => a.isCorrect).length;
    const total = activeQuiz.questions.length;
    alert(`Chúc mừng! Bạn đã hoàn thành bài luyện tập với số điểm ${correctCount}/${total} câu chính xác.`);
    switchScreen("screen-lesson");
    loadLesson(activeLessonKey);
  }
}

// ==========================================================================
// 6. COMPREHENSIVE TEST RESULT DIAGNOSTICS
// ==========================================================================

function showTestResults() {
  const answers = activeQuiz.userAnswers;
  const total = answers.length;
  const correctCount = answers.filter(a => a.isCorrect).length;
  const percent = Math.round((correctCount / total) * 100);

  document.getElementById("result-score").textContent = `${correctCount}/${total}`;
  document.getElementById("result-percent").textContent = `${percent}%`;

  const msg = document.getElementById("result-message");
  const details = document.getElementById("result-stat-details");

  if (percent >= 90) {
    msg.textContent = "Xuất sắc! Bạn đã làm chủ ngữ pháp.";
    details.textContent = `Bạn đã trả lời đúng ${correctCount} câu hỏi và chỉ sai ${total - correctCount} câu.`;
  } else if (percent >= 70) {
    msg.textContent = "Khá tốt! Hãy củng cố thêm các phần bị sai.";
    details.textContent = `Bạn đã trả lời đúng ${correctCount} câu hỏi và sai ${total - correctCount} câu.`;
  } else {
    msg.textContent = "Bạn cần cố gắng nhiều hơn!";
    details.textContent = `Bạn trả lời đúng ${correctCount}/${total} câu. Hãy đọc kỹ phần chẩn đoán lỗi dưới đây.`;
  }

  const activeUnit = getActiveUnit();
  const activeRegistry = window.UNITS_REGISTRY[activeUnit.unitId] || {};
  const rulesMap = activeRegistry.rules || {};
  const rulesList = Object.keys(rulesMap).length > 0 ? Object.keys(rulesMap) : ["am/is/are", "do/does", "don't/doesn't", "have/has", "s/es", "V-ing"];

  // Dynamically render diagnostic bars
  const barsContainer = document.getElementById("diagnostic-bars-container");
  if (barsContainer) {
    barsContainer.innerHTML = "";
    rulesList.forEach(r => {
      const keyId = r.replace("/", "_").replace("'", "");
      const ruleName = rulesMap[r] || r;
      const barItem = document.createElement("div");
      barItem.className = "diag-bar-item";
      barItem.innerHTML = `
        <div class="diag-meta">
          <span class="diag-name">${r} (${ruleName})</span>
          <span class="diag-score" id="diag-score-${keyId}">0/0 (0%)</span>
        </div>
        <div class="diag-track">
          <div class="diag-fill" id="diag-fill-${keyId}" style="width: 0%"></div>
        </div>
      `;
      barsContainer.appendChild(barItem);
    });
  }

  const ruleStats = {};
  rulesList.forEach(r => {
    ruleStats[r] = { correct: 0, total: 0 };
  });

  answers.forEach(ans => {
    if (ruleStats[ans.rule]) {
      ruleStats[ans.rule].total++;
      if (ans.isCorrect) {
        ruleStats[ans.rule].correct++;
      }
    }
  });

  let weakestRule = null;
  let lowestPct = 101;

  rulesList.forEach(r => {
    const stats = ruleStats[r];
    const keyId = r.replace("/", "_").replace("'", "");
    const scoreSpan = document.getElementById(`diag-score-${keyId}`);
    const fillBar = document.getElementById(`diag-fill-${keyId}`);

    if (scoreSpan && fillBar) {
      if (stats.total > 0) {
        const pct = Math.round((stats.correct / stats.total) * 100);
        scoreSpan.textContent = `${stats.correct}/${stats.total} (${pct}%)`;
        fillBar.style.width = `${pct}%`;

        fillBar.className = "diag-fill";
        if (pct < 60) {
          fillBar.classList.add("poor");
        } else if (pct < 80) {
          fillBar.classList.add("average");
        } else {
          fillBar.classList.add("good");
        }

        if (pct < lowestPct) {
          lowestPct = pct;
          weakestRule = r;
        }
      } else {
        scoreSpan.textContent = "Không có trong câu hỏi";
        fillBar.style.width = "0%";
        fillBar.className = "diag-fill";
      }
    }
  });

  const recommendation = document.getElementById("academic-recommendation");
  recommendation.innerHTML = "";

  if (percent === 100) {
    recommendation.innerHTML = `
      <p>🎉 <strong>Chúc mừng bạn đạt điểm tối đa!</strong> Bạn đã nắm vững hoàn toàn các quy tắc ngữ pháp cốt lõi. Hãy giữ vững phong độ!</p>
    `;
  } else {
    let recHtml = `<p>Dựa trên kết quả chẩn đoán, bạn nên tập trung vào các khuyến nghị sau:</p><ul>`;

    if (weakestRule) {
      const weakestRuleName = rulesMap[weakestRule] || weakestRule;
      recHtml += `<li>🚨 <strong>Quy tắc cần ưu tiên cải thiện: '${weakestRule}' (${weakestRuleName} - ${lowestPct}%)</strong>`;
      switch (weakestRule) {
        // Unit 1 Rules
        case "am/is/are":
          if (activeUnit.unitId === "unit1") {
            recHtml += `<p>Bạn đang chia nhầm động từ To Be theo chủ ngữ. Hãy đọc kỹ lý thuyết của <strong>Bài 1: Động từ To Be</strong>.</p></li>`;
          } else {
            recHtml += `<p>Bạn chia nhầm động từ To Be quá khứ 'was' và 'were'. Nhớ 'was' đi với chủ ngữ số ít/I, 'were' đi với chủ ngữ số nhiều. Xem lại <strong>Bài 9: Động từ To Be trong quá khứ</strong>.</p></li>`;
          }
          break;
        case "do/does":
          recHtml += `<p>Bạn gặp vấn đề với trợ động từ câu hỏi. Hãy nhớ 'Does' cho số ít, 'Do' cho số nhiều, động từ theo sau phải đưa về nguyên mẫu. Xem lại <strong>Bài 3: Phủ định & Nghi vấn</strong>.</p></li>`;
          break;
        case "don't/doesn't":
          recHtml += `<p>Bạn đang nhầm lẫn khi phủ định động từ thường. Hãy nhớ: 'doesn't' cho số ít, 'don't' cho số nhiều, động từ sau nguyên mẫu. Đọc kỹ <strong>Bài 3: Phủ định & Nghi vấn</strong>.</p></li>`;
          break;
        case "have/has":
          if (activeUnit.unitId === "unit1") {
            recHtml += `<p>Bạn chưa vững dạng bất quy tắc của 'have'. Nhớ 'has' đi với ngôi số ít, 'have' đi với ngôi số nhiều/I. Ôn lại <strong>Bài 2: Động từ thường - Thể khẳng định</strong>.</p></li>`;
          } else {
            recHtml += `<p>Bạn chưa vững cách chia 'have' và 'has' trong Hiện tại hoàn thành. Nhớ 'has' đi với ngôi số ít (he/she/it/Lan), 'have' đi với số nhiều/I/you/we/they. Xem lại <strong>Bài 3: Have và Has</strong>.</p></li>`;
          }
          break;
        case "s/es":
          recHtml += `<p>Bạn chia sai đuôi động từ ở hiện tại đơn số ít. Cần xem kỹ quy tắc đuôi gió (-es) và đổi y thành ies. Xem lại <strong>Bài 2</strong>.</p></li>`;
          break;
        case "V-ing":
          if (activeUnit.unitId === "unit1") {
            recHtml += `<p>Bạn mắc lỗi chính tả khi thêm đuôi -ing hoặc chia nhầm động từ trạng thái (stative verbs) ở dạng tiếp diễn. Hãy xem lại <strong>Bài 6 (Quy tắc spelling)</strong> và <strong>Bài 7 (Động từ trạng thái)</strong>.</p></li>`;
          } else {
            recHtml += `<p>Bạn mắc lỗi chia động từ thêm -ing trong thì Quá khứ tiếp diễn. Ôn lại <strong>Bài 1: Khái niệm & Khẳng định</strong>.</p></li>`;
          }
          break;
        // Unit 2 Rules
        case "V3/ed":
          recHtml += `<p>Bạn đang chia sai dạng phân từ hai (Past Participle - V3) của động từ. Hãy học thuộc bảng động từ bất quy tắc phổ biến và quy tắc thêm -ed. Xem lại <strong>Bài 4: V3 / Past Participle</strong>.</p></li>`;
          break;
        case "was/were":
          if (activeUnit.unitId === "unit2") {
            recHtml += `<p>Bạn chia nhầm động từ To Be quá khứ 'was' và 'were'. Nhớ 'was' đi với chủ ngữ số ít/I, 'were' đi với chủ ngữ số nhiều. Xem lại <strong>Bài 9: Động từ To Be trong quá khứ</strong>.</p></li>`;
          } else {
            recHtml += `<p>Bạn chia nhầm động từ To Be quá khứ 'was' và 'were' trong thì Quá khứ tiếp diễn. Nhớ 'was' đi với chủ ngữ số ít/I, 'were' đi với chủ ngữ số nhiều. Xem lại <strong>Bài 1: Khái niệm & Khẳng định</strong>.</p></li>`;
          }
          break;
        case "did/didn't":
          recHtml += `<p>Bạn chưa nắm vững cách dùng trợ động từ 'did' và 'didn't' trong câu phủ định hoặc nghi vấn của Quá khứ đơn (động từ theo sau phải đưa về nguyên mẫu). Xem lại <strong>Bài 11: Did và Didn't</strong>.</p></li>`;
          break;
        case "V2/ed":
          recHtml += `<p>Bạn chia sai dạng động từ ở quá khứ đơn (V2/ed). Hãy ôn tập lại các động từ bất quy tắc dạng quá khứ đơn. Xem lại <strong>Bài 10: Động từ thường quá khứ đơn</strong>.</p></li>`;
          break;
        // Unit 3 Rules
        case "was/were + V-ing":
          recHtml += `<p>Bạn chưa nắm vững cấu trúc của thì Quá khứ tiếp diễn. Nhớ công thức: <code>S + was/were + V-ing</code>. Ôn lại lý thuyết tại <strong>Bài 1: Khái niệm & Khẳng định</strong> và <strong>Bài 2: Phủ định & Nghi vấn</strong>.</p></li>`;
          break;
        case "had":
          recHtml += `<p>Bạn chia sai trợ động từ hoặc cấu trúc của thì Quá khứ hoàn thành. Trợ động từ của thì này là <code>had</code> dùng cho tất cả chủ ngữ, đi sau là động từ phân từ hai V3. Hãy ôn lại <strong>Bài 5: Khái niệm & Khẳng định</strong> và <strong>Bài 6: Phủ định & Nghi vấn</strong>.</p></li>`;
          break;
        case "when/while":
          recHtml += `<p>Bạn đang nhầm lẫn cách sử dụng liên từ <strong>when</strong> và <strong>while</strong>. Nhớ quy tắc: <code>while</code> thường đi với hành động kéo dài (QKTD), <code>when</code> đi với hành động xen vào (QKĐ). Ôn lại <strong>Bài 4: Liên từ When và While</strong>.</p></li>`;
          break;
        case "before/after":
          recHtml += `<p>Bạn chưa nắm vững trật tự thời gian trước-sau của các liên từ <strong>before, after, by the time</strong>. Nhớ quy tắc: sau before/by the time chia QKĐ, vế chính chia QKHT; sau after chia QKHT, vế còn lại chia QKĐ. Ôn lại <strong>Bài 7: Cách dùng & Dấu hiệu</strong>.</p></li>`;
          break;
        case "past-combo":
          recHtml += `<p>Bạn chưa vững sự kết hợp các thì quá khứ trong câu ghép. Hãy nhớ cách các thì quá khứ tương tác với nhau: hành động đang diễn ra bị xen ngang (QKTD + QKĐ) và hành động trước-sau (QKHT + QKĐ). Ôn lại <strong>Bài 8</strong> và <strong>Bài 9</strong>.</p></li>`;
          break;
      }
    }

    rulesList.forEach(r => {
      if (r !== weakestRule && ruleStats[r].total > 0) {
        const pct = Math.round((ruleStats[r].correct / ruleStats[r].total) * 100);
        if (pct < 80) {
          const ruleName = rulesMap[r] || r;
          recHtml += `<li>📖 Ôn tập thêm quy tắc <strong>'${r}' (${ruleName})</strong> (chính xác ${pct}%). Hãy làm lại bài tập của bài học tương ứng.</li>`;
        }
      }
    });

    recHtml += `</ul>`;
    recommendation.innerHTML = recHtml;
  }

  const mistakesContainer = document.getElementById("mistakes-review-container");
  const mistakesList = document.getElementById("mistakes-list");
  mistakesList.innerHTML = "";

  const incorrectAnswers = answers.filter(a => !a.isCorrect);
  if (incorrectAnswers.length === 0) {
    mistakesContainer.style.display = "none";
  } else {
    mistakesContainer.style.display = "block";

    incorrectAnswers.forEach(ans => {
      const item = document.createElement("div");
      item.className = "mistake-item";

      const questionText = document.createElement("div");
      questionText.className = "mistake-question";
      questionText.textContent = ans.questionText;

      const inputs = document.createElement("div");
      inputs.className = "mistake-inputs";
      inputs.innerHTML = `
        <span>Bạn đã trả lời: <strong class="user-input">${ans.userInput}</strong></span>
        <span>Đáp án đúng: <strong class="correct-input">${ans.correctAnswer}</strong></span>
      `;

      const rule = document.createElement("span");
      rule.className = "mistake-rule";
      rule.textContent = `Quy tắc: ${ans.rule}`;

      const explanation = document.createElement("div");
      explanation.className = "mistake-explanation";
      explanation.innerHTML = `<strong>Giải thích chi tiết:</strong> ${ans.explanation}`;

      item.appendChild(questionText);
      item.appendChild(inputs);
      item.appendChild(rule);
      item.appendChild(explanation);

      mistakesList.appendChild(item);
    });
  }

  switchScreen("screen-test-result");
}

// ==========================================================================
// 7. INITIALIZATION & BOOTSTRAPPING
// ==========================================================================

let confirmCallback = null;

function showCustomConfirm(message, onConfirm) {
  confirmCallback = onConfirm;
  document.getElementById("confirm-modal-message").textContent = message;
  const modal = document.getElementById("custom-confirm-modal");
  modal.style.display = "flex";
  setTimeout(() => {
    modal.classList.add("active");
  }, 10);
}

function hideCustomConfirm() {
  const modal = document.getElementById("custom-confirm-modal");
  modal.classList.remove("active");
  setTimeout(() => {
    modal.style.display = "none";
  }, 250);
  confirmCallback = null;
}

function initCustomConfirmModal() {
  document.getElementById("btn-confirm-cancel").addEventListener("click", hideCustomConfirm);
  document.getElementById("btn-confirm-ok").addEventListener("click", () => {
    if (confirmCallback) {
      confirmCallback();
    }
    hideCustomConfirm();
  });
}

window.addEventListener("DOMContentLoaded", () => {
  buildFromRegistry();
  
  // Set default active unit to the first one in registry
  const registry = window.UNITS_REGISTRY || {};
  const units = Object.values(registry);
  if (units.length > 0) {
    activeUnitId = units[0].unitId;
    const firstLessonKey = Object.keys(units[0].lessons)[0];
    activeLessonKey = `${units[0].unitId}_${firstLessonKey}`;
  }

  loadState();
  initNavigation();
  renderSidebarNavigation();
  initQuizActions();
  initCustomConfirmModal();

  if (activeLessonKey) {
    loadLesson(activeLessonKey);
  }
});
