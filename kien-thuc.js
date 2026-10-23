<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Kiến thức | JS Căn Bản</title>
<meta name="description" content="Bảy chủ đề JavaScript căn bản có ví dụ mã, bảng so sánh và bộ lọc.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;600;700&amp;family=JetBrains+Mono:wght@400;600&amp;display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css">
<link rel="stylesheet" href="styles.css">
</head>
<body>
<a class="skip-link" href="#noi-dung-chinh">Bỏ qua điều hướng</a>
<header>
  <nav class="navbar navbar-expand-md site-nav" aria-label="Điều hướng chính">
    <div class="container">
      <a class="navbar-brand" href="index.html"><span class="brand-mark">JS</span> Căn Bản</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu-chinh" aria-controls="menu-chinh" aria-expanded="false" aria-label="Mở menu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="menu-chinh">
        <ul class="navbar-nav ms-auto"><li class="nav-item"><a class="nav-link" href="index.html">Trang chủ</a></li><li class="nav-item"><a class="nav-link active" href="kien-thuc.html" aria-current="page">Kiến thức</a></li><li class="nav-item"><a class="nav-link" href="cong-cu.html">Công cụ</a></li><li class="nav-item"><a class="nav-link" href="hoi-dap.html">Hỏi đáp</a></li><li class="nav-item"><a class="nav-link" href="lien-he.html">Liên hệ</a></li></ul>
      </div>
    </div>
  </nav>
</header>
<main id="noi-dung-chinh">

<div class="tieu-de-trang"><div class="container">
  <h1>Kiến thức JavaScript căn bản</h1>
  <p>Bảy chủ đề được biên soạn từ tài liệu môn học, mỗi chủ đề có ví dụ mã.</p>
</div></div>

<section class="khoi-tight" aria-labelledby="tieu-de-ds">
  <div class="container">
    <h2 id="tieu-de-ds" class="mb-3">Danh sách chủ đề</h2>
    <form class="row g-3 align-items-end mb-3" role="search" aria-label="Lọc chủ đề">
      <div class="col-12 col-md-4">
        <label class="form-label" for="tim-kien-thuc">Tìm chủ đề</label>
        <input class="form-control" type="search" id="tim-kien-thuc" placeholder="Ví dụ: mảng, vòng lặp" autocomplete="off">
      </div>
      <div class="col-6 col-md-3">
        <label class="form-label" for="loc-nhom">Nhóm</label>
        <select class="form-select" id="loc-nhom">
          <option value="tat-ca">Tất cả</option>
          <option>Nền tảng</option>
          <option>Luồng điều khiển</option>
          <option>Dữ liệu &amp; giao diện</option>
        </select>
      </div>
      <div class="col-6 col-md-3">
        <label class="form-label" for="sap-xep">Sắp xếp</label>
        <select class="form-select" id="sap-xep">
          <option value="thu-tu">Theo thứ tự học</option>
          <option value="ten">Theo tên A-Z</option>
        </select>
      </div>
      <div class="col-12 col-md-2"><button type="button" class="btn btn-outline-secondary w-100" id="dat-lai-loc">Đặt lại bộ lọc</button></div>
    </form>
    <p class="dem-ket-qua" id="dem-kien-thuc" aria-live="polite"></p>
    <div class="row g-4" id="ds-kien-thuc"></div>
  </div>
</section>

<section class="khoi-tight" aria-labelledby="tieu-de-bang">
  <div class="container">
    <div class="row g-4">
      <div class="col-lg-7">
        <h2 id="tieu-de-bang">So sánh var, let và const</h2>
        <div class="table-responsive">
          <table class="table table-bordered align-middle">
            <caption class="visually-hidden">So sánh ba từ khóa khai báo biến</caption>
            <thead><tr><th scope="col">Đặc điểm</th><th scope="col">var</th><th scope="col">let</th><th scope="col">const</th></tr></thead>
            <tbody>
              <tr><th scope="row">Phạm vi</th><td>Hàm</td><td>Khối</td><td>Khối</td></tr>
              <tr><th scope="row">Gán lại giá trị</th><td>Được</td><td>Được</td><td>Không</td></tr>
              <tr><th scope="row">Khai báo lại cùng tên</th><td>Được</td><td>Không</td><td>Không</td></tr>
              <tr><th scope="row">Hoisting</th><td>Có (undefined)</td><td>Có, nhưng lỗi nếu dùng sớm</td><td>Có, nhưng lỗi nếu dùng sớm</td></tr>
              <tr><th scope="row">Nên dùng?</th><td>Không</td><td>Khi giá trị đổi</td><td>Mặc định</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-lg-5">
        <h2>Hình minh họa phạm vi</h2>
        <img src="assets/pham-vi-bien.svg" class="img-fluid rounded border" width="560" height="300" alt="Sơ đồ hai hình chữ nhật lồng nhau: var dùng được trong cả hàm, let và const chỉ dùng được trong khối lệnh bên trong.">
        <p class="ghi-chu mt-2">Hình tự vẽ bằng SVG cho trang này.</p>
      </div>
    </div>
  </div>
</section>

