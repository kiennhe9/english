(function () {
  const unit = window.UNITS_REGISTRY && window.UNITS_REGISTRY["unit4"];
  if (!unit) {
    console.error("Unit 4 lessons not registered yet. Please check script loading order.");
    return;
  }

  // Retrieve pools from registered unit
  const { SUBJECTS_POOL, VERBS_FUTURE } = unit.pools;

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

  // Time expressions for near future / future simple
  const TIMES_FUTURE = [
    { en: "tomorrow", vi: "ngày mai" },
    { en: "next week", vi: "tuần tới" },
    { en: "next month", vi: "tháng tới" },
    { en: "next year", vi: "năm tới" },
    { en: "this weekend", vi: "cuối tuần này" },
    { en: "tonight", vi: "tối nay" },
    { en: "in two days", vi: "trong hai ngày nữa" },
    { en: "next Sunday", vi: "Chủ Nhật tới" }
  ];

  // ------------------------------------------------------------------
  // QUESTION GENERATOR
  // ------------------------------------------------------------------
  function generateQuestionBank(shuffle) {
    const QUESTION_BANK = generateQuestionBank.__injectBank || [];
    let id = 1;
    let sortPromptIdx = 0;

    function getRandom(arr, indexOffset) {
      return arr[indexOffset % arr.length];
    }

    function pushSortQuestion(lessonId, rule, answer, translation, explanation) {
      const words = answer
        .replace(/[.,\/#!$%\^\&\*;:{}=\-_`~()?]/g, "")
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
        answer: answer.replace(/[.,\/#!$%\^\&\*;:{}=\-_`~()?]/g, "").replace(/\s+/g, " ").trim() + ".",
        rule: rule,
        translation: translation,
        explanation: explanation
      });
    }

    // ----------------------------------------------------
    // LESSON 1: NEAR FUTURE AFFIRMATIVE - ~35 QUESTIONS
    // ----------------------------------------------------
    for (let i = 0; i < 35; i++) {
      const isSingular = i % 2 === 0;
      const subPool = isSingular ? SUBJECTS_POOL.singular : SUBJECTS_POOL.plural;
      const s = getRandom(subPool, i);
      const v = getRandom(VERBS_FUTURE, i);
      const time = getRandom(TIMES_FUTURE, i);
      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");

      const translation = `${translateSubject(s.text)} dự định ${v.viet} ${time.vi}.`;
      const explanation = `'${s.text}' ${s.be === "am" ? "→ dùng 'am'" : s.be === "is" ? "→ dùng 'is'" : "→ dùng 'are'"} going to + V nguyên mẫu '${v.base}'.`;
      const correctAns = `${s.be} going to ${v.base}`;

      if (type === "sort") {
        const answer = `${s.text} ${correctAns} ${v.obj} ${time.en}`;
        pushSortQuestion(1, "am/is/are + going to", answer, translation, explanation);
      } else {
        // Wrong be form: if correct is "am", wrong is "is"; if correct is "is", wrong is "are"; if correct is "are", wrong is "is"
        const wrongBe = s.be === "am" ? "is" : s.be === "is" ? "are" : "is";
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 1,
          type: type,
          question: `${s.text} ________ (${v.base}) ${v.obj} ${time.en}.`,
          options: shuffle([
            correctAns,
            `${wrongBe} going to ${v.base}`,
            `will ${v.base}`,
            `${s.be} going to ${v.ing}`
          ]),
          answer: correctAns,
          rule: "am/is/are + going to",
          translation: translation,
          explanation: explanation
        });
      }
    }

    // ----------------------------------------------------
    // LESSON 2: NEAR FUTURE NEGATIVE & QUESTIONS - ~35 QUESTIONS
    // ----------------------------------------------------
    // Phủ định (~20 questions)
    for (let i = 0; i < 20; i++) {
      const isSingular = i % 2 === 0;
      const subPool = isSingular ? SUBJECTS_POOL.singular : SUBJECTS_POOL.plural;
      const s = getRandom(subPool, i);
      const v = getRandom(VERBS_FUTURE, i);
      const time = getRandom(TIMES_FUTURE, i);
      const type = i % 2 === 0 ? "choice" : "fill";
      const translation = `${translateSubject(s.text)} không dự định ${v.viet} ${time.vi}.`;
      const explanation = `Phủ định tương lai gần: dùng '${s.beNeg}' + going to + V nguyên mẫu '${v.base}'.`;
      const correctAns = `${s.beNeg} going to ${v.base}`;

      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: 2,
        type: type,
        question: `${s.text} ________ (not ${v.base}) ${v.obj} ${time.en}.`,
        options: shuffle([
          correctAns,
          `don't going to ${v.base}`,
          `${isSingular ? "aren't" : "isn't"} going to ${v.base}`,
          `won't going to ${v.base}`
        ]),
        answer: correctAns,
        rule: "am/is/are + going to",
        translation: translation,
        explanation: explanation
      });
    }

    // Nghi vấn (~15 questions)
    for (let i = 0; i < 15; i++) {
      const isSingular = i % 2 === 0;
      const subPool = isSingular ? SUBJECTS_POOL.singular : SUBJECTS_POOL.plural;
      const s = getRandom(subPool, i);
      const v = getRandom(VERBS_FUTURE, i);
      const type = i % 2 === 0 ? "choice" : "sort";
      const capBe = s.be.charAt(0).toUpperCase() + s.be.slice(1);
      const translation = `Có phải ${toLowerFirst(translateSubject(s.text))} dự định ${v.viet} không?`;
      const explanation = `Nghi vấn tương lai gần: Đảo '${capBe}' lên trước chủ ngữ.`;

      if (type === "sort") {
        const answer = `${capBe} ${toLowerFirst(s.text)} going to ${v.base} ${v.obj}`;
        pushSortQuestion(2, "am/is/are + going to", answer, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 2,
          type: "choice",
          question: `________ ${toLowerFirst(s.text)} going to ${v.base} ${v.obj}?`,
          options: shuffle([capBe, isSingular ? "Are" : "Is", "Will", "Do"]),
          answer: capBe,
          rule: "am/is/are + going to",
          translation: translation,
          explanation: explanation
        });
      }
    }

    // ----------------------------------------------------
    // LESSON 3: NEAR FUTURE USES & SIGNALS - ~35 QUESTIONS
    // ----------------------------------------------------
    // Kế hoạch cụ thể (~18 questions)
    for (let i = 0; i < 18; i++) {
      const isSingular = i % 2 === 0;
      const subPool = isSingular ? SUBJECTS_POOL.singular : SUBJECTS_POOL.plural;
      const s = getRandom(subPool, i);
      const v = getRandom(VERBS_FUTURE, i);
      const time = getRandom(TIMES_FUTURE, i);
      const type = i % 2 === 0 ? "choice" : "fill";
      const translation = `${translateSubject(s.text)} đã lên kế hoạch ${v.viet} ${time.vi}.`;
      const explanation = `Có kế hoạch từ trước + thời gian tương lai '${time.en}' → dùng 'be going to', không dùng will.`;

      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: 3,
        type: type,
        question: `${s.text} ________ (${v.base}) ${v.obj} ${time.en}. (kế hoạch đã lên lịch)`,
        options: shuffle([
          `${s.be} going to ${v.base}`,
          `will ${v.base}`,
          `${s.be} ${v.ing}`,
          `going to ${v.base}`
        ]),
        answer: `${s.be} going to ${v.base}`,
        rule: "be going to – plan",
        translation: translation,
        explanation: explanation
      });
    }

    // Dự đoán có bằng chứng (~17 questions)
    const evidenceScenarios = [
      {
        q: "Look at those dark clouds! It ________ (rain).",
        ans: "is going to rain",
        options: ["is going to rain", "will rain", "rains", "is raining"],
        trans: "Nhìn những đám mây đen kìa! Trời sắp mưa.",
        expl: "Có bằng chứng hiện tại (mây đen) → dùng 'be going to' để dự đoán, không dùng will."
      },
      {
        q: "She looks very pale. I think she ________ (faint).",
        ans: "is going to faint",
        options: ["is going to faint", "will faint", "faints", "is fainting"],
        trans: "Cô ấy trông rất nhợt nhạt. Tôi nghĩ cô ấy sắp ngất.",
        expl: "Có bằng chứng hiện tại (trông nhợt nhạt) → dùng 'be going to'."
      },
      {
        q: "The car is making a strange noise. It ________ (break down).",
        ans: "is going to break down",
        options: ["is going to break down", "will break down", "breaks down", "broke down"],
        trans: "Chiếc xe đang phát ra tiếng kỳ lạ. Nó sắp bị hỏng.",
        expl: "Có bằng chứng hiện tại (tiếng động lạ) → dùng 'be going to'."
      },
      {
        q: "Watch out! That glass ________ (fall).",
        ans: "is going to fall",
        options: ["is going to fall", "will fall", "falls", "fell"],
        trans: "Cẩn thận! Cái ly đó sắp rơi.",
        expl: "Người nói đang nhìn thấy cái ly sắp rơi (bằng chứng) → 'be going to'."
      },
      {
        q: "Her face is red and her temperature is very high. She ________ (be) ill.",
        ans: "is going to be",
        options: ["is going to be", "will be", "is", "was"],
        trans: "Mặt cô ấy đỏ và nhiệt độ rất cao. Cô ấy sắp bị bệnh.",
        expl: "Các dấu hiệu hiện tại (mặt đỏ, sốt cao) chỉ ra bệnh sắp xảy ra → 'be going to'."
      }
    ];
    for (let i = 0; i < 17; i++) {
      const sc = evidenceScenarios[i % evidenceScenarios.length];
      const type = i % 2 === 0 ? "choice" : "fill";
      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: 3,
        type: type,
        question: sc.q,
        options: shuffle(sc.options),
        answer: sc.ans,
        rule: "be going to – evidence",
        translation: sc.trans,
        explanation: sc.expl
      });
    }

    // ----------------------------------------------------
    // LESSON 4: FUTURE SIMPLE (will) AFFIRMATIVE - ~35 QUESTIONS
    // ----------------------------------------------------
    for (let i = 0; i < 35; i++) {
      const isSingular = i % 2 === 0;
      const subPool = isSingular ? SUBJECTS_POOL.singular : SUBJECTS_POOL.plural;
      const s = getRandom(subPool, i);
      const v = getRandom(VERBS_FUTURE, i);
      const time = getRandom(TIMES_FUTURE, i);
      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");

      const translation = `${translateSubject(s.text)} sẽ ${v.viet} ${time.vi} (quyết định ngay lúc nói).`;
      const explanation = `Thì tương lai đơn: 'will' áp dụng chung cho mọi ngôi. Động từ sau will luôn là nguyên mẫu '${v.base}'.`;
      const correctAns = `will ${v.base}`;

      if (type === "sort") {
        const answer = `${s.text} will ${v.base} ${v.obj} ${time.en}`;
        pushSortQuestion(4, "will", answer, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 4,
          type: type,
          question: `${s.text} ________ (${v.base}) ${v.obj} ${time.en}.`,
          options: shuffle([
            correctAns,
            `${s.be} going to ${v.base}`,
            `${s.be} going to ${v.ing}`,
            `will ${v.ing}`
          ]),
          answer: correctAns,
          rule: "will",
          translation: translation,
          explanation: explanation
        });
      }
    }

    // ----------------------------------------------------
    // LESSON 5: FUTURE SIMPLE (will) NEGATIVE & QUESTIONS - ~35 QUESTIONS
    // ----------------------------------------------------
    // Phủ định won't (~20 questions)
    for (let i = 0; i < 20; i++) {
      const isSingular = i % 2 === 0;
      const subPool = isSingular ? SUBJECTS_POOL.singular : SUBJECTS_POOL.plural;
      const s = getRandom(subPool, i);
      const v = getRandom(VERBS_FUTURE, i);
      const time = getRandom(TIMES_FUTURE, i);
      const type = i % 2 === 0 ? "choice" : "fill";
      const translation = `${translateSubject(s.text)} sẽ không ${v.viet} ${time.vi}.`;
      const explanation = `Phủ định tương lai đơn: 'won't' = will + not. Áp dụng chung cho mọi ngôi.`;

      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: 5,
        type: type,
        question: `${s.text} ________ (not ${v.base}) ${v.obj} ${time.en}.`,
        options: shuffle([
          `won't ${v.base}`,
          `doesn't ${v.base}`,
          `${s.beNeg} going to ${v.base}`,
          `willn't ${v.base}`
        ]),
        answer: `won't ${v.base}`,
        rule: "will",
        translation: translation,
        explanation: explanation
      });
    }

    // Will questions (~15 questions)
    for (let i = 0; i < 15; i++) {
      const isSingular = i % 2 === 0;
      const subPool = isSingular ? SUBJECTS_POOL.singular : SUBJECTS_POOL.plural;
      const s = getRandom(subPool, i);
      const v = getRandom(VERBS_FUTURE, i);
      const type = i % 2 === 0 ? "choice" : "sort";
      const translation = `Có phải ${toLowerFirst(translateSubject(s.text))} sẽ ${v.viet} không?`;
      const explanation = `Câu hỏi tương lai đơn: Đảo 'Will' lên trước chủ ngữ.`;

      if (type === "sort") {
        const answer = `Will ${toLowerFirst(s.text)} ${v.base} ${v.obj}`;
        pushSortQuestion(5, "will", answer, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 5,
          type: "choice",
          question: `________ ${toLowerFirst(s.text)} ${v.base} ${v.obj}?`,
          options: shuffle(["Will", s.be.charAt(0).toUpperCase() + s.be.slice(1), "Do", "Does"]),
          answer: "Will",
          rule: "will",
          translation: translation,
          explanation: explanation
        });
      }
    }

    // ----------------------------------------------------
    // LESSON 6: FUTURE SIMPLE USES & SIGNALS - ~35 QUESTIONS
    // ----------------------------------------------------
    const willUsageScenarios = [
      // Quyết định tự phát
      {
        q: "A: I'm hungry! B: Don't worry. I ________ (make) you a sandwich.",
        ans: "will make",
        options: ["will make", "am going to make", "make", "made"],
        trans: "A: Tôi đói! B: Đừng lo. Tôi sẽ làm bánh mì kẹp cho bạn.",
        expl: "B quyết định ngay lúc nghe A nói đói → quyết định tự phát → will."
      },
      // Dự đoán không bằng chứng
      {
        q: "I think it ________ (be) sunny tomorrow.",
        ans: "will be",
        options: ["will be", "is going to be", "is", "was"],
        trans: "Tôi nghĩ ngày mai trời sẽ nắng.",
        expl: "Dự đoán cá nhân không có bằng chứng cụ thể ('I think') → will."
      },
      {
        q: "She supposes that she ________ (get) a better job.",
        ans: "will get",
        options: ["will get", "is going to get", "gets", "got"],
        trans: "Cô ấy cho rằng cô ấy sẽ có một công việc tốt hơn.",
        expl: "Động từ quan điểm 'supposes' + dự đoán không bằng chứng → will."
      },
      // Lời hứa
      {
        q: "I promise that I ________ (tell) you the truth.",
        ans: "will tell",
        options: ["will tell", "am going to tell", "tell", "told"],
        trans: "Tôi hứa rằng tôi sẽ nói thật với bạn.",
        expl: "Lời hứa (promise) → will."
      },
      // Lời yêu cầu
      {
        q: "________ you please bring me a cup of coffee?",
        ans: "Will",
        options: ["Will", "Are", "Do", "Is"],
        trans: "Bạn có thể mang cho tôi một tách cà phê không?",
        expl: "Lời yêu cầu lịch sự: Will you...? → will."
      },
      // Câu điều kiện 1
      {
        q: "If she comes, I ________ (go) with her.",
        ans: "will go",
        options: ["will go", "am going to go", "go", "went"],
        trans: "Nếu cô ấy đến, tôi sẽ đi cùng với cô ấy.",
        expl: "Câu điều kiện loại 1: If + HTĐ, will + V. Mệnh đề kết quả dùng will."
      },
      {
        q: "If it stops raining soon, we ________ (go) to the cinema.",
        ans: "will go",
        options: ["will go", "are going to go", "go", "went"],
        trans: "Nếu trời ngừng mưa sớm, chúng tôi sẽ đi rạp chiếu phim.",
        expl: "Câu điều kiện loại 1: If + HTĐ, will + V nguyên mẫu."
      }
    ];
    for (let i = 0; i < 35; i++) {
      const sc = willUsageScenarios[i % willUsageScenarios.length];
      const type = i % 2 === 0 ? "choice" : "fill";
      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: 6,
        type: type,
        question: sc.q,
        options: shuffle(sc.options),
        answer: sc.ans,
        rule: sc.ans === "Will" ? "will" : sc.ans.includes("will") ? "will" : "if + present simple",
        translation: sc.trans,
        explanation: sc.expl
      });
    }

    // ----------------------------------------------------
    // LESSON 7: CONTRAST be going to vs will - ~35 QUESTIONS
    // ----------------------------------------------------
    const contrastScenarios = [
      {
        q: "A: The phone is ringing! B: I ________ (answer) it! (quyết định ngay lúc đó)",
        ans: "will answer",
        options: ["will answer", "am going to answer", "answer", "answered"],
        trans: "A: Điện thoại đang reo! B: Tôi sẽ nghe máy!",
        expl: "Quyết định tự phát ngay lúc nghe điện thoại reo → will."
      },
      {
        q: "Look at him! He ________ (fall)! (đang thấy ngay trước mắt)",
        ans: "is going to fall",
        options: ["is going to fall", "will fall", "falls", "fell"],
        trans: "Nhìn anh ta kìa! Anh ta sắp ngã rồi!",
        expl: "Người nói đang thấy bằng chứng (anh ta đang mất thăng bằng) → be going to."
      },
      {
        q: "She has already bought the tickets. She ________ (fly) to Paris next week.",
        ans: "is going to fly",
        options: ["is going to fly", "will fly", "flies", "flew"],
        trans: "Cô ấy đã mua vé rồi. Cô ấy sẽ bay đến Paris tuần tới.",
        expl: "Đã có kế hoạch, đã mua vé từ trước → be going to."
      },
      {
        q: "I think he ________ (win) the competition. (dự đoán cá nhân)",
        ans: "will win",
        options: ["will win", "is going to win", "wins", "won"],
        trans: "Tôi nghĩ anh ấy sẽ thắng cuộc thi.",
        expl: "Dự đoán cá nhân không có bằng chứng rõ ràng ('I think') → will."
      },
      {
        q: "Watch out! The baby ________ (cry)! (đang thấy em bé chuẩn bị khóc)",
        ans: "is going to cry",
        options: ["is going to cry", "will cry", "cries", "is crying"],
        trans: "Cẩn thận! Em bé sắp khóc rồi!",
        expl: "Có bằng chứng hiện tại (thấy em bé nhăn mặt) → be going to."
      },
      {
        q: "A: I'm cold! B: I ________ (close) the window. (quyết định vừa nảy ra)",
        ans: "will close",
        options: ["will close", "am going to close", "close", "closed"],
        trans: "A: Tôi lạnh! B: Tôi sẽ đóng cửa sổ lại.",
        expl: "B quyết định ngay khi nghe A nói lạnh → quyết định tự phát → will."
      }
    ];
    for (let i = 0; i < 35; i++) {
      const sc = contrastScenarios[i % contrastScenarios.length];
      // Avoid sort type for dialogue-format questions (they contain "A:" and "B:" which break sorting)
      const isDialogue = sc.q.startsWith("A:");
      const type = isDialogue ? (i % 2 === 0 ? "choice" : "fill") : (i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort"));
      if (type === "sort" && !isDialogue) {
        const cleanAnswer = sc.q.replace(/\s*\(.*?\)\s*/, ` ${sc.ans} `).replace(/\s*\(.*?\)\s*/, "").replace(/\s+/g, " ").trim();
        pushSortQuestion(7, sc.ans.startsWith("is") || sc.ans.startsWith("are") || sc.ans.startsWith("am") ? "am/is/are + going to" : "will", cleanAnswer, sc.trans, sc.expl);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 7,
          type: isDialogue ? (i % 2 === 0 ? "choice" : "fill") : type,
          question: sc.q,
          options: shuffle(sc.options),
          answer: sc.ans,
          rule: sc.ans.startsWith("is") || sc.ans.startsWith("are") || sc.ans.startsWith("am") ? "be going to – evidence" : "will – spontaneous",
          translation: sc.trans,
          explanation: sc.expl
        });
      }
    }

    // ----------------------------------------------------
    // LESSON 8: CONDITIONAL TYPE 1 - ~35 QUESTIONS
    // ----------------------------------------------------
    const conditionalScenarios = [
      {
        q: "If she comes, I ________ (go) with her.",
        ans: "will go",
        options: ["will go", "am going to go", "go", "went"],
        trans: "Nếu cô ấy đến, tôi sẽ đi cùng.",
        expl: "Câu điều kiện loại 1: mệnh đề If dùng HTĐ (comes), mệnh đề chính dùng will + V."
      },
      {
        q: "If it stops raining soon, we ________ (go) to the cinema.",
        ans: "will go",
        options: ["will go", "are going to go", "go", "would go"],
        trans: "Nếu trời ngừng mưa sớm, chúng tôi sẽ đi xem phim.",
        expl: "Câu điều kiện loại 1: if + HTĐ → will + V nguyên mẫu."
      },
      {
        q: "If you study hard, you ________ (pass) the exam.",
        ans: "will pass",
        options: ["will pass", "are going to pass", "pass", "would pass"],
        trans: "Nếu bạn học chăm chỉ, bạn sẽ vượt qua kỳ thi.",
        expl: "Câu điều kiện loại 1 diễn tả điều có thể xảy ra ở tương lai."
      },
      {
        q: "If he doesn't hurry, he ________ (miss) the bus.",
        ans: "will miss",
        options: ["will miss", "is going to miss", "miss", "would miss"],
        trans: "Nếu anh ấy không vội, anh ấy sẽ lỡ xe buýt.",
        expl: "Câu điều kiện loại 1: If + HTĐ phủ định, will + V nguyên mẫu."
      },
      {
        q: "Will you please ________ (help) me with this? (lời yêu cầu)",
        ans: "help",
        options: ["help", "helps", "helping", "helped"],
        trans: "Bạn có thể giúp tôi việc này không?",
        expl: "Sau will/won't luôn dùng V nguyên mẫu, không thêm -s hay -ing."
      },
      {
        q: "If she ________ (come) to the party, I will introduce her to my friends.",
        ans: "comes",
        options: ["comes", "will come", "is going to come", "came"],
        trans: "Nếu cô ấy đến bữa tiệc, tôi sẽ giới thiệu cô ấy với bạn bè tôi.",
        expl: "Mệnh đề If trong câu điều kiện loại 1 dùng HTĐ (comes), KHÔNG dùng will."
      }
    ];
    for (let i = 0; i < 35; i++) {
      const sc = conditionalScenarios[i % conditionalScenarios.length];
      const type = i % 2 === 0 ? "choice" : "fill";
      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: 8,
        type: type,
        question: sc.q,
        options: shuffle(sc.options),
        answer: sc.ans,
        rule: "if + present simple",
        translation: sc.trans,
        explanation: sc.expl
      });
    }

    // ----------------------------------------------------
    // LESSON 9: ERROR CORRECTION & COMPREHENSIVE - ~35 QUESTIONS
    // ----------------------------------------------------
    const errorFixes = [
      {
        wrong: "She am going to travel next month.",
        right: "She is going to travel next month",
        desc: "'She' là ngôi thứ ba số ít → phải dùng 'is', không dùng 'am'.",
        rule: "am/is/are + going to",
        trans: "Cô ấy dự định đi du lịch vào tháng tới."
      },
      {
        wrong: "I am going to go to the party tonight.",
        right: "I am going to the party tonight",
        desc: "Khi động từ chính là 'go', ta chỉ dùng 'be going to' mà không thêm 'go'.",
        rule: "am/is/are + going to",
        trans: "Tôi sẽ đến bữa tiệc tối nay."
      },
      {
        wrong: "She wills help you tomorrow.",
        right: "She will help you tomorrow",
        desc: "Will không bao giờ thêm -s dù chủ ngữ là ngôi thứ ba số ít.",
        rule: "will",
        trans: "Cô ấy sẽ giúp bạn ngày mai."
      },
      {
        wrong: "If she will come, I will go with her.",
        right: "If she comes, I will go with her",
        desc: "Mệnh đề If trong câu điều kiện loại 1 dùng Hiện tại đơn, KHÔNG dùng will.",
        rule: "if + present simple",
        trans: "Nếu cô ấy đến, tôi sẽ đi cùng."
      },
      {
        wrong: "Look! It will rain! (seeing dark clouds)",
        right: "Look! It is going to rain",
        desc: "Có bằng chứng hiện tại (mây đen) → dùng 'be going to', không dùng will.",
        rule: "be going to – evidence",
        trans: "Nhìn kìa! Trời sắp mưa!"
      },
      {
        wrong: "They aren't going to will stay.",
        right: "They aren't going to stay",
        desc: "Sau 'going to' chỉ dùng V nguyên mẫu, không được thêm 'will' vào giữa.",
        rule: "am/is/are + going to",
        trans: "Họ không dự định ở lại."
      }
    ];
    for (let i = 0; i < 35; i++) {
      const item = errorFixes[i % errorFixes.length];
      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: 9,
        type: "choice",
        question: `Chọn câu sửa lỗi ngữ pháp ĐÚNG nhất cho câu: "${item.wrong}"`,
        options: shuffle([
          item.right,
          item.wrong,
          item.right.replace("is going to", "are going to").replace("am going to", "is going to").replace("will ", "wills "),
          item.right.replace("will ", "don't ").replace("is going to", "am going to")
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
