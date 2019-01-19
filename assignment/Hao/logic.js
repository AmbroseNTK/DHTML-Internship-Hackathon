function output() {

    let inputHovaten = document.getElementById("inputHT");
    let inputTuoi = document.getElementById("inputT");
    let inputngaysinh = document.getElementById("inputNS");

    let hovaten = inputHovaten.value;
    let tuoi = inputTuoi.value;
    let ngaysinh = inputngaysinh.value;

    document.getElementById("outputHT").innerHTML = "HỌ VÀ TÊN: " + hovaten;
    document.getElementById("outputT").innerHTML = "SỐ TUỔI: " + tuoi;
    document.getElementById("outputNS").innerHTML = "NGÀY SINH: " + ngaysinh;

}
function output2() {
    let inputtenvatpham = document.getElementById("inputVT");
    let inputgiatien = document.getElementById("inputT");
    let inputsodienthoai = document.getElementById("inputDT");

    let tenvatpham = inputtenvatpham.value;
    let giatien = inputgiatien.value;
    let sodienthoai = inputsodienthoai.value;

    document.getElementById("outputVP").innerHTML = "TÊN VẬT PHẨM: " + tenvatpham;
    document.getElementById("outputT").innerHTML = "ĐẤU GIÁ: " + giatien;
    document.getElementById("outputDT").innerHTML = "SỐ ĐIỆN THOẠI: " + sodienthoai;
    document.getElementById("outputtc").innerHTML = "XÁC NHẬN THÀNH CÔNG";
}