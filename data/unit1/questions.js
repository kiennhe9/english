(function () {
  const unit = window.UNITS_REGISTRY && window.UNITS_REGISTRY["unit1"];
  if (!unit) {
    console.error("Unit 1 lessons not registered yet. Please check script loading order.");
    return;
  }

  // Retrieve pools from registered unit
  const { SUBJECTS_POOL, PREDICATES_TOBE, VERBS_ACTION, SPELLING_VERBS_ING, VERBS_STATIVE, ADVERBS_FREQUENCY } = unit.pools;

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
      "Nam": "Nam",
      "John": "John",
      "My brother": "Anh trai tôi",
      "My sister": "Chị gái tôi",
      "My father": "Bố tôi",
      "My parents": "Bố mẹ tôi",
      "My brothers": "Các anh trai của tôi",
      "The doctor": "Bác sĩ",
      "The student": "Học sinh",
      "The students": "Các học sinh",
      "The train": "Tàu hỏa",
      "The flight": "Chuyến bay",
      "Lan and Nam": "Lan và Nam",
      "Peter and Mary": "Peter và Mary",
      "The cats": "Những con mèo",
      "The teachers": "Các giáo viên"
    };
    return subMap[text] || text;
  }

  function toLowerFirst(str) {
    const properNouns = ["Peter", "Mary", "Lan", "Nam", "John", "I"];
    for (let noun of properNouns) {
      if (str.startsWith(noun)) return str;
    }
    return str.charAt(0).toLowerCase() + str.slice(1);
  }

  const spellingVerbTranslations = {
    "learn": "học",
    "look": "nhìn",
    "sing": "hát",
    "take": "cầm, lấy",
    "dance": "nhảy múa",
    "age": "già đi",
    "make": "làm, chế tạo",
    "ride": "cưỡi, lái xe",
    "see": "nhìn thấy",
    "agree": "đồng ý",
    "free": "giải phóng",
    "lie": "nằm, nói dối",
    "die": "chết",
    "win": "chiến thắng",
    "stop": "dừng lại",
    "shop": "mua sắm",
    "run": "chạy",
    "prefer": "thích hơn",
    "begin": "bắt đầu",
    "transfer": "chuyển khoản, di chuyển",
    "traffic": "giao thương, đi lại",
    "mimic": "bắt chước",
    "panic": "hoảng loạn"
  };

  const stativeTransMap = {
    "see": "nhìn thấy",
    "hear": "nghe thấy",
    "taste": "nếm",
    "feel": "cảm thấy",
    "sound": "nghe có vẻ",
    "belong to": "thuộc về",
    "own": "sở hữu",
    "like": "thích",
    "love": "yêu",
    "hate": "ghét",
    "prefer": "thích hơn",
    "need": "cần",
    "know": "biết",
    "understand": "hiểu",
    "want": "muốn",
    "remember": "nhớ",
    "forget": "quên",
    "believe": "tin"
  };

  // --- DIVERSE TIME EXPRESSIONS ---
  const TIMES_HABIT = [
    { en: "every day", vi: "mỗi ngày" },
    { en: "every morning", vi: "mỗi sáng" },
    { en: "every evening", vi: "mỗi tối" },
    { en: "every weekend", vi: "mỗi cuối tuần" },
    { en: "after school", vi: "sau giờ học" },
    { en: "before breakfast", vi: "trước bữa sáng" },
    { en: "in the morning", vi: "vào buổi sáng" },
    { en: "at night", vi: "vào ban đêm" },
    { en: "on weekdays", vi: "vào các ngày trong tuần" },
    { en: "twice a week", vi: "hai lần một tuần" }
  ];

  const TIMES_NEGATIVE = [
    { en: "on Sunday", vi: "vào ngày Chủ Nhật" },
    { en: "in winter", vi: "vào mùa đông" },
    { en: "at night", vi: "vào ban đêm" },
    { en: "on holidays", vi: "vào ngày lễ" },
    { en: "after 10 PM", vi: "sau 10 giờ tối" },
    { en: "on rainy days", vi: "vào những ngày mưa" },
    { en: "during summer", vi: "trong mùa hè" }
  ];

  // --- DIVERSE SORT PROMPTS ---
  const SORT_PROMPTS = [
    "Sắp xếp các từ thành câu hoàn chỉnh:",
    "Ghép các từ sau đây thành một câu đúng ngữ pháp:",
    "Dịch sang tiếng Anh bằng cách sắp xếp từ:",
    "Xếp lại thứ tự các từ để tạo câu có nghĩa:",
    "Tạo câu đúng từ các từ cho sẵn:"
  ];

  // --- DIVERSE VERB CONTEXTS ---
  const VERB_CONTEXTS = {
    "go": [
      { obj: "to school", viet: "đi học" },
      { obj: "to work", viet: "đi làm" },
      { obj: "to the gym", viet: "đi tập thể dục" },
      { obj: "to the park", viet: "ra công viên" }
    ],
    "work": [
      { obj: "at a bank", viet: "làm việc ở ngân hàng" },
      { obj: "at a hospital", viet: "làm việc ở bệnh viện" },
      { obj: "from home", viet: "làm việc ở nhà" },
      { obj: "very hard", viet: "làm việc chăm chỉ" }
    ],
    "play": [
      { obj: "football", viet: "đá bóng" },
      { obj: "the guitar", viet: "chơi đàn ghi-ta" },
      { obj: "video games", viet: "chơi trò chơi điện tử" },
      { obj: "basketball", viet: "chơi bóng rổ" }
    ],
    "visit": [
      { obj: "grandparents", viet: "thăm ông bà" },
      { obj: "friends", viet: "thăm bạn bè" },
      { obj: "the museum", viet: "thăm bảo tàng" }
    ],
    "brush": [
      { obj: "teeth", viet: "đánh răng" }
    ],
    "watch": [
      { obj: "television", viet: "xem tivi" },
      { obj: "movies", viet: "xem phim" },
      { obj: "a football match", viet: "xem trận bóng đá" }
    ],
    "wash": [
      { obj: "the car", viet: "rửa xe" },
      { obj: "the dishes", viet: "rửa bát" },
      { obj: "clothes", viet: "giặt quần áo" }
    ],
    "study": [
      { obj: "English", viet: "học tiếng Anh" },
      { obj: "Math", viet: "học Toán" },
      { obj: "for the exam", viet: "ôn thi" }
    ],
    "fly": [
      { obj: "a kite", viet: "thả diều" }
    ],
    "cry": [
      { obj: "loudly", viet: "khóc to" }
    ],
    "fry": [
      { obj: "fish", viet: "rán cá" },
      { obj: "eggs", viet: "chiên trứng" }
    ],
    "stay": [
      { obj: "at home", viet: "ở nhà" },
      { obj: "at a hotel", viet: "ở khách sạn" }
    ],
    "buy": [
      { obj: "groceries", viet: "mua thực phẩm" },
      { obj: "a new book", viet: "mua sách mới" },
      { obj: "coffee", viet: "mua cà phê" }
    ],
    "pay": [
      { obj: "bills", viet: "thanh toán hóa đơn" },
      { obj: "the rent", viet: "trả tiền thuê nhà" }
    ]
  };

  function getVerbContext(verb, index) {
    const contexts = VERB_CONTEXTS[verb.base];
    if (contexts && contexts.length > 0) {
      return contexts[index % contexts.length];
    }
    return { obj: verb.obj, viet: verb.viet };
  }

  // --- DIVERSE TRANSLATION PATTERNS ---
  function makeHabitTranslation(subVi, verbVi, timeVi, index) {
    const patterns = [
      `${subVi} ${verbVi} ${timeVi}.`,
      `${timeVi.charAt(0).toUpperCase() + timeVi.slice(1)}, ${subVi.toLowerCase()} đều ${verbVi}.`,
      `${subVi} hay ${verbVi} ${timeVi}.`,
      `${subVi} thường ${verbVi} ${timeVi}.`
    ];
    return patterns[index % patterns.length];
  }

  function makeNegTranslation(subVi, verbVi, timeVi, index) {
    const patterns = [
      `${subVi} không ${verbVi} ${timeVi}.`,
      `${subVi} không hay ${verbVi} ${timeVi}.`,
      `${timeVi.charAt(0).toUpperCase() + timeVi.slice(1)}, ${subVi.toLowerCase()} không ${verbVi}.`
    ];
    return patterns[index % patterns.length];
  }

  // ------------------------------------------------------------------
  // QUESTION GENERATOR
  // ------------------------------------------------------------------
  function generateQuestionBank(shuffle) {
    const QUESTION_BANK = generateQuestionBank.__injectBank || [];
    let id = 1;
    let sortPromptIdx = 0;

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
    // LESSON 1: TO BE - ~80 QUESTIONS
    // ----------------------------------------------------
    // Positive choice & fill
    for (let i = 0; i < 40; i++) {
      const isSingular = i % 2 === 0;
      const subPool = isSingular ? SUBJECTS_POOL.singular : SUBJECTS_POOL.plural;
      const s = subPool[i % subPool.length];
      const p = PREDICATES_TOBE[i % PREDICATES_TOBE.length];
      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");
      const translation = `${translateSubject(s.text)} là ${p.viet}.`;
      const explanation = `'${s.text}' → dùng '${s.be}'.`;

      if (type === "sort") {
        const answer = `${s.text} ${s.be} ${p.text}`;
        pushSortQuestion(1, "am/is/are", answer, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 1,
          type: type,
          question: `${s.text} ________ ${p.text}.`,
          options: shuffle(["am", "is", "are", "be"]),
          answer: s.be,
          rule: "am/is/are",
          translation: translation,
          explanation: explanation
        });
      }
    }

    // Negative choice & fill
    for (let i = 0; i < 25; i++) {
      const isSingular = i % 2 === 0;
      const subPool = isSingular ? SUBJECTS_POOL.singular : SUBJECTS_POOL.plural;
      const s = subPool[i % subPool.length];
      const p = PREDICATES_TOBE[i % PREDICATES_TOBE.length];
      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");
      const translation = `${translateSubject(s.text)} không phải là ${p.viet}.`;
      const explanation = `Phủ định: '${s.be} not' → viết tắt '${s.beNeg}'.`;

      if (type === "sort") {
        const answer = `${s.text} ${s.beNeg} ${p.text}`;
        pushSortQuestion(1, "am/is/are", answer, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 1,
          type: type,
          question: `${s.text} ________ (not be) ${p.text}.`,
          options: shuffle([s.beNeg, `${s.be} not`, `no ${s.be}`, "amn't"]),
          answer: s.beNeg,
          rule: "am/is/are",
          translation: translation,
          explanation: explanation
        });
      }
    }

    // Question answers choice & fill
    for (let i = 0; i < 20; i++) {
      const isSingular = i % 2 === 0;
      const subPool = isSingular ? SUBJECTS_POOL.singular : SUBJECTS_POOL.plural;
      const s = subPool[i % subPool.length];
      const p = PREDICATES_TOBE[i % PREDICATES_TOBE.length];
      const capitalizedBe = s.be.charAt(0).toUpperCase() + s.be.slice(1);
      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");
      const translation = `Có phải ${toLowerFirst(translateSubject(s.text))} là ${p.viet} không?`;
      const explanation = `Câu hỏi: đảo '${capitalizedBe}' lên trước chủ ngữ.`;

      if (type === "sort") {
        const answer = `${capitalizedBe} ${toLowerFirst(s.text)} ${p.text}`;
        pushSortQuestion(1, "am/is/are", answer, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 1,
          type: type === "sort" ? "choice" : type,
          question: `________ ${toLowerFirst(s.text)} ${p.text}?`,
          options: shuffle(["Am", "Is", "Are", "Do"]),
          answer: capitalizedBe,
          rule: "am/is/are",
          translation: translation,
          explanation: explanation
        });
      }
    }

    // ----------------------------------------------------
    // LESSON 2: VERBS AFFIRMATIVE (s/es, have/has) - ~95 QUESTIONS
    // ----------------------------------------------------
    // s/es / base form choice & fill
    for (let i = 0; i < 50; i++) {
      const isSingular = i % 2 === 0;
      const subPool = isSingular ? SUBJECTS_POOL.singular : SUBJECTS_POOL.plural;
      const s = subPool[i % subPool.length];
      const v = VERBS_ACTION[i % VERBS_ACTION.length];
      const ctx = getVerbContext(v, i);
      const correctAns = isSingular ? v.s_form : v.base;
      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");
      const time = TIMES_HABIT[i % TIMES_HABIT.length];
      const translation = makeHabitTranslation(translateSubject(s.text), ctx.viet, time.vi, i);
      const explanation = `'${s.text}' ${isSingular ? "số ít → thêm s/es: '" + v.s_form + "'" : "số nhiều → giữ nguyên: '" + v.base + "'"}.`;

      if (type === "sort") {
        const answer = `${s.text} ${correctAns} ${ctx.obj} ${time.en}`;
        pushSortQuestion(2, "s/es", answer, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 2,
          type: type,
          question: `${s.text} ________ (${v.base}) ${ctx.obj} ${time.en}.`,
          options: shuffle([v.base, v.s_form, v.ing, `is ${v.base}`]),
          answer: correctAns,
          rule: "s/es",
          translation: translation,
          explanation: explanation
        });
      }
    }

    // Have / Has possessive
    const HAVE_OBJECTS = [
      { en: "two children", vi: "hai người con" },
      { en: "a big house", vi: "một ngôi nhà lớn" },
      { en: "a nice car", vi: "một chiếc xe đẹp" },
      { en: "many friends", vi: "nhiều bạn bè" },
      { en: "three cats", vi: "ba con mèo" },
      { en: "a lot of homework", vi: "rất nhiều bài tập" }
    ];
    for (let i = 0; i < 30; i++) {
      const isSingular = i % 2 === 0;
      const subPool = isSingular ? SUBJECTS_POOL.singular : SUBJECTS_POOL.plural;
      const s = subPool[i % subPool.length];
      const correctAns = isSingular ? "has" : "have";
      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");
      const hObj = HAVE_OBJECTS[i % HAVE_OBJECTS.length];
      const translation = `${translateSubject(s.text)} có ${hObj.vi}.`;
      const explanation = `'${s.text}' ${isSingular ? "số ít → 'has'" : "số nhiều → giữ 'have'"}.`;

      if (type === "sort") {
        const answer = `${s.text} ${correctAns} ${hObj.en}`;
        pushSortQuestion(2, "have/has", answer, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 2,
          type: type,
          question: `${s.text} ________ (have) ${hObj.en}.`,
          options: shuffle(["have", "has", "haves", "having"]),
          answer: correctAns,
          rule: "have/has",
          translation: translation,
          explanation: explanation
        });
      }
    }

    // s/es spelling rules specifically (fly, watch, cry)
    for (let i = 0; i < 15; i++) {
      const s = SUBJECTS_POOL.singular[i % SUBJECTS_POOL.singular.length];
      const v = VERBS_ACTION.filter(x => ["es", "ies"].includes(x.type))[i % 6];
      const ctx = getVerbContext(v, i);
      const type = i % 2 === 0 ? "fill" : "sort";
      const time = TIMES_HABIT[i % TIMES_HABIT.length];
      const translation = `${translateSubject(s.text)} ${ctx.viet} ${time.vi}.`;
      const explanation = `'${v.base}' + ngôi số ít → '${v.s_form}' (${v.type === "es" ? "đuôi -o/-s/-ch/-sh/-x → thêm -es" : "phụ âm + y → đổi y thành -ies"}).`;

      if (type === "sort") {
        const answer = `${s.text} ${v.s_form} ${ctx.obj} ${time.en}`;
        pushSortQuestion(2, "s/es", answer, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 2,
          type: "fill",
          question: `${s.text} ________ (chia động từ '${v.base}') ${ctx.obj} ${time.en}.`,
          answer: v.s_form,
          rule: "s/es",
          translation: translation,
          explanation: explanation
        });
      }
    }

    // ----------------------------------------------------
    // LESSON 3: VERBS NEGATIVE & QUESTIONS (do/does, don't/doesn't) - ~90 QUESTIONS
    // ----------------------------------------------------
    // Negative don't / doesn't
    for (let i = 0; i < 45; i++) {
      const isSingular = i % 2 === 0;
      const subPool = isSingular ? SUBJECTS_POOL.singular : SUBJECTS_POOL.plural;
      const s = subPool[i % subPool.length];
      const v = VERBS_ACTION[i % VERBS_ACTION.length];
      const ctx = getVerbContext(v, i);
      const correctAns = isSingular ? `doesn't ${v.base}` : `don't ${v.base}`;
      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");
      const time = TIMES_NEGATIVE[i % TIMES_NEGATIVE.length];
      const translation = makeNegTranslation(translateSubject(s.text), ctx.viet, time.vi, i);
      const explanation = `Phủ định: '${s.text}' ${isSingular ? "số ít → 'doesn't'" : "số nhiều → 'don't'"} + động từ nguyên mẫu '${v.base}'.`;

      if (type === "sort") {
        const answer = `${s.text} ${correctAns} ${ctx.obj} ${time.en}`;
        pushSortQuestion(3, "don't/doesn't", answer, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 3,
          type: type,
          question: `${s.text} ________ (not ${v.base}) ${ctx.obj} ${time.en}.`,
          options: shuffle([`don't ${v.base}`, `doesn't ${v.base}`, `doesn't ${v.s_form}`, `not ${v.base}`]),
          answer: correctAns,
          rule: "don't/doesn't",
          translation: translation,
          explanation: explanation
        });
      }
    }

    // Do / Does questions
    for (let i = 0; i < 45; i++) {
      const isSingular = i % 2 === 0;
      const subPool = isSingular ? SUBJECTS_POOL.singular : SUBJECTS_POOL.plural;
      const s = subPool[i % subPool.length];
      const v = VERBS_ACTION[i % VERBS_ACTION.length];
      const ctx = getVerbContext(v, i);
      const correctAns = isSingular ? "does" : "do";
      const capitalizedAns = correctAns.charAt(0).toUpperCase() + correctAns.slice(1);
      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");
      const translation = `Có phải ${toLowerFirst(translateSubject(s.text))} ${ctx.viet} không?`;
      const explanation = `Câu hỏi: '${s.text}' ${isSingular ? "số ít → 'Does'" : "số nhiều → 'Do'"}, động từ về nguyên mẫu.`;

      if (type === "sort") {
        const answer = `${capitalizedAns} ${toLowerFirst(s.text)} ${v.base} ${ctx.obj}`;
        pushSortQuestion(3, "do/does", answer, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 3,
          type: type,
          question: `________ ${toLowerFirst(s.text)} ${v.base} ${ctx.obj}?`,
          options: ["Do", "Does", "Is", "Are"],
          answer: capitalizedAns,
          rule: "do/does",
          translation: translation,
          explanation: explanation
        });
      }
    }

    // ----------------------------------------------------
    // LESSON 4: USES & ADVERBS (always, schedules) - ~60 QUESTIONS
    // ----------------------------------------------------
    // Schedules timetable
    const timetableItems = [
      { sub: "The train", verb: "leave", ans: "leaves", extra: "at 6 pm today", trans: "Tàu hỏa khởi hành lúc 6 giờ chiều hôm nay." },
      { sub: "The flight", verb: "start", ans: "starts", extra: "at 10 am tomorrow", trans: "Chuyến bay cất cánh lúc 10 giờ sáng mai." },
      { sub: "Our class", verb: "begin", ans: "begins", extra: "at 7:30 am", trans: "Lớp học bắt đầu lúc 7 giờ 30 sáng." },
      { sub: "The bus", verb: "arrive", ans: "arrives", extra: "at 5 pm", trans: "Xe buýt đến lúc 5 giờ chiều." },
      { sub: "The movie", verb: "start", ans: "starts", extra: "at 8 pm tonight", trans: "Bộ phim bắt đầu lúc 8 giờ tối nay." },
      { sub: "The store", verb: "open", ans: "opens", extra: "at 9 am", trans: "Cửa hàng mở cửa lúc 9 giờ sáng." },
      { sub: "The concert", verb: "begin", ans: "begins", extra: "at 7 pm", trans: "Buổi hòa nhạc bắt đầu lúc 7 giờ tối." }
    ];
    for (let i = 0; i < 30; i++) {
      const item = timetableItems[i % timetableItems.length];
      const type = i % 2 === 0 ? "choice" : "fill";

      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: 4,
        type: type,
        question: `${item.sub} ________ (${item.verb}) ${item.extra}.`,
        options: shuffle([item.ans, `will ${item.verb}`, `is going to ${item.verb}`, `is ${item.verb}ing`]),
        answer: item.ans,
        rule: "s/es",
        translation: item.trans,
        explanation: `Lịch trình cố định → dùng Hiện tại đơn, không dùng will.`
      });
    }

    // Adverb position
    for (let i = 0; i < 30; i++) {
      const s = SUBJECTS_POOL.singular[i % SUBJECTS_POOL.singular.length];
      const v = VERBS_ACTION[i % VERBS_ACTION.length];
      const ctx = getVerbContext(v, i);
      const adv = ADVERBS_FREQUENCY[i % ADVERBS_FREQUENCY.length];
      const correctVal = `${s.text} ${adv} ${v.s_form} ${ctx.obj}.`;

      const advTransMap = {
        "always": "luôn luôn",
        "usually": "thường xuyên",
        "often": "thường",
        "sometimes": "thỉnh thoảng",
        "rarely": "hiếm khi",
        "never": "không bao giờ",
        "generally": "nhìn chung",
        "regularly": "đều đặn"
      };

      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: 4,
        type: "choice",
        question: `Chọn câu đặt đúng vị trí trạng từ '${adv}':`,
        options: shuffle([
          correctVal,
          `${s.text} ${v.s_form} ${adv} ${ctx.obj}.`,
          `${adv} ${s.text} ${v.s_form} ${ctx.obj}.`,
          `${s.text} ${v.s_form} ${ctx.obj} ${adv}.`
        ]),
        answer: correctVal,
        rule: "s/es",
        translation: `${translateSubject(s.text)} ${advTransMap[adv] || adv} ${ctx.viet}.`,
        explanation: `Trạng từ tần suất đứng TRƯỚC động từ thường '${v.s_form}'.`
      });
    }

    // ----------------------------------------------------
    // LESSON 5: PRESENT CONTINUOUS USE & STRUCTURE - ~85 QUESTIONS
    // ----------------------------------------------------
    const CONTINUOUS_STARTERS = [
      { en: "Listen!", vi: "Nghe kìa!" },
      { en: "Look!", vi: "Nhìn kìa!" },
      { en: "Shh!", vi: "Suỵt!" },
      { en: "Right now,", vi: "Ngay lúc này," },
      { en: "At the moment,", vi: "Ở thời điểm này," },
      { en: "Hey,", vi: "Này," }
    ];

    // Positive & negative continuous phrase
    for (let i = 0; i < 45; i++) {
      const isSingular = i % 2 === 0;
      const subPool = isSingular ? SUBJECTS_POOL.singular : SUBJECTS_POOL.plural;
      const s = subPool[i % subPool.length];
      const v = VERBS_ACTION[i % VERBS_ACTION.length];
      const ctx = getVerbContext(v, i);
      const correctAns = `${s.be} ${v.ing}`;
      const type = i % 2 === 0 ? "choice" : "fill";
      const starter = CONTINUOUS_STARTERS[i % CONTINUOUS_STARTERS.length];

      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: 5,
        type: type,
        question: `${starter.en} ${s.text} ________ (${v.base}) ${ctx.obj}.`,
        options: shuffle([correctAns, `${s.be} not ${v.ing}`, `${v.base}`, `${v.s_form}`]),
        answer: correctAns,
        rule: "V-ing",
        translation: `${starter.vi} ${translateSubject(s.text)} đang ${ctx.viet}.`,
        explanation: `Đang diễn ra → '${s.be}' + V-ing '${v.ing}'.`
      });
    }

    // Future plans continuous
    const planItems = [
      { sub: "I", be: "am", verb: "fly", ing: "flying", extra: "to New York tomorrow (bought ticket)", trans: "Ngày mai tôi bay đi New York (đã mua vé rồi)." },
      { sub: "We", be: "are", verb: "take", ing: "taking", extra: "the exam at 7 am tomorrow", trans: "Sáng mai lúc 7 giờ chúng tôi thi rồi." },
      { sub: "They", be: "are", verb: "go", ing: "going", extra: "to school next Monday", trans: "Thứ Hai tới họ sẽ đi học." },
      { sub: "She", be: "is", verb: "move", ing: "moving", extra: "to a new house next week", trans: "Tuần sau cô ấy chuyển nhà mới." },
      { sub: "He", be: "is", verb: "start", ing: "starting", extra: "a new job on Monday", trans: "Thứ Hai anh ấy bắt đầu công việc mới." }
    ];
    for (let i = 0; i < 20; i++) {
      const item = planItems[i % planItems.length];
      const type = i % 2 === 0 ? "choice" : "fill";
      const correctAns = `${item.be} ${item.ing}`;

      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: 5,
        type: type,
        question: `${item.sub} ________ (${item.verb}) ${item.extra}.`,
        options: shuffle([correctAns, `will ${item.verb}`, `going to ${item.verb}`, item.verb]),
        answer: correctAns,
        rule: "V-ing",
        translation: item.trans,
        explanation: `Kế hoạch đã lên lịch cụ thể → dùng Hiện tại tiếp diễn.`
      });
    }

    // Complaining always
    const complainItems = [
      { sub: "he", be: "is", activity: "coming late", trans: "Sao lúc nào anh ta cũng đến muộn thế?" },
      { sub: "she", be: "is", activity: "forgetting her keys", trans: "Sao cô ấy cứ quên chìa khóa hoài vậy?" },
      { sub: "they", be: "are", activity: "making noise", trans: "Sao họ lúc nào cũng gây ồn ào thế?" },
      { sub: "he", be: "is", activity: "losing his phone", trans: "Sao anh ta cứ làm mất điện thoại hoài vậy?" }
    ];
    for (let i = 0; i < 20; i++) {
      const item = complainItems[i % complainItems.length];

      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: 5,
        type: "choice",
        question: `Why ________ always ${item.activity}? (phàn nàn)`,
        options: shuffle([`${item.be} ${item.sub} always ${item.activity.split(" ")[0]}ing`, `does ${item.sub} always ${item.activity.split(" ")[0]}`, `${item.be} ${item.sub} always ${item.activity}`, `${item.sub} ${item.be} always ${item.activity}`]),
        answer: `${item.be} ${item.sub} always ${item.activity}`,
        rule: "V-ing",
        translation: item.trans,
        explanation: `Phàn nàn thói xấu → 'be + always + V-ing'.`
      });
    }

    // ----------------------------------------------------
    // LESSON 6: -ING SPELLING RULES - ~65 QUESTIONS
    // ----------------------------------------------------
    for (let i = 0; i < 65; i++) {
      const item = SPELLING_VERBS_ING[i % SPELLING_VERBS_ING.length];
      const isChoice = i % 2 === 0;

      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: 6,
        type: isChoice ? "choice" : "fill",
        question: `Thêm đuôi -ing cho động từ '${item.base}' → viết đúng là gì?`,
        options: shuffle([item.ing, `${item.base}ing`, `${item.base}s`, `${item.base}es`].filter((v, idx, a) => a.indexOf(v) === idx)),
        answer: item.ing,
        rule: "V-ing",
        translation: `'${item.base}' nghĩa là '${spellingVerbTranslations[item.base] || item.base}'.`,
        explanation: `'${item.base}' → ${item.ruleText} → '${item.ing}'.`
      });
    }

    // ----------------------------------------------------
    // LESSON 7: STATIVE VERBS - ~60 QUESTIONS
    // ----------------------------------------------------
    const stativeObjects = {
      "see": { en: "the answer", vi: "câu trả lời" },
      "hear": { en: "a strange noise", vi: "một tiếng động lạ" },
      "taste": { en: "the soup", vi: "món súp" },
      "feel": { en: "tired", vi: "mệt" },
      "sound": { en: "great", vi: "rất hay" },
      "belong to": { en: "this club", vi: "câu lạc bộ này" },
      "own": { en: "a small house", vi: "một ngôi nhà nhỏ" },
      "like": { en: "English", vi: "tiếng Anh" },
      "love": { en: "this song", vi: "bài hát này" },
      "hate": { en: "cold weather", vi: "thời tiết lạnh" },
      "prefer": { en: "tea", vi: "trà" },
      "need": { en: "some help", vi: "một chút giúp đỡ" },
      "know": { en: "the answer", vi: "câu trả lời" },
      "understand": { en: "the lesson", vi: "bài học" },
      "want": { en: "some water", vi: "một ít nước" },
      "remember": { en: "your name", vi: "tên của bạn" },
      "forget": { en: "the password", vi: "mật khẩu" },
      "believe": { en: "the story", vi: "câu chuyện đó" }
    };

    function makeWrongContinuous(subject, verbBase) {
      if (verbBase.includes(" ")) return `${subject.be} ${verbBase}ing`;
      if (verbBase.endsWith("e")) return `${subject.be} ${verbBase.slice(0, -1)}ing`;
      return `${subject.be} ${verbBase}ing`;
    }

    const STATIVE_TIMES = ["Right now,", "At the moment,", "Now,", "Currently,"];
    for (let i = 0; i < 60; i++) {
      const isSingular = i % 2 === 0;
      const subPool = isSingular ? SUBJECTS_POOL.singular : SUBJECTS_POOL.plural;
      const s = subPool[i % subPool.length];
      const st = VERBS_STATIVE[i % VERBS_STATIVE.length];
      const correctAns = isSingular ? st.s_form : st.base;
      const wrongAns = makeWrongContinuous(s, st.base);
      const objectText = stativeObjects[st.base] || { en: "the answer", vi: "câu trả lời" };
      const stTime = STATIVE_TIMES[i % STATIVE_TIMES.length];

      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: 7,
        type: i % 2 === 0 ? "choice" : "fill",
        question: `${stTime} ${toLowerFirst(s.text)} ________ (${st.base}) ${objectText.en}.`,
        options: shuffle([correctAns, wrongAns, st.base, `is ${correctAns}`].filter((v, idx, arr) => arr.indexOf(v) === idx)),
        answer: correctAns,
        rule: "V-ing",
        translation: `${stTime.replace(",", "")} ${toLowerFirst(translateSubject(s.text))} ${stativeTransMap[st.base] || st.base} ${objectText.vi}.`,
        explanation: `'${st.base}' là động từ trạng thái (${st.group}) → không chia tiếp diễn, dù có '${stTime.replace(",", "")}'. Chia HTĐ: '${correctAns}'.`
      });
    }

    // ----------------------------------------------------
    // LESSON 8: COMPARISON CONTRAST - ~60 QUESTIONS
    // ----------------------------------------------------
    const contrastItems = [
      { q: "Usually she drives to work, but today she ________ (take) the bus.", ans: "is taking", rule: "V-ing", trans: "Thường ngày cô ấy lái xe đi làm, nhưng hôm nay cô ấy đang đi xe buýt." },
      { q: "Look! The baby ________ (cry).", ans: "is crying", rule: "V-ing", trans: "Nhìn kìa! Em bé đang khóc." },
      { q: "Water ________ (boil) at 100 degrees Celsius.", ans: "boils", rule: "s/es", trans: "Nước sôi ở 100 độ C — đó là chân lý." },
      { q: "Listen! Someone ________ (sing) in the bathroom.", ans: "is singing", rule: "V-ing", trans: "Nghe kìa! Có ai đó đang hát trong nhà tắm." },
      { q: "He ________ (not like) carrots.", ans: "doesn't like", rule: "don't/doesn't", trans: "Anh ấy không thích cà rốt." },
      { q: "Do you ________ (understand) the lesson now?", ans: "understand", rule: "s/es", trans: "Bây giờ bạn hiểu bài chưa?" },
      { q: "She usually reads books, but right now she ________ (watch) TV.", ans: "is watching", rule: "V-ing", trans: "Cô ấy thường đọc sách, nhưng ngay lúc này cô ấy đang xem tivi." },
      { q: "The Earth ________ (go) around the Sun.", ans: "goes", rule: "s/es", trans: "Trái Đất quay quanh Mặt Trời — sự thật hiển nhiên." },
      { q: "Be quiet! The children ________ (sleep).", ans: "are sleeping", rule: "V-ing", trans: "Im lặng nào! Bọn trẻ đang ngủ." },
      { q: "He ________ (not work) on Sundays.", ans: "doesn't work", rule: "don't/doesn't", trans: "Chủ Nhật anh ấy không đi làm." }
    ];

    for (let i = 0; i < 60; i++) {
      const item = contrastItems[i % contrastItems.length];
      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: 8,
        type: "fill",
        question: item.q,
        answer: item.ans,
        rule: item.rule,
        translation: item.trans,
        explanation: `Đáp án: '${item.ans}'. ${item.rule === "V-ing" ? "Hành động đang xảy ra → HTTD." : item.rule === "s/es" ? "Sự thật / thói quen → HTĐ." : "Phủ định với động từ thường → don't/doesn't + V nguyên mẫu."}`
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
