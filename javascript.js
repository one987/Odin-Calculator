//variables:
let displayValue = '';
let firstInt = null;
let secondInt = null;
let operator = '';

function concat(firstInt, secondInt) {
    int = '' + firstInt + secondInt;
    return int;
}

//query selectors:
const key = document.querySelectorAll('.btn');
const numKey = document.querySelectorAll('.num');
const opKey = document.querySelectorAll('.op');
const clearKey = document.querySelector('.clear');
const delKey = document.querySelector('.delete');
const equalsKey = document.querySelector('.equals');
const pointKey = document.querySelector('.point');
const display = document.getElementById('display');

//event listeners:
key.forEach((button) =>
    button.addEventListener('click', (e) => {
        console.log(e);
    })
);
numKey.forEach((button) =>
    button.addEventListener('click', ({ target }) => {

        if (displayValue == '') {
            console.log(target.innerText); //log target
            displayValue = target.innerText; //update display value
            display.innerHTML = displayValue;//update display html
            firstInt = displayValue;
            
        } else if (displayValue !== '') {
            displayValue += target.innerText;
            display.innerHTML = displayValue;
        }


    })
);
opKey.forEach((button) =>
    button.addEventListener('click', ({ target }) => {
        console.log(target.innerText);
    })
);
clearKey.addEventListener('click', () => {
    console.log('clear');
    display.innerHTML = '';
    displayValue = ''
    console.log(`displayValue = ${displayValue}`);

});
delKey.addEventListener('click', () => {
    console.log('delete');
});
equalsKey.addEventListener('click', () => {
    console.log('=');
});
pointKey.addEventListener('click', () => {
    console.log('.');
});

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

