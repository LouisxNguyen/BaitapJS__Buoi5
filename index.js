// GLOBAL
function domID(id){
    return document.getElementById(id);
}
// Bài tập 1: Quản lý tuyển sinh
/**
 * INPUT:
 * + Điểm chuẩn hội đồng
 * + Điểm môn1, môn2, môn3
 * + Khu vực
 * + Đối tượng ưu tiên
 * 
 * PROGRESS:
 * + Lấy value điểm chuẩn hội đồng
 * + Lấy value điểm môn1, môn2, môn3
 * + Lấy value Khu vực và Đối tượng
 * + Dùng câu điều kiện để xác
 *   định chính xác value của khu vực và đối tượng
 * + Tính tổng điểm 3 môn + điểm khu vực + đổi tượng
 * + Dùng câu điệu kiện so sánh điểm chuẩn
 * + Thông báo kết quả
 * OUTPUT:
 * + Tổng điểm môn1, môn2, môn3
 * + Thông báo báo thí sinh đậu hay rớt
 */

/**
 * Khu vực:
 * + A = 2
 * + B = 1
 * + C = 0.5
 *  Đối tượng:
 * + A = 2.5
 * + B = 1.5
 * + C = 1
 */
let khuVuc1 = 2;
let khuVuc2 = 1;
let khuVuc3 = 0.5;

let doiTuong1 = 2.5;
let doiTuong2 = 1.5;
let doiTuong3 = 1;

document.getElementById("btnResult1").onclick= function(){
    let diemChuan = Number(domID("diemChuan").value);
    console.log(diemChuan)
    let tongDiem3mon = Diem3mon(domID("diem1").value,domID("diem2").value,domID("diem3").value);
    console.log(tongDiem3mon)
    
    let khuVuc = Number(domID("khuVuc").value);
    console.log('Khu vực' + khuVuc)
    let doiTuong = Number(domID("doiTuong").value);
    let diemKhuVuc =0;
    let diemDoituong =0;
    switch(khuVuc){
        case 1: diemKhuVuc = 0;
        break;

        case 2: diemKhuVuc = 2;
        break;
        
        case 3: diemKhuVuc = 1;
        break;

        case 4: diemKhuVuc = 0.5;
        break; 
    }
    switch(doiTuong){
        case 1: diemDoituong = 0;
        break;

        case 2: diemDoituong = 2.5;
        break;
        
        case 3: diemDoituong = 1.5;
        break;

        case 4: diemDoituong = 1;
        break; 
    }
    let tongDiem = Number(tongDiem3mon + diemKhuVuc + diemDoituong);
    if(diemChuan == 0){
        domID("textResult1").classList =  "alert alert-warning";
        domID("textResult1").innerHTML = 'Bạn chưa nhập điểm chuẩn';
    }
    else if(tongDiem>=diemChuan){
        domID("textResult1").innerHTML = "Tổng điểm: "+tongDiem;
        domID("textResult1__2").classList = "alert alert-success";
        domID("textResult1__2").innerHTML ="Kết quả: Đậu";
    }
    else{
        domID("textResult1").innerHTML = "Tổng điểm: "+tongDiem;
        domID("textResult1__2").classList = "alert alert-warning";
        domID("textResult1__2").innerHTML = "Kết quả: Không đậu";
    }
}

function Diem3mon(mon1,mon2,mon3){
    return Number(mon1) + Number(mon2) + Number(mon3);
}



// Bài tập 2: Tính tiền điện
let tien50KwDau = 500;
let tien50KwKe = 650;
let tien100KwKe = 850;
let tien150KwKe = 1100;
let conLai = 1300;

document.getElementById("btnResult2").onclick= function(){
let soDienKh = domID("soDien");
let tongTien = 0;
if(soDienKh > 0 && soDienKh<=50){
    tongTien = soDienKh * 500;
}
else if(soDienKh>50  && soDienKh<=100){
    tongTien = 50*500 + (soDienKh-50)*650;
}
else if(soDienKh>100  && soDienKh<=200){
    tongTien = 50*500 + 50*650 + (soDienKh-100)*850;
}
else if(soDienKh>200  && soDienKh<=350){
    tongTien = 50*500 + 50*650 + 100*850 + (soDienKh-200)*1100;
}
else{
    tongTien = 50*500 + 50*650 + 100*850 + 150*1100 + (soDienKh-350)*1300;
}
domID("textResult2").classList = "alert alert-success"
domID("textResult2").innerHTML = "Số tiền cần thanh toán: " + tongTien.toLocaleString() + ' đ'
}


