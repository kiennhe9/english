(function () {
  if (!window.UNITS_REGISTRY) window.UNITS_REGISTRY = {};

  const LESSONS_DATA = {
    // CHAPTER 1: PRESENT PERFECT
    "2-1": {
      chapter: "Chương 1: Hiện tại hoàn thành",
      lessonNum: 1,
      shortTitle: "Bài 1: Khái niệm HTHT",
      title: "Bài 1: Khái niệm thì Hiện tại hoàn thành (Present Perfect)",
      explanation: `
        <p>Thì <strong>Hiện tại hoàn thành (Present Perfect)</strong> dùng để diễn tả một hành động hoặc sự việc đã bắt đầu trong quá khứ và vẫn tiếp diễn ở hiện tại, hoặc một hành động đã hoàn thành nhưng kết quả hay hậu quả của nó vẫn còn quan trọng hoặc có liên quan ở hiện tại.</p>
        <p>Thì này tạo một <strong>cây cầu nối</strong> giữa quá khứ (past) và hiện tại (present). Khi dùng thì này, chúng ta quan tâm đến <em>hành động bản thân nó</em> hoặc <em>kết quả của nó</em> hơn là thời điểm cụ thể xảy ra hành động.</p>
      `,
      examples: [
        {
          eng: "I have lived here for five years.",
          viet: "Tôi đã sống ở đây được năm năm.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "have lived", label: "Verb (HTHT: have + V3)", role: "v" },
            { text: "here", label: "Adverb of Place", role: "adv" },
            { text: "for five years", label: "Duration (Khoảng thời gian)", role: "adv" }
          ],
          note: "Hành động sống bắt đầu trong quá khứ cách đây 5 năm và hiện tại tôi vẫn đang sống ở đây."
        },
        {
          eng: "She has lost her phone.",
          viet: "Cô ấy đã làm mất điện thoại của mình rồi.",
          tokens: [
            { text: "She", label: "Subject (Số ít)", role: "s" },
            { text: "has lost", label: "Verb (kết quả ở hiện tại)", role: "v" },
            { text: "her phone", label: "Object", role: "o" }
          ],
          note: "Hành động làm mất xảy ra trong quá khứ (không rõ lúc nào), nhưng kết quả ở hiện tại là cô ấy không có điện thoại để dùng."
        },
        {
          eng: "They have bought a new car.",
          viet: "Họ đã mua một chiếc xe hơi mới.",
          tokens: [
            { text: "They", label: "Subject (Số nhiều)", role: "s" },
            { text: "have bought", label: "Verb (have + V3)", role: "v" },
            { text: "a new car", label: "Object", role: "o" }
          ],
          note: "Hành động mua xe đã hoàn thành gần đây, kết quả hiện tại là họ đang sở hữu chiếc xe đó."
        },
        {
          eng: "We have traveled to Danang twice.",
          viet: "Chúng tôi đã đi du lịch Đà Nẵng hai lần.",
          tokens: [
            { text: "We", label: "Subject", role: "s" },
            { text: "have traveled", label: "Verb (Trải nghiệm)", role: "v" },
            { text: "to Danang", label: "Prepositional Phrase", role: "o" },
            { text: "twice", label: "Adverb (Số lần thực hiện)", role: "adv" }
          ],
          note: "Diễn tả trải nghiệm tính từ quá khứ đến thời điểm hiện tại."
        },
        {
          eng: "He has finished his lunch.",
          viet: "Anh ấy đã ăn xong bữa trưa của mình.",
          tokens: [
            { text: "He", label: "Subject", role: "s" },
            { text: "has finished", label: "Verb (Hành động vừa hoàn thành)", role: "v" },
            { text: "his lunch", label: "Object", role: "o" }
          ],
          note: "Hành động ăn trưa vừa kết thúc, hiện tại anh ấy đang no bụng."
        },
        {
          eng: "My sister has learned English since 2018.",
          viet: "Chị tôi đã học tiếng Anh từ năm 2018.",
          tokens: [
            { text: "My sister", label: "Subject", role: "s" },
            { text: "has learned", label: "Verb (Kéo dài từ quá khứ)", role: "v" },
            { text: "English", label: "Object", role: "o" },
            { text: "since 2018", label: "Mốc thời gian bắt đầu", role: "adv" }
          ],
          note: "Hành động học tiếng Anh bắt đầu năm 2018 và hiện tại chị ấy vẫn đang tiếp tục học."
        },
        {
          eng: "The company has opened three new stores.",
          viet: "Công ty đã mở ba cửa hàng mới.",
          tokens: [
            { text: "The company", label: "Subject (Danh từ số ít)", role: "s" },
            { text: "has opened", label: "Verb (Kết quả tích lũy)", role: "v" },
            { text: "three new stores", label: "Object Phrase", role: "o" }
          ],
          note: "Kết quả tích lũy tính đến hiện tại là công ty có thêm 3 cửa hàng mới."
        },
        {
          eng: "I have read this book before.",
          viet: "Tôi đã đọc cuốn sách này trước đây rồi.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "have read", label: "Verb (Trải nghiệm)", role: "v" },
            { text: "this book", label: "Object", role: "o" },
            { text: "before", label: "Adverb", role: "adv" }
          ],
          note: "'Read' (phát âm là /red/ ở V3) chỉ trải nghiệm đã từng làm việc gì đó trước đây."
        },
        {
          eng: "They have lived in Saigon for a month.",
          viet: "Họ đã sống ở Sài Gòn được một tháng.",
          tokens: [
            { text: "They", label: "Subject", role: "s" },
            { text: "have lived", label: "Verb", role: "v" },
            { text: "in Saigon", label: "Adverb of Place", role: "adv" },
            { text: "for a month", label: "Khoảng thời gian kéo dài", role: "adv" }
          ],
          note: "Họ đến Sài Gòn cách đây 1 tháng và hiện tại vẫn đang sinh sống tại đây."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Dùng quá khứ đơn khi hành động vẫn đang tiếp diễn ở hiện tại.</strong></p>
        <p>Sai: <em>"I lived here for 5 years and I still live here."</em></p>
        <p>Đúng: <em>"I have lived here for 5 years."</em></p>
      `,
      tips: `
        <p>💡 <strong>Mẹo nhớ nhanh:</strong> Hiện tại hoàn thành giống như một cây cầu nối <strong>quá khứ</strong> với <strong>hiện tại</strong>.</p>
        <ul>
          <li>Nếu việc bắt đầu trong quá khứ và <strong>vẫn còn tiếp tục</strong> bây giờ ➔ dùng Hiện tại hoàn thành.</li>
          <li>Nếu việc đã xảy ra trong quá khứ nhưng <strong>kết quả còn ảnh hưởng</strong> bây giờ ➔ dùng Hiện tại hoàn thành.</li>
          <li>Hãy tự hỏi: <strong>"Bây giờ còn liên quan không?"</strong> Nếu có, hãy nghĩ tới <code>have/has + V3</code>.</li>
        </ul>
      `
    },

    "2-2": {
      chapter: "Chương 1: Hiện tại hoàn thành",
      lessonNum: 2,
      shortTitle: "Bài 2: Cấu trúc HTHT",
      title: "Bài 2: Cấu trúc thì Hiện tại hoàn thành (Khẳng định - Phủ định - Nghi vấn)",
      explanation: `
        <p>Cấu trúc tổng quát của thì Hiện tại hoàn thành luôn yêu cầu trợ động từ <strong>Have/Has</strong> đi kèm động từ ở dạng <strong>V3/Past Participle</strong>.</p>
        <p><strong>A. Thể Khẳng định (+):</strong></p>
        <p>Cấu trúc: <code>S + have / has + V3/Ed</code></p>
        <p><strong>B. Thể Phủ định (-):</strong></p>
        <p>Cấu trúc: <code>S + have / has + not + V3/Ed</code></p>
        <p><em>Viết tắt:</em> <code>have not = haven't</code>, <code>has not = hasn't</code>.</p>
        <p><strong>C. Thể Nghi vấn (?):</strong></p>
        <p>Cấu trúc: <code>Have / Has + S + V3/Ed?</code></p>
        <p>Trả lời: <code>Yes, S + have/has.</code> / <code>No, S + haven't/hasn't.</code></p>
      `,
      examples: [
        {
          eng: "They have built a new house.",
          viet: "Họ đã xây một ngôi nhà mới.",
          tokens: [
            { text: "They", label: "Subject", role: "s" },
            { text: "have built", label: "Verb (have + V3 bất quy tắc)", role: "v" },
            { text: "a new house", label: "Object (Tân ngữ)", role: "o" }
          ],
          note: "Chủ ngữ là 'They' đi kèm 'have' và động từ 'build' chia sang V3 là 'built'."
        },
        {
          eng: "She has not done her homework.",
          viet: "Cô ấy vẫn chưa làm bài tập về nhà.",
          tokens: [
            { text: "She", label: "Subject", role: "s" },
            { text: "has not done", label: "Negative Verb (has + not + V3)", role: "v" },
            { text: "her homework", label: "Object", role: "o" }
          ],
          note: "Thể phủ định thêm 'not' sau 'has'. Ta có thể viết tắt thành 'hasn't'."
        },
        {
          eng: "Have you finished the report?",
          viet: "Bạn đã hoàn thành bản báo cáo chưa?",
          tokens: [
            { text: "Have", label: "Auxiliary Verb (Trợ động từ hỏi)", role: "aux" },
            { text: "you", label: "Subject", role: "s" },
            { text: "finished", label: "V3 (Regular Verb)", role: "v" },
            { text: "the report", label: "Object", role: "o" }
          ],
          note: "Câu nghi vấn đảo trợ động từ 'Have' lên trước chủ ngữ 'you'. Động từ chính 'finish' thêm '-ed'."
        },
        {
          eng: "He has washed his car.",
          viet: "Anh ấy đã rửa xe hơi của mình rồi.",
          tokens: [
            { text: "He", label: "Subject", role: "s" },
            { text: "has washed", label: "Verb (has + V3 có quy tắc)", role: "v" },
            { text: "his car", label: "Object", role: "o" }
          ],
          note: "Câu khẳng định với chủ ngữ số ít 'He' đi với 'has', động từ chính 'wash' thêm '-ed'."
        },
        {
          eng: "I have seen that movie.",
          viet: "Tôi đã xem bộ phim đó rồi.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "have seen", label: "Verb (have + V3 bất quy tắc)", role: "v" },
            { text: "that movie", label: "Object", role: "o" }
          ],
          note: "Chủ ngữ 'I' đi với 'have'. Phân từ hai của 'see' là 'seen'."
        },
        {
          eng: "We have not visited our grandparents this year.",
          viet: "Năm nay chúng tôi chưa đến thăm ông bà.",
          tokens: [
            { text: "We", label: "Subject", role: "s" },
            { text: "have not visited", label: "Negative Verb (have not + V3)", role: "v" },
            { text: "our grandparents", label: "Object Phrase", role: "o" },
            { text: "this year", label: "Time Adverb", role: "adv" }
          ],
          note: "Câu phủ định với chủ ngữ 'We' đi với 'have not' (haven't). Động từ 'visit' thêm '-ed'."
        },
        {
          eng: "The train has not arrived yet.",
          viet: "Tàu vẫn chưa đến.",
          tokens: [
            { text: "The train", label: "Subject (Số ít)", role: "s" },
            { text: "has not arrived", label: "Negative Verb (has not + V3)", role: "v" },
            { text: "yet", label: "Adverb", role: "adv" }
          ],
          note: "Chủ ngữ 'The train' số ít đi với 'has not' (hasn't). Động từ 'arrive' kết thúc bằng 'e' nên chỉ thêm 'd'."
        },
        {
          eng: "Has she called you?",
          viet: "Cô ấy đã gọi điện cho bạn chưa?",
          tokens: [
            { text: "Has", label: "Auxiliary Verb (Trợ động từ đảo)", role: "aux" },
            { text: "she", label: "Subject", role: "s" },
            { text: "called", label: "V3 (Regular)", role: "v" },
            { text: "you", label: "Object", role: "o" }
          ],
          note: "Chủ ngữ 'she' số ít nên câu hỏi đảo trợ động từ 'Has' lên đầu câu."
        },
        {
          eng: "Have they sold their house?",
          viet: "Họ đã bán nhà của họ chưa?",
          tokens: [
            { text: "Have", label: "Auxiliary Verb", role: "aux" },
            { text: "they", label: "Subject", role: "s" },
            { text: "sold", label: "V3 (Irregular)", role: "v" },
            { text: "their house", label: "Object", role: "o" }
          ],
          note: "Chủ ngữ 'they' số nhiều mượn 'Have' ở câu hỏi. Động từ 'sell' biến đổi thành 'sold' ở V3."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Thiếu trợ động từ have/has trong cấu trúc hoàn thành.</strong></p>
        <p>Sai: <em>"They finished their homework."</em> (Nếu muốn chỉ kết quả liên quan hiện tại).</p>
        <p>Đúng: <em>"They have finished their homework."</em></p>
      `,
      tips: `
        <p>💡 <strong>Công thức khóa:</strong> Hiện tại hoàn thành luôn cần đủ 2 phần: <strong>have/has</strong> + <strong>V3</strong>.</p>
        <ul>
          <li>Khẳng định: <code>S + have/has + V3</code>.</li>
          <li>Phủ định: <code>S + haven't/hasn't + V3</code>.</li>
          <li>Câu hỏi: <code>Have/Has + S + V3?</code>.</li>
        </ul>
        <p>💡 Khi làm bài, hãy kiểm tra theo thứ tự: <strong>chủ ngữ</strong> ➔ chọn <strong>have/has</strong> ➔ đổi động từ chính sang <strong>V3</strong>.</p>
      `
    },

    "2-3": {
      chapter: "Chương 1: Hiện tại hoàn thành",
      lessonNum: 3,
      shortTitle: "Bài 3: Trợ động từ Have & Has",
      title: "Bài 3: Quy tắc chia trợ động từ Have và Has",
      explanation: `
        <p>Việc chọn <strong>have</strong> hay <strong>has</strong> hoàn toàn phụ thuộc vào chủ ngữ của câu:</p>
        <ul>
          <li><strong>HAVE:</strong> Đi với các chủ ngữ số nhiều, ngôi thứ nhất và ngôi thứ hai:<br>
            <code>I / We / You / They / Danh từ số nhiều</code> ➔ <strong>have</strong> (hoặc viết tắt là <strong>'ve</strong>).</li>
          <li><strong>HAS:</strong> Đi với các chủ ngữ ngôi thứ ba số ít:<br>
            <code>He / She / It / Tên riêng / Danh từ số ít</code> ➔ <strong>has</strong> (hoặc viết tắt là <strong>'s</strong>).</li>
        </ul>
      `,
      examples: [
        {
          eng: "We have bought a car.",
          viet: "Chúng tôi đã mua một chiếc xe hơi.",
          tokens: [
            { text: "We", label: "Subject (Ngôi thứ nhất số nhiều)", role: "s" },
            { text: "have bought", label: "Verb (have + V3)", role: "v" },
            { text: "a car", label: "Object (Tân ngữ)", role: "o" }
          ],
          note: "Chủ ngữ là 'We' nên trợ động từ đi kèm phải là 'have'."
        },
        {
          eng: "He has bought a car.",
          viet: "Anh ấy đã mua một chiếc xe hơi.",
          tokens: [
            { text: "He", label: "Subject (Ngôi thứ ba số ít)", role: "s" },
            { text: "has bought", label: "Verb (has + V3)", role: "v" },
            { text: "a car", label: "Object (Tân ngữ)", role: "o" }
          ],
          note: "Chủ ngữ là 'He' nên trợ động từ đi kèm phải là 'has'."
        },
        {
          eng: "I have finished my work.",
          viet: "Tôi đã hoàn thành công việc của mình.",
          tokens: [
            { text: "I", label: "Subject (Ngôi thứ nhất)", role: "s" },
            { text: "have finished", label: "Verb (have + V3)", role: "v" },
            { text: "my work", label: "Object", role: "o" }
          ],
          note: "Chủ ngữ 'I' tuy là số ít nhưng thuộc nhóm đi kèm với trợ động từ 'have'."
        },
        {
          eng: "She has cooked dinner.",
          viet: "Cô ấy đã nấu xong bữa tối.",
          tokens: [
            { text: "She", label: "Subject (Ngôi thứ ba số ít)", role: "s" },
            { text: "has cooked", label: "Verb (has + V3)", role: "v" },
            { text: "dinner", label: "Object", role: "o" }
          ],
          note: "Chủ ngữ 'She' là ngôi thứ ba số ít nên đi với trợ động từ 'has'."
        },
        {
          eng: "They have cleaned the room.",
          viet: "Họ đã dọn dẹp căn phòng.",
          tokens: [
            { text: "They", label: "Subject (Ngôi thứ ba số nhiều)", role: "s" },
            { text: "have cleaned", label: "Verb (have + V3)", role: "v" },
            { text: "the room", label: "Object", role: "o" }
          ],
          note: "Chủ ngữ 'They' số nhiều nên trợ động từ là 'have'."
        },
        {
          eng: "The dog has eaten its food.",
          viet: "Con chó đã ăn thức ăn của nó.",
          tokens: [
            { text: "The dog", label: "Subject (Danh từ số ít)", role: "s" },
            { text: "has eaten", label: "Verb (has + V3)", role: "v" },
            { text: "its food", label: "Object Phrase", role: "o" }
          ],
          note: "Chủ ngữ 'The dog' tương đương ngôi 'It' (số ít) nên đi kèm trợ động từ 'has'."
        },
        {
          eng: "My parents have lived here.",
          viet: "Bố mẹ tôi đã sống ở đây.",
          tokens: [
            { text: "My parents", label: "Subject (Danh từ số nhiều)", role: "s" },
            { text: "have lived", label: "Verb (have + V3)", role: "v" },
            { text: "here", label: "Adverb of Place", role: "adv" }
          ],
          note: "Chủ ngữ 'My parents' tận cùng bằng 's' chỉ số nhiều nên trợ động từ đi kèm là 'have'."
        },
        {
          eng: "Peter has read the newspaper.",
          viet: "Peter đã đọc tờ báo.",
          tokens: [
            { text: "Peter", label: "Subject (Tên riêng số ít)", role: "s" },
            { text: "has read", label: "Verb (has + V3)", role: "v" },
            { text: "the newspaper", label: "Object", role: "o" }
          ],
          note: "Chủ ngữ là tên riêng của một người (số ít) nên dùng trợ động từ 'has'."
        },
        {
          eng: "You have done a great job.",
          viet: "Bạn đã làm một công việc tuyệt vời.",
          tokens: [
            { text: "You", label: "Subject (Ngôi thứ hai)", role: "s" },
            { text: "have done", label: "Verb (have + V3)", role: "v" },
            { text: "a great job", label: "Object Phrase", role: "o" }
          ],
          note: "Chủ ngữ 'You' luôn đi với trợ động từ 'have' ở các thì hoàn thành."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Nhầm lẫn trợ động từ 'have' cho ngôi thứ ba số ít.</strong></p>
        <p>Sai: <em>"She have lived in Hanoi."</em></p>
        <p>Đúng: <em>"She has lived in Hanoi."</em></p>
      `,
      tips: `
        <p>💡 <strong>Mẹo chia Have/Has:</strong></p>
        <ul>
          <li><strong>I, You, We, They, danh từ số nhiều</strong> ➔ dùng <strong>have</strong>.</li>
          <li><strong>He, She, It, tên riêng, danh từ số ít</strong> ➔ dùng <strong>has</strong>.</li>
          <li>Tên riêng một người như <em>John, Mary, Peter</em> được xem như <strong>he/she</strong> ➔ dùng <strong>has</strong>.</li>
        </ul>
      `
    },

    "2-4": {
      chapter: "Chương 1: Hiện tại hoàn thành",
      lessonNum: 4,
      shortTitle: "Bài 4: Phân từ hai V3/Ed",
      title: "Bài 4: Động từ dạng phân từ hai V3 (Past Participle)",
      explanation: `
        <p><strong>Trước hết, cần hiểu V1 - V2 - V3 là gì:</strong></p>
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Ký hiệu</th>
              <th>Tên dễ hiểu</th>
              <th>Dùng khi nào?</th>
              <th>Ví dụ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>V1</strong></td>
              <td>Động từ nguyên mẫu</td>
              <td>Dùng sau do/does/did, hoặc với chủ ngữ số nhiều ở Hiện tại đơn</td>
              <td>go, eat, write, work</td>
            </tr>
            <tr>
              <td><strong>V2</strong></td>
              <td>Động từ quá khứ</td>
              <td>Dùng trong câu khẳng định của thì Quá khứ đơn</td>
              <td>went, ate, wrote, worked</td>
            </tr>
            <tr>
              <td><strong>V3</strong></td>
              <td>Phân từ hai</td>
              <td>Dùng sau have/has trong thì Hiện tại hoàn thành</td>
              <td>gone, eaten, written, worked</td>
            </tr>
          </tbody>
        </table>
        <p><strong>Ví dụ so sánh:</strong></p>
        <ul>
          <li><strong>V1:</strong> <em>I go to school every day.</em></li>
          <li><strong>V2:</strong> <em>I went to school yesterday.</em></li>
          <li><strong>V3:</strong> <em>I have gone to school.</em></li>
        </ul>
        <p>Động từ ở dạng phân từ hai (ký hiệu là <strong>V3</strong> hay <strong>P.P - Past Participle</strong>) chia làm hai loại chính:</p>
        <ol>
          <li><strong>Động từ có quy tắc (Regular Verbs):</strong> Ta chỉ việc thêm đuôi <code>-ed</code> vào sau động từ chính.<br>
            Ví dụ: <em>work ➔ worked</em>, <em>live ➔ lived</em>, <em>play ➔ played</em>, <em>study ➔ studied</em>.</li>
          <li><strong>Động từ bất quy tắc (Irregular Verbs):</strong> Động từ biến đổi hoàn toàn và nằm ở cột thứ 3 trong bảng động từ bất quy tắc.<br>
            Ví dụ: <em>go ➔ gone</em>, <em>eat ➔ eaten</em>, <em>see ➔ seen</em>, <em>write ➔ written</em>, <em>do ➔ done</em>.</li>
        </ol>
      `,
      examples: [
        {
          eng: "I have worked here since yesterday.",
          viet: "Tôi đã làm việc ở đây từ hôm qua.",
          tokens: [
            { text: "I", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "have", label: "Auxiliary (Trợ động từ hoàn thành)", role: "aux" },
            { text: "worked", label: "Regular V3 (thêm -ed vào động từ work)", role: "v" },
            { text: "here", label: "Adverb (Trạng từ nơi chốn)", role: "adv" },
            { text: "since yesterday", label: "Time Adverb (Mốc thời gian)", role: "adv" }
          ],
          note: "Động từ 'work' có quy tắc, chỉ cần thêm '-ed'."
        },
        {
          eng: "I have written a book.",
          viet: "Tôi đã viết một cuốn sách.",
          tokens: [
            { text: "I", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "have", label: "Auxiliary (Trợ động từ hoàn thành)", role: "aux" },
            { text: "written", label: "Irregular V3 (dạng phân từ hai của write)", role: "v" },
            { text: "a book", label: "Object (Tân ngữ)", role: "o" }
          ],
          note: "Động từ 'write' bất quy tắc: write ➔ wrote (V2) ➔ written (V3)."
        },
        {
          eng: "She has lived in Hanoi for ten years.",
          viet: "Cô ấy đã sống ở Hà Nội được mười năm.",
          tokens: [
            { text: "She", label: "Subject", role: "s" },
            { text: "has", label: "Auxiliary", role: "aux" },
            { text: "lived", label: "Regular V3 (live thêm d)", role: "v" },
            { text: "in Hanoi", label: "Adverb of Place", role: "adv" },
            { text: "for ten years", label: "Duration", role: "adv" }
          ],
          note: "Động từ 'live' có tận cùng bằng 'e' nên chỉ việc thêm '-d' thành 'lived' ở dạng V3."
        },
        {
          eng: "He has eaten dinner.",
          viet: "Anh ấy đã ăn tối xong rồi.",
          tokens: [
            { text: "He", label: "Subject", role: "s" },
            { text: "has", label: "Auxiliary", role: "aux" },
            { text: "eaten", label: "Irregular V3 (của động từ eat)", role: "v" },
            { text: "dinner", label: "Object", role: "o" }
          ],
          note: "Động từ 'eat' bất quy tắc: eat ➔ ate (V2) ➔ eaten (V3)."
        },
        {
          eng: "We have played tennis.",
          viet: "Chúng tôi đã chơi quần vợt.",
          tokens: [
            { text: "We", label: "Subject", role: "s" },
            { text: "have", label: "Auxiliary", role: "aux" },
            { text: "played", label: "Regular V3 (play thêm ed)", role: "v" },
            { text: "tennis", label: "Object", role: "o" }
          ],
          note: "Động từ 'play' có quy tắc, ta chỉ việc thêm đuôi '-ed' thành 'played'."
        },
        {
          eng: "They have gone to school.",
          viet: "Họ đã đi học rồi.",
          tokens: [
            { text: "They", label: "Subject", role: "s" },
            { text: "have", label: "Auxiliary", role: "aux" },
            { text: "gone", label: "Irregular V3 (của động từ go)", role: "v" },
            { text: "to school", label: "Prepositional Phrase", role: "o" }
          ],
          note: "Động từ 'go' bất quy tắc: go ➔ went (V2) ➔ gone (V3)."
        },
        {
          eng: "I have studied English.",
          viet: "Tôi đã học tiếng Anh.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "have", label: "Auxiliary", role: "aux" },
            { text: "studied", label: "Regular V3 (biến y thành i thêm ed)", role: "v" },
            { text: "English", label: "Object", role: "o" }
          ],
          note: "Động từ 'study' tận cùng là 'phụ âm + y', đổi 'y' thành 'i' rồi thêm '-ed' thành 'studied'."
        },
        {
          eng: "She has seen that film.",
          viet: "Cô ấy đã xem bộ phim đó rồi.",
          tokens: [
            { text: "She", label: "Subject", role: "s" },
            { text: "has", label: "Auxiliary", role: "aux" },
            { text: "seen", label: "Irregular V3 (của động từ see)", role: "v" },
            { text: "that film", label: "Object Phrase", role: "o" }
          ],
          note: "Động từ 'see' bất quy tắc: see ➔ saw (V2) ➔ seen (V3)."
        },
        {
          eng: "The children have broken the vase.",
          viet: "Lũ trẻ đã làm vỡ chiếc bình hoa.",
          tokens: [
            { text: "The children", label: "Subject (Số nhiều)", role: "s" },
            { text: "have", label: "Auxiliary", role: "aux" },
            { text: "broken", label: "Irregular V3 (của động từ break)", role: "v" },
            { text: "the vase", label: "Object", role: "o" }
          ],
          note: "Động từ 'break' bất quy tắc: break ➔ broke (V2) ➔ broken (V3)."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Dùng nhầm cột V2 (quá khứ) thay vì V3 trong Hiện tại hoàn thành.</strong></p>
        <p>Sai: <em>"I have went to school."</em> (went là V2).</p>
        <p>Đúng: <em>"I have gone to school."</em> (gone mới là V3).</p>
      `,
      tips: `
        <p>💡 <strong>Mẹo chọn V1/V2/V3:</strong></p>
        <ul>
          <li>Sau <strong>did/didn't</strong> ➔ dùng <strong>V1</strong>: <em>Did you go?</em></li>
          <li>Câu khẳng định Quá khứ đơn ➔ dùng <strong>V2</strong>: <em>I went yesterday.</em></li>
          <li>Sau <strong>have/has</strong> ➔ dùng <strong>V3</strong>: <em>I have gone.</em></li>
          <li>Động từ có quy tắc: thường thêm <strong>-ed</strong> (work ➔ worked, play ➔ played).</li>
          <li>Động từ bất quy tắc: học theo bộ 3 cột: <strong>go-went-gone</strong>, <strong>eat-ate-eaten</strong>, <strong>see-saw-seen</strong>, <strong>do-did-done</strong>.</li>
        </ul>
      `
    },

    "2-5": {
      chapter: "Chương 1: Hiện tại hoàn thành",
      lessonNum: 5,
      shortTitle: "Bài 5: Cách dùng HTHT",
      title: "Bài 5: Bốn cách sử dụng chính của thì Hiện tại hoàn thành",
      explanation: `
        <p>Thì Hiện tại hoàn thành có 4 cách dùng kinh điển bạn bắt buộc phải nằm lòng:</p>
        <ol>
          <li><strong>Hành động đã hoàn thành:</strong> Diễn tả một hành động vừa mới xảy ra hoặc hoàn thành gần đây.<br>
            Ví dụ: <em>I have just eaten.</em> (Tôi vừa mới ăn xong).</li>
          <li><strong>Kinh nghiệm, trải nghiệm:</strong> Diễn tả một sự việc đã từng làm hay chưa từng làm trong đời (không quan trọng thời gian cụ thể).<br>
            Ví dụ: <em>Have you ever traveled to Japan?</em> (Bạn đã từng đi Nhật Bản chưa?).</li>
          <li><strong>Kết quả ảnh hưởng tới hiện tại:</strong> Diễn tả hành động xảy ra trong quá khứ nhưng kết quả của nó vẫn còn tác động đến hiện tại.<br>
            Ví dụ: <em>I have lost my key.</em> (Tôi đã mất chìa khóa - Hiện tại tôi vẫn chưa vào được nhà).</li>
          <li><strong>Hành động kéo dài từ quá khứ đến hiện tại:</strong> Diễn tả hành động bắt đầu ở quá khứ và vẫn tiếp diễn ở hiện tại.<br>
            Ví dụ: <em>They have been married for ten years.</em> (Họ đã cưới nhau được 10 năm rồi).</li>
        </ol>
      `,
      examples: [
        {
          eng: "I have lost my key.",
          viet: "Tôi đã làm mất chìa khóa rồi.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "have lost", label: "Verb (kết quả ảnh hưởng hiện tại)", role: "v" },
            { text: "my key", label: "Object", role: "o" }
          ],
          note: "Hành động làm mất chìa khóa xảy ra trong quá khứ, và hậu quả hiện tại là tôi không có chìa khóa để mở cửa."
        },
        {
          eng: "I have just eaten lunch.",
          viet: "Tôi vừa mới ăn trưa xong.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "have just eaten", label: "Verb (Vừa mới hoàn thành)", role: "v" },
            { text: "lunch", label: "Object", role: "o" }
          ],
          note: "Hành động ăn trưa vừa kết thúc tức thì trước khi nói, dùng trạng từ 'just'."
        },
        {
          eng: "She has recently moved to a new apartment.",
          viet: "Gần đây cô ấy đã chuyển đến một căn hộ mới.",
          tokens: [
            { text: "She", label: "Subject", role: "s" },
            { text: "has recently moved", label: "Verb (Mới xảy ra gần đây)", role: "v" },
            { text: "to a new apartment", label: "Prepositional Phrase", role: "o" }
          ],
          note: "Hành động chuyển nhà xảy ra gần đây, sử dụng trạng từ 'recently' với Hiện tại hoàn thành."
        },
        {
          eng: "He has visited London three times.",
          viet: "Anh ấy đã đến thăm Luân Đôn ba lần.",
          tokens: [
            { text: "He", label: "Subject", role: "s" },
            { text: "has visited", label: "Verb (Trải nghiệm đếm số lần)", role: "v" },
            { text: "London", label: "Object", role: "o" },
            { text: "three times", label: "Frequency (Số lần thực hiện)", role: "adv" }
          ],
          note: "Diễn tả số lần làm một việc gì đó tính đến hiện tại (trải nghiệm cá nhân)."
        },
        {
          eng: "Have you ever eaten sushi?",
          viet: "Bạn đã từng ăn sushi bao giờ chưa?",
          tokens: [
            { text: "Have", label: "Auxiliary Verb", role: "aux" },
            { text: "you", label: "Subject", role: "s" },
            { text: "ever", label: "Adverb (Đã từng)", role: "adv" },
            { text: "eaten", label: "V3 (Trải nghiệm cuộc sống)", role: "v" },
            { text: "sushi", label: "Object", role: "o" }
          ],
          note: "Dùng 'ever' trong câu hỏi để hỏi về trải nghiệm cuộc đời tính đến nay."
        },
        {
          eng: "He has broken his leg.",
          viet: "Anh ấy đã bị gãy chân.",
          tokens: [
            { text: "He", label: "Subject", role: "s" },
            { text: "has broken", label: "Verb (Kết quả ảnh hưởng hiện tại)", role: "v" },
            { text: "his leg", label: "Object", role: "o" }
          ],
          note: "Chân bị gãy trong quá khứ và hậu quả hiện tại là anh ấy đang phải bó bột, không đi lại được."
        },
        {
          eng: "We have been married for five years.",
          viet: "Chúng tôi đã kết hôn được năm năm.",
          tokens: [
            { text: "We", label: "Subject", role: "s" },
            { text: "have been", label: "Verb (Kéo dài từ quá khứ đến nay)", role: "v" },
            { text: "married", label: "Adjective (Trạng thái)", role: "o" },
            { text: "for five years", label: "Duration (Khoảng thời gian)", role: "adv" }
          ],
          note: "Việc kết hôn bắt đầu từ 5 năm trước và hiện tại chúng tôi vẫn đang trong tình trạng hôn nhân."
        },
        {
          eng: "She has worked for this company since 2020.",
          viet: "Cô ấy đã làm việc cho công ty này từ năm 2020.",
          tokens: [
            { text: "She", label: "Subject", role: "s" },
            { text: "has worked", label: "Verb (Hành động kéo dài)", role: "v" },
            { text: "for this company", label: "Prepositional Phrase", role: "o" },
            { text: "since 2020", label: "Starting Point (Mốc bắt đầu)", role: "adv" }
          ],
          note: "Công việc bắt đầu từ năm 2020 và hiện tại cô ấy vẫn đang làm ở đây."
        },
        {
          eng: "I have loved classical music all my life.",
          viet: "Tôi đã yêu âm nhạc cổ điển suốt cả cuộc đời mình.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "have loved", label: "Verb (Tình trạng kéo dài liên tục)", role: "v" },
            { text: "classical music", label: "Object Phrase", role: "o" },
            { text: "all my life", label: "Duration Phrase", role: "adv" }
          ],
          note: "Sở thích bắt đầu từ khi sinh ra và đến hiện tại sở thích này vẫn đang tiếp diễn."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Dùng Quá khứ đơn cho hành động ảnh hưởng trực tiếp đến hiện tại mà không đề cập mốc thời gian.</strong></p>
        <p>Sai: <em>"Look! Someone broke the window."</em> (Nên dùng HTHT để nhấn mạnh kết quả hiện tại).</p>
        <p>Đúng: <em>"Look! Someone has broken the window."</em> (Cửa sổ hiện tại đang bị vỡ).</p>
      `,
      tips: `
        <p>💡 <strong>4 tín hiệu dễ nhớ của Hiện tại hoàn thành:</strong></p>
        <ul>
          <li><strong>Vừa mới xong:</strong> thường có <em>just</em> ➔ <code>I have just eaten.</code></li>
          <li><strong>Trải nghiệm:</strong> thường có <em>ever/never/before</em> ➔ <code>Have you ever...?</code></li>
          <li><strong>Kết quả hiện tại:</strong> quá khứ xảy ra, bây giờ còn hậu quả ➔ <code>I have lost my key.</code></li>
          <li><strong>Kéo dài tới nay:</strong> thường có <em>for/since</em> ➔ <code>She has worked here since 2020.</code></li>
        </ul>
      `
    },

    "2-6": {
      chapter: "Chương 1: Hiện tại hoàn thành",
      lessonNum: 6,
      shortTitle: "Bài 6: Dấu hiệu HTHT",
      title: "Bài 6: Các dấu hiệu nhận biết thì Hiện tại hoàn thành",
      explanation: `
        <p>Hãy chú ý các trạng từ chỉ thời gian rất đặc trưng sau đây để chia thì Hiện tại hoàn thành:</p>
        <ul>
          <li><strong>Since + mốc thời gian:</strong> từ khi (since 2010, since last night).</li>
          <li><strong>For + khoảng thời gian:</strong> trong vòng (for 3 years, for a long time).</li>
          <li><strong>Already:</strong> đã... rồi (đứng giữa have/has và V3 hoặc cuối câu).</li>
          <li><strong>Just:</strong> vừa mới (đứng giữa have/has và V3).</li>
          <li><strong>Yet:</strong> chưa (dùng trong câu phủ định và nghi vấn, thường đứng cuối câu).</li>
          <li><strong>Ever / Never:</strong> đã từng / chưa bao giờ.</li>
          <li><strong>Recently / Lately:</strong> gần đây.</li>
          <li><strong>So far / Up to now / Until now:</strong> cho đến nay.</li>
        </ul>
      `,
      examples: [
        {
          eng: "She has not finished her work yet.",
          viet: "Cô ấy vẫn chưa hoàn thành công việc của mình.",
          tokens: [
            { text: "She", label: "Subject (Chủ ngữ số ít)", role: "s" },
            { text: "has not finished", label: "Verb (Phủ định: has + not + V3)", role: "v" },
            { text: "her work", label: "Object (Tân ngữ)", role: "o" },
            { text: "yet", label: "Adverb (Báo hiệu chưa hoàn thành, đứng cuối)", role: "adv" }
          ],
          note: "Trạng từ 'yet' thường dùng ở cuối câu phủ định để chỉ hành động chưa diễn ra."
        },
        {
          eng: "I have worked here for five years.",
          viet: "Tôi đã làm việc ở đây được năm năm.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "have worked", label: "Verb (have + V3)", role: "v" },
            { text: "here", label: "Adverb of Place", role: "adv" },
            { text: "for five years", label: "Khoảng thời gian (For + khoảng)", role: "adv" }
          ],
          note: "'For' đi với một khoảng thời gian kéo dài (5 năm)."
        },
        {
          eng: "They have lived in Saigon since 2015.",
          viet: "Họ đã sống ở Sài Gòn từ năm 2015.",
          tokens: [
            { text: "They", label: "Subject", role: "s" },
            { text: "have lived", label: "Verb (have + V3)", role: "v" },
            { text: "in Saigon", label: "Adverb of Place", role: "adv" },
            { text: "since 2015", label: "Mốc thời gian (Since + mốc)", role: "adv" }
          ],
          note: "'Since' đi kèm với một mốc thời gian cụ thể bắt đầu hành động (năm 2015)."
        },
        {
          eng: "He has just left the room.",
          viet: "Anh ấy vừa mới rời khỏi phòng.",
          tokens: [
            { text: "He", label: "Subject", role: "s" },
            { text: "has just left", label: "Verb (just đứng giữa has và V3)", role: "v" },
            { text: "the room", label: "Object", role: "o" }
          ],
          note: "Trạng từ 'just' chỉ hành động vừa mới xảy ra, đứng kẹp giữa 'has' và V3 'left'."
        },
        {
          eng: "We have already bought the tickets.",
          viet: "Chúng tôi đã mua vé rồi.",
          tokens: [
            { text: "We", label: "Subject", role: "s" },
            { text: "have already bought", label: "Verb (already đứng giữa have và V3)", role: "v" },
            { text: "the tickets", label: "Object Phrase", role: "o" }
          ],
          note: "Trạng từ 'already' nhấn mạnh việc mua vé đã hoàn thành xong rồi, đứng kẹp giữa trợ động từ và V3."
        },
        {
          eng: "Have you ever ridden a horse?",
          viet: "Bạn đã từng cưỡi ngựa bao giờ chưa?",
          tokens: [
            { text: "Have", label: "Auxiliary Verb", role: "aux" },
            { text: "you", label: "Subject", role: "s" },
            { text: "ever", label: "Adverb (Đứng trước V3)", role: "adv" },
            { text: "ridden", label: "V3 (Phân từ hai của ride)", role: "v" },
            { text: "a horse", label: "Object", role: "o" }
          ],
          note: "'Ever' thường dùng trong câu hỏi nghi vấn để hỏi về trải nghiệm cuộc đời."
        },
        {
          eng: "I have never seen snow.",
          viet: "Tôi chưa bao giờ nhìn thấy tuyết.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "have never seen", label: "Negative Verb (never chỉ sự phủ định)", role: "v" },
            { text: "snow", label: "Object", role: "o" }
          ],
          note: "'Never' mang ý nghĩa phủ định (chưa từng), đứng kẹp giữa trợ động từ 'have' và V3 'seen'."
        },
        {
          eng: "She has written three letters so far.",
          viet: "Cho đến nay cô ấy đã viết được ba bức thư.",
          tokens: [
            { text: "She", label: "Subject", role: "s" },
            { text: "has written", label: "Verb (has + V3)", role: "v" },
            { text: "three letters", label: "Object Phrase", role: "o" },
            { text: "so far", label: "Adverb (Cho đến nay, đứng cuối câu)", role: "adv" }
          ],
          note: "'So far' (cho đến nay) chỉ số lượng kết quả tích lũy tính tới thời điểm hiện tại."
        },
        {
          eng: "They have had many tests recently.",
          viet: "Gần đây họ có rất nhiều bài kiểm tra.",
          tokens: [
            { text: "They", label: "Subject", role: "s" },
            { text: "have had", label: "Verb (have + V3 của động từ have)", role: "v" },
            { text: "many tests", label: "Object Phrase", role: "o" },
            { text: "recently", label: "Adverb (Gần đây, đứng cuối)", role: "adv" }
          ],
          note: "'Recently' (gần đây) báo hiệu hành động diễn ra trong khoảng thời gian gần thời điểm nói."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Nhầm lẫn giữa Since và For.</strong></p>
        <p>Sai: <em>"I have worked here since 3 years."</em> (3 years là khoảng thời gian).</p>
        <p>Đúng: <em>"I have worked here for 3 years."</em> hoặc <em>"since 2023"</em>.</p>
      `,
      tips: `
        <p>💡 <strong>Cách nhớ Since/For:</strong></p>
        <ul>
          <li><strong>Since = Mốc bắt đầu</strong>: since 2018, since Monday, since yesterday.</li>
          <li><strong>For = Khoảng kéo dài</strong>: for 3 years, for two hours, for a long time.</li>
          <li>Mẹo hỏi nhanh: <strong>"Từ lúc nào?"</strong> ➔ since. <strong>"Bao lâu rồi?"</strong> ➔ for.</li>
        </ul>
      `
    },

    "2-7": {
      chapter: "Chương 1: Hiện tại hoàn thành",
      lessonNum: 7,
      shortTitle: "Bài 7: Lỗi sai HTHT",
      title: "Bài 7: Các lỗi sai thường gặp khi dùng Hiện tại hoàn thành",
      explanation: `
        <p>Hãy cùng phân tích kỹ các lỗi sai phổ biến nhất khi học thì Hiện tại hoàn thành để tránh mắc phải:</p>
        <ol>
          <li><strong>Lỗi chia động từ V2 thay vì V3:</strong> Sử dụng động từ cột quá khứ thay vì cột phân từ hai.</li>
          <li><strong>Lỗi dùng sai trợ động từ cho chủ ngữ:</strong> Quên chia has cho chủ ngữ số ít.</li>
          <li><strong>Dùng sai dấu hiệu Since/For:</strong> Đặt since trước khoảng thời gian hoặc ngược lại.</li>
          <li><strong>Chia tiếp diễn hoặc quá khứ đơn cho câu kinh nghiệm:</strong> Nhầm lẫn khi mô tả trải nghiệm.</li>
        </ol>
      `,
      examples: [
        {
          eng: "Have you ever travelled to Japan?",
          viet: "Bạn đã từng đi du lịch Nhật Bản chưa?",
          tokens: [
            { text: "Have", label: "Auxiliary (Trợ động từ đảo lên đầu câu hỏi)", role: "aux" },
            { text: "you", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "ever", label: "Adverb (Trạng từ chỉ kinh nghiệm)", role: "adv" },
            { text: "travelled", label: "V3 (Phân từ hai của travel)", role: "v" },
            { text: "to Japan", label: "Prepositional Phrase (Bổ ngữ nơi chốn)", role: "o" }
          ],
          note: "Khi hỏi về trải nghiệm tính đến hiện tại với 'ever', mẫu chuẩn cho người học là dùng Hiện tại hoàn thành."
        },
        {
          eng: "She has gone to the supermarket.",
          viet: "Cô ấy đã đi siêu thị rồi.",
          tokens: [
            { text: "She", label: "Subject", role: "s" },
            { text: "has gone", label: "Verb (Sửa lỗi: dùng V3 gone thay vì V2 went)", role: "v" },
            { text: "to the supermarket", label: "Prepositional Phrase", role: "o" }
          ],
          note: "Lỗi phổ biến là viết 'She has went' (sai). Điểm sửa: Đổi 'went' thành V3 là 'gone'."
        },
        {
          eng: "He has bought a laptop.",
          viet: "Anh ấy đã mua một chiếc máy tính xách tay.",
          tokens: [
            { text: "He", label: "Subject", role: "s" },
            { text: "has bought", label: "Verb (Sửa lỗi: chia has cho chủ ngữ số ít He)", role: "v" },
            { text: "a laptop", label: "Object", role: "o" }
          ],
          note: "Lỗi phổ biến là viết 'He have bought' (sai). Điểm sửa: Đổi 'have' thành 'has'."
        },
        {
          eng: "I have lived here since 2020.",
          viet: "Tôi đã sống ở đây từ năm 2020.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "have lived", label: "Verb (Sửa lỗi: dùng HTHT thay vì QKĐ)", role: "v" },
            { text: "here", label: "Adverb of Place", role: "adv" },
            { text: "since 2020", label: "Mốc thời gian", role: "adv" }
          ],
          note: "Lỗi phổ biến là viết 'I lived here since 2020' khi muốn nói hiện tại vẫn sống ở đây. Vì 'since 2020' kéo dài tới nay nên dùng Hiện tại hoàn thành."
        },
        {
          eng: "They have visited Paris twice.",
          viet: "Họ đã đến thăm Paris hai lần.",
          tokens: [
            { text: "They", label: "Subject", role: "s" },
            { text: "have visited", label: "Verb (Sửa lỗi: đếm số lần)", role: "v" },
            { text: "Paris", label: "Object", role: "o" },
            { text: "twice", label: "Adverb", role: "adv" }
          ],
          note: "Nếu muốn nói trải nghiệm/số lần tính tới hiện tại, dùng Hiện tại hoàn thành. Quá khứ đơn chỉ phù hợp khi có mốc quá khứ rõ hoặc ngữ cảnh đã kết thúc."
        },
        {
          eng: "She hasn't finished yet.",
          viet: "Cô ấy vẫn chưa hoàn thành.",
          tokens: [
            { text: "She", label: "Subject", role: "s" },
            { text: "hasn't finished", label: "Verb (Sửa lỗi: dùng yet trong phủ định)", role: "v" },
            { text: "yet", label: "Adverb", role: "adv" }
          ],
          note: "Lỗi phổ biến là dùng 'already' cho câu phủ định (sai). Điểm sửa: Phải dùng 'yet' ở cuối câu phủ định."
        },
        {
          eng: "We have walked for two hours.",
          viet: "Chúng tôi đã đi bộ được hai tiếng đồng hồ.",
          tokens: [
            { text: "We", label: "Subject", role: "s" },
            { text: "have walked", label: "Verb", role: "v" },
            { text: "for two hours", label: "Khoảng thời gian (Sửa lỗi: dùng for thay vì since)", role: "adv" }
          ],
          note: "Lỗi phổ biến là viết 'since two hours' (sai). 'Two hours' là khoảng thời gian nên phải dùng 'for'."
        },
        {
          eng: "I have lost my keys.",
          viet: "Tôi đã làm mất chìa khóa rồi.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "have lost", label: "Verb (Sửa lỗi: kết quả ảnh hưởng hiện tại)", role: "v" },
            { text: "my keys", label: "Object Phrase", role: "o" }
          ],
          note: "Lỗi phổ biến là dùng quá khứ đơn 'I lost my keys' khi đang muốn nhấn mạnh hậu quả hiện tại không vào được nhà."
        },
        {
          eng: "He has been here since morning.",
          viet: "Anh ấy đã ở đây từ sáng rồi.",
          tokens: [
            { text: "He", label: "Subject", role: "s" },
            { text: "has been", label: "Verb (Sửa lỗi: dùng HTHT thay vì hiện tại đơn)", role: "v" },
            { text: "here", label: "Adverb of Place", role: "adv" },
            { text: "since morning", label: "Mốc thời gian", role: "adv" }
          ],
          note: "Lỗi phổ biến là viết 'He is here since morning' (dùng Hiện tại đơn là sai khi đi kèm 'since')."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Dùng Quá khứ đơn với 'since' khi hành động vẫn kéo dài tới hiện tại.</strong></p>
        <p>Sai: <em>"I lived here since 2015."</em></p>
        <p>Đúng: <em>"I have lived here since 2015."</em></p>
      `,
      tips: `
        <p>💡 <strong>Checklist tránh lỗi Hiện tại hoàn thành:</strong></p>
        <ul>
          <li>Có <strong>have/has</strong> chưa?</li>
          <li>Động từ chính đã đổi sang <strong>V3</strong> chưa?</li>
          <li>Chủ ngữ số ít đã dùng <strong>has</strong> chưa?</li>
          <li><strong>Since</strong> đi với mốc, <strong>for</strong> đi với khoảng chưa?</li>
        </ul>
      `
    },

    // CHAPTER 2: PAST SIMPLE
    "2-8": {
      chapter: "Chương 2: Quá khứ đơn",
      lessonNum: 8,
      shortTitle: "Bài 8: Khái niệm QKĐ",
      title: "Bài 8: Khái niệm thì Quá khứ đơn (Past Simple)",
      explanation: `
        <p>Thì <strong>Quá khứ đơn (Past Simple)</strong> dùng để diễn tả một hành động hoặc sự việc đã xảy ra và <strong>kết thúc trong quá khứ</strong>. Thì này nhấn mạnh thời điểm/sự kiện trong quá khứ hơn là kết quả ở hiện tại.</p>
        <p>Khác biệt cốt lõi: Thì quá khứ đơn nhấn mạnh hành động xảy ra tại một <strong>thời điểm xác định trong quá khứ</strong> và đã chấm dứt.</p>
        <p><strong>Cấu trúc tổng quan:</strong></p>
        <ul>
          <li><strong>Khẳng định:</strong> <code>S + V2/Ed</code> (động từ chia quá khứ).</li>
          <li><strong>Phủ định:</strong> <code>S + didn't + V (nguyên mẫu)</code>.</li>
          <li><strong>Nghi vấn:</strong> <code>Did + S + V (nguyên mẫu)?</code></li>
          <li><strong>To Be:</strong> <code>S + was/were</code> (chi tiết ở Bài 9).</li>
        </ul>
      `,
      examples: [
        {
          eng: "I bought this car yesterday.",
          viet: "Tôi đã mua chiếc xe này ngày hôm qua.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "bought", label: "Verb (Quá khứ đơn của buy)", role: "v" },
            { text: "this car", label: "Object", role: "o" },
            { text: "yesterday", label: "Time Adverb (Mốc thời gian xác định)", role: "adv" }
          ],
          note: "Hành động mua xe diễn ra hôm qua và đã hoàn thành hoàn toàn."
        },
        {
          eng: "She graduated from university in 2018.",
          viet: "Cô ấy đã tốt nghiệp đại học vào năm 2018.",
          tokens: [
            { text: "She", label: "Subject", role: "s" },
            { text: "graduated", label: "Verb (Regular V2)", role: "v" },
            { text: "from university", label: "Prepositional Phrase", role: "o" },
            { text: "in 2018", label: "Time Adverb (Năm xác định trong quá khứ)", role: "adv" }
          ],
          note: "Hành động tốt nghiệp đã diễn ra và kết thúc hoàn toàn vào mốc thời gian năm 2018."
        },
        {
          eng: "We visited London last summer.",
          viet: "Chúng tôi đã đi thăm Luân Đôn mùa hè năm ngoái.",
          tokens: [
            { text: "We", label: "Subject", role: "s" },
            { text: "visited", label: "Verb (Regular V2)", role: "v" },
            { text: "London", label: "Object", role: "o" },
            { text: "last summer", label: "Time Adverb (Mùa hè trước)", role: "adv" }
          ],
          note: "Hành động thăm Luân Đôn đã hoàn thành xong trong mùa hè năm ngoái."
        },
        {
          eng: "He saw a doctor three days ago.",
          viet: "Anh ấy đã đi khám bác sĩ ba ngày trước.",
          tokens: [
            { text: "He", label: "Subject", role: "s" },
            { text: "saw", label: "Verb (Irregular V2 của see)", role: "v" },
            { text: "a doctor", label: "Object", role: "o" },
            { text: "three days ago", label: "Time Adverb (Ba ngày trước)", role: "adv" }
          ],
          note: "Hành động khám bác sĩ diễn ra 3 ngày trước và đã kết thúc."
        },
        {
          eng: "They moved to their new house last week.",
          viet: "Họ đã chuyển đến ngôi nhà mới vào tuần trước.",
          tokens: [
            { text: "They", label: "Subject", role: "s" },
            { text: "moved", label: "Verb (Regular V2)", role: "v" },
            { text: "to their new house", label: "Prepositional Phrase", role: "o" },
            { text: "last week", label: "Time Adverb (Tuần trước)", role: "adv" }
          ],
          note: "Hành động chuyển nhà diễn ra vào tuần trước và đã kết thúc."
        },
        {
          eng: "The train arrived at 8:00 AM yesterday.",
          viet: "Tàu đã đến vào lúc 8 giờ sáng ngày hôm qua.",
          tokens: [
            { text: "The train", label: "Subject", role: "s" },
            { text: "arrived", label: "Verb (Regular V2)", role: "v" },
            { text: "at 8:00 AM", label: "Time Point", role: "adv" },
            { text: "yesterday", label: "Time Adverb", role: "adv" }
          ],
          note: "Hành động tàu cập bến đã hoàn thành vào một thời điểm cụ thể ngày hôm qua."
        },
        {
          eng: "My mother cooked a delicious meal last night.",
          viet: "Mẹ tôi đã nấu một bữa ăn ngon tối qua.",
          tokens: [
            { text: "My mother", label: "Subject", role: "s" },
            { text: "cooked", label: "Verb (Regular V2)", role: "v" },
            { text: "a delicious meal", label: "Object Phrase", role: "o" },
            { text: "last night", label: "Time Adverb (Tối qua)", role: "adv" }
          ],
          note: "Việc nấu ăn đã hoàn thành tối hôm qua."
        },
        {
          eng: "He played soccer when he was a child.",
          viet: "Anh ấy đã chơi bóng đá khi còn là một đứa trẻ.",
          tokens: [
            { text: "He", label: "Subject", role: "s" },
            { text: "played", label: "Verb (Regular V2)", role: "v" },
            { text: "soccer", label: "Object", role: "o" },
            { text: "when he was a child", label: "Past Time Clause", role: "adv" }
          ],
          note: "Diễn tả thói quen hoặc trạng thái trong một giai đoạn thời gian đã qua trong quá khứ."
        },
        {
          eng: "I wrote a letter to my friend yesterday.",
          viet: "Tôi đã viết một bức thư cho bạn tôi ngày hôm qua.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "wrote", label: "Verb (Irregular V2 của write)", role: "v" },
            { text: "a letter", label: "Object", role: "o" },
            { text: "to my friend", label: "Prepositional Phrase", role: "o" },
            { text: "yesterday", label: "Time Adverb", role: "adv" }
          ],
          note: "Việc viết thư đã kết thúc hoàn toàn vào hôm qua."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Dùng Hiện tại hoàn thành khi có thời gian xác định trong quá khứ.</strong></p>
        <p>Sai: <em>"I have seen him yesterday."</em></p>
        <p>Đúng: <em>"I saw him yesterday."</em></p>
      `,
      tips: `
        <p>💡 <strong>Mẹo nhận ra Quá khứ đơn:</strong> Nếu câu nói rõ một thời điểm đã qua, hãy nghĩ tới Quá khứ đơn.</p>
        <ul>
          <li>Dấu hiệu mạnh: <em>yesterday, ago, last week, last year, in 2018</em>.</li>
          <li>Công thức khẳng định: <code>S + V2/ed</code>.</li>
          <li>Câu hỏi/phủ định với động từ thường: dùng <strong>did/didn't</strong> và đưa động từ về nguyên mẫu.</li>
        </ul>
      `
    },

    "2-9": {
      chapter: "Chương 2: Quá khứ đơn",
      lessonNum: 9,
      shortTitle: "Bài 9: To Be trong quá khứ",
      title: "Bài 9: Động từ To Be trong quá khứ (Was / Were)",
      explanation: `
        <p>Động từ “to be” ở thì quá khứ đơn có hai dạng là <strong>“was”</strong> và <strong>“were”</strong>.</p>
        <p><strong>A. Khẳng định:</strong> <code>S + was/ were</code></p>
        <ul>
          <li><code>S = I/ He/ She/ It/ tên riêng/ danh từ số ít</code> (chủ ngữ số ít) ➔ đi với <strong>was</strong>.</li>
          <li><code>S = We/ You/ They/ danh từ số nhiều</code> (chủ ngữ số nhiều) ➔ đi với <strong>were</strong>.</li>
        </ul>
        <p><strong>B. Phủ định:</strong> <code>S + was/ were + not</code> (đối với câu phủ định ta chỉ cần thêm "not" vào sau động từ "to be")</p>
        <ul>
          <li>Chủ ngữ số ít ➔ đi với <strong>wasn't</strong> (was not).</li>
          <li>Chủ ngữ số nhiều ➔ đi với <strong>weren't</strong> (were not).</li>
        </ul>
        <p><strong>C. Câu hỏi:</strong> <code>Were / Was + S?</code> (ta chỉ cần đảo động từ “to be” lên trước chủ ngữ)</p>
        <ul>
          <li><code>Was + I/ he/ she/ it/ tên riêng/ danh từ số ít + ... ?</code><br>➔ Trả lời: <em>Yes, S + was. / No, S + wasn't.</em></li>
          <li><code>Were + we/ you/ they/ danh từ số nhiều + ... ?</code><br>➔ Trả lời: <em>Yes, S + were. / No, S + weren't.</em></li>
        </ul>
      `,
      examples: [
        {
          eng: "I was at my friend's house yesterday morning.",
          viet: "Tôi đã ở nhà bạn tôi sáng hôm qua.",
          tokens: [
            { text: "I", label: "Subject (Ngôi thứ nhất số ít)", role: "s" },
            { text: "was", label: "To Be (Quá khứ số ít)", role: "be" },
            { text: "at my friend's house", label: "Prepositional Phrase (Nơi chốn)", role: "o" },
            { text: "yesterday morning", label: "Time Adverb (Sáng hôm qua)", role: "adv" }
          ],
          note: "Chủ ngữ 'I' đi với 'was'. Trạng từ 'yesterday morning' xác định mốc thời gian quá khứ."
        },
        {
          eng: "They were in Bangkok on their summer holiday last year.",
          viet: "Họ ở Băng Cốc vào kỳ nghỉ hè năm ngoái.",
          tokens: [
            { text: "They", label: "Subject (Số nhiều)", role: "s" },
            { text: "were", label: "To Be (Quá khứ số nhiều)", role: "be" },
            { text: "in Bangkok", label: "Prepositional Phrase (Nơi chốn)", role: "o" },
            { text: "on their summer holiday last year", label: "Time Phrase (Kỳ nghỉ hè năm ngoái)", role: "adv" }
          ],
          note: "Chủ ngữ số nhiều 'They' đi với 'were' trong quá khứ."
        },
        {
          eng: "He wasn't very happy last night because of having lost money.",
          viet: "Tối qua anh ấy không vui vì bị mất tiền.",
          tokens: [
            { text: "He", label: "Subject (Số ít)", role: "s" },
            { text: "wasn't", label: "Negative To Be (was not)", role: "be" },
            { text: "very happy", label: "Adjective Phrase (Trạng thái)", role: "o" },
            { text: "last night", label: "Time Adverb (Tối qua)", role: "adv" },
            { text: "because of having lost money", label: "Reason Phrase (Lý do mất tiền)", role: "adv" }
          ],
          note: "Phủ định của 'was' là 'wasn't' (viết tắt của was not) đi với chủ ngữ số ít 'He'."
        },
        {
          eng: "We weren't at home yesterday.",
          viet: "Hôm qua chúng tôi không ở nhà.",
          tokens: [
            { text: "We", label: "Subject (Số nhiều)", role: "s" },
            { text: "weren't", label: "Negative To Be (were not)", role: "be" },
            { text: "at home", label: "Prepositional Phrase (Nơi chốn)", role: "o" },
            { text: "yesterday", label: "Time Adverb (Hôm qua)", role: "adv" }
          ],
          note: "Phủ định của 'were' là 'weren't' (viết tắt của were not) đi với chủ ngữ số nhiều 'We'."
        },
        {
          eng: "Was she tired of hearing her customer's complaint yesterday?",
          viet: "Cô ấy có bị mệt vì nghe khách hàng phàn nàn ngày hôm qua không?",
          tokens: [
            { text: "Was", label: "To Be (Đảo lên trước chủ ngữ)", role: "be" },
            { text: "she", label: "Subject (Số ít)", role: "s" },
            { text: "tired of hearing her customer's complaint", label: "Adjective Phrase (Bổ ngữ)", role: "o" },
            { text: "yesterday", label: "Time Adverb", role: "adv" }
          ],
          note: "Câu nghi vấn đảo 'Was' lên trước chủ ngữ số ít 'she'. Câu trả lời sẽ là: Yes, she was. hoặc No, she wasn't."
        },
        {
          eng: "Were they at work yesterday?",
          viet: "Hôm qua họ có làm việc không?",
          tokens: [
            { text: "Were", label: "To Be (Đảo lên trước chủ ngữ)", role: "be" },
            { text: "they", label: "Subject (Số nhiều)", role: "s" },
            { text: "at work", label: "Prepositional Phrase", role: "o" },
            { text: "yesterday", label: "Time Adverb", role: "adv" }
          ],
          note: "Câu nghi vấn đảo 'Were' lên trước chủ ngữ số nhiều 'they'. Câu trả lời sẽ là: Yes, they were. hoặc No, they weren't."
        },
        {
          eng: "She was at home last night.",
          viet: "Cô ấy ở nhà tối qua.",
          tokens: [
            { text: "She", label: "Subject (Số ít)", role: "s" },
            { text: "was", label: "To Be (Quá khứ số ít)", role: "be" },
            { text: "at home last night", label: "Adverbial", role: "adv" }
          ],
          note: "Chủ ngữ là 'She' nên ta chia 'was' ở quá khứ."
        },
        {
          eng: "They were not at the party.",
          viet: "Họ đã không có mặt ở bữa tiệc.",
          tokens: [
            { text: "They", label: "Subject (Số nhiều)", role: "s" },
            { text: "were not", label: "Negative To Be (Phủ định, viết tắt: weren't)", role: "be" },
            { text: "at the party", label: "Prepositional Phrase (Bổ ngữ nơi chốn)", role: "o" }
          ],
          note: "Chủ ngữ số nhiều 'They' đi kèm phủ định 'were not' (weren't)."
        },
        {
          eng: "I was tired yesterday morning.",
          viet: "Tôi đã rất mệt sáng hôm qua.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "was", label: "To Be (Quá khứ đi với I)", role: "be" },
            { text: "tired", label: "Adjective (Trạng thái)", role: "o" },
            { text: "yesterday morning", label: "Time Adverb", role: "adv" }
          ],
          note: "Chủ ngữ 'I' đi với 'was' trong quá khứ đơn."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Nhầm lẫn was/were theo chủ ngữ hoặc dùng did/didn't với động từ To Be.</strong></p>
        <p>Sai: <em>"They was happy."</em> hoặc <em>"Did you were there?"</em></p>
        <p>Đúng: <em>"They were happy."</em> và <em>"Were you there?"</em></p>
      `,
      tips: `
        <p>💡 <strong>Mẹo nhớ Was/Were:</strong></p>
        <ul>
          <li><strong>I, He, She, It, danh từ số ít</strong> ➔ dùng <strong>was</strong>.</li>
          <li><strong>You, We, They, danh từ số nhiều</strong> ➔ dùng <strong>were</strong>.</li>
          <li>Đã có <strong>was/were</strong> thì không mượn <strong>did/didn't</strong> nữa.</li>
        </ul>
      `
    },

    "2-10": {
      chapter: "Chương 2: Quá khứ đơn",
      lessonNum: 10,
      shortTitle: "Bài 10: Động từ thường quá khứ V2",
      title: "Bài 10: Động từ thường trong thì Quá khứ đơn (V2/Ed)",
      explanation: `
        <p><strong>Nhắc lại nhanh:</strong> <strong>V2</strong> là dạng quá khứ của động từ. V2 dùng trong câu khẳng định của thì Quá khứ đơn. Đừng nhầm V2 với <strong>V3</strong> - dạng dùng sau <strong>have/has</strong> trong Hiện tại hoàn thành.</p>
        <ul>
          <li><strong>Quá khứ đơn:</strong> <em>I went to school yesterday.</em> (<strong>went</strong> = V2)</li>
          <li><strong>Hiện tại hoàn thành:</strong> <em>I have gone to school.</em> (<strong>gone</strong> = V3)</li>
        </ul>
        <p>Đối với câu khẳng định động từ thường ở thì Quá khứ đơn, ta sử dụng dạng quá khứ của động từ (ký hiệu là <strong>V2</strong>):</p>
        <ol>
          <li><strong>Có quy tắc (Regular):</strong> Thêm <code>-ed</code> vào sau động từ.<br>
            Ví dụ: <em>work ➔ worked</em>, <em>play ➔ played</em>.</li>
          <li><strong>Bất quy tắc (Irregular):</strong> Động từ nằm ở cột thứ 2 trong bảng động từ bất quy tắc.<br>
            Ví dụ: <em>go ➔ went</em>, <em>eat ➔ ate</em>, <em>see ➔ saw</em>, <em>write ➔ wrote</em>.</li>
        </ol>
        <p><strong>🚨 Quy tắc chính tả khi thêm đuôi “-ed” (Động từ có quy tắc):</strong></p>
        <ul>
          <li><strong>Thông thường:</strong> Chỉ việc thêm <code>-ed</code> (walk ➔ walked, learn ➔ learned).</li>
          <li><strong>Tận cùng bằng “e”:</strong> Chỉ cần thêm <code>-d</code> (live ➔ lived, dance ➔ danced, agree ➔ agreed).</li>
          <li><strong>Tận cùng là “phụ âm + y”:</strong> Đổi <code>y</code> thành <code>i</code> rồi thêm <code>-ed</code> (study ➔ studied, cry ➔ cried).<br>
            <em>Lưu ý: Nếu trước “y” là nguyên âm (a, e, i, o, u), giữ nguyên “y” và thêm “-ed” (play ➔ played).</em></li>
          <li><strong>Gấp đôi phụ âm cuối (1 âm tiết):</strong> Kết thúc dạng “Nguyên âm đơn + Phụ âm” (trừ h, w, x, y), ta gấp đôi phụ âm cuối trước khi thêm <code>-ed</code> (stop ➔ stopped, plan ➔ planned, fit ➔ fitted).</li>
        </ul>
      `,
      examples: [
        {
          eng: "We studied English last night.",
          viet: "Tối qua chúng tôi đã học tiếng Anh.",
          tokens: [
            { text: "We", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "studied", label: "Regular V2 (study biến đổi y -> i + ed)", role: "v" },
            { text: "English", label: "Object (Tân ngữ)", role: "o" },
            { text: "last night", label: "Time Adverb (Tối qua)", role: "adv" }
          ],
          note: "Động từ 'study' có quy tắc, biến đổi đuôi 'y' thành 'i' rồi thêm '-ed' thành 'studied'."
        },
        {
          eng: "She met her old friend near her house yesterday.",
          viet: "Cô ấy đã gặp người bạn cũ của mình ngay gần nhà ngày hôm qua.",
          tokens: [
            { text: "She", label: "Subject", role: "s" },
            { text: "met", label: "Irregular V2 (quá khứ của meet)", role: "v" },
            { text: "her old friend", label: "Object Phrase", role: "o" },
            { text: "near her house", label: "Prepositional Phrase (Chỉ nơi chốn)", role: "adv" },
            { text: "yesterday", label: "Time Adverb (Hôm qua)", role: "adv" }
          ],
          note: "Động từ 'meet' bất quy tắc: meet ➔ met (V2) ➔ met (V3)."
        },
        {
          eng: "She watched a movie yesterday.",
          viet: "Cô ấy đã xem một bộ phim hôm qua.",
          tokens: [
            { text: "She", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "watched", label: "Regular V2 (thêm -ed vào động từ watch)", role: "v" },
            { text: "a movie", label: "Object (Tân ngữ)", role: "o" },
            { text: "yesterday", label: "Time Adverb (Dấu hiệu Quá khứ đơn)", role: "adv" }
          ],
          note: "Động từ 'watch' có quy tắc, chỉ cần thêm '-ed' thành 'watched'."
        },
        {
          eng: "They went to Paris last summer.",
          viet: "Họ đã đi Paris mùa hè năm ngoái.",
          tokens: [
            { text: "They", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "went", label: "Irregular V2 (quá khứ của go)", role: "v" },
            { text: "to Paris", label: "Prepositional Phrase (Bổ ngữ nơi chốn)", role: "o" },
            { text: "last summer", label: "Time Adverb (Dấu hiệu Quá khứ đơn)", role: "adv" }
          ],
          note: "Động từ 'go' bất quy tắc chuyển thành 'went' ở quá khứ đơn."
        },
        {
          eng: "He finished his homework last night.",
          viet: "Anh ấy đã làm xong bài tập về nhà tối qua.",
          tokens: [
            { text: "He", label: "Subject", role: "s" },
            { text: "finished", label: "Regular V2 (finish thêm -ed)", role: "v" },
            { text: "his homework", label: "Object", role: "o" },
            { text: "last night", label: "Time Adverb", role: "adv" }
          ],
          note: "Động từ 'finish' có quy tắc, thêm '-ed' thành 'finished'."
        },
        {
          eng: "I bought a new phone two days ago.",
          viet: "Tôi đã mua một chiếc điện thoại mới hai ngày trước.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "bought", label: "Irregular V2 (quá khứ của buy)", role: "v" },
            { text: "a new phone", label: "Object Phrase", role: "o" },
            { text: "two days ago", label: "Time Adverb (Dấu hiệu)", role: "adv" }
          ],
          note: "Động từ 'buy' bất quy tắc, quá khứ cột 2 là 'bought'."
        },
        {
          eng: "She slept well last night.",
          viet: "Tối qua cô ấy ngủ rất ngon.",
          tokens: [
            { text: "She", label: "Subject", role: "s" },
            { text: "slept", label: "Irregular V2 (quá khứ của sleep)", role: "v" },
            { text: "well", label: "Adverb (Trạng từ chỉ cách thức)", role: "adv" },
            { text: "last night", label: "Time Adverb", role: "adv" }
          ],
          note: "Động từ 'sleep' bất quy tắc, dạng V2 của nó là 'slept'."
        },
        {
          eng: "The boy ran fast in the race yesterday.",
          viet: "Cậu bé đã chạy rất nhanh trong cuộc đua ngày hôm qua.",
          tokens: [
            { text: "The boy", label: "Subject", role: "s" },
            { text: "ran", label: "Irregular V2 (quá khứ của run)", role: "v" },
            { text: "fast", label: "Adverb", role: "adv" },
            { text: "in the race", label: "Prepositional Phrase", role: "o" },
            { text: "yesterday", label: "Time Adverb", role: "adv" }
          ],
          note: "Động từ 'run' bất quy tắc, dạng V2 chuyển thành 'ran'."
        },
        {
          eng: "They wrote an email to the client this morning.",
          viet: "Họ đã viết một email cho khách hàng sáng nay.",
          tokens: [
            { text: "They", label: "Subject", role: "s" },
            { text: "wrote", label: "Irregular V2 (quá khứ của write)", role: "v" },
            { text: "an email", label: "Object Phrase", role: "o" },
            { text: "to the client", label: "Prepositional Phrase", role: "o" },
            { text: "this morning", label: "Time Adverb", role: "adv" }
          ],
          note: "Động từ 'write' bất quy tắc, quá khứ cột 2 chia là 'wrote'."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Thêm -ed vào động từ bất quy tắc.</strong></p>
        <p>Sai: <em>"He goed to the market."</em> hoặc <em>"She eated an apple."</em></p>
        <p>Đúng: <em>"He went to the market."</em> và <em>"She ate an apple."</em></p>
      `,
      tips: `
        <p>💡 <strong>Mẹo nhớ V2 trong Quá khứ đơn:</strong></p>
        <ul>
          <li>Động từ có quy tắc: thêm <strong>-ed</strong> (watch ➔ watched, clean ➔ cleaned).</li>
          <li>Động từ tận cùng bằng <strong>e</strong>: chỉ thêm <strong>-d</strong> (live ➔ lived).</li>
          <li>Phụ âm + <strong>y</strong>: đổi <strong>y</strong> thành <strong>i</strong> rồi thêm <strong>-ed</strong> (study ➔ studied).</li>
          <li>Bất quy tắc phải học riêng: <strong>go-went</strong>, <strong>buy-bought</strong>, <strong>meet-met</strong>, <strong>run-ran</strong>.</li>
        </ul>
      `
    },

    "2-11": {
      chapter: "Chương 2: Quá khứ đơn",
      lessonNum: 11,
      shortTitle: "Bài 11: Trợ động từ Did & Didn't",
      title: "Bài 11: Thể phủ định & Nghi vấn với trợ động từ Did / Didn't",
      explanation: `
        <p>Để tạo câu phủ định và câu hỏi cho động từ thường ở quá khứ đơn, ta mượn trợ động từ <strong>Did</strong> cho tất cả các ngôi chủ ngữ.</p>
        <p><strong>🚨 Quy tắc sống còn:</strong> Khi đã mượn trợ động từ <code>did/didn't</code>, động từ chính trong câu bắt buộc phải đưa về dạng <strong>NGUYÊN MẪU không chia</strong>.</p>
        <ul>
          <li><strong>Phủ định:</strong> <code>S + didn't + V (nguyên mẫu)</code></li>
          <li><strong>Nghi vấn:</strong> <code>Did + S + V (nguyên mẫu)?</code></li>
        </ul>
      `,
      examples: [
        {
          eng: "She didn't come to school last week.",
          viet: "Tuần trước cô ấy không đến trường.",
          tokens: [
            { text: "She", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "didn't", label: "Negative Auxiliary (Trợ động từ phủ định)", role: "aux" },
            { text: "come", label: "Main Verb (Động từ nguyên mẫu vì đã mượn didn't)", role: "v" },
            { text: "to school", label: "Prepositional Phrase (Nơi chốn)", role: "o" },
            { text: "last week", label: "Time Adverb (Tuần trước)", role: "adv" }
          ],
          note: "Mượn 'didn't' ở phủ định quá khứ, động từ 'come' bắt buộc phải ở dạng nguyên mẫu, không chia 'came'."
        },
        {
          eng: "We didn't see her at the cinema last night.",
          viet: "Chúng tôi không trông thấy cô ấy tại rạp chiếu phim tối hôm qua.",
          tokens: [
            { text: "We", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "didn't", label: "Negative Auxiliary (Trợ động từ phủ định)", role: "aux" },
            { text: "see", label: "Main Verb (Động từ nguyên mẫu)", role: "v" },
            { text: "her", label: "Object", role: "o" },
            { text: "at the cinema", label: "Prepositional Phrase", role: "o" },
            { text: "last night", label: "Time Adverb (Tối qua)", role: "adv" }
          ],
          note: "Động từ 'see' được đưa về nguyên mẫu do đứng sau trợ động từ phủ định 'didn't', không chia 'saw'."
        },
        {
          eng: "Did you visit Ho Chi Minh Museum with your class last weekend?",
          viet: "Bạn có đi thăm bảo tàng Hồ Chí Minh với lớp của bạn cuối tuần trước hay không?",
          tokens: [
            { text: "Did", label: "Auxiliary (Trợ động từ hỏi đảo lên đầu)", role: "aux" },
            { text: "you", label: "Subject", role: "s" },
            { text: "visit", label: "Main Verb (Động từ nguyên mẫu)", role: "v" },
            { text: "Ho Chi Minh Museum", label: "Object Phrase", role: "o" },
            { text: "with your class", label: "Prepositional Phrase", role: "o" },
            { text: "last weekend", label: "Time Adverb", role: "adv" }
          ],
          note: "Câu nghi vấn quá khứ đơn đảo 'Did' lên đầu, động từ 'visit' giữ nguyên mẫu không thêm '-ed'."
        },
        {
          eng: "Did he miss the train yesterday?",
          viet: "Cậu ta có lỡ chuyến tàu ngày hôm qua hay không?",
          tokens: [
            { text: "Did", label: "Auxiliary (Trợ động từ hỏi)", role: "aux" },
            { text: "he", label: "Subject", role: "s" },
            { text: "miss", label: "Main Verb (Động từ nguyên mẫu)", role: "v" },
            { text: "the train", label: "Object Phrase", role: "o" },
            { text: "yesterday", label: "Time Adverb (Hôm qua)", role: "adv" }
          ],
          note: "Đảo trợ động từ 'Did' lên đầu câu hỏi, động từ 'miss' giữ nguyên mẫu không thêm '-ed' hay chia dạng khác."
        },
        {
          eng: "Did she go to the cinema?",
          viet: "Cô ấy có đi xem phim không?",
          tokens: [
            { text: "Did", label: "Auxiliary (Trợ động từ hỏi ở quá khứ)", role: "aux" },
            { text: "she", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "go", label: "Main Verb (Động từ nguyên mẫu vì đã mượn Did)", role: "v" },
            { text: "to the cinema", label: "Prepositional Phrase (Bổ ngữ nơi chốn)", role: "o" }
          ],
          note: "Đảo trợ động từ 'Did' lên đầu câu hỏi, động từ 'go' đưa về nguyên mẫu, không được dùng 'went'."
        },
        {
          eng: "She didn't come to the party.",
          viet: "Cô ấy đã không đến bữa tiệc.",
          tokens: [
            { text: "She", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "didn't", label: "Auxiliary (Trợ động từ phủ định)", role: "aux" },
            { text: "come", label: "Main Verb (Động từ nguyên mẫu vì đã mượn didn't)", role: "v" },
            { text: "to the party", label: "Prepositional Phrase (Bổ ngữ nơi chốn)", role: "o" }
          ],
          note: "Mượn 'didn't' ở thể phủ định, động từ 'come' giữ nguyên mẫu, không dùng 'came'."
        },
        {
          eng: "Did you buy the newspaper this morning?",
          viet: "Bạn có mua tờ báo sáng nay không?",
          tokens: [
            { text: "Did", label: "Auxiliary (Trợ động từ hỏi)", role: "aux" },
            { text: "you", label: "Subject", role: "s" },
            { text: "buy", label: "Main Verb (Nguyên mẫu sau Did)", role: "v" },
            { text: "the newspaper", label: "Object", role: "o" },
            { text: "this morning", label: "Time Adverb", role: "adv" }
          ],
          note: "Câu nghi vấn mượn trợ động từ 'Did', động từ chính 'buy' đưa về nguyên mẫu, không dùng 'bought'."
        },
        {
          eng: "He did not watch TV last night.",
          viet: "Anh ấy đã không xem tivi tối hôm qua.",
          tokens: [
            { text: "He", label: "Subject", role: "s" },
            { text: "did not", label: "Negative Auxiliary (did + not)", role: "aux" },
            { text: "watch", label: "Main Verb (Nguyên mẫu sau did not)", role: "v" },
            { text: "TV", label: "Object", role: "o" },
            { text: "last night", label: "Time Adverb", role: "adv" }
          ],
          note: "Câu phủ định mượn 'did not' (didn't), động từ 'watch' giữ nguyên mẫu, không dùng 'watched'."
        },
        {
          eng: "They didn't see the accident yesterday.",
          viet: "Họ không nhìn thấy vụ tai nạn hôm qua.",
          tokens: [
            { text: "They", label: "Subject", role: "s" },
            { text: "didn't", label: "Negative Auxiliary (viết tắt)", role: "aux" },
            { text: "see", label: "Main Verb (Nguyên mẫu)", role: "v" },
            { text: "the accident", label: "Object Phrase", role: "o" },
            { text: "yesterday", label: "Time Adverb", role: "adv" }
          ],
          note: "Động từ 'see' được đưa về nguyên mẫu do đứng sau trợ động từ phủ định 'didn't'."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Vẫn chia động từ quá khứ sau did/didn't.</strong></p>
        <p>Sai: <em>"Did she went?"</em> hoặc <em>"She didn't came."</em></p>
        <p>Đúng: <em>"Did she go?"</em> và <em>"She didn't come."</em></p>
      `,
      tips: `
        <p>💡 <strong>Thần chú:</strong> Có <strong>Did / Didn't</strong> thì động từ chính về <strong>nguyên mẫu</strong>.</p>
        <ul>
          <li>Sai: <em>Did she went?</em> ➔ Đúng: <em>Did she go?</em></li>
          <li>Sai: <em>She didn't came.</em> ➔ Đúng: <em>She didn't come.</em></li>
          <li>Nhớ: <strong>Did</strong> đã gánh phần quá khứ, động từ sau nó không chia nữa.</li>
        </ul>
      `
    },

    "2-12": {
      chapter: "Chương 2: Quá khứ đơn",
      lessonNum: 12,
      shortTitle: "Bài 12: Cách dùng QKĐ",
      title: "Bài 12: Bốn cách sử dụng chính của thì Quá khứ đơn",
      explanation: `
        <p>Thì Quá khứ đơn có 4 cách dùng chính cực kỳ quan trọng sau đây:</p>
        <ol>
          <li><strong>Diễn đạt một hành động xảy ra và chấm dứt hoàn toàn trong quá khứ:</strong> Hành động đã hoàn thành và có mốc thời gian rõ ràng.<br>
            Ví dụ: <em>They went to the concert last night.</em></li>
          <li><strong>Diễn đạt các hành động xảy ra liên tiếp trong quá khứ:</strong> Các hành động nối đuôi nhau trong một lời kể.<br>
            Ví dụ: <em>She came home, switched on the computer and checked her emails.</em></li>
          <li><strong>Diễn đạt một thói quen hoặc trạng thái trong quá khứ:</strong> Diễn tả việc thường làm trước đây (thường dùng cấu trúc <code>S + used to + V (nguyên mẫu)</code>).<br>
            Ví dụ: <em>I used to play volleyball when I was young.</em></li>
          <li><strong>Dùng trong câu điều kiện loại II:</strong> Diễn tả một giả định không có thật ở hiện tại.<br>
            Ví dụ: <em>If I had a million USD, I would buy that car.</em></li>
        </ol>
      `,
      examples: [
        {
          eng: "They went to the concert last night.",
          viet: "Họ đã tới rạp hát tối hôm qua.",
          tokens: [
            { text: "They", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "went", label: "Verb (V2 của go)", role: "v" },
            { text: "to the concert", label: "Prepositional Phrase (Nơi chốn)", role: "o" },
            { text: "last night", label: "Time Adverb (Tối qua - đã chấm dứt)", role: "adv" }
          ],
          note: "Hành động đi xem hòa nhạc đã diễn ra và kết thúc hoàn toàn vào tối hôm qua."
        },
        {
          eng: "She came home, switched on the computer, and checked her emails.",
          viet: "Cô ấy đã trở về nhà, bật máy tính và kiểm tra hộp thư điện tử.",
          tokens: [
            { text: "She", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "came", label: "Verb 1 (V2 của come)", role: "v" },
            { text: "home,", label: "Adverb of place / Destination", role: "adv" },
            { text: "switched on", label: "Verb 2 (switch + ed)", role: "v" },
            { text: "the computer,", label: "Object 2 (Tân ngữ)", role: "o" },
            { text: "and", label: "Conjunction (Từ nối)", role: "adv" },
            { text: "checked", label: "Verb 3 (check + ed)", role: "v" },
            { text: "her emails.", label: "Object 3 (Tân ngữ)", role: "o" }
          ],
          note: "Diễn tả một chuỗi 3 hành động xảy ra liên tục và nối tiếp nhau trong quá khứ."
        },
        {
          eng: "I used to play volleyball with my friends when I was young.",
          viet: "Tôi thường chơi bóng chuyền với bạn bè của mình khi tôi còn trẻ.",
          tokens: [
            { text: "I", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "used to", label: "Modal Phrase (Đã từng - thói quen quá khứ)", role: "aux" },
            { text: "play", label: "Main Verb (Động từ nguyên mẫu)", role: "v" },
            { text: "volleyball", label: "Object (Tân ngữ)", role: "o" },
            { text: "with my friends", label: "Prepositional Phrase (Bổ ngữ)", role: "o" },
            { text: "when I was young", label: "Past Time Clause (Mệnh đề thời gian)", role: "adv" }
          ],
          note: "Cấu trúc 'used to + V-inf' dùng để chỉ một thói quen cũ trong quá khứ nay không còn nữa."
        },
        {
          eng: "If I had a million USD, I would buy that car.",
          viet: "Nếu tôi có một triệu đô, tôi sẽ mua chiếc xe ô tô đó.",
          tokens: [
            { text: "If", label: "Conjunction (Từ nối điều kiện)", role: "adv" },
            { text: "I", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "had", label: "Verb (V2 của have trong mệnh đề If)", role: "v" },
            { text: "a million USD,", label: "Object Phrase (Tân ngữ)", role: "o" },
            { text: "I", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "would", label: "Modal Auxiliary (Trợ động từ khuyết thiếu)", role: "aux" },
            { text: "buy", label: "Main Verb (Động từ nguyên mẫu)", role: "v" },
            { text: "that car.", label: "Object Phrase (Tân ngữ)", role: "o" }
          ],
          note: "Câu điều kiện loại II diễn tả giả định không có thật ở hiện tại, động từ ở mệnh đề If chia quá khứ đơn (had)."
        },
        {
          eng: "I used to swim in this river when I was young.",
          viet: "Tôi từng bơi trên con sông này khi tôi còn trẻ.",
          tokens: [
            { text: "I", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "used to", label: "Modal Phrase (Đã từng - chỉ thói quen cũ)", role: "aux" },
            { text: "swim", label: "Main Verb (Động từ nguyên mẫu)", role: "v" },
            { text: "in this river", label: "Prepositional Phrase (Nơi chốn)", role: "o" },
            { text: "when I was young", label: "Past Time Clause (Mệnh đề thời gian)", role: "adv" }
          ],
          note: "Sử dụng 'used to swim' để diễn tả việc bơi lội là thói quen thời trẻ và hiện tại không còn làm nữa."
        },
        {
          eng: "She finished her report, shut down the laptop, and left the office.",
          viet: "Cô ấy đã hoàn thành báo cáo, tắt laptop và rời khỏi văn phòng.",
          tokens: [
            { text: "She", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "finished", label: "Verb 1 (finish + ed)", role: "v" },
            { text: "her report,", label: "Object 1 (Tân ngữ)", role: "o" },
            { text: "shut down", label: "Verb 2 (V2 của shut down)", role: "v" },
            { text: "the laptop,", label: "Object 2 (Tân ngữ)", role: "o" },
            { text: "and", label: "Conjunction (Từ nối)", role: "adv" },
            { text: "left", label: "Verb 3 (V2 của leave)", role: "v" },
            { text: "the office.", label: "Object 3 (Tân ngữ)", role: "o" }
          ],
          note: "Diễn tả một chuỗi các hành động xảy ra nối tiếp nhau liên tục trong quá khứ."
        },
        {
          eng: "I went to the bookstore yesterday.",
          viet: "Tôi đã đi đến cửa hàng sách ngày hôm qua.",
          tokens: [
            { text: "I", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "went", label: "Verb (V2 của go)", role: "v" },
            { text: "to the bookstore", label: "Prepositional Phrase (Nơi chốn)", role: "o" },
            { text: "yesterday", label: "Time Adverb (Thời điểm cụ thể đã qua)", role: "adv" }
          ],
          note: "Hành động đi đến hiệu sách đã xảy ra và chấm dứt tại mốc thời gian xác định hôm qua."
        },
        {
          eng: "He lived in Tokyo for two years when he was a child.",
          viet: "Anh ấy đã sống ở Tokyo hai năm khi còn là một đứa trẻ.",
          tokens: [
            { text: "He", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "lived", label: "Verb (V2 của live)", role: "v" },
            { text: "in Tokyo", label: "Prepositional Phrase (Nơi chốn)", role: "o" },
            { text: "for two years", label: "Duration (Khoảng thời gian quá khứ)", role: "adv" },
            { text: "when he was a child", label: "Past Time Clause (Mệnh đề thời gian)", role: "adv" }
          ],
          note: "Diễn tả một trạng thái kéo dài một khoảng thời gian trong quá khứ nhưng nay đã hoàn toàn kết thúc."
        },
        {
          eng: "When I was in high school, I usually walked to school.",
          viet: "Khi tôi còn học trung học, tôi thường đi bộ đến trường.",
          tokens: [
            { text: "When I was in high school,", label: "Past Time Clause (Mệnh đề thời gian)", role: "adv" },
            { text: "I", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "usually", label: "Adverb of Frequency (Trạng từ tần suất quá khứ)", role: "adv" },
            { text: "walked", label: "Verb (V2 của walk)", role: "v" },
            { text: "to school", label: "Prepositional Phrase (Nơi chốn)", role: "o" }
          ],
          note: "Diễn tả thói quen đi bộ đi học trong giai đoạn học cấp ba (nay không còn học cấp ba nữa)."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Dùng Hiện tại đơn chia thói quen quá khứ khi kể chuyện.</strong></p>
        <p>Sai: <em>"Last night, I went home, cook dinner, and watch TV."</em> (cook và watch phải chia quá khứ).</p>
        <p>Đúng: <em>"Last night, I went home, cooked dinner, and watched TV."</em></p>
      `,
      tips: `
        <p>💡 <strong>Mẹo dùng Quá khứ đơn khi kể chuyện:</strong></p>
        <ul>
          <li>Chuỗi hành động quá khứ: các động từ chính thường cùng chia V2/ed.</li>
          <li>Thói quen cũ: dùng <code>used to + V nguyên mẫu</code>.</li>
          <li>Sau <strong>used to</strong>, động từ không thêm -ed: <em>used to play</em>, không viết <em>used to played</em>.</li>
        </ul>
      `
    },

    "2-13": {
      chapter: "Chương 2: Quá khứ đơn",
      lessonNum: 13,
      shortTitle: "Bài 13: Dấu hiệu QKĐ",
      title: "Bài 13: Các dấu hiệu nhận biết thì Quá khứ đơn",
      explanation: `
        <p>Để chia chính xác thì Quá khứ đơn, hãy chú ý các mốc thời gian quá khứ xác định trong câu:</p>
        <ul>
          <li><strong>Yesterday:</strong> Ngày hôm qua (yesterday morning, yesterday afternoon).</li>
          <li><strong>Last + thời gian:</strong> trước, vừa qua (last week, last month, last year, last night).</li>
          <li><strong>Khoảng thời gian + ago:</strong> trước đây (two days ago, three years ago, a month ago).</li>
          <li><strong>In + năm trong quá khứ:</strong> ví dụ: in 2010, in 1999.</li>
          <li><strong>Mệnh đề thời gian quá khứ:</strong> <code>when I was young</code>, <code>when I was a child</code>, <code>when she was here</code>.</li>
        </ul>
      `,
      examples: [
        {
          eng: "He finished his project two days ago.",
          viet: "Anh ấy đã hoàn thành dự án của mình hai ngày trước.",
          tokens: [
            { text: "He", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "finished", label: "Verb (Quá khứ đơn của finish)", role: "v" },
            { text: "his project", label: "Object (Tân ngữ)", role: "o" },
            { text: "two days ago", label: "Time Adverb (Trạng ngữ chỉ mốc thời gian đã trôi qua)", role: "adv" }
          ],
          note: "Cụm 'two days ago' chỉ khoảng thời gian đã kết thúc nên câu chia Quá khứ đơn."
        },
        {
          eng: "I saw him at the mall yesterday.",
          viet: "Tôi đã gặp anh ấy tại trung tâm thương mại ngày hôm qua.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "saw", label: "Verb (Irregular V2)", role: "v" },
            { text: "him", label: "Object", role: "o" },
            { text: "at the mall", label: "Prepositional Phrase", role: "o" },
            { text: "yesterday", label: "Time Adverb (Hôm qua)", role: "adv" }
          ],
          note: "'Yesterday' là dấu hiệu nhận biết điển hình của thì Quá khứ đơn."
        },
        {
          eng: "They traveled to Tokyo in 2019.",
          viet: "Họ đã đi du lịch Tokyo vào năm 2019.",
          tokens: [
            { text: "They", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "traveled", label: "Verb (Regular V2)", role: "v" },
            { text: "to Tokyo", label: "Prepositional Phrase", role: "o" },
            { text: "in 2019", label: "Time Adverb (In + năm trong quá khứ)", role: "adv" }
          ],
          note: "Năm '2019' là mốc thời gian cụ thể đã qua nên câu dùng thì Quá khứ đơn."
        },
        {
          eng: "She graduated from university last year.",
          viet: "Cô ấy đã tốt nghiệp đại học vào năm ngoái.",
          tokens: [
            { text: "She", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "graduated", label: "Verb (Regular V2)", role: "v" },
            { text: "from university", label: "Prepositional Phrase", role: "o" },
            { text: "last year", label: "Time Adverb (Last + năm ngoái)", role: "adv" }
          ],
          note: "'Last year' là trạng từ chỉ mốc thời gian đã chấm dứt hoàn toàn."
        },
        {
          eng: "We walked in the park this morning.",
          viet: "Chúng tôi đã đi bộ trong công viên sáng nay.",
          tokens: [
            { text: "We", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "walked", label: "Verb (Regular V2)", role: "v" },
            { text: "in the park", label: "Prepositional Phrase", role: "o" },
            { text: "this morning", label: "Time Adverb (Sáng nay - khi nói lúc buổi chiều/tối)", role: "adv" }
          ],
          note: "'This morning' diễn tả một buổi sáng đã trôi qua tính tới thời điểm nói hiện tại."
        },
        {
          eng: "When I was a student, I studied very hard.",
          viet: "Khi tôi còn là học sinh, tôi đã học tập rất chăm chỉ.",
          tokens: [
            { text: "When I was a student", label: "Time Clause in Past (Mệnh đề thời gian quá khứ)", role: "adv" },
            { text: "I", label: "Subject", role: "s" },
            { text: "studied", label: "Verb (Regular V2)", role: "v" },
            { text: "very hard", label: "Adverb Phrase", role: "adv" }
          ],
          note: "Mệnh đề phụ 'When I was a student' là chỉ bối cảnh thời gian trong quá khứ nên mệnh đề chính dùng Quá khứ đơn."
        },
        {
          eng: "The package arrived three hours ago.",
          viet: "Bưu kiện đã đến cách đây ba giờ.",
          tokens: [
            { text: "The package", label: "Subject", role: "s" },
            { text: "arrived", label: "Verb (Regular V2)", role: "v" },
            { text: "three hours ago", label: "Time Adverb (Khoảng + ago)", role: "adv" }
          ],
          note: "Từ 'ago' đứng sau khoảng thời gian là dấu hiệu nhận biết đặc trưng của quá khứ đơn."
        },
        {
          eng: "Did you watch the match last night?",
          viet: "Bạn có xem trận đấu tối hôm qua không?",
          tokens: [
            { text: "Did", label: "Auxiliary Verb", role: "aux" },
            { text: "you", label: "Subject", role: "s" },
            { text: "watch", label: "Main Verb (Nguyên mẫu)", role: "v" },
            { text: "the match", label: "Object", role: "o" },
            { text: "last night", label: "Time Adverb (Tối qua)", role: "adv" }
          ],
          note: "Câu nghi vấn mượn trợ động từ 'Did' kết hợp với dấu hiệu 'last night'."
        },
        {
          eng: "He visited his uncle on Monday.",
          viet: "Anh ấy đã đến thăm chú của mình vào ngày thứ Hai.",
          tokens: [
            { text: "He", label: "Subject", role: "s" },
            { text: "visited", label: "Verb (Regular V2)", role: "v" },
            { text: "his uncle", label: "Object Phrase", role: "o" },
            { text: "on Monday", label: "Time Adverb (Ngày thứ Hai đã qua)", role: "adv" }
          ],
          note: "'On Monday' chỉ một ngày thứ Hai cụ thể trong quá khứ."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Dùng 'ago' trong câu Hiện tại hoàn thành.</strong></p>
        <p>Sai: <em>"I have graduated two years ago."</em></p>
        <p>Đúng: <em>"I graduated two years ago."</em></p>
      `,
      tips: `
        <p>💡 <strong>Bảng dấu hiệu Quá khứ đơn:</strong></p>
        <ul>
          <li><strong>Yesterday:</strong> yesterday, yesterday morning.</li>
          <li><strong>Last + thời gian:</strong> last night, last week, last year.</li>
          <li><strong>Khoảng + ago:</strong> two days ago, three years ago.</li>
          <li><strong>In + năm đã qua:</strong> in 2018, in 2020.</li>
        </ul>
      `
    },

    "2-14": {
      chapter: "Chương 2: Quá khứ đơn",
      lessonNum: 14,
      shortTitle: "Bài 14: Lỗi sai QKĐ",
      title: "Bài 14: Các lỗi sai phổ biến ở thì Quá khứ đơn",
      explanation: `
        <p>Hãy chú ý các lỗi sai kinh điển sau đây để không mất điểm đáng tiếc:</p>
        <ol>
          <li><strong>Quên đưa động từ về nguyên mẫu trong câu phủ định/nghi vấn:</strong><br>
            Sai: <em>"Did you did it?"</em> hoặc <em>"I didn't went."</em><br>
            Đúng: <em>"Did you do it?"</em> và <em>"I didn't go."</em></li>
          <li><strong>Chia sai was/were cho chủ ngữ số ít/nhiều:</strong><br>
            Sai: <em>"We was very happy."</em><br>
            Đúng: <em>"We were very happy."</em></li>
          <li><strong>Nhầm lẫn động từ bất quy tắc sang có quy tắc:</strong><br>
            Sai: <em>"She writed a letter."</em><br>
            Đúng: <em>"She wrote a letter."</em></li>
        </ol>
      `,
      examples: [
        {
          eng: "Did you go to school yesterday?",
          viet: "Hôm qua bạn có đi học không?",
          tokens: [
            { text: "Did", label: "Auxiliary (Trợ động từ hỏi)", role: "aux" },
            { text: "you", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "go", label: "Verb (nguyên mẫu)", role: "v" },
            { text: "to school", label: "Prepositional Phrase (Bổ ngữ)", role: "o" },
            { text: "yesterday", label: "Time Adverb (Dấu hiệu Quá khứ đơn)", role: "adv" }
          ],
          note: "Câu hỏi nghi vấn mượn 'Did', do đó động từ 'go' ở dạng nguyên mẫu."
        },
        {
          eng: "They didn't see the movie last night.",
          viet: "Họ đã không xem bộ phim tối qua.",
          tokens: [
            { text: "They", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "didn't", label: "Negative Auxiliary (Trợ động từ phủ định)", role: "aux" },
            { text: "see", label: "Main Verb (Động từ nguyên mẫu sửa lỗi)", role: "v" },
            { text: "the movie", label: "Object (Tân ngữ)", role: "o" },
            { text: "last night", label: "Time Adverb (Tối qua)", role: "adv" }
          ],
          note: "Lỗi phổ biến là viết 'didn't saw' (sai). Điểm sửa: Đổi động từ về nguyên mẫu 'see' sau trợ động từ 'didn't'."
        },
        {
          eng: "We were very happy yesterday.",
          viet: "Hôm qua chúng tôi đã rất hạnh phúc.",
          tokens: [
            { text: "We", label: "Subject", role: "s" },
            { text: "were", label: "To Be (Sửa lỗi: dùng were cho chủ ngữ We)", role: "be" },
            { text: "very happy", label: "Adjective Phrase", role: "o" },
            { text: "yesterday", label: "Time Adverb", role: "adv" }
          ],
          note: "Lỗi phổ biến là viết 'We was happy' (sai). Điểm sửa: Đổi 'was' thành 'were'."
        },
        {
          eng: "She wrote a letter to her grandmother.",
          viet: "Cô ấy đã viết một bức thư cho bà của mình.",
          tokens: [
            { text: "She", label: "Subject", role: "s" },
            { text: "wrote", label: "Verb (Sửa lỗi: dùng V2 bất quy tắc wrote)", role: "v" },
            { text: "a letter", label: "Object Phrase", role: "o" },
            { text: "to her grandmother", label: "Prepositional Phrase", role: "o" }
          ],
          note: "Lỗi phổ biến là viết 'She writed' (sai). Điểm sửa: Động từ 'write' bất quy tắc, quá khứ đơn là 'wrote'."
        },
        {
          eng: "He bought a new car two days ago.",
          viet: "Anh ấy đã mua một chiếc xe hơi mới hai ngày trước.",
          tokens: [
            { text: "He", label: "Subject", role: "s" },
            { text: "bought", label: "Verb (Sửa lỗi: dùng quá khứ đơn thay vì HTHT)", role: "v" },
            { text: "a new car", label: "Object Phrase", role: "o" },
            { text: "two days ago", label: "Time Adverb", role: "adv" }
          ],
          note: "Lỗi phổ biến là dùng hiện tại hoàn thành 'He has bought a new car two days ago' (sai vì có ago là thời gian xác định đã qua)."
        },
        {
          eng: "I was not at home yesterday.",
          viet: "Tôi đã không ở nhà ngày hôm qua.",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "was not", label: "To Be (Sửa lỗi: không dùng trợ động từ did cho động từ To Be)", role: "be" },
            { text: "at home", label: "Prepositional Phrase", role: "o" },
            { text: "yesterday", label: "Time Adverb", role: "adv" }
          ],
          note: "Lỗi phổ biến là viết 'I didn't at home yesterday' (sai). Với động từ To Be, chỉ cần thêm 'not' sau was/were."
        },
        {
          eng: "Did you wash your hands?",
          viet: "Bạn đã rửa tay chưa?",
          tokens: [
            { text: "Did", label: "Auxiliary Verb", role: "aux" },
            { text: "you", label: "Subject", role: "s" },
            { text: "wash", label: "Verb (Sửa lỗi: dùng nguyên mẫu wash trong câu hỏi Did)", role: "v" },
            { text: "your hands", label: "Object Phrase", role: "o" }
          ],
          note: "Lỗi phổ biến là viết 'Did you washed' (sai). Điểm sửa: Giữ nguyên mẫu 'wash'."
        },
        {
          eng: "She left the room five minutes ago.",
          viet: "Cô ấy đã rời khỏi phòng năm phút trước.",
          tokens: [
            { text: "She", label: "Subject", role: "s" },
            { text: "left", label: "Verb (Sửa lỗi: dùng V2 thay vì HTHT)", role: "v" },
            { text: "the room", label: "Object", role: "o" },
            { text: "five minutes ago", label: "Time Adverb", role: "adv" }
          ],
          note: "Lỗi phổ biến là chia hiện tại hoàn thành 'She has left the room five minutes ago' (sai vì có ago)."
        },
        {
          eng: "The children played in the garden yesterday.",
          viet: "Lũ trẻ đã chơi trong vườn ngày hôm qua.",
          tokens: [
            { text: "The children", label: "Subject", role: "s" },
            { text: "played", label: "Verb (Sửa lỗi: không lạm dụng bị động was/were played)", role: "v" },
            { text: "in the garden", label: "Prepositional Phrase", role: "o" },
            { text: "yesterday", label: "Time Adverb", role: "adv" }
          ],
          note: "Lỗi phổ biến là viết 'The children were played' (sai). Đây là câu chủ động ở quá khứ đơn, chỉ dùng V2."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Dùng động từ To Be kèm động từ thường chia quá khứ cùng lúc.</strong></p>
        <p>Sai: <em>"She was went to the market."</em></p>
        <p>Đúng: <em>"She went to the market."</em></p>
      `,
      tips: `
        <p>💡 <strong>Mẹo tránh lỗi Quá khứ đơn:</strong></p>
        <ul>
          <li>Nếu câu có <strong>động từ thường</strong> ở phủ định/câu hỏi ➔ dùng <strong>did/didn't + V nguyên mẫu</strong>.</li>
          <li>Nếu câu chỉ trạng thái/tính chất/nơi chốn với To Be ➔ dùng <strong>was/were</strong>.</li>
          <li>Không trộn kiểu <em>was went</em>, <em>did went</em>, <em>didn't came</em>.</li>
        </ul>
      `
    },

    // CHAPTER 3: PRESENT PERFECT VS PAST SIMPLE
    "2-15": {
      chapter: "Chương 3: So sánh hai thì",
      lessonNum: 15,
      shortTitle: "Bài 15: Phân biệt HTHT & QKĐ",
      title: "Bài 15: Phân biệt chi tiết thì Hiện tại hoàn thành và Quá khứ đơn",
      explanation: `
        <p>Hãy đặt hai thì này lên bàn cân so sánh để thấy sự khác biệt cốt lõi:</p>
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Tiêu chí</th>
              <th>Thì Hiện tại hoàn thành</th>
              <th>Thì Quá khứ đơn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Cấu trúc</strong></td>
              <td><code>S + have/has + V3/Ed</code></td>
              <td><code>S + V2/Ed</code> hoặc <code>didn't + V</code></td>
            </tr>
            <tr>
              <td><strong>Bản chất</strong></td>
              <td>Hành động bắt đầu trong quá khứ và vẫn tiếp diễn ở hiện tại, hoặc kết quả còn liên quan hiện tại.</td>
              <td>Hành động đã xảy ra và kết thúc hoàn toàn trong quá khứ, không liên quan hiện tại.</td>
            </tr>
            <tr>
              <td><strong>Thời gian</strong></td>
              <td><strong>Thời gian không xác định</strong> (chỉ nói về trải nghiệm hoặc kết quả chung chung).</td>
              <td><strong>Thời gian xác định rõ ràng</strong> (yesterday, ago, in 2010, last week).</td>
            </tr>
            <tr>
              <td><strong>Dấu hiệu</strong></td>
              <td>since, for, just, already, yet, ever, never, so far...</td>
              <td>yesterday, ago, last year, in 2012, when I was young...</td>
            </tr>
          </tbody>
        </table>
        <br>
        <p><strong>So sánh hai câu ví dụ thực tế:</strong></p>
        <ul>
          <li><strong>I have lost my key.</strong> (Hiện tại hoàn thành: Tôi đã làm mất chìa khóa của mình rồi. Hậu quả hiện tại là tôi không có chìa khóa để vào nhà).</li>
          <li><strong>I lost my key yesterday.</strong> (Quá khứ đơn: Tôi làm mất chìa khóa hôm qua. Hôm nay tôi có thể đã tìm thấy hoặc làm lại khóa mới, hành động mất khóa diễn ra và kết thúc hôm qua).</li>
        </ul>
      `,
      examples: [
        {
          eng: "I have lost my key.",
          viet: "Tôi đã làm mất chìa khóa rồi (hậu quả hiện tại là tôi không có khóa vào nhà).",
          tokens: [
            { text: "I", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "have", label: "Auxiliary Verb (Trợ động từ hoàn thành)", role: "aux" },
            { text: "lost", label: "Main Verb (V3 của lose)", role: "v" },
            { text: "my key", label: "Object (Tân ngữ)", role: "o" }
          ],
          note: "Hiện tại hoàn thành nhấn mạnh kết quả ở hiện tại (chìa khóa vẫn đang bị mất, chưa tìm thấy)."
        },
        {
          eng: "I lost my key yesterday.",
          viet: "Tôi đã làm mất chìa khóa hôm qua (việc đã xảy ra và kết thúc trong hôm qua).",
          tokens: [
            { text: "I", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "lost", label: "Verb (V2 của lose)", role: "v" },
            { text: "my key", label: "Object (Tân ngữ)", role: "o" },
            { text: "yesterday", label: "Time Adverb (Mốc thời gian xác định đã qua)", role: "adv" }
          ],
          note: "Quá khứ đơn diễn tả sự việc xảy ra tại mốc thời gian xác định 'yesterday' và đã chấm dứt hoàn toàn."
        },
        {
          eng: "She has written three letters today.",
          viet: "Hôm nay cô ấy đã viết được ba bức thư (khoảng thời gian hôm nay vẫn còn tiếp diễn).",
          tokens: [
            { text: "She", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "has", label: "Auxiliary Verb (Trợ động từ số ít)", role: "aux" },
            { text: "written", label: "Main Verb (V3 của write)", role: "v" },
            { text: "three letters", label: "Object Phrase (Tân ngữ)", role: "o" },
            { text: "today", label: "Time Adverb (Thời gian chưa kết thúc)", role: "adv" }
          ],
          note: "Dùng Present Perfect đi với 'today' khi thời gian hôm nay chưa kết thúc, cô ấy có thể viết thêm thư."
        },
        {
          eng: "She wrote three letters yesterday.",
          viet: "Hôm qua cô ấy đã viết ba bức thư (khoảng thời gian 'yesterday' đã chấm dứt).",
          tokens: [
            { text: "She", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "wrote", label: "Verb (V2 của write)", role: "v" },
            { text: "three letters", label: "Object Phrase (Tân ngữ)", role: "o" },
            { text: "yesterday", label: "Time Adverb (Thời gian đã chấm dứt)", role: "adv" }
          ],
          note: "Dùng Quá khứ đơn đi với 'yesterday' vì thời gian ngày hôm qua đã trôi qua trọn vẹn và kết thúc."
        },
        {
          eng: "I have lived in Hanoi for 3 years.",
          viet: "Tôi đã sống ở Hà Nội được 3 năm (hiện tại tôi vẫn đang sống ở đây).",
          tokens: [
            { text: "I", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "have", label: "Auxiliary Verb (Trợ động từ hoàn thành)", role: "aux" },
            { text: "lived", label: "Main Verb (V3 của live)", role: "v" },
            { text: "in Hanoi", label: "Prepositional Phrase (Bổ ngữ nơi chốn)", role: "o" },
            { text: "for 3 years", label: "Duration (Khoảng thời gian)", role: "adv" }
          ],
          note: "Thì Hiện tại hoàn thành diễn tả hành động bắt đầu trong quá khứ và vẫn tiếp diễn ở hiện tại."
        },
        {
          eng: "I lived in Hanoi for 3 years.",
          viet: "Tôi từng sống ở Hà Nội 3 năm (hiện tại tôi không còn sống ở đó nữa).",
          tokens: [
            { text: "I", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "lived", label: "Verb (V2 của live)", role: "v" },
            { text: "in Hanoi", label: "Prepositional Phrase (Bổ ngữ nơi chốn)", role: "o" },
            { text: "for 3 years", label: "Duration (Khoảng thời gian)", role: "adv" }
          ],
          note: "Thì Quá khứ đơn diễn tả hành động đã kết thúc hoàn toàn trong quá khứ."
        },
        {
          eng: "Have you ever been to Paris?",
          viet: "Bạn đã từng đến Paris bao giờ chưa (hỏi về trải nghiệm tính đến hiện tại)?",
          tokens: [
            { text: "Have", label: "Auxiliary Verb (Trợ động từ hỏi)", role: "aux" },
            { text: "you", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "ever", label: "Adverb of Experience (Trạng từ chỉ trải nghiệm)", role: "adv" },
            { text: "been", label: "Main Verb (V3 của be)", role: "v" },
            { text: "to Paris", label: "Prepositional Phrase (Nơi chốn)", role: "o" }
          ],
          note: "Hiện tại hoàn thành dùng để hỏi về trải nghiệm cuộc sống tính đến thời điểm hiện tại (không cần mốc thời gian)."
        },
        {
          eng: "Did you go to Paris last summer?",
          viet: "Bạn có đi Paris mùa hè năm ngoái không (hỏi về chuyến đi cụ thể đã qua)?",
          tokens: [
            { text: "Did", label: "Auxiliary Verb (Trợ động từ hỏi ở quá khứ)", role: "aux" },
            { text: "you", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "go", label: "Main Verb (Nguyên mẫu)", role: "v" },
            { text: "to Paris", label: "Prepositional Phrase (Nơi chốn)", role: "o" },
            { text: "last summer", label: "Time Adverb (Mốc thời gian đã chấm dứt)", role: "adv" }
          ],
          note: "Quá khứ đơn dùng để hỏi về hành động tại một mốc thời gian cụ thể trong quá khứ đã kết thúc."
        },
        {
          eng: "We have known each other for a long time.",
          viet: "Chúng tôi đã biết nhau từ lâu rồi (và hiện tại vẫn đang quen biết nhau).",
          tokens: [
            { text: "We", label: "Subject (Chủ ngữ)", role: "s" },
            { text: "have", label: "Auxiliary Verb (Trợ động từ hoàn thành)", role: "aux" },
            { text: "known", label: "Main Verb (V3 của know)", role: "v" },
            { text: "each other", label: "Object Phrase (Tân ngữ)", role: "o" },
            { text: "for a long time", label: "Time Phrase (Chỉ khoảng thời gian kéo dài)", role: "adv" }
          ],
          note: "Sử dụng Hiện tại hoàn thành vì mối quan hệ quen biết vẫn đang duy trì ở hiện tại."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Dùng thì hoàn thành kèm mốc thời gian quá khứ cụ thể.</strong></p>
        <p>Sai: <em>"I have graduated in 2018."</em></p>
        <p>Đúng: <em>"I graduated in 2018."</em></p>
      `,
      tips: `
        <p>💡 <strong>Mẹo phân biệt HTHT và QKĐ:</strong></p>
        <table>
          <tr>
            <th style="padding: 5px; text-align: left;">Câu hỏi tự kiểm tra</th>
            <th style="padding: 5px; text-align: left;">Chọn thì</th>
          </tr>
          <tr>
            <td style="padding: 5px;">Có mốc quá khứ rõ như yesterday, ago, last week không?</td>
            <td style="padding: 5px;"><strong>Quá khứ đơn</strong></td>
          </tr>
          <tr>
            <td style="padding: 5px;">Việc kéo dài từ quá khứ tới hiện tại không?</td>
            <td style="padding: 5px;"><strong>Hiện tại hoàn thành</strong></td>
          </tr>
          <tr>
            <td style="padding: 5px;">Đang nói kết quả hiện tại hoặc trải nghiệm tới nay không?</td>
            <td style="padding: 5px;"><strong>Hiện tại hoàn thành</strong></td>
          </tr>
        </table>
      `
    },
    "2-16": {
      chapter: "Chương 4: Động từ bất quy tắc",
      lessonNum: 16,
      shortTitle: "Bài 16: Động từ bất quy tắc",
      title: "Bài 16: Phân loại và Mẹo ghi nhớ Động từ bất quy tắc",
      explanation: `
        <p>Động từ bất quy tắc (Irregular Verbs) là những động từ không thêm đuôi <code>-ed</code> khi chuyển sang dạng quá khứ (V2) và phân từ hai (V3). Thay vào đó, chúng biến đổi theo các cách khác nhau.</p>
        <p>Người mới học chỉ cần nhớ trước 2 cách dùng quan trọng:</p>
        <ul>
          <li><strong>V2</strong> dùng trong thì Quá khứ đơn: <em>I went home yesterday.</em></li>
          <li><strong>V3</strong> dùng sau <strong>have/has/had</strong> trong thì hoàn thành: <em>She has gone home.</em></li>
        </ul>
        <p><strong>Lộ trình học từ dễ đến khó:</strong></p>
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Mức</th>
              <th>Nên học gì trước</th>
              <th>Ví dụ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Dễ</strong></td>
              <td>Động từ rất thường gặp trong giao tiếp và bài tập cơ bản.</td>
              <td>go, eat, see, buy, write, come, run</td>
            </tr>
            <tr>
              <td><strong>Trung bình</strong></td>
              <td>Động từ phổ biến hơn nhưng dễ nhầm V2/V3.</td>
              <td>begin, break, choose, drive, speak, take</td>
            </tr>
            <tr>
              <td><strong>Khó</strong></td>
              <td>Động từ ít gặp, có nhiều dạng đúng, hoặc nghĩa chuyên hơn.</td>
              <td>abide, arise, behold, beset, cleave</td>
            </tr>
          </tbody>
        </table>
        <p>Để học thuộc dễ hơn, có thể chia động từ bất quy tắc thành <strong>4 nhóm theo hình dạng V1 - V2 - V3</strong>:</p>
        
        <p><strong>1. Nhóm A-A-A (V1 = V2 = V3):</strong></p>
        <p>Cả 3 cột đều giống hệt nhau về cách viết (riêng "read" thay đổi cách phát âm ở V2/V3 thành /red/).</p>
        <table class="comparison-table">
          <thead>
            <tr>
              <th>V1 (Nguyên mẫu)</th>
              <th>V2 (Quá khứ)</th>
              <th>V3 (Phân từ hai)</th>
              <th>Nghĩa tiếng Việt</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>cut</strong></td>
              <td>cut</td>
              <td>cut</td>
              <td>cắt</td>
            </tr>
            <tr>
              <td><strong>put</strong></td>
              <td>put</td>
              <td>put</td>
              <td>đặt, để</td>
            </tr>
            <tr>
              <td><strong>read</strong></td>
              <td>read (/red/)</td>
              <td>read (/red/)</td>
              <td>đọc</td>
            </tr>
            <tr>
              <td><strong>cost</strong></td>
              <td>cost</td>
              <td>cost</td>
              <td>trị giá, tốn tiền</td>
            </tr>
            <tr>
              <td><strong>hurt</strong></td>
              <td>hurt</td>
              <td>hurt</td>
              <td>làm đau, đau</td>
            </tr>
          </tbody>
        </table>
        
        <br>
        <p><strong>2. Nhóm A-B-A (V1 = V3):</strong></p>
        <p>Dạng nguyên mẫu V1 và phân từ hai V3 giống hệt nhau, chỉ có quá khứ V2 là khác.</p>
        <table class="comparison-table">
          <thead>
            <tr>
              <th>V1 (Nguyên mẫu)</th>
              <th>V2 (Quá khứ)</th>
              <th>V3 (Phân từ hai)</th>
              <th>Nghĩa tiếng Việt</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>run</strong></td>
              <td>ran</td>
              <td>run</td>
              <td>chạy</td>
            </tr>
            <tr>
              <td><strong>come</strong></td>
              <td>came</td>
              <td>come</td>
              <td>đến</td>
            </tr>
            <tr>
              <td><strong>become</strong></td>
              <td>became</td>
              <td>become</td>
              <td>trở thành</td>
            </tr>
          </tbody>
        </table>

        <br>
        <p><strong>3. Nhóm A-B-B (V2 = V3):</strong></p>
        <p>Dạng quá khứ V2 và phân từ hai V3 giống hệt nhau.</p>
        <table class="comparison-table">
          <thead>
            <tr>
              <th>V1 (Nguyên mẫu)</th>
              <th>V2 (Quá khứ)</th>
              <th>V3 (Phân từ hai)</th>
              <th>Nghĩa tiếng Việt</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>buy</strong></td>
              <td>bought</td>
              <td>bought</td>
              <td>mua</td>
            </tr>
            <tr>
              <td><strong>lose</strong></td>
              <td>lost</td>
              <td>lost</td>
              <td>mất, làm mất</td>
            </tr>
            <tr>
              <td><strong>make</strong></td>
              <td>made</td>
              <td>made</td>
              <td>chế tạo, làm ra</td>
            </tr>
            <tr>
              <td><strong>find</strong></td>
              <td>found</td>
              <td>found</td>
              <td>tìm thấy</td>
            </tr>
            <tr>
              <td><strong>have</strong></td>
              <td>had</td>
              <td>had</td>
              <td>có</td>
            </tr>
            <tr>
              <td><strong>say</strong></td>
              <td>said</td>
              <td>said</td>
              <td>nói</td>
            </tr>
          </tbody>
        </table>

        <br>
        <p><strong>4. Nhóm A-B-C (V1 ≠ V2 ≠ V3):</strong></p>
        <p>Cả 3 cột đều khác nhau hoàn toàn, cần ghi nhớ cẩn thận.</p>
        <table class="comparison-table">
          <thead>
            <tr>
              <th>V1 (Nguyên mẫu)</th>
              <th>V2 (Quá khứ)</th>
              <th>V3 (Phân từ hai)</th>
              <th>Nghĩa tiếng Việt</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>go</strong></td>
              <td>went</td>
              <td>gone</td>
              <td>đi</td>
            </tr>
            <tr>
              <td><strong>eat</strong></td>
              <td>ate</td>
              <td>eaten</td>
              <td>ăn</td>
            </tr>
            <tr>
              <td><strong>see</strong></td>
              <td>saw</td>
              <td>seen</td>
              <td>nhìn, xem</td>
            </tr>
            <tr>
              <td><strong>write</strong></td>
              <td>wrote</td>
              <td>written</td>
              <td>viết</td>
            </tr>
            <tr>
              <td><strong>do</strong></td>
              <td>did</td>
              <td>done</td>
              <td>làm</td>
            </tr>
            <tr>
              <td><strong>know</strong></td>
              <td>knew</td>
              <td>known</td>
              <td>biết</td>
            </tr>
            <tr>
              <td><strong>take</strong></td>
              <td>took</td>
              <td>taken</td>
              <td>cầm, lấy, dẫn đi</td>
            </tr>
          </tbody>
        </table>
        
        <br>
        <hr style="border: 0; border-top: 1px solid var(--border-color); margin: 30px 0;">
        
        <h3 id="irregular-verbs-lookup-title">🔍 Công cụ tra cứu 360 Động từ bất quy tắc thông dụng</h3>
        <p>Nhập từ cần tìm (tiếng Anh hoặc tiếng Việt) để lọc nhanh danh sách dưới đây:</p>
        
        <div class="search-container" style="margin-bottom: 20px;">
          <input type="text" id="verb-search-input" placeholder="Ví dụ: go, eat, mua, lấy..." style="width: 100%; padding: 12px; border: 1px solid var(--border-color); border-radius: 8px; font-size: 1rem; background-color: var(--card-bg); color: var(--text-color);">
          <div id="verbs-count" style="margin-top: 8px; font-size: 0.85rem; color: var(--text-muted);">Hiển thị 0 / 360 động từ</div>
        </div>

        <div style="max-height: 400px; overflow-y: auto; border: 1px solid var(--border-color); border-radius: 8px;">
          <table class="comparison-table" style="margin: 0; border: none; border-radius: 0;">
            <thead>
              <tr style="position: sticky; top: 0; background-color: var(--sidebar-bg); z-index: 10;">
                <th style="padding: 12px;">V1 (Nguyên mẫu)</th>
                <th style="padding: 12px;">V2 (Quá khứ)</th>
                <th style="padding: 12px;">V3 (Phân từ hai)</th>
                <th style="padding: 12px;">Nghĩa tiếng Việt</th>
              </tr>
            </thead>
            <tbody id="verbs-table-body">
              <!-- Will be rendered dynamically by JS -->
            </tbody>
          </table>
        </div>
      `,
      examples: [
        {
          eng: "I cut my finger yesterday.",
          viet: "Tôi đã bị đứt tay ngày hôm qua (cut là V2 nhóm A-A-A).",
          tokens: [
            { text: "I", label: "Subject", role: "s" },
            { text: "cut", label: "Verb (V2 của cut - nhóm AAA)", role: "v" },
            { text: "my finger", label: "Object", role: "o" },
            { text: "yesterday", label: "Time Adverb (Quá khứ)", role: "adv" }
          ],
          note: "Động từ 'cut' có 3 cột giống nhau, trong câu quá khứ đơn đi với 'yesterday' nó vẫn giữ nguyên dạng viết là 'cut'."
        },
        {
          eng: "She has run five miles today.",
          viet: "Hôm nay cô ấy đã chạy được năm dặm (run là V3 nhóm A-B-A).",
          tokens: [
            { text: "She", label: "Subject", role: "s" },
            { text: "has run", label: "Verb (has + V3 của run - nhóm ABA)", role: "v" },
            { text: "five miles", label: "Object Phrase", role: "o" },
            { text: "today", label: "Time Adverb (Hiện tại)", role: "adv" }
          ],
          note: "Thì Hiện tại hoàn thành dùng trợ động từ 'has' + V3. Dạng V3 của 'run' quay trở lại giống hệt nguyên mẫu V1 là 'run'."
        },
        {
          eng: "We bought a new car last week.",
          viet: "Chúng tôi đã mua một chiếc xe hơi mới tuần trước (bought là V2 nhóm A-B-B).",
          tokens: [
            { text: "We", label: "Subject", role: "s" },
            { text: "bought", label: "Verb (V2 của buy - nhóm ABB)", role: "v" },
            { text: "a new car", label: "Object Phrase", role: "o" },
            { text: "last week", label: "Time Adverb (Quá khứ)", role: "adv" }
          ],
          note: "Động từ 'buy' chuyển sang quá khứ đơn V2 là 'bought' và phân từ hai V3 cũng là 'bought'."
        },
        {
          eng: "They have written three reports.",
          viet: "Họ đã viết xong ba bản báo cáo (written là V3 nhóm A-B-C).",
          tokens: [
            { text: "They", label: "Subject", role: "s" },
            { text: "have written", label: "Verb (have + V3 của write - nhóm ABC)", role: "v" },
            { text: "three reports", label: "Object Phrase", role: "o" }
          ],
          note: "Ở thì Hiện tại hoàn thành, động từ bất quy tắc 'write' biến đổi sang cột thứ 3 (V3) là 'written'."
        }
      ],
      commonErrors: `
        <p>🔴 <strong>Lỗi: Tự ý thêm "-ed" vào sau các động từ bất quy tắc.</strong></p>
        <p>Sai: <em>"I buyed a laptop."</em> hoặc <em>"She has eated dinner."</em></p>
        <p>Đúng: <em>"I bought a laptop."</em> và <em>"She has eaten dinner."</em></p>
        <br>
        <p>🔴 <strong>Lỗi: Dùng nhầm dạng V2 (quá khứ) cho V3 (hoàn thành) và ngược lại.</strong></p>
        <p>Sai: <em>"I have went to school."</em> hoặc <em>"I gone to school yesterday."</em></p>
        <p>Đúng: <em>"I have gone to school."</em> và <em>"I went to school yesterday."</em></p>
        <p>Ghi nhớ: có <strong>have/has/had</strong> thì dùng <strong>V3</strong>; kể một việc đã xảy ra ở quá khứ đơn thì dùng <strong>V2</strong>.</p>
      `,
      tips: `
        <p>💡 <strong>Mẹo ghi nhớ động từ bất quy tắc:</strong></p>
        <ul>
          <li><strong>Học theo nhóm quy luật giống nhau:</strong> Thay vì học bảng chữ cái A-Z, hãy học theo nhóm có cùng vần hoặc quy tắc biến đổi (ví dụ nhóm có đuôi -ought như *buy-bought-bought*, *think-thought-thought*, *teach-taught-taught*).</li>
          <li><strong>Sử dụng flashcard hoặc thẻ ghi nhớ:</strong> Một mặt ghi từ nguyên mẫu, một mặt ghi V2, V3 và nghĩa tiếng Việt.</li>
          <li><strong>Đặt câu thực tế:</strong> Tạo thói quen đặt câu ở cả thì quá khứ đơn (dùng V2) và hiện tại hoàn thành (dùng have/has + V3) để ghi nhớ ngữ cảnh sử dụng.</li>
        </ul>
      `
    }
  };

  // ------------------------------------------------------------------
  // WORD POOLS FOR QUESTION GENERATOR
  // ------------------------------------------------------------------
  const SUBJECTS_POOL = {
    singular: [
      { text: "He", pronoun: "he", beWas: "was", beWasNeg: "wasn't", doDid: "did", dontDidNeg: "didn't", haveVal: "has", haveNeg: "hasn't" },
      { text: "She", pronoun: "she", beWas: "was", beWasNeg: "wasn't", doDid: "did", dontDidNeg: "didn't", haveVal: "has", haveNeg: "hasn't" },
      { text: "It", pronoun: "it", beWas: "was", beWasNeg: "wasn't", doDid: "did", dontDidNeg: "didn't", haveVal: "has", haveNeg: "hasn't" },
      { text: "Peter", pronoun: "he", beWas: "was", beWasNeg: "wasn't", doDid: "did", dontDidNeg: "didn't", haveVal: "has", haveNeg: "hasn't" },
      { text: "Mary", pronoun: "she", beWas: "was", beWasNeg: "wasn't", doDid: "did", dontDidNeg: "didn't", haveVal: "has", haveNeg: "hasn't" },
      { text: "Lan", pronoun: "she", beWas: "was", beWasNeg: "wasn't", doDid: "did", dontDidNeg: "didn't", haveVal: "has", haveNeg: "hasn't" },
      { text: "The student", pronoun: "he", beWas: "was", beWasNeg: "wasn't", doDid: "did", dontDidNeg: "didn't", haveVal: "has", haveNeg: "hasn't" }
    ],
    plural: [
      { text: "I", pronoun: "I", beWas: "was", beWasNeg: "wasn't", doDid: "did", dontDidNeg: "didn't", haveVal: "have", haveNeg: "haven't" },
      { text: "You", pronoun: "you", beWas: "were", beWasNeg: "weren't", doDid: "did", dontDidNeg: "didn't", haveVal: "have", haveNeg: "haven't" },
      { text: "We", pronoun: "we", beWas: "were", beWasNeg: "weren't", doDid: "did", dontDidNeg: "didn't", haveVal: "have", haveNeg: "haven't" },
      { text: "They", pronoun: "they", beWas: "were", beWasNeg: "weren't", doDid: "did", dontDidNeg: "didn't", haveVal: "have", haveNeg: "haven't" },
      { text: "My parents", pronoun: "they", beWas: "were", beWasNeg: "weren't", doDid: "did", dontDidNeg: "didn't", haveVal: "have", haveNeg: "haven't" },
      { text: "The teachers", pronoun: "they", beWas: "were", beWasNeg: "weren't", doDid: "did", dontDidNeg: "didn't", haveVal: "have", haveNeg: "haven't" }
    ]
  };

  const VERBS_REGULAR = [
    { base: "work", v2: "worked", v3: "worked", obj: "at a factory", viet: "làm việc ở nhà máy" },
    { base: "live", v2: "lived", v3: "lived", obj: "in Hanoi", viet: "sống ở Hà Nội" },
    { base: "play", v2: "played", v3: "played", obj: "tennis", viet: "chơi tennis" },
    { base: "visit", v2: "visited", v3: "visited", obj: "their grandparents", viet: "thăm ông bà của họ" },
    { base: "study", v2: "studied", v3: "studied", obj: "French", viet: "học tiếng Pháp" },
    { base: "clean", v2: "cleaned", v3: "cleaned", obj: "the house", viet: "dọn dẹp nhà cửa" }
  ];

  const VERBS_IRREGULAR = [
    { base: "go", v2: "went", v3: "gone", obj: "to school", viet: "đi học" },
    { base: "eat", v2: "ate", v3: "eaten", obj: "dinner", viet: "ăn tối" },
    { base: "see", v2: "saw", v3: "seen", obj: "that movie", viet: "xem bộ phim đó" },
    { base: "write", v2: "wrote", v3: "written", obj: "a letter", viet: "viết thư" },
    { base: "lose", v2: "lost", v3: "lost", obj: "the keys", viet: "mất chìa khóa" },
    { base: "do", v2: "did", v3: "done", obj: "the homework", viet: "làm bài tập" },
    { base: "buy", v2: "bought", v3: "bought", obj: "a new laptop", viet: "mua máy tính mới" }
  ];

  window.UNITS_REGISTRY["unit2"] = {
    unitId: "unit2",
    title: "Unit 2: Present Perfect & Past Simple",
    lessons: LESSONS_DATA,
    pools: { SUBJECTS_POOL, VERBS_REGULAR, VERBS_IRREGULAR },
    rules: {
      "have/has": "Trợ động từ Hiện tại hoàn thành",
      "V3/ed": "Động từ phân từ hai (V3)",
      "was/were": "Động từ To Be trong quá khứ",
      "did/didn't": "Trợ động từ quá khứ (Quá khứ đơn)",
      "V2/ed": "Động từ chia quá khứ đơn (V2)",
      "irregular": "Động từ bất quy tắc (V2/V3)"
    }
  };
})();
