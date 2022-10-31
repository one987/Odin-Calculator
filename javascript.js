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
key.forEach((button) =>
    button.addEventListener('click', ({target}) => {
        console.log({target});
    })
);
//number keys
numKey.forEach((button) => 
    button.addEventListener('click', ({target}) => {

        if (displayValue == '') {
            console.log(target.innerText); //log target
            displayValue = target.innerText; //update display value
            display.innerHTML = displayValue;//update display html
            smallDis.innerText += target.innerText;//update small display
        } else if (displayValue !== '') {
            displayValue += target.innerText;//concatenate string
            display.innerHTML = displayValue;//update display
            smallDis.innerText += target.innerText;//update small display
        }
    })

);
//operator keys
opKey.forEach((button) =>
    button.addEventListener('click', ({ target }) => {
        //add another on click event that changes the function once clicked?
            operator = target.innerText;
            firstInt = displayValue;
            smallDis.innerText += operator;
            console.log(firstInt);
            display.innerHTML = ''
            displayValue = ''
        }
    )
);
// = 
equalsKey.addEventListener('click', () => {
    secondInt = displayValue;
    result = operate(firstInt, secondInt, operator);
    display.innerHTML = result;
    smallDis.innerText = `${firstInt} ${operator} ${secondInt} = ${result}`;
    displayValue = result;
    console.log (`${firstInt} ${operator} ${secondInt} = ${result}`)

});

clearKey.addEventListener('click', () => {
    clear();
});

delKey.addEventListener('click', () => {
    console.log('delete');
    display.innerHTML = displayValue.slice(0, -1);
    smallDis.innerText = displayValue.slice(0, -1);
    displayValue = display.innerHTML;
});

pointKey.addEventListener('click', () => {
    console.log('.');
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
}

