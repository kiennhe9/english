(function () {
  const unit = window.UNITS_REGISTRY && window.UNITS_REGISTRY["unit5"];
  if (!unit) {
    console.error("Unit 5 lessons not registered yet. Please check script loading order.");
    return;
  }

  const { SUBJECTS_POOL, VERBS_CONT, VERBS_PERF, TIMES_AT, TIMES_BY } = unit.pools;

  function translateSubject(text) {
    const map = {
      "I": "Tôi", "You": "Bạn", "We": "Chúng tôi", "They": "Họ",
      "He": "Anh ấy", "She": "Cô ấy", "It": "Nó",
      "Peter": "Peter", "Mary": "Mary", "Lan": "Lan",
      "My mother": "Mẹ tôi", "My parents": "Bố mẹ tôi", "The students": "Các học sinh"
    };
    return map[text] || text;
  }

  function toLowerFirst(str) {
    const properNouns = ["Peter", "Mary", "Lan", "I"];
    for (let noun of properNouns) {
      if (str.startsWith(noun)) return str;
    }
    return str.charAt(0).toLowerCase() + str.slice(1);
  }

  const SORT_PROMPTS = [
    "Sắp xếp các từ thành câu hoàn chỉnh:",
    "Ghép các từ sau đây thành một câu đúng ngữ pháp:",
    "Dịch sang tiếng Anh bằng cách sắp xếp từ:",
    "Xếp lại thứ tự các từ để tạo câu có nghĩa:",
    "Tạo câu đúng từ các từ cho sẵn:"
  ];

  function generateQuestionBank(shuffle) {
    const QUESTION_BANK = generateQuestionBank.__injectBank || [];
    let id = 1;
    let sortPromptIdx = 0;

    function getRandom(arr, i) { return arr[i % arr.length]; }

    function pushSort(lessonId, rule, answer, translation, explanation) {
      const words = answer
        .replace(/[.,\/#!$%\^\&\*;:{}=\-_`~()?]/g, "")
        .split(/\s+/)
        .filter(w => w.trim() !== "");
      const prompt = SORT_PROMPTS[sortPromptIdx % SORT_PROMPTS.length];
      sortPromptIdx++;
      QUESTION_BANK.push({
        id: `q-${id++}`, lessonId, type: "sort",
        question: `${prompt} "${translation}"`,
        words, answer: answer.replace(/[.,\/#!$%\^\&\*;:{}=\-_`~()?]/g, "").replace(/\s+/g, " ").trim() + ".",
        rule, translation, explanation
      });
    }

    // ----------------------------------------------------------------
    // LESSON 1: FUTURE CONTINUOUS AFFIRMATIVE ~35
    // ----------------------------------------------------------------
    for (let i = 0; i < 35; i++) {
      const isSingular = i % 2 === 0;
      const s = getRandom(isSingular ? SUBJECTS_POOL.singular : SUBJECTS_POOL.plural, i);
      const v = getRandom(VERBS_CONT, i);
      const t = getRandom(TIMES_AT, i);
      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");
      const translation = `${translateSubject(s.text)} sẽ đang ${v.viet} ${t.vi}.`;
      const explanation = `Tương lai tiếp diễn: 'will be' + V-ing '${v.ing}'. Thời điểm '${t.en}' xác định hành động đang diễn ra.`;
      const correctAns = `will be ${v.ing}`;

      if (type === "sort") {
        const obj = v.obj ? " " + v.obj : "";
        pushSort(1, "will + be + V-ing", `${s.text} will be ${v.ing}${obj} ${t.en}`, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`, lessonId: 1, type,
          question: `${s.text} ________ (${v.base})${v.obj ? " " + v.obj : ""} ${t.en}.`,
          options: shuffle([correctAns, `will ${v.ing}`, `will be ${v.base}`, `is going to be ${v.ing}`]),
          answer: correctAns,
          rule: "will + be + V-ing", translation, explanation
        });
      }
    }

    // ----------------------------------------------------------------
    // LESSON 2: FUTURE CONTINUOUS NEGATIVE & QUESTIONS ~35
    // ----------------------------------------------------------------
    // Phủ định ~20
    for (let i = 0; i < 20; i++) {
      const isSingular = i % 2 === 0;
      const s = getRandom(isSingular ? SUBJECTS_POOL.singular : SUBJECTS_POOL.plural, i);
      const v = getRandom(VERBS_CONT, i);
      const t = getRandom(TIMES_AT, i);
      const type = i % 2 === 0 ? "choice" : "fill";
      const translation = `${translateSubject(s.text)} sẽ không đang ${v.viet} ${t.vi}.`;
      const explanation = `Phủ định TLTD: 'won't be' + V-ing '${v.ing}'. Không dùng doesn't/didn't.`;
      QUESTION_BANK.push({
        id: `q-${id++}`, lessonId: 2, type,
        question: `${s.text} ________ (not ${v.base})${v.obj ? " " + v.obj : ""} ${t.en}.`,
        options: shuffle([`won't be ${v.ing}`, `don't be ${v.ing}`, `won't be ${v.base}`, `isn't going to be ${v.ing}`]),
        answer: `won't be ${v.ing}`,
        rule: "won't be V-ing", translation, explanation
      });
    }
    // Nghi vấn ~15
    for (let i = 0; i < 15; i++) {
      const isSingular = i % 2 === 0;
      const s = getRandom(isSingular ? SUBJECTS_POOL.singular : SUBJECTS_POOL.plural, i);
      const v = getRandom(VERBS_CONT, i);
      const t = getRandom(TIMES_AT, i);
      const type = i % 2 === 0 ? "choice" : "sort";
      const translation = `Có phải ${toLowerFirst(translateSubject(s.text))} sẽ đang ${v.viet} ${t.vi} không?`;
      const explanation = `Nghi vấn TLTD: Đảo 'Will' lên đầu. Công thức: Will + S + be + V-ing?`;
      if (type === "sort") {
        const obj = v.obj ? " " + v.obj : "";
        pushSort(2, "will + be + V-ing", `Will ${toLowerFirst(s.text)} be ${v.ing}${obj} ${t.en}`, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`, lessonId: 2, type: "choice",
          question: `________ ${toLowerFirst(s.text)} be ${v.ing}${v.obj ? " " + v.obj : ""} ${t.en}?`,
          options: shuffle(["Will", "Is", "Does", "Was"]),
          answer: "Will",
          rule: "will + be + V-ing", translation, explanation
        });
      }
    }

    // ----------------------------------------------------------------
    // LESSON 3: FUTURE CONTINUOUS USES & SIGNALS ~35
    // ----------------------------------------------------------------
    // At this time – mốc thời gian xác định ~20
    for (let i = 0; i < 20; i++) {
      const isSingular = i % 2 === 0;
      const s = getRandom(isSingular ? SUBJECTS_POOL.singular : SUBJECTS_POOL.plural, i);
      const v = getRandom(VERBS_CONT, i);
      const t = getRandom(TIMES_AT, i);
      const type = i % 2 === 0 ? "choice" : "fill";
      const translation = `${translateSubject(s.text)} sẽ đang ${v.viet} ${t.vi}.`;
      const explanation = `Dấu hiệu '${t.en}' (at + giờ/thời điểm + tương lai) → dùng TLTD, không dùng TLHT.`;
      // Use v.v3 if it's also in VERBS_CONT context – actually VERBS_CONT has no v3.
      // Wrong option for "will have VpII" uses a static plausible incorrect form
      const wrongPerfect = `will have ${v.ing.replace("ing", "ed")}`;
      QUESTION_BANK.push({
        id: `q-${id++}`, lessonId: 3, type,
        question: `${s.text} ________ (${v.base})${v.obj ? " " + v.obj : ""} ${t.en}.`,
        options: shuffle([`will be ${v.ing}`, `will ${v.ing}`, wrongPerfect, `was ${v.ing}`]),
        answer: `will be ${v.ing}`,
        rule: "TLTD – at time", translation, explanation
      });
    }
    // When + HTĐ, TLTD ~15
    const whenScenarios = [
      { q: "When you ________ (come) tomorrow, they will be playing tennis.", ans: "come", options: ["come", "will come", "will be coming", "came"], trans: "Khi bạn đến vào ngày mai, họ sẽ đang chơi tennis.", expl: "Mệnh đề 'when' trong kết hợp với TLTD → dùng HTĐ (come), KHÔNG dùng will." },
      { q: "She will be waiting for me when I ________ (arrive) tomorrow.", ans: "arrive", options: ["arrive", "will arrive", "will be arriving", "arrived"], trans: "Cô ấy sẽ đang đợi tôi khi tôi đến vào ngày mai.", expl: "Mệnh đề 'when' → dùng HTĐ (arrive). Mệnh đề chính dùng TLTD." },
      { q: "When he ________ (get) home, his wife will be cooking dinner.", ans: "gets", options: ["gets", "will get", "will be getting", "got"], trans: "Khi anh ấy về nhà, vợ anh ấy sẽ đang nấu cơm tối.", expl: "Mệnh đề 'when' dùng HTĐ (gets = ngôi thứ ba số ít), không dùng will." },
      { q: "I will be sleeping when the alarm ________ (ring) at 6 a.m.", ans: "rings", options: ["rings", "will ring", "will be ringing", "rang"], trans: "Tôi sẽ đang ngủ khi chuông báo thức kêu lúc 6h sáng.", expl: "Mệnh đề 'when' dùng HTĐ (rings). TLTD ở mệnh đề chính." },
      { q: "They will be having a meeting when you ________ (call) at noon.", ans: "call", options: ["call", "will call", "will be calling", "called"], trans: "Họ sẽ đang họp khi bạn gọi điện vào buổi trưa.", expl: "Mệnh đề 'when' → HTĐ (call), mệnh đề chính → TLTD (will be having)." }
    ];
    for (let i = 0; i < 15; i++) {
      const sc = whenScenarios[i % whenScenarios.length];
      const type = i % 2 === 0 ? "choice" : "fill";
      QUESTION_BANK.push({
        id: `q-${id++}`, lessonId: 3, type,
        question: sc.q, options: shuffle(sc.options), answer: sc.ans,
        rule: "TLTD – when clause", translation: sc.trans, explanation: sc.expl
      });
    }

    // ----------------------------------------------------------------
    // LESSON 4: FUTURE PERFECT AFFIRMATIVE ~35
    // ----------------------------------------------------------------
    for (let i = 0; i < 35; i++) {
      const isSingular = i % 2 === 0;
      const s = getRandom(isSingular ? SUBJECTS_POOL.singular : SUBJECTS_POOL.plural, i);
      const v = getRandom(VERBS_PERF, i);
      const t = getRandom(TIMES_BY, i);
      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");
      const translation = `${translateSubject(s.text)} sẽ ${v.viet} ${t.vi}.`;
      const explanation = `Tương lai hoàn thành: 'will have' + VpII '${v.v3}'. Dấu hiệu '${t.en}' chỉ thời điểm hoàn thành.`;
      const correctAns = `will have ${v.v3}`;
      if (type === "sort") {
        pushSort(4, "will + have + VpII", `${s.text} will have ${v.v3} ${v.obj} ${t.en}`, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`, lessonId: 4, type,
          question: `${s.text} ________ (${v.base}) ${v.obj} ${t.en}.`,
          options: shuffle([correctAns, `will have ${v.base}`, `will be ${v.v3}`, `have ${v.v3}`]),
          answer: correctAns,
          rule: "will + have + VpII", translation, explanation
        });
      }
    }

    // ----------------------------------------------------------------
    // LESSON 5: FUTURE PERFECT NEGATIVE & QUESTIONS ~35
    // ----------------------------------------------------------------
    // Phủ định ~20
    for (let i = 0; i < 20; i++) {
      const isSingular = i % 2 === 0;
      const s = getRandom(isSingular ? SUBJECTS_POOL.singular : SUBJECTS_POOL.plural, i);
      const v = getRandom(VERBS_PERF, i);
      const t = getRandom(TIMES_BY, i);
      const type = i % 2 === 0 ? "choice" : "fill";
      const translation = `${translateSubject(s.text)} sẽ vẫn chưa ${v.viet} ${t.vi}.`;
      const explanation = `Phủ định TLHT: 'won't have' + VpII '${v.v3}'. Không dùng haven't/hasn't.`;
      QUESTION_BANK.push({
        id: `q-${id++}`, lessonId: 5, type,
        question: `${s.text} ________ (not ${v.base}) ${v.obj} ${t.en}.`,
        options: shuffle([`won't have ${v.v3}`, `hasn't ${v.v3}`, `won't have ${v.base}`, `didn't have ${v.v3}`]),
        answer: `won't have ${v.v3}`,
        rule: "won't have VpII", translation, explanation
      });
    }
    // Nghi vấn ~15
    for (let i = 0; i < 15; i++) {
      const isSingular = i % 2 === 0;
      const s = getRandom(isSingular ? SUBJECTS_POOL.singular : SUBJECTS_POOL.plural, i);
      const v = getRandom(VERBS_PERF, i);
      const t = getRandom(TIMES_BY, i);
      const type = i % 2 === 0 ? "choice" : "sort";
      const translation = `Có phải ${toLowerFirst(translateSubject(s.text))} sẽ ${v.viet} ${t.vi} không?`;
      const explanation = `Nghi vấn TLHT: Đảo 'Will' lên đầu. Will + S + have + VpII?`;
      if (type === "sort") {
        pushSort(5, "will + have + VpII", `Will ${toLowerFirst(s.text)} have ${v.v3} ${v.obj} ${t.en}`, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`, lessonId: 5, type: "choice",
          question: `________ ${toLowerFirst(s.text)} have ${v.v3} ${v.obj} ${t.en}?`,
          options: shuffle(["Will", "Have", "Has", "Did"]),
          answer: "Will",
          rule: "will + have + VpII", translation, explanation
        });
      }
    }

    // ----------------------------------------------------------------
    // LESSON 6: FUTURE PERFECT USES & SIGNALS ~35
    // ----------------------------------------------------------------
    const byScenarios = [
      { q: "I ________ (finish) my homework before 12 o'clock tonight.", ans: "will have finished", options: ["will have finished", "will finish", "will be finishing", "have finished"], trans: "Tôi sẽ hoàn thành bài tập trước 12h đêm nay.", expl: "Dấu hiệu 'before + thời gian TL' → TLHT: will have + VpII." },
      { q: "By the time you arrive, I ________ (cook) dinner.", ans: "will have cooked", options: ["will have cooked", "will cook", "will be cooking", "have cooked"], trans: "Trước khi bạn đến, tôi sẽ nấu xong bữa tối rồi.", expl: "Dấu hiệu 'By the time + mệnh đề HTĐ' → TLHT." },
      { q: "She ________ (complete) the project by next Friday.", ans: "will have completed", options: ["will have completed", "will complete", "will be completing", "has completed"], trans: "Cô ấy sẽ hoàn thành dự án trước thứ Sáu tuần tới.", expl: "Dấu hiệu 'by next Friday' → TLHT: will have + VpII." },
      { q: "By the end of this year, they ________ (live) here for 10 years.", ans: "will have lived", options: ["will have lived", "will live", "will be living", "have lived"], trans: "Đến cuối năm nay, họ sẽ đã sống ở đây được 10 năm rồi.", expl: "Dấu hiệu 'By the end of this year' → TLHT." },
      { q: "When you come back, I ________ (type) this email.", ans: "will have typed", options: ["will have typed", "will type", "will be typing", "have typed"], trans: "Khi bạn quay lại, tôi sẽ đánh máy xong bức thư này rồi.", expl: "Hành động hoàn thành TRƯỚC khi bạn quay lại → TLHT." },
      { q: "He ________ (read) 5 books by the end of this month.", ans: "will have read", options: ["will have read", "will read", "will be reading", "has read"], trans: "Anh ấy sẽ đọc xong 5 cuốn sách trước cuối tháng này.", expl: "Dấu hiệu 'by the end of this month' → TLHT." }
    ];
    for (let i = 0; i < 35; i++) {
      const sc = byScenarios[i % byScenarios.length];
      const type = i % 2 === 0 ? "choice" : "fill";
      QUESTION_BANK.push({
        id: `q-${id++}`, lessonId: 6, type,
        question: sc.q, options: shuffle(sc.options), answer: sc.ans,
        rule: "TLHT – by/before", translation: sc.trans, explanation: sc.expl
      });
    }

    // ----------------------------------------------------------------
    // LESSON 7: CONTRAST TLTD vs TLHT ~35
    // ----------------------------------------------------------------
    const contrastScenarios = [
      { q: "At 8 a.m tomorrow, I ________ (sleep). (đang ngủ tại thời điểm đó)", ans: "will be sleeping", options: ["will be sleeping", "will have slept", "sleep", "will sleep"], trans: "Lúc 8h sáng ngày mai, tôi sẽ đang ngủ.", expl: "'At 8 a.m' = tại thời điểm đó đang xảy ra → TLTD (will be V-ing)." },
      { q: "By 8 a.m tomorrow, I ________ (finish) my work. (hoàn thành trước 8h)", ans: "will have finished", options: ["will have finished", "will be finishing", "will finish", "have finished"], trans: "Trước 8h sáng ngày mai, tôi sẽ xong việc rồi.", expl: "'By 8 a.m' = hoàn thành trước mốc đó → TLHT (will have VpII)." },
      { q: "When you arrive, she ________ (cook) dinner. (đang nấu lúc bạn đến)", ans: "will be cooking", options: ["will be cooking", "will have cooked", "will cook", "cooks"], trans: "Khi bạn đến, cô ấy sẽ đang nấu cơm tối.", expl: "When + HTĐ, TLTD: hành động đang diễn ra tại thời điểm bạn đến." },
      { q: "By the time you arrive, she ________ (cook) dinner. (nấu xong trước khi bạn đến)", ans: "will have cooked", options: ["will have cooked", "will be cooking", "will cook", "has cooked"], trans: "Trước khi bạn đến, cô ấy sẽ nấu xong cơm tối rồi.", expl: "'By the time + HTĐ' → TLHT: hoàn thành trước khi bạn đến." },
      { q: "At this time next Saturday, we ________ (climb) the mountain.", ans: "will be climbing", options: ["will be climbing", "will have climbed", "will climb", "are climbing"], trans: "Vào thời điểm này thứ Bảy tuần tới, chúng tôi sẽ đang leo núi.", expl: "'At this time next Saturday' → TLTD." },
      { q: "By next Saturday, we ________ (climb) the mountain.", ans: "will have climbed", options: ["will have climbed", "will be climbing", "will climb", "climbed"], trans: "Trước thứ Bảy tuần tới, chúng tôi sẽ leo xong núi rồi.", expl: "'By next Saturday' → TLHT." }
    ];
    for (let i = 0; i < 35; i++) {
      const sc = contrastScenarios[i % contrastScenarios.length];
      const type = i % 2 === 0 ? "choice" : "fill";
      QUESTION_BANK.push({
        id: `q-${id++}`, lessonId: 7, type,
        question: sc.q, options: shuffle(sc.options), answer: sc.ans,
        rule: "at vs by", translation: sc.trans, explanation: sc.expl
      });
    }

    // ----------------------------------------------------------------
    // LESSON 8: ERROR CORRECTION ~35
    // ----------------------------------------------------------------
    const errorFixes = [
      { wrong: "I will working at 9 am tomorrow.", right: "I will be working at 9 am tomorrow", desc: "TLTD cần đủ 3 thành phần: will + be + V-ing. Thiếu 'be' là sai.", rule: "will + be + V-ing", trans: "Tôi sẽ đang làm việc lúc 9h sáng ngày mai." },
      { wrong: "She will has finished the report by 5 pm.", right: "She will have finished the report by 5 pm", desc: "Sau 'will' luôn dùng 'have' (không chia theo ngôi), không dùng 'has'.", rule: "will + have + VpII", trans: "Cô ấy sẽ hoàn thành báo cáo trước 5h chiều." },
      { wrong: "They will have went out before I come back.", right: "They will have gone out before I come back", desc: "Sau 'will have' phải dùng VpII (phân từ 2) là 'gone', không dùng V2 là 'went'.", rule: "will + have + VpII", trans: "Họ sẽ ra ngoài trước khi tôi trở lại." },
      { wrong: "When she will be waiting for you, call me.", right: "When she is waiting for you, call me", desc: "Mệnh đề 'when' không dùng will/TLTD. Dùng HTTĐ hoặc HTĐ.", rule: "TLTD – when clause", trans: "Khi cô ấy đang đợi bạn, hãy gọi cho tôi." },
      { wrong: "By 10 am tomorrow, I will be finished the report.", right: "By 10 am tomorrow, I will have finished the report", desc: "Dấu hiệu 'by' → TLHT (will have VpII), không dùng TLTD (will be V-ing).", rule: "TLHT – by/before", trans: "Trước 10h sáng ngày mai, tôi sẽ hoàn thành báo cáo." },
      { wrong: "At 3 pm tomorrow, he will have sleeping.", right: "At 3 pm tomorrow, he will be sleeping", desc: "Dấu hiệu 'at [giờ]' → TLTD (will be V-ing), không dùng TLHT (will have VpII).", rule: "TLTD – at time", trans: "Lúc 3h chiều ngày mai, anh ấy sẽ đang ngủ." }
    ];
    for (let i = 0; i < 35; i++) {
      const item = errorFixes[i % errorFixes.length];
      const distractor1 = item.right
        .replace("will be", "will")
        .replace("will have", "will has");
      const distractor2 = item.right
        .replace("will be", "was being")
        .replace("will have", "had");
      QUESTION_BANK.push({
        id: `q-${id++}`, lessonId: 8, type: "choice",
        question: `Chọn câu sửa lỗi ngữ pháp ĐÚNG nhất cho câu: "${item.wrong}"`,
        options: shuffle([item.right, item.wrong, distractor1, distractor2]),
        answer: item.right,
        rule: item.rule, translation: item.trans, explanation: item.desc
      });
    }
  }

  unit.generateQuestions = function (shuffle) {
    const bank = [];
    generateQuestionBank.__injectBank = bank;
    generateQuestionBank(shuffle);
    return bank;
  };
})();
