const CHU_DE_KIEN_THUC = [
  {
    id: "bien",
    ten: "Biến: var, let và const",
    nhom: "Nền tảng",
    moTa: "Biến dùng để đặt tên và quản lý giá trị trong chương trình. Trong JavaScript hiện đại, quy chuẩn là ưu tiên dùng const, dùng let khi cần gán lại giá trị, và tránh dùng var trong mã nguồn mới.",
    yChinh: [
      "var: Từ khóa khai báo biến cũ (function-scoped), bị hoisting, dễ gây ra lỗi khó kiểm soát.",
      "let: Khai báo biến có phạm vi khối (block-scoped), có thể gán lại giá trị mới.",
      "const: Khai báo hằng số, không thể gán lại tên biến hay giá trị mới sau khi khởi tạo lần đầu."
    ],
    viDu: "const ten = 'Mai';\nlet diem = 8;\ndiem = diem + 1;\nconsole.log(ten, diem);"
  },
  {
    id: "kieu-du-lieu",
    ten: "Kiểu dữ liệu và giá trị đặc biệt",
    nhom: "Nền tảng",
    moTa: "Giúp nhận biết các kiểu dữ liệu cơ bản như chuỗi (string), số (number), boolean, undefined, null và cách kiểm tra giá trị NaN một cách chính xác.",
    yChinh: [
      "typeof: Toán tử giúp xem kiểu dữ liệu cơ bản của một biến.",
      "null: Giá trị đặc biệt biểu thị sự rỗng có chủ đích do lập trình viên chủ động gán.",
      "undefined: Biến được khai báo nhưng chưa được gán giá trị.",
      "Number.isNaN(): Hàm chuẩn dùng để kiểm tra chính xác giá trị NaN."
    ],
    viDu: "const ten = 'JavaScript';\nconst dangMo = true;\nlet ketQua;\nconsole.log(typeof ten, dangMo, ketQua);"
  },
  {
    id: "if-switch",
    ten: "Điều kiện: if và switch",
    nhom: "Luồng điều khiển",
    moTa: "Dùng để rẽ nhánh theo điều kiện, giúp chương trình có thể phản hồi các kết quả khác nhau tùy thuộc vào dữ liệu đầu vào.",
    yChinh: [
      "if: Phù hợp để kiểm tra các điều kiện mang tính đúng/sai (true/false).",
      "else: Dùng để xử lý các trường hợp còn lại khi điều kiện if không thỏa mãn.",
      "switch: Cấu trúc rẽ nhánh tiện lợi và gọn gàng hơn khi cần so khớp một biến với nhiều giá trị cụ thể."
    ],
    viDu: "const diem = 8;\nif (diem >= 5) {\n  console.log('Đạt');\n} else {\n  console.log('Cần ôn thêm');\n}"
  },
  {
    id: "vong-lap",
    ten: "Vòng lặp for và while",
    nhom: "Luồng điều khiển",
    moTa: "Dùng để lặp đi lặp lại một thao tác với số lần xác định hoặc tiếp tục cho đến khi điều kiện kiểm tra không còn đúng.",
    yChinh: [
      "for: Thường được dùng khi bạn đã biết trước số lượt lặp cụ thể.",
      "while: Dùng khi muốn tiếp tục lặp lại miễn là điều kiện kiểm tra vẫn còn đúng.",
      "Lưu ý quan trọng: Luôn phải cập nhật biến lặp bên trong thân vòng lặp để tránh lặp vô hạn."
    ],
    viDu: "for (let i = 1; i <= 3; i += 1) {\n  console.log(`Lượt ${i}`);\n}"
  },
  {
    id: "ham",
    ten: "Hàm và hàm mũi tên",
    nhom: "Dữ liệu & giao diện",
    moTa: "Giúp đóng gói một nhiệm vụ thành khối có thể tái sử dụng, nhận các tham số đầu vào và trả về kết quả xử lý.",
    yChinh: [
      "Mỗi hàm nên được thiết kế để đảm nhận một nhiệm vụ cụ thể và rõ ràng.",
      "return: Từ khóa dùng để gửi kết quả xử lý bên trong hàm trả về nơi gọi nó.",
      "Hàm mũi tên (Arrow Function): Cú pháp viết gọn hiện đại (từ ES6) giúp khai báo hàm ngắn gọn hơn."
    ],
    viDu: "const tinhTong = (a, b) => a + b;\nconst ketQua = tinhTong(3, 4);\nconsole.log(ketQua);"
  },
  {
    id: "mang",
    ten: "Mảng: map, filter và find",
    nhom: "Dữ liệu & giao diện",
    moTa: "Dùng để lưu trữ nhiều giá trị trong một biến duy nhất, kết hợp các phương thức phổ biến để biến đổi, lọc hoặc tìm kiếm phần tử.",
    yChinh: [
      "map: Duyệt qua mảng cũ và tạo ra một mảng mới với các giá trị đã được biến đổi.",
      "filter: Lọc mảng và giữ lại các phần tử thỏa mãn một điều kiện cho trước.",
      "find: Tìm kiếm và trả về phần tử đầu tiên khớp với điều kiện tìm kiếm."
    ],
    viDu: "const diem = [5, 8, 9];\nconst diemDat = diem.filter((so) => so >= 8);\nconst diemCong = diem.map((so) => so + 1);\nconsole.log(diemDat, diemCong);"
  },
  {
    id: "dom",
    ten: "DOM và sự kiện",
    nhom: "Dữ liệu & giao diện",
    moTa: "Tương tác trực tiếp với giao diện trang web bằng cách tìm các phần tử HTML, cập nhật nội dung và lắng nghe thao tác của người dùng.",
    yChinh: [
      "querySelector: Phương thức dùng để tìm kiếm phần tử HTML dựa trên bộ chọn CSS.",
      "textContent: Thuộc tính giúp đọc hoặc cập nhật nội dung văn bản bên trong phần tử an toàn.",
      "addEventListener: Phương thức dùng để đăng ký và lắng nghe các sự kiện tương tác từ người dùng."
    ],
    viDu: "const nut = document.querySelector('#nut');\nnut.addEventListener('click', () => {\n  document.querySelector('#ket-qua').textContent = 'Xin chào!';\n});"
  }
];

