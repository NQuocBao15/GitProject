function Add() {
    let number1 = document.getElementById("num1").value;    
    let number2 = document.getElementById("num2").value;
    let result = Number(number1) + Number(number2);
    document.getElementById("result").innerText = result;
}

function Sub() {
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let result = Number(number1) - Number(number2);
    document.getElementById("result").innerText = result;
}

function Multi() {
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let result = Number(number1) * Number(number2);
    document.getElementById("result").innerText = result;
}

function Div() {
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let result = Number(number1) / Number(number2);
    document.getElementById("result").innerText = result;
}