<section class="khoi-tight" aria-labelledby="tieu-de-kieu">
  <div class="container">
    <h2 id="tieu-de-kieu">Phân biệt undefined, null và NaN</h2>
    <div class="table-responsive">
      <table class="table table-bordered align-middle">
        <caption class="visually-hidden">Ba giá trị đặc biệt trong JavaScript</caption>
        <thead><tr><th scope="col">Giá trị</th><th scope="col">Ý nghĩa</th><th scope="col">Ví dụ</th></tr></thead>
        <tbody>
          <tr><th scope="row"><code>undefined</code></th><td>Biến đã khai báo nhưng chưa gán giá trị.</td><td><code>let diaChi;</code></td></tr>
          <tr><th scope="row"><code>null</code></th><td>Giá trị rỗng do lập trình viên chủ động gán.</td><td><code>let ketQua = null;</code></td></tr>
          <tr><th scope="row"><code>NaN</code></th><td>Kết quả của phép tính số học không hợp lệ. Kiểm tra bằng <code>Number.isNaN()</code>.</td><td><code>Number("abc")</code></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<div class="modal fade" id="modalCode" tabindex="-1" aria-labelledby="modalCodeTitle" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title fs-5" id="modalCodeTitle">Ví dụ</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Đóng"></button>
      </div>
      <div class="modal-body"><pre class="code-block mb-0"><code id="modalCodeBody"></code></pre></div>
      <div class="modal-footer"><button type="button" class="btn btn-xanh" data-bs-dismiss="modal">Đóng</button></div>
    </div>
  </div>
</div>

</main>
<footer class="site-footer">
  <div class="container">
    <p class="mb-2"><strong>JS Căn Bản</strong> - trang ôn tập JavaScript cho sinh viên năm nhất.</p>
    <small>Đây là sản phẩm học tập, không có backend, không đăng nhập, không lưu dữ liệu. Mọi dữ liệu là dữ liệu mẫu và sẽ đặt lại khi tải lại trang. Nguồn tài nguyên xem trong <code>SOURCES.md</code>.</small>
    <small class="mt-2">&copy; <span id="nam-hien-tai">2026</span> Nhóm 10 thực hiện. Điểm số và lộ trình trên trang chỉ mang tính tham khảo.</small>
  </div>
</footer>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.bundle.min.js"></script>
<script src="js/data.js"></script>
<script src="js/main.js"></script>
<script src="js/kien-thuc.js"></script>
</body>
</html>const khungKienThuc = document.querySelector("#ds-kien-thuc");
if (khungKienThuc) {
  const oTim = document.querySelector("#tim-kien-thuc");
  const oNhom = document.querySelector("#loc-nhom");
  const oSapXep = document.querySelector("#sap-xep");
  const demKienThuc = document.querySelector("#dem-kien-thuc");
  const modalCode = document.querySelector("#modalCode");
  document.querySelector('form[role="search"]').addEventListener("submit", (suKien) => suKien.preventDefault());

  function veKienThuc() {
    const tuKhoa = chuanHoaTimKiem(oTim.value);
    const nhom = oNhom.value;
    const sapXep = oSapXep.value;
    let ketQua = CHU_DE_KIEN_THUC.filter((muc) => {
      const noiDung = chuanHoaTimKiem(`${muc.ten} ${muc.moTa} ${muc.nhom} ${muc.yChinh.join(" ")}`);
      return (!tuKhoa || noiDung.includes(tuKhoa)) && (nhom === "tat-ca" || muc.nhom === nhom);
    });

    if (sapXep === "ten") {
      ketQua = [...ketQua].sort((a, b) => a.ten.localeCompare(b.ten, "vi"));
    }

    khungKienThuc.replaceChildren();
    demKienThuc.textContent = `Hiển thị ${ketQua.length}/${CHU_DE_KIEN_THUC.length} chủ đề`;

    if (ketQua.length === 0) {
      khungKienThuc.append(taoThongBaoRong("Không tìm thấy chủ đề phù hợp. Hãy thử từ khóa khác hoặc đặt lại bộ lọc."));
      return;
    }

    ketQua.forEach((muc) => {
      const cot = document.createElement("div");
      cot.className = "col-12 col-md-6 col-xl-4";
      cot.innerHTML = `<article class="card the"><div class="card-body d-flex flex-column">
        <span class="the-nhan align-self-start mb-2">${muc.nhom}</span>
        <h3 class="card-title">${muc.ten}</h3>
        <p>${muc.moTa}</p>
        <ul class="mb-3">${muc.yChinh.map((y) => `<li>${y}</li>`).join("")}</ul>
        <button class="btn btn-xanh mt-auto align-self-start" type="button" data-ma-chu-de="${muc.id}">Xem ví dụ mã</button>
      </div></article>`;
      khungKienThuc.append(cot);
    });
  }

  [oTim, oNhom, oSapXep].forEach((phanTu) => phanTu.addEventListener("input", veKienThuc));
  [oNhom, oSapXep].forEach((phanTu) => phanTu.addEventListener("change", veKienThuc));
  document.querySelector("#dat-lai-loc").addEventListener("click", () => {
    oTim.value = "";
    oNhom.value = "tat-ca";
    oSapXep.value = "thu-tu";
    veKienThuc();
    oTim.focus();
  });

  khungKienThuc.addEventListener("click", (suKien) => {
    const nut = suKien.target.closest("[data-ma-chu-de]");
    if (!nut) return;
    const muc = CHU_DE_KIEN_THUC.find((item) => item.id === nut.dataset.maChuDe);
    if (!muc || !modalCode || !window.bootstrap) return;
    document.querySelector("#modalCodeTitle").textContent = `Ví dụ: ${muc.ten}`;
    document.querySelector("#modalCodeBody").textContent = muc.viDu;
    window.bootstrap.Modal.getOrCreateInstance(modalCode).show();
  });

  veKienThuc();
}
