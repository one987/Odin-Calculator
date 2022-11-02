//variables:
let firstInt = '';
let secondInt = '';
let operator = '';
let result = '';
let isOpPressed = false;
let isEqualPressed = false;
let bruh = false;

//query selectors:
const key = document.querySelectorAll('.btn');
const numKey = document.querySelectorAll('.num');
const opKey = document.querySelectorAll('.op');
const clearKey = document.querySelector('.clear');
const delKey = document.querySelector('.delete');
const equalsKey = document.querySelector('.equals');
const pointKey = document.querySelector('.point');
const display = document.getElementById('display');
const smallDis = document.getElementById('small');

//event listeners:

//all keys
key.forEach((button) =>
    button.addEventListener('click', ({ target }) => {
        console.log({ target });
    })
);

//number keys
numKey.forEach((button) =>
    button.addEventListener('click', ({ target }) => {

        if (isEqualPressed) {
            clear();
            updateDisplay(target);
        } else if (isOpPressed) {
            clearDis();
            isOpPressed = false;
            updateDisplay(target);
        } else if (display.innerText == '' || display.innerText !== '') {
            updateDisplay(target);
        } 
    })
);

//operator keys
opKey.forEach((button) =>
    button.addEventListener('click', ({ target }) => {
        isEqualPressed = false;
        if (display.innerText == '') {
            return
        } else if (firstInt && operator && bruh == false) {
            firstInt = operate(firstInt, display.innerText, operator);
            display.innerText = firstInt;
            smallDis.innerText += operator;
            operator = target.innerText;
            isOpPressed = true;
            divideByZero();
        } else if (bruh) {
            operator = target.innerText;
            firstInt = display.innerText;
            console.log(firstInt, operator);
            smallDis.innerText += operator;
            display.innerText = ''
            bruh = false;
        } else {
            operator = target.innerText;
            firstInt = display.innerText;
            console.log(firstInt, operator);
            smallDis.innerText += operator;
            display.innerText = ''
        }
    })

);

// equals key
equalsKey.addEventListener('click', () => {
    if (display.innerText == '' || firstInt == '') {
        return
    } else {
        equals();
    }
});

clearKey.addEventListener('click', () => {
    clear();
});

delKey.addEventListener('click', () => {
    if (isEqualPressed) {
        clear();
    } else {
        console.log('delete');
        let str = display.innerText;
        let str2 = smallDis.innerText;
        display.innerText = str.slice(0, -1);
        smallDis.innerText = str2.slice(0, -1);
    }
});

pointKey.addEventListener('click', ({ target }) => {
    if (display.innerText.includes('.') !== true) {
        console.log('.');
        updateDisplay(target);
    }
});

//functions:
function equals() {
    secondInt = display.innerText;
    result = operate(firstInt, secondInt, operator);
    display.innerText = result;
    smallDis.innerText = `${firstInt} ${operator} ${secondInt} = ${result}`;
    console.log(`${firstInt} ${operator} ${secondInt} = ${result}`)
    isEqualPressed = true;
    isOpPressed = false;
    bruh = true;
    divideByZero();

};

function clear() {
    display.innerText = '';
    smallDis.innerText = '';
    firstInt = '';
    secondInt = '';
    operator = '';
    isOpPressed = false;
    isEqualPressed = false;
    bruh = false;
    console.log('clear');

};

function divideByZero() {
    if (display.innerText == 'Infinity' || display.innerText == 'NaN') {
        alert('Beyond the Infinite!');
        clear();
    }
};

function updateDisplay(target) {
    display.innerText += target.innerText;
    smallDis.innerText += target.innerText;
}

function clearDis() {
    display.innerText = '';
    console.log('clear dis');
};

//operator functions:
function add(x, y) {
    return Number(x) + Number(y);
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


//to do:

//add keyboard support

//style with css

//clean up CSS and HTML

//?profit?