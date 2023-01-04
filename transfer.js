function changeMoney() {
    let Amount = document.getElementById("amount").value;
    let From = document.getElementById("tf1").value;
    let To = document.getElementById("tf2").value;
    let Result;


    if (From == "USD" && To == "VND") {
        Result = "Result: " + (Amount * 24000) + " Đ";
    }
    else if (From == "VND"&& To =="USD"){
        Result = "Result: "+ (Amount / 24000) + " $";
    }
    else if (From == "VND") {
        Result = "Result: " + Amount + " Đ"
    } else {
        Result = "Result: " + Amount + " $"
    }
        
    document.getElementById("Result").innerText = Result;
}