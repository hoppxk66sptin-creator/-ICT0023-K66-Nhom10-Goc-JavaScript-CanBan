const CHU_DE_KIEN_THUC = [
  {
    id: "bien",
    ten: "Biến: var, let và const",
    nhom: "Nền tảng",
    moTa: "Đặt tên và quản lý giá trị trong chương trình; ưu tiên const, dùng let khi cần gán lại.",
    yChinh: ["const không gán lại tên biến", "let có phạm vi khối", "Tránh var trong mã mới"],
    viDu: "const ten = 'Mai';\nlet diem = 8;\ndiem = diem + 1;\nconsole.log(ten, diem);"
  },
  {
    id: "kieu-du-lieu",
    ten: "Kiểu dữ liệu và giá trị đặc biệt",
    nhom: "Nền tảng",
    moTa: "Nhận biết chuỗi, số, boolean, undefined, null và cách kiểm tra NaN.",
    yChinh: ["typeof giúp xem kiểu cơ bản", "null biểu thị rỗng có chủ đích", "Dùng Number.isNaN() để kiểm tra NaN"],
    viDu: "const ten = 'JavaScript';\nconst dangMo = true;\nlet ketQua;\nconsole.log(typeof ten, dangMo, ketQua);"
  },
  {
    id: "if-switch",
    ten: "Điều kiện: if và switch",
    nhom: "Luồng điều khiển",
    moTa: "Rẽ nhánh theo điều kiện để chương trình phản hồi khác nhau với dữ liệu đầu vào.",
    yChinh: ["if phù hợp điều kiện đúng/sai", "else xử lý trường hợp còn lại", "switch tiện khi so khớp nhiều giá trị"],
    viDu: "const diem = 8;\nif (diem >= 5) {\n  console.log('Đạt');\n} else {\n  console.log('Cần ôn thêm');\n}"
  },
  {
    id: "vong-lap",
    ten: "Vòng lặp for và while",
    nhom: "Luồng điều khiển",
    moTa: "Lặp lại thao tác với số lần xác định hoặc cho đến khi điều kiện không còn đúng.",
    yChinh: ["for thường dùng khi biết số lượt", "while lặp khi điều kiện còn đúng", "Cập nhật biến lặp để tránh lặp vô hạn"],
    viDu: "for (let i = 1; i <= 3; i += 1) {\n  console.log(`Lượt ${i}`);\n}"
  },
  {
    id: "ham",
    ten: "Hàm và hàm mũi tên",
    nhom: "Dữ liệu & giao diện",
    moTa: "Đóng gói một nhiệm vụ thành khối có thể tái sử dụng, nhận tham số và trả kết quả.",
    yChinh: ["Mỗi hàm nên có nhiệm vụ rõ", "return gửi kết quả về nơi gọi", "Hàm mũi tên có cú pháp gọn"],
    viDu: "const tinhTong = (a, b) => a + b;\nconst ketQua = tinhTong(3, 4);\nconsole.log(ketQua);"
  },
  {
    id: "mang",
    ten: "Mảng: map, filter và find",
    nhom: "Dữ liệu & giao diện",
    moTa: "Lưu nhiều giá trị và biến đổi, lọc hoặc tìm phần tử bằng các phương thức phổ biến.",
    yChinh: ["map tạo mảng mới đã biến đổi", "filter giữ phần tử thỏa điều kiện", "find trả phần tử khớp đầu tiên"],
    viDu: "const diem = [5, 8, 9];\nconst diemDat = diem.filter((so) => so >= 8);\nconst diemCong = diem.map((so) => so + 1);\nconsole.log(diemDat, diemCong);"
  },
  {
    id: "dom",
    ten: "DOM và sự kiện",
    nhom: "Dữ liệu & giao diện",
    moTa: "Tìm phần tử HTML, cập nhật nội dung và lắng nghe thao tác của người dùng.",
    yChinh: ["querySelector tìm phần tử theo CSS", "textContent cập nhật văn bản an toàn", "addEventListener đăng ký sự kiện"],
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