const TU_DIEN_JAVASCRIPT = [
  { ten: "Array", nhom: "Kiểu dữ liệu", moTa: "Kiểu dữ liệu có thứ tự dùng để chứa nhiều giá trị trong một biến." },
  { ten: "Callback", nhom: "Hàm", moTa: "Hàm được truyền vào hàm khác để được gọi ở thời điểm thích hợp." },
  { ten: "Closure", nhom: "Hàm", moTa: "Hàm có thể tiếp tục truy cập phạm vi từ nơi nó được tạo ra." },
  { ten: "DOM", nhom: "Trình duyệt", moTa: "Mô hình dạng cây đại diện cho tài liệu HTML để JavaScript có thể thao tác." },
  { ten: "Event", nhom: "Trình duyệt", moTa: "Tín hiệu cho biết một việc xảy ra, chẳng hạn nhấn nút hoặc nhập nội dung." },
  { ten: "Function", nhom: "Hàm", moTa: "Khối lệnh có thể gọi lại, nhận tham số và trả về kết quả." },
  { ten: "let", nhom: "Cú pháp", moTa: "Từ khóa khai báo biến có phạm vi khối và có thể gán lại." },
  { ten: "map()", nhom: "Mảng", moTa: "Tạo mảng mới bằng cách áp dụng hàm biến đổi lên từng phần tử." },
  { ten: "Object", nhom: "Kiểu dữ liệu", moTa: "Cấu trúc lưu dữ liệu theo cặp khóa và giá trị." },
  { ten: "Promise", nhom: "Bất đồng bộ", moTa: "Đại diện cho kết quả của một thao tác bất đồng bộ sẽ hoàn tất trong tương lai." },
  { ten: "Scope", nhom: "Cú pháp", moTa: "Phạm vi quyết định nơi một biến hoặc hàm có thể được truy cập." },
  { ten: "const", nhom: "Cú pháp", moTa: "Từ khóa khai báo tên biến không thể gán lại; mặc định phù hợp cho đa số biến." }
];

const CAU_HOI_TRAC_NGHIEM = [
  { cau: "Từ khóa nào nên được ưu tiên khi giá trị không cần gán lại?", luaChon: ["var", "let", "const"], dapAn: 2, giaiThich: "const giúp tránh vô tình gán lại tên biến." },
  { cau: "Phương thức nào biến đổi từng phần tử và trả về một mảng mới?", luaChon: ["map()", "filter()", "find()"], dapAn: 0, giaiThich: "map() áp dụng hàm lên từng phần tử và tạo mảng kết quả cùng độ dài." },
  { cau: "Cách kiểm tra một giá trị có phải NaN chính xác là gì?", luaChon: ["x === NaN", "Number.isNaN(x)", "typeof x === 'NaN'"], dapAn: 1, giaiThich: "NaN không bằng chính nó; dùng Number.isNaN(x)." },
  { cau: "Phương thức nào đăng ký trình xử lý sự kiện chuẩn của DOM?", luaChon: ["onClickNow()", "addEventListener()", "queryEvent()"], dapAn: 1, giaiThich: "addEventListener() gắn hàm xử lý vào một loại sự kiện." },
  { cau: "filter() trả về điều gì?", luaChon: ["Phần tử đầu tiên", "Mảng các phần tử thỏa điều kiện", "Số phần tử"], dapAn: 1, giaiThich: "filter() tạo mảng mới gồm những phần tử thỏa điều kiện." },
  { cau: "Thuộc tính nào nên dùng để cập nhật văn bản thuần trên trang?", luaChon: ["textContent", "innerHTML", "outerScript"], dapAn: 0, giaiThich: "textContent cập nhật văn bản mà không diễn giải chuỗi thành HTML." }
];

