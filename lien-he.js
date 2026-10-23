const formPhanHoi = document.querySelector("#form-phan-hoi");
if (formPhanHoi) {
  const oTen = document.querySelector("#hoTen");
  const oEmail = document.querySelector("#email");
  const oNhom = document.querySelector("#nhom");
  const oGioHoc = document.querySelector("#gioHoc");
  const oDaHoc = document.querySelector("#daHoc");
  const oNoiDung = document.querySelector("#noiDung");
  const thongBaoForm = document.querySelector("#form-thong-bao");
  const ketQuaLoTrinh = document.querySelector("#ket-qua-lo-trinh");
  const cacTruong = [
    { input: oTen, loi: "loi-hoTen", kiemTra: () => oTen.value.trim().length >= 2 || "Nhập biệt danh có ít nhất 2 ký tự." },
    { input: oEmail, loi: "loi-email", kiemTra: () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(oEmail.value.trim()) || "Nhập email mẫu đúng định dạng, ví dụ ten@example.com." },
    { input: oNhom, loi: "loi-nhom", kiemTra: () => Boolean(oNhom.value) || "Hãy chọn nhóm người dùng." },
    { input: oGioHoc, loi: "loi-gioHoc", kiemTra: () => Number.isInteger(Number(oGioHoc.value)) && Number(oGioHoc.value) >= 1 && Number(oGioHoc.value) <= 40 || "Nhập số giờ nguyên từ 1 đến 40." },
    { input: oDaHoc, loi: "loi-daHoc", kiemTra: () => oDaHoc.value !== "" && Number.isInteger(Number(oDaHoc.value)) && Number(oDaHoc.value) >= 0 && Number(oDaHoc.value) <= 7 || "Nhập số chủ đề nguyên từ 0 đến 7." },
    { input: oNoiDung, loi: "loi-noiDung", kiemTra: () => oNoiDung.value.trim().length >= 10 && oNoiDung.value.length <= 500 || "Góp ý cần từ 10 đến 500 ký tự." }
  ];

  function tinhLoTrinh() {
    const gio = Number(oGioHoc.value);
    const daHoc = Number(oDaHoc.value);
    if (oGioHoc.value === "" || oDaHoc.value === "" || !Number.isFinite(gio) || !Number.isFinite(daHoc) || gio < 1 || gio > 40 || daHoc < 0 || daHoc > 7) {
      ketQuaLoTrinh.textContent = "Nhập số giờ (1–40) và số chủ đề đã học (0–7) để xem ước tính.";
      return;
    }
    const gioConLai = (7 - daHoc) * 2;
    const soTuan = Math.ceil(gioConLai / gio);
    ketQuaLoTrinh.textContent = gioConLai === 0
      ? "Bạn đã nhập đủ 7 chủ đề. Hãy dành thời gian ôn tập lại."
      : `Còn khoảng ${gioConLai} giờ học, tương đương ${soTuan} tuần nếu học ${gio} giờ mỗi tuần. Ước tính tham khảo (2 giờ/chủ đề).`;
  }

  function capNhatDemKyTu() {
    document.querySelector("#dem-ky-tu").textContent = `${oNoiDung.value.length}/500 ký tự`;
  }

  function xoaLoi() {
    cacTruong.forEach(({ input, loi }) => {
      input.classList.remove("is-invalid");
      input.removeAttribute("aria-invalid");
      document.querySelector(`#${loi}`).textContent = "";
    });
    const loiDanhGia = document.querySelector("#loi-danhGia");
    loiDanhGia.textContent = "";
    loiDanhGia.classList.remove("d-block");
  }

  cacTruong.forEach(({ input }) => {
    input.addEventListener("input", () => {
      tinhLoTrinh();
      capNhatDemKyTu();
      if (input.classList.contains("is-invalid")) {
        input.classList.remove("is-invalid");
        input.removeAttribute("aria-invalid");
        document.querySelector(`#${input.getAttribute("aria-describedby").split(" ").pop()}`).textContent = "";
      }
    });
  });
  document.querySelectorAll('input[name="danhGia"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      document.querySelector("#loi-danhGia").textContent = "";
      document.querySelector("#loi-danhGia").classList.remove("d-block");
    });
  });

  formPhanHoi.addEventListener("submit", (suKien) => {
    suKien.preventDefault();
    xoaLoi();
    thongBaoForm.className = "";
    thongBaoForm.textContent = "";
    let truongDauTienLoi = null;
    let coLoi = false;

    cacTruong.forEach(({ input, loi, kiemTra }) => {
      const ketQua = kiemTra();
      if (ketQua !== true) {
        coLoi = true;
        input.classList.add("is-invalid");
        input.setAttribute("aria-invalid", "true");
        document.querySelector(`#${loi}`).textContent = ketQua;
        truongDauTienLoi ||= input;
      }
    });

    if (!formPhanHoi.querySelector('input[name="danhGia"]:checked')) {
      coLoi = true;
      const loiDanhGia = document.querySelector("#loi-danhGia");
      loiDanhGia.textContent = "Hãy chọn mức hài lòng từ 1 đến 5.";
      loiDanhGia.classList.add("d-block");
      if (!truongDauTienLoi) truongDauTienLoi = formPhanHoi.querySelector('input[name="danhGia"]');
    }

    if (coLoi) {
      thongBaoForm.className = "alert alert-danger mt-3";
      thongBaoForm.textContent = "Biểu mẫu còn mục cần sửa. Hãy xem thông báo bên cạnh từng trường.";
      truongDauTienLoi.focus();
      return;
    }

    thongBaoForm.className = "alert alert-success mt-3";
    thongBaoForm.textContent = "Cảm ơn bạn! Phản hồi mẫu đã được kiểm tra trên trình duyệt nhưng không gửi hoặc lưu ở đâu.";
  });

  document.querySelector("#nut-form-thu").addEventListener("click", () => {
    oTen.value = "Bạn học JS";
    oEmail.value = "banhoc@example.com";
    oNhom.value = "sinh-vien";
    oGioHoc.value = "4";
    oDaHoc.value = "2";
    formPhanHoi.querySelector("#dg5").checked = true;
    oNoiDung.value = "Ví dụ phản hồi mẫu để thử chức năng kiểm tra biểu mẫu.";
    xoaLoi();
    thongBaoForm.className = "";
    thongBaoForm.textContent = "";
    capNhatDemKyTu();
    tinhLoTrinh();
  });

  formPhanHoi.addEventListener("reset", () => {
    window.setTimeout(() => {
      xoaLoi();
      thongBaoForm.className = "";
      thongBaoForm.textContent = "";
      capNhatDemKyTu();
      tinhLoTrinh();
    }, 0);
  });

  capNhatDemKyTu();
  tinhLoTrinh();
}
