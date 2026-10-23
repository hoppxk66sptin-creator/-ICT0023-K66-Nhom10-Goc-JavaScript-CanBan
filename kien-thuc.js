const khungKienThuc = document.querySelector("#ds-kien-thuc");
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
