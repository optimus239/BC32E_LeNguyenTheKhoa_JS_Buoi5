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
  var diem1 = Number(domID(id1).value);
  var diem2 = Number(domID(id2).value);
  var diem3 = Number(domID(id3).value);
  var diemChuan = Number(domID(id4).value);
  var khuVuc = domID(id5).value;
  var doiTuong = domID(id6).value;
  var diemTB = tinhDiemTB("diemMonThu1", "diemMonThu2", "diemMonThu3");
  var ketQua = "";
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
  document.getElementById("ketQua1").innerHTML = ketQua;
}

//BÀI 2
/**
 * Hàm nhận vào các thẻ input, tính tiền điện và in kết quả ra màn hình
 * @param {*} id1 id1 là thẻ input nhapHoTen
 * @param {*} id2 id2 là thẻ input nhapSoKW
 */
function tinhTienDien(id1, id2) {
  var hoTen = domID(id1).value;
  var soKW = Number(domID(id2).value);
  var tienDien = 0;
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
  document.getElementById("ketQua2").innerHTML =
    "Họ tên: " +
    hoTen +
    "; Tiền điện: " +
    new Intl.NumberFormat("vn-VN").format(tienDien);
}