const BAI_LUYEN_CODE = [
  { de: "Khai báo hằng số ten có giá trị chuỗi 'Lan' bằng const.", dapAn: "const ten = 'Lan';", goiY: "Bắt đầu bằng const, sau đó là tên biến ten và giá trị chuỗi trong dấu nháy." },
  { de: "Tạo hàm mũi tên congHai nhận n và trả về n * 2.", dapAn: "const congHai = (n) => n * 2;", goiY: "Dùng const, dấu =, tham số trong ngoặc và mũi tên =>." },
  { de: "Dùng filter để lấy số lớn hơn 5 từ mảng cacSo.", dapAn: "const soLon = cacSo.filter((so) => so > 5);", goiY: "filter nhận một hàm mũi tên và điều kiện so > 5." },
  { de: "Chọn phần tử có id ket-qua bằng querySelector.", dapAn: "const ketQua = document.querySelector('#ket-qua');", goiY: "Bộ chọn id trong CSS cần có dấu #." },
  { de: "Gắn sự kiện click cho nut bằng addEventListener.", dapAn: "nut.addEventListener('click', xuLyClick);", goiY: "Truyền tên sự kiện click và tên hàm xử lý." },
  { de: "In chuỗi 'Xin chào' ra bảng điều khiển bằng console.log.", dapAn: "console.log('Xin chào');", goiY: "Gọi console.log và đặt chuỗi trong dấu nháy." }
];

// Render danh sách kiến thức ra giao diện trang
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('#danh-sach-kien-thuc');
  if (container) {
    container.innerHTML = CHU_DE_KIEN_THUC.map(item => `
      <div class="col-md-4">
        <article class="card the">
          <div class="card-body d-flex flex-column">
            <span class="the-nhan mb-2 align-self-start">${item.nhom}</span>
            <h3 class="card-title h5"><strong>${item.ten}</strong></h3>
            <!-- Hiển thị nội dung khái niệm đầy đủ (thay vì chỉ tóm tắt ngắn) ngay dưới tiêu đề card -->
            <p class="card-text">${item.moTa}</p>
            
            <!-- Phần ý chi tiết và ví dụ mã nằm ẩn để hiện trong modal khi bấm nút -->
            <div class="chi-tiet-noi-dung-an" id="noi-dung-${item.id}">
              <p class="mb-2"><strong>Mô tả chi tiết:</strong> ${item.moTa}</p>
              <p class="mb-1"><strong>Các điểm cốt lõi cần nhớ:</strong></p>
              <ul class="mb-3">
                ${item.yChinh.map(y => {
                  const viTriHaiCham = y.indexOf(':');
                  if (viTriHaiCham === -1) return `<li>${y}</li>`;
                  return `<li><strong>${y.slice(0, viTriHaiCham + 1)}</strong>${y.slice(viTriHaiCham + 1)}</li>`;
                }).join('')}
              </ul>
              <p class="mb-1"><strong>Ví dụ mã minh họa:</strong></p>
              <div class="p-2 rounded" style="background: #0b1727; color: #dce8f5; font-family: var(--font-code); font-size: 0.88rem;">
                <code>${item.viDu.replace(/\n/g, '<br>')}</code>
              </div>
            </div>

            <div class="mt-auto pt-3">
              <button type="button" class="btn btn-xanh w-100 btn-xem-chi-tiet" data-id="${item.id}" data-title="${item.ten}">
                Xem nội dung chi tiết
              </button>
            </div>
          </div>
        </article>
      </div>
    `).join('');
  }

  // Tạo sẵn khung Modal hiển thị nội dung chi tiết dạng nền đen xám, font chữ thường
  if (!document.querySelector('#modalChiTietKienThuc')) {
    const modalHTML = `
      <div class="modal fade" id="modalChiTietKienThuc" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content modal-kien-thuc-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalChiTietTitle">Chi tiết chủ đề</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Đóng"></button>
            </div>
            <div class="modal-body" id="modalChiTietBody">
              <!-- Nội dung chi tiết được nhồi vào đây -->
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  // Lắng nghe sự kiện click nút Xem nội dung chi tiết
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('.btn-xem-chi-tiet');
    if (!btn) return;
    
    const id = btn.getAttribute('data-id');
    const title = btn.getAttribute('data-title');
    const hiddenContentEl = document.querySelector(`#noi-dung-${id}`);
    
    if (hiddenContentEl) {
      document.querySelector('#modalChiTietTitle').textContent = title;
      document.querySelector('#modalChiTietBody').innerHTML = hiddenContentEl.innerHTML;
      
      const myModal = new bootstrap.Modal(document.querySelector('#modalChiTietKienThuc'));
      myModal.show();
    }
  });
});