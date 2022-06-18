/**
 * Hàm nhận vào id, trả về DOM id
 * @param {*} id id là thẻ input cần DOM
 * @returns
 */
function domID(id) {
  return document.getElementById(id);
}
//BÀI 1
/**
 * Hàm nhận vào các thẻ input, trả về kết quả điểm trung bình
 * @param {*} id1 id1 là thẻ input điểm thứ 1
 * @param {*} id2 id2 là thẻ input điểm thứ 2
 * @param {*} id3 id3 là thẻ input điểm thứ 3
 * @returns trả kết quả điểm trung bình
 */
function tinhDiemTB(id1, id2, id3) {
  var diem1 = Number(domID(id1).value);
  var diem2 = Number(domID(id2).value);
  var diem3 = Number(domID(id3).value);
  var diemTB = 0;
  diemTB = diem1 + diem2 + diem3;
  return diemTB;
}
/**
 * Hàm nhận vào các thẻ input, xét kết quả và in ra màn hình
 * @param {*} id1 id1 là thẻ input diemMonThu1
 * @param {*} id2 id2 là thẻ input diemMonThu2
 * @param {*} id3 id3 là thẻ input diemMonThu3
 * @param {*} id4 id4 là thẻ input diemChuan
 * @param {*} id5 id4 là thẻ input khuVuc
 * @param {*} id6 id4 là thẻ input doiTuong
 */
function xetKetQua(id1, id2, id3, id4, id5, id6) {
  //input: diemMonThu1, diemMonthu2, diemMonThu3:number diemChuan:number  khuVuc:string  doiTuong:string
  var diem1 = Number(domID(id1).value);
  var diem2 = Number(domID(id2).value);
  var diem3 = Number(domID(id3).value);
  var diemChuan = Number(domID(id4).value);
  var khuVuc = domID(id5).value;
  var doiTuong = domID(id6).value;
  var diemTB = tinhDiemTB("diemMonThu1", "diemMonThu2", "diemMonThu3");
  //output: ketQua:string => đậu rớt
  var ketQua = "";
  //progress
  if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
    ketQua = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
  } else {
    if (khuVuc === "A") {
      diemTB += 2;
    } else if (khuVuc === "B") {
      diemTB += 1;
    } else if (khuVuc === "C") {
      diemTB += 0.5;
    } else if (khuVuc === "X") {
      diemTB;
    }
    if (doiTuong === "1") {
      diemTB += 2.5;
    } else if (doiTuong === "2") {
      diemTB += 1.5;
    } else if (doiTuong === "3") {
      diemTB += 1;
    } else if (doiTuong === "0") {
      diemTB;
    }
    if (diemTB >= diemChuan) {
      ketQua = "Bạn đã đậu. Tổng điểm: " + diemTB;
    } else if (diemTB < diemChuan) {
      ketQua = "Bạn đã rớt. Tổng điểm: " + diemTB;
    }
  }
  //In kết quả ra giao diện
  document.getElementById("ketQua1").innerHTML = ketQua;
}

//BÀI 2
/**
 * Hàm nhận vào các thẻ input, tính tiền điện và in kết quả ra màn hình
 * @param {*} id1 id1 là thẻ input nhapHoTen
 * @param {*} id2 id2 là thẻ input nhapSoKW
 */
function tinhTienDien(id1, id2) {
  //input: hoTen:string soKW:number
  var hoTen = domID(id1).value;
  var soKW = Number(domID(id2).value);
  //output: tienDien:number
  var tienDien = 0;
  //progress
  if (soKW <= 50) {
    tienDien = soKW * 500;
  } else if (soKW > 50 && soKW <= 100) {
    tienDien = 500 * 50 + (soKW - 50) * 650;
  } else if (soKW > 100 && soKW <= 200) {
    tienDien = 500 * 50 + 650 * 50 + (soKW - 100) * 850;
  } else if (soKW > 200 && soKW <= 350) {
    tienDien = 500 * 50 + 650 * 50 + 850 * 100 + (soKW - 200) * 1100;
  } else if (soKW > 350) {
    tienDien =
      500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + (soKW - 350) * 1300;
  }
  //In kết quả ra giao diện
  document.getElementById("ketQua2").innerHTML =
    "Họ tên: " +
    hoTen +
    "; Tiền điện: " +
    new Intl.NumberFormat("vn-VN").format(tienDien);
}

//BÀI 3
/**
 * Hàm tính thu nhập chịu thuế
 * @param {} id1 id1 là thẻ input tongThuNhapNam
 * @param {*} id2 id2 là thẻ input soNguoiPhuThuoc
 * @returns trả kết quả thu nhập chịu thuế
 */
