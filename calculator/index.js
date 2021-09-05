let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sum = document.getElementById("sum")
function add() {
    sum.innerHTML = sum.innerHTML + (num1+num2)
}

function subtract() {
    sum.innerHTML = sum.innerHTML + (num1-num2)
}

function mutiply() {
    sum.innerHTML = sum.innerHTML + (num1*num2)
}

function divide() {
    sum.innerHTML = sum.innerHTML + (num1/num2)
}