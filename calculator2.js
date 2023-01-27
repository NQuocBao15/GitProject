let view = document.getElementById("view");
function inputValue(value) {
    view.value += value;
    parseFloat(inputValue);
}
function result() {
    let result = eval(view.value);
    view.value = result;
}
function xoa() {
    view.value="";
}