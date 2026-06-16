(function () {
  if (!window.UNITS_REGISTRY) window.UNITS_REGISTRY = {};

  // ------------------------------------------------------------------
  // LESSONS DATA
  // ------------------------------------------------------------------
  const LESSONS_DATA = {
    // CHAPTER 1: NEAR FUTURE - be going to
    "4-1": {
      chapter: "Chương 1: Tương lai gần (be going to)",
      lessonNum: 1,
      shortTitle: "Bài 1: Khái niệm & Khẳng định",
      title: "Bài 1: Khái niệm & Cấu trúc khẳng định (Near Future – be going to)",
      explanation: `
        <p>Thì <strong>tương lai gần (Near Future)</strong> dùng để diễn đạt:</p>
        <ol>
          <li><strong>Kế hoạch, dự định (intention / plan)</strong> đã được quyết định từ trước thời điểm nói.</li>
          <li><strong>Dự đoán dựa vào bằng chứng (evidence)</strong> đang hiện diện trước mắt.</li>
        </ol>
        <p><strong>A. Cấu Trúc Khẳng Định:</strong></p>
        <p>Cấu trúc: <code>S + is / am / are + going to + V (nguyên mẫu)</code></p>
        <p>Trong đó, việc lựa chọn <strong>is / am / are</strong> phụ thuộc vào chủ ngữ (S):</p>
        <ul>
          <li><code>S = I</code> → <strong>am</strong> (I'm going to…)</li>
          <li><code>S = He / She / It / Tên riêng / Danh từ số ít</code> → <strong>is</strong> (She's going to…)</li>
          <li><code>S = We / You / They / Danh từ số nhiều</code> → <strong>are</strong> (They're going to…)</li>
        </ul>
        <p><strong>Lưu ý đặc biệt:</strong> Khi động từ chính là <em>go</em>, ta chỉ dùng <code>S + be + going to</code> (không dùng "going to go").</p>
        <ul>
          <li>✅ Đúng: <em>I am going to the party tonight.</em></li>
          <li>❌ Sai: <em>I am going to go to the party tonight.</em></li>
        </ul>
      `,
      examples: [
        {
          eng: "I am going to see a film at the cinema tonight.",
          viet: "Tối nay tôi dự định đi xem phim ở rạp chiếu phim.",
          tokens: [
            { text: "I", label: "Subject (Chủ ngữ ngôi thứ nhất số ít)", role: "s" },
            { text: "am going to", label: "Auxiliary (Trợ động từ tương lai gần)", role: "be" },
            { text: "see", label: "Main Verb (Động từ nguyên mẫu)", role: "v" },
            { text: "a film at the cinema", label: "Object + Place (Tân ngữ và nơi chốn)", role: "o" },
            { text: "tonight", label: "Time Adverbial (Trạng từ chỉ thời gian)", role: "adv" }
          ],
          note: "Chủ ngữ 'I' đi với 'am'. Kế hoạch đã được quyết định trước → dùng be going to."
        },
        {
          eng: "Mary is going to buy a new car next week.",
          viet: "Mary dự định mua một chiếc xe mới vào tuần tới.",
          tokens: [
            { text: "Mary", label: "Subject (Danh từ riêng số ít)", role: "s" },
            { text: "is going to", label: "Auxiliary (Tên riêng/số ít → is)", role: "be" },
            { text: "buy", label: "Main Verb (Động từ nguyên mẫu)", role: "v" },
            { text: "a new car", label: "Object (Tân ngữ)", role: "o" },
            { text: "next week", label: "Time Adverbial", role: "adv" }
          ],
          note: "Danh từ riêng 'Mary' là số ít → dùng 'is'. Đây là dự định đã lên kế hoạch."
        },
        {
          eng: "We are going to Paris next month.",
          viet: "Tháng tới chúng tôi dự định đến Paris.",
          tokens: [
            { text: "We", label: "Subject (Chủ ngữ số nhiều)", role: "s" },
            { text: "are going to", label: "Auxiliary (Số nhiều → are)", role: "be" },
            { text: "Paris", label: "Destination (Nơi đến – go được bỏ qua)", role: "o" },
            { text: "next month", label: "Time Adverbial", role: "adv" }
          ],
          note: "Chủ ngữ 'We' số nhiều → dùng 'are'. Vì động từ chính là 'go', ta chỉ dùng 'are going to' (không thêm 'go')."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi 1: Dùng sai am/is/are cho chủ ngữ.</strong></p>
        <p>Sai: <em>"She am going to travel."</em></p>
        <p>Đúng: <em>"She <strong>is</strong> going to travel."</em> (She là ngôi thứ ba số ít → is).</p>
        <p>🔴 <strong>Lỗi 2: Thêm "go" dư thừa sau "going to" khi động từ chính là go.</strong></p>
        <p>Sai: <em>"I am going to go to school."</em></p>
        <p>Đúng: <em>"I am going to school."</em></p>
      `,
      tips: `
        <p>💡 <strong>Bảng chia nhanh be going to:</strong></p>
        <ul>
          <li><strong>I</strong> → <strong>am going to</strong> (I'm going to...)</li>
          <li><strong>He / She / It / Tên riêng / Danh từ số ít</strong> → <strong>is going to</strong></li>
          <li><strong>We / You / They / Danh từ số nhiều</strong> → <strong>are going to</strong></li>
        </ul>
        <p>💡 Nếu thấy có bằng chứng hiện tại (dark clouds, someone falling...) → dùng be going to để dự đoán.</p>
      `
    },

    "4-2": {
      chapter: "Chương 1: Tương lai gần (be going to)",
      lessonNum: 2,
      shortTitle: "Bài 2: Phủ định & Nghi vấn",
      title: "Bài 2: Thể phủ định & Nghi vấn (Negative & Questions – be going to)",
      explanation: `
        <p>Để tạo câu phủ định và nghi vấn với thì tương lai gần, ta tác động trực tiếp lên trợ động từ To Be (am/is/are) mà <strong>không cần</strong> mượn do/does/did.</p>
        <p><strong>A. Thể Phủ Định (-):</strong></p>
        <p>Cấu trúc: <code>S + is / am / are + not + going to + V (nguyên mẫu)</code></p>
        <p><em>Lưu ý viết tắt:</em></p>
        <ul>
          <li><code>is not</code> = <strong>isn't</strong></li>
          <li><code>are not</code> = <strong>aren't</strong></li>
          <li><code>am not</code> (không có dạng viết tắt thông thường)</li>
        </ul>
        <p><strong>B. Thể Nghi Vấn (Câu hỏi) (?):</strong></p>
        <p>Cấu trúc: <code>Is / Am / Are + S + going to + V (nguyên mẫu)?</code></p>
        <p>Trả lời:</p>
        <ul>
          <li><strong>Yes</strong>, S + <strong>is/am/are</strong>.</li>
          <li><strong>No</strong>, S + <strong>isn't/aren't / am not</strong>.</li>
        </ul>
      `,
      examples: [
        {
          eng: "I am not going to attend the class tomorrow because I'm very tired.",
          viet: "Tôi sẽ không tham dự lớp học ngày mai vì tôi rất mệt.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "am not going to", label: "Negative Auxiliary (Phủ định)", role: "be" },
            { text: "attend", label: "Main Verb (Nguyên mẫu)", role: "v" },
            { text: "the class tomorrow", label: "Object + Time", role: "o" },
            { text: "because I'm very tired", label: "Reason Clause (Lý do)", role: "adv" }
          ],
          note: "Thêm 'not' sau am/is/are để tạo phủ định. Động từ chính vẫn là nguyên mẫu sau 'going to'."
        },
        {
          eng: "She isn't going to sell her house because she has had enough money now.",
          viet: "Cô ấy không dự định bán nhà vì bây giờ cô ấy đã có đủ tiền rồi.",
          tokens: [
            { text: "She", label: "Subject", role: "s" },
            { text: "isn't going to", label: "Negative Auxiliary (isn't = is not)", role: "be" },
            { text: "sell", label: "Main Verb (Nguyên mẫu)", role: "v" },
            { text: "her house", label: "Object", role: "o" },
            { text: "because she has had enough money now", label: "Reason Clause", role: "adv" }
          ],
          note: "'She' → 'is not' viết tắt thành 'isn't'. Đây là dự định bị hủy bỏ với lý do rõ ràng."
        },
        {
          eng: "Are you going to fly to America this weekend?",
          viet: "Bạn có dự định bay đến nước Mỹ vào cuối tuần này không?",
          tokens: [
            { text: "Are", label: "Auxiliary Verb (Đảo lên đầu câu hỏi)", role: "be" },
            { text: "you", label: "Subject", role: "s" },
            { text: "going to", label: "Future Marker", role: "be" },
            { text: "fly to America", label: "Verb Phrase (Cụm động từ)", role: "v" },
            { text: "this weekend?", label: "Time Adverbial", role: "adv" }
          ],
          note: "Câu hỏi: đảo 'Are' lên trước chủ ngữ. Trả lời: Yes, I am. / No, I am not."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi 1: Mượn trợ động từ "don't/doesn't" để phủ định.</strong></p>
        <p>Sai: <em>"She doesn't going to travel."</em></p>
        <p>Đúng: <em>"She <strong>isn't going to</strong> travel."</em></p>
        <p>🔴 <strong>Lỗi 2: Mượn trợ động từ "Do/Does" để đặt câu hỏi.</strong></p>
        <p>Sai: <em>"Does she going to travel?"</em></p>
        <p>Đúng: <em>"<strong>Is</strong> she going to travel?"</em></p>
      `,
      tips: `
        <p>💡 <strong>Quy tắc nhớ nhanh:</strong> Đối với tương lai gần (be going to), trợ động từ luôn là <strong>To Be</strong>. Tuyệt đối KHÔNG mượn do/does/did.</p>
        <p>💡 Trong câu nghi vấn, chỉ cần hoán đổi vị trí của chủ ngữ và am/is/are: <code>S + am/is/are + going to</code> ➔ <code>Am/Is/Are + S + going to?</code></p>
      `
    },

    "4-3": {
      chapter: "Chương 1: Tương lai gần (be going to)",
      lessonNum: 3,
      shortTitle: "Bài 3: Cách dùng & Dấu hiệu",
      title: "Bài 3: Cách sử dụng & Dấu hiệu nhận biết thì tương lai gần",
      explanation: `
        <p>Thì tương lai gần có <strong>2 cách sử dụng</strong> chính:</p>
        <ol>
          <li><strong>Diễn đạt kế hoạch, dự định (intention / plan):</strong> Hành động đã được lên kế hoạch từ trước.<br>
            Ví dụ: <em>He is going to get married this year.</em> (Anh ấy dự định kết hôn năm nay)</li>
          <li><strong>Diễn đạt dự đoán dựa vào bằng chứng (evidence) ở hiện tại:</strong> Ta nhìn thấy dấu hiệu rõ ràng nên đưa ra dự đoán.<br>
            Ví dụ: <em>Look at those dark clouds! It is going to rain.</em> (Nhìn những đám mây đen kìa! Trời sắp mưa)</li>
        </ol>
        <p><strong>Dấu hiệu nhận biết đặc trưng:</strong></p>
        <ul>
          <li><strong>in + thời gian:</strong> in 2 minutes (trong 2 phút nữa)</li>
          <li><strong>tomorrow:</strong> ngày mai</li>
          <li><strong>next day:</strong> ngày hôm tới</li>
          <li><strong>next week / next month / next year:</strong> tuần tới / tháng tới / năm tới</li>
          <li>Câu có <strong>Look! / Listen!</strong> kèm bằng chứng hiện tại</li>
        </ul>
      `,
      examples: [
        {
          eng: "We are going to take a trip to Da Nang city this weekend.",
          viet: "Cuối tuần này chúng tôi dự định đi du lịch thành phố Đà Nẵng.",
          tokens: [
            { text: "We", label: "Subject", role: "s" },
            { text: "are going to", label: "Auxiliary (Kế hoạch đã lên lịch)", role: "be" },
            { text: "take", label: "Main Verb (Nguyên mẫu)", role: "v" },
            { text: "a trip to Da Nang city", label: "Object + Destination", role: "o" },
            { text: "this weekend", label: "Time Adverbial (Dấu hiệu nhận biết)", role: "adv" }
          ],
          note: "Đây là kế hoạch đã lên lịch cụ thể. 'This weekend' là dấu hiệu thời gian tương lai gần."
        },
        {
          eng: "Look at those dark clouds! It is going to rain.",
          viet: "Nhìn những đám mây đen kìa! Trời sắp mưa.",
          tokens: [
            { text: "Look at those dark clouds!", label: "Evidence Signal (Bằng chứng hiện tại)", role: "adv" },
            { text: "It", label: "Subject (Thời tiết)", role: "s" },
            { text: "is going to", label: "Auxiliary (Dự đoán có bằng chứng)", role: "be" },
            { text: "rain", label: "Main Verb", role: "v" }
          ],
          note: "Có bằng chứng hiện tại (mây đen) → dùng 'be going to' để dự đoán, KHÔNG dùng 'will'."
        },
        {
          eng: "Are you going to cook dinner? I have seen a lot of vegetables on the table.",
          viet: "Bạn có dự định nấu cơm tối không? Tôi thấy nhiều rau trên bàn lắm.",
          tokens: [
            { text: "Are you going to", label: "Question Auxiliary (Câu hỏi dự định)", role: "be" },
            { text: "cook dinner?", label: "Verb + Object", role: "v" },
            { text: "I have seen a lot of vegetables on the table", label: "Evidence (Bằng chứng thấy được)", role: "adv" }
          ],
          note: "Câu hỏi về dự định, đồng thời có bằng chứng là rau trên bàn – đây là dấu hiệu dự đoán dựa vào evidence."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Dùng "will" khi đã có bằng chứng hiện tại rõ ràng.</strong></p>
        <p>Không hay: <em>"Look at those dark clouds! It will rain."</em></p>
        <p>Tốt hơn: <em>"Look at those dark clouds! It <strong>is going to</strong> rain."</em> (Có bằng chứng cụ thể → be going to).</p>
      `,
      tips: `
        <p>💡 <strong>Phân biệt be going to và will:</strong></p>
        <ul>
          <li><strong>be going to</strong> → Kế hoạch đã định sẵn từ trước HOẶC có bằng chứng hiện tại.</li>
          <li><strong>will</strong> → Quyết định ngay lúc nói HOẶC dự đoán không có bằng chứng cụ thể.</li>
        </ul>
        <p>💡 Mẹo: Nếu thấy từ <em>Look!, Listen!, Watch!</em> trong câu → thường dùng <strong>be going to</strong> (vì có bằng chứng trước mắt).</p>
      `
    },

    // CHAPTER 2: FUTURE SIMPLE - will
    "4-4": {
      chapter: "Chương 2: Tương lai đơn (will)",
      lessonNum: 4,
      shortTitle: "Bài 4: Khái niệm & Khẳng định",
      title: "Bài 4: Khái niệm & Cấu trúc khẳng định (Future Simple – will)",
      explanation: `
        <p>Thì <strong>tương lai đơn (Future Simple)</strong> được dùng khi <strong>không có kế hoạch hay quyết định</strong> làm gì trước khi nói. Đây là quyết định <strong>tự phát tại thời điểm nói</strong>.</p>
        <p><strong>A. Cấu Trúc Khẳng Định:</strong></p>
        <p>Cấu trúc: <code>S + will + V (nguyên mẫu)</code></p>
        <p><em>Lưu ý dạng viết tắt:</em></p>
        <ul>
          <li>I will = <strong>I'll</strong></li>
          <li>He will = <strong>He'll</strong></li>
          <li>She will = <strong>She'll</strong></li>
          <li>It will = <strong>It'll</strong></li>
          <li>We will = <strong>We'll</strong></li>
          <li>You will = <strong>You'll</strong></li>
          <li>They will = <strong>They'll</strong></li>
        </ul>
        <p><strong>Quan trọng:</strong> <code>will</code> áp dụng CHUNG cho tất cả các ngôi – không chia theo chủ ngữ như am/is/are.</p>
      `,
      examples: [
        {
          eng: "I will help her take care of her children tomorrow morning.",
          viet: "Tôi sẽ giúp cô ấy trông nom con cái của cô ấy sáng mai.",
          tokens: [
            { text: "I", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "will help", label: "Future Simple (will + V nguyên mẫu)", role: "v" },
            { text: "her", label: "Object (Tân ngữ gián tiếp)", role: "o" },
            { text: "take care of her children", label: "Infinitive Phrase (Cụm động từ bổ ngữ)", role: "o" },
            { text: "tomorrow morning", label: "Time Adverbial", role: "adv" }
          ],
          note: "Will được dùng chung cho mọi ngôi. Động từ sau will luôn ở dạng nguyên mẫu."
        },
        {
          eng: "He'll bring you a cup of tea soon.",
          viet: "Anh ấy sẽ mang cho bạn một tách trà ngay đây.",
          tokens: [
            { text: "He'll", label: "Subject + will (Dạng viết tắt của He will)", role: "s" },
            { text: "bring", label: "Main Verb (Nguyên mẫu sau will)", role: "v" },
            { text: "you a cup of tea", label: "Indirect + Direct Object (Tân ngữ)", role: "o" },
            { text: "soon", label: "Time Adverbial (Dấu hiệu nhận biết)", role: "adv" }
          ],
          note: "'He'll' là dạng rút gọn của 'He will'. Dùng khi quyết định ngay lúc đó, không chuẩn bị trước."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi 1: Chia động từ chính theo ngôi sau will.</strong></p>
        <p>Sai: <em>"She will goes to school."</em></p>
        <p>Đúng: <em>"She will <strong>go</strong> to school."</em> (Sau will luôn là động từ nguyên mẫu).</p>
        <p>🔴 <strong>Lỗi 2: Dùng will cho kế hoạch đã lên lịch từ trước.</strong></p>
        <p>Không tự nhiên: <em>"I will meet her at 3pm tomorrow." (đã hẹn sẵn)</em></p>
        <p>Tự nhiên hơn: <em>"I <strong>am going to</strong> meet her at 3pm tomorrow."</em></p>
      `,
      tips: `
        <p>💡 <strong>Will không bao giờ thay đổi theo chủ ngữ:</strong> I will / He will / She will / They will – tất cả đều như nhau, không có "wills" hay "willing".</p>
        <p>💡 Từ khoá nhận biết <strong>will</strong>: <em>soon, in a minute, I think, perhaps, probably, I hope, I believe...</em></p>
      `
    },

    "4-5": {
      chapter: "Chương 2: Tương lai đơn (will)",
      lessonNum: 5,
      shortTitle: "Bài 5: Phủ định & Nghi vấn",
      title: "Bài 5: Thể phủ định & Nghi vấn (Negative & Questions – will)",
      explanation: `
        <p>Câu phủ định và câu hỏi trong thì tương lai đơn rất đơn giản vì chỉ cần thao tác trên trợ động từ <strong>will</strong>.</p>
        <p><strong>A. Thể Phủ Định (-):</strong></p>
        <p>Cấu trúc: <code>S + will not / won't + V (nguyên mẫu)</code></p>
        <p><em>Lưu ý:</em> <code>will not</code> = <strong>won't</strong> (dạng viết tắt thông dụng)</p>
        <p><strong>B. Thể Nghi Vấn (Câu hỏi) (?):</strong></p>
        <p>Cấu trúc: <code>Will + S + V (nguyên mẫu)?</code></p>
        <p>Trả lời:</p>
        <ul>
          <li><strong>Yes</strong>, S + <strong>will</strong>.</li>
          <li><strong>No</strong>, S + <strong>won't</strong>.</li>
        </ul>
      `,
      examples: [
        {
          eng: "I won't tell her the truth.",
          viet: "Tôi sẽ không nói sự thật cho cô ấy.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "won't", label: "Negative Auxiliary (will not = won't)", role: "be" },
            { text: "tell", label: "Main Verb (Nguyên mẫu)", role: "v" },
            { text: "her the truth", label: "Indirect + Direct Object", role: "o" }
          ],
          note: "'Won't' là dạng rút gọn cực kỳ phổ biến của 'will not'. Áp dụng cho tất cả mọi ngôi."
        },
        {
          eng: "They won't stay at the hotel.",
          viet: "Họ sẽ không ở lại khách sạn.",
          tokens: [
            { text: "They", label: "Subject (Số nhiều)", role: "s" },
            { text: "won't", label: "Negative Auxiliary", role: "be" },
            { text: "stay", label: "Main Verb (Nguyên mẫu)", role: "v" },
            { text: "at the hotel", label: "Place Adverbial", role: "adv" }
          ],
          note: "Will không chia theo ngôi → won't cũng vậy, dùng chung cho mọi chủ ngữ."
        },
        {
          eng: "Will you come here tomorrow?",
          viet: "Bạn có đến đây ngày mai không?",
          tokens: [
            { text: "Will", label: "Auxiliary Verb (Đảo lên đầu câu hỏi)", role: "be" },
            { text: "you", label: "Subject", role: "s" },
            { text: "come here", label: "Verb + Place", role: "v" },
            { text: "tomorrow?", label: "Time Adverbial", role: "adv" }
          ],
          note: "Câu hỏi: đảo 'Will' lên trước chủ ngữ. Trả lời: Yes, I will. / No, I won't."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Thêm "not" vào sai vị trí hoặc nhầm "willn't".</strong></p>
        <p>Sai: <em>"She will not goes."</em> hoặc <em>"She willn't go."</em></p>
        <p>Đúng: <em>"She <strong>won't</strong> go."</em> hoặc <em>"She <strong>will not</strong> go."</em></p>
      `,
      tips: `
        <p>💡 <strong>won't</strong> = will + not → đây là dạng co rút đặc biệt, không có dạng nào khác.</p>
        <p>💡 Trong câu hỏi đuôi (tag questions): dùng <em>will</em> → won't: "You'll help me, <strong>won't you</strong>?"</p>
      `
    },

    "4-6": {
      chapter: "Chương 2: Tương lai đơn (will)",
      lessonNum: 6,
      shortTitle: "Bài 6: Cách dùng & Dấu hiệu",
      title: "Bài 6: Cách sử dụng & Dấu hiệu nhận biết thì tương lai đơn",
      explanation: `
        <p>Thì tương lai đơn có <strong>4 cách sử dụng</strong> chính:</p>
        <ol>
          <li><strong>Quyết định tự phát ngay lúc nói (spontaneous decision):</strong><br>
            Ví dụ: <em>"Are you going to the supermarket now? I will go with you."</em></li>
          <li><strong>Dự đoán không có căn cứ rõ ràng:</strong> Dựa vào suy nghĩ/ý kiến cá nhân.<br>
            Ví dụ: <em>"I think she will come to the party."</em></li>
          <li><strong>Lời hứa, lời yêu cầu, đề nghị:</strong><br>
            Ví dụ: <em>"I promise that I will tell you the truth."</em></li>
          <li><strong>Câu điều kiện loại 1:</strong> Giả định có thể xảy ra ở hiện tại và tương lai.<br>
            Ví dụ: <em>"If she comes, I will go with her."</em></li>
        </ol>
        <p><strong>Dấu hiệu nhận biết đặc trưng:</strong></p>
        <ul>
          <li><strong>In + thời gian:</strong> in 5 minutes (trong 5 phút nữa)</li>
          <li><strong>Tomorrow / next day / next week / next month / next year</strong></li>
          <li><strong>Động từ quan điểm:</strong> think, believe, suppose, hope, expect</li>
          <li><strong>Perhaps / Probably / Maybe</strong> (có lẽ, chắc là)</li>
        </ul>
      `,
      examples: [
        {
          eng: "I think she will come to the party.",
          viet: "Tôi nghĩ cô ấy sẽ đến bữa tiệc.",
          tokens: [
            { text: "I think", label: "Opinion Verb (Động từ quan điểm → will)", role: "s" },
            { text: "she", label: "Subject of subordinate clause", role: "s" },
            { text: "will come", label: "Future Simple (Dự đoán không căn cứ)", role: "v" },
            { text: "to the party", label: "Place Adverbial", role: "adv" }
          ],
          note: "'I think' là động từ quan điểm → dùng 'will', không có bằng chứng hiện tại cụ thể."
        },
        {
          eng: "I promise that I will tell you the truth.",
          viet: "Tôi hứa rằng tôi sẽ nói cho bạn biết sự thật.",
          tokens: [
            { text: "I promise that", label: "Promise Clause (Lời hứa)", role: "s" },
            { text: "I", label: "Subject", role: "s" },
            { text: "will tell", label: "Future Simple (Lời hứa → will)", role: "v" },
            { text: "you the truth", label: "Indirect + Direct Object", role: "o" }
          ],
          note: "Lời hứa → dùng will. Đây là quyết định cam kết tại thời điểm nói."
        },
        {
          eng: "If it stops raining soon, we will go to the cinema.",
          viet: "Nếu trời ngừng mưa sớm, chúng tôi sẽ đi rạp chiếu phim.",
          tokens: [
            { text: "If it stops raining soon,", label: "If-clause (Mệnh đề điều kiện loại 1 – HTĐ)", role: "adv" },
            { text: "we", label: "Subject (Mệnh đề chính)", role: "s" },
            { text: "will go", label: "Future Simple (Kết quả điều kiện loại 1)", role: "v" },
            { text: "to the cinema", label: "Place Adverbial", role: "adv" }
          ],
          note: "Câu điều kiện loại 1: If + HTĐ, will + V. Mệnh đề If không dùng will, chỉ mệnh đề kết quả mới dùng will."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Dùng "will" trong mệnh đề If của câu điều kiện loại 1.</strong></p>
        <p>Sai: <em>"If she <strong>will come</strong>, I will go with her."</em></p>
        <p>Đúng: <em>"If she <strong>comes</strong>, I will go with her."</em> (Mệnh đề If → HTĐ, không dùng will).</p>
      `,
      tips: `
        <p>💡 <strong>Phân biệt 4 tình huống dùng will:</strong></p>
        <ul>
          <li>Quyết định ngay lúc nói → <strong>will</strong></li>
          <li>Dự đoán + think/hope/believe → <strong>will</strong></li>
          <li>Lời hứa/yêu cầu/đề nghị → <strong>will</strong></li>
          <li>Câu điều kiện loại 1 (mệnh đề chính) → <strong>will</strong></li>
        </ul>
        <p>💡 <strong>Câu thần chú:</strong> Mệnh đề If dùng HTĐ, mệnh đề kết quả dùng <em>will</em>.</p>
      `
    },

    // CHAPTER 3: COMPARISON & COMMON ERRORS
    "4-7": {
      chapter: "Chương 3: So sánh & Tổng hợp",
      lessonNum: 7,
      shortTitle: "Bài 7: Phân biệt be going to & will",
      title: "Bài 7: Phân biệt chi tiết be going to và will",
      explanation: `
        <p>Đây là điểm ngữ pháp thường gây nhầm lẫn nhất. Hãy đặt hai thì lên bàn cân:</p>
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Tiêu chí</th>
              <th>be going to</th>
              <th>will</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Cấu trúc</strong></td>
              <td><code>S + am/is/are + going to + V</code></td>
              <td><code>S + will + V</code></td>
            </tr>
            <tr>
              <td><strong>Kế hoạch từ trước</strong></td>
              <td>✅ Có kế hoạch đã lên lịch</td>
              <td>❌ Không dùng</td>
            </tr>
            <tr>
              <td><strong>Quyết định tự phát</strong></td>
              <td>❌ Không dùng</td>
              <td>✅ Quyết định ngay lúc nói</td>
            </tr>
            <tr>
              <td><strong>Dự đoán có bằng chứng</strong></td>
              <td>✅ Dùng (thấy, nghe, có dấu hiệu)</td>
              <td>❌ Ít dùng</td>
            </tr>
            <tr>
              <td><strong>Dự đoán không bằng chứng</strong></td>
              <td>❌ Ít dùng</td>
              <td>✅ Dùng (think, believe, hope)</td>
            </tr>
            <tr>
              <td><strong>Lời hứa / Đề nghị</strong></td>
              <td>❌ Không dùng</td>
              <td>✅ Dùng</td>
            </tr>
          </tbody>
        </table>
        <br>
        <p><strong>🚨 Ví dụ phân tích kinh điển:</strong></p>
        <ul>
          <li><strong>A: "The phone is ringing!" B: "I'll answer it!"</strong> → Quyết định tự phát → will.</li>
          <li><strong>"I'm going to call her tonight. I already have her number ready."</strong> → Kế hoạch từ trước → going to.</li>
          <li><strong>"Look at him! He's going to fall!"</strong> → Dự đoán có bằng chứng (nhìn thấy) → going to.</li>
          <li><strong>"I think it will be sunny tomorrow."</strong> → Dự đoán không bằng chứng → will.</li>
        </ul>
      `,
      examples: [
        {
          eng: "A: The phone is ringing! B: I'll answer it!",
          viet: "A: Điện thoại đang reo! B: Tôi sẽ nghe máy!",
          tokens: [
            { text: "I'll", label: "Subject + will (Quyết định tự phát)", role: "s" },
            { text: "answer", label: "Main Verb (Nguyên mẫu)", role: "v" },
            { text: "it!", label: "Object", role: "o" }
          ],
          note: "B không có kế hoạch trả lời điện thoại từ trước → quyết định tự phát tại thời điểm nói → will."
        },
        {
          eng: "Look at him! He is going to fall!",
          viet: "Nhìn anh ta kìa! Anh ta sắp ngã rồi!",
          tokens: [
            { text: "Look at him!", label: "Evidence Signal (Bằng chứng nhìn thấy)", role: "adv" },
            { text: "He", label: "Subject", role: "s" },
            { text: "is going to", label: "Auxiliary (Dự đoán có bằng chứng)", role: "be" },
            { text: "fall!", label: "Main Verb (Nguyên mẫu)", role: "v" }
          ],
          note: "Người nói đang nhìn thấy (bằng chứng hiện tại) → dùng 'be going to' để dự đoán."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi phổ biến nhất: Dùng "will" khi đã thấy bằng chứng trước mắt.</strong></p>
        <p>Sai: <em>"Look! The glass will fall!"</em> (khi thấy cốc đang nghiêng)</p>
        <p>Đúng: <em>"Look! The glass <strong>is going to</strong> fall!"</em></p>
        <p>🔴 <strong>Lỗi: Dùng "be going to" cho quyết định tự phát.</strong></p>
        <p>Sai: <em>"A: I'm hungry. B: I'm going to make you a sandwich!"</em></p>
        <p>Đúng: <em>"A: I'm hungry. B: I<strong>'ll</strong> make you a sandwich!"</em></p>
      `,
      tips: `
        <p>💡 <strong>Quy tắc phân biệt nhanh:</strong></p>
        <ul>
          <li>Đã biết trước (kế hoạch / thấy bằng chứng) → <strong>be going to</strong></li>
          <li>Không biết trước (quyết định ngay / không có bằng chứng) → <strong>will</strong></li>
        </ul>
        <p>💡 <strong>Câu thần chú:</strong> "Mắt thấy tai nghe → going to. Đầu nghĩ miệng nói ngay → will."</p>
      `
    },

    "4-8": {
      chapter: "Chương 3: So sánh & Tổng hợp",
      lessonNum: 8,
      shortTitle: "Bài 8: Câu điều kiện loại 1",
      title: "Bài 8: Câu điều kiện loại 1 & Cách dùng will trong câu phức",
      explanation: `
        <p>Câu điều kiện loại 1 (Conditional Type 1) diễn tả giả định <strong>có thể xảy ra</strong> ở hiện tại hoặc tương lai, với kết quả cũng ở tương lai.</p>
        <p><strong>Cấu trúc:</strong></p>
        <p><code>If + S + V (Hiện tại đơn), S + will + V (nguyên mẫu)</code></p>
        <p>Hoặc đổi vị trí hai mệnh đề:</p>
        <p><code>S + will + V (nguyên mẫu) + if + S + V (Hiện tại đơn)</code></p>
        <p><strong>Lưu ý quan trọng:</strong></p>
        <ul>
          <li>Mệnh đề <strong>If</strong> (điều kiện): dùng <strong>Hiện tại đơn</strong>, KHÔNG dùng will.</li>
          <li>Mệnh đề <strong>chính</strong> (kết quả): dùng <strong>will + V nguyên mẫu</strong>.</li>
        </ul>
        <p><strong>Cách dùng will trong các cấu trúc khác:</strong></p>
        <ul>
          <li><strong>Will + you + V?</strong> = Lời yêu cầu lịch sự. Ví dụ: <em>Will you please bring me a cup of coffee?</em></li>
          <li><strong>Won't + V</strong> = Lời từ chối. Ví dụ: <em>I won't accept your offer.</em></li>
        </ul>
      `,
      examples: [
        {
          eng: "If she comes, I will go with her.",
          viet: "Nếu cô ấy đến, tôi sẽ đi cùng với cô ấy.",
          tokens: [
            { text: "If she comes,", label: "If-clause (Mệnh đề If – Hiện tại đơn)", role: "adv" },
            { text: "I", label: "Subject (Mệnh đề chính)", role: "s" },
            { text: "will go", label: "Future Simple (will + V – Kết quả)", role: "v" },
            { text: "with her", label: "Prepositional Phrase", role: "o" }
          ],
          note: "Mệnh đề If dùng HTĐ (comes), mệnh đề kết quả dùng will (will go). Đây là điều kiện có thể xảy ra."
        },
        {
          eng: "If it stops raining soon, we will go to the cinema.",
          viet: "Nếu trời ngừng mưa sớm, chúng tôi sẽ đi rạp chiếu phim.",
          tokens: [
            { text: "If it stops raining soon,", label: "If-clause (HTĐ – điều kiện)", role: "adv" },
            { text: "we", label: "Subject", role: "s" },
            { text: "will go", label: "Future Simple (will + V)", role: "v" },
            { text: "to the cinema", label: "Destination", role: "adv" }
          ],
          note: "Cả hai điều kiện có thể thực sự xảy ra trong tương lai. Đây là loại điều kiện thực (Real Conditional)."
        },
        {
          eng: "Will you please bring me a cup of coffee?",
          viet: "Bạn có thể mang cho tôi một tách cà phê không?",
          tokens: [
            { text: "Will", label: "Modal Verb (Lời yêu cầu lịch sự)", role: "be" },
            { text: "you", label: "Subject", role: "s" },
            { text: "please bring", label: "Verb (please = từ lịch sự)", role: "v" },
            { text: "me a cup of coffee?", label: "Indirect + Direct Object", role: "o" }
          ],
          note: "'Will you...?' dùng để yêu cầu lịch sự, tương đương với 'Could you...?'."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi kinh điển: Dùng will trong mệnh đề If.</strong></p>
        <p>Sai: <em>"If she <strong>will come</strong>, I will go."</em></p>
        <p>Đúng: <em>"If she <strong>comes</strong>, I will go."</em></p>
      `,
      tips: `
        <p>💡 <strong>Câu thần chú điều kiện loại 1:</strong></p>
        <p><em>"If + HTĐ, will + V"</em> hoặc <em>"will + V + if + HTĐ"</em></p>
        <p>💡 Chỉ cần nhớ: Mệnh đề If không bao giờ có will trong câu điều kiện loại 1.</p>
      `
    },

    "4-9": {
      chapter: "Chương 3: So sánh & Tổng hợp",
      lessonNum: 9,
      shortTitle: "Bài 9: Tổng hợp & Lỗi thường gặp",
      title: "Bài 9: Tổng hợp Unit 4 & Các lỗi sai thường gặp",
      explanation: `
        <p>Hãy ôn lại toàn bộ Unit 4 qua bảng so sánh tổng hợp:</p>
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Tiêu chí</th>
              <th>be going to (Tương lai gần)</th>
              <th>will (Tương lai đơn)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Cấu trúc</strong></td>
              <td><code>S + am/is/are + going to + V</code></td>
              <td><code>S + will + V</code></td>
            </tr>
            <tr>
              <td><strong>Phủ định</strong></td>
              <td><code>S + am/is/are + not + going to + V</code></td>
              <td><code>S + won't + V</code></td>
            </tr>
            <tr>
              <td><strong>Nghi vấn</strong></td>
              <td><code>Am/Is/Are + S + going to + V?</code></td>
              <td><code>Will + S + V?</code></td>
            </tr>
            <tr>
              <td><strong>Kế hoạch từ trước</strong></td>
              <td>✅</td>
              <td>❌</td>
            </tr>
            <tr>
              <td><strong>Quyết định tự phát</strong></td>
              <td>❌</td>
              <td>✅</td>
            </tr>
            <tr>
              <td><strong>Dự đoán có bằng chứng</strong></td>
              <td>✅</td>
              <td>❌</td>
            </tr>
            <tr>
              <td><strong>Dự đoán không bằng chứng</strong></td>
              <td>❌</td>
              <td>✅</td>
            </tr>
          </tbody>
        </table>
        <br>
        <p><strong>🚨 Top lỗi thường gặp của học sinh:</strong></p>
        <ol>
          <li>Quên chia am/is/are đúng theo chủ ngữ trong "be going to".</li>
          <li>Thêm "go" dư sau "going to" khi động từ chính là go.</li>
          <li>Chia động từ chính sau will theo ngôi (thêm -s/-es).</li>
          <li>Dùng will trong mệnh đề If của câu điều kiện loại 1.</li>
          <li>Nhầm lẫn giữa dự đoán có bằng chứng (going to) và dự đoán không bằng chứng (will).</li>
        </ol>
      `,
      examples: [
        {
          eng: "She is going to study abroad next year. (kế hoạch từ trước)",
          viet: "Năm tới cô ấy dự định đi du học nước ngoài.",
          tokens: [
            { text: "She", label: "Subject (Số ít → is)", role: "s" },
            { text: "is going to", label: "be going to (Kế hoạch đã quyết định)", role: "be" },
            { text: "study abroad", label: "Verb Phrase (Nguyên mẫu)", role: "v" },
            { text: "next year", label: "Time Adverbial (Dấu hiệu nhận biết)", role: "adv" }
          ],
          note: "Đây là kế hoạch cô ấy đã lên từ trước → be going to. Nếu là quyết định ngay lúc đó → will."
        },
        {
          eng: "I'll help you with your homework right now. (quyết định tự phát)",
          viet: "Tôi sẽ giúp bạn làm bài tập ngay bây giờ.",
          tokens: [
            { text: "I'll", label: "Subject + will (Quyết định vừa nảy ra)", role: "s" },
            { text: "help", label: "Main Verb (Nguyên mẫu sau will)", role: "v" },
            { text: "you with your homework", label: "Object + Prepositional Phrase", role: "o" },
            { text: "right now", label: "Time Adverbial", role: "adv" }
          ],
          note: "Người nói vừa nghe thấy bạn cần giúp đỡ và quyết định ngay lúc đó → will."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Tổng hợp 5 lỗi cần tránh:</strong></p>
        <ul>
          <li>Sai: <em>"He am going to..."</em> → Đúng: <em>"He <strong>is</strong> going to..."</em></li>
          <li>Sai: <em>"I am going to go to school."</em> (động từ go) → Đúng: <em>"I am going to school."</em></li>
          <li>Sai: <em>"She wills help."</em> → Đúng: <em>"She <strong>will</strong> help."</em></li>
          <li>Sai: <em>"If she will come..."</em> → Đúng: <em>"If she <strong>comes</strong>..."</em></li>
          <li>Sai: dùng will khi thấy bằng chứng → Đúng: dùng <strong>be going to</strong></li>
        </ul>
      `,
      tips: `
        <p>💡 <strong>3 câu hỏi để chọn thì tương lai đúng:</strong></p>
        <ol>
          <li>Có kế hoạch từ trước chưa? → <strong>be going to</strong></li>
          <li>Đang thấy/nghe bằng chứng không? → <strong>be going to</strong></li>
          <li>Quyết định ngay lúc này / dự đoán / hứa hẹn? → <strong>will</strong></li>
        </ol>
      `
    }
  };

  // ------------------------------------------------------------------
  // DATA POOLS for question generation
  // ------------------------------------------------------------------
  const SUBJECTS_POOL = {
    singular: [
      { text: "I", be: "am", beNeg: "am not", beIs: "am", beIsNeg: "am not" },
      { text: "He", be: "is", beNeg: "isn't", beIs: "is", beIsNeg: "isn't" },
      { text: "She", be: "is", beNeg: "isn't", beIs: "is", beIsNeg: "isn't" },
      { text: "It", be: "is", beNeg: "isn't", beIs: "is", beIsNeg: "isn't" },
      { text: "Peter", be: "is", beNeg: "isn't", beIs: "is", beIsNeg: "isn't" },
      { text: "Mary", be: "is", beNeg: "isn't", beIs: "is", beIsNeg: "isn't" },
      { text: "Lan", be: "is", beNeg: "isn't", beIs: "is", beIsNeg: "isn't" },
      { text: "The student", be: "is", beNeg: "isn't", beIs: "is", beIsNeg: "isn't" }
    ],
    plural: [
      { text: "You", be: "are", beNeg: "aren't", beIs: "are", beIsNeg: "aren't" },
      { text: "We", be: "are", beNeg: "aren't", beIs: "are", beIsNeg: "aren't" },
      { text: "They", be: "are", beNeg: "aren't", beIs: "are", beIsNeg: "aren't" },
      { text: "My parents", be: "are", beNeg: "aren't", beIs: "are", beIsNeg: "aren't" },
      { text: "The teachers", be: "are", beNeg: "aren't", beIs: "are", beIsNeg: "aren't" }
    ]
  };

  const VERBS_FUTURE = [
    { base: "travel", ing: "travelling", obj: "to Japan", viet: "du lịch Nhật Bản" },
    { base: "study", ing: "studying", obj: "English", viet: "học tiếng Anh" },
    { base: "visit", ing: "visiting", obj: "their grandparents", viet: "thăm ông bà" },
    { base: "buy", ing: "buying", obj: "a new phone", viet: "mua điện thoại mới" },
    { base: "cook", ing: "cooking", obj: "dinner", viet: "nấu cơm tối" },
    { base: "clean", ing: "cleaning", obj: "the house", viet: "dọn dẹp nhà" },
    { base: "meet", ing: "meeting", obj: "their friends", viet: "gặp bạn bè" },
    { base: "watch", ing: "watching", obj: "a movie", viet: "xem phim" },
    { base: "play", ing: "playing", obj: "football", viet: "chơi bóng đá" },
    { base: "help", ing: "helping", obj: "their parents", viet: "giúp đỡ cha mẹ" }
  ];

  // Expose lessons and pools
  window.UNITS_REGISTRY["unit4"] = {
    unitId: "unit4",
    title: "Unit 4: Near Future & Future Simple",
    lessons: LESSONS_DATA,
    pools: { SUBJECTS_POOL, VERBS_FUTURE },
    rules: {
      "am/is/are + going to": "Cấu trúc thì tương lai gần",
      "be going to – plan": "Dùng be going to cho kế hoạch từ trước",
      "be going to – evidence": "Dùng be going to cho dự đoán có bằng chứng",
      "will": "Trợ động từ thì tương lai đơn",
      "will – spontaneous": "Dùng will cho quyết định tự phát",
      "will – prediction": "Dùng will cho dự đoán không có bằng chứng",
      "will – promise": "Dùng will cho lời hứa/yêu cầu",
      "if + present simple": "Câu điều kiện loại 1"
    }
  };
})();
