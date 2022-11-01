//variables:
let displayValue = '';
let firstInt = '';
let secondInt = '';
let operator = '';
let result = '';

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

        if (display.innerHTML == '') {
            //displayValue = target.innerText; //update display value
            display.innerHTML = target.innerText;//update display html
            smallDis.innerText += target.innerText;//update small display
        } else if (display.innerHTML !== '') {
            display.innerHTML += target.innerText;//concatenate string
            //display.innerHTML = displayValue;//update display
            smallDis.innerText += target.innerText;//update small display
        }
    })
);

//operator keys
opKey.forEach((button) =>
    button.addEventListener('click', ({ target }) => {

        operator = target.innerText;
        firstInt = display.innerHTML;
        smallDis.innerText += operator;
        console.log(firstInt);
        display.innerHTML = ''
    }

    )
);

// equals key
equalsKey.addEventListener('click', () => {
    if (firstInt == '') {
        clear();
    } else {
        secondInt = display.innerHTML;
        result = operate(firstInt, secondInt, operator);
        display.innerHTML = result;
        smallDis.innerText = `${firstInt} ${operator} ${secondInt} = ${result}`;
        console.log(`${firstInt} ${operator} ${secondInt} = ${result}`)
        checkInfinity();
    }
});

clearKey.addEventListener('click', () => {
    clear();
});

delKey.addEventListener('click', () => {
    console.log('delete');
    displayValue = display.innerHTML;
    display.innerHTML = displayValue.slice(0, -1);
    smallDis.innerText = displayValue.slice(0, -1);
});

pointKey.addEventListener('click', ({ target }) => {
    if (display.innerHTML.includes('.') !== true) {
        console.log('.');
        display.innerHTML += target.innerText;
        smallDis.innerText += target.innerText;
    }
});

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

function clear() {
    console.log('clear');
    display.innerHTML = '';
    displayValue = '';
    smallDis.innerText = '';
    operator = '';
};

function checkInfinity() {
    if (display.innerHTML == 'Infinity') {
        alert('infinite parralel universes'); //make this a dark theme switch
    }
}

//to do:
//string together several operations and get the right answer, 
//with each pair of numbers being evaluated at a time.

//add +/- support?

//add keyboard support

//style with css

//clean up CSS and HTML

//?profit?