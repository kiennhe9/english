(function () {
  const unit = window.UNITS_REGISTRY && window.UNITS_REGISTRY["unit3"];
  if (!unit) {
    console.error("Unit 3 lessons not registered yet. Please check script loading order.");
    return;
  }

  // Retrieve pools from registered unit
  const { SUBJECTS_POOL, VERBS_REGULAR, VERBS_IRREGULAR } = unit.pools;

  // Helpers for translation
  function translateSubject(text) {
    const subMap = {
      "I": "Tôi",
      "You": "Bạn",
      "We": "Chúng tôi",
      "They": "Họ",
      "He": "Anh ấy",
      "She": "Cô ấy",
      "It": "Nó",
      "Peter": "Peter",
      "Mary": "Mary",
      "Lan": "Lan",
      "The student": "Học sinh đó",
      "My parents": "Bố mẹ tôi",
      "The teachers": "Các giáo viên"
    };
    return subMap[text] || text;
  }

  function toLowerFirst(str) {
    const properNouns = ["Peter", "Mary", "Lan", "I"];
    for (let noun of properNouns) {
      if (str.startsWith(noun)) return str;
    }
    return str.charAt(0).toLowerCase() + str.slice(1);
  }

  // --- DIVERSE SORT PROMPTS ---
  const SORT_PROMPTS = [
    "Sắp xếp các từ thành câu hoàn chỉnh:",
    "Ghép các từ sau đây thành một câu đúng ngữ pháp:",
    "Dịch sang tiếng Anh bằng cách sắp xếp từ:",
    "Xếp lại thứ tự các từ để tạo câu có nghĩa:",
    "Tạo câu đúng từ các từ cho sẵn:"
  ];

  // ------------------------------------------------------------------
  // QUESTION GENERATOR
  // ------------------------------------------------------------------
  function generateQuestionBank(shuffle) {
    const QUESTION_BANK = generateQuestionBank.__injectBank || [];
    let id = 1;
    let sortPromptIdx = 0;

    // Helper to get random item
    function getRandom(arr, indexOffset) {
      return arr[indexOffset % arr.length];
    }

    // Helper to generate sort questions
    function pushSortQuestion(lessonId, rule, answer, translation, explanation) {
      const words = answer
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "")
        .split(/\s+/)
        .filter(w => w.trim() !== "");

      const prompt = SORT_PROMPTS[sortPromptIdx % SORT_PROMPTS.length];
      sortPromptIdx++;

      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: lessonId,
        type: "sort",
        question: `${prompt} "${translation}"`,
        words: words,
        answer: answer.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").replace(/\s+/g, " ").trim() + ".",
        rule: rule,
        translation: translation,
        explanation: explanation
      });
    }

    // ----------------------------------------------------
    // LESSON 1: PAST CONTINUOUS AFFIRMATIVE - ~35 QUESTIONS
    // ----------------------------------------------------
    for (let i = 0; i < 35; i++) {
      const isSingular = i % 2 === 0;
      const subPool = isSingular ? SUBJECTS_POOL.singular : SUBJECTS_POOL.plural;
      const s = getRandom(subPool, i);
      const v = i % 2 === 0 ? getRandom(VERBS_REGULAR, i) : getRandom(VERBS_IRREGULAR, i);
      const timeStr = i % 2 === 0 ? "at 8 p.m yesterday" : "at that time";
      const timeVi = i % 2 === 0 ? "vào lúc 8 giờ tối hôm qua" : "vào thời điểm đó";
      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");

      const translation = `${translateSubject(s.text)} đang ${v.viet} ${timeVi}.`;
      const explanation = `'${s.text}' ${isSingular ? "số ít / ngôi thứ nhất → dùng 'was'" : "số nhiều / ngôi thứ hai → dùng 'were'"} + V-ing '${v.ing}'.`;

      if (type === "sort") {
        const answer = `${s.text} ${s.beWas} ${v.ing} ${v.obj} ${timeStr}`;
        pushSortQuestion(1, "was/were + V-ing", answer, translation, explanation);
      } else {
        const correctAns = `${s.beWas} ${v.ing}`;
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 1,
          type: type,
          question: `${s.text} ________ (${v.base}) ${v.obj} ${timeStr}.`,
          options: shuffle([correctAns, `${isSingular ? "were" : "was"} ${v.ing}`, `${v.v2}`, `is ${v.ing}`]),
          answer: correctAns,
          rule: "was/were + V-ing",
          translation: translation,
          explanation: explanation
        });
      }
    }

    // ----------------------------------------------------
    // LESSON 2: PAST CONTINUOUS NEGATIVE & QUESTIONS - ~35 QUESTIONS
    // ----------------------------------------------------
    // Phủ định (~20 questions)
    for (let i = 0; i < 20; i++) {
      const isSingular = i % 2 === 0;
      const subPool = isSingular ? SUBJECTS_POOL.singular : SUBJECTS_POOL.plural;
      const s = getRandom(subPool, i);
      const v = i % 2 === 0 ? getRandom(VERBS_REGULAR, i) : getRandom(VERBS_IRREGULAR, i);
      const type = i % 2 === 0 ? "choice" : "fill";
      const translation = `${translateSubject(s.text)} đang không ${v.viet} vào lúc đó.`;
      const explanation = `Phủ định QKTD: dùng '${s.beWasNeg}' + V-ing '${v.ing}'. Không dùng didn't.`;

      const correctAns = `${s.beWasNeg} ${v.ing}`;
      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: 2,
        type: type,
        question: `${s.text} ________ (not ${v.base}) ${v.obj} at that time.`,
        options: shuffle([correctAns, `didn't ${v.base}`, `${isSingular ? "weren't" : "wasn't"} ${v.ing}`, `not ${correctAns}`]),
        answer: correctAns,
        rule: "was/were + V-ing",
        translation: translation,
        explanation: explanation
      });
    }
    // Nghi vấn (~15 questions)
    for (let i = 0; i < 15; i++) {
      const isSingular = i % 2 === 0;
      const subPool = isSingular ? SUBJECTS_POOL.singular : SUBJECTS_POOL.plural;
      const s = getRandom(subPool, i);
      const v = i % 2 === 0 ? getRandom(VERBS_REGULAR, i) : getRandom(VERBS_IRREGULAR, i);
      const type = i % 2 === 0 ? "choice" : "sort";
      const capBe = s.beWas.charAt(0).toUpperCase() + s.beWas.slice(1);
      const translation = `Có phải ${toLowerFirst(translateSubject(s.text))} đang ${v.viet} vào lúc 8h tối qua không?`;
      const explanation = `Nghi vấn QKTD: Đảo '${capBe}' lên trước chủ ngữ.`;

      if (type === "sort") {
        const answer = `${capBe} ${toLowerFirst(s.text)} ${v.ing} ${v.obj} at 8 p.m yesterday`;
        pushSortQuestion(2, "was/were", answer, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 2,
          type: "choice",
          question: `________ ${toLowerFirst(s.text)} ${v.ing} ${v.obj} at 8 p.m yesterday?`,
          options: shuffle([capBe, isSingular ? "Were" : "Was", "Did", "Do"]),
          answer: capBe,
          rule: "was/were",
          translation: translation,
          explanation: explanation
        });
      }
    }

    // ----------------------------------------------------
    // LESSON 3: PAST CONTINUOUS USES & SIGNALS - ~35 QUESTIONS
    // ----------------------------------------------------
    // Giờ cụ thể / At this time (~20 questions)
    for (let i = 0; i < 20; i++) {
      const isSingular = i % 2 === 0;
      const subPool = isSingular ? SUBJECTS_POOL.singular : SUBJECTS_POOL.plural;
      const s = getRandom(subPool, i);
      const v = getRandom(VERBS_REGULAR, i);
      const type = i % 2 === 0 ? "choice" : "fill";
      const timeStr = i % 2 === 0 ? "at this time last week" : "at 10 o'clock last night";
      const timeVi = i % 2 === 0 ? "vào thời điểm này tuần trước" : "vào lúc 10 giờ tối qua";
      const translation = `${translateSubject(s.text)} đang ${v.viet} ${timeVi}.`;
      const explanation = `Có mốc thời gian cụ thể '${timeStr}' trong quá khứ → chia Quá khứ tiếp diễn.`;

      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: 3,
        type: type,
        question: `${s.text} ________ (${v.base}) ${v.obj} ${timeStr}.`,
        options: shuffle([`${s.beWas} ${v.ing}`, `${v.v2}`, `is ${v.ing}`, `will ${v.base}`]),
        answer: `${s.beWas} ${v.ing}`,
        rule: "was/were + V-ing",
        translation: translation,
        explanation: explanation
      });
    }
    // Always phàn nàn (~15 questions)
    for (let i = 0; i < 15; i++) {
      const s = getRandom(SUBJECTS_POOL.singular, i);
      const v = getRandom(VERBS_IRREGULAR, i);
      const type = "choice";
      const translation = `${translateSubject(s.text)} đã luôn luôn ${v.viet} khi còn sống ở đây (phàn nàn).`;
      const explanation = `Diễn tả sự phiền toái, phàn nàn trong quá khứ dùng 'was/were + always + V-ing'.`;
      const correctAns = `${s.text} was always ${v.ing} ${v.obj} when he lived here.`;

      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: 3,
        type: type,
        question: `Chọn câu phàn nàn đúng ngữ pháp về thói quen trong quá khứ:`,
        options: shuffle([
          correctAns,
          `${s.text} always ${v.v2} ${v.obj} when he lived here.`,
          `${s.text} was ${v.ing} always ${v.obj} when he lived here.`,
          `${s.text} did always ${v.base} ${v.obj} when he lived here.`
        ]),
        answer: correctAns,
        rule: "was/were + V-ing",
        translation: translation,
        explanation: explanation
      });
    }

    // ----------------------------------------------------
    // LESSON 4: WHEN & WHILE - ~35 QUESTIONS
    // ----------------------------------------------------
    const whenWhileScenarios = [
      { q: "While I was driving home, it ________ (start) to rain.", ans: "started", rule: "when/while", trans: "Trong khi tôi đang lái xe về nhà thì trời bắt đầu mưa.", expl: "Trời bắt đầu mưa là hành động ngắn xen vào vế While đang diễn ra -> QKĐ." },
      { q: "The phone rang while we ________ (eat) dinner.", ans: "were eating", rule: "when/while", trans: "Điện thoại đã reo lên trong khi chúng tôi đang ăn tối.", expl: "Sau 'while' là hành động kéo dài đang diễn ra -> QKTD." },
      { q: "She ________ (watch) TV when I came to her house yesterday.", ans: "was watching", rule: "when/while", trans: "Cô ấy đang xem TV khi tôi đến nhà cô ấy ngày hôm qua.", expl: "Hành động xem TV đang diễn ra thì hành động tôi đến xen vào. Đang diễn ra -> QKTD." },
      { q: "When the teacher entered the room, the students ________ (talk) loudly.", ans: "were talking", rule: "when/while", trans: "Khi giáo viên bước vào lớp, các học sinh đang nói chuyện rất to.", expl: "Học sinh đang nói chuyện (kéo dài) -> QKTD; giáo viên bước vào (xen ngang) -> QKĐ." },
      { q: "He broke his arm while he ________ (play) tennis.", ans: "was playing", rule: "when/while", trans: "Anh ấy bị gãy tay trong khi đang chơi tennis.", expl: "Chấn thương xảy ra khi đang chơi tennis. Sau 'while' chia QKTD." }
    ];
    for (let i = 0; i < 35; i++) {
      const sc = whenWhileScenarios[i % whenWhileScenarios.length];
      const type = i % 2 === 0 ? "choice" : "fill";

      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: 4,
        type: type,
        question: sc.q,
        options: shuffle([sc.ans, sc.ans === "started" ? "was starting" : "played", "starts", "will start"]),
        answer: sc.ans,
        rule: sc.rule,
        translation: sc.trans,
        explanation: sc.expl
      });
    }

    // ----------------------------------------------------
    // LESSON 5: PAST PERFECT AFFIRMATIVE - ~35 QUESTIONS
    // ----------------------------------------------------
    for (let i = 0; i < 35; i++) {
      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");
      if (i % 2 === 0) {
        // Template 1: S + had gone out when I came into the house.
        const subjects = [
          { eng: "He", vie: "Anh ấy" },
          { eng: "She", vie: "Cô ấy" },
          { eng: "They", vie: "Họ" },
          { eng: "Peter", vie: "Peter" },
          { eng: "Mary", vie: "Mary" },
          { eng: "Lan", vie: "Lan" },
          { eng: "My parents", vie: "Bố mẹ tôi" },
          { eng: "We", vie: "Chúng tôi" }
        ];
        const s = subjects[i % subjects.length];
        const translation = `${s.vie} đã đi ra ngoài khi tôi vào nhà.`;
        const explanation = `Hành động đi ra ngoài xảy ra trước hành động vào nhà trong quá khứ → dùng Quá khứ hoàn thành: 'had + VpII' (had gone).`;

        if (type === "sort") {
          pushSortQuestion(5, "had", `${s.eng} had gone out when I came into the house`, translation, explanation);
        } else {
          QUESTION_BANK.push({
            id: `q-${id++}`,
            lessonId: 5,
            type: type,
            question: `${s.eng} ________ (go) out when I came into the house.`,
            options: shuffle(["had gone", "has gone", "went", "was going"]),
            answer: "had gone",
            rule: "had",
            translation: translation,
            explanation: explanation
          });
        }
      } else {
        // Template 2: S + had finished [possessive] work right before the deadline last week.
        const subjects = [
          { eng: "They", vie: "Họ", pos: "their", posVie: "họ" },
          { eng: "He", vie: "Anh ấy", pos: "his", posVie: "anh ấy" },
          { eng: "She", vie: "Cô ấy", pos: "her", posVie: "cô ấy" },
          { eng: "I", vie: "Tôi", pos: "my", posVie: "tôi" },
          { eng: "We", vie: "Chúng tôi", pos: "our", posVie: "chúng tôi" }
        ];
        const s = subjects[i % subjects.length];
        const translation = `${s.vie} đã hoàn thành công việc của ${s.posVie} ngay trước hạn chót vào tuần trước.`;
        const explanation = `Diễn tả hành động hoàn thành trước một mốc thời gian cụ thể (right before the deadline last week) → dùng Quá khứ hoàn thành: 'had + VpII' (had finished).`;

        if (type === "sort") {
          pushSortQuestion(5, "had", `${s.eng} had finished ${s.pos} work right before the deadline last week`, translation, explanation);
        } else {
          QUESTION_BANK.push({
            id: `q-${id++}`,
            lessonId: 5,
            type: type,
            question: `${s.eng} ________ (finish) ${s.pos} work right before the deadline last week.`,
            options: shuffle(["had finished", "has finished", "finished", "was finishing"]),
            answer: "had finished",
            rule: "had",
            translation: translation,
            explanation: explanation
          });
        }
      }
    }

    // ----------------------------------------------------
    // LESSON 6: PAST PERFECT NEGATIVE & QUESTIONS - ~35 QUESTIONS
    // ----------------------------------------------------
    // Phủ định (~20 questions)
    for (let i = 0; i < 20; i++) {
      const type = i % 2 === 0 ? "choice" : "fill";
      if (i % 2 === 0) {
        // Template 1: S + hadn't come home when I got into the house.
        const subjects = [
          { eng: "She", vie: "Cô ấy" },
          { eng: "He", vie: "Anh ấy" },
          { eng: "They", vie: "Họ" },
          { eng: "Mary", vie: "Mary" },
          { eng: "Lan", vie: "Lan" },
          { eng: "Peter", vie: "Peter" }
        ];
        const s = subjects[i % subjects.length];
        const translation = `${s.vie} vẫn chưa về nhà khi tôi vào nhà.`;
        const explanation = `Phủ định của Quá khứ hoàn thành: 'S + hadn't + VpII'. Không mượn didn't.`;

        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 6,
          type: type,
          question: `${s.eng} ________ (not come) home when I got into the house.`,
          options: shuffle(["hadn't come", "didn't come", "hasn't come", "hadn't came"]),
          answer: "hadn't come",
          rule: "had",
          translation: translation,
          explanation: explanation
        });
      } else {
        // Template 2: They hadn't finished their lunch when I saw them.
        const subjects = [
          { eng: "They", vie: "Họ", pos: "their" },
          { eng: "We", vie: "Chúng tôi", pos: "our" },
          { eng: "He", vie: "Anh ấy", pos: "his" },
          { eng: "She", vie: "Cô ấy", pos: "her" }
        ];
        const s = subjects[i % subjects.length];
        const translation = `${s.vie} vẫn chưa ăn xong bữa trưa khi tôi trông thấy họ.`;
        const explanation = `Phủ định Quá khứ hoàn thành: 'S + hadn't + VpII' (hadn't finished).`;

        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 6,
          type: type,
          question: `${s.eng} ________ (not finish) ${s.pos} lunch when I saw them.`,
          options: shuffle(["hadn't finished", "didn't finish", "hasn't finished", "hadn't finish"]),
          answer: "hadn't finished",
          rule: "had",
          translation: translation,
          explanation: explanation
        });
      }
    }

    // Nghi vấn (~15 questions)
    for (let i = 0; i < 15; i++) {
      const type = i % 2 === 0 ? "choice" : "sort";
      const subjects = [
        { eng: "you", vie: "bạn" },
        { eng: "they", vie: "họ" },
        { eng: "he", vie: "anh ấy" },
        { eng: "she", vie: "cô ấy" }
      ];
      const s = subjects[i % subjects.length];
      const translation = `Bộ phim đã kết thúc khi ${s.vie} tới rạp chiếu phim phải không?`;
      const explanation = `Câu hỏi nghi vấn Quá khứ hoàn thành: đảo 'Had' lên đầu câu trước chủ ngữ.`;

      if (type === "sort") {
        pushSortQuestion(6, "had", `Had the film ended when ${s.eng} arrived at the cinema`, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 6,
          type: "choice",
          question: `________ the film ended when ${s.eng} arrived at the cinema?`,
          options: shuffle(["Had", "Did", "Was", "Have"]),
          answer: "Had",
          rule: "had",
          translation: translation,
          explanation: explanation
        });
      }
    }

    // ----------------------------------------------------
    // LESSON 7: PAST PERFECT USES & SIGNALS - ~35 QUESTIONS
    // ----------------------------------------------------
    const lesson7Scenarios = [
      {
        q: "When I came, he ________ (go) to bed.",
        ans: "had gone",
        options: ["had gone", "went", "was going", "has gone"],
        trans: "Khi tôi đến thì anh ta đã đi ngủ rồi.",
        expl: "Hành động đi ngủ đã xảy ra và hoàn thành trước hành động tôi đến trong quá khứ."
      },
      {
        q: "The train ________ (leave) when we arrived at the station.",
        ans: "had left",
        options: ["had left", "left", "was leaving", "has left"],
        trans: "Tàu đã rời đi khi chúng tôi tới nhà ga.",
        expl: "Hành động tàu rời đi xảy ra trước hành động chúng tôi đến ga."
      },
      {
        q: "I ________ (go) to school before 7 a.m yesterday.",
        ans: "had gone",
        options: ["had gone", "went", "was going", "have gone"],
        trans: "Tôi đã đi học trước 7 giờ sáng ngày hôm qua.",
        expl: "Hành động xảy ra trước một mốc thời gian xác định trong quá khứ (before 7 a.m yesterday)."
      },
      {
        q: "She ________ (come) back to her hometown before June last year.",
        ans: "had come",
        options: ["had come", "came", "was coming", "has come"],
        trans: "Cô ấy đã trở về quê trước tháng 6 năm ngoái.",
        expl: "Hành động xảy ra trước một mốc thời gian cụ thể (before June last year)."
      },
      {
        q: "I ________ (work) hard and was ready to pass the exam.",
        ans: "had worked",
        options: ["had worked", "worked", "was working", "have worked"],
        trans: "Tôi đã học hành chăm chỉ và sẵn sàng để vượt qua kỳ thi.",
        expl: "Hành động học hành chăm chỉ là điều kiện tiên quyết cho việc sẵn sàng vượt qua kỳ thi."
      },
      {
        q: "I had had a girlfriend and ________ (will) marry her.",
        ans: "would",
        options: ["would", "will", "had", "was"],
        trans: "Tôi đã có bạn gái và tôi sẽ cưới cô ấy.",
        expl: "Dùng để diễn tả một hành động/quyết định như là kết quả/điều kiện tiên quyết trong bối cảnh quá khứ."
      },
      {
        q: "If she ________ (tell) me the truth yesterday, I would have helped her.",
        ans: "had told",
        options: ["had told", "told", "tells", "has told"],
        trans: "Nếu hôm qua cô ấy nói sự thật với tôi, tôi đã có thể giúp cô ấy rồi.",
        expl: "Thì Quá khứ hoàn thành dùng trong câu điều kiện loại 3 để diễn tả điều không có thực trong quá khứ."
      },
      {
        q: "I wish I ________ (go) with you yesterday.",
        ans: "had gone",
        options: ["had gone", "went", "go", "has gone"],
        trans: "Tôi ước rằng tôi đã đi với bạn ngày hôm qua.",
        expl: "Thì Quá khứ hoàn thành dùng trong câu mong ước (wish) loại 3 để diễn tả ước muốn trái ngược quá khứ."
      }
    ];

    for (let i = 0; i < 35; i++) {
      const sc = lesson7Scenarios[i % lesson7Scenarios.length];
      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");

      if (type === "sort") {
        const cleanAnswer = sc.q.replace(/\s*\(.*?\)\s*/, ` ${sc.ans} `).replace(/\s+/g, " ").trim();
        pushSortQuestion(7, "before/after", cleanAnswer, sc.trans, sc.expl);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 7,
          type: type,
          question: sc.q,
          options: shuffle(sc.options),
          answer: sc.ans,
          rule: "before/after",
          translation: sc.trans,
          explanation: sc.expl
        });
      }
    }

    // ----------------------------------------------------
    // LESSON 8: COMBINATION - PAST CONTINUOUS & PAST SIMPLE - ~35 QUESTIONS
    // ----------------------------------------------------
    for (let i = 0; i < 35; i++) {
      const isSingular = i % 2 === 0;
      const s = isSingular ? getRandom(SUBJECTS_POOL.singular, i) : getRandom(SUBJECTS_POOL.plural, i);
      const v = getRandom(VERBS_REGULAR, i);
      const type = i % 2 === 0 ? "choice" : "fill";
      const translation = `${translateSubject(s.text)} đang ${v.viet} thì trời bắt đầu mưa.`;
      const explanation = `Hành động đang diễn ra chia QKTD (${s.beWas} ${v.ing}), hành động xen vào chia QKĐ (started).`;

      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: 8,
        type: type,
        question: `${s.text} ________ (${v.base}) ${v.obj} when it started to rain.`,
        options: shuffle([`${s.beWas} ${v.ing}`, `${v.v2}`, `is ${v.ing}`, `had ${v.v3}`]),
        answer: `${s.beWas} ${v.ing}`,
        rule: "past-combo",
        translation: translation,
        explanation: explanation
      });
    }

    // ----------------------------------------------------
    // LESSON 9: COMBINATION - PAST PERFECT & PAST SIMPLE - ~35 QUESTIONS
    // ----------------------------------------------------
    const lesson9Scenarios = [
      {
        q: "When they arrived at the airport, her flight ________ (take off).",
        ans: "had taken off",
        options: ["had taken off", "took off", "was taking off", "takes off"],
        trans: "Khi họ tới sân bay, chuyến bay của cô ấy đã cất cánh.",
        expl: "Chuyến bay cất cánh trước khi họ tới sân bay. Hành động cất cánh (xảy ra trước) chia QKHT."
      },
      {
        q: "He ________ (do) his homework before his mother asked him to do so.",
        ans: "had done",
        options: ["had done", "did", "was doing", "has done"],
        trans: "Anh ấy đã làm bài tập về nhà trước khi mẹ anh ấy yêu cầu anh ấy làm.",
        expl: "Hành động làm bài tập (xảy ra trước) chia QKHT, hành động mẹ yêu cầu (xảy ra sau) chia QKĐ."
      },
      {
        q: "They went home after they ________ (eat) a big roasted chicken.",
        ans: "had eaten",
        options: ["had eaten", "ate", "were eating", "have eaten"],
        trans: "Họ về nhà sau khi đã ăn một con gà quay lớn.",
        expl: "Ăn gà quay xong trước khi về nhà. Mệnh đề sau 'after' chia QKHT."
      },
      {
        q: "He ________ (clean) the house by the time his mother came back.",
        ans: "had cleaned",
        options: ["had cleaned", "cleaned", "was cleaning", "has cleaned"],
        trans: "Cậu ấy đã lau xong nhà vào thời điểm mẹ cậu ấy trở về.",
        expl: "Lau xong nhà trước khi mẹ về. Mệnh đề trước 'by the time' chia QKHT."
      }
    ];

    for (let i = 0; i < 35; i++) {
      const sc = lesson9Scenarios[i % lesson9Scenarios.length];
      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");

      if (type === "sort") {
        const cleanAnswer = sc.q.replace(/\s*\(.*?\)\s*/, ` ${sc.ans} `).replace(/\s+/g, " ").trim();
        pushSortQuestion(9, "past-combo", cleanAnswer, sc.trans, sc.expl);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 9,
          type: type,
          question: sc.q,
          options: shuffle(sc.options),
          answer: sc.ans,
          rule: "past-combo",
          translation: sc.trans,
          explanation: sc.expl
        });
      }
    }

    // ----------------------------------------------------
    // LESSON 10: CONTRAST & COMMON ERRORS - ~35 QUESTIONS
    // ----------------------------------------------------
    const errorFixes = [
      { wrong: "She didn't was sleeping when I came.", right: "She wasn't sleeping when I came", desc: "Không dùng didn't với động từ To Be chia tiếp diễn. Dùng 'wasn't' thay thế.", rule: "was/were + V-ing", trans: "Cô ấy đã không ngủ khi tôi đến." },
      { wrong: "They had went out before I arrived.", right: "They had gone out before I arrived", desc: "Sau had phải dùng phân từ hai VpII (gone), không dùng quá khứ đơn V2 (went).", rule: "V3/ed", trans: "Họ đã đi ra ngoài chơi trước khi tôi đến." },
      { wrong: "I had work hard and was ready to pass the exam.", right: "I had worked hard and was ready to pass the exam", desc: "Thì Quá khứ hoàn thành dùng cấu trúc 'had + VpII'. 'work' phải thêm -ed thành 'worked'.", rule: "had", trans: "Tôi đã học hành chăm chỉ và sẵn sàng để vượt qua kỳ thi." },
      { wrong: "I had had a girlfriend and would marriage to her.", right: "I had had a girlfriend and would marry her", desc: "Sau động từ khuyết thiếu 'would' ta dùng động từ nguyên thể 'marry' (động từ), không dùng danh từ 'marriage'.", rule: "past-combo", trans: "Tôi đã có bạn gái và tôi sẽ cưới cô ấy." },
      { wrong: "He had done her homework before his mother asked his to do so.", right: "He had done his homework before his mother asked him to do so", desc: "Sửa lỗi đại từ sở hữu/tân ngữ cho phù hợp giới tính: 'his homework' và tân ngữ 'asked him'.", rule: "before/after", trans: "Anh ấy đã làm bài tập về nhà trước khi mẹ anh ấy yêu cầu anh ấy làm." }
    ];
    for (let i = 0; i < 35; i++) {
      const item = errorFixes[i % errorFixes.length];
      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: 10,
        type: "choice",
        question: `Chọn câu sửa lỗi ngữ pháp ĐÚNG nhất cho câu: "${item.wrong}"`,
        options: shuffle([
          item.right,
          item.wrong,
          item.right.replace("had ", "has "),
          item.right.replace("would ", "will ").replace("wasn't ", "isn't ").replace("didn't ", "don't ").replace("had ", "have ")
        ]),
        answer: item.right,
        rule: item.rule,
        translation: item.trans,
        explanation: item.desc
      });
    }
  }

  // Attach generator function to the registered unit
  unit.generateQuestions = function (shuffle) {
    const bank = [];
    generateQuestionBank.__injectBank = bank;
    generateQuestionBank(shuffle);
    return bank;
  };
})();
