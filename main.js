//--------------Bài 1---------------
//+Đầu vào:diemChuan:number, chonKhuVuc, chonDoiTuong, diemMonThu1:number, diemMonThu2:number, diemMonThu3:number
//+Xử lý:-DOM id btnKetQuaTS.onclick gán với hàm xử lý các sự kiên tiếp theo
// -Tạo hàm xử lý DOM id
// -Tạo hàm xử lý xetKetQua
// -Tạo biến gán với hàm DOM id
// -DOM id đến value 6 form
// -Tạo biến diemTB = diemMonThu1+diemMonThu2+diemMonThu3
// -if(khuVuc.value = A) => tongDiem+2.5
// -else if(khuVuc.value = B) => tongDiem+1
// -else if(khuVuc.value = C) => tongDiem+0.5
// -if(doiTuong.value = 1) => tongDiem+2.5
// -else if(doiTuong.value = 2) => tongDiem+1.5
// -else if(doiTuong.value = 3) => tongDiem+1
// -if (tongDiem >= diemChuan) => đậu
// -else if(tongDiem < diemChuan) => rớt
// -In kết quả ra giao diện
//+Đầu ra: Đậu/rớt - tổng điểm

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
//Đầu vào: hoTen: string - soKW:number
//Xử lý: -DOM id btnTinhTienDien.onclick gán với hàm xử lý các sự kiên tiếp theo
// -DOM lấy ai hoTen , soKW
// -Tạo biến tienDien = 0
// -if(soKW <=50)=>tienDien = soKW * 500;
// -else if(soKW > 50 && soKW <= 100) => tienDien = 500 * 50 + (soKW - 50) * 650;
// -else if(soKW > 100 && soKW <= 200) => tienDien = 500 * 50 + 650 * 50 + (soKW - 100) * 850;
// -else if(soKW > 200 && soKW <= 350) => tienDien = 500 * 50 + 650 * 50 + 850 * 100 + (soKW - 200) * 1100;
// -else if(soKW > 350) => tienDien = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + (soKW - 350) * 1300;
// -In kết quả ra giao diện
//Đầu ra:Họ tên - Tiền điện?
document.getElementById("btnTinhTienDien").onclick = function (event) {
  event.preventDefault();
  tinhTienDien("nhapHoTen", "nhapSoKW");
};
