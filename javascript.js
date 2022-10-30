//variables:

//query selectors:
const key = document.querySelectorAll('.btn');
const numKey = document.querySelectorAll('.num');
const opKey = document.querySelectorAll('.op');
const clearKey = document.querySelector('.clear');
const delKey = document.querySelector('.delete');
const equalsKey = document.querySelector('.equals');
const pointKey = document.querySelector('.point');


//operator functions:

function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide(x, y) {
    return x / y;
};

function operate(x, y, operator) {
    switch (operator) {
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "*":
            return multiply(x, y);
        case "/":
            return divide(x, y);
    }
};