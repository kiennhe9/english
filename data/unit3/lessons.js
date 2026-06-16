(function () {
  if (!window.UNITS_REGISTRY) window.UNITS_REGISTRY = {};

  // ------------------------------------------------------------------
  // LESSONS DATA
  // ------------------------------------------------------------------
  const LESSONS_DATA = {
    // CHAPTER 1: PAST CONTINUOUS
    "3-1": {
      chapter: "Chương 1: Quá khứ tiếp diễn",
      lessonNum: 1,
      shortTitle: "Bài 1: Khái niệm & Khẳng định",
      title: "Bài 1: Khái niệm & Cấu trúc khẳng định (Past Continuous)",
      explanation: `
        <p>Thì <strong>Quá khứ tiếp diễn (Past Continuous / Past Progressive)</strong> dùng để diễn tả một hành động đang diễn ra tại một thời điểm xác định hoặc xung quanh một thời điểm cụ thể trong quá khứ.</p>
        <p>Thì này tập trung vào tính chất <em>kéo dài, đang tiếp diễn</em> của sự việc trong quá khứ, chứ không chỉ đơn thuần là kể lại sự việc đã kết thúc (như thì Quá khứ đơn).</p>
        <p><strong>A. Cấu Trúc Khẳng Định:</strong></p>
        <p>Cấu trúc: <code>S + was / were + V-ing</code></p>
        <p>Trong đó, việc lựa chọn động từ To Be <strong>was</strong> hay <strong>were</strong> được chia theo chủ ngữ (S):</p>
        <ul>
          <li><code>S = I / He / She / It / Tên riêng / Danh từ số ít</code> + <strong>was</strong></li>
          <li><code>S = We / You / They / Danh từ số nhiều</code> + <strong>were</strong></li>
        </ul>
      `,
      examples: [
        {
          eng: "I was reading a book at 8 p.m yesterday.",
          viet: "Tôi đang đọc một cuốn sách vào lúc 8 giờ tối ngày hôm qua.",
          tokens: [
            { text: "I", label: "Subject (Chủ ngữ ngôi thứ nhất số ít)", role: "s" },
            { text: "was", label: "To Be (Quá khứ số ít của I)", role: "be" },
            { text: "reading", label: "Verb-ing (Động từ chính dạng V-ing)", role: "v" },
            { text: "a book", label: "Object (Tân ngữ)", role: "o" },
            { text: "at 8 p.m yesterday", label: "Time Adverbial (Mốc thời gian xác định)", role: "adv" }
          ],
          note: "Chủ ngữ là 'I' đi với 'was'. Hành động đọc sách đang diễn ra đúng vào thời điểm 8 giờ tối hôm qua."
        },
        {
          eng: "They were playing soccer at that time.",
          viet: "Họ đang chơi bóng đá vào thời điểm đó.",
          tokens: [
            { text: "They", label: "Subject (Chủ ngữ số nhiều)", role: "s" },
            { text: "were", label: "To Be (Quá khứ số nhiều)", role: "be" },
            { text: "playing", label: "Verb-ing", role: "v" },
            { text: "soccer", label: "Object (Tân ngữ)", role: "o" },
            { text: "at that time", label: "Time Adverbial (Vào thời điểm đó)", role: "adv" }
          ],
          note: "Chủ ngữ 'They' (số nhiều) đi với 'were'. Hành động chơi bóng đang trong quá trình xảy ra vào thời điểm được nhắc tới."
        },
        {
          eng: "The student was studying French last night.",
          viet: "Học sinh đó đang học tiếng Pháp tối qua.",
          tokens: [
            { text: "The student", label: "Subject (Danh từ số ít)", role: "s" },
            { text: "was", label: "To Be (Số ít)", role: "be" },
            { text: "studying", label: "Verb-ing (study + ing)", role: "v" },
            { text: "French", label: "Object", role: "o" },
            { text: "last night", label: "Time Adverbial", role: "adv" }
          ],
          note: "Danh từ số ít 'The student' đi với 'was'. Việc học tiếng Pháp đang diễn ra kéo dài trong buổi tối hôm qua."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi 1: Quên động từ To Be (was/were) trước V-ing.</strong></p>
        <p>Sai: <em>"I reading a book yesterday at 8 p.m."</em></p>
        <p>Đúng: <em>"I <strong>was</strong> reading a book yesterday at 8 p.m."</em> (Động từ tiếp diễn luôn yêu cầu đủ cả To Be và V-ing).</p>
        <p>🔴 <strong>Lỗi 2: Chọn sai dạng was/were cho chủ ngữ 'I'.</strong></p>
        <p>Sai: <em>"I were reading a book."</em></p>
        <p>Đúng: <em>"I <strong>was</strong> reading a book."</em> (Trong thì quá khứ tiếp diễn, chủ ngữ 'I' đi với 'was', khác với câu điều kiện giả định).</p>
      `,
      tips: `
        <p>💡 <strong>Bảng chia nhanh was/were:</strong></p>
        <ul>
          <li><strong>I, He, She, It, Danh từ số ít (Peter, a cat)</strong> ➔ <strong>was</strong>.</li>
          <li><strong>You, We, They, Danh từ số nhiều (students, cats)</strong> ➔ <strong>were</strong>.</li>
        </ul>
        <p>💡 Luôn nhớ công thức khẳng định: <strong>was/were + V-ing</strong>. Hãy kiểm tra xem câu của bạn đã có đủ 2 thành phần này chưa.</p>
      `
    },

    "3-2": {
      chapter: "Chương 1: Quá khứ tiếp diễn",
      lessonNum: 2,
      shortTitle: "Bài 2: Phủ định & Nghi vấn",
      title: "Bài 2: Thể phủ định & Nghi vấn (Negative & Questions)",
      explanation: `
        <p>Để tạo câu phủ định và nghi vấn cho thì Quá khứ tiếp diễn, chúng ta trực tiếp tác động lên trợ động từ To Be <strong>was/were</strong> mà không cần mượn trợ động từ did/didn't.</p>
        <p><strong>A. Thể Phủ Định (-):</strong></p>
        <p>Cấu trúc: <code>S + was / were + not + V-ing</code></p>
        <p><em>Lưu ý viết tắt:</em></p>
        <ul>
          <li><code>was not</code> = <strong>wasn't</strong></li>
          <li><code>were not</code> = <strong>weren't</strong></li>
        </ul>
        <p><strong>B. Thể Nghi Vấn (Câu hỏi) (?):</strong></p>
        <p>Cấu trúc: <code>Was / Were + S + V-ing?</code></p>
        <p>Trả lời:</p>
        <ul>
          <li><strong>Yes</strong>, S + <strong>was/were</strong>.</li>
          <li><strong>No</strong>, S + <strong>wasn't/weren't</strong>.</li>
        </ul>
      `,
      examples: [
        {
          eng: "She wasn't working when her boss arrived.",
          viet: "Cô ấy đang không làm việc khi sếp của cô ấy đến.",
          tokens: [
            { text: "She", label: "Subject (Ngôi thứ ba số ít)", role: "s" },
            { text: "wasn't", label: "To Be + Not (Phủ định, viết tắt)", role: "be" },
            { text: "working", label: "Verb-ing", role: "v" },
            { text: "when her boss arrived", label: "Time Clause (Mệnh đề chỉ thời điểm xen vào)", role: "adv" }
          ],
          note: "Chủ ngữ 'She' đi với phủ định 'wasn't'. Hành động làm việc không diễn ra tại thời điểm sếp đến."
        },
        {
          eng: "We weren't watching TV at 9 p.m yesterday.",
          viet: "Chúng tôi đang không xem TV vào lúc 9 giờ tối hôm qua.",
          tokens: [
            { text: "We", label: "Subject (Chủ ngữ số nhiều)", role: "s" },
            { text: "weren't", label: "To Be + Not (Phủ định)", role: "be" },
            { text: "watching", label: "Verb-ing", role: "v" },
            { text: "TV", label: "Object", role: "o" },
            { text: "at 9 p.m yesterday", label: "Time Adverbial", role: "adv" }
          ],
          note: "Chủ ngữ 'We' đi với 'weren't'. Vào đúng mốc 9h tối qua, chúng tôi đang làm việc khác hoặc không xem TV."
        },
        {
          eng: "Were you sleeping when I called you?",
          viet: "Bạn có đang ngủ khi tôi gọi điện cho bạn không?",
          tokens: [
            { text: "Were", label: "To Be (Đảo lên trước chủ ngữ)", role: "be" },
            { text: "you", label: "Subject", role: "s" },
            { text: "sleeping", label: "Verb-ing", role: "v" },
            { text: "when I called you", label: "Time Clause", role: "adv" }
          ],
          note: "Đảo trợ động từ To Be 'Were' lên đầu câu hỏi trước chủ ngữ 'you'. Trả lời ngắn: Yes, I was. / No, I wasn't."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi 1: Mượn trợ động từ 'didn't' trong câu phủ định.</strong></p>
        <p>Sai: <em>"I didn't watching TV last night."</em> hoặc <em>"She didn't was working."</em></p>
        <p>Đúng: <em>"I <strong>wasn't</strong> watching TV last night."</em> (Động từ To Be đã tự làm trợ động từ, ta chỉ cần thêm not sau was/were).</p>
        <p>🔴 <strong>Lỗi 2: Mượn trợ động từ 'Did' trong câu hỏi.</strong></p>
        <p>Sai: <em>"Did you sleeping when I called?"</em></p>
        <p>Đúng: <em>"<strong>Were</strong> you sleeping when I called?"</em></p>
      `,
      tips: `
        <p>💡 <strong>Quy tắc nhớ nhanh:</strong> Đối với các thì tiếp diễn, trợ động từ luôn là <strong>To Be</strong> (am/is/are ở hiện tại, was/were ở quá khứ). Tuyệt đối KHÔNG mượn do/does/did.</p>
        <p>💡 Trong câu nghi vấn, chỉ cần hoán đổi vị trí của chủ ngữ và was/were: <code>S + was/were + V-ing</code> ➔ <code>Was/Were + S + V-ing?</code>.</p>
      `
    },

    "3-3": {
      chapter: "Chương 1: Quá khứ tiếp diễn",
      lessonNum: 3,
      shortTitle: "Bài 3: Cách dùng & Dấu hiệu",
      title: "Bài 3: Cách sử dụng & Dấu hiệu nhận biết thì Quá khứ tiếp diễn",
      explanation: `
        <p>Thì Quá khứ tiếp diễn có 3 cách sử dụng chính mà bạn cần nắm vững:</p>
        <ol>
          <li><strong>Hành động đang diễn ra tại một thời điểm cụ thể trong quá khứ:</strong> Thời điểm này có thể được chỉ ra bằng giờ giấc cụ thể hoặc trạng từ chỉ thời gian xác định.<br>
            Ví dụ: <em>At 10 o'clock last night, I was sleeping.</em></li>
          <li><strong>Hai hoặc nhiều hành động xảy ra đồng thời trong quá khứ:</strong> Diễn tả các hành động đang diễn ra cùng một lúc, thường được nối với nhau bởi liên từ <strong>while</strong>.<br>
            Ví dụ: <em>While I was studying, my brother was playing games.</em></li>
          <li><strong>Hành động lặp đi lặp lại gây phiền toái trong quá khứ:</strong> Diễn tả một thói quen xấu hoặc hành động thường xuyên lặp lại trong quá khứ làm người khác khó chịu, sử dụng kèm trạng từ <strong>always</strong>.<br>
            Ví dụ: <em>When he lived here, he was always making noise!</em></li>
        </ol>
        <p><strong>Dấu hiệu nhận biết đặc trưng:</strong></p>
        <ul>
          <li><strong>At + giờ cụ thể + thời gian quá khứ</strong> (at 9 p.m yesterday, at 10 o'clock last night).</li>
          <li><strong>At this time + thời gian quá khứ</strong> (at this time last week, at this time yesterday).</li>
          <li>Trong câu xuất hiện liên từ <strong>While</strong> (trong khi) hoặc <strong>When</strong> (khi).</li>
        </ul>
      `,
      examples: [
        {
          eng: "At 10 p.m last night, I was sleeping.",
          viet: "Vào lúc 10 giờ tối đêm qua, tôi đang ngủ.",
          tokens: [
            { text: "At 10 p.m last night,", label: "Time Adverbial (Thời điểm cụ thể trong quá khứ)", role: "adv" },
            { text: "I", label: "Subject", role: "s" },
            { text: "was", label: "To Be", role: "be" },
            { text: "sleeping", label: "Verb-ing", role: "v" }
          ],
          note: "Thời điểm cụ thể 'At 10 p.m last night' bắt buộc động từ chia Quá khứ tiếp diễn."
        },
        {
          eng: "While my mother was cooking, my father was reading the newspaper.",
          viet: "Trong khi mẹ tôi đang nấu ăn thì bố tôi đang đọc báo.",
          tokens: [
            { text: "While", label: "Conjunction (Liên từ chỉ thời gian đồng thời)", role: "adv" },
            { text: "my mother was cooking,", label: "Past Continuous Clause 1 (Hành động 1 đang diễn ra)", role: "adv" },
            { text: "my father", label: "Subject 2", role: "s" },
            { text: "was", label: "To Be", role: "be" },
            { text: "reading", label: "Verb-ing", role: "v" },
            { text: "the newspaper", label: "Object 2 (Danh từ làm tân ngữ)", role: "o" }
          ],
          note: "Hai hành động nấu ăn và đọc tin diễn ra song song cùng một lúc trong quá khứ, nối bởi 'While'."
        },
        {
          eng: "He was always making noise when he lived here.",
          viet: "Anh ta luôn làm ồn khi anh ta còn sống ở đây.",
          tokens: [
            { text: "He", label: "Subject", role: "s" },
            { text: "was", label: "To Be", role: "be" },
            { text: "always", label: "Adverb of Frequency (Trạng từ chỉ sự phàn nàn)", role: "adv" },
            { text: "making", label: "Verb-ing (make + ing)", role: "v" },
            { text: "noise", label: "Object", role: "o" },
            { text: "when he lived here", label: "Past Context (Bối cảnh trong quá khứ)", role: "adv" }
          ],
          note: "Kết hợp 'was + always + V-ing' dùng để phàn nàn về một thói quen xấu đã xảy ra trong quá khứ."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Dùng thì Quá khứ đơn thay vì Quá khứ tiếp diễn cho mốc thời gian cụ thể.</strong></p>
        <p>Sai: <em>"At 9 p.m yesterday I watched a movie."</em></p>
        <p>Đúng: <em>"At 9 p.m yesterday I <strong>was watching</strong> a movie."</em> (Mốc thời gian 9 giờ tối hôm qua nhấn mạnh quá trình đang xem phim).</p>
      `,
      tips: `
        <p>💡 <strong>Công thức chốt dấu hiệu:</strong></p>
        <ul>
          <li>Có <strong>giờ giấc cụ thể</strong> trong quá khứ ➔ Chia <strong>Quá khứ tiếp diễn</strong>.</li>
          <li>Có liên từ <strong>While</strong> ➔ Hầu như luôn chia <strong>Quá khứ tiếp diễn</strong> ở cả hai vế (nếu hai hành động song song).</li>
          <li>Có phàn nàn <strong>always</strong> trong bối cảnh quá khứ ➔ Chia <strong>was/were + always + V-ing</strong>.</li>
        </ul>
      `
    },

    "3-4": {
      chapter: "Chương 1: Quá khứ tiếp diễn",
      lessonNum: 4,
      shortTitle: "Bài 4: Liên từ When & While",
      title: "Bài 4: Phân biệt và Cách sử dụng Liên từ When và While",
      explanation: `
        <p>Hai liên từ <strong>When</strong> và <strong>While</strong> thường xuyên được sử dụng trong các câu có sự kết hợp thì giữa Quá khứ tiếp diễn và Quá khứ đơn. Tuy nhiên, cách sử dụng chúng có điểm khác biệt cốt lõi:</p>
        <ul>
          <li><strong>WHILE (Trong khi):</strong> Thường đi kèm với mệnh đề chia ở thì <strong>Quá khứ tiếp diễn</strong> để diễn tả một hành động kéo dài (background action).<br>
            Cấu trúc thông dụng: <code>While + S + was/were + V-ing, S + V2/ed</code> hoặc <code>S + V2/ed + while + S + was/were + V-ing</code>.</li>
          <li><strong>WHEN (Khi):</strong> Thường đi kèm với mệnh đề chia ở thì <strong>Quá khứ đơn</strong> để diễn tả một hành động ngắn, đột ngột xen vào (interrupting action).<br>
            Cấu trúc thông dụng: <code>S + was/were + V-ing + when + S + V2/ed</code> hoặc <code>When + S + V2/ed, S + was/were + V-ing</code>.</li>
        </ul>
      `,
      examples: [
        {
          eng: "While I was driving home, it started to rain.",
          viet: "Trong khi tôi đang lái xe về nhà thì trời bắt đầu mưa.",
          tokens: [
            { text: "While", label: "Conjunction (Đứng trước hành động kéo dài)", role: "adv" },
            { text: "I was driving home,", label: "Past Continuous Clause (Hành động kéo dài)", role: "adv" },
            { text: "it", label: "Subject", role: "s" },
            { text: "started", label: "Verb (V2 của start - hành động xen vào)", role: "v" },
            { text: "to rain", label: "Infinitive", role: "o" }
          ],
          note: "Hành động lái xe là hành động kéo dài, đang diễn ra nên dùng 'While' và chia Quá khứ tiếp diễn. Trời mưa là hành động ngắn xen vào nên chia Quá khứ đơn."
        },
        {
          eng: "The phone rang while they were eating dinner.",
          viet: "Điện thoại đã reo lên trong khi họ đang ăn tối.",
          tokens: [
            { text: "The phone", label: "Subject 1", role: "s" },
            { text: "rang", label: "Verb 1 (V2 của ring - hành động xen vào)", role: "v" },
            { text: "while", label: "Conjunction", role: "adv" },
            { text: "they were eating", label: "Past Continuous Clause (Hành động kéo dài)", role: "adv" },
            { text: "dinner", label: "Object 2", role: "o" }
          ],
          note: "Hành động ăn tối kéo dài đi sau 'while' được chia ở Quá khứ tiếp diễn. Hành động điện thoại reo đột ngột chia ở Quá khứ đơn."
        },
        {
          eng: "I was taking a bath when she came.",
          viet: "Tôi đang tắm thì cô ấy đến.",
          tokens: [
            { text: "I", label: "Subject 1", role: "s" },
            { text: "was taking", label: "Past Continuous Verb (Hành động kéo dài)", role: "v" },
            { text: "a bath", label: "Object 1", role: "o" },
            { text: "when", label: "Conjunction (Đứng trước hành động xen vào)", role: "adv" },
            { text: "she", label: "Subject 2", role: "s" },
            { text: "came", label: "Verb 2 (V2 của come - hành động xen vào)", role: "v" }
          ],
          note: "Hành động cô ấy đến đột ngột cắt ngang quá trình tắm. Từ 'when' đứng trước mệnh đề quá khứ đơn 'she came'."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Sử dụng sai liên từ trước các thì.</strong></p>
        <p>Sai: <em>"While she arrived, I was watching TV."</em> (arrived là hành động ngắn, không đi với while).</p>
        <p>Đúng: <em>"When she arrived, I was watching TV."</em> hoặc <em>"While I was watching TV, she arrived."</em></p>
      `,
      tips: `
        <p>💡 <strong>Quy tắc ngón tay cái:</strong></p>
        <ul>
          <li><strong>While</strong> ➔ đi với <strong>V-ing</strong> (Hành động đang diễn ra).</li>
          <li><strong>When</strong> ➔ đi với <strong>V2/ed</strong> (Hành động xen vào đột ngột).</li>
        </ul>
      `
    },

    // CHAPTER 2: PAST PERFECT
    "3-5": {
      chapter: "Chương 2: Quá khứ hoàn thành",
      lessonNum: 5,
      shortTitle: "Bài 5: Khái niệm & Khẳng định",
      title: "Bài 5: Khái niệm & Cấu trúc khẳng định (Past Perfect)",
      explanation: `
        <p>Thì <strong>Quá khứ hoàn thành (Past Perfect Tense)</strong> được dùng để diễn tả một hành động xảy ra trước một hành động khác và cả hai hành động này đều đã xảy ra trong quá khứ. Hành động nào xảy ra trước thì dùng thì quá khứ hoàn thành. Hành động xảy ra sau thì dùng thì quá khứ đơn.</p>
        <p><strong>A. Cấu Trúc Khẳng Định:</strong></p>
        <p>Cấu trúc: <code>S + had + VpII (Verb-ed hoặc Verb cột 3)</code></p>
        <p>Trong đó:</p>
        <ul>
          <li><code>S (subject)</code>: chủ ngữ (áp dụng chung trợ động từ <strong>had</strong> cho tất cả các ngôi).</li>
          <li><code>Had</code>: Trợ động từ.</li>
          <li><code>VpII</code>: động từ phân từ II (Quá khứ phân từ).</li>
        </ul>
        <p>Động từ chính được chia ở dạng phân từ hai:</p>
        <ul>
          <li>Động từ có quy tắc: thêm <code>-ed</code> (finish ➔ finished, clean ➔ cleaned).</li>
          <li>Động từ bất quy tắc: tra cột thứ 3 trong bảng động từ bất quy tắc (go ➔ went ➔ gone, leave ➔ left).</li>
        </ul>
      `,
      examples: [
        {
          eng: "He had gone out when I came into the house.",
          viet: "Anh ấy đã đi ra ngoài khi tôi vào nhà.",
          tokens: [
            { text: "He", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "had gone", label: "Verb in Past Perfect (had + VpII)", role: "v" },
            { text: "out", label: "Particle", role: "o" },
            { text: "when I came into the house", label: "Time Clause in Past Simple (Hành động xảy ra sau)", role: "adv" }
          ],
          note: "Hành động 'đi ra ngoài' xảy ra trước hành động 'vào nhà'. Đi ra ngoài ➔ QKHT; Vào nhà ➔ QKĐ."
        },
        {
          eng: "They had finished their work right before the deadline last week.",
          viet: "Họ đã hoàn thành công việc của họ ngay trước hạn chót vào tuần trước.",
          tokens: [
            { text: "They", label: "Subject", role: "s" },
            { text: "had finished", label: "Verb in Past Perfect (had + VpII)", role: "v" },
            { text: "their work", label: "Object (Tân ngữ)", role: "o" },
            { text: "right before the deadline last week", label: "Time Adverbial (Trước hạn chót tuần trước)", role: "adv" }
          ],
          note: "Hành động hoàn thành công việc diễn ra trước thời hạn chót của tuần trước trong quá khứ."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi 1: Dùng trợ động từ have/has thay vì had.</strong></p>
        <p>Sai: <em>"When I came, the train has left."</em></p>
        <p>Đúng: <em>"When I came, the train <strong>had</strong> left."</em> (Trong quá khứ hoàn thành, trợ động từ bắt buộc phải lùi về quá khứ là 'had').</p>
        <p>🔴 <strong>Lỗi 2: Nhầm lẫn cột V2 (quá khứ đơn) và V3 (phân từ hai) của động từ bất quy tắc.</strong></p>
        <p>Sai: <em>"They had went out before I arrived."</em> (went là V2).</p>
        <p>Đúng: <em>"They had <strong>gone</strong> out before I arrived."</em> (gone mới là V3).</p>
      `,
      tips: `
        <p>💡 <strong>Mẹo xác định thì:</strong> Hãy vẽ một trục thời gian. Đặt mốc Hiện tại ở giữa. Tìm hai hành động trong quá khứ:</p>
        <ul>
          <li>Hành động xa hiện tại hơn (xảy ra trước) ➔ chia <code>had + V3</code> (QKHT).</li>
          <li>Hành động gần hiện tại hơn (xảy ra sau) ➔ chia <code>V2/ed</code> (QKĐ).</li>
        </ul>
      `
    },

    "3-6": {
      chapter: "Chương 2: Quá khứ hoàn thành",
      lessonNum: 6,
      shortTitle: "Bài 6: Phủ định & Nghi vấn",
      title: "Bài 6: Thể phủ định & Nghi vấn (Negative & Questions)",
      explanation: `
        <p>Tương tự như thì Hiện tại hoàn thành, các câu phủ định và câu hỏi trong thì Quá khứ hoàn thành được xây dựng trực tiếp bằng cách biến đổi trợ động từ <strong>had</strong>.</p>
        <p><strong>A. Thể Phủ Định (-):</strong></p>
        <p>Cấu trúc: <code>S + hadn't + VpII</code></p>
        <p>➔ Câu phủ định trong thì quá khứ hoàn thành ta chỉ cần thêm "not" vào ngay sau trợ động từ "had" (had not = hadn't).</p>
        <p><strong>B. Thể Nghi Vấn (Câu hỏi) (?):</strong></p>
        <p>Cấu trúc: <code>Had + S + VpII ?</code></p>
        <p>Trả lời:</p>
        <ul>
          <li><strong>Yes</strong>, S + <strong>had</strong>.</li>
          <li><strong>No</strong>, S + <strong>hadn't</strong>.</li>
        </ul>
        <p>➔ Câu hỏi trong thì quá khứ hoàn thành ta chỉ cần đảo trợ động từ "had" lên trước chủ ngữ.</p>
      `,
      examples: [
        {
          eng: "She hadn't come home when I got into the house.",
          viet: "Cô ấy vẫn chưa về nhà khi tôi vào nhà.",
          tokens: [
            { text: "She", label: "Subject", role: "s" },
            { text: "hadn't", label: "Auxiliary Verb + Not (Phủ định)", role: "be" },
            { text: "come", label: "VpII of come (Quá khứ phân từ)", role: "v" },
            { text: "home", label: "Adverb of Place (Nhà)", role: "o" },
            { text: "when I got into the house", label: "Time Clause in Past Simple (QKĐ)", role: "adv" }
          ],
          note: "Chủ ngữ 'She' đi với phủ định 'hadn't'. Việc cô ấy về nhà chưa xảy ra trước thời điểm tôi vào nhà."
        },
        {
          eng: "They hadn't finished their lunch when I saw them.",
          viet: "Họ vẫn chưa ăn xong bữa trưa khi trông thấy họ.",
          tokens: [
            { text: "They", label: "Subject", role: "s" },
            { text: "hadn't finished", label: "Negative Verb (hadn't + VpII)", role: "v" },
            { text: "their lunch", label: "Object (Tân ngữ)", role: "o" },
            { text: "when I saw them", label: "Time Clause in Past Simple (QKĐ)", role: "adv" }
          ],
          note: "Hành động ăn trưa chưa kết thúc trước thời điểm tôi nhìn thấy họ."
        },
        {
          eng: "Had the film ended when you arrived at the cinema?",
          viet: "Bộ phim đã kết thúc khi bạn tới rạp chiếu phim phải không?",
          tokens: [
            { text: "Had", label: "Auxiliary Verb (Đảo lên trước)", role: "be" },
            { text: "the film", label: "Subject", role: "s" },
            { text: "ended", label: "VpII of end (regular)", role: "v" },
            { text: "when you arrived at the cinema?", label: "Time Clause in Past Simple (QKĐ)", role: "adv" }
          ],
          note: "Câu nghi vấn đảo trợ động từ 'Had' lên trước chủ ngữ. Trả lời: Yes, it had. / No, it hadn't."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Mượn trợ động từ 'didn't' trong câu phủ định hoàn thành.</strong></p>
        <p>Sai: <em>"I didn't had finished my work before he came."</em></p>
        <p>Đúng: <em>"I <strong>hadn't</strong> finished my work before he came."</em></p>
      `,
      tips: `
        <p>💡 Trợ động từ <strong>had / hadn't</strong> cực kỳ thân thiện vì nó áp dụng chung cho mọi ngôi chủ ngữ (dù là số ít hay số nhiều). Bạn không cần phải đau đầu chọn lựa như have/has hay was/were.</p>
        <p>💡 Động từ đi sau had/hadn't luôn bắt buộc ở dạng phân từ hai <strong>V3/Ed</strong>.</p>
      `
    },

    "3-7": {
      chapter: "Chương 2: Quá khứ hoàn thành",
      lessonNum: 7,
      shortTitle: "Bài 7: Cách dùng & Dấu hiệu",
      title: "Bài 7: Cách sử dụng & Dấu hiệu nhận biết thì Quá khứ hoàn thành",
      explanation: `
        <p>Thì Quá khứ hoàn thành có các cách sử dụng cốt lõi sau đây:</p>
        <ol>
          <li><strong>Hành động đã xảy ra và đã hoàn thành trước một hành động khác trong quá khứ:</strong> Thường sử dụng các từ nối như <em>before, after, just, when, as soon as, by the time, until,...</em></li>
          <li><strong>Diễn tả một hành động xảy ra một khoảng thời gian trong quá khứ, trước một mốc thời gian khác.</strong></li>
          <li><strong>Diễn tả một hành động xảy ra như là điều kiện tiên quyết cho hành động khác trong quá khứ.</strong></li>
          <li><strong>Dùng trong câu điều kiện loại 3</strong> để diễn tả điều không có thực trong quá khứ.</li>
          <li><strong>Dùng trong câu mong ước (wish) loại 3</strong> để diễn tả ước muốn trái ngược với quá khứ.</li>
        </ol>
        <p><strong>Dấu hiệu nhận biết đặc trưng:</strong></p>
        <p>Trong câu có một vế là Quá khứ đơn (QKĐ) và xuất hiện các liên từ/trạng từ chỉ thời gian: <code>when</code>, <code>before</code>, <code>after</code>, <code>by the time</code>.</p>
      `,
      examples: [
        {
          eng: "When I came, he had gone to bed.",
          viet: "Khi tôi đến thì anh ta đã đi ngủ rồi.",
          tokens: [
            { text: "When I came,", label: "Time Clause in Past Simple (QKĐ)", role: "adv" },
            { text: "he", label: "Subject", role: "s" },
            { text: "had gone", label: "Verb in Past Perfect (had + VpII)", role: "v" },
            { text: "to bed", label: "Prepositional Phrase (Đi ngủ)", role: "o" }
          ],
          note: "Hành động đi ngủ hoàn thành trước khi hành động tôi đến xảy ra."
        },
        {
          eng: "I had gone to school before 7 a.m yesterday.",
          viet: "Tôi đã đi học trước 7 giờ sáng ngày hôm qua.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "had gone", label: "Verb in Past Perfect (had + VpII)", role: "v" },
            { text: "to school", label: "Object", role: "o" },
            { text: "before 7 a.m yesterday", label: "Time Adverbial (Trước mốc thời gian cụ thể)", role: "adv" }
          ],
          note: "Hành động đi học xảy ra trước mốc 7 giờ sáng ngày hôm qua."
        },
        {
          eng: "If she had told me the truth yesterday, I would have helped her.",
          viet: "Nếu hôm qua cô ấy nói sự thật với tôi, tôi đã có thể giúp cô ấy rồi.",
          tokens: [
            { text: "If she had told", label: "If-clause in Past Perfect (had + VpII)", role: "v" },
            { text: "me the truth yesterday,", label: "Object & Time", role: "o" },
            { text: "I would have helped", label: "Main Clause (would + have + VpII)", role: "v" },
            { text: "her", label: "Object", role: "o" }
          ],
          note: "Sử dụng trong câu điều kiện loại 3, diễn tả giả thiết không có thực trong quá khứ."
        },
        {
          eng: "I wish I had gone with you yesterday.",
          viet: "Tôi ước rằng tôi đã đi với bạn ngày hôm qua.",
          tokens: [
            { text: "I wish", label: "Wish Clause", role: "s" },
            { text: "I", label: "Subject", role: "s" },
            { text: "had gone", label: "Verb in Past Perfect (had + VpII)", role: "v" },
            { text: "with you yesterday", label: "Prepositional Phrase", role: "o" }
          ],
          note: "Sử dụng trong câu ước loại 3, diễn tả mong muốn trái với thực tế đã xảy ra trong quá khứ."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Nhầm lẫn vế chia Quá khứ hoàn thành và Quá khứ đơn sau Before/After.</strong></p>
        <p>Sai: <em>"After she finished her work, she had gone to bed."</em> (Finished và had gone bị đảo ngược vị trí logic thời gian).</p>
        <p>Đúng: <em>"After she <strong>had finished</strong> her work, she <strong>went</strong> to bed."</em> (Làm việc xong trước rồi mới đi ngủ sau).</p>
      `,
      tips: `
        <p>💡 <strong>Câu thần chú ghi nhớ vị trí thì:</strong></p>
        <ul>
          <li><strong>Trước Before chia Quá khứ hoàn thành, sau Before chia Quá khứ đơn</strong> (Trước hoàn thành, sau đơn).</li>
          <li><strong>Trước After chia Quá khứ đơn, sau After chia Quá khứ hoàn thành</strong> (Trước đơn, sau hoàn thành).</li>
        </ul>
      `
    },

    // CHAPTER 3: TENSE COMBINATION
    "3-8": {
      chapter: "Chương 3: Sự kết hợp thì & So sánh",
      lessonNum: 8,
      shortTitle: "Bài 8: Kết hợp QKTD & QKĐ",
      title: "Bài 8: Sự kết hợp giữa thì Quá khứ tiếp diễn và Quá khứ đơn",
      explanation: `
        <p>Sự kết hợp giữa Quá khứ tiếp diễn và Quá khứ đơn là một trong những điểm ngữ pháp kinh điển nhất trong tiếng Anh, diễn tả <strong>một hành động đang xảy ra (kéo dài) thì có một hành động khác (ngắn hơn) bất chợt xen vào</strong>.</p>
        <ul>
          <li>Hành động đang diễn ra (long action): chia ở thì <strong>Quá khứ tiếp diễn</strong> (was/were + V-ing).</li>
          <li>Hành động xen vào (short action): chia ở thì <strong>Quá khứ đơn</strong> (V2/ed).</li>
          <li>Hai vế được kết nối bởi các liên từ: <strong>when</strong> hoặc <strong>while</strong>.</li>
        </ul>
      `,
      examples: [
        {
          eng: "I was studying when the lights went out.",
          viet: "Tôi đang học bài thì điện bị tắt.",
          tokens: [
            { text: "I", label: "Subject 1", role: "s" },
            { text: "was studying", label: "Past Continuous (Hành động đang diễn ra kéo dài)", role: "v" },
            { text: "when", label: "Conjunction", role: "adv" },
            { text: "the lights", label: "Subject 2", role: "s" },
            { text: "went out", label: "Past Simple (Hành động xen vào đột ngột)", role: "v" }
          ],
          note: "Việc học đang diễn ra thì bị hành động mất điện đột ngột xen ngang."
        },
        {
          eng: "While they were walking in the park, they saw a dog.",
          viet: "Trong khi họ đang đi bộ trong công viên, họ đã nhìn thấy một con chó.",
          tokens: [
            { text: "While", label: "Conjunction", role: "adv" },
            { text: "they were walking", label: "Past Continuous (Hành động đang diễn ra)", role: "v" },
            { text: "in the park,", label: "Prepositional Phrase", role: "o" },
            { text: "they", label: "Subject 2", role: "s" },
            { text: "saw", label: "Past Simple (Hành động ngắn xen vào)", role: "v" },
            { text: "a dog", label: "Object 2", role: "o" }
          ],
          note: "Quá trình đi bộ là hành động nền kéo dài. Việc nhìn thấy con chó là khoảnh khắc ngắn bất chợt xảy ra."
        },
        {
          eng: "He broke his leg while he was playing football.",
          viet: "Anh ấy đã bị gãy chân trong khi anh ấy đang chơi bóng đá.",
          tokens: [
            { text: "He", label: "Subject 1", role: "s" },
            { text: "broke", label: "Past Simple (Hành động xen vào)", role: "v" },
            { text: "his leg", label: "Object 1", role: "o" },
            { text: "while", label: "Conjunction", role: "adv" },
            { text: "he was playing", label: "Past Continuous (Hành động kéo dài)", role: "v" },
            { text: "football", label: "Object 2", role: "o" }
          ],
          note: "Việc chơi bóng đá đang diễn ra thì tai nạn gãy chân bất ngờ xảy ra cắt ngang."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Chia ngược thì của hai hành động.</strong></p>
        <p>Sai: <em>"I studied when the lights were going out."</em></p>
        <p>Đúng: <em>"I <strong>was studying</strong> when the lights <strong>went out</strong>."</em> (Đèn tắt là hành động tức thời, không thể diễn tả kéo dài ở vế xen vào).</p>
      `,
      tips: `
        <p>💡 <strong>Công thức tư duy:</strong></p>
        <p>Hãy tự hỏi bản thân khi đọc câu: Hành động nào là hành động <strong>nền, đang diễn ra</strong> trước đó? Hành động nào là hành động <strong>đột ngột xảy ra cắt ngang</strong>?</p>
        <ul>
          <li>Đang làm (lâu hơn) ➔ <strong>Quá khứ tiếp diễn</strong> (was/were + V-ing).</li>
          <li>Xen ngang (nhanh hơn) ➔ <strong>Quá khứ đơn</strong> (V2/ed).</li>
        </ul>
      `
    },

    "3-9": {
      chapter: "Chương 3: Sự kết hợp thì & So sánh",
      lessonNum: 9,
      shortTitle: "Bài 9: Kết hợp QKHT & QKĐ",
      title: "Bài 9: Sự kết hợp giữa thì Quá khứ hoàn thành và Quá khứ đơn",
      explanation: `
        <p>Sự kết hợp này được dùng để nhấn mạnh thứ tự thời gian của hai hành động đơn lẻ diễn ra trong quá khứ:</p>
        <ul>
          <li>Hành động nào xảy ra trước (Action 1): chia ở thì <strong>Quá khứ hoàn thành</strong> (had + V3/ed).</li>
          <li>Hành động nào xảy ra sau (Action 2): chia ở thì <strong>Quá khứ đơn</strong> (V2/ed).</li>
          <li>Thường sử dụng các từ liên kết như: <strong>when</strong>, <strong>before</strong>, <strong>after</strong>, <strong>by the time</strong>.</li>
        </ul>
      `,
      examples: [
        {
          eng: "When they arrived at the airport, her flight had taken off.",
          viet: "Khi họ tới sân bay, chuyến bay của cô ấy đã cất cánh.",
          tokens: [
            { text: "When they arrived", label: "Time Clause in Past Simple (QKĐ)", role: "adv" },
            { text: "at the airport,", label: "Prepositional Phrase", role: "o" },
            { text: "her flight", label: "Subject", role: "s" },
            { text: "had taken off", label: "Past Perfect Verb (Chuyến bay cất cánh trước)", role: "v" }
          ],
          note: "Chuyến bay cất cánh trước khi họ tới sân bay. Cất cánh ➔ QKHT; Tới sân bay ➔ QKĐ."
        },
        {
          eng: "He had done his homework before his mother asked him to do so.",
          viet: "Anh ấy đã làm bài tập về nhà trước khi mẹ anh ấy yêu cầu anh ấy làm.",
          tokens: [
            { text: "He", label: "Subject", role: "s" },
            { text: "had done", label: "Past Perfect Verb (Làm bài tập trước)", role: "v" },
            { text: "his homework", label: "Object (Tân ngữ)", role: "o" },
            { text: "before", label: "Conjunction", role: "adv" },
            { text: "his mother asked him to do so", label: "Past Simple Clause (QKĐ)", role: "v" }
          ],
          note: "Hành động làm bài tập hoàn thành trước khi mẹ yêu cầu. Trước 'before' dùng QKHT, sau 'before' dùng QKĐ."
        },
        {
          eng: "They went home after they had eaten a big roasted chicken.",
          viet: "Họ về nhà sau khi đã ăn một con gà quay lớn.",
          tokens: [
            { text: "They went home", label: "Past Simple Clause (Về nhà sau)", role: "s" },
            { text: "after", label: "Conjunction", role: "adv" },
            { text: "they had eaten", label: "Past Perfect Clause (Ăn trước)", role: "v" },
            { text: "a big roasted chicken", label: "Object", role: "o" }
          ],
          note: "Hành động ăn gà quay lớn xảy ra trước hành động đi về nhà. Sau 'after' dùng QKHT, trước 'after' dùng QKĐ."
        },
        {
          eng: "He had cleaned the house by the time his mother came back.",
          viet: "Cậu ấy đã lau xong nhà vào thời điểm mẹ cậu ấy trở về.",
          tokens: [
            { text: "He", label: "Subject", role: "s" },
            { text: "had cleaned", label: "Past Perfect Verb (Lau nhà trước)", role: "v" },
            { text: "the house", label: "Object", role: "o" },
            { text: "by the time", label: "Conjunction", role: "adv" },
            { text: "his mother came back", label: "Past Simple Clause (QKĐ)", role: "v" }
          ],
          note: "Hành động lau nhà hoàn thành trước khi mẹ trở về. Trước 'by the time' dùng QKHT, sau 'by the time' dùng QKĐ."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Dùng thì quá khứ đơn cho cả hai hành động khi thứ tự trước sau rất rõ ràng.</strong></p>
        <p>Không nên dùng: <em>"When I arrived, they left."</em> (Nếu muốn chỉ việc họ đã đi từ trước rồi mới đến).</p>
        <p>Nên dùng: <em>"When I arrived, they <strong>had left</strong>."</em> (Để người nghe không hiểu nhầm là bạn đến rồi họ mới bắt đầu rời đi).</p>
      `,
      tips: `
        <p>💡 <strong>Quy tắc thứ tự vàng:</strong></p>
        <p>Việc gì làm <strong>trước</strong> (First Action) ➔ <strong>Quá khứ hoàn thành</strong> (had + V3).</p>
        <p>Việc gì làm <strong>sau</strong> (Second Action) ➔ <strong>Quá khứ đơn</strong> (V2/ed).</p>
      `
    },

    "3-10": {
      chapter: "Chương 3: Sự kết hợp thì & So sánh",
      lessonNum: 10,
      shortTitle: "Bài 10: Phân biệt & Lỗi thường gặp",
      title: "Bài 10: Phân biệt chi tiết & Các lỗi sai thường gặp của các thì quá khứ",
      explanation: `
        <p>Hãy đặt 3 thì quá khứ lên bàn cân để thấy rõ sự khác biệt:</p>
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Tiêu chí</th>
              <th>Thì Quá khứ đơn</th>
              <th>Thì Quá khứ tiếp diễn</th>
              <th>Thì Quá khứ hoàn thành</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Cấu trúc</strong></td>
              <td><code>S + V2/ed</code></td>
              <td><code>S + was/were + V-ing</code></td>
              <td><code>S + had + V3/ed</code></td>
            </tr>
              <td><strong>Bản chất</strong></td>
              <td>Kể lại sự việc đã bắt đầu và kết thúc hoàn toàn trong quá khứ.</td>
              <td>Nhấn mạnh quá trình, diễn biến của hành động đang xảy ra tại một thời điểm.</td>
              <td>Nhấn mạnh một hành động hoàn thành trước một thời điểm/hành động khác.</td>
            </tr>
            <tr>
              <td><strong>Từ khóa</strong></td>
              <td>yesterday, last week, ago, in 2018</td>
              <td>at 8 p.m yesterday, at that time, while</td>
              <td>before, after, by the time, as soon as, by then</td>
            </tr>
          </tbody>
        </table>
        <br>
        <p><strong>🚨 Phân tích 3 câu ví dụ kinh điển:</strong></p>
        <ul>
          <li><strong>I arrived at the party. They left.</strong> (Họ đợi tôi đến rồi họ mới đi - Quá khứ đơn tiếp nối nhau).</li>
          <li><strong>When I arrived at the party, they were leaving.</strong> (Khi tôi bước vào cửa, họ đang chuẩn bị đi ra - Quá khứ tiếp diễn đang xảy ra).</li>
          <li><strong>When I arrived at the party, they had left.</strong> (Khi tôi đến nơi thì họ đã đi mất từ trước rồi, tôi không được gặp họ - Quá khứ hoàn thành xảy ra trước).</li>
        </ul>
      `,
      examples: [
        {
          eng: "I lived in London in 2018.",
          viet: "Tôi đã sống ở Luân Đôn vào năm 2018 (sự việc đã kết thúc hoàn toàn).",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "lived", label: "Verb (V2 của live - QKĐ)", role: "v" },
            { text: "in London", label: "Adverbial of Place", role: "o" },
            { text: "in 2018", label: "Time Adverbial (Năm đã qua)", role: "adv" }
          ],
          note: "Dùng Quá khứ đơn vì hành động sống ở Luân Đôn xảy ra và đã chấm dứt hoàn toàn trong năm 2018."
        },
        {
          eng: "At 5 p.m yesterday, I was flying to London.",
          viet: "Vào lúc 5 giờ chiều ngày hôm qua, tôi đang bay đến Luân Đôn (hành động đang diễn ra).",
          tokens: [
            { text: "At 5 p.m yesterday,", label: "Time Adverbial (Giờ cụ thể)", role: "adv" },
            { text: "I", label: "Subject", role: "s" },
            { text: "was flying", label: "Past Continuous Verb (was + V-ing)", role: "v" },
            { text: "to London", label: "Prepositional Phrase", role: "o" }
          ],
          note: "Dùng Quá khứ tiếp diễn vì nhấn mạnh hành động đang diễn ra ngay tại thời điểm 5 giờ chiều hôm qua."
        },
        {
          eng: "I had lived in London before I moved to Hanoi.",
          viet: "Tôi đã từng sống ở Luân Đôn trước khi tôi chuyển về Hà Nội (hành động xảy ra trước hành động khác).",
          tokens: [
            { text: "I", label: "Subject 1", role: "s" },
            { text: "had lived", label: "Past Perfect Verb (Sống ở London trước)", role: "v" },
            { text: "in London", label: "Adverbial", role: "o" },
            { text: "before", label: "Conjunction", role: "adv" },
            { text: "I moved", label: "Past Simple Verb (Chuyển về HN sau)", role: "v" },
            { text: "to Hanoi", label: "Prepositional Phrase", role: "o" }
          ],
          note: "Hành động sống ở Luân Đôn diễn ra trước hành động chuyển về Hà Nội. Sống ở London ➔ QKHT; Chuyển về HN ➔ QKĐ."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Sử dụng double past markers hoặc nhầm lẫn cấu trúc.</strong></p>
        <p>Sai: <em>"She didn't was sleeping when I came."</em> hoặc <em>"Had they went?"</em></p>
        <p>Đúng: <em>"She <strong>wasn't</strong> sleeping when I came."</em> và <em>"Had they <strong>gone</strong>?"</em></p>
      `,
      tips: `
        <p>💡 Hãy đọc kỹ ngữ cảnh câu trước khi chọn thì:</p>
        <ul>
          <li>Kể sự việc liên tiếp: Đơn + Đơn + Đơn...</li>
          <li>Hành động bị cắt ngang: Tiếp diễn + Đơn.</li>
          <li>Hành động trước - sau: Hoàn thành + Đơn.</li>
        </ul>
      `
    }
  };

  // ------------------------------------------------------------------
  // WORD POOLS FOR QUESTION GENERATOR AND TRANSLATION
  // ------------------------------------------------------------------
  const SUBJECTS_POOL = {
    singular: [
      { text: "I", pronoun: "I", beWas: "was", beWasNeg: "wasn't", doDid: "did", dontDidNeg: "didn't", haveVal: "had", haveNeg: "hadn't" },
      { text: "He", pronoun: "he", beWas: "was", beWasNeg: "wasn't", doDid: "did", dontDidNeg: "didn't", haveVal: "had", haveNeg: "hadn't" },
      { text: "She", pronoun: "she", beWas: "was", beWasNeg: "wasn't", doDid: "did", dontDidNeg: "didn't", haveVal: "had", haveNeg: "hadn't" },
      { text: "It", pronoun: "it", beWas: "was", beWasNeg: "wasn't", doDid: "did", dontDidNeg: "didn't", haveVal: "had", haveNeg: "hadn't" },
      { text: "Peter", pronoun: "he", beWas: "was", beWasNeg: "wasn't", doDid: "did", dontDidNeg: "didn't", haveVal: "had", haveNeg: "hadn't" },
      { text: "Mary", pronoun: "she", beWas: "was", beWasNeg: "wasn't", doDid: "did", dontDidNeg: "didn't", haveVal: "had", haveNeg: "hadn't" },
      { text: "Lan", pronoun: "she", beWas: "was", beWasNeg: "wasn't", doDid: "did", dontDidNeg: "didn't", haveVal: "had", haveNeg: "hadn't" },
      { text: "The student", pronoun: "he", beWas: "was", beWasNeg: "wasn't", doDid: "did", dontDidNeg: "didn't", haveVal: "had", haveNeg: "hadn't" }
    ],
    plural: [
      { text: "You", pronoun: "you", beWas: "were", beWasNeg: "weren't", doDid: "did", dontDidNeg: "didn't", haveVal: "had", haveNeg: "hadn't" },
      { text: "We", pronoun: "we", beWas: "were", beWasNeg: "weren't", doDid: "did", dontDidNeg: "didn't", haveVal: "had", haveNeg: "hadn't" },
      { text: "They", pronoun: "they", beWas: "were", beWasNeg: "weren't", doDid: "did", dontDidNeg: "didn't", haveVal: "had", haveNeg: "hadn't" },
      { text: "My parents", pronoun: "they", beWas: "were", beWasNeg: "weren't", doDid: "did", dontDidNeg: "didn't", haveVal: "had", haveNeg: "hadn't" },
      { text: "The teachers", pronoun: "they", beWas: "were", beWasNeg: "weren't", doDid: "did", dontDidNeg: "didn't", haveVal: "had", haveNeg: "hadn't" }
    ]
  };

  const VERBS_REGULAR = [
    { base: "work", v2: "worked", v3: "worked", ing: "working", obj: "at a factory", viet: "làm việc ở nhà máy" },
    { base: "live", v2: "lived", v3: "lived", ing: "living", obj: "in Hanoi", viet: "sống ở Hà Nội" },
    { base: "play", v2: "played", v3: "played", ing: "playing", obj: "tennis", viet: "chơi tennis" },
    { base: "visit", v2: "visited", v3: "visited", ing: "visiting", obj: "their grandparents", viet: "thăm ông bà của họ" },
    { base: "study", v2: "studied", v3: "studied", ing: "studying", obj: "French", viet: "học tiếng Pháp" },
    { base: "clean", v2: "cleaned", v3: "cleaned", ing: "cleaning", obj: "the house", viet: "dọn dẹp nhà cửa" },
    { base: "finish", v2: "finished", v3: "finished", ing: "finishing", obj: "the project", viet: "hoàn thành dự án" },
    { base: "arrive", v2: "arrived", v3: "arrived", ing: "arriving", obj: "at the station", viet: "đến nhà ga" }
  ];

  const VERBS_IRREGULAR = [
    { base: "go", v2: "went", v3: "gone", ing: "going", obj: "to school", viet: "đi học" },
    { base: "eat", v2: "ate", v3: "eaten", ing: "eating", obj: "dinner", viet: "ăn tối" },
    { base: "see", v2: "saw", v3: "seen", ing: "seeing", obj: "that movie", viet: "xem bộ phim đó" },
    { base: "write", v2: "wrote", v3: "written", ing: "writing", obj: "a letter", viet: "viết thư" },
    { base: "lose", v2: "lost", v3: "lost", ing: "losing", obj: "the keys", viet: "mất chìa khóa" },
    { base: "do", v2: "did", v3: "done", ing: "doing", obj: "the homework", viet: "làm bài tập" },
    { base: "buy", v2: "bought", v3: "bought", ing: "buying", obj: "a new laptop", viet: "mua máy tính mới" },
    { base: "leave", v2: "left", v3: "left", ing: "leaving", obj: "the house", viet: "rời khỏi nhà" },
    { base: "sleep", v2: "slept", v3: "slept", ing: "sleeping", obj: "in the room", viet: "ngủ trong phòng" },
    { base: "read", v2: "read", v3: "read", ing: "reading", obj: "the book", viet: "đọc cuốn sách" }
  ];

  // Expose lessons and pools
  window.UNITS_REGISTRY["unit3"] = {
    unitId: "unit3",
    title: "Unit 3: Past Continuous & Past Perfect",
    lessons: LESSONS_DATA,
    pools: { SUBJECTS_POOL, VERBS_REGULAR, VERBS_IRREGULAR },
    rules: {
      "was/were": "Chia động từ To Be quá khứ",
      "was/were + V-ing": "Cấu trúc Quá khứ tiếp diễn",
      "V-ing": "Cách chia động từ thêm -ing",
      "had": "Trợ động từ Quá khứ hoàn thành",
      "V3/ed": "Động từ phân từ hai (V3)",
      "when/while": "Liên từ When và While",
      "before/after": "Trật tự thời gian Before, After, By the time",
      "past-combo": "Sự kết hợp các thì trong quá khứ"
    }
  };
})();
