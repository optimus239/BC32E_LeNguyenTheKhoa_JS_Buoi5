//-------------Bài 3-----------------
document.getElementById("btnTinhTienThue").onclick = function (event) {
  event.preventDefault();
  tinhTienThue("nhapHoTen");
};

//-------------Bài 4-----------------
document.getElementById("btnTinhTienCap").onclick = function (event) {
  event.preventDefault();
  tinhTienCap("loaiKhachHang", "maKhachHang", "soKenhCaoCap", "soKetNoi");
};