// Bài tập 3: Tính thuế cá nhân
document.getElementById("btnResult3").onclick = function(){
    let thuNhapCaNhan = Number(domID("thuNhap").value);
    let nguoiPhuThuoc = Number(domID("nguoiPhuThuoc").value);
    let thuNhapChiuThue = tinhThunhapChiuThue(thuNhapCaNhan,nguoiPhuThuoc);
    let thueCaNhan = 0;
    if(thuNhapChiuThue > 0 && thuNhapChiuThue<=60000000){
        thueCaNhan= thuNhapChiuThue*0.05;
    }
    else if(thuNhapChiuThue > 60000000 && thuNhapChiuThue<=120000000){
        thueCaNhan = (thuNhapChiuThue-60000000)*0.1;
    }
    else if(thuNhapChiuThue > 120000000 && thuNhapChiuThue<=210000000){
        thueCaNhan = (thuNhapChiuThue-120000000)*0.15;
    }
    else if(thuNhapChiuThue > 210000000 && thuNhapChiuThue<=384000000){
        thueCaNhan = (thuNhapChiuThue-210000000)*0.2;
    }
    else if(thuNhapChiuThue > 384000000 && thuNhapChiuThue<=624000000){
        thueCaNhan = (thuNhapChiuThue-384000000)*0.25;
    }
    else if(thuNhapChiuThue > 624000000 && thuNhapChiuThue<=960000000){
        thueCaNhan = (thuNhapChiuThue-624000000)*0.3;
    }
    else{
        thueCaNhan = (thuNhapChiuThue-960000000)*0.35;
    }
    let thuePhaiDong = thueCaNhan+tinhThueTheoKhung(thuNhapChiuThue);
    domID("textResult3").classList = "alert alert-success"
    domID("textResult3_2").classList = "alert alert-success"
    domID("textResult3_2").innerHTML = "Thu nhập chịu thuế: " + thuNhapChiuThue.toLocaleString() + ' đ'
    domID("textResult3").innerHTML = "Tiền thuế cần đóng: " + thuePhaiDong.toLocaleString() + ' đ'
}
function tinhThunhapChiuThue(thuNhapCaNhan,nguoiPhuThuoc){
    return thuNhapCaNhan - 4000000 - nguoiPhuThuoc*1600000;
}
function tinhThueTheoKhung(thuNhapChiuThue){
    if(thuNhapChiuThue > 0 && thuNhapChiuThue<=60000000){
        return thuNhapChiuThue*0;
    }
    else if(thuNhapChiuThue > 60000000 && thuNhapChiuThue<=120000000){
        return 60000000*0.05;
    }
    else if(thuNhapChiuThue > 120000000 && thuNhapChiuThue<=210000000){
        return 60000000*0.1 + 60000000*0.05;
    }
    else if(thuNhapChiuThue > 210000000 && thuNhapChiuThue<=384000000){
        return 90000000*0.15 + 60000000*0.1 + 60000000*0.05;
    }
    else if(thuNhapChiuThue > 384000000 && thuNhapChiuThue<=624000000){
        return 174000000*0.2 + 90000000*0.15 + 60000000*0.1 + 60000000*0.05;
    }
    else if(thuNhapChiuThue > 624000000 && thuNhapChiuThue<=960000000){
        return 240000000*0.25 + 174000000*0.2 + 90000000*0.15 + 60000000*0.1 + 60000000*0.05;
    }
    else{
        return 336000000*0.3 + 240000000*0.25 + 174000000*0.2 + 90000000*0.15 + 60000000*0.1 + 60000000*0.05;
    }
}

// Bài tập 4: Tính tiền cáp
document.getElementById("btnResult4").onclick=function(){
    let soKenhCaoCap = Number(domID("soKenhCaoCap").value);
    let soKetNoi = Number(domID("soKetNoi").value);
    let doiTuongKH = Number(domID("doiTuongKH").value);
    let phiCap = 0;
    switch(doiTuongKH){
        case 2: phiCap= xulyPhiNhaDan(soKenhCaoCap)
        break;
        case 3: phiCap= xulyPhiDoanhNghiep(soKetNoi,soKenhCaoCap)
        break
    }
    domID("textResult4").innerHTML = "Phí cáp: " + phiCap.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });
}
// Xử lý phí nhà dân
function xulyPhiNhaDan(soKenhCaoCap1){
    return 4.5 + 20.5 + 7.5*soKenhCaoCap1
}
// Xử lý phí doanh nghiệp
function xulyPhiDoanhNghiep(soKetNoi,soKenhCaoCap2){
    if (soKetNoi <= 10){
        return 15+ 75 + 50*soKenhCaoCap2
    }
    else{
        return 15+ 75 + (soKetNoi-10)*5 + 50*soKenhCaoCap2
    }
}
// Xử lý ô nhập số kết nối cho doanh nghiệp
document.getElementById("doiTuongKH").onclick=function (){
    let doiTuongKH = Number(domID("doiTuongKH").value);
    // Xử lý hiện ô nhập kết nối khi chọn doanh nghiệp
    if(doiTuongKH == 3){
        domID("clSoKetNoi").classList = "col-4 soKetNoi__on";
    }
    else{
        domID("clSoKetNoi").classList= "col-4 clSoKetNoi";
    }
}