function tinhThuNhapChiuThue(id1, id2) {
  var tongThuNhapNam = Number(domID(id1).value);
  var soNguoiPhuThuoc = Number(domID(id2).value);
  var thuNhapChiuThue = tongThuNhapNam - 4e6 - soNguoiPhuThuoc * 1600000;
  return thuNhapChiuThue;
}

/**
 * Hàm tính tiền thuế cá nhân
 * @param {*} id1 id1 là thẻ input nhapHoTen
 */
function tinhTienThue(id1) {
  //input: hoTen: string - tongThuNhapNam: number  - soNguoiPhuThuoc:number - thuNhapChiuThue : number
  var hoTen = domID(id1).value;
  var thuNhapChiuThue = tinhThuNhapChiuThue(
    "tongThuNhapNam",
    "soNguoiPhuThuoc"
  );
  //output: hoTen:string tienThue:number
  var tienThue = 0;
  //progress
  if (thuNhapChiuThue <= 60e6) {
    tienThue = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue > 60e6 && thuNhapChiuThue <= 120e6) {
    tienThue = thuNhapChiuThue * 0.1;
  } else if (thuNhapChiuThue > 120e6 && thuNhapChiuThue <= 210e6) {
    tienThue = thuNhapChiuThue * 0.15;
  } else if (thuNhapChiuThue > 210e6 && thuNhapChiuThue <= 384e6) {
    tienThue = thuNhapChiuThue * 0.2;
  } else if (thuNhapChiuThue > 384e6 && thuNhapChiuThue <= 624e6) {
    tienThue = thuNhapChiuThue * 0.25;
  } else if (thuNhapChiuThue > 624e6 && thuNhapChiuThue <= 960e6) {
    tienThue = thuNhapChiuThue * 0.3;
  } else if (thuNhapChiuThue > 960e6) {
    tienThue = thuNhapChiuThue * 0.35;
  }
  if (tienThue > 0) {
    //in kết quả ra giao diện
    document.getElementById("ketQua3").innerHTML =
      "Họ tên: " +
      hoTen +
      "; Tiền thuế thu nhập cá nhân: " +
      Intl.NumberFormat("vn-VN").format(tienThue) +
      " VND";
  } else if (tienThue <= 0) {
    alert("Số tiền thu nhập không hợp lệ");
  }
}

//BÀI 4
/**
 * Hàm ẩn hiện mục số kết nối
 * @param {*} doanhNghiep
 */
function ketNoiDoanhNghiep(doanhNghiep) {
  var kiemTra = domID("loaiKhachHang").value;
  if (kiemTra === "doanhNghiep") {
    document.getElementById("soKetNoi").style.display = "block";
  } else {
    document.getElementById("soKetNoi").style.display = "none";
  }
}

//BÀI 5
/**
 * Hàm tính tiền cáp
 * @param {*} id1 id1 là thẻ input loaiKhachHang
 * @param {*} id2 id2 là thẻ input maKhachHang
 * @param {*} id3 id3 là thẻ input soKenhCaoCap
 * @param {*} id4 id4 là thẻ input soKetNoi
 */
function tinhTienCap(id1, id2, id3, id4) {
  //input: loaiKhachHang :option  maKhachHang:string soKenhCaoCap:number soKetNoi:number
  var loaiKhachHang = domID(id1).value;
  var maKhachHang = domID(id2).value;
  var soKenhCaoCap = Number(domID(id3).value);
  var soKetNoi = Number(domID(id4).value);
  //output: maKhachHang:string tienCap:?
  var ketQua = 0;
  //progress
  var phiXuLyHD = 0;
  var phiDichVuCB = 0;
  var thueKenhCaoCap = 0;
  if (loaiKhachHang === "nhaDan") {
    var phiXuLyHD = 4.5;
    var phiDichVuCB = 20.5;
    var thueKenhCaoCap = 7.5;
    ketQua = phiXuLyHD + phiDichVuCB + thueKenhCaoCap * soKenhCaoCap;
  } else if (loaiKhachHang === "doanhNghiep") {
    var phiXuLyHD = 15;
    var phiDichVuCB = 75;
    var thueKenhCaoCap = 50;
    if (soKetNoi <= 10) {
      ketQua = phiXuLyHD + phiDichVuCB + thueKenhCaoCap * soKenhCaoCap;
    } else if (soKetNoi > 10) {
      ketQua =
        phiXuLyHD +
        phiDichVuCB +
        (soKetNoi - 10) * 5 +
        thueKenhCaoCap * soKenhCaoCap;
    }
  }
  document.getElementById("ketQua4").innerHTML =
    "Mã khách hàng: " +
    maKhachHang +
    "; Tiền cáp: $" +
    Intl.NumberFormat("en-US").format(ketQua.toFixed(2));
}
