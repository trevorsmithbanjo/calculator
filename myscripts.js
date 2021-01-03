const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1 / num2;
}

const operate = (num1, op, num2) => {
    if(op === '+') {
        return add(num1, num2);
    }
    else if(op === '-') {
        return subtract(num1, num2);
    }
    else if(op === '*') {
        return multiply(num1, num2);
    }
    else {
        return divide(num1, num2);
    }
}

let btnNum1 = '';
let btnNum2 = '';
let operator = '';
let temp = '';
let prevBtn;

const numBtns = Array.from(document.querySelectorAll('#number'));
const opBtns = Array.from(document.querySelectorAll('#operator'));
const displayValue = document.querySelector('#entry');
const equalBtn = document.querySelector('#equals');
const clearBtn = document.querySelector('#clear');
const backBtn = document.querySelector('#back');

numBtns.forEach(div => div.addEventListener('click', changeDisplayTo));
opBtns.forEach(div => div.addEventListener('click', changeDisplayTo));
equalBtn.addEventListener('click', equalResult);
clearBtn.addEventListener('click', clearScreen);
backBtn.addEventListener('click', backSpace);


function changeDisplayTo(e) {
    let button = (e.target.innerText);

    if (operator == '' && button >= 0 && button <= 9 || button == '.') {
        displayValue.textContent += button;
    }
    if (
}

function equalResult() {

}

function clearScreen() {

}

function backSpace() {

}

// Here is a general layout to go off of. Try and figre the logic
// out on your own.  Populate the displayVlue with textContent method









