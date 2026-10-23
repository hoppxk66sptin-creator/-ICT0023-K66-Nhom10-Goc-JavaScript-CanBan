const formQuiz = document.querySelector("#quiz-form");
if (formQuiz) {
  const thongBaoQuiz = document.querySelector("#quiz-thong-bao");
  formQuiz.addEventListener("submit", (suKien) => suKien.preventDefault());

  function veQuiz() {
    formQuiz.replaceChildren();
    CAU_HOI_TRAC_NGHIEM.forEach((muc, chiSo) => {
      const fieldset = document.createElement("fieldset");
      fieldset.className = "quiz-cau";
      const luaChonHtml = muc.luaChon.map((luaChon, viTri) => {
        const id = `quiz-${chiSo}-${viTri}`;
        return `<div class="form-check">
          <input class="form-check-input" type="radio" name="cau-${chiSo}" id="${id}" value="${viTri}">
          <label class="form-check-label" for="${id}">${luaChon}</label>
        </div>`;
      }).join("");
      fieldset.innerHTML = `<legend>Câu ${chiSo + 1}. ${muc.cau}</legend>${luaChonHtml}<p class="giai-thich d-none"></p>`;
      formQuiz.append(fieldset);
    });
  }

  function chamDiem() {
    const thieu = CAU_HOI_TRAC_NGHIEM
      .map((_, chiSo) => chiSo)
      .filter((chiSo) => !formQuiz.querySelector(`input[name="cau-${chiSo}"]:checked`));
    if (thieu.length) {
      thongBaoQuiz.className = "alert alert-warning mt-3";
      thongBaoQuiz.textContent = `Bạn chưa chọn đáp án cho câu ${thieu.map((so) => so + 1).join(", ")}.`;
      const dauTien = formQuiz.querySelector(`input[name="cau-${thieu[0]}"]`);
      dauTien.focus();
      return;
    }

    let diem = 0;
    CAU_HOI_TRAC_NGHIEM.forEach((muc, chiSo) => {
      const fieldset = formQuiz.querySelectorAll(".quiz-cau")[chiSo];
      const daChon = Number(formQuiz.querySelector(`input[name="cau-${chiSo}"]:checked`).value);
      const giaiThich = fieldset.querySelector(".giai-thich");
      fieldset.classList.remove("dung", "sai");
      fieldset.classList.add(daChon === muc.dapAn ? "dung" : "sai");
      giaiThich.classList.remove("d-none");
      giaiThich.textContent = `${daChon === muc.dapAn ? "Chính xác." : `Đáp án đúng: ${muc.luaChon[muc.dapAn]}.`} ${muc.giaiThich}`;
      if (daChon === muc.dapAn) diem += 1;
    });

    thongBaoQuiz.className = `alert ${diem === CAU_HOI_TRAC_NGHIEM.length ? "alert-success" : "alert-info"} mt-3`;
    thongBaoQuiz.textContent = `Bạn đúng ${diem}/${CAU_HOI_TRAC_NGHIEM.length} câu. Kết quả chỉ để tự ôn tập, không được lưu lại.`;
  }

  document.querySelector("#nut-cham-diem").addEventListener("click", chamDiem);
  document.querySelector("#nut-lam-lai").addEventListener("click", () => {
    veQuiz();
    thongBaoQuiz.className = "";
    thongBaoQuiz.textContent = "";
  });
  document.querySelector("#nut-quiz-thu").addEventListener("click", () => {
    veQuiz();
    CAU_HOI_TRAC_NGHIEM.forEach((muc, chiSo) => {
      formQuiz.querySelector(`input[name="cau-${chiSo}"][value="${muc.dapAn}"]`).checked = true;
    });
    chamDiem();
  });
  veQuiz();
}
// 
const chonBai = document.querySelector("#chon-bai");
if (chonBai) {
  const deBai = document.querySelector("#de-bai");
  const oCode = document.querySelector("#code-input");
  const thongBaoCode = document.querySelector("#luyen-thong-bao");

  BAI_LUYEN_CODE.forEach((bai, chiSo) => {
    const option = document.createElement("option");
    option.value = String(chiSo);
    option.textContent = `Bài ${chiSo + 1}`;
    chonBai.append(option);
  });

  function capNhatDeBai(xoaCode = true) {
    const bai = BAI_LUYEN_CODE[Number(chonBai.value)];
    deBai.textContent = bai.de;
    if (xoaCode) oCode.value = "";
    thongBaoCode.className = "";
    thongBaoCode.textContent = "";
  }

  function chuanHoaCode(ma) {
    return ma.trim().replace(/["']/g, "'").replace(/\s+/g, " ");
  }

  function kiemTraCode() {
    const bai = BAI_LUYEN_CODE[Number(chonBai.value)];
    if (!oCode.value.trim()) {
      thongBaoCode.className = "alert alert-warning mt-3";
      thongBaoCode.textContent = "Bạn chưa nhập mã. Hãy thử gõ câu lệnh hoặc bấm “Dùng thử đáp án mẫu”.";
      oCode.focus();
      return;
    }

    const dung = chuanHoaCode(oCode.value) === chuanHoaCode(bai.dapAn);
    thongBaoCode.className = `alert ${dung ? "alert-success" : "alert-danger"} mt-3`;
    thongBaoCode.textContent = dung ? "Chính xác! Câu lệnh đã khớp với yêu cầu." : `Chưa đúng. Gợi ý: ${bai.goiY}`;
  }

  chonBai.addEventListener("change", () => capNhatDeBai());
  document.querySelector("#nut-kiem-tra").addEventListener("click", kiemTraCode);
  document.querySelector("#nut-xoa-code").addEventListener("click", () => {
    capNhatDeBai();
    oCode.focus();
  });
  document.querySelector("#nut-code-thu").addEventListener("click", () => {
    oCode.value = BAI_LUYEN_CODE[Number(chonBai.value)].dapAn;
    kiemTraCode();
  });
  oCode.addEventListener("keydown", (suKien) => {
    if ((suKien.ctrlKey || suKien.metaKey) && suKien.key === "Enter") kiemTraCode();
  });
  capNhatDeBai(false);
}
//
const khungTuDien = document.querySelector("#ket-qua-search");
if (khungTuDien) {
  const oTimTuDien = document.querySelector("#search-input");
  const oNhomTuDien = document.querySelector("#loc-thuat-ngu-nhom");
  const oSapXepTuDien = document.querySelector("#sap-xep-thuat-ngu");
  const demTuDien = document.querySelector("#dem-thuat-ngu");
  const nhomTuDien = [...new Set(TU_DIEN_JAVASCRIPT.map((muc) => muc.nhom))].sort((a, b) => a.localeCompare(b, "vi"));

  nhomTuDien.forEach((nhom) => {
    const option = document.createElement("option");
    option.value = nhom;
    option.textContent = nhom;
    oNhomTuDien.append(option);
  });

  function veTuDien() {
    const tuKhoa = chuanHoaTimKiem(oTimTuDien.value);
    const nhom = oNhomTuDien.value;
    const huong = oSapXepTuDien.value;
    let ketQua = TU_DIEN_JAVASCRIPT.filter((muc) => {
      const vanBan = chuanHoaTimKiem(`${muc.ten} ${muc.nhom} ${muc.moTa}`);
      return (!tuKhoa || vanBan.includes(tuKhoa)) && (nhom === "tat-ca" || muc.nhom === nhom);
    });
    ketQua.sort((a, b) => a.ten.localeCompare(b.ten, "vi") * (huong === "za" ? -1 : 1));

    khungTuDien.replaceChildren();
    demTuDien.textContent = `Tìm thấy ${ketQua.length}/${TU_DIEN_JAVASCRIPT.length} thuật ngữ`;
    if (ketQua.length === 0) {
      khungTuDien.append(taoThongBaoRong("Không tìm thấy thuật ngữ phù hợp. Thử từ khóa khác hoặc chọn “Tất cả”."));
      return;
    }

    ketQua.forEach((muc) => {
      const cot = document.createElement("div");
      cot.className = "col-12 col-md-6 col-lg-4";
      const the = document.createElement("article");
      the.className = "the-thuat-ngu";
      const nhan = document.createElement("span");
      nhan.className = "the-nhan";
      nhan.textContent = muc.nhom;
      const ten = document.createElement("h3");
      ten.textContent = muc.ten;
      const moTa = document.createElement("p");
      moTa.className = "mb-0";
      moTa.textContent = muc.moTa;
      the.append(nhan, ten, moTa);
      cot.append(the);
      khungTuDien.append(cot);
    });
  }

  document.querySelector("#nut-xoa-tim").addEventListener("click", () => {
    oTimTuDien.value = "";
    veTuDien();
    oTimTuDien.focus();
  });
  oNhomTuDien.addEventListener("change", veTuDien);
  oSapXepTuDien.addEventListener("change", veTuDien);
  if (window.jQuery) {
    window.jQuery(oTimTuDien).on("input", veTuDien);
  } else {
    oTimTuDien.addEventListener("input", veTuDien);
  }
  veTuDien();
}
