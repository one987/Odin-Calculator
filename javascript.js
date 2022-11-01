//variables:
let firstInt = '';
let secondInt = '';
let operator = '';
let result = '';
let isOpPressed = false;
let isEqualPressed = false;

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

        if (isEqualPressed == true) {
            clear();
            display.innerText = target.innerText; 
            smallDis.innerText += target.innerText;
        }

        else if (display.innerText == '') {
            display.innerText = target.innerText;//update display 
            smallDis.innerText += target.innerText;//update small display
        } else if (display.innerText !== '') {
            display.innerText += target.innerText;//concatenate string
            smallDis.innerText += target.innerText;//update small display
        }
    })
);

//operator keys
opKey.forEach((button) =>
    button.addEventListener('click', ({ target }) => {
        operator = target.innerText;
        firstInt = display.innerText;
        smallDis.innerText += operator;
        console.log(firstInt);
        display.innerText = ''
    }
    ));

// equals key
equalsKey.addEventListener('click', () => {
    if (display.innerText == '' || firstInt == '') {
        return
    } else {
        equals();
    }
}
);

clearKey.addEventListener('click', () => {
    clear();
});

delKey.addEventListener('click', () => {

    if (isEqualPressed = true) {
        clear();
    } 
    console.log('delete');
    let str = display.innerText;
    let str2 = smallDis.innerText;
    display.innerText = str.slice(0, -1);
    smallDis.innerText = str2.slice(0, -1);

});

pointKey.addEventListener('click', ({ target }) => {
    if (display.innerText.includes('.') !== true) {
        console.log('.');
        display.innerText += target.innerText;
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

function equals() {
    secondInt = display.innerText;
    result = operate(firstInt, secondInt, operator);
    display.innerText = result;
    smallDis.innerText = `${firstInt} ${operator} ${secondInt} = ${result}`;
    console.log(`${firstInt} ${operator} ${secondInt} = ${result}`)
    isEqualPressed = true;
    divideByZero();

}

function clear() {
    console.log('clear');
    display.innerText = '';
    smallDis.innerText = '';
    operator = '';
    isEqualPressed = false;

};

function divideByZero() {
    if (display.innerText == 'Infinity' || display.innerText == 'NaN') {
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