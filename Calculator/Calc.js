let addEle= document.getElementById("add");
let subEle= document.getElementById("sub");
let mulEle= document.getElementById("mul");
let divEle= document.getElementById("div");
let inputOneEle= document.getElementById("inputOne");
let inputTwoEle= document.getElementById("inputTwo");
let outputEle= document.getElementById("output");
let calculateEle= document.getElementById("calculate");
let operator = "";
addEle.addEventListener("click", function() {
    operator = "+";
    outputEle.textContent = "Operator: +";
});
subEle.addEventListener("click", function() {
    operator = "-";
    outputEle.textContent = "Operator: -";
});
mulEle.addEventListener("click", function() {
    operator = "*";
    outputEle.textContent = "Operator: *";
});
divEle.addEventListener("click", function() {
    operator = "/";
    outputEle.textContent = "Operator: /";
});
calculateEle.addEventListener("click", function() {
    if (inputOneEle.value == "" || inputTwoEle.value == "") {
        outputEle.textContent = "Enter both numbers";
        return;
    }
    if (operator == "") {
        outputEle.textContent = "Select an operator";
        return;
    }
    let a = Number(inputOneEle.value);
    let b = Number(inputTwoEle.value);
    let result;
    if (operator == "+") {
        result = a + b;
    } else if (operator == "-") {
        result = a - b;
    } else if (operator == "*") {
        result = a * b;
    } else if (operator == "/") {
        if (b == 0) {
            outputEle.textContent = "Cannot divide by 0";
            return;
        }
        result = a / b;
    }
    outputEle.textContent = "Result: " + result;
});