(function () {
  if (!window.UNITS_REGISTRY) window.UNITS_REGISTRY = {};

  // ------------------------------------------------------------------
  // LESSONS DATA
  // ------------------------------------------------------------------
  const LESSONS_DATA = {

    // CHAPTER 1: FUTURE CONTINUOUS
    "5-1": {
      chapter: "Chương 1: Tương lai tiếp diễn (Future Continuous)",
      lessonNum: 1,
      shortTitle: "Bài 1: Khái niệm & Khẳng định",
      title: "Bài 1: Khái niệm & Cấu trúc khẳng định (Future Continuous)",
      explanation: `
        <p>Thì <strong>tương lai tiếp diễn (Future Continuous)</strong> được dùng để nói về <strong>một hành động đang diễn ra tại một thời điểm xác định trong tương lai</strong>.</p>
        <p><strong>A. Cấu Trúc Khẳng Định:</strong></p>
        <p>Cấu trúc: <code>S + will + be + V-ing</code></p>
        <p>Trong đó:</p>
        <ul>
          <li><code>will</code>: trợ động từ, áp dụng chung cho tất cả các ngôi.</li>
          <li><code>be</code>: cố định, không đổi theo ngôi.</li>
          <li><code>V-ing</code>: động từ chính thêm đuôi -ing.</li>
        </ul>
        <p><em>Lưu ý viết tắt:</em></p>
        <ul>
          <li>I will be = <strong>I'll be</strong></li>
          <li>He/She will be = <strong>He'll/She'll be</strong></li>
          <li>They/We will be = <strong>They'll/We'll be</strong></li>
        </ul>
      `,
      examples: [
        {
          eng: "I will be staying at the hotel in Nha Trang at 1 p.m tomorrow.",
          viet: "Tôi sẽ đang ở khách sạn ở Nha Trang lúc 1h chiều ngày mai.",
          tokens: [
            { text: "I", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "will be staying", label: "Future Continuous (will + be + V-ing)", role: "v" },
            { text: "at the hotel in Nha Trang", label: "Place Adverbial (Nơi chốn)", role: "o" },
            { text: "at 1 p.m tomorrow", label: "Time Adverbial (Thời điểm xác định trong tương lai)", role: "adv" }
          ],
          note: "Công thức: will + be + V-ing. Thời điểm 'at 1 p.m tomorrow' là mốc xác định trong tương lai mà hành động đang diễn ra."
        },
        {
          eng: "She will be working at the factory when you come tomorrow.",
          viet: "Cô ấy sẽ đang làm việc tại nhà máy khi bạn đến vào ngày mai.",
          tokens: [
            { text: "She", label: "Subject", role: "s" },
            { text: "will be working", label: "Future Continuous (will + be + V-ing)", role: "v" },
            { text: "at the factory", label: "Place Adverbial", role: "o" },
            { text: "when you come tomorrow", label: "Time Clause (HTĐ – không dùng will trong mệnh đề when)", role: "adv" }
          ],
          note: "Hành động làm việc (kéo dài) đang diễn ra vào thời điểm bạn đến. Mệnh đề 'when you come' dùng HTĐ, KHÔNG dùng will."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi 1: Quên 'be' trong công thức.</strong></p>
        <p>Sai: <em>"She will working tomorrow."</em></p>
        <p>Đúng: <em>"She will <strong>be</strong> working tomorrow."</em></p>
        <p>🔴 <strong>Lỗi 2: Dùng will trong mệnh đề when/if.</strong></p>
        <p>Sai: <em>"When she <strong>will come</strong>, I will be cooking."</em></p>
        <p>Đúng: <em>"When she <strong>comes</strong>, I will be cooking."</em></p>
      `,
      tips: `
        <p>💡 <strong>Công thức chốt:</strong> <code>will + be + V-ing</code> – nhớ luôn cần đủ 3 thành phần này.</p>
        <p>💡 <code>will be</code> giống nhau cho tất cả các ngôi: I will be / He will be / They will be – không bao giờ chia là "will is/am/are".</p>
      `
    },

    "5-2": {
      chapter: "Chương 1: Tương lai tiếp diễn (Future Continuous)",
      lessonNum: 2,
      shortTitle: "Bài 2: Phủ định & Nghi vấn",
      title: "Bài 2: Thể phủ định & Nghi vấn (Future Continuous)",
      explanation: `
        <p><strong>A. Thể Phủ Định (-):</strong></p>
        <p>Cấu trúc: <code>S + will + not + be + V-ing</code></p>
        <p><em>Lưu ý:</em> <code>will not</code> = <strong>won't</strong></p>
        <p>Ví dụ: <em>We <strong>won't be studying</strong> at 8 a.m tomorrow.</em></p>
        <p><strong>B. Thể Nghi Vấn (Câu hỏi) (?):</strong></p>
        <p>Cấu trúc: <code>Will + S + be + V-ing?</code></p>
        <p>Trả lời:</p>
        <ul>
          <li><strong>Yes</strong>, S + <strong>will</strong>.</li>
          <li><strong>No</strong>, S + <strong>won't</strong>.</li>
        </ul>
      `,
      examples: [
        {
          eng: "We won't be studying at 8 a.m tomorrow.",
          viet: "Chúng tôi sẽ không đang học lúc 8h sáng ngày mai.",
          tokens: [
            { text: "We", label: "Subject", role: "s" },
            { text: "won't be studying", label: "Negative Future Continuous (won't + be + V-ing)", role: "v" },
            { text: "at 8 a.m tomorrow", label: "Time Adverbial (Thời điểm xác định)", role: "adv" }
          ],
          note: "'Won't' = will not. Công thức phủ định: won't + be + V-ing. Thêm 'not' sau will, giữ nguyên 'be' và V-ing."
        },
        {
          eng: "The children won't be playing with their friends when you come this weekend.",
          viet: "Bọn trẻ sẽ không đang chơi với bạn của chúng khi bạn đến vào cuối tuần này.",
          tokens: [
            { text: "The children", label: "Subject (Danh từ số nhiều)", role: "s" },
            { text: "won't be playing", label: "Negative Future Continuous", role: "v" },
            { text: "with their friends", label: "Prepositional Phrase", role: "o" },
            { text: "when you come this weekend", label: "Time Clause (HTĐ)", role: "adv" }
          ],
          note: "Phủ định chỉ cần thêm 'not' sau will → won't. Không đổi 'be' hay V-ing."
        },
        {
          eng: "Will you be waiting for the train at 9 a.m next Monday?",
          viet: "Bạn sẽ đang đợi tàu lúc 9h sáng thứ Hai tuần tới phải không?",
          tokens: [
            { text: "Will", label: "Auxiliary (Đảo lên đầu câu hỏi)", role: "be" },
            { text: "you", label: "Subject", role: "s" },
            { text: "be waiting", label: "be + V-ing (Phần còn lại của Future Continuous)", role: "v" },
            { text: "for the train", label: "Object", role: "o" },
            { text: "at 9 a.m next Monday?", label: "Time Adverbial", role: "adv" }
          ],
          note: "Câu hỏi: đảo 'Will' lên đầu. Công thức: Will + S + be + V-ing? Trả lời: Yes, I will. / No, I won't."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Quên 'be' khi tạo câu hỏi hoặc câu phủ định.</strong></p>
        <p>Sai: <em>"Will you waiting at 9 am?"</em></p>
        <p>Đúng: <em>"Will you <strong>be</strong> waiting at 9 am?"</em></p>
        <p>🔴 <strong>Lỗi: Dùng "won't be" + V nguyên mẫu.</strong></p>
        <p>Sai: <em>"We won't be study tomorrow."</em></p>
        <p>Đúng: <em>"We won't be <strong>studying</strong> tomorrow."</em> (Phải dùng V-ing).</p>
      `,
      tips: `
        <p>💡 <strong>Quy tắc 3 bước nhớ công thức:</strong></p>
        <ul>
          <li>Khẳng định: <code>will → be → V-ing</code></li>
          <li>Phủ định: thêm <code>not</code> sau will → <code>won't be V-ing</code></li>
          <li>Câu hỏi: kéo <code>Will</code> lên đầu → <code>Will + S + be + V-ing?</code></li>
        </ul>
      `
    },

    "5-3": {
      chapter: "Chương 1: Tương lai tiếp diễn (Future Continuous)",
      lessonNum: 3,
      shortTitle: "Bài 3: Cách dùng & Dấu hiệu",
      title: "Bài 3: Cách sử dụng & Dấu hiệu nhận biết thì tương lai tiếp diễn",
      explanation: `
        <p>Thì tương lai tiếp diễn có <strong>4 cách sử dụng</strong> chính:</p>
        <ol>
          <li><strong>Hành động đang diễn ra tại một thời điểm xác định trong tương lai:</strong><br>
            Ví dụ: <em>At 12 o'clock tomorrow, my friends and I will be having lunch at school.</em></li>
          <li><strong>Hành động đang xảy ra thì hành động khác xen vào trong tương lai</strong> (When + HTĐ, TLTD):<br>
            Ví dụ: <em>When you come tomorrow, they will be playing tennis.</em></li>
          <li><strong>Hành động diễn ra và kéo dài liên tục suốt một khoảng thời gian ở tương lai:</strong><br>
            Ví dụ: <em>I'll be staying with my grandma for the next 2 weeks.</em></li>
          <li><strong>Hành động sẽ xảy ra như một phần trong kế hoạch/thời gian biểu:</strong><br>
            Ví dụ: <em>The party will be starting at ten o'clock.</em></li>
        </ol>
        <p><strong>Dấu hiệu nhận biết:</strong></p>
        <ul>
          <li><strong>At this time / at this moment + thời gian tương lai:</strong> at this time tomorrow, at this time next week</li>
          <li><strong>At + giờ cụ thể + thời gian tương lai:</strong> at 10 a.m tomorrow, at 3 p.m next Monday</li>
        </ul>
        <p><strong>⚠️ Lưu ý quan trọng:</strong> Thì tương lai tiếp diễn <strong>KHÔNG đứng sau</strong> các liên từ: <em>when, while, before, after, as soon as, by the time, if, unless</em>.</p>
        <ul>
          <li>❌ Sai: <em>"When she <strong>will be waiting</strong> for you at the gate, it rains."</em></li>
          <li>✅ Đúng: <em>"When it rains, she <strong>will be waiting</strong> for you at the gate."</em></li>
        </ul>
      `,
      examples: [
        {
          eng: "At 12 o'clock tomorrow, my friends and I will be having lunch at school.",
          viet: "Vào lúc 12h ngày mai, các bạn tôi và tôi sẽ đang ăn trưa tại trường.",
          tokens: [
            { text: "At 12 o'clock tomorrow,", label: "Time Adverbial (Dấu hiệu: At + giờ cụ thể + tương lai)", role: "adv" },
            { text: "my friends and I", label: "Subject (Chủ ngữ ghép)", role: "s" },
            { text: "will be having", label: "Future Continuous (will + be + V-ing)", role: "v" },
            { text: "lunch at school", label: "Object + Place", role: "o" }
          ],
          note: "'At 12 o'clock tomorrow' là thời điểm xác định trong tương lai → dùng TLTD."
        },
        {
          eng: "When you come tomorrow, they will be playing tennis.",
          viet: "Khi bạn đến vào ngày mai, họ sẽ đang chơi tennis.",
          tokens: [
            { text: "When you come tomorrow,", label: "Time Clause (HTĐ – KHÔNG dùng will trong mệnh đề when)", role: "adv" },
            { text: "they", label: "Subject", role: "s" },
            { text: "will be playing", label: "Future Continuous (Hành động đang diễn ra khi bạn đến)", role: "v" },
            { text: "tennis", label: "Object", role: "o" }
          ],
          note: "Mệnh đề 'when' dùng HTĐ (come), mệnh đề chính dùng TLTD (will be playing). KHÔNG viết 'when you will come'."
        },
        {
          eng: "I'll be staying with my grandma for the next 2 weeks.",
          viet: "Tôi sẽ ở với bà trong 2 tuần tới.",
          tokens: [
            { text: "I'll be staying", label: "Future Continuous (I'll = I will, kéo dài liên tục)", role: "v" },
            { text: "with my grandma", label: "Prepositional Phrase", role: "o" },
            { text: "for the next 2 weeks", label: "Duration Adverbial (Khoảng thời gian kéo dài)", role: "adv" }
          ],
          note: "Hành động ở với bà kéo dài liên tục suốt 2 tuần tới → TLTD."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Dùng TLTD trong mệnh đề when/if.</strong></p>
        <p>Sai: <em>"When she <strong>will be waiting</strong> for you, call me."</em></p>
        <p>Đúng: <em>"When she <strong>is waiting</strong> for you / when she waits, call me."</em> (mệnh đề when dùng HTĐ hoặc HTTD).</p>
      `,
      tips: `
        <p>💡 <strong>Quy tắc vàng:</strong> TLTD KHÔNG bao giờ đứng trong mệnh đề phụ sau when/if/before/after.</p>
        <p>💡 <strong>Dấu hiệu chắc chắn:</strong> thấy "at this time tomorrow", "at [giờ] tomorrow/next [thời gian]" → dùng TLTD.</p>
      `
    },

    // CHAPTER 2: FUTURE PERFECT
    "5-4": {
      chapter: "Chương 2: Tương lai hoàn thành (Future Perfect)",
      lessonNum: 4,
      shortTitle: "Bài 4: Khái niệm & Khẳng định",
      title: "Bài 4: Khái niệm & Cấu trúc khẳng định (Future Perfect)",
      explanation: `
        <p>Thì <strong>tương lai hoàn thành (Future Perfect)</strong> được dùng để diễn tả <strong>hành động sẽ hoàn thành trước một thời điểm xác định trong tương lai</strong>.</p>
        <p><strong>A. Cấu Trúc Khẳng Định:</strong></p>
        <p>Cấu trúc: <code>S + will + have + VpII (verb-ed / cột 3)</code></p>
        <p>Trong đó:</p>
        <ul>
          <li><code>will</code>: trợ động từ, chung cho mọi ngôi.</li>
          <li><code>have</code>: cố định (không dùng has).</li>
          <li><code>VpII</code>: động từ phân từ II (cột 3 bảng bất quy tắc, hoặc thêm -ed với động từ quy tắc).</li>
        </ul>
        <p><em>Lưu ý:</em> <code>will have</code> áp dụng chung cho tất cả các ngôi – KHÔNG dùng "will has".</p>
      `,
      examples: [
        {
          eng: "I will have finished my report by the end of this month.",
          viet: "Tôi sẽ hoàn thành báo cáo của tôi vào cuối tháng này.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "will have finished", label: "Future Perfect (will + have + VpII)", role: "v" },
            { text: "my report", label: "Object (Tân ngữ)", role: "o" },
            { text: "by the end of this month", label: "Time Adverbial (Dấu hiệu: by the end of)", role: "adv" }
          ],
          note: "'By the end of this month' là dấu hiệu nhận biết TLHT. Hành động hoàn thành báo cáo xảy ra TRƯỚC thời điểm cuối tháng."
        },
        {
          eng: "He will have typed 250 pages by 4 o'clock this afternoon.",
          viet: "Cho tới 4h chiều nay thì anh ấy sẽ đánh máy được 250 trang.",
          tokens: [
            { text: "He", label: "Subject", role: "s" },
            { text: "will have typed", label: "Future Perfect (will + have + VpII của type)", role: "v" },
            { text: "250 pages", label: "Object", role: "o" },
            { text: "by 4 o'clock this afternoon", label: "Time Adverbial (Dấu hiệu: by + giờ cụ thể)", role: "adv" }
          ],
          note: "'By 4 o'clock' → dấu hiệu TLHT. 'Typed' là V-ed (quy tắc) dùng làm VpII."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi 1: Dùng "will has" thay vì "will have".</strong></p>
        <p>Sai: <em>"She will <strong>has</strong> finished."</em></p>
        <p>Đúng: <em>"She will <strong>have</strong> finished."</em> (will have – không đổi theo ngôi).</p>
        <p>🔴 <strong>Lỗi 2: Dùng V2 (quá khứ đơn) thay vì VpII (phân từ 2) sau will have.</strong></p>
        <p>Sai: <em>"I will have <strong>went</strong>."</em></p>
        <p>Đúng: <em>"I will have <strong>gone</strong>."</em> (gone = cột 3, không phải went = cột 2).</p>
      `,
      tips: `
        <p>💡 <strong>Công thức tương lai hoàn thành:</strong> <code>will + have + VpII</code></p>
        <p>💡 Cả ba thành phần không đổi theo ngôi: I will have / She will have / They will have.</p>
        <p>💡 VpII của động từ quy tắc = thêm -ed; bất quy tắc = tra cột 3 bảng BQT.</p>
      `
    },

    "5-5": {
      chapter: "Chương 2: Tương lai hoàn thành (Future Perfect)",
      lessonNum: 5,
      shortTitle: "Bài 5: Phủ định & Nghi vấn",
      title: "Bài 5: Thể phủ định & Nghi vấn (Future Perfect)",
      explanation: `
        <p><strong>A. Thể Phủ Định (-):</strong></p>
        <p>Cấu trúc: <code>S + will not / won't + have + VpII</code></p>
        <p>➔ Thêm "not" vào ngay sau "will". <code>have</code> và <code>VpII</code> giữ nguyên.</p>
        <p><strong>B. Thể Nghi Vấn (?):</strong></p>
        <p>Cấu trúc: <code>Will + S + have + VpII?</code></p>
        <p>Trả lời:</p>
        <ul>
          <li><strong>Yes</strong>, S + <strong>will</strong>.</li>
          <li><strong>No</strong>, S + <strong>won't</strong>.</li>
        </ul>
        <p>➔ Câu hỏi: đảo "will" lên trước chủ ngữ.</p>
      `,
      examples: [
        {
          eng: "I will not have stopped my work before the time you come tomorrow.",
          viet: "Tôi sẽ vẫn chưa xong việc khi bạn đến ngày mai.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "will not have stopped", label: "Negative Future Perfect (will not + have + VpII)", role: "v" },
            { text: "my work", label: "Object", role: "o" },
            { text: "before the time you come tomorrow", label: "Time Clause (Dấu hiệu: before)", role: "adv" }
          ],
          note: "Phủ định: thêm 'not' sau will. Không đổi 'have'. 'Stopped' = VpII của stop (quy tắc)."
        },
        {
          eng: "My sister will not have come home by 10 pm this evening.",
          viet: "Chị gái tôi sẽ vẫn chưa về nhà vào lúc 10h tối nay.",
          tokens: [
            { text: "My sister", label: "Subject (Số ít)", role: "s" },
            { text: "will not have come", label: "Negative Future Perfect", role: "v" },
            { text: "home", label: "Adverb of Place", role: "o" },
            { text: "by 10 pm this evening", label: "Time Adverbial (Dấu hiệu: by)", role: "adv" }
          ],
          note: "'Come' là VpII của 'come' (bất quy tắc: come – came – come). 'By 10 pm' là dấu hiệu TLHT."
        },
        {
          eng: "Will you have gone out by 7 pm tomorrow?",
          viet: "Vào lúc 7 giờ tối mai bạn đã đi ra ngoài rồi đúng không?",
          tokens: [
            { text: "Will", label: "Auxiliary (Đảo lên đầu câu hỏi)", role: "be" },
            { text: "you", label: "Subject", role: "s" },
            { text: "have gone out", label: "have + VpII (Phần còn lại của Future Perfect)", role: "v" },
            { text: "by 7 pm tomorrow?", label: "Time Adverbial (Dấu hiệu: by)", role: "adv" }
          ],
          note: "Câu hỏi: đảo 'Will' lên đầu. 'Gone' = VpII của 'go' (go – went – gone). Trả lời: Yes, I will. / No, I won't."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Dùng "hasn't/haven't" để phủ định tương lai hoàn thành.</strong></p>
        <p>Sai: <em>"She <strong>hasn't</strong> finished by tomorrow."</em></p>
        <p>Đúng: <em>"She <strong>won't have</strong> finished by tomorrow."</em></p>
      `,
      tips: `
        <p>💡 Phủ định TLHT: <strong>won't have + VpII</strong> – cực đơn giản, chỉ thêm not sau will.</p>
        <p>💡 Câu hỏi: <strong>Will + S + have + VpII?</strong> – giữ nguyên have và VpII, chỉ đảo Will lên.</p>
      `
    },

    "5-6": {
      chapter: "Chương 2: Tương lai hoàn thành (Future Perfect)",
      lessonNum: 6,
      shortTitle: "Bài 6: Cách dùng & Dấu hiệu",
      title: "Bài 6: Cách sử dụng & Dấu hiệu nhận biết thì tương lai hoàn thành",
      explanation: `
        <p>Thì tương lai hoàn thành có <strong>2 cách sử dụng chính</strong>:</p>
        <ol>
          <li><strong>Hành động/sự việc sẽ hoàn thành trước một thời điểm xác định trong tương lai:</strong><br>
            Ví dụ: <em>I will have finished my homework before 12 o'clock this evening.</em></li>
          <li><strong>Hành động/sự việc sẽ hoàn thành trước một hành động/sự việc khác trong tương lai:</strong><br>
            Ví dụ: <em>When you come back, I will have typed this email.</em><br>
            (Khi bạn quay lại, tôi sẽ đánh máy xong bức thư điện tử này)</li>
        </ol>
        <p><strong>Dấu hiệu nhận biết đặc trưng:</strong></p>
        <ul>
          <li><strong>By + thời gian tương lai:</strong> by tomorrow, by 10 pm, by next Monday</li>
          <li><strong>By the end of + thời gian:</strong> by the end of this month / year / week</li>
          <li><strong>By the time + mệnh đề HTĐ</strong></li>
          <li><strong>Before + thời gian tương lai</strong></li>
        </ul>
      `,
      examples: [
        {
          eng: "I will have finished my homework before 12 o'clock this evening.",
          viet: "Tôi sẽ hoàn thành bài tập của mình trước 12 giờ tối nay.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "will have finished", label: "Future Perfect (Hoàn thành trước thời điểm xác định)", role: "v" },
            { text: "my homework", label: "Object", role: "o" },
            { text: "before 12 o'clock this evening", label: "Time Adverbial (Dấu hiệu: before)", role: "adv" }
          ],
          note: "'Before 12 o'clock' là thời điểm mốc trong tương lai. Bài tập phải XONG TRƯỚC mốc đó → TLHT."
        },
        {
          eng: "When you come back, I will have typed this email.",
          viet: "Khi bạn quay lại, tôi sẽ đánh máy xong bức thư điện tử này.",
          tokens: [
            { text: "When you come back,", label: "Time Clause (HTĐ – hành động xảy ra sau)", role: "adv" },
            { text: "I", label: "Subject", role: "s" },
            { text: "will have typed", label: "Future Perfect (Hoàn thành trước khi bạn quay lại)", role: "v" },
            { text: "this email", label: "Object", role: "o" }
          ],
          note: "Việc đánh máy email hoàn thành TRƯỚC khi bạn quay lại. Hành động xảy ra trước → TLHT."
        },
        {
          eng: "By the end of this month I will have taken an English course.",
          viet: "Cho tới cuối tháng này thì tôi đã tham gia một khóa học tiếng Anh rồi.",
          tokens: [
            { text: "By the end of this month", label: "Time Adverbial (Dấu hiệu: by the end of)", role: "adv" },
            { text: "I", label: "Subject", role: "s" },
            { text: "will have taken", label: "Future Perfect (will + have + VpII của take)", role: "v" },
            { text: "an English course", label: "Object", role: "o" }
          ],
          note: "'By the end of this month' là dấu hiệu TLHT điển hình. 'Taken' = VpII của 'take' (take – took – taken)."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Dùng thì tương lai đơn (will + V) khi đã có dấu hiệu 'by/before'.</strong></p>
        <p>Sai: <em>"I will finish my work by 5 pm."</em> (khi muốn nhấn mạnh hoàn thành)</p>
        <p>Đúng: <em>"I will have finished my work by 5 pm."</em> (nhấn mạnh sự hoàn thành trước mốc thời gian)</p>
      `,
      tips: `
        <p>💡 <strong>Câu thần chú nhận biết TLHT:</strong></p>
        <ul>
          <li>Thấy <strong>by</strong> + thời gian tương lai → TLHT</li>
          <li>Thấy <strong>before</strong> + thời gian tương lai → TLHT</li>
          <li>Thấy <strong>by the end of</strong> / <strong>by the time</strong> → TLHT</li>
        </ul>
      `
    },

    // CHAPTER 3: SO SÁNH & TỔNG HỢP
    "5-7": {
      chapter: "Chương 3: So sánh & Tổng hợp",
      lessonNum: 7,
      shortTitle: "Bài 7: Phân biệt TLTD & TLHT",
      title: "Bài 7: Phân biệt Future Continuous và Future Perfect",
      explanation: `
        <p>Đặt hai thì tương lai tiếp diễn và tương lai hoàn thành lên bàn cân:</p>
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Tiêu chí</th>
              <th>Future Continuous (TLTD)</th>
              <th>Future Perfect (TLHT)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Cấu trúc</strong></td>
              <td><code>S + will + be + V-ing</code></td>
              <td><code>S + will + have + VpII</code></td>
            </tr>
            <tr>
              <td><strong>Ý nghĩa</strong></td>
              <td>Hành động đang diễn ra tại một thời điểm trong TL</td>
              <td>Hành động đã hoàn thành trước một thời điểm trong TL</td>
            </tr>
            <tr>
              <td><strong>Câu hỏi</strong></td>
              <td><code>Will + S + be + V-ing?</code></td>
              <td><code>Will + S + have + VpII?</code></td>
            </tr>
            <tr>
              <td><strong>Dấu hiệu</strong></td>
              <td>at [giờ] tomorrow, at this time next [week]</td>
              <td>by, by the end of, before, by the time</td>
            </tr>
          </tbody>
        </table>
        <br>
        <p><strong>🚨 Ví dụ phân tích so sánh:</strong></p>
        <ul>
          <li><strong>At 8 a.m tomorrow, I <u>will be sleeping</u>.</strong> → Đang ngủ tại thời điểm đó → TLTD.</li>
          <li><strong>By 8 a.m tomorrow, I <u>will have finished</u> my work.</strong> → Xong việc trước 8h → TLHT.</li>
          <li><strong>When you arrive, she <u>will be cooking</u>.</strong> → Đang nấu ăn khi bạn đến → TLTD.</li>
          <li><strong>By the time you arrive, she <u>will have cooked</u>.</strong> → Nấu xong rồi khi bạn đến → TLHT.</li>
        </ul>
      `,
      examples: [
        {
          eng: "At 8 a.m tomorrow, I will be sleeping.",
          viet: "Lúc 8h sáng ngày mai, tôi sẽ đang ngủ.",
          tokens: [
            { text: "At 8 a.m tomorrow,", label: "Time (At + giờ → TLTD)", role: "adv" },
            { text: "I", label: "Subject", role: "s" },
            { text: "will be sleeping", label: "Future Continuous (đang diễn ra tại mốc đó)", role: "v" }
          ],
          note: "Thời điểm 'At 8 a.m' → hành động đang xảy ra tại đó → TLTD. Nếu là 'By 8 a.m' → TLHT."
        },
        {
          eng: "By 8 a.m tomorrow, I will have finished my work.",
          viet: "Trước 8h sáng ngày mai, tôi sẽ đã xong việc.",
          tokens: [
            { text: "By 8 a.m tomorrow,", label: "Time (By + giờ → TLHT)", role: "adv" },
            { text: "I", label: "Subject", role: "s" },
            { text: "will have finished", label: "Future Perfect (hoàn thành trước mốc đó)", role: "v" },
            { text: "my work", label: "Object", role: "o" }
          ],
          note: "Từ khoá 'By' → hoàn thành trước mốc đó → TLHT. So sánh với câu trên để thấy sự khác biệt."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi hay gặp nhất: Nhầm 'at' (TLTD) và 'by' (TLHT).</strong></p>
        <ul>
          <li><strong>at</strong> + giờ → hành động đang xảy ra → <strong>TLTD</strong> (will be V-ing)</li>
          <li><strong>by</strong> + giờ → hành động hoàn thành trước → <strong>TLHT</strong> (will have VpII)</li>
        </ul>
      `,
      tips: `
        <p>💡 <strong>Câu thần chú phân biệt:</strong></p>
        <p><em>"AT → đang làm (TLTD). BY → đã xong (TLHT)."</em></p>
        <p>💡 <strong>be / have</strong> là từ phân biệt hai thì: <code>will <u>be</u> V-ing</code> vs <code>will <u>have</u> VpII</code>.</p>
      `
    },

    "5-8": {
      chapter: "Chương 3: So sánh & Tổng hợp",
      lessonNum: 8,
      shortTitle: "Bài 8: Tổng hợp & Lỗi thường gặp",
      title: "Bài 8: Tổng hợp Unit 5 & Các lỗi sai thường gặp",
      explanation: `
        <p>Ôn tập toàn bộ Unit 5:</p>
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Tiêu chí</th>
              <th>Future Continuous</th>
              <th>Future Perfect</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Khẳng định</strong></td>
              <td><code>will + be + V-ing</code></td>
              <td><code>will + have + VpII</code></td>
            </tr>
            <tr>
              <td><strong>Phủ định</strong></td>
              <td><code>won't + be + V-ing</code></td>
              <td><code>won't + have + VpII</code></td>
            </tr>
            <tr>
              <td><strong>Nghi vấn</strong></td>
              <td><code>Will + S + be + V-ing?</code></td>
              <td><code>Will + S + have + VpII?</code></td>
            </tr>
          </tbody>
        </table>
        <br>
        <p><strong>🚨 Top 5 lỗi thường gặp:</strong></p>
        <ol>
          <li>Quên <strong>be</strong> trong TLTD: <em>"will working"</em> → <em>"will <strong>be</strong> working"</em>.</li>
          <li>Dùng <strong>will has</strong> thay vì <strong>will have</strong>: <em>"will has finished"</em> → <em>"will <strong>have</strong> finished"</em>.</li>
          <li>Dùng <strong>V2</strong> thay vì <strong>VpII</strong> sau will have: <em>"will have went"</em> → <em>"will have <strong>gone</strong>"</em>.</li>
          <li>Dùng TLTD trong mệnh đề when/if: <em>"when she will be waiting"</em> → <em>"when she <strong>is waiting</strong>"</em>.</li>
          <li>Nhầm dấu hiệu: <strong>at</strong> → TLTD; <strong>by</strong> → TLHT.</li>
        </ol>
      `,
      examples: [
        {
          eng: "At this time next week, she will be flying to London.",
          viet: "Vào thời điểm này tuần tới, cô ấy sẽ đang bay đến London.",
          tokens: [
            { text: "At this time next week,", label: "Time (Dấu hiệu TLTD)", role: "adv" },
            { text: "she", label: "Subject", role: "s" },
            { text: "will be flying", label: "Future Continuous (will + be + V-ing)", role: "v" },
            { text: "to London", label: "Destination", role: "adv" }
          ],
          note: "'At this time next week' → dấu hiệu TLTD điển hình."
        },
        {
          eng: "By next Friday, they will have completed the project.",
          viet: "Trước thứ Sáu tuần tới, họ sẽ hoàn thành dự án.",
          tokens: [
            { text: "By next Friday,", label: "Time (Dấu hiệu TLHT: by)", role: "adv" },
            { text: "they", label: "Subject", role: "s" },
            { text: "will have completed", label: "Future Perfect (will + have + VpII)", role: "v" },
            { text: "the project", label: "Object", role: "o" }
          ],
          note: "'By next Friday' → dấu hiệu TLHT điển hình. 'Completed' = VpII của 'complete' (quy tắc)."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Bảng tổng hợp lỗi:</strong></p>
        <ul>
          <li>Sai: <em>"I will working at 9 am."</em> → Đúng: <em>"I will <strong>be</strong> working at 9 am."</em></li>
          <li>Sai: <em>"She will has gone."</em> → Đúng: <em>"She will <strong>have</strong> gone."</em></li>
          <li>Sai: <em>"I will have went."</em> → Đúng: <em>"I will have <strong>gone</strong>."</em></li>
          <li>Sai: <em>"When she will be cooking..."</em> → Đúng: <em>"When she <strong>is cooking</strong>..."</em></li>
        </ul>
      `,
      tips: `
        <p>💡 <strong>3 câu hỏi để chọn thì đúng:</strong></p>
        <ol>
          <li>Có "will be + V-ing" không? → <strong>TLTD</strong></li>
          <li>Có "will have + VpII" không? → <strong>TLHT</strong></li>
          <li>Dấu hiệu: "at/at this time" → TLTD; "by/before/by the end of" → TLHT</li>
        </ol>
      `
    }
  };

  // ------------------------------------------------------------------
  // DATA POOLS for question generation
  // ------------------------------------------------------------------
  const SUBJECTS_POOL = {
    singular: [
      { text: "I", pronoun: "I" },
      { text: "He", pronoun: "he" },
      { text: "She", pronoun: "she" },
      { text: "It", pronoun: "it" },
      { text: "Peter", pronoun: "he" },
      { text: "Mary", pronoun: "she" },
      { text: "Lan", pronoun: "she" },
      { text: "My mother", pronoun: "she" }
    ],
    plural: [
      { text: "You", pronoun: "you" },
      { text: "We", pronoun: "we" },
      { text: "They", pronoun: "they" },
      { text: "My parents", pronoun: "they" },
      { text: "The students", pronoun: "they" }
    ]
  };

  const VERBS_CONT = [
    { base: "work",     ing: "working",     obj: "at the office",      viet: "làm việc tại văn phòng" },
    { base: "study",    ing: "studying",    obj: "English",             viet: "học tiếng Anh" },
    { base: "sleep",    ing: "sleeping",    obj: "",                    viet: "ngủ" },
    { base: "cook",     ing: "cooking",     obj: "lunch",               viet: "nấu bữa trưa" },
    { base: "play",     ing: "playing",     obj: "tennis",              viet: "chơi tennis" },
    { base: "wait",     ing: "waiting",     obj: "for the bus",         viet: "đợi xe buýt" },
    { base: "travel",   ing: "travelling",  obj: "to Paris",            viet: "du lịch Paris" },
    { base: "watch",    ing: "watching",    obj: "a movie",             viet: "xem phim" }
  ];

  const VERBS_PERF = [
    { base: "finish",   v3: "finished",   obj: "the report",          viet: "hoàn thành báo cáo" },
    { base: "complete", v3: "completed",  obj: "the project",         viet: "hoàn thành dự án" },
    { base: "eat",      v3: "eaten",      obj: "dinner",              viet: "ăn tối xong" },
    { base: "write",    v3: "written",    obj: "the email",           viet: "viết xong email" },
    { base: "read",     v3: "read",       obj: "the book",            viet: "đọc xong cuốn sách" },
    { base: "do",       v3: "done",       obj: "the homework",        viet: "làm xong bài tập" },
    { base: "leave",    v3: "left",       obj: "the office",          viet: "rời văn phòng" },
    { base: "arrive",   v3: "arrived",    obj: "at the airport",      viet: "đến sân bay" }
  ];

  const TIMES_AT = [
    { en: "at 8 a.m tomorrow",          vi: "lúc 8h sáng ngày mai" },
    { en: "at 10 p.m tonight",          vi: "lúc 10h tối nay" },
    { en: "at this time tomorrow",      vi: "vào thời điểm này ngày mai" },
    { en: "at this time next week",     vi: "vào thời điểm này tuần tới" },
    { en: "at 3 p.m next Monday",       vi: "lúc 3h chiều thứ Hai tuần tới" },
    { en: "at noon tomorrow",           vi: "vào buổi trưa ngày mai" }
  ];

  const TIMES_BY = [
    { en: "by tomorrow",                  vi: "trước ngày mai" },
    { en: "by the end of this month",     vi: "trước cuối tháng này" },
    { en: "by 5 p.m today",              vi: "trước 5h chiều hôm nay" },
    { en: "by next Friday",               vi: "trước thứ Sáu tuần tới" },
    { en: "before 12 o'clock tonight",   vi: "trước 12h đêm nay" },
    { en: "by the time you arrive",       vi: "trước khi bạn đến" }
  ];

  // Expose lessons and pools
  window.UNITS_REGISTRY["unit5"] = {
    unitId: "unit5",
    title: "Unit 5: Future Continuous & Future Perfect",
    lessons: LESSONS_DATA,
    pools: { SUBJECTS_POOL, VERBS_CONT, VERBS_PERF, TIMES_AT, TIMES_BY },
    rules: {
      "will + be + V-ing": "Cấu trúc thì tương lai tiếp diễn",
      "TLTD – at time": "Dùng TLTD cho thời điểm xác định (at...)",
      "TLTD – when clause": "Kết hợp When + HTĐ, TLTD",
      "won't be V-ing": "Phủ định tương lai tiếp diễn",
      "will + have + VpII": "Cấu trúc thì tương lai hoàn thành",
      "TLHT – by/before": "Dùng TLHT với by, before, by the end of",
      "won't have VpII": "Phủ định tương lai hoàn thành",
      "at vs by": "Phân biệt dấu hiệu TLTD (at) và TLHT (by)"
    }
  };
})();
