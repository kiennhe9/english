(function () {
  if (!window.UNITS_REGISTRY) window.UNITS_REGISTRY = {};

  // ------------------------------------------------------------------
  // LESSONS DATA
  // ------------------------------------------------------------------
  const LESSONS_DATA = {
    // CHAPTER 1: PRESENT SIMPLE
    "1-1": {
      chapter: "Chương 1: Hiện tại đơn",
      lessonNum: 1,
      shortTitle: "Bài 1: Động từ To Be",
      title: "Bài 1: Cấu trúc động từ To Be ở hiện tại đơn (am/is/are)",
      explanation: `
        <p>Thì hiện tại đơn (Simple present) dùng để diễn tả một hành động chung chung, tổng quát lặp đi lặp lại nhiều lần hoặc một sự thật hiển nhiên hoặc một hành động diễn ra trong thời gian hiện tại.</p>
        <p>Đối với cấu trúc của các THÌ, chúng ta chỉ cần quan tâm đến chủ ngữ và động từ chính, còn các thành phần khác như tân ngữ, trạng từ, ... thì tùy từng câu mà có cấu trúc khác nhau.</p>
        <p>Ở đây: <strong>“to be”</strong> ở hiện tại có 3 dạng: <strong>am/ is/ are</strong></p>
        <p><strong>A. Khẳng định:</strong></p>
        <p>Cấu trúc: <code>S + am / is / are</code></p>
        <ul>
          <li><code>S = I</code> + <strong>am</strong></li>
          <li><code>S = He/ She/ It/ tên riêng/ danh từ số ít</code> + <strong>is</strong></li>
          <li><code>S = We/ You/ They/ danh từ số nhiều</code> + <strong>are</strong></li>
        </ul>
        <p><strong>B. Phủ định:</strong></p>
        <p>Cấu trúc: <code>S + am/ is/ are + not</code></p>
        <p><em>Lưu ý viết tắt:</em></p>
        <ul>
          <li><strong>Am not</strong>: không có dạng viết tắt</li>
          <li><strong>Is not</strong> = <strong>isn't</strong></li>
          <li><strong>Are not</strong> = <strong>aren't</strong></li>
        </ul>
        <p><strong>C. Câu hỏi:</strong></p>
        <p>Cấu trúc: <code>Am/ Is/ Are + S?</code></p>
        <p>Trả lời:</p>
        <ul>
          <li><strong>Yes</strong>, I + <strong>am</strong>. / <strong>No</strong>, I + <strong>am not</strong>.</li>
          <li><strong>Yes</strong>, he/ she/ it + <strong>is</strong>. / <strong>No</strong>, he/ she/ it + <strong>isn't</strong>.</li>
          <li><strong>Yes</strong>, we/ you/ they + <strong>are</strong>. / <strong>No</strong>, we/ you/ they + <strong>aren't</strong>.</li>
        </ul>
      `,
      examples: [
        {
          eng: "I am a doctor.",
          viet: "Tôi là bác sĩ.",
          tokens: [
            { text: "I", label: "Subject (Chủ ngữ ngôi thứ nhất)", role: "s" },
            { text: "am", label: "To Be (Chia theo chủ ngữ I)", role: "be" },
            { text: "a doctor", label: "Complement (Danh từ bổ nghĩa)", role: "o" }
          ],
          note: "Chủ ngữ là 'I' bắt buộc đi với To Be là 'am'."
        },
        {
          eng: "She is very beautiful.",
          viet: "Cô ấy rất xinh đẹp.",
          tokens: [
            { text: "She", label: "Subject (Ngôi thứ ba số ít)", role: "s" },
            { text: "is", label: "To Be (Chia theo chủ ngữ số ít)", role: "be" },
            { text: "very beautiful", label: "Adjective (Tính từ bổ nghĩa)", role: "o" }
          ],
          note: "Chủ ngữ số ít 'She' đi với động từ To Be là 'is'."
        },
        {
          eng: "We are friends.",
          viet: "Chúng tôi là bạn bè.",
          tokens: [
            { text: "We", label: "Subject (Chủ ngữ số nhiều)", role: "s" },
            { text: "are", label: "To Be (Chia theo chủ ngữ số nhiều)", role: "be" },
            { text: "friends", label: "Noun (Danh từ bổ nghĩa)", role: "o" }
          ],
          note: "Chủ ngữ số nhiều 'We' đi với To Be là 'are'."
        },
        {
          eng: "He is not my brother.",
          viet: "Anh ấy không phải là anh trai của tôi.",
          tokens: [
            { text: "He", label: "Subject (Số ít)", role: "s" },
            { text: "is not", label: "To Be + Not (Phủ định, viết tắt: isn't)", role: "be" },
            { text: "my brother", label: "Complement (Bổ ngữ chỉ quan hệ)", role: "o" }
          ],
          note: "Dạng phủ định thêm 'not' sau 'is', có thể viết tắt thành 'isn't'."
        },
        {
          eng: "They are not at home.",
          viet: "Họ không có ở nhà.",
          tokens: [
            { text: "They", label: "Subject (Số nhiều)", role: "s" },
            { text: "are not", label: "To Be + Not (Phủ định, viết tắt: aren't)", role: "be" },
            { text: "at home", label: "Adverbial (Trạng ngữ chỉ nơi chốn)", role: "o" }
          ],
          note: "Chủ ngữ số nhiều 'They' đi với dạng phủ định 'are not' (aren't)."
        },
        {
          eng: "I am not tired now.",
          viet: "Hiện tại tôi không mệt.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "am not", label: "To Be + Not (Không có dạng viết tắt)", role: "be" },
            { text: "tired", label: "Adjective (Tính từ bổ ngữ)", role: "o" },
            { text: "now", label: "Time Adverb (Trạng từ chỉ thời gian)", role: "adv" }
          ],
          note: "'am not' đứng sau chủ ngữ 'I' trong câu phủ định, không có cách viết tắt dính liền như isn't hay aren't."
        },
        {
          eng: "Are you a student?",
          viet: "Bạn có phải là học sinh không?",
          tokens: [
            { text: "Are", label: "To Be (Đảo lên trước chủ ngữ)", role: "be" },
            { text: "you", label: "Subject", role: "s" },
            { text: "a student", label: "Complement (Danh từ bổ ngữ)", role: "o" }
          ],
          note: "Câu nghi vấn đảo động từ To Be 'Are' lên đầu trước chủ ngữ 'you'. Trả lời: Yes, I am. / No, I am not."
        },
        {
          eng: "Is he your teacher?",
          viet: "Anh ấy có phải là giáo viên của bạn không?",
          tokens: [
            { text: "Is", label: "To Be (Đảo lên đầu câu hỏi)", role: "be" },
            { text: "he", label: "Subject (Số ít)", role: "s" },
            { text: "your teacher", label: "Complement", role: "o" }
          ],
          note: "Câu nghi vấn đảo 'Is' lên đầu trước chủ ngữ số ít 'he'. Trả lời: Yes, he is. / No, he isn't."
        },
        {
          eng: "Are they happy today?",
          viet: "Hôm nay họ có vui không?",
          tokens: [
            { text: "Are", label: "To Be (Đảo lên đầu)", role: "be" },
            { text: "they", label: "Subject (Số nhiều)", role: "s" },
            { text: "happy", label: "Adjective (Tính từ)", role: "o" },
            { text: "today", label: "Time Adverb", role: "adv" }
          ],
          note: "Câu nghi vấn đảo 'Are' lên trước chủ ngữ số nhiều 'they'. Trả lời: Yes, they are. / No, they aren't."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi 1: Nhầm lẫn viết tắt của 'am not'.</strong></p>
        <p>Sai: <em>"I amn't a student."</em></p>
        <p>Đúng: <em>"I am not a student."</em> (Trong tiếng Anh chuẩn cho người học, không viết tắt 'am not' thành 'amn't').</p>
        <p>🔴 <strong>Lỗi 2: Quên động từ To Be khi câu chỉ trạng thái, đặc điểm.</strong></p>
        <p>Sai: <em>"They Korean."</em></p>
        <p>Đúng: <em>"They are Korean."</em> hoặc <em>"They aren't Korean."</em></p>
        <p>🔴 <strong>Lỗi 3: Dùng động từ To Be chung với động từ thường ở dạng nguyên mẫu.</strong></p>
        <p>Sai: <em>"I am go to school."</em> hoặc <em>"She is like coffee."</em></p>
        <p>Đúng: <em>"I go to school."</em> hoặc <em>"She likes coffee."</em> (Nếu câu đã có động từ chỉ hành động thường, KHÔNG dùng To Be am/is/are ở trước nó).</p>
      `,
      tips: `
        <p>💡 <strong>Bảng chia động từ To Be nhanh cho người mất gốc:</strong></p>
        <ul>
          <li><strong>I</strong> ➔ đi với <strong>am</strong> (phủ định: <strong>am not</strong>).</li>
          <li><strong>He, She, It, Danh từ số ít (Peter, a cat)</strong> ➔ đi với <strong>is</strong> (phủ định: <strong>is not / isn't</strong>).</li>
          <li><strong>You, We, They, Danh từ số nhiều (students, cats)</strong> ➔ đi với <strong>are</strong> (phủ định: <strong>are not / aren't</strong>).</li>
        </ul>
        <p>💡 <strong>Quy tắc trả lời ngắn:</strong></p>
        <ul>
          <li>Khẳng định: <code>Yes, S + am/is/are</code> (Không được viết tắt thành Yes, I'm hay Yes, he's).</li>
          <li>Phủ định: <code>No, S + am not/isn't/aren't</code> (Có thể viết tắt bình thường).</li>
        </ul>
      `
    },

    "1-2": {
      chapter: "Chương 1: Hiện tại đơn",
      lessonNum: 2,
      shortTitle: "Bài 2: Động từ thường - Khẳng định",
      title: "Bài 2: Động từ thường - Thể khẳng định & Quy tắc s/es",
      explanation: `
        <p><strong>A. Cấu Trúc Khẳng Định:</strong></p>
        <p>Cấu trúc: <code>S + V(s/es)</code></p>
        <ul>
          <li><code>S = I, We, You, They, danh từ số nhiều</code> ➔ ĐỘNG TỪ ở dạng <strong>NGUYÊN MẪU</strong>.</li>
          <li><code>S = He, She, It, tên riêng, danh từ số ít</code> ➔ ĐỘNG TỪ thêm <strong>“S” hoặc “ES”</strong>.</li>
        </ul>
        <p><strong>B. Quy tắc thêm “S” hoặc “ES” sau động từ:</strong></p>
        <ol>
          <li><strong>Thông thường:</strong> Ta thêm <code>-s</code> vào sau các động từ (work ➔ works, read ➔ reads, speak ➔ speaks, love ➔ loves, see ➔ sees, drink ➔ drinks).</li>
          <li><strong>Động từ tận cùng bằng: -s, -sh, -ch, -z, -x, -o:</strong> Ta thêm <code>-es</code> (miss ➔ misses; peach ➔ peaches, watch ➔ watches, mix ➔ mixes, wash ➔ washes, buzz ➔ buzzes, go ➔ goes, teach ➔ teaches).</li>
          <li><strong>Động từ tận cùng là “y”:</strong>
            <ul>
              <li>Nếu trước “y” là một nguyên âm (a, e, i, o, u): Ta giữ nguyên “y” + <code>-s</code> (play ➔ plays, buy ➔ buys, pay ➔ pays).</li>
              <li>Nếu trước “y” là một phụ âm: Ta đổi “y” thành <code>i</code> + <code>-es</code> (fly ➔ flies, cry ➔ cries, fry ➔ fries).</li>
            </ul>
          </li>
          <li><strong>Trường hợp đặc biệt:</strong> <code>have</code> ➔ <code>has</code>. Động từ “have” khi đi với chủ ngữ là ngôi thứ 3 số ít sẽ không thêm “s” mà biến đổi thành “has”.</li>
        </ol>
      `,
      examples: [
        {
          eng: "They go to work by bus every day.",
          viet: "Họ đi làm bằng xe buýt hàng ngày.",
          tokens: [
            { text: "They", label: "Subject (Chủ ngữ số nhiều)", role: "s" },
            { text: "go", label: "Verb (Động từ nguyên mẫu)", role: "v" },
            { text: "to work", label: "Prepositional Phrase (Bổ nghĩa nơi chốn)", role: "o" },
            { text: "by bus every day", label: "Adverbial (Trạng ngữ chỉ cách thức, tần suất)", role: "adv" }
          ],
          note: "Chủ ngữ là 'They' nên động từ 'go' giữ nguyên mẫu."
        },
        {
          eng: "Students go to school from Monday to Saturday.",
          viet: "Học sinh đi học từ thứ Hai đến thứ Bảy.",
          tokens: [
            { text: "Students", label: "Subject (Chủ ngữ số nhiều)", role: "s" },
            { text: "go", label: "Verb (Động từ nguyên mẫu)", role: "v" },
            { text: "to school", label: "Prepositional Phrase", role: "o" },
            { text: "from Monday to Saturday", label: "Adverbial (Trạng ngữ thời gian)", role: "adv" }
          ],
          note: "Chủ ngữ là danh từ số nhiều 'Students' nên động từ 'go' giữ nguyên mẫu."
        },
        {
          eng: "He goes to work by bus every day.",
          viet: "Anh ấy đi làm bằng xe buýt hàng ngày.",
          tokens: [
            { text: "He", label: "Subject (Chủ ngữ ngôi thứ ba số ít)", role: "s" },
            { text: "goes", label: "Verb (Thêm -es vì chủ ngữ số ít và kết thúc bằng o)", role: "v" },
            { text: "to work", label: "Prepositional Phrase (Bổ nghĩa nơi chốn)", role: "o" },
            { text: "by bus every day", label: "Adverbial (Trạng ngữ chỉ cách thức, tần suất)", role: "adv" }
          ],
          note: "Chủ ngữ 'He' (số ít), động từ 'go' kết thúc bằng 'o' nên phải thêm 'es' thành 'goes'."
        },
        {
          eng: "A student goes to school from Monday to Saturday.",
          viet: "Một học sinh đi học từ thứ Hai đến thứ Bảy.",
          tokens: [
            { text: "A student", label: "Subject (Danh từ số ít)", role: "s" },
            { text: "goes", label: "Verb (Thêm -es vì chủ ngữ số ít và kết thúc bằng o)", role: "v" },
            { text: "to school", label: "Prepositional Phrase", role: "o" },
            { text: "from Monday to Saturday", label: "Adverbial (Trạng ngữ thời gian)", role: "adv" }
          ],
          note: "Chủ ngữ số ít 'A student' nên động từ 'go' phải thêm 'es' thành 'goes'."
        },
        {
          eng: "They have three children.",
          viet: "Họ có 3 người con.",
          tokens: [
            { text: "They", label: "Subject (Chủ ngữ số nhiều)", role: "s" },
            { text: "have", label: "Verb (Giữ nguyên mẫu)", role: "v" },
            { text: "three children", label: "Object (Tân ngữ số nhiều)", role: "o" }
          ],
          note: "Chủ ngữ số nhiều 'They' đi với động từ 'have' nguyên mẫu."
        },
        {
          eng: "She has two children.",
          viet: "Cô ấy có 2 người con.",
          tokens: [
            { text: "She", label: "Subject (Số ít)", role: "s" },
            { text: "has", label: "Verb (Biến đổi từ 'have')", role: "v" },
            { text: "two children", label: "Object (Tân ngữ số nhiều)", role: "o" }
          ],
          note: "Chủ ngữ số ít 'She' nên mượn dạng chia đặc biệt 'has' của động từ 'have'."
        },
        {
          eng: "He watches television in the evening.",
          viet: "Anh ấy xem tivi vào buổi tối.",
          tokens: [
            { text: "He", label: "Subject (Ngôi thứ ba số ít)", role: "s" },
            { text: "watches", label: "Verb (Thêm -es)", role: "v" },
            { text: "television", label: "Object", role: "o" },
            { text: "in the evening", label: "Time Adverbial", role: "adv" }
          ],
          note: "Động từ 'watch' kết thúc bằng 'ch' nên khi đi với chủ ngữ số ít 'He', ta thêm '-es' thành 'watches'."
        },
        {
          eng: "She studies English on weekends.",
          viet: "Cô ấy học tiếng Anh vào cuối tuần.",
          tokens: [
            { text: "She", label: "Subject (Ngôi thứ ba số ít)", role: "s" },
            { text: "studies", label: "Verb (Đổi y thành i rồi thêm -es)", role: "v" },
            { text: "English", label: "Object", role: "o" },
            { text: "on weekends", label: "Time Adverbial", role: "adv" }
          ],
          note: "Động từ 'study' kết thúc bằng 'phụ âm + y' (d + y), nên khi đi với chủ ngữ số ít 'She', ta đổi 'y' thành 'i' rồi thêm '-es' thành 'studies'."
        },
        {
          eng: "The boy plays soccer after school.",
          viet: "Cậu bé chơi đá bóng sau giờ học.",
          tokens: [
            { text: "The boy", label: "Subject (Danh từ số ít)", role: "s" },
            { text: "plays", label: "Verb (Chỉ thêm -s)", role: "v" },
            { text: "soccer", label: "Object", role: "o" },
            { text: "after school", label: "Time Adverbial", role: "adv" }
          ],
          note: "Động từ 'play' kết thúc bằng 'nguyên âm + y' (a + y), nên khi đi với chủ ngữ số ít 'The boy', ta chỉ việc thêm '-s' thành 'plays' (không đổi thành ies)."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi 1: Thêm 's' sai quy tắc nguyên âm + y.</strong></p>
        <p>Sai: <em>"He plaies football."</em></p>
        <p>Đúng: <em>"He plays football."</em> (Trước 'y' là nguyên âm 'a', chỉ thêm 's').</p>
        <p>🔴 <strong>Lỗi 2: Quên đổi 'have' sang 'has' cho chủ ngữ số ít.</strong></p>
        <p>Sai: <em>"She haves a nice cat."</em> hoặc <em>"She have a nice cat."</em></p>
        <p>Đúng: <em>"She has a nice cat."</em> (have biến đổi đặc biệt thành has đối với ngôi thứ ba số ít).</p>
        <p>🔴 <strong>Lỗi 3: Quên thêm s/es cho chủ ngữ số ít.</strong></p>
        <p>Sai: <em>"He work hard."</em> hoặc <em>"My mother love cooking."</em></p>
        <p>Đúng: <em>"He works hard."</em> hoặc <em>"My mother loves cooking."</em></p>
      `,
      tips: `
        <p>💡 <strong>Mẹo nhớ quy tắc thêm ES (động từ tận cùng bằng âm gió):</strong></p>
        <p>Hãy học thuộc câu thần chú: <strong>"Oanh Sông Xanh Chờ Sóng Dữ"</strong> tương ứng với các chữ cái tận cùng: <strong>O, S, X, CH, SH, Z</strong>.</p>
        <ul>
          <li>g<strong>o</strong> ➔ go<strong>es</strong></li>
          <li>mi<strong>ss</strong> ➔ miss<strong>es</strong></li>
          <li>mi<strong>x</strong> ➔ mix<strong>es</strong></li>
          <li>wat<strong>ch</strong> ➔ watch<strong>es</strong></li>
          <li>wa<strong>sh</strong> ➔ wash<strong>es</strong></li>
          <li>bu<strong>zz</strong> ➔ buzz<strong>es</strong></li>
        </ul>
        <p>💡 <strong>Mẹo với đuôi Y:</strong></p>
        <ul>
          <li>Trước <strong>y</strong> là <strong>phụ âm</strong> (như d, r, t...) ➔ Đổi <strong>y</strong> thành <strong>i</strong> rồi thêm <strong>-es</strong> (stud<strong>y</strong> ➔ stud<strong>ies</strong>, cr<strong>y</strong> ➔ cr<strong>ies</strong>).</li>
          <li>Trước <strong>y</strong> là <strong>nguyên âm</strong> (u, e, o, a, i - uể oải) ➔ Chỉ cần thêm <strong>-s</strong> (pla<strong>y</strong> ➔ pla<strong>ys</strong>, bu<strong>y</strong> ➔ bu<strong>ys</strong>).</li>
        </ul>
      `
    },

    "1-3": {
      chapter: "Chương 1: Hiện tại đơn",
      lessonNum: 3,
      shortTitle: "Bài 3: Động từ thường - Phủ định & Hỏi",
      title: "Bài 3: Động từ thường - Thể phủ định & Nghi vấn",
      explanation: `
        <p>Để tạo câu phủ định và nghi vấn cho động từ thường, chúng ta mượn <strong>trợ động từ Do/Does</strong>.</p>
        <p><strong>A. Phủ Định:</strong></p>
        <p>Cấu trúc: <code>S + don't/ doesn't + V (nguyên mẫu)</code></p>
        <ul>
          <li><code>S = I, We, You, They, danh từ số nhiều</code> ➔ Ta mượn trợ động từ <code>do + not</code> (viết tắt là <strong>don't</strong>).</li>
          <li><code>S = He, She, It, tên riêng, danh từ số ít</code> ➔ Ta mượn trợ động từ <code>does + not</code> (viết tắt là <strong>doesn't</strong>).</li>
          <li><strong>🚨 Quyết định cực quan trọng:</strong> Động từ (V) theo sau ở dạng <strong>NGUYÊN MẪU không chia</strong>.</li>
        </ul>
        <p><strong>B. Câu Hỏi (Nghi vấn):</strong></p>
        <p>Cấu trúc: <code>Do/ Does + S + V (nguyên mẫu)?</code></p>
        <p>Trả lời:</p>
        <ul>
          <li><strong>Yes</strong>, I/we/you/they + <strong>do</strong>. / <strong>No</strong>, I/we/you/they + <strong>don't</strong>.</li>
          <li><strong>Yes</strong>, he/she/it + <strong>does</strong>. / <strong>No</strong>, he/she/it + <strong>doesn't</strong>.</li>
        </ul>
        <p><em>Lưu ý:</em> Trợ động từ Do/Does đứng trước chủ ngữ, động từ chính trong câu ở dạng NGUYÊN MẪU.</p>
      `,
      examples: [
        {
          eng: "We don't go to school on Sunday.",
          viet: "Chúng tôi không đến trường vào ngày Chủ Nhật.",
          tokens: [
            { text: "We", label: "Subject (Chủ ngữ số nhiều)", role: "s" },
            { text: "don't", label: "Auxiliary Verb (Trợ động từ phủ định)", role: "aux" },
            { text: "go", label: "Main Verb (Động từ nguyên mẫu)", role: "v" },
            { text: "to school on Sunday", label: "Adverbial", role: "adv" }
          ],
          note: "Chủ ngữ là 'We' nên ta mượn 'don't', động từ 'go' giữ nguyên mẫu."
        },
        {
          eng: "She doesn't visit her grandparents regularly.",
          viet: "Cô ấy không đến thăm ông bà thường xuyên.",
          tokens: [
            { text: "She", label: "Subject (Ngôi số ít)", role: "s" },
            { text: "doesn't", label: "Auxiliary Verb (Trợ động từ phủ định số ít)", role: "aux" },
            { text: "visit", label: "Main Verb (Động từ nguyên mẫu không chia)", role: "v" },
            { text: "her grandparents regularly", label: "Object & Adverbial", role: "o" }
          ],
          note: "Chủ ngữ là 'She' nên mượn 'doesn't', động từ 'visit' bỏ chia -s/-es để về nguyên mẫu."
        },
        {
          eng: "Do you stay with your family?",
          viet: "Bạn có ở cùng với gia đình không?",
          tokens: [
            { text: "Do", label: "Auxiliary (Trợ động từ hỏi)", role: "aux" },
            { text: "you", label: "Subject (Chủ ngữ ngôi thứ hai)", role: "s" },
            { text: "stay", label: "Main Verb (Động từ nguyên mẫu)", role: "v" },
            { text: "with your family", label: "Prepositional Phrase", role: "o" }
          ],
          note: "Chủ ngữ là 'you' nên ta mượn trợ động từ 'Do' đứng đầu, động từ chính 'stay' ở dạng nguyên mẫu. Trả lời: Yes, I do. / No, I don't."
        },
        {
          eng: "Does your sister like reading books?",
          viet: "Chị của bạn có thích đọc sách không?",
          tokens: [
            { text: "Does", label: "Auxiliary (Trợ động từ hỏi)", role: "aux" },
            { text: "your sister", label: "Subject (Tương ứng ngôi she)", role: "s" },
            { text: "like", label: "Main Verb (Động từ nguyên mẫu)", role: "v" },
            { text: "reading books", label: "Object Clause (Cụm tân ngữ)", role: "o" }
          ],
          note: "Chủ ngữ 'your sister' là số ít nên mượn trợ động từ 'Does' đứng đầu, 'like' nguyên mẫu."
        },
        {
          eng: "He doesn't have a car.",
          viet: "Anh ấy không có ô tô.",
          tokens: [
            { text: "He", label: "Subject (Số ít)", role: "s" },
            { text: "doesn't", label: "Auxiliary Verb (Trợ động từ phủ định)", role: "aux" },
            { text: "have", label: "Main Verb (Đưa về nguyên mẫu have)", role: "v" },
            { text: "a car", label: "Object", role: "o" }
          ],
          note: "Chủ ngữ 'He' số ít mượn trợ động từ phủ định 'doesn't'. Động từ chính đưa về nguyên mẫu là 'have' chứ không dùng 'has'."
        },
        {
          eng: "I don't drink coffee in the morning.",
          viet: "Tôi không uống cà phê vào buổi sáng.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "don't", label: "Auxiliary Verb (Trợ động từ phủ định)", role: "aux" },
            { text: "drink", label: "Main Verb (Nguyên mẫu)", role: "v" },
            { text: "coffee", label: "Object", role: "o" },
            { text: "in the morning", label: "Time Adverbial", role: "adv" }
          ],
          note: "Chủ ngữ 'I' mượn trợ động từ phủ định 'don't', động từ 'drink' giữ nguyên mẫu."
        },
        {
          eng: "They don't like playing computer games.",
          viet: "Họ không thích chơi trò chơi điện tử.",
          tokens: [
            { text: "They", label: "Subject (Số nhiều)", role: "s" },
            { text: "don't", label: "Auxiliary Verb", role: "aux" },
            { text: "like", label: "Main Verb", role: "v" },
            { text: "playing computer games", label: "Object Phrase", role: "o" }
          ],
          note: "Chủ ngữ số nhiều 'They' mượn trợ động từ phủ định 'don't', động từ 'like' nguyên mẫu."
        },
        {
          eng: "Does he study English every day?",
          viet: "Anh ấy có học tiếng Anh mỗi ngày không?",
          tokens: [
            { text: "Does", label: "Auxiliary Verb (Đảo lên trước)", role: "aux" },
            { text: "he", label: "Subject", role: "s" },
            { text: "study", label: "Main Verb (Nguyên mẫu)", role: "v" },
            { text: "English", label: "Object", role: "o" },
            { text: "every day", label: "Time Adverbial", role: "adv" }
          ],
          note: "Câu nghi vấn với chủ ngữ 'he' mượn 'Does' đứng đầu, động từ 'study' rút về nguyên mẫu. Trả lời: Yes, he does. / No, he doesn't."
        },
        {
          eng: "Do they play football on Saturdays?",
          viet: "Họ có chơi bóng đá vào các ngày Thứ Bảy không?",
          tokens: [
            { text: "Do", label: "Auxiliary Verb (Đảo lên trước)", role: "aux" },
            { text: "they", label: "Subject (Số nhiều)", role: "s" },
            { text: "play", label: "Main Verb (Nguyên mẫu)", role: "v" },
            { text: "football", label: "Object", role: "o" },
            { text: "on Saturdays", label: "Time Adverbial", role: "adv" }
          ],
          note: "Câu nghi vấn với chủ ngữ số nhiều 'they' mượn 'Do' đứng đầu, động từ 'play' nguyên mẫu. Trả lời: Yes, they do. / No, they don't."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi 1: Vẫn chia động từ thêm s/es sau doesn't.</strong></p>
        <p>Sai: <em>"She doesn't goes to school."</em> hoặc <em>"Does he lives here?"</em></p>
        <p>Đúng: <em>"She doesn't go to school."</em> hoặc <em>"Does he live here?"</em> (Khi đã mượn trợ động từ <strong>do/does/don't/doesn't</strong>, động từ chính bắt buộc phải đưa về <strong>nguyên mẫu không chia</strong>).</p>
        <p>🔴 <strong>Lỗi 2: Dùng trợ động từ không phù hợp chủ ngữ.</strong></p>
        <p>Sai: <em>"Does you live here?"</em> hoặc <em>"They doesn't like milk."</em></p>
        <p>Đúng: <em>"Do you live here?"</em> hoặc <em>"They don't like milk."</em></p>
        <p>🔴 <strong>Lỗi 3: Dùng To Be làm trợ động từ cho động từ thường.</strong></p>
        <p>Sai: <em>"Are you like coffee?"</em> hoặc <em>"She isn't like tea."</em></p>
        <p>Đúng: <em>"Do you like coffee?"</em> hoặc <em>"She doesn't like tea."</em></p>
      `,
      tips: `
        <p>💡 <strong>Quy tắc "Gánh vác" cực dễ nhớ cho người mới học:</strong></p>
        <p>Trợ động từ <strong>Do/Does/Don't/Doesn't</strong> giống như những người hùng đã gánh hết phần chia động từ của cả câu. Vì vậy, động từ chính phía sau sẽ được "giải thoát" và đứng ở dạng <strong>NGUYÊN MẪU</strong> hoàn toàn.</p>
        <ul>
          <li>Chủ ngữ số nhiều (I, We, You, They, danh từ số nhiều) ➔ mượn <strong>Do / Don't</strong>.</li>
          <li>Chủ ngữ số ít (He, She, It, danh từ số ít, tên riêng) ➔ mượn <strong>Does / Doesn't</strong>.</li>
        </ul>
      `
    },

    "1-4": {
      chapter: "Chương 1: Hiện tại đơn",
      lessonNum: 4,
      shortTitle: "Bài 4: Cách dùng & Dấu hiệu",
      title: "Bài 4: Cách sử dụng & Dấu hiệu nhận biết thì Hiện tại đơn",
      explanation: `
        <p><strong>A. Cách sử dụng:</strong></p>
        <ol>
          <li><strong>Thói quen hoặc hành động lặp đi lặp lại:</strong> Diễn tả một hành động xảy ra thường xuyên hoặc thói quen hàng ngày.<br>
            Ví dụ: <em>I brush my teeth every day.</em> (Tôi đánh răng mỗi ngày). Vì chủ ngữ là “I” nên động từ “brush” ở dạng nguyên mẫu.</li>
          <li><strong>Sự thật hiển nhiên, chân lý:</strong> Diễn tả sự thật của tự nhiên, khoa học luôn đúng.<br>
            Ví dụ: <em>The sun rises in the East and sets in the West.</em> (Mặt trời mọc hướng Đông và lặn hướng Tây).</li>
          <li><strong>Lịch trình, thời gian biểu rõ ràng:</strong> Diễn tả sự việc sẽ xảy ra theo thời gian biểu như giờ tàu chạy, máy bay.<br>
            Ví dụ: <em>The train leaves at 6 pm today.</em> (Tàu rời đi lúc 6 giờ chiều nay).</li>
          <li><strong>Suy nghĩ, cảm xúc, cảm giác:</strong> Diễn tả suy nghĩ nhận thức tức thời.<br>
            Ví dụ: <em>I think/ believe/ hope that your brother is a good person.</em> (Tôi nghĩ anh trai bạn là người tốt).</li>
        </ol>
        <p><strong>B. Dấu hiệu nhận biết:</strong></p>
        <ul>
          <li><strong>Trạng từ chỉ tần suất:</strong> <em>Always</em> (luôn luôn), <em>usually</em> (thường xuyên), <em>often</em> (thường), <em>frequently</em> (thường xuyên), <em>sometimes</em> (thỉnh thoảng), <em>seldom</em> (hiếm khi), <em>rarely</em> (hiếm khi), <em>hardly</em> (hiếm khi), <em>never</em> (không bao giờ), <em>generally</em> (nhìn chung), <em>regularly</em> (thường xuyên).</li>
          <li><strong>Cụm từ chỉ chu kỳ:</strong> <em>Every day, every week, every month, every year, every quarter...</em></li>
          <li><strong>Cụm từ chỉ tần suất cụ thể:</strong> <em>Once/ twice/ three times... a day/ week/ month/ year...</em></li>
          <li><strong>Vị trí của trạng từ tần suất:</strong> Đứng <strong>trước động từ thường</strong>, đứng <strong>sau động từ “to be” và trợ động từ</strong>.</li>
        </ul>
      `,
      examples: [
        {
          eng: "I brush my teeth every day.",
          viet: "Tôi đánh răng mỗi ngày.",
          tokens: [
            { text: "I", label: "Subject (Chủ ngữ ngôi thứ nhất)", role: "s" },
            { text: "brush", label: "Verb (Động từ nguyên mẫu)", role: "v" },
            { text: "my teeth", label: "Object (Tân ngữ)", role: "o" },
            { text: "every day", label: "Adverbial (Trạng ngữ tần suất)", role: "adv" }
          ],
          note: "Hành động lặp đi lặp lại hàng ngày. Chủ ngữ 'I' nên động từ 'brush' ở dạng nguyên mẫu."
        },
        {
          eng: "My father usually goes to work by motorbike.",
          viet: "Bố tôi thường đi làm bằng xe máy.",
          tokens: [
            { text: "My father", label: "Subject (Ngôi thứ ba số ít)", role: "s" },
            { text: "usually", label: "Adverb (Trạng từ tần suất đứng trước động từ)", role: "adv" },
            { text: "goes", label: "Verb (Thêm -es vì kết thúc bằng -o)", role: "v" },
            { text: "to work by motorbike", label: "Adverbial", role: "o" }
          ],
          note: "Thói quen đi làm thường xuyên. Chủ ngữ 'My father' là số ít nên 'go' chia thành 'goes'."
        },
        {
          eng: "The sun rises in the East and sets in the West.",
          viet: "Mặt trời mọc hướng Đông và lặn hướng Tây.",
          tokens: [
            { text: "The sun", label: "Subject (Chủ ngữ số ít)", role: "s" },
            { text: "rises", label: "Verb 1 (Thêm -s)", role: "v" },
            { text: "in the East", label: "Adverbial 1", role: "adv" },
            { text: "and sets", label: "Verb 2 (Thêm -s)", role: "v" },
            { text: "in the West", label: "Adverbial 2", role: "adv" }
          ],
          note: "Sự thật hiển nhiên/chân lý. Chủ ngữ 'The sun' số ít nên 'rise' thành 'rises' và 'set' thành 'sets'."
        },
        {
          eng: "The train leaves at 6 pm today.",
          viet: "Tàu sẽ rời đi vào lúc 6 giờ chiều ngày hôm nay.",
          tokens: [
            { text: "The train", label: "Subject (Số ít)", role: "s" },
            { text: "leaves", label: "Verb (Thêm -s)", role: "v" },
            { text: "at 6 pm today", label: "Adverbial (Thời gian theo lịch trình)", role: "adv" }
          ],
          note: "Sự việc xảy ra theo lịch trình, thời gian biểu cố định nên dùng Hiện tại đơn."
        },
        {
          eng: "The flight starts at 10 am tomorrow.",
          viet: "Chuyến bay sẽ bắt đầu vào lúc 10 giờ sáng ngày mai.",
          tokens: [
            { text: "The flight", label: "Subject (Số ít)", role: "s" },
            { text: "starts", label: "Verb (Thêm -s)", role: "v" },
            { text: "at 10 am tomorrow", label: "Adverbial (Thời gian theo lịch trình)", role: "adv" }
          ],
          note: "Lịch trình bay cố định trong tương lai vẫn chia ở Hiện tại đơn."
        },
        {
          eng: "He feels very tired now.",
          viet: "Bây giờ anh ấy cảm thấy rất mệt.",
          tokens: [
            { text: "He", label: "Subject (Số ít)", role: "s" },
            { text: "feels", label: "Verb (Thêm -s chỉ cảm giác trạng thái)", role: "v" },
            { text: "very tired now", label: "Complement & Time", role: "o" }
          ],
          note: "'feel' diễn tả cảm giác tức thời, chia ở Hiện tại đơn. Chủ ngữ 'He' số ít nên thêm 's'."
        },
        {
          eng: "She rarely goes to school by bus.",
          viet: "Cô ấy hiếm khi đi học bằng xe bus.",
          tokens: [
            { text: "She", label: "Subject", role: "s" },
            { text: "rarely", label: "Adverb (Đứng trước động từ thường)", role: "adv" },
            { text: "goes", label: "Verb (Chia ngôi số ít)", role: "v" },
            { text: "to school by bus", label: "Adverbial", role: "o" }
          ],
          note: "Trạng từ tần suất 'rarely' đứng trước động từ thường 'goes'."
        },
        {
          eng: "He is usually at home in the evening.",
          viet: "Anh ta thường ở nhà vào buổi tối.",
          tokens: [
            { text: "He", label: "Subject", role: "s" },
            { text: "is", label: "To Be", role: "be" },
            { text: "usually", label: "Adverb (Đứng sau động từ To Be)", role: "adv" },
            { text: "at home in the evening", label: "Complement & Time", role: "o" }
          ],
          note: "Trạng từ tần suất 'usually' phải đứng sau động từ To Be 'is'."
        },
        {
          eng: "I don't often go out with my friends.",
          viet: "Tôi không thường đi chơi với bạn bè.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "don't", label: "Auxiliary Verb", role: "aux" },
            { text: "often", label: "Adverb (Đứng giữa trợ động từ và động từ thường)", role: "adv" },
            { text: "go out with my friends", label: "Verb & Prepositional Phrase", role: "v" }
          ],
          note: "Trạng từ tần suất 'often' đứng sau trợ động từ phủ định 'don't' và đứng trước động từ thường 'go'."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi 1: Dùng thì tương lai thay cho Hiện tại đơn khi nói lịch trình cố định.</strong></p>
        <p>Chưa nên dùng khi luyện mẫu này: <em>"The train will leave at 6 PM today."</em></p>
        <p>Đúng hơn khi học thì: <em>"The train leaves at 6 PM today."</em> (Lịch trình cố định của phương tiện công cộng, rạp phim, trường học... thường dùng Hiện tại đơn. <em>Will leave</em> không sai trong mọi ngữ cảnh, nhưng không phải lựa chọn chuẩn để nhận biết cấu trúc này).</p>
        <p>🔴 <strong>Lỗi 2: Đặt sai vị trí của trạng từ chỉ tần suất (always, usually, often...).</strong></p>
        <p>Sai: <em>"I go always to school."</em> hoặc <em>"He always is late."</em></p>
        <p>Đúng: <em>"I always go to school."</em> hoặc <em>"He is always late."</em></p>
      `,
      tips: `
        <p>💡 <strong>Công thức thần tốc nhớ vị trí trạng từ tần suất:</strong></p>
        <ul>
          <li>Đứng <strong>TRƯỚC động từ thường</strong>: <code>S + Trạng từ + V</code> (Ví dụ: I <strong>usually get up</strong> early).</li>
          <li>Đứng <strong>SAU động từ To Be</strong>: <code>S + To Be + Trạng từ</code> (Ví dụ: She <strong>is never</strong> late).</li>
          <li>Đứng <strong>GIỮA trợ động từ và động từ chính</strong>: <code>S + don't/doesn't + Trạng từ + V</code> (Ví dụ: We <strong>don't often go</strong> out).</li>
        </ul>
      `
    },

    // CHAPTER 2: PRESENT CONTINUOUS
    "2-5": {
      chapter: "Chương 2: Hiện tại tiếp diễn",
      lessonNum: 5,
      shortTitle: "Bài 5: Cấu trúc & Cách dùng",
      title: "Bài 5: Định nghĩa, Cấu trúc & Cách sử dụng Hiện tại tiếp diễn",
      explanation: `
        <p><strong>I. Định Nghĩa:</strong></p>
        <p>Thì hiện tại tiếp diễn (Present continuous tense) dùng để diễn tả những sự việc xảy ra ngay lúc chúng ta nói hay xung quanh thời điểm nói, và hành động chưa chấm dứt (còn tiếp tục diễn ra).</p>
        <p><strong>II. Cấu Trúc:</strong></p>
        <ul>
          <li><strong>Khẳng định (+):</strong> <code>S + am/ is/ are + V-ing</code><br>
            <em>(🚨 Chú ý: Động từ tiếp diễn luôn cần đủ cả hai thành phần: To Be và V-ing).</em></li>
          <li><strong>Phủ định (-):</strong> <code>S + am/ is/ are + not + V-ing</code><br>
            <em>(Rút gọn: is not = isn't, are not = aren't, am not không viết tắt).</em></li>
          <li><strong>Câu hỏi (?):</strong> <code>Am/ Is/ Are + S + V-ing?</code><br>
            <em>Trả lời: Yes, S + am/is/are. / No, S + am not/isn't/aren't.</em></li>
        </ul>
        <p><strong>III. Cách sử dụng chính:</strong></p>
        <ol>
          <li><strong>Ngay tại thời điểm nói:</strong> Diễn tả hành động đang thực sự diễn ra.<br>
            Ví dụ: <em>We are studying Maths now.</em></li>
          <li><strong>Xung quanh thời điểm nói:</strong> Hành động đang tiến hành nhưng không nhất thiết ngay lúc đang mở miệng nói.<br>
            Ví dụ: <em>I am looking for a job.</em> (Tôi đang tìm việc dạo gần đây).</li>
          <li><strong>Kế hoạch tương lai đã lên lịch sẵn:</strong> Diễn tả hành động chắc chắn sẽ xảy ra trong tương lai có căn cứ.<br>
            Ví dụ: <em>I am flying to New York tomorrow. (Tôi đã mua vé từ hôm qua).</em></li>
          <li><strong>Sự không hài lòng, phàn nàn:</strong> Sử dụng kèm trạng từ <strong>always, continually</strong>.<br>
            Ví dụ: <em>He is always coming late!</em> (Sao lúc nào anh ta cũng đến muộn).</li>
        </ol>
        <p><strong>IV. Dấu hiệu nhận biết:</strong></p>
        <ul>
          <li>Trạng từ thời gian: <em>Now, Right now, At the moment, At present, At + giờ cụ thể (at 12 o'clock).</em></li>
          <li>Từ mệnh lệnh thu hút chú ý: <em>Look!</em> (Nhìn kìa!), <em>Listen!</em> (Nghe này!), <em>Keep silent!</em> (Hãy im lặng!).</li>
        </ul>
      `,
      examples: [
        {
          eng: "I am playing badminton with my friends.",
          viet: "Tôi đang chơi cầu lông với bạn tôi.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "am", label: "To Be (Chia ngôi thứ nhất)", role: "be" },
            { text: "playing", label: "Verb-ing (Động từ chính)", role: "v" },
            { text: "badminton with my friends", label: "Object Phrase", role: "o" }
          ],
          note: "Đủ To Be 'am' và V-ing 'playing' để mô tả hành động đang diễn ra."
        },
        {
          eng: "Peter is cooking with his mother.",
          viet: "Peter đang nấu ăn với mẹ của anh ấy.",
          tokens: [
            { text: "Peter", label: "Subject (Ngôi thứ ba số ít)", role: "s" },
            { text: "is", label: "To Be (Số ít)", role: "be" },
            { text: "cooking", label: "Verb-ing", role: "v" },
            { text: "with his mother", label: "Prepositional Phrase", role: "o" }
          ],
          note: "Chủ ngữ là tên riêng số ít 'Peter' đi với động từ To Be là 'is'."
        },
        {
          eng: "We are studying English.",
          viet: "Chúng tôi đang học tiếng Anh.",
          tokens: [
            { text: "We", label: "Subject (Số nhiều)", role: "s" },
            { text: "are", label: "To Be (Số nhiều)", role: "be" },
            { text: "studying", label: "Verb-ing", role: "v" },
            { text: "English", label: "Object", role: "o" }
          ],
          note: "Chủ ngữ là 'We' nên động từ To Be chia là 'are'."
        },
        {
          eng: "I am not listening to music at the moment.",
          viet: "Tôi không nghe nhạc vào lúc này.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "am not", label: "To Be + Not (Không viết tắt)", role: "be" },
            { text: "listening to music", label: "Verb-ing & Object", role: "v" },
            { text: "at the moment", label: "Time Adverb (Dấu hiệu tiếp diễn)", role: "adv" }
          ],
          note: "Câu phủ định của chủ ngữ 'I' ta thêm 'not' sau 'am', không có dạng viết tắt của 'am not'."
        },
        {
          eng: "My sister isn't working now.",
          viet: "Bây giờ chị gái tôi không làm việc.",
          tokens: [
            { text: "My sister", label: "Subject (Số ít)", role: "s" },
            { text: "isn't", label: "To Be + Not (Viết tắt của is not)", role: "be" },
            { text: "working", label: "Verb-ing", role: "v" },
            { text: "now", label: "Time Adverb", role: "adv" }
          ],
          note: "Chủ ngữ số ít 'My sister' đi với 'isn't' ở câu phủ định."
        },
        {
          eng: "They aren't watching the TV at present.",
          viet: "Hiện tại họ không xem ti vi.",
          tokens: [
            { text: "They", label: "Subject (Số nhiều)", role: "s" },
            { text: "aren't", label: "To Be + Not (Viết tắt của are not)", role: "be" },
            { text: "watching", label: "Verb-ing", role: "v" },
            { text: "the TV at present", label: "Object & Time", role: "o" }
          ],
          note: "Chủ ngữ số nhiều 'They' đi với 'aren't' ở câu phủ định."
        },
        {
          eng: "Are you doing your homework?",
          viet: "Bạn đang làm bài tập về nhà phải không?",
          tokens: [
            { text: "Are", label: "To Be (Đảo lên đầu câu hỏi)", role: "be" },
            { text: "you", label: "Subject", role: "s" },
            { text: "doing", label: "Verb-ing", role: "v" },
            { text: "your homework", label: "Object", role: "o" }
          ],
          note: "Câu hỏi đảo động từ To Be 'Are' lên đầu. Trả lời: Yes, I am. / No, I am not."
        },
        {
          eng: "Is he going out with you?",
          viet: "Anh ấy đang đi chơi cùng bạn có phải không?",
          tokens: [
            { text: "Is", label: "To Be (Đảo lên đầu câu hỏi)", role: "be" },
            { text: "he", label: "Subject", role: "s" },
            { text: "going out", label: "Verb-ing", role: "v" },
            { text: "with you", label: "Prepositional Phrase", role: "o" }
          ],
          note: "Câu hỏi đảo động từ To Be 'Is' lên đầu. Trả lời: Yes, he is. / No, he isn't."
        },
        {
          eng: "She is walking to school at the moment.",
          viet: "Lúc này cô ấy đang đi bộ tới trường.",
          tokens: [
            { text: "She", label: "Subject", role: "s" },
            { text: "is walking", label: "To Be + V-ing", role: "v" },
            { text: "to school", label: "Prepositional Phrase", role: "o" },
            { text: "at the moment", label: "Time Adverb (Ngay tại thời điểm nói)", role: "adv" }
          ],
          note: "Hành động đi bộ đang thực tế diễn ra ngay lúc nói."
        },
        {
          eng: "I am working for BIDV company.",
          viet: "Tôi đang làm việc cho công ty BIDV.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "am working", label: "To Be + V-ing", role: "v" },
            { text: "for BIDV company", label: "Prepositional Phrase (Xung quanh thời điểm nói)", role: "o" }
          ],
          note: "Công việc này đã bắt đầu trước đó và đang tiếp tục diễn ra xung quanh thời điểm nói (không nhất thiết phải đang làm việc ngay lúc mở miệng nói)."
        },
        {
          eng: "Why are you always putting your dirty clothes on your bed?",
          viet: "Sao lúc nào con cũng để quần áo bẩn trên giường thế hả?",
          tokens: [
            { text: "Why are", label: "Question Word & To Be", role: "aux" },
            { text: "you", label: "Subject", role: "s" },
            { text: "always", label: "Adverb (Trạng từ tần suất chỉ sự phàn nàn)", role: "adv" },
            { text: "putting", label: "Verb-ing", role: "v" },
            { text: "your dirty clothes on your bed", label: "Object & Place", role: "o" }
          ],
          note: "Sử dụng thì tiếp diễn với 'always' để diễn đạt thái độ bực bội, phàn nàn."
        },
        {
          eng: "Listen! Someone is crying.",
          viet: "Nghe kìa! Ai đó đang khóc.",
          tokens: [
            { text: "Listen", label: "Command (Động từ gây chú ý)", role: "aux" },
            { text: "Someone", label: "Subject (Đại từ bất định số ít)", role: "s" },
            { text: "is", label: "To Be (Số ít)", role: "be" },
            { text: "crying", label: "Verb-ing", role: "v" }
          ],
          note: "Đứng sau từ mệnh lệnh 'Listen!' báo hiệu hành động đang diễn ra tại thời điểm nói."
        },
        {
          eng: "Keep silent! The baby is sleeping.",
          viet: "Hãy im lặng! Em bé đang ngủ.",
          tokens: [
            { text: "Keep silent", label: "Command (Động từ gây chú ý)", role: "aux" },
            { text: "The baby", label: "Subject (Số ít)", role: "s" },
            { text: "is", label: "To Be", role: "be" },
            { text: "sleeping", label: "Verb-ing", role: "v" }
          ],
          note: "Mệnh lệnh 'Keep silent!' báo hiệu hành động bé đang ngủ đang diễn ra và cần sự yên tĩnh."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi 1: Thiếu động từ To Be trong cấu trúc tiếp diễn.</strong></p>
        <p>Sai: <em>"They playing soccer."</em> hoặc <em>"I writing a letter."</em></p>
        <p>Đúng: <em>"They are playing soccer."</em> hoặc <em>"I am writing a letter."</em></p>
        <p>🔴 <strong>Lỗi 2: Thiếu đuôi -ing sau động từ chính.</strong></p>
        <p>Sai: <em>"She is play the piano."</em></p>
        <p>Đúng: <em>"She is playing the piano."</em></p>
        <p>🔴 <strong>Lỗi 3: Chia tiếp diễn khi đang nói một sự thật hiển nhiên/quy luật chung.</strong></p>
        <p>Sai khi nói quy luật chung: <em>"The sun is rising in the East."</em></p>
        <p>Đúng: <em>"The sun rises in the East."</em> (Sự thật hiển nhiên dùng Hiện tại đơn vì nói về quy luật luôn đúng, không phải một hành động đang diễn ra trước mắt).</p>
      `,
      tips: `
        <p>💡 <strong>Quy tắc "Song Hành" bắt buộc:</strong></p>
        <p>Thì Hiện tại tiếp diễn luôn yêu cầu phải có cả 2 yếu tố song song: <strong>To Be (am/is/are)</strong> và <strong>V-ing</strong>. Hãy tưởng tượng chúng là đôi giày, mất một trong hai chiếc thì không thể đi được!</p>
        <p>💡 <strong>Dấu hiệu hành động đang diễn ra (Hãy tìm các từ sau):</strong></p>
        <ul>
          <li>Từ chỉ thời gian: <em>now, right now, at the moment, at present</em>.</li>
          <li>Mệnh lệnh gây chú ý ở đầu câu: <em>Look!</em> (Nhìn kìa!), <em>Listen!</em> (Nghe kìa!), <em>Be quiet! / Keep silent!</em> (Trật tự nào!).</li>
        </ul>
      `
    },

    "2-6": {
      chapter: "Chương 2: Hiện tại tiếp diễn",
      lessonNum: 6,
      shortTitle: "Bài 6: Quy tắc thêm -ing (Spelling)",
      title: "Bài 6: Quy tắc thêm đuôi -ing sau động từ",
      explanation: `
        <p>Khi thêm đuôi <strong>-ing</strong> vào sau động từ thường, chúng ta tuân thủ các quy tắc chính tả (spelling) sau đây:</p>
        <ol>
          <li><strong>Thông thường:</strong> Chúng ta chỉ việc thêm đuôi <code>-ing</code> vào sau động từ (learn ➔ learning, look ➔ looking, work ➔ working, sing ➔ singing).</li>
          <li><strong>Động từ tận cùng bằng "e" đơn:</strong> Ta bỏ <code>e</code> rồi mới thêm <code>ing</code> (take ➔ taking, dance ➔ dancing, age ➔ aging, make ➔ making, ride ➔ riding).</li>
          <li><strong>Động từ tận cùng bằng "ee":</strong> Chỉ việc thêm <code>ing</code> giữ nguyên (see ➔ seeing, agree ➔ agreeing, free ➔ freeing).</li>
          <li><strong>Động từ tận cùng bằng "ie":</strong> Ta biến <code>ie</code> thành <code>y</code> rồi thêm <code>ing</code> (lie ➔ lying, die ➔ dying).<br>
            <em>Lưu ý: Những động từ tận cùng bằng "y" vẫn giữ nguyên "y" khi thêm "ing" (carry ➔ carrying, study ➔ studying, hurry ➔ hurrying, stay ➔ staying).</em></li>
          <li><strong>Gấp đôi phụ âm cuối (1 âm tiết):</strong> Với động từ 1 âm tiết, tận cùng bằng “Nguyên âm đơn + Phụ âm” (Trừ các phụ âm h, w, x, y), ta gấp đôi phụ âm rồi mới thêm <code>ing</code> (win ➔ winning, stop ➔ stopping, shop ➔ shopping, run ➔ running).<br>
            <em>Lưu ý: Tận cùng bằng h, w, x, y giữ nguyên (fix ➔ fixing, snow ➔ snowing, mix ➔ mixing, play ➔ playing).</em></li>
          <li><strong>Với động từ 2 âm tiết:</strong> Nếu trọng âm rơi vào âm tiết cuối, tận cùng bằng “nguyên âm + phụ âm”, ta cũng gấp đôi phụ âm cuối rồi thêm <code>ing</code> (prefer ➔ preferring, begin ➔ beginning, transfer ➔ transferring, travel ➔ travelling hoặc traveling).</li>
          <li><strong>Tận cùng là "C":</strong> Bạn phải thêm chữ <code>K</code> ở cuối trước khi thêm <code>ing</code> (traffic ➔ trafficking, mimic ➔ mimicking, panic ➔ panicking).</li>
        </ol>
      `,
      examples: [
        {
          eng: "I am learning English now.",
          viet: "Bây giờ tôi đang học tiếng Anh.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "am", label: "To Be", role: "be" },
            { text: "learning", label: "Verb-ing (Thêm ing thông thường)", role: "v" },
            { text: "English", label: "Object", role: "o" },
            { text: "now", label: "Time Adverb", role: "adv" }
          ],
          note: "Quy tắc 1: Động từ thường 'learn' chỉ việc thêm '-ing' thành 'learning'."
        },
        {
          eng: "She is making a cake in the kitchen.",
          viet: "Cô ấy đang làm bánh ở trong bếp.",
          tokens: [
            { text: "She", label: "Subject", role: "s" },
            { text: "is", label: "To Be", role: "be" },
            { text: "making", label: "Verb-ing (Bỏ e thêm ing)", role: "v" },
            { text: "a cake", label: "Object", role: "o" },
            { text: "in the kitchen", label: "Adverb of Place", role: "adv" }
          ],
          note: "Quy tắc 2: Động từ 'make' tận cùng là 'e' đơn, ta bỏ 'e' rồi mới thêm '-ing' thành 'making'."
        },
        {
          eng: "They are dancing gracefully.",
          viet: "Họ đang khiêu vũ một cách duyên dáng.",
          tokens: [
            { text: "They", label: "Subject", role: "s" },
            { text: "are", label: "To Be", role: "be" },
            { text: "dancing", label: "Verb-ing (Bỏ e thêm ing)", role: "v" },
            { text: "gracefully", label: "Adverb of Manner", role: "adv" }
          ],
          note: "Quy tắc 2: Động từ 'dance' tận cùng là 'e' đơn, bỏ 'e' thêm '-ing' thành 'dancing'."
        },
        {
          eng: "We are seeing a doctor tomorrow.",
          viet: "Ngày mai chúng tôi sẽ đi khám bác sĩ.",
          tokens: [
            { text: "We", label: "Subject", role: "s" },
            { text: "are", label: "To Be", role: "be" },
            { text: "seeing", label: "Verb-ing (Giữ nguyên ee)", role: "v" },
            { text: "a doctor", label: "Object", role: "o" },
            { text: "tomorrow", label: "Time Adverb (Kế hoạch tương lai)", role: "adv" }
          ],
          note: "Quy tắc 3: Động từ 'see' tận cùng là 'ee', ta giữ nguyên 'ee' và thêm trực tiếp '-ing' thành 'seeing'."
        },
        {
          eng: "The old man is dying of cancer.",
          viet: "Ông lão đang cận kề cái chết vì bệnh ung thư.",
          tokens: [
            { text: "The old man", label: "Subject", role: "s" },
            { text: "is", label: "To Be", role: "be" },
            { text: "dying", label: "Verb-ing (Biến ie thành y rồi thêm ing)", role: "v" },
            { text: "of cancer", label: "Prepositional Phrase", role: "o" }
          ],
          note: "Quy tắc 4: Động từ 'die' tận cùng là 'ie', ta đổi 'ie' thành 'y' rồi mới thêm '-ing' thành 'dying'."
        },
        {
          eng: "He is lying on the bed.",
          viet: "Anh ấy đang nằm trên giường.",
          tokens: [
            { text: "He", label: "Subject", role: "s" },
            { text: "is", label: "To Be", role: "be" },
            { text: "lying", label: "Verb-ing (Biến ie thành y rồi thêm ing)", role: "v" },
            { text: "on the bed", label: "Prepositional Phrase", role: "o" }
          ],
          note: "Quy tắc 4: Động từ 'lie' tận cùng là 'ie', ta đổi 'ie' thành 'y' rồi mới thêm '-ing' thành 'lying'."
        },
        {
          eng: "The boy is running very fast.",
          viet: "Cậu bé đang chạy rất nhanh.",
          tokens: [
            { text: "The boy", label: "Subject", role: "s" },
            { text: "is", label: "To Be", role: "be" },
            { text: "running", label: "Verb-ing (Nhân đôi n)", role: "v" },
            { text: "very fast", label: "Adverbial Phrase", role: "adv" }
          ],
          note: "Quy tắc 5: Động từ 1 âm tiết 'run' kết thúc bằng 'phụ âm n' sau 'nguyên âm u', ta nhân đôi phụ âm cuối thành 'running'."
        },
        {
          eng: "She is beginning a new job today.",
          viet: "Hôm nay cô ấy bắt đầu một công việc mới.",
          tokens: [
            { text: "She", label: "Subject", role: "s" },
            { text: "is", label: "To Be", role: "be" },
            { text: "beginning", label: "Verb-ing (Nhân đôi n vì trọng âm rơi vào âm tiết 2)", role: "v" },
            { text: "a new job", label: "Object Phrase", role: "o" },
            { text: "today", label: "Time Adverb", role: "adv" }
          ],
          note: "Quy tắc 6: Động từ 2 âm tiết 'begin' có trọng âm rơi vào âm tiết thứ 2 (be-'gin), kết thúc bằng nguyên âm + phụ âm, ta nhân đôi phụ âm cuối thành 'beginning'."
        },
        {
          eng: "The company is transferring him to another department.",
          viet: "Công ty đang chuyển anh ấy sang một phòng ban khác.",
          tokens: [
            { text: "The company", label: "Subject (Chủ ngữ số ít)", role: "s" },
            { text: "is", label: "To Be (Chia ngôi số ít)", role: "be" },
            { text: "transferring", label: "Verb-ing (Nhân đôi r vì trọng âm âm tiết cuối)", role: "v" },
            { text: "him to another department", label: "Object & Prepositional Phrase", role: "o" }
          ],
          note: "Quy tắc 6: Động từ 'transfer' có trọng âm rơi vào âm tiết cuối (trans-'fer), kết thúc bằng phụ âm 'r' đứng sau nguyên âm 'e', nên ta nhân đôi 'r' thành 'transferring'."
        },
        {
          eng: "The kids are mimicking their teacher.",
          viet: "Lũ trẻ đang bắt chước giáo viên.",
          tokens: [
            { text: "The kids", label: "Subject (Chủ ngữ số nhiều)", role: "s" },
            { text: "are", label: "To Be (Chia số nhiều)", role: "be" },
            { text: "mimicking", label: "Verb-ing (Thêm k trước khi thêm -ing)", role: "v" },
            { text: "their teacher", label: "Object (Tân ngữ)", role: "o" }
          ],
          note: "Quy tắc 7: Động từ 'mimic' tận cùng là 'c', ta phải thêm chữ 'k' thành 'mimicking' để bảo toàn phát âm /k/."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi 1: Nhân đôi phụ âm cuối bừa bãi với các động từ kết thúc bằng w, x, y.</strong></p>
        <p>Sai: <em>"playying"</em>, <em>"snowwing"</em>, <em>"mixxing"</em>.</p>
        <p>Đúng: <em>"playing"</em>, <em>"snowing"</em>, <em>"mixing"</em> (Không bao giờ nhân đôi phụ âm cuối với các chữ tận cùng là w, x, y).</p>
        <p>🔴 <strong>Lỗi 2: Quên thêm K cho động từ tận cùng bằng C.</strong></p>
        <p>Sai: <em>"panicing"</em>, <em>"mimicing"</em>.</p>
        <p>Đúng: <em>"panicking"</em>, <em>"mimicking"</em>.</p>
        <p>🔴 <strong>Lỗi 3: Quên bỏ e trước khi thêm ing.</strong></p>
        <p>Sai: <em>"makeing"</em>, <em>"danceing"</em>.</p>
        <p>Đúng: <em>"making"</em>, <em>"dancing"</em>.</p>
      `,
      tips: `
        <p>💡 <strong>Bảng tóm tắt mẹo chính tả (Spelling cheat sheet) cho V-ing:</strong></p>
        <ul>
          <li><strong>Tận cùng là 1 chữ 'e':</strong> Bỏ 'e' rồi thêm 'ing' (write ➔ writing).</li>
          <li><strong>Tận cùng là 'ee' (2 chữ e):</strong> Giữ nguyên rồi thêm 'ing' (see ➔ seeing).</li>
          <li><strong>Tận cùng là 'ie':</strong> Đổi 'ie' thành 'y' rồi thêm 'ing' (lie ➔ lying, die ➔ dying).</li>
          <li><strong>Quy tắc 1-1-1 (1 âm tiết, 1 nguyên âm, 1 phụ âm cuối):</strong> Gấp đôi phụ âm cuối (run ➔ running, swim ➔ swimming, stop ➔ stopping).</li>
          <li><strong>Tận cùng là 'c':</strong> Thêm chữ 'k' rồi thêm 'ing' (panic ➔ panicking, mimic ➔ mimicking).</li>
        </ul>
      `
    },

    "2-7": {
      chapter: "Chương 2: Hiện tại tiếp diễn",
      lessonNum: 7,
      shortTitle: "Bài 7: Động từ trạng thái (Stative)",
      title: "Bài 7: Những động từ không chia ở tiếp diễn (Stative Verbs)",
      explanation: `
        <p>Trong tiếng Anh, các động từ chỉ cảm xúc, nhận thức, hoặc sở hữu không mô tả một hành động cụ thể sẽ không được chia ở thì tiếp diễn (V-ing), kể cả khi có các dấu hiệu như 'now' hay 'at the moment'. Ta phải chia chúng ở <strong>thì Hiện tại đơn</strong>.</p>
        <p>Các nhóm động từ trạng thái chính bao gồm:</p>
        <ol>
          <li><strong>Nhóm giác quan:</strong> <em>See</em> (nhìn thấy), <em>hear</em> (nghe thấy), <em>taste</em> (nếm có vị), <em>feel</em> (cảm thấy), <em>sound</em> (nghe có vẻ), <em>notice</em> (chú ý)...</li>
          <li><strong>Nhóm chỉ tình trạng:</strong> <em>Be, appear, seem...</em></li>
          <li><strong>Nhóm sở hữu:</strong> <em>Have</em> (có), <em>belong to</em> (thuộc về), <em>own</em> (có, sở hữu)...</li>
          <li><strong>Nhóm sở thích:</strong> <em>Like, love, hate, dislike, prefer, desire, need...</em></li>
          <li><strong>Nhóm tri thức, nhận thức:</strong> <em>Know</em> (biết), <em>understand</em> (hiểu), <em>want</em> (muốn), <em>think</em> (suy nghĩ ý kiến), <em>doubt</em> (nghi ngờ), <em>forgive</em> (tha thứ), <em>mean</em> (muốn nói, ý là), <em>remember</em> (nhớ), <em>forget</em> (quên), <em>recognize</em> (nhận ra), <em>believe</em> (tin tưởng)...</li>
        </ol>
      `,
      examples: [
        {
          eng: "I know the answer now.",
          viet: "Bây giờ tôi đã biết câu trả lời rồi.",
          tokens: [
            { text: "I", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "know", label: "Stative Verb (Bắt buộc chia Hiện tại đơn)", role: "v" },
            { text: "the answer", label: "Object (Tân ngữ)", role: "o" },
            { text: "now", label: "Time Adverb (Trạng từ thời gian)", role: "adv" }
          ],
          note: "'know' là động từ tri thức, không bao giờ dùng 'am knowing' dù có 'now'."
        },
        {
          eng: "She wants some water right now.",
          viet: "Cô ấy muốn một ít nước ngay bây giờ.",
          tokens: [
            { text: "She", label: "Subject (Chủ ngữ số ít)", role: "s" },
            { text: "wants", label: "Stative Verb (Chia hiện tại đơn ngôi số ít)", role: "v" },
            { text: "some water", label: "Object (Tân ngữ)", role: "o" },
            { text: "right now", label: "Time Adverb (Dấu hiệu thời gian)", role: "adv" }
          ],
          note: "'want' chỉ mong muốn, chia hiện tại đơn s/es bình thường chứ không dùng 'is wanting'."
        },
        {
          eng: "I hear a strange noise in the garden.",
          viet: "Tôi nghe thấy một tiếng động lạ trong vườn.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "hear", label: "Stative Verb (Giác quan)", role: "v" },
            { text: "a strange noise", label: "Object Phrase", role: "o" },
            { text: "in the garden", label: "Adverbial of Place", role: "adv" }
          ],
          note: "'hear' (nghe thấy) diễn tả cảm giác tự nhiên của giác quan, chia Hiện tại đơn chứ không dùng 'am hearing'."
        },
        {
          eng: "This soup tastes delicious.",
          viet: "Món súp này có vị rất ngon.",
          tokens: [
            { text: "This soup", label: "Subject (Chủ ngữ số ít)", role: "s" },
            { text: "tastes", label: "Stative Verb (Vị giác)", role: "v" },
            { text: "delicious", label: "Adjective (Bổ ngữ)", role: "o" }
          ],
          note: "'taste' ở đây mang nghĩa trạng thái 'có vị', chia Hiện tại đơn ngôi số ít."
        },
        {
          eng: "She seems very happy today.",
          viet: "Hôm nay trông cô ấy có vẻ rất hạnh phúc.",
          tokens: [
            { text: "She", label: "Subject", role: "s" },
            { text: "seems", label: "Stative Verb (Tình trạng/Vẻ bề ngoài)", role: "v" },
            { text: "very happy", label: "Adjective Phrase (Bổ ngữ)", role: "o" },
            { text: "today", label: "Time Adverb", role: "adv" }
          ],
          note: "'seem' chỉ vẻ bề ngoài, tình trạng, chia ở Hiện tại đơn chứ không dùng 'is seeming'."
        },
        {
          eng: "He owns a beautiful house.",
          viet: "Anh ấy sở hữu một ngôi nhà đẹp.",
          tokens: [
            { text: "He", label: "Subject", role: "s" },
            { text: "owns", label: "Stative Verb (Sở hữu)", role: "v" },
            { text: "a beautiful house", label: "Object Phrase", role: "o" }
          ],
          note: "'own' mang nghĩa sở hữu, chia Hiện tại đơn ngôi số ít chứ không dùng 'is owning'."
        },
        {
          eng: "I have a big family.",
          viet: "Tôi có một gia đình lớn.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "have", label: "Stative Verb (Sở hữu)", role: "v" },
            { text: "a big family", label: "Object Phrase", role: "o" }
          ],
          note: "Khi 'have' mang nghĩa sở hữu (có), ta chỉ chia ở Hiện tại đơn chứ không chia ở tiếp diễn 'am having'."
        },
        {
          eng: "We love learning English.",
          viet: "Chúng tôi yêu thích việc học tiếng Anh.",
          tokens: [
            { text: "We", label: "Subject", role: "s" },
            { text: "love", label: "Stative Verb (Sở thích/Cảm xúc)", role: "v" },
            { text: "learning English", label: "Object Phrase", role: "o" }
          ],
          note: "'love' diễn tả cảm xúc/sở thích lâu dài, chia Hiện tại đơn nguyên mẫu."
        },
        {
          eng: "I understand what you mean.",
          viet: "Tôi hiểu những gì bạn muốn nói.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "understand", label: "Stative Verb (Nhận thức/Tri thức)", role: "v" },
            { text: "what you mean", label: "Object Clause", role: "o" }
          ],
          note: "'understand' (hiểu) và 'mean' (ý muốn nói) là các động từ nhận thức, không chia ở dạng tiếp diễn."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi 1: Chia thì tiếp diễn cho động từ chỉ trạng thái tĩnh (Stative Verbs).</strong></p>
        <p>Sai: <em>"I am understanding the lesson."</em> hoặc <em>"She is wanting some milk."</em> hoặc <em>"I am loving you."</em></p>
        <p>Đúng: <em>"I understand the lesson."</em> hoặc <em>"She wants some milk."</em> hoặc <em>"I love you."</em> (Kể cả khi tiếng Việt dịch là 'đang', tiếng Anh vẫn chia Hiện tại đơn).</p>
      `,
      tips: `
        <p>💡 <strong>Mẹo nhận biết 5 nhóm Động từ trạng thái (Không dùng đuôi -ing):</strong></p>
        <ol>
          <li><strong>Giác quan:</strong> <em>hear, smell, taste, see...</em></li>
          <li><strong>Cảm xúc:</strong> <em>love, hate, like, dislike, prefer...</em></li>
          <li><strong>Sở hữu:</strong> <em>have, own, belong to...</em></li>
          <li><strong>Suy nghĩ/Tri thức:</strong> <em>know, understand, remember, believe, think</em> khi mang nghĩa <em>tin rằng/cho rằng</em>...</li>
          <li><strong>Tình trạng:</strong> <em>seem, look (trông có vẻ), appear...</em></li>
        </ol>
        <p>⚠️ <strong>Lưu ý đặc biệt với 'HAVE':</strong></p>
        <ul>
          <li>Nếu 'have' nghĩa là <strong>Sở hữu (Có)</strong> ➔ Không dùng tiếp diễn (Ví dụ: I have a laptop).</li>
          <li>Nếu 'have' nghĩa là <strong>Ăn/Uống/Tắm/Trải nghiệm</strong> ➔ Có thể dùng tiếp diễn bình thường (Ví dụ: I am having dinner / having a shower).</li>
        </ul>
        <p>⚠️ <strong>Lưu ý đặc biệt với 'THINK':</strong> Nếu <em>think</em> nghĩa là <strong>tin rằng/cho rằng</strong> thì không dùng tiếp diễn (I think you are right). Nếu nghĩa là <strong>đang suy nghĩ về điều gì</strong> thì có thể dùng tiếp diễn (I am thinking about this problem).</p>
      `
    },

    // CHAPTER 3: COMPARISON
    "3-8": {
      chapter: "Chương 3: Phân biệt hai thì",
      lessonNum: 8,
      shortTitle: "Bài 8: Phân biệt hai thì",
      title: "Bài 8: Phân biệt chi tiết Hiện tại đơn & Hiện tại tiếp diễn",
      explanation: `
        <p>Hãy đặt hai thì này lên bàn cân so sánh chi tiết:</p>
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Đặc điểm so sánh</th>
              <th>Thì Hiện tại đơn (Present Simple)</th>
              <th>Thì Hiện tại tiếp diễn (Present Continuous)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Bản chất hành động</strong></td>
              <td>Diễn tả hành động lặp đi lặp lại, thói quen lâu dài, chân lý cố định, lịch trình sẵn có.</td>
              <td>Diễn tả hành động đang xảy ra tạm thời ngay tại thời điểm nói hoặc xung quanh thời điểm nói.</td>
            </tr>
            <tr>
              <td><strong>Động từ trạng thái</strong></td>
              <td>Chia bình thường (know, want, have, love...).</td>
              <td>Không được chia ở dạng V-ing.</td>
            </tr>
            <tr>
              <td><strong>Trợ động từ phủ định</strong></td>
              <td>Mượn <strong>don't / doesn't</strong>.</td>
              <td>Thêm not trực tiếp sau To Be: <strong>isn't / aren't / am not</strong>.</td>
            </tr>
          </tbody>
        </table>
      `,
      examples: [
        {
          eng: "I brush my teeth every day, but right now I am eating an apple.",
          viet: "Tôi đánh răng hàng ngày, nhưng ngay lúc này tôi đang ăn một quả táo.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "brush", label: "Present Simple (Thói quen hàng ngày)", role: "v" },
            { text: "my teeth every day", label: "Object & Adverb (Hiện tại đơn)", role: "adv" },
            { text: "am eating", label: "Present Continuous (Hành động nhất thời đang diễn ra)", role: "v" },
            { text: "an apple right now", label: "Object & Adverb (Hiện tại tiếp diễn)", role: "adv" }
          ],
          note: "Sự tương phản rõ rệt giữa thói quen thường lệ hàng ngày (Simple) và hành động nhất thời ngay lúc nói (Continuous)."
        },
        {
          eng: "Water boils at 100 degrees Celsius, and look, the water is boiling now.",
          viet: "Nước sôi ở 100 độ C, và nhìn kìa, nước đang sôi lúc này.",
          tokens: [
            { text: "Water", label: "Subject (Danh từ không đếm được)", role: "s" },
            { text: "boils", label: "Present Simple (Sự thật hiển nhiên/Khoa học)", role: "v" },
            { text: "at 100 degrees Celsius", label: "Prepositional Phrase", role: "o" },
            { text: "the water is boiling", label: "Present Continuous (Sự việc cụ thể đang diễn ra)", role: "v" },
            { text: "now", label: "Time Adverb (Dấu hiệu)", role: "adv" }
          ],
          note: "Sự thật khoa học luôn đúng dùng Hiện tại đơn (boils), nhưng hiện tượng thực tế đang xảy ra trước mắt dùng Tiếp diễn (is boiling)."
        },
        {
          eng: "He usually plays soccer, but today he is playing tennis.",
          viet: "Thường ngày anh ấy chơi đá bóng, nhưng hôm nay anh ấy đang chơi tennis.",
          tokens: [
            { text: "He", label: "Subject", role: "s" },
            { text: "usually plays", label: "Present Simple (Tần suất, thói quen thường lệ)", role: "v" },
            { text: "soccer", label: "Object", role: "o" },
            { text: "today he is playing", label: "Present Continuous (Hành động khác biệt tạm thời)", role: "v" },
            { text: "tennis", label: "Object", role: "o" }
          ],
          note: "Hành động thường lệ chia Hiện tại đơn (plays), hành động tạm thời khác biệt chỉ riêng hôm nay chia Tiếp diễn (is playing)."
        },
        {
          eng: "They live in Hanoi, but this month they are staying in Saigon.",
          viet: "Họ sống ở Hà Nội, nhưng tháng này họ đang ở lại Sài Gòn.",
          tokens: [
            { text: "They", label: "Subject", role: "s" },
            { text: "live", label: "Present Simple (Tình trạng lâu dài, cố định)", role: "v" },
            { text: "in Hanoi", label: "Adverb of Place", role: "adv" },
            { text: "are staying", label: "Present Continuous (Tình trạng tạm thời ngắn hạn)", role: "v" },
            { text: "in Saigon this month", label: "Place & Time (Dấu hiệu tạm thời)", role: "adv" }
          ],
          note: "Nơi ở lâu dài/cố định chia Hiện tại đơn (live), chỗ ở tạm thời ngắn hạn chia Tiếp diễn (are staying)."
        },
        {
          eng: "My sister works as a teacher, but she is not working this week.",
          viet: "Chị tôi làm giáo viên, nhưng tuần này chị ấy không làm việc.",
          tokens: [
            { text: "My sister", label: "Subject", role: "s" },
            { text: "works", label: "Present Simple (Nghề nghiệp/Công việc lâu dài)", role: "v" },
            { text: "as a teacher", label: "Prepositional Phrase", role: "o" },
            { text: "is not working", label: "Present Continuous (Trạng thái nghỉ ngơi tạm thời)", role: "v" },
            { text: "this week", label: "Time Adverb (Dấu hiệu tạm thời)", role: "adv" }
          ],
          note: "Nghề nghiệp cố định chia Hiện tại đơn (works), sự nghỉ ngơi tạm thời trong tuần này chia phủ định Tiếp diễn (is not working)."
        },
        {
          eng: "It often rains in summer, but it is not raining right now.",
          viet: "Trời thường mưa vào mùa hè, nhưng ngay lúc này trời không mưa.",
          tokens: [
            { text: "It", label: "Subject (Chủ ngữ giả)", role: "s" },
            { text: "often rains", label: "Present Simple (Quy luật thời tiết thường xuyên)", role: "v" },
            { text: "in summer", label: "Time Adverbial", role: "adv" },
            { text: "is not raining", label: "Present Continuous (Thực tế ngay lúc nói)", role: "v" },
            { text: "right now", label: "Time Adverb (Dấu hiệu tiếp diễn)", role: "adv" }
          ],
          note: "Quy luật thời tiết mùa nào cũng vậy dùng Hiện tại đơn (rains), thực tế thời tiết ngay lúc đang nói dùng Tiếp diễn (is not raining)."
        },
        {
          eng: "Why are you always coming late? You always miss the bus.",
          viet: "Sao bạn cứ đi muộn suốt thế? Bạn lúc nào cũng lỡ xe buýt.",
          tokens: [
            { text: "Why are you", label: "Question structure", role: "s" },
            { text: "always coming", label: "Present Continuous + always (Phàn nàn về hành động gây khó chịu)", role: "v" },
            { text: "late", label: "Adverb", role: "adv" },
            { text: "always miss", label: "Present Simple + always (Sự thật tần suất đơn thuần)", role: "v" },
            { text: "the bus", label: "Object", role: "o" }
          ],
          note: "Khi 'always' đi với Tiếp diễn biểu đạt sự phàn nàn, bực bội (are always coming). Khi đi với Hiện tại đơn chỉ tần suất lặp lại thông thường (always miss)."
        },
        {
          eng: "I have a laptop, but I am not using it at the moment.",
          viet: "Tôi có máy tính xách tay, nhưng lúc này tôi đang không dùng nó.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "have", label: "Present Simple (Động từ sở hữu - Stative)", role: "v" },
            { text: "a laptop", label: "Object", role: "o" },
            { text: "am not using", label: "Present Continuous (Hành động tạm thời không sử dụng)", role: "v" },
            { text: "it at the moment", label: "Object & Time", role: "adv" }
          ],
          note: "Động từ sở hữu 'have' không chia tiếp diễn (have), động từ hành động 'use' chia tiếp diễn bình thường (am not using)."
        },
        {
          eng: "The train leaves at 8 am tomorrow, so I am leaving early.",
          viet: "Tàu rời ga lúc 8 giờ sáng mai, nên tôi sẽ đi sớm.",
          tokens: [
            { text: "The train", label: "Subject (Vật)", role: "s" },
            { text: "leaves", label: "Present Simple (Lịch trình tàu xe cố định)", role: "v" },
            { text: "at 8 am tomorrow", label: "Adverbial (Thời gian lịch trình)", role: "adv" },
            { text: "am leaving", label: "Present Continuous (Kế hoạch cá nhân đã chuẩn bị trước)", role: "v" },
            { text: "early", label: "Adverb", role: "adv" }
          ],
          note: "Lịch trình tàu xe công cộng dùng Hiện tại đơn (leaves). Dự định/kế hoạch di chuyển cá nhân dùng Hiện tại tiếp diễn (am leaving)."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi 1: Chia tiếp diễn cho thói quen lặp đi lặp lại hàng ngày.</strong></p>
        <p>Sai: <em>"I am going to school by bus every day."</em></p>
        <p>Đúng: <em>"I go to school by bus every day."</em></p>
        <p>🔴 <strong>Lỗi 2: Nhầm lẫn giữa nơi ở lâu dài và nơi ở tạm thời.</strong></p>
        <p>Dễ gây nhầm: <em>"I am living in Vietnam."</em> (câu này thường nhấn mạnh tình trạng hiện tại/tạm thời trong một giai đoạn).</p>
        <p>Đúng hơn nếu nói nơi ở lâu dài: <em>"I live in Vietnam."</em> (Dùng Hiện tại tiếp diễn <em>am living</em> khi muốn nhấn mạnh bạn đang ở đó trong giai đoạn hiện tại, có thể chưa lâu dài hoặc chưa cố định).</p>
      `,
      tips: `
        <p>💡 <strong>Bí kíp phân biệt nhanh cho người mất gốc:</strong></p>
        <table>
          <tr>
            <th style="padding: 5px; text-align: left;">Đặc điểm</th>
            <th style="padding: 5px; text-align: left;">Hiện tại đơn (Simple)</th>
            <th style="padding: 5px; text-align: left;">Hiện tại tiếp diễn (Continuous)</th>
          </tr>
          <tr>
            <td style="padding: 5px;"><strong>Tính chất</strong></td>
            <td style="padding: 5px;">Lâu dài, cố định, bản chất</td>
            <td style="padding: 5px;">Tạm thời, nhất thời, đang xảy ra</td>
          </tr>
          <tr>
            <td style="padding: 5px;"><strong>Ví dụ</strong></td>
            <td style="padding: 5px;">I live in Hanoi. (Lâu dài)</td>
            <td style="padding: 5px;">I am staying in a hotel. (Tạm thời)</td>
          </tr>
          <tr>
            <td style="padding: 5px;"><strong>Từ khóa</strong></td>
            <td style="padding: 5px;">every day, usually, often, always</td>
            <td style="padding: 5px;">now, right now, today, this week</td>
          </tr>
        </table>
      `
    }
  };

  const SUBJECTS_POOL = {
    singular: [
      { text: "He", pronoun: "he", be: "is", beNeg: "isn't", doAux: "does", dontAux: "doesn't", haveVal: "has" },
      { text: "She", pronoun: "she", be: "is", beNeg: "isn't", doAux: "does", dontAux: "doesn't", haveVal: "has" },
      { text: "It", pronoun: "it", be: "is", beNeg: "isn't", doAux: "does", dontAux: "doesn't", haveVal: "has" },
      { text: "Peter", pronoun: "he", be: "is", beNeg: "isn't", doAux: "does", dontAux: "doesn't", haveVal: "has" },
      { text: "Mary", pronoun: "she", be: "is", beNeg: "isn't", doAux: "does", dontAux: "doesn't", haveVal: "has" },
      { text: "John", pronoun: "he", be: "is", beNeg: "isn't", doAux: "does", dontAux: "doesn't", haveVal: "has" },
      { text: "Lan", pronoun: "she", be: "is", beNeg: "isn't", doAux: "does", dontAux: "doesn't", haveVal: "has" },
      { text: "Nam", pronoun: "he", be: "is", beNeg: "isn't", doAux: "does", dontAux: "doesn't", haveVal: "has" },
      { text: "My brother", pronoun: "he", be: "is", beNeg: "isn't", doAux: "does", dontAux: "doesn't", haveVal: "has" },
      { text: "My sister", pronoun: "she", be: "is", beNeg: "isn't", doAux: "does", dontAux: "doesn't", haveVal: "has" },
      { text: "My father", pronoun: "he", be: "is", beNeg: "isn't", doAux: "does", dontAux: "doesn't", haveVal: "has" },
      { text: "The doctor", pronoun: "he", be: "is", beNeg: "isn't", doAux: "does", dontAux: "doesn't", haveVal: "has" },
      { text: "The student", pronoun: "he", be: "is", beNeg: "isn't", doAux: "does", dontAux: "doesn't", haveVal: "has" },
      { text: "The train", pronoun: "it", be: "is", beNeg: "isn't", doAux: "does", dontAux: "doesn't", haveVal: "has" },
      { text: "The flight", pronoun: "it", be: "is", beNeg: "isn't", doAux: "does", dontAux: "doesn't", haveVal: "has" }
    ],
    plural: [
      { text: "I", pronoun: "I", be: "am", beNeg: "am not", doAux: "do", dontAux: "don't", haveVal: "have" },
      { text: "You", pronoun: "you", be: "are", beNeg: "aren't", doAux: "do", dontAux: "don't", haveVal: "have" },
      { text: "We", pronoun: "we", be: "are", beNeg: "aren't", doAux: "do", dontAux: "don't", haveVal: "have" },
      { text: "They", pronoun: "they", be: "are", beNeg: "aren't", doAux: "do", dontAux: "don't", haveVal: "have" },
      { text: "My parents", pronoun: "they", be: "are", beNeg: "aren't", doAux: "do", dontAux: "don't", haveVal: "have" },
      { text: "My brothers", pronoun: "they", be: "are", beNeg: "aren't", doAux: "do", dontAux: "don't", haveVal: "have" },
      { text: "The students", pronoun: "they", be: "are", beNeg: "aren't", doAux: "do", dontAux: "don't", haveVal: "have" },
      { text: "Lan and Nam", pronoun: "they", be: "are", beNeg: "aren't", doAux: "do", dontAux: "don't", haveVal: "have" },
      { text: "Peter and Mary", pronoun: "they", be: "are", beNeg: "aren't", doAux: "do", dontAux: "don't", haveVal: "have" },
      { text: "The cats", pronoun: "they", be: "are", beNeg: "aren't", doAux: "do", dontAux: "don't", haveVal: "have" },
      { text: "The teachers", pronoun: "they", be: "are", beNeg: "aren't", doAux: "do", dontAux: "don't", haveVal: "have" }
    ]
  };

  const PREDICATES_TOBE = [
    { text: "a doctor", viet: "bác sĩ" },
    { text: "very beautiful", viet: "rất xinh đẹp" },
    { text: "friends", viet: "bạn bè" },
    { text: "a good student", viet: "học sinh giỏi" },
    { text: "Korean", viet: "người Hàn Quốc" },
    { text: "19 years old", viet: "19 tuổi" },
    { text: "at home", viet: "ở nhà" },
    { text: "busy today", viet: "bận rộn hôm nay" },
    { text: "hungry", viet: "đói bụng" }
  ];

  const VERBS_ACTION = [
    { base: "go", s_form: "goes", ing: "going", obj: "to school", viet: "đi học", type: "es" },
    { base: "work", s_form: "works", ing: "working", obj: "at a bank", viet: "làm việc ở ngân hàng", type: "normal" },
    { base: "play", s_form: "plays", ing: "playing", obj: "football", viet: "đá bóng", type: "normal" },
    { base: "visit", s_form: "visits", ing: "visiting", obj: "grandparents", viet: "thăm ông bà", type: "normal" },
    { base: "brush", s_form: "brushes", ing: "brushing", obj: "teeth", viet: "đánh răng", type: "es" },
    { base: "watch", s_form: "watches", ing: "watching", obj: "television", viet: "xem tivi", type: "es" },
    { base: "wash", s_form: "washes", ing: "washing", obj: "the car", viet: "rửa xe", type: "es" },
    { base: "study", s_form: "studies", ing: "studying", obj: "English", viet: "học tiếng Anh", type: "ies" },
    { base: "fly", s_form: "flies", ing: "flying", obj: "a kite", viet: "thả diều", type: "ies" },
    { base: "cry", s_form: "cries", ing: "crying", obj: "loudly", viet: "khóc to", type: "ies" },
    { base: "fry", s_form: "fries", ing: "frying", obj: "fish", viet: "rán cá", type: "ies" },
    { base: "stay", s_form: "stays", ing: "staying", obj: "at home", viet: "ở nhà", type: "y_vowel" },
    { base: "buy", s_form: "buys", ing: "buying", obj: "groceries", viet: "mua thực phẩm", type: "y_vowel" },
    { base: "pay", s_form: "pays", ing: "paying", obj: "bills", viet: "thanh toán hóa đơn", type: "y_vowel" }
  ];

  const SPELLING_VERBS_ING = [
    { base: "learn", ing: "learning", ruleText: "chỉ việc thêm đuôi '-ing' thông thường." },
    { base: "look", ing: "looking", ruleText: "chỉ việc thêm đuôi '-ing' thông thường." },
    { base: "sing", ing: "singing", ruleText: "chỉ việc thêm đuôi '-ing' thông thường." },
    { base: "take", ing: "taking", ruleText: "bỏ chữ 'e' câm rồi mới thêm '-ing'." },
    { base: "dance", ing: "dancing", ruleText: "bỏ chữ 'e' câm rồi mới thêm '-ing'." },
    { base: "age", ing: "aging", ruleText: "bỏ chữ 'e' câm rồi mới thêm '-ing'." },
    { base: "make", ing: "making", ruleText: "bỏ chữ 'e' câm rồi mới thêm '-ing'." },
    { base: "ride", ing: "riding", ruleText: "bỏ chữ 'e' câm rồi mới thêm '-ing'." },
    { base: "see", ing: "seeing", ruleText: "giữ nguyên 'ee' và thêm '-ing' bình thường." },
    { base: "agree", ing: "agreeing", ruleText: "giữ nguyên 'ee' và thêm '-ing' bình thường." },
    { base: "free", ing: "freeing", ruleText: "giữ nguyên 'ee' và thêm '-ing' bình thường." },
    { base: "lie", ing: "lying", ruleText: "biến đổi đuôi 'ie' thành 'y' rồi mới thêm '-ing'." },
    { base: "die", ing: "dying", ruleText: "biến đổi đuôi 'ie' thành 'y' rồi mới thêm '-ing'." },
    { base: "win", ing: "winning", ruleText: "nhân đôi phụ âm cuối trước khi thêm '-ing' vì là từ 1 âm tiết kết thúc bằng Nguyên âm + Phụ âm." },
    { base: "stop", ing: "stopping", ruleText: "nhân đôi phụ âm cuối trước khi thêm '-ing' vì là từ 1 âm tiết kết thúc bằng Nguyên âm + Phụ âm." },
    { base: "shop", ing: "shopping", ruleText: "nhân đôi phụ âm cuối trước khi thêm '-ing' vì là từ 1 âm tiết kết thúc bằng Nguyên âm + Phụ âm." },
    { base: "run", ing: "running", ruleText: "nhân đôi phụ âm cuối trước khi thêm '-ing' vì là từ 1 âm tiết kết thúc bằng Nguyên âm + Phụ âm." },
    { base: "prefer", ing: "preferring", ruleText: "gấp đôi phụ âm cuối vì động từ có trọng âm rơi vào âm tiết cuối." },
    { base: "begin", ing: "beginning", ruleText: "gấp đôi phụ âm cuối vì động từ có trọng âm rơi vào âm tiết cuối." },
    { base: "transfer", ing: "transferring", ruleText: "gấp đôi phụ âm cuối vì động từ có trọng âm rơi vào âm tiết cuối." },
    { base: "traffic", ing: "trafficking", ruleText: "thêm chữ 'k' ở cuối trước khi thêm '-ing' vì động từ tận cùng bằng chữ 'c'." },
    { base: "mimic", ing: "mimicking", ruleText: "thêm chữ 'k' ở cuối trước khi thêm '-ing' vì động từ tận cùng bằng chữ 'c'." },
    { base: "panic", ing: "panicking", ruleText: "thêm chữ 'k' ở cuối trước khi thêm '-ing' vì động từ tận cùng bằng chữ 'c'." }
  ];

  const VERBS_STATIVE = [
    { base: "see", s_form: "sees", group: "giác quan" },
    { base: "hear", s_form: "hears", group: "giác quan" },
    { base: "taste", s_form: "tastes", group: "giác quan (nếm có vị)" },
    { base: "feel", s_form: "feels", group: "giác quan" },
    { base: "sound", s_form: "sounds", group: "giác quan" },
    { base: "belong to", s_form: "belongs to", group: "sở hữu" },
    { base: "own", s_form: "owns", group: "sở hữu" },
    { base: "like", s_form: "likes", group: "sở thích" },
    { base: "love", s_form: "loves", group: "sở thích" },
    { base: "hate", s_form: "hates", group: "sở thích" },
    { base: "prefer", s_form: "prefers", group: "sở thích" },
    { base: "need", s_form: "needs", group: "sở thích" },
    { base: "know", s_form: "knows", group: "tri thức" },
    { base: "understand", s_form: "understands", group: "tri thức" },
    { base: "want", s_form: "wants", group: "tri thức / sở thích" },
    { base: "remember", s_form: "remembers", group: "tri thức" },
    { base: "forget", s_form: "forgets", group: "tri thức" },
    { base: "believe", s_form: "believes", group: "tri thức" }
  ];

  const ADVERBS_FREQUENCY = ["always", "usually", "often", "sometimes", "rarely", "never", "generally", "regularly"];

  // Expose lessons and pools
  window.UNITS_REGISTRY["unit1"] = {
    unitId: "unit1",
    title: "Unit 1: Present Simple & Present Continuous",
    lessons: LESSONS_DATA,
    pools: { SUBJECTS_POOL, PREDICATES_TOBE, VERBS_ACTION, SPELLING_VERBS_ING, VERBS_STATIVE, ADVERBS_FREQUENCY },
    rules: {
      "am/is/are": "Chia động từ To Be hiện tại",
      "s/es": "Chia động từ khẳng định Hiện tại đơn",
      "do/does": "Trợ động từ câu hỏi Hiện tại đơn",
      "don't/doesn't": "Trợ động từ phủ định Hiện tại đơn",
      "have/has": "Động từ have/has",
      "V-ing": "Động từ thêm -ing & chính tả"
    }
  };
})();
