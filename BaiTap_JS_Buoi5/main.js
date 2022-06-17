//--------------Bài 1---------------
document.getElementById("btnKetQuaTS").onclick = function (event) {
  event.preventDefault();
  xetKetQua(
    "diemMonThu1",
    "diemMonThu2",
    "diemMonThu3",
    "diemChuan",
    "khuVuc",
    "doiTuong"
  );
};

//--------------Bài 2---------------
document.getElementById("btnTinhTienDien").onclick = function (event) {
  event.preventDefault();
  tinhTienDien("nhapHoTen", "nhapSoKW");
};
