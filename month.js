let thang_1 = 1;
let thang_2 = 2;
let thang_3 = 3;
let thang_4 = 4;
let thang_5 = 5;
let thang_6 = 6;
let thang_7 = 7;
let thang_8 = 8;
let thang_9 = 9;
let thang_10 = 10;
let thang_11 = 11;
let thang_12 = 12;

function findDay() {
    let month = +document.getElementById("month").value;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:{
            document.getElementById("result").innerText = `Tháng ${month} có 31 ngày`
            break;
        }
        case 4:
        case 6:
        case 9:
        case 11:{
            document.getElementById("result").innerText = `Tháng ${month} có 30 ngày`
            break;
        }
        case 2:{
            document.getElementById("result").innerText = `Tháng ${month} có 28 ngày (nếu là năm nhuận: 29 ngày)`
            break;
        }
        default:{
            document.getElementById("result").innerText = "Vui lòng nhập lại tháng"
        }
    }
}