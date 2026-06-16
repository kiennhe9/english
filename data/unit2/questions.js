(function () {
  const unit = window.UNITS_REGISTRY && window.UNITS_REGISTRY["unit2"];
  if (!unit) {
    console.error("Unit 2 lessons not registered yet. Please check script loading order.");
    return;
  }

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

  function thirdPersonSimple(base) {
    const irregular = { go: "goes", do: "does" };
    if (irregular[base]) return irregular[base];
    if (/(s|sh|ch|x|z|o)$/.test(base)) return `${base}es`;
    if (/[^aeiou]y$/.test(base)) return `${base.slice(0, -1)}ies`;
    return `${base}s`;
  }

  function uniqueOptions(options) {
    return options.filter((value, index, array) => array.indexOf(value) === index);
  }

  function regularPastGuess(base) {
    if (/e$/.test(base)) return `${base}d`;
    if (/[^aeiou]y$/.test(base)) return `${base.slice(0, -1)}ied`;
    return `${base}ed`;
  }

  function presentParticipleGuess(base) {
    if (/ie$/.test(base)) return `${base.slice(0, -2)}ying`;
    if (/[^aeiou]e$/.test(base)) return `${base.slice(0, -1)}ing`;
    if (/^[^aeiou]*[aeiou][^aeiouwxy]$/.test(base)) return `${base}${base.slice(-1)}ing`;
    return `${base}ing`;
  }

  function irregularVerbOptions(correct, verb, targetForm, includeAlternativeDistractors = false) {
    const v1 = verb.v1;
    const v2Primary = verb.v2.split("/")[0].trim();
    const v3Primary = verb.v3.split("/")[0].trim();
    const acceptedForms = includeAlternativeDistractors ? [correct] : verb[targetForm].split("/").map(form => form.trim());
    const commonWrongForms = [
      regularPastGuess(v1),
      v1,
      targetForm === "v2" ? v3Primary : v2Primary,
      presentParticipleGuess(v1),
      thirdPersonSimple(v1),
      `${v1}en`,
      `${v1}t`,
      `${v1}n`
    ];

    return uniqueOptions([correct, ...commonWrongForms])
      .filter(form => form === correct || !acceptedForms.includes(form))
      .slice(0, 4);
  }

  const IRREGULAR_CONTEXTS = {
    be: { past: "He ________ at home yesterday.", perfect: "He has ________ busy all day.", viPast: "Anh ấy đã ở nhà hôm qua.", viPerfect: "Anh ấy bận cả ngày rồi." },
    have: { past: "They ________ breakfast at 7 a.m.", perfect: "They have ________ breakfast already.", viPast: "Họ đã ăn sáng lúc 7 giờ.", viPerfect: "Họ đã ăn sáng rồi." },
    do: { past: "I ________ my homework last night.", perfect: "I have ________ my homework already.", viPast: "Tôi đã làm bài tập tối qua.", viPerfect: "Tôi đã làm bài tập rồi." },
    go: { past: "They ________ to school yesterday.", perfect: "They have ________ to school already.", viPast: "Họ đã đi học hôm qua.", viPerfect: "Họ đã đi học rồi." },
    come: { past: "She ________ to the party last night.", perfect: "She has ________ home already.", viPast: "Cô ấy đã đến bữa tiệc tối qua.", viPerfect: "Cô ấy đã về nhà rồi." },
    eat: { past: "I ________ dinner at 6 p.m.", perfect: "I have ________ dinner already.", viPast: "Tôi đã ăn tối lúc 6 giờ.", viPerfect: "Tôi đã ăn tối rồi." },
    drink: { past: "He ________ all the milk yesterday.", perfect: "He has ________ all the milk.", viPast: "Anh ấy đã uống hết sữa hôm qua.", viPerfect: "Anh ấy đã uống hết sữa rồi." },
    see: { past: "We ________ that movie last week.", perfect: "We have ________ that movie before.", viPast: "Chúng tôi đã xem bộ phim đó tuần trước.", viPerfect: "Chúng tôi đã xem bộ phim đó trước đây rồi." },
    write: { past: "She ________ a letter yesterday.", perfect: "She has ________ a letter.", viPast: "Cô ấy đã viết một lá thư hôm qua.", viPerfect: "Cô ấy đã viết xong một lá thư." },
    read: { past: "I ________ this book last summer.", perfect: "I have ________ this book before.", viPast: "Tôi đã đọc cuốn sách này hè trước.", viPerfect: "Tôi đã đọc cuốn sách này trước đây rồi." },
    buy: { past: "We ________ a new laptop last week.", perfect: "We have ________ a new laptop.", viPast: "Chúng tôi đã mua laptop mới tuần trước.", viPerfect: "Chúng tôi đã mua laptop mới rồi." },
    make: { past: "She ________ a cake yesterday.", perfect: "She has ________ a cake.", viPast: "Cô ấy đã làm một chiếc bánh hôm qua.", viPerfect: "Cô ấy đã làm xong một chiếc bánh." },
    take: { past: "He ________ the bus this morning.", perfect: "He has ________ the bus many times.", viPast: "Anh ấy đã bắt xe buýt sáng nay.", viPerfect: "Anh ấy đã bắt xe buýt nhiều lần." },
    get: { past: "I ________ your message yesterday.", perfect: "I have ________ your message.", viPast: "Tôi đã nhận tin nhắn của bạn hôm qua.", viPerfect: "Tôi đã nhận được tin nhắn của bạn rồi." },
    give: { past: "She ________ me a gift last week.", perfect: "She has ________ me a gift.", viPast: "Cô ấy đã tặng tôi một món quà tuần trước.", viPerfect: "Cô ấy đã tặng tôi một món quà." },
    find: { past: "They ________ the keys yesterday.", perfect: "They have ________ the keys.", viPast: "Họ đã tìm thấy chìa khóa hôm qua.", viPerfect: "Họ đã tìm thấy chìa khóa rồi." },
    know: { past: "I ________ the answer yesterday.", perfect: "I have ________ him for years.", viPast: "Tôi đã biết câu trả lời hôm qua.", viPerfect: "Tôi đã biết anh ấy nhiều năm rồi." },
    think: { past: "I ________ about it last night.", perfect: "I have ________ about it carefully.", viPast: "Tôi đã nghĩ về việc đó tối qua.", viPerfect: "Tôi đã nghĩ kỹ về việc đó." },
    say: { past: "He ________ sorry yesterday.", perfect: "He has ________ sorry already.", viPast: "Anh ấy đã nói xin lỗi hôm qua.", viPerfect: "Anh ấy đã nói xin lỗi rồi." },
    tell: { past: "She ________ me the truth yesterday.", perfect: "She has ________ me the truth.", viPast: "Cô ấy đã nói với tôi sự thật hôm qua.", viPerfect: "Cô ấy đã nói với tôi sự thật rồi." },
    run: { past: "He ________ five kilometers yesterday.", perfect: "He has ________ five kilometers today.", viPast: "Anh ấy đã chạy năm cây số hôm qua.", viPerfect: "Hôm nay anh ấy đã chạy được năm cây số." },
    cut: { past: "He ________ his finger yesterday.", perfect: "He has ________ his finger.", viPast: "Anh ấy bị đứt tay hôm qua.", viPerfect: "Anh ấy bị đứt tay rồi." },
    put: { past: "I ________ the book on the table yesterday.", perfect: "I have ________ the book on the table.", viPast: "Tôi đã đặt cuốn sách lên bàn hôm qua.", viPerfect: "Tôi đã đặt cuốn sách lên bàn rồi." },
    set: { past: "She ________ the alarm last night.", perfect: "She has ________ the alarm.", viPast: "Cô ấy đã đặt báo thức tối qua.", viPerfect: "Cô ấy đã đặt báo thức rồi." },
    hurt: { past: "He ________ his leg yesterday.", perfect: "He has ________ his leg.", viPast: "Anh ấy bị đau chân hôm qua.", viPerfect: "Anh ấy bị đau chân rồi." },
    lose: { past: "She ________ her phone yesterday.", perfect: "She has ________ her phone.", viPast: "Cô ấy đã làm mất điện thoại hôm qua.", viPerfect: "Cô ấy đã làm mất điện thoại rồi." },
    feel: { past: "I ________ tired yesterday.", perfect: "I have ________ tired all day.", viPast: "Tôi đã thấy mệt hôm qua.", viPerfect: "Tôi thấy mệt cả ngày rồi." },
    hear: { past: "We ________ the news yesterday.", perfect: "We have ________ the news.", viPast: "Chúng tôi đã nghe tin đó hôm qua.", viPerfect: "Chúng tôi đã nghe tin đó rồi." },
    leave: { past: "They ________ early yesterday.", perfect: "They have ________ already.", viPast: "Họ đã rời đi sớm hôm qua.", viPerfect: "Họ đã rời đi rồi." },
    meet: { past: "I ________ him yesterday.", perfect: "I have ________ him before.", viPast: "Tôi đã gặp anh ấy hôm qua.", viPerfect: "Tôi đã gặp anh ấy trước đây rồi." },
    begin: { past: "The class ________ at 8 a.m.", perfect: "The class has ________ already.", viPast: "Lớp học đã bắt đầu lúc 8 giờ.", viPerfect: "Lớp học đã bắt đầu rồi." },
    break: { past: "She ________ the window yesterday.", perfect: "She has ________ the window.", viPast: "Cô ấy đã làm vỡ cửa sổ hôm qua.", viPerfect: "Cô ấy đã làm vỡ cửa sổ rồi." },
    bring: { past: "He ________ his book yesterday.", perfect: "He has ________ his book.", viPast: "Anh ấy đã mang sách hôm qua.", viPerfect: "Anh ấy đã mang sách rồi." },
    build: { past: "They ________ a house last year.", perfect: "They have ________ a house.", viPast: "Họ đã xây một ngôi nhà năm ngoái.", viPerfect: "Họ đã xây xong một ngôi nhà." },
    catch: { past: "I ________ the bus this morning.", perfect: "I have ________ the bus.", viPast: "Tôi đã bắt được xe buýt sáng nay.", viPerfect: "Tôi đã bắt được xe buýt." },
    choose: { past: "We ________ the best option yesterday.", perfect: "We have ________ the best option.", viPast: "Chúng tôi đã chọn phương án tốt nhất hôm qua.", viPerfect: "Chúng tôi đã chọn phương án tốt nhất rồi." },
    drive: { past: "He ________ to work yesterday.", perfect: "He has ________ to work many times.", viPast: "Anh ấy đã lái xe đi làm hôm qua.", viPerfect: "Anh ấy đã lái xe đi làm nhiều lần." },
    fall: { past: "The child ________ down yesterday.", perfect: "The child has ________ down.", viPast: "Đứa trẻ đã bị ngã hôm qua.", viPerfect: "Đứa trẻ bị ngã rồi." },
    fly: { past: "They ________ to Da Nang last month.", perfect: "They have ________ to Da Nang before.", viPast: "Họ đã bay đến Đà Nẵng tháng trước.", viPerfect: "Họ đã bay đến Đà Nẵng trước đây." },
    forget: { past: "I ________ my homework yesterday.", perfect: "I have ________ my homework.", viPast: "Tôi đã quên bài tập hôm qua.", viPerfect: "Tôi đã quên bài tập rồi." },
    grow: { past: "The plant ________ quickly last month.", perfect: "The plant has ________ quickly.", viPast: "Cây đã lớn nhanh tháng trước.", viPerfect: "Cây đã lớn nhanh." },
    hold: { past: "She ________ the baby carefully.", perfect: "She has ________ the baby before.", viPast: "Cô ấy đã bế em bé cẩn thận.", viPerfect: "Cô ấy đã từng bế em bé trước đây." },
    keep: { past: "He ________ the secret yesterday.", perfect: "He has ________ the secret.", viPast: "Anh ấy đã giữ bí mật hôm qua.", viPerfect: "Anh ấy đã giữ bí mật." },
    learn: { past: "I ________ a new word yesterday.", perfect: "I have ________ many new words.", viPast: "Tôi đã học một từ mới hôm qua.", viPerfect: "Tôi đã học nhiều từ mới." },
    lend: { past: "She ________ me some money yesterday.", perfect: "She has ________ me some money.", viPast: "Cô ấy đã cho tôi mượn tiền hôm qua.", viPerfect: "Cô ấy đã cho tôi mượn tiền." },
    pay: { past: "He ________ the bill yesterday.", perfect: "He has ________ the bill.", viPast: "Anh ấy đã trả hóa đơn hôm qua.", viPerfect: "Anh ấy đã trả hóa đơn rồi." },
    send: { past: "I ________ the email yesterday.", perfect: "I have ________ the email.", viPast: "Tôi đã gửi email hôm qua.", viPerfect: "Tôi đã gửi email rồi." },
    sit: { past: "They ________ near the window yesterday.", perfect: "They have ________ there before.", viPast: "Họ đã ngồi gần cửa sổ hôm qua.", viPerfect: "Họ đã từng ngồi ở đó trước đây." },
    sleep: { past: "He ________ early last night.", perfect: "He has ________ for eight hours.", viPast: "Anh ấy đã ngủ sớm tối qua.", viPerfect: "Anh ấy đã ngủ được tám tiếng." },
    speak: { past: "She ________ to the manager yesterday.", perfect: "She has ________ to the manager.", viPast: "Cô ấy đã nói chuyện với quản lý hôm qua.", viPerfect: "Cô ấy đã nói chuyện với quản lý rồi." },
    stand: { past: "We ________ in line yesterday.", perfect: "We have ________ in line for an hour.", viPast: "Chúng tôi đã đứng xếp hàng hôm qua.", viPerfect: "Chúng tôi đã đứng xếp hàng được một tiếng." },
    swim: { past: "They ________ in the pool yesterday.", perfect: "They have ________ in this pool before.", viPast: "Họ đã bơi trong hồ hôm qua.", viPerfect: "Họ đã từng bơi trong hồ này trước đây." },
    teach: { past: "She ________ English last year.", perfect: "She has ________ English for years.", viPast: "Cô ấy đã dạy tiếng Anh năm ngoái.", viPerfect: "Cô ấy đã dạy tiếng Anh nhiều năm rồi." },
    understand: { past: "I ________ the lesson yesterday.", perfect: "I have ________ the lesson.", viPast: "Tôi đã hiểu bài học hôm qua.", viPerfect: "Tôi đã hiểu bài học rồi." },
    wear: { past: "He ________ a blue shirt yesterday.", perfect: "He has ________ that shirt before.", viPast: "Anh ấy đã mặc áo xanh hôm qua.", viPerfect: "Anh ấy đã mặc chiếc áo đó trước đây." },
    win: { past: "They ________ the game yesterday.", perfect: "They have ________ the game.", viPast: "Họ đã thắng trận hôm qua.", viPerfect: "Họ đã thắng trận rồi." }
  };

  function irregularQuestionText(verb, targetForm, answer, practiceLevel) {
    const context = IRREGULAR_CONTEXTS[verb.v1];
    if (context && practiceLevel !== "hard") {
      const isV2 = targetForm === "v2";
      return {
        type: "choice",
        question: `Hoàn thành câu với ${isV2 ? "V2" : "V3"} của '${verb.v1}': ${isV2 ? context.past : context.perfect}`,
        translation: isV2 ? context.viPast : context.viPerfect,
        explanation: isV2
          ? `Câu có mốc quá khứ nên dùng V2: ${verb.v1} → ${verb.v2}.`
          : `Câu có have/has nên dùng V3: ${verb.v1} → ${verb.v3}.`
      };
    }

    return {
      type: "fill",
      question: `Tra bảng và điền dạng ${targetForm === "v2" ? "V2 (Past Simple)" : "V3 (Past Participle)"} của '${verb.v1}'. Nghĩa: ${verb.meaning}.`,
      translation: `Dạng ${targetForm === "v2" ? "quá khứ đơn V2" : "phân từ hai V3"} của '${verb.v1}' là gì?`,
      explanation: `Động từ '${verb.v1}' chia bất quy tắc: ${verb.v1} (V1) → ${verb.v2} (V2) → ${verb.v3} (V3). Nghĩa: ${verb.meaning}.`
    };
  }

  const EASY_IRREGULAR_VERBS = new Set([
    "be", "have", "do", "go", "come", "eat", "drink", "see", "write", "read",
    "buy", "make", "take", "get", "give", "find", "know", "think", "say", "tell",
    "run", "cut", "put", "set", "hurt", "lose", "feel", "hear", "leave", "meet"
  ]);

  const MEDIUM_IRREGULAR_VERBS = new Set([
    "begin", "break", "bring", "build", "catch", "choose", "drive", "fall", "fly", "forget",
    "grow", "hold", "keep", "learn", "lend", "pay", "send", "sit", "sleep", "speak",
    "stand", "swim", "teach", "understand", "wear", "win"
  ]);

  function irregularPracticeLevel(v1) {
    if (EASY_IRREGULAR_VERBS.has(v1)) return "easy";
    if (MEDIUM_IRREGULAR_VERBS.has(v1)) return "medium";
    return "hard";
  }

  // --- DIVERSE SORT PROMPTS ---
  const SORT_PROMPTS = [
    "Sắp xếp các từ thành câu hoàn chỉnh:",
    "Ghép các từ thành câu đúng ngữ pháp:",
    "Dịch sang tiếng Anh bằng cách sắp xếp từ:",
    "Xếp lại thứ tự các từ để tạo câu có nghĩa:",
    "Tạo câu đúng từ các từ cho sẵn:"
  ];

  // --- DIVERSE TIME EXPRESSIONS ---
  const PP_TIMES = [
    { en: "for a long time", vi: "trong một thời gian dài" },
    { en: "for many years", vi: "nhiều năm rồi" },
    { en: "since 2018", vi: "từ năm 2018" },
    { en: "since last year", vi: "từ năm ngoái" },
    { en: "for three months", vi: "ba tháng nay" }
  ];

  const PAST_TIMES = [
    { en: "yesterday", vi: "ngày hôm qua" },
    { en: "last night", vi: "tối qua" },
    { en: "last week", vi: "tuần trước" },
    { en: "two days ago", vi: "hai ngày trước" },
    { en: "this morning", vi: "sáng nay" },
    { en: "last month", vi: "tháng trước" }
  ];

  // ------------------------------------------------------------------
  // QUESTION GENERATOR
  // ------------------------------------------------------------------
  function generateQuestionBank(shuffle) {
    const QUESTION_BANK = generateQuestionBank.__injectBank || [];
    let id = 1;
    let sortPromptIdx = 0;

    // Helper to get random item from array
    function getRandom(arr, indexOffset) {
      return arr[indexOffset % arr.length];
    }

    // Helper to generate sort questions with varied prompts
    function pushSortQuestion(lessonId, rule, answer, translation, explanation, practiceLevel) {
      const words = answer
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "")
        .split(/\s+/)
        .filter(w => w.trim() !== "");

      const prompt = SORT_PROMPTS[sortPromptIdx % SORT_PROMPTS.length];
      sortPromptIdx++;

      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: lessonId,
        practiceLevel: practiceLevel,
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
    // PART 1: PRESENT PERFECT (300 QUESTIONS, Lesson 1 to 7)
    // ----------------------------------------------------

    // Lesson 1: Khái niệm HTHT - 30 questions
    const presentPerfectDurationVerbs = VERBS_REGULAR.filter(v => ["work", "live", "play", "study"].includes(v.base));
    for (let i = 0; i < 30; i++) {
      const isSingular = i % 2 === 0;
      const sub = isSingular ? getRandom(SUBJECTS_POOL.singular, i) : getRandom(SUBJECTS_POOL.plural, i);
      const v = getRandom(presentPerfectDurationVerbs, i);
      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");
      const ppTime = PP_TIMES[i % PP_TIMES.length];
      const translation = `${translateSubject(sub.text)} đã ${v.viet} ${ppTime.vi}.`;
      const explanation = `Hành động kéo dài từ quá khứ đến hiện tại → HTHT: '${sub.haveVal} ${v.v3}'.`;

      if (type === "sort") {
        const answer = `${sub.text} ${sub.haveVal} ${v.v3} ${v.obj} ${ppTime.en}`;
        pushSortQuestion(1, "have/has", answer, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 1,
          type: type,
          question: `${sub.text} ________ (${v.base}) ${v.obj} ${ppTime.en}.`,
          options: shuffle([`${sub.haveVal} ${v.v3}`, `${v.v2}`, `is ${v.base}ing`, `will ${v.base}`]),
          answer: `${sub.haveVal} ${v.v3}`,
          rule: "have/has",
          translation: translation,
          explanation: explanation
        });
      }
    }

    // Lesson 2: Cấu trúc - 60 questions (20 Positive, 20 Negative, 20 Question)
    // Positive
    for (let i = 0; i < 20; i++) {
      const isSingular = i % 2 === 0;
      const sub = isSingular ? getRandom(SUBJECTS_POOL.singular, i) : getRandom(SUBJECTS_POOL.plural, i);
      const v = getRandom(VERBS_REGULAR, i);
      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");
      const translation = `${translateSubject(sub.text)} đã ${v.viet}.`;
      const explanation = `Khẳng định HTHT: S + have/has + V3 → '${sub.haveVal} ${v.v3}'.`;

      if (type === "sort") {
        const answer = `${sub.text} ${sub.haveVal} ${v.v3} ${v.obj}`;
        pushSortQuestion(2, "V3/ed", answer, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 2,
          type: type,
          question: `Khẳng định: ${sub.text} ________ (${v.base}) ${v.obj}.`,
          options: shuffle([`${sub.haveVal} ${v.v3}`, `${v.v2}`, `is ${v.base}ing`, `${sub.haveVal} not ${v.v3}`]),
          answer: `${sub.haveVal} ${v.v3}`,
          rule: "V3/ed",
          translation: translation,
          explanation: explanation
        });
      }
    }
    // Negative
    for (let i = 0; i < 20; i++) {
      const isSingular = i % 2 === 0;
      const sub = isSingular ? getRandom(SUBJECTS_POOL.singular, i) : getRandom(SUBJECTS_POOL.plural, i);
      const v = getRandom(VERBS_IRREGULAR, i);
      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");
      const translation = `${translateSubject(sub.text)} vẫn chưa ${v.viet}.`;
      const explanation = `Phủ định HTHT: S + haven't/hasn't + V3 → '${sub.haveNeg} ${v.v3}'.`;

      if (type === "sort") {
        const answer = `${sub.text} ${sub.haveNeg} ${v.v3} ${v.obj}`;
        pushSortQuestion(2, "have/has", answer, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 2,
          type: type,
          question: `Phủ định: ${sub.text} ________ (not ${v.base}) ${v.obj}.`,
          options: shuffle(uniqueOptions([`${sub.haveNeg} ${v.v3}`, `${sub.haveVal} ${v.v3}`, `${sub.haveNeg} ${v.v2}`, `didn't ${v.base}`, `${sub.haveNeg} ${v.base}`])),
          answer: `${sub.haveNeg} ${v.v3}`,
          rule: "have/has",
          translation: translation,
          explanation: explanation
        });
      }
    }
    // Question
    for (let i = 0; i < 20; i++) {
      const isSingular = i % 2 === 0;
      const sub = isSingular ? getRandom(SUBJECTS_POOL.singular, i) : getRandom(SUBJECTS_POOL.plural, i);
      const v = getRandom(VERBS_REGULAR, i);
      const capHave = sub.haveVal.charAt(0).toUpperCase() + sub.haveVal.slice(1);
      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");
      const translation = `Có phải ${toLowerFirst(translateSubject(sub.text))} đã ${v.viet} không?`;
      const explanation = `Câu hỏi HTHT: đảo Have/Has lên đầu → '${capHave}'.`;

      if (type === "sort") {
        const answer = `${capHave} ${toLowerFirst(sub.text)} ${v.v3} ${v.obj}`;
        pushSortQuestion(2, "have/has", answer, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 2,
          type: type,
          question: `Nghi vấn: ________ ${toLowerFirst(sub.text)} ${v.v3} ${v.obj}?`,
          options: shuffle(["Have", "Has", "Did", "Do"]),
          answer: capHave,
          rule: "have/has",
          translation: translation,
          explanation: explanation
        });
      }
    }

    // Lesson 3: Have và Has - 50 questions
    for (let i = 0; i < 50; i++) {
      const isSingular = i % 2 === 0;
      const sub = isSingular ? getRandom(SUBJECTS_POOL.singular, i) : getRandom(SUBJECTS_POOL.plural, i);
      const v = i % 2 === 0 ? getRandom(VERBS_REGULAR, i) : getRandom(VERBS_IRREGULAR, i);
      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");
      const translation = `${translateSubject(sub.text)} đã ${v.viet}.`;
      const explanation = `'${sub.text}' ${isSingular ? "số ít → 'has'" : "số nhiều → 'have'"}.`;

      if (type === "sort") {
        const answer = `${sub.text} ${sub.haveVal} ${v.v3} ${v.obj}`;
        pushSortQuestion(3, "have/has", answer, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 3,
          type: type,
          question: `${sub.text} ________ ${v.v3} ${v.obj}.`,
          options: shuffle(["have", "has", "had", "having"]),
          answer: sub.haveVal,
          rule: "have/has",
          translation: translation,
          explanation: explanation
        });
      }
    }

    // Lesson 4: V3 / Past Participle - 50 questions
    for (let i = 0; i < 50; i++) {
      const isRegular = i % 2 === 0;
      const sub = getRandom(SUBJECTS_POOL.plural, i);
      const v = isRegular ? getRandom(VERBS_REGULAR, i) : getRandom(VERBS_IRREGULAR, i);
      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");
      const translation = `Chúng tôi đã ${v.viet}.`;
      const explanation = `Sau have/has → dùng V3: '${v.base}' → '${v.v3}' (${isRegular ? "có quy tắc" : "bất quy tắc"}).`;

      if (type === "sort") {
        const answer = `We have ${v.v3} ${v.obj}`;
        pushSortQuestion(4, "V3/ed", answer, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 4,
          type: type,
          question: `We have ________ (${v.base}) ${v.obj}.`,
          options: shuffle(uniqueOptions([v.v3, v.v2, v.base, `${v.base}ing`, `has ${v.v3}`])),
          answer: v.v3,
          rule: "V3/ed",
          translation: translation,
          explanation: explanation
        });
      }
    }

    // Lesson 5: Cách dùng - 40 questions
    const ppUses = [
      { trigger: "just", text: "vừa mới hoàn thành hành động", vietTrigger: "vừa mới" },
      { trigger: "ever", text: "nói về trải nghiệm, kinh nghiệm", vietTrigger: "đã từng" },
      { trigger: "already", text: "hành động đã hoàn thành trước đó", vietTrigger: "đã... rồi" }
    ];
    for (let i = 0; i < 40; i++) {
      const use = ppUses[i % ppUses.length];
      const sub = getRandom(SUBJECTS_POOL.singular, i);
      const v = getRandom(VERBS_IRREGULAR, i);
      const type = i % 2 === 0 ? "choice" : "sort";

      let transStr = "";
      if (use.trigger === "just") transStr = `${translateSubject(sub.text)} vừa mới ${v.viet}.`;
      else if (use.trigger === "ever") transStr = `Có phải ${toLowerFirst(translateSubject(sub.text))} đã từng ${v.viet} chưa?`;
      else transStr = `${translateSubject(sub.text)} đã ${v.viet} rồi.`;

      let optionsList = [];
      let answerOption = "";
      if (use.trigger === "ever") {
        const capHave = sub.haveVal.charAt(0).toUpperCase() + sub.haveVal.slice(1);
        optionsList = [
          `${capHave} ${toLowerFirst(sub.text)} ever ${v.v3} ${v.obj}?`,
          `Did ${toLowerFirst(sub.text)} ever ${v.base} ${v.obj}?`,
          `Is ${toLowerFirst(sub.text)} ${v.base}ing ${v.obj} now?`,
          `Does ${toLowerFirst(sub.text)} usually ${v.base} ${v.obj}?`
        ];
        answerOption = `${capHave} ${toLowerFirst(sub.text)} ever ${v.v3} ${v.obj}`;
      } else {
        optionsList = [
          `${sub.text} ${sub.haveVal} ${use.trigger} ${v.v3} ${v.obj}.`,
          `${sub.text} ${v.v2} ${v.obj} yesterday.`,
          `${sub.text} is ${v.base}ing ${v.obj} now.`,
          `${sub.text} usually ${thirdPersonSimple(v.base)} ${v.obj}.`
        ];
        answerOption = `${sub.text} ${sub.haveVal} ${use.trigger} ${v.v3} ${v.obj}`;
      }

      const explanation = `HTHT + '${use.trigger}' → diễn tả ${use.text}.`;

      if (type === "sort") {
        pushSortQuestion(5, "have/has", answerOption, transStr, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 5,
          type: "choice",
          question: `Chọn câu dùng thì Hiện tại hoàn thành chỉ '${use.text}':`,
          options: shuffle(optionsList),
          answer: use.trigger === "ever" ? answerOption + "?" : answerOption + ".",
          rule: "have/has",
          translation: transStr,
          explanation: explanation
        });
      }
    }

    // Lesson 6: Dấu hiệu nhận biết - 40 questions
    const ppSignals = [
      { word: "since", hint: "mốc thời gian 2018", wrong: "for" },
      { word: "for", hint: "khoảng thời gian 3 years", wrong: "since" },
      { word: "yet", hint: "ở cuối câu phủ định", wrong: "already" },
      { word: "already", hint: "ở giữa câu khẳng định", wrong: "yet" }
    ];
    for (let i = 0; i < 40; i++) {
      const sig = ppSignals[i % ppSignals.length];
      const sub = getRandom(SUBJECTS_POOL.plural, i);
      const v = getRandom(VERBS_REGULAR, i);
      let qText = "";
      let transStr = "";
      if (sig.word === "since") {
        qText = `${sub.text} have ${v.v3} ${v.obj} ________ 2018.`;
        transStr = `${translateSubject(sub.text)} đã ${v.viet} từ năm 2018.`;
      } else if (sig.word === "for") {
        qText = `${sub.text} have ${v.v3} ${v.obj} ________ 3 years.`;
        transStr = `${translateSubject(sub.text)} đã ${v.viet} được 3 năm.`;
      } else if (sig.word === "yet") {
        qText = `${sub.text} haven't ${v.v3} ${v.obj} ________.`;
        transStr = `${translateSubject(sub.text)} vẫn chưa ${v.viet}.`;
      } else {
        qText = `${sub.text} have ________ ${v.v3} ${v.obj}.`;
        transStr = `${translateSubject(sub.text)} đã ${v.viet} rồi.`;
      }

      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: 6,
        type: i % 2 === 0 ? "choice" : "fill",
        question: qText,
        options: shuffle([sig.word, sig.wrong, "in", "ago"]),
        answer: sig.word,
        rule: "have/has",
        translation: transStr,
        explanation: `Dấu hiệu HTHT: '${sig.word}' → ${sig.hint}.`
      });
    }

    // Lesson 7: Lỗi sai thường gặp - 30 questions
    const ppErrors = [
      { wrong: "have went", right: "have gone", desc: "Sau have phải dùng V3 (gone), không dùng V2 (went).", trans: "Tôi đã đi học (sử dụng 'have gone')." },
      { wrong: "have wrote", right: "have written", desc: "Sau have phải dùng V3 (written), không dùng V2 (wrote).", trans: "Tôi đã viết một bức thư." },
      { wrong: "have ate", right: "have eaten", desc: "Sau have phải dùng V3 (eaten), không dùng V2 (ate).", trans: "Tôi đã ăn tối." },
      { wrong: "she have lived", right: "she has lived", desc: "Chủ ngữ số ít 'she' phải đi với trợ động từ 'has'.", trans: "Cô ấy đã sống ở Hà Nội." }
    ];
    for (let i = 0; i < 30; i++) {
      const err = ppErrors[i % ppErrors.length];
      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: 7,
        type: "choice",
        question: `Chọn dạng viết ĐÚNG ngữ pháp để sửa lỗi câu sau:`,
        options: shuffle([err.right, err.wrong, "has went", "have write"]),
        answer: err.right,
        rule: "V3/ed",
        translation: err.trans,
        explanation: `Lý do: ${err.desc}`
      });
    }

    // ----------------------------------------------------
    // PART 2: PAST SIMPLE (300 QUESTIONS, Lesson 8 to 14)
    // ----------------------------------------------------

    // Lesson 8: Khái niệm QKĐ - 30 questions
    for (let i = 0; i < 30; i++) {
      const isSingular = i % 2 === 0;
      const sub = isSingular ? getRandom(SUBJECTS_POOL.singular, i) : getRandom(SUBJECTS_POOL.plural, i);
      const v = getRandom(VERBS_REGULAR, i);
      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");
      const pastTime = PAST_TIMES[i % PAST_TIMES.length];
      const translation = `${translateSubject(sub.text)} đã ${v.viet} ${pastTime.vi}.`;
      const explanation = `Có '${pastTime.en}' → Quá khứ đơn: '${v.base}' → '${v.v2}'.`;

      if (type === "sort") {
        const answer = `${sub.text} ${v.v2} ${v.obj} ${pastTime.en}`;
        pushSortQuestion(8, "V2/ed", answer, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 8,
          type: type,
          question: `${sub.text} ________ (${v.base}) ${v.obj} ${pastTime.en}.`,
          options: shuffle([v.v2, `${sub.haveVal} ${v.v3}`, `is ${v.base}ing`, `will ${v.base}`]),
          answer: v.v2,
          rule: "V2/ed",
          translation: translation,
          explanation: explanation
        });
      }
    }

    // Lesson 9: To Be trong quá khứ (was/were) - 50 questions
    for (let i = 0; i < 50; i++) {
      const isSingular = i % 2 === 0;
      const sub = isSingular ? getRandom(SUBJECTS_POOL.singular, i) : getRandom(SUBJECTS_POOL.plural, i);
      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");
      const pastTime = PAST_TIMES[i % PAST_TIMES.length];
      const translation = `${translateSubject(sub.text)} đã thấy đói ${pastTime.vi}.`;
      const explanation = `To Be quá khứ: '${sub.text}' → '${sub.beWas}'.`;

      if (type === "sort") {
        const answer = `${sub.text} ${sub.beWas} hungry ${pastTime.en}`;
        pushSortQuestion(9, "was/were", answer, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 9,
          type: type,
          question: `${sub.text} ________ hungry ${pastTime.en}.`,
          options: shuffle(["was", "were", "is", "are"]),
          answer: sub.beWas,
          rule: "was/were",
          translation: translation,
          explanation: explanation
        });
      }
    }

    // Lesson 10: Động từ thường V2 - 50 questions
    for (let i = 0; i < 50; i++) {
      const isRegular = i % 2 === 0;
      const sub = getRandom(SUBJECTS_POOL.singular, i);
      const v = isRegular ? getRandom(VERBS_REGULAR, i) : getRandom(VERBS_IRREGULAR, i);
      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");
      const pastTime = PAST_TIMES[i % PAST_TIMES.length];
      const translation = `${translateSubject(sub.text)} đã ${v.viet} ${pastTime.vi}.`;
      const explanation = `QKĐ: '${v.base}' → '${v.v2}' (${isRegular ? "có quy tắc" : "bất quy tắc"}).`;

      if (type === "sort") {
        const answer = `${sub.text} ${v.v2} ${v.obj} ${pastTime.en}`;
        pushSortQuestion(10, "V2/ed", answer, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 10,
          type: type,
          question: `${sub.text} ________ (${v.base}) ${v.obj} ${pastTime.en}.`,
          options: shuffle(uniqueOptions([v.v2, v.v3, v.base, `is ${v.base}`, `did ${v.base}`])),
          answer: v.v2,
          rule: "V2/ed",
          translation: translation,
          explanation: explanation
        });
      }
    }

    // Lesson 11: Did / Didn't - 60 questions (30 phủ định, 30 nghi vấn)
    // Phủ định
    for (let i = 0; i < 30; i++) {
      const sub = getRandom(SUBJECTS_POOL.plural, i);
      const v = getRandom(VERBS_IRREGULAR, i);
      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");
      const pastTime = PAST_TIMES[i % PAST_TIMES.length];
      const translation = `Chúng tôi đã không ${v.viet} ${pastTime.vi}.`;
      const explanation = `Phủ định QKĐ: didn't + V nguyên mẫu → 'didn't ${v.base}'.`;

      if (type === "sort") {
        const answer = `We didn't ${v.base} ${v.obj} ${pastTime.en}`;
        pushSortQuestion(11, "did/didn't", answer, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 11,
          type: type,
          question: `Phủ định: We didn't ________ (${v.base}) ${v.obj} ${pastTime.en}.`,
          options: shuffle(uniqueOptions([v.base, v.v2, v.v3, `${v.base}ing`, `to ${v.base}`])),
          answer: v.base,
          rule: "did/didn't",
          translation: translation,
          explanation: explanation
        });
      }
    }
    // Nghi vấn
    for (let i = 0; i < 30; i++) {
      const sub = getRandom(SUBJECTS_POOL.singular, i);
      const v = getRandom(VERBS_REGULAR, i);
      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");
      const pastTime = PAST_TIMES[i % PAST_TIMES.length];
      const translation = `${pastTime.vi.charAt(0).toUpperCase() + pastTime.vi.slice(1)} bạn có ${v.viet} không?`;
      const explanation = `Câu hỏi QKĐ: Did + S + V nguyên mẫu → '${v.base}'.`;

      if (type === "sort") {
        const answer = `Did you ${v.base} ${v.obj} ${pastTime.en}`;
        pushSortQuestion(11, "did/didn't", answer, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 11,
          type: type,
          question: `Nghi vấn: Did you ________ (${v.base}) ${v.obj} ${pastTime.en}?`,
          options: shuffle([v.base, "Do", "Does", "Has"]),
          answer: v.base,
          rule: "did/didn't",
          translation: translation,
          explanation: explanation
        });
      }
    }

    // Lesson 12: Cách dùng - 40 questions
    for (let i = 0; i < 40; i++) {
      const sub = getRandom(SUBJECTS_POOL.singular, i);
      const v = getRandom(VERBS_REGULAR, i);
      const type = i % 2 === 0 ? "choice" : "sort";
      const translation = `${translateSubject(sub.text)} từng ${v.viet} khi còn trẻ.`;
      const explanation = `Thói quen cũ: 'used to + V nguyên mẫu'.`;

      if (type === "sort") {
        const answer = `${sub.text} used to ${v.base} ${v.obj} when young`;
        pushSortQuestion(12, "V2/ed", answer, translation, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 12,
          type: type,
          question: `Chọn câu sử dụng cấu trúc 'used to' đúng:`,
          options: shuffle([
            `${sub.text} used to ${v.base} ${v.obj} when young.`,
            `${sub.text} used to ${v.v2} ${v.obj} when young.`,
            `${sub.text} use to ${v.base} ${v.obj} when young.`,
            `${sub.text} was used to ${v.base} ${v.obj} when young.`
          ]),
          answer: `${sub.text} used to ${v.base} ${v.obj} when young.`,
          rule: "V2/ed",
          translation: translation,
          explanation: explanation
        });
      }
    }

    // Lesson 13: Dấu hiệu nhận biết - 40 questions
    const pastSignals = [
      { word: "yesterday", hint: "ngày hôm qua", vi: "ngày hôm qua" },
      { word: "ago", hint: "cách đây (sau khoảng thời gian)", vi: "2 ngày trước" },
      { word: "last year", hint: "năm ngoái", vi: "năm ngoái" }
    ];
    for (let i = 0; i < 40; i++) {
      const sig = pastSignals[i % pastSignals.length];
      const sub = getRandom(SUBJECTS_POOL.plural, i);
      const v = getRandom(VERBS_IRREGULAR, i);
      let qText = "";
      let transStr = "";
      let answerSentence = "";
      if (sig.word === "ago") {
        qText = `${sub.text} ${v.v2} ${v.obj} two days ________.`;
        transStr = `${translateSubject(sub.text)} đã ${v.viet} hai ngày trước.`;
        answerSentence = `${sub.text} ${v.v2} ${v.obj} two days ago`;
      } else {
        qText = `${sub.text} ${v.v2} ${v.obj} ________.`;
        transStr = `${translateSubject(sub.text)} đã ${v.viet} ${sig.vi}.`;
        answerSentence = `${sub.text} ${v.v2} ${v.obj} ${sig.word}`;
      }
      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");
      const explanation = `Dấu hiệu QKĐ: '${sig.word}' → ${sig.hint}.`;

      if (type === "sort") {
        pushSortQuestion(13, "V2/ed", answerSentence, transStr, explanation);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 13,
          type: type,
          question: qText,
          options: shuffle([sig.word, "since", "for", "already"]),
          answer: sig.word,
          rule: "V2/ed",
          translation: transStr,
          explanation: explanation
        });
      }
    }

    // Lesson 14: Lỗi sai phổ biến - 30 questions
    const pastErrors = [
      { wrong: "didn't went", right: "didn't go", desc: "Sau didn't phải dùng V nguyên mẫu (go), không dùng V2 (went).", trans: "Tôi đã không đi học." },
      { wrong: "didn't came", right: "didn't come", desc: "Sau didn't phải dùng V nguyên mẫu (come), không dùng V2 (came).", trans: "Tôi đã không đến." },
      { wrong: "did she wrote", right: "did she write", desc: "Trong câu hỏi có trợ động từ 'did', động từ chính đưa về nguyên mẫu (write).", trans: "Cô ấy có viết thư không?" },
      { wrong: "we was happy", right: "we were happy", desc: "Chủ ngữ số nhiều 'we' đi với động từ To Be quá khứ là 'were'.", trans: "Chúng tôi đã rất hạnh phúc." }
    ];
    for (let i = 0; i < 30; i++) {
      const err = pastErrors[i % pastErrors.length];
      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: 14,
        type: "choice",
        question: `Chọn câu sửa lỗi ĐÚNG cho: "${err.wrong}"`,
        options: shuffle([err.right, err.wrong, "didn't gone", "was went"]),
        answer: err.right,
        rule: err.wrong.includes("was") ? "was/were" : "did/didn't",
        translation: err.trans,
        explanation: err.desc
      });
    }

    // ----------------------------------------------------
    // PART 3: PRESENT PERFECT VS PAST SIMPLE (200 QUESTIONS, Lesson 15)
    // ----------------------------------------------------
    const contexts = {
      "go": {
        htht: {
          q: `She ________ (go) to school, so she is not at home now.`,
          ans: "has gone",
          trans: "Cô ấy đã đi học rồi (nên bây giờ không có ở nhà).",
          expl: "Kết quả vẫn còn ử hiện tại (không có ở nhà) → HTHT."
        },
        past: {
          q: `She ________ (go) to school yesterday, but she forgot her books.`,
          ans: "went",
          trans: "Cô ấy đã đi học ngày hôm qua, nhưng cô ấy quên mang sách.",
          expl: "Có 'yesterday' → QKĐ, hành động đã xong."
        }
      },
      "eat": {
        htht: {
          q: `I ________ (eat) dinner, so I am not hungry now.`,
          ans: "have eaten",
          trans: "Tôi đã ăn tối rồi (nên bây giờ tôi không thấy đói).",
          expl: "Kết quả vẫn ảnh hưởng (không đói) → HTHT."
        },
        past: {
          q: `I ________ (eat) dinner at 6 PM yesterday.`,
          ans: "ate",
          trans: "Tôi đã ăn tối lúc 6 giờ tối ngày hôm qua.",
          expl: "Có 'at 6 PM yesterday' → QKĐ, thời điểm cụ thể."
        }
      },
      "see": {
        htht: {
          q: `I ________ (see) that movie three times so far.`,
          ans: "have seen",
          trans: "Tôi đã xem bộ phim đó ba lần cho đến nay.",
          expl: "Kinh nghiệm tính đến hiện tại (có 'so far') → HTHT."
        },
        past: {
          q: `I ________ (see) that movie last night.`,
          ans: "saw",
          trans: "Tôi đã xem bộ phim đó tối hôm qua.",
          expl: "Có 'last night' → QKĐ."
        }
      },
      "write": {
        htht: {
          q: `He ________ (write) a letter, so it is ready to send now.`,
          ans: "has written",
          trans: "Anh ấy đã viết xong lá thư (nên bây giờ sẵn sàng gửi đi).",
          expl: "Kết quả vẫn liên quan (thư sẵn sàng gửi) → HTHT."
        },
        past: {
          q: `He ________ (write) a letter two hours ago.`,
          ans: "wrote",
          trans: "Anh ấy đã viết một lá thư hai giờ trước.",
          expl: "Có 'two hours ago' → QKĐ."
        }
      },
      "lose": {
        htht: {
          q: `I ________ (lose) my keys, so I can't open the door now.`,
          ans: "have lost",
          trans: "Tôi đã làm mất chìa khóa của mình rồi (nên bây giờ không mở được cửa).",
          expl: "Hậu quả vẫn kéo dài (không mở được cửa) → HTHT."
        },
        past: {
          q: `I ________ (lose) my keys yesterday, but I found them this morning.`,
          ans: "lost",
          trans: "Tôi đã làm mất chìa khóa ngày hôm qua, nhưng tôi đã tìm thấy chúng sáng nay.",
          expl: "Có 'yesterday' và đã tìm lại được → QKĐ."
        }
      },
      "do": {
        htht: {
          q: `They ________ (do) their homework, so they can play now.`,
          ans: "have done",
          trans: "Họ đã làm xong bài tập về nhà (nên bây giờ có thể đi chơi).",
          expl: "Kết quả vẫn còn (có thể đi chơi) → HTHT."
        },
        past: {
          q: `They ________ (do) their homework last night.`,
          ans: "did",
          trans: "Họ đã làm bài tập về nhà tối qua.",
          expl: "Có 'last night' → QKĐ."
        }
      },
      "buy": {
        htht: {
          q: `I ________ (buy) a new laptop, so I can work now.`,
          ans: "have bought",
          trans: "Tôi đã mua một chiếc máy tính xách tay mới rồi (nên bây giờ có thể làm việc).",
          expl: "Kết quả còn ảnh hưởng (có thể làm việc) → HTHT."
        },
        past: {
          q: `I ________ (buy) a new laptop last week.`,
          ans: "bought",
          trans: "Tôi đã mua một chiếc máy tính xách tay mới tuần trước.",
          expl: "Có 'last week' → QKĐ."
        }
      }
    };

    for (let i = 0; i < 200; i++) {
      const isHTHT = i % 2 === 0;
      const v = getRandom(VERBS_IRREGULAR, i);
      const ctx = contexts[v.base][isHTHT ? "htht" : "past"];

      const qText = ctx.q;
      const correctAns = ctx.ans;
      const expl = ctx.expl;
      const transStr = ctx.trans;

      let opt2 = isHTHT ? v.v2 : (v.base === "go" || v.base === "write" ? `has ${v.v3}` : `have ${v.v3}`);
      let opt3 = (v.base === "go" || v.base === "write") ? `have ${v.v3}` : `has ${v.v3}`;
      let opt4 = (v.base === "go" || v.base === "write") ? `is going` : `am ${v.base}ing`;
      if (v.base === "do") opt4 = "are doing";
      if (v.base === "lose") opt4 = "am losing";
      if (v.base === "buy") opt4 = "am buying";
      if (v.base === "eat") opt4 = "am eating";
      if (v.base === "see") opt4 = "am seeing";

      const type = i % 3 === 0 ? "choice" : (i % 3 === 1 ? "fill" : "sort");

      if (type === "sort") {
        const answer = qText.replace(/________\s*\([^)]+\)/g, correctAns).replace(/________/g, correctAns);
        pushSortQuestion(15, isHTHT ? "have/has" : "V2/ed", answer, transStr, expl);
      } else {
        QUESTION_BANK.push({
          id: `q-${id++}`,
          lessonId: 15,
          type: type,
          question: qText,
          options: shuffle(uniqueOptions([correctAns, opt2, opt3, opt4])),
          answer: correctAns,
          rule: isHTHT ? "have/has" : "V2/ed",
          translation: transStr,
          explanation: expl
        });
      }
    }
    // Lesson 16: Động từ bất quy tắc - AUTO-GENERATED from 360 verbs database
    // Every single verb gets exactly 2 fill questions (V2 + V3) = 720 fill questions
    // Plus 10 bonus choice questions + 10 sort questions = 740 total
    const allVerbs = window.COMPREHENSIVE_IRREGULAR_VERBS || [];

    // --- Generate 2 fill questions per verb (V2 and V3) for ALL 360 verbs ---
    allVerbs.forEach(verb => {
      const v1 = verb.v1;
      // Take the first form if there are alternatives separated by /
      const v2Primary = verb.v2.split("/")[0].trim();
      const v3Primary = verb.v3.split("/")[0].trim();
      const meaning = verb.meaning;
      const practiceLevel = irregularPracticeLevel(v1);

      const v2Question = irregularQuestionText(verb, "v2", v2Primary, practiceLevel);
      const v3Question = irregularQuestionText(verb, "v3", v3Primary, practiceLevel);

      // Question asking V2
      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: 16,
        practiceLevel: practiceLevel,
        verb: v1,
        type: v2Question.type,
        question: v2Question.question,
        options: shuffle(irregularVerbOptions(v2Primary, verb, "v2", v2Question.type === "choice")),
        answer: v2Primary,
        rule: "irregular",
        translation: v2Question.translation,
        explanation: v2Question.explanation
      });

      // Question asking V3
      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: 16,
        practiceLevel: practiceLevel,
        verb: v1,
        type: v3Question.type,
        question: v3Question.question,
        options: shuffle(irregularVerbOptions(v3Primary, verb, "v3", v3Question.type === "choice")),
        answer: v3Primary,
        rule: "irregular",
        translation: v3Question.translation,
        explanation: v3Question.explanation
      });
    });

    // --- 10 bonus choice questions about patterns and usage ---
    const choiceQuestions = [
      {
        question: "Which of the following irregular verbs has the SAME form for V1, V2, and V3 (A-A-A pattern)?",
        options: ["cut", "go", "buy", "run"],
        answer: "cut",
        translation: "Động từ bất quy tắc nào sau đây có dạng V1, V2 và V3 giống hệt nhau (nhóm A-A-A)?",
        explanation: "'cut' có dạng: cut → cut → cut. 'go' là go-went-gone (A-B-C), 'buy' là buy-bought-bought (A-B-B), 'run' là run-ran-run (A-B-A)."
      },
      {
        question: "Which of the following irregular verbs has V1 and V3 identical (A-B-A pattern)?",
        options: ["run", "read", "lose", "sell"],
        answer: "run",
        translation: "Động từ nào có V1 và V3 giống hệt nhau (nhóm A-B-A)?",
        explanation: "'run' chia: run (V1) → ran (V2) → run (V3). V1 và V3 đều là 'run'."
      },
      {
        question: "Which of the following is an INCORRECT verb form?",
        options: ["eated", "ate", "eaten", "eat"],
        answer: "eated",
        translation: "Dạng động từ nào sau đây là SAI?",
        explanation: "'eat' là động từ bất quy tắc (eat-ate-eaten), không bao giờ thêm -ed."
      },
      {
        question: "Complete: She ________ (lose) her phone yesterday.",
        options: ["lost", "losed", "has lost", "lose"],
        answer: "lost",
        translation: "Hoàn thành câu: Cô ấy đã làm mất điện thoại ngày hôm qua.",
        explanation: "Quá khứ đơn (có 'yesterday'), 'lose' chia V2 là 'lost'."
      },
      {
        question: "Complete: We have ________ (make) a big cake for her birthday.",
        options: ["made", "make", "maked", "making"],
        answer: "made",
        translation: "Chúng tôi đã làm một chiếc bánh lớn cho sinh nhật cô ấy.",
        explanation: "Hiện tại hoàn thành (have + V3), 'make' chia V3 là 'made'."
      },
      {
        question: "What is the V3 (Past Participle) form of 'write'?",
        options: ["written", "wrote", "write", "writing"],
        answer: "written",
        translation: "Dạng V3 của động từ 'write' là gì?",
        explanation: "write (V1) → wrote (V2) → written (V3)."
      },
      {
        question: "What is the correct V2 and V3 of 'buy'?",
        options: ["bought – bought", "buyed – buyed", "boughten – boughten", "bought – boughten"],
        answer: "bought – bought",
        translation: "Dạng V2 và V3 chính xác của 'buy' là gì?",
        explanation: "'buy' thuộc nhóm A-B-B: buy → bought → bought."
      },
      {
        question: "What is the V2 (Past Simple) form of 'see'?",
        options: ["saw", "seen", "seed", "sees"],
        answer: "saw",
        translation: "Dạng V2 của 'see' là gì?",
        explanation: "see (V1) → saw (V2) → seen (V3)."
      },
      {
        question: "What is the V3 form of 'go'?",
        options: ["gone", "went", "goes", "going"],
        answer: "gone",
        translation: "Dạng V3 của 'go' là gì?",
        explanation: "go (V1) → went (V2) → gone (V3)."
      },
      {
        question: "Complete: He has ________ (drink) all the milk.",
        options: ["drunk", "drank", "drinked", "drink"],
        answer: "drunk",
        translation: "Anh ấy đã uống hết sữa rồi.",
        explanation: "Hiện tại hoàn thành (has + V3), 'drink' chia V3 là 'drunk'."
      }
    ];

    choiceQuestions.forEach(item => {
      QUESTION_BANK.push({
        id: `q-${id++}`,
        lessonId: 16,
        practiceLevel: "easy",
        type: "choice",
        question: item.question,
        options: shuffle(item.options),
        answer: item.answer,
        rule: "irregular",
        translation: item.translation,
        explanation: item.explanation
      });
    });

    // --- 10 sort questions ---
    pushSortQuestion(16, "irregular", "They went to school yesterday", "Họ đã đi học ngày hôm qua.", "Quá khứ đơn dùng V2 'went' của 'go'.", "easy");
    pushSortQuestion(16, "irregular", "I have eaten dinner already", "Tôi đã ăn tối rồi.", "Hiện tại hoàn thành dùng V3 'eaten' của 'eat'.", "easy");
    pushSortQuestion(16, "irregular", "She lost her keys yesterday", "Cô ấy đã mất chìa khóa hôm qua.", "Quá khứ đơn dùng V2 'lost' của 'lose'.", "easy");
    pushSortQuestion(16, "irregular", "We have bought a new laptop", "Chúng tôi đã mua laptop mới.", "Hiện tại hoàn thành dùng V3 'bought' của 'buy'.", "easy");
    pushSortQuestion(16, "irregular", "He cut his finger yesterday", "Anh ấy bị đứt tay hôm qua.", "Quá khứ đơn dùng V2 'cut' của 'cut' (A-A-A).", "easy");
    pushSortQuestion(16, "irregular", "She has broken the window", "Cô ấy đã làm vỡ cửa sổ.", "Hiện tại hoàn thành dùng V3 'broken' của 'break'.", "medium");
    pushSortQuestion(16, "irregular", "He drove to work yesterday", "Anh ấy đã lái xe đi làm hôm qua.", "Quá khứ đơn dùng V2 'drove' của 'drive'.", "medium");
    pushSortQuestion(16, "irregular", "They have chosen the best option", "Họ đã chọn phương án tốt nhất.", "Hiện tại hoàn thành dùng V3 'chosen' của 'choose'.", "medium");
    pushSortQuestion(16, "irregular", "I forgot my homework yesterday", "Tôi đã quên bài tập hôm qua.", "Quá khứ đơn dùng V2 'forgot' của 'forget'.", "medium");
    pushSortQuestion(16, "irregular", "She has spoken to the manager", "Cô ấy đã nói chuyện với quản lý.", "Hiện tại hoàn thành dùng V3 'spoken' của 'speak'.", "medium");
  }

  // Register generator to registered unit
  unit.generateQuestions = function (shuffle) {
    const bank = [];
    generateQuestionBank.__injectBank = bank;
    generateQuestionBank(shuffle);
    return bank;
  };
})();
