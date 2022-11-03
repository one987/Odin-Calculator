//variables:
let firstInt = ''
let secondInt = ''
let operator = ''
let result = ''
let isOpPressed = false
let isEqualPressed = false
let bruh = false

//query selectors:
const numKey = document.querySelectorAll('.num')
const opKey = document.querySelectorAll('.op')
const clearKey = document.querySelector('.clear')
const delKey = document.querySelector('.delete')
const equalsKey = document.querySelector('.equals')
const pointKey = document.querySelector('.point')
const display = document.getElementById('display')
const smallDis = document.getElementById('small')

//Keylogger:
window.addEventListener('keydown', keyboardInput)

//number keys
numKey.forEach((button) =>
    button.addEventListener('click', ({ target }) => {

        if (isEqualPressed) {
            clear()
            updateDisplay(target)
        } else if (isOpPressed) {
            clearDis()
            isOpPressed = false
            updateDisplay(target)
        } else if (display.innerText == '' || display.innerText !== '') {
            updateDisplay(target)
        }
    })
)

//operator keys
opKey.forEach((button) =>
    button.addEventListener('click', ({ target }) => {
        isEqualPressed = false
        if (display.innerText == '') {
            return
        } else if (firstInt && operator && bruh == false) {
            firstInt = roundResult(operate(firstInt, display.innerText, operator))
            display.innerText = firstInt
            smallDis.innerText += target.innerText
            operator = target.innerText
            isOpPressed = true
            divideByZero()
        } else if (bruh) {
            operator = target.innerText
            firstInt = display.innerText
            smallDis.innerText += target.innerText
            clearDis()
            bruh = false
        } else {
            operator = target.innerText
            firstInt = display.innerText
            smallDis.innerText += target.innerText
            clearDis()
        }
    })
)

// equals key
equalsKey.addEventListener('click', () => {
    if (display.innerText == '' || firstInt == '') {
        return
    } else {
        equals()
    }
})

clearKey.addEventListener('click', () => {
    clear()
})

delKey.addEventListener('click', () => {
    backSpace()
})

pointKey.addEventListener('click', ({ target }) => {
    if (display.innerText.includes('.') !== true) {
        updateDisplay(target)
    }
})

//functions:
function equals() {
    secondInt = display.innerText
    result = roundResult(operate(firstInt, secondInt, operator))
    display.innerText = result
    smallDis.innerText = `${firstInt} ${operator} ${secondInt} = ${result}`
    isEqualPressed = true
    isOpPressed = false
    bruh = true
    divideByZero()
}

function clear() {
    display.innerText = ''
    smallDis.innerText = ''
    firstInt = ''
    secondInt = ''
    operator = ''
    isOpPressed = false
    isEqualPressed = false
    bruh = false
}

function backSpace() {
    if (isEqualPressed) {
        clear()
    } else {
        let str = display.innerText
        let str2 = smallDis.innerText
        display.innerText = str.slice(0, -1)
        smallDis.innerText = str2.slice(0, -1)
    }
}

function divideByZero() {
    if (display.innerText == 'Infinity' || display.innerText == 'NaN') {
        alert('Beyond the Infinite!')
        clear()
    }
}

function updateDisplay(target) {
    display.innerText += target.innerText
    smallDis.innerText += target.innerText
}

function updateDisplayKey(e) {
    display.innerText += e.key
    smallDis.innerText += e.key
}

function clearDis() {
    display.innerText = ''
}

function roundResult(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100
}

//keyboard functionality:
function keyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) {
        if (isEqualPressed) {
            clear()
            updateDisplayKey(e)
        } else if (isOpPressed) {
            clearDis()
            isOpPressed = false
            updateDisplayKey(e)
        } else if (display.innerText == '' || display.innerText !== '') {
            updateDisplayKey(e)
        }
    } if (e.key === '=') {
        if (display.innerText == '' || firstInt == '') {
            return
        } else {
            equals()
        }
    } if (e.key === '.') {
        if (display.innerText.includes('.') !== true) {
            updateDisplayKey(e)
        }
    } if (e.key === 'Backspace') {
        backSpace()
    } if (e.key === 'Escape') {
        clear()
    } if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        isEqualPressed = false
        if (display.innerText == '') {
            return
        } else if (firstInt && operator && bruh == false) {
            firstInt = roundResult(operate(firstInt, display.innerText, operator))
            display.innerText = firstInt
            smallDis.innerText += convertOp(e.key)
            operator = convertOp(e.key)
            isOpPressed = true
            divideByZero()
        } else if (bruh) {
            operator = convertOp(e.key)
            firstInt = display.innerText
            smallDis.innerText += convertOp(e.key)
            clearDis()
            bruh = false
        } else {
            operator = convertOp(e.key)
            firstInt = display.innerText
            smallDis.innerText += convertOp(e.key)
            clearDis()
        }
    }
}

function convertOp(keyOp) {
    if (keyOp === '/') return '÷'
    if (keyOp === '*') return '×'
    if (keyOp === '+') return '+'
    if (keyOp === '-') return '-'
}

//operator functions:
function add(x, y) {
    return Number(x) + Number(y)
}

function subtract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
}

function operate(x, y, operator) {
    switch (operator) {
        case '+':
            return add(x, y)
        case '-':
            return subtract(x, y)
        case 'x':
            return multiply(x, y)
        case '÷':
            return divide(x, y)
    }
}

//to do:

//style with css

//clean up CSS and HTML

//?profit?

