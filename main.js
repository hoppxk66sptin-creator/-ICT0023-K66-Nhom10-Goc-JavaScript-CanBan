const namHienTai = document.querySelector("#nam-hien-tai");
if (namHienTai) {
  namHienTai.textContent = String(new Date().getFullYear());
}

function chuanHoaTimKiem(giaTri) {
  return giaTri
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("vi")
    .trim();
}

function taoThongBaoRong(noiDung) {
  const thongBao = document.createElement("p");
  thongBao.className = "tb-rong mb-0";
  thongBao.setAttribute("role", "status");
  thongBao.textContent = noiDung;
  return thongBao;
}
