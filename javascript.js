//variables:
let firstInt = ''
let secondInt = ''
let operator = ''
let result = ''
let isOpPressed = false
let isEqualPressed = false

//query selectors:
const allKeys = document.querySelectorAll('.btn')
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

//number key function
numKey.forEach((button) =>
    button.addEventListener('click', ({ target }) => {

        if (isEqualPressed) {
            clear()
            updateDisplay(target)
        } else if (isOpPressed) {
            clearDis()
            isOpPressed = false
            updateDisplay(target)
        } else
            updateDisplay(target)
    }
    )
)

//operator key function
opKey.forEach((button) =>
    button.addEventListener('click', ({ target }) => {
        if (isOpPressed || display.innerText == '') {
            return
        } else if (firstInt && operator && isEqualPressed == false) {
            firstInt = roundResult(operate(firstInt, display.innerText, operator))
            display.innerText = firstInt
            smallDis.innerText += target.innerText
            operator = target.innerText
            isOpPressed = true
            isEqualPressed = false
            divideByZero()
        } else {
            operator = target.innerText
            firstInt = display.innerText
            smallDis.innerText += target.innerText
            isOpPressed = true
            isEqualPressed = false
            clearDis()
        }
    })
)

equalsKey.addEventListener('click', equals)

clearKey.addEventListener('click', clear)

delKey.addEventListener('click', backSpace)

pointKey.addEventListener('click', ({ target }) => {
    if (display.innerText.includes('.') !== true) {
        updateDisplay(target)
    }
})

//functions:
function equals() {
    if (isEqualPressed || display.innerText == '' || firstInt == '') {
        return
    } else {
        secondInt = display.innerText
        result = roundResult(operate(firstInt, secondInt, operator))
        display.innerText = result
        smallDis.innerText = `${firstInt} ${operator} ${secondInt} = ${result}`
        isEqualPressed = true
        isOpPressed = false
        divideByZero()
    }
}

function clear() {
    display.innerText = ''
    smallDis.innerText = ''
    firstInt = ''
    secondInt = ''
    operator = ''
    isOpPressed = false
    isEqualPressed = false
}

function backSpace() {
    let str = display.innerText
    let str2 = smallDis.innerText
    if (isEqualPressed) {
        return
    } else if (isOpPressed) {
        isOpPressed = false
        isEqualPressed = true
        operator = ''
        display.innerText = firstInt
        smallDis.innerText = str2.slice(0, -1)
    } else {
        display.innerText = str.slice(0, -1)
        smallDis.innerText = str2.slice(0, -1)
    }
}

//Easter Egg:
function divideByZero() {
    if (display.innerText == 'Infinity' || display.innerText == 'NaN') {
        alert('Oops!')
        for (const keys of allKeys) {
            keys.classList.add('divide-by-zero')
        }
        for (const keys of opKey) {
            keys.classList.add('divide-by-zero-op')
        }
        equalsKey.classList.add('divide-by-zero-op')
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
        } else {
            updateDisplayKey(e)
        }
    } if (e.key === '=') {
        equals()
    } if (e.key === '.') {
        if (display.innerText.includes('.') !== true) {
            updateDisplayKey(e)
        }
    } if (e.key === 'Backspace') {
        backSpace()
    } if (e.key === 'Escape') {
        clear()
    } if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        if (isOpPressed || display.innerText == '') {
            return
        } else if (firstInt && operator && isEqualPressed == false) {
            firstInt = roundResult(operate(firstInt, display.innerText, operator))
            display.innerText = firstInt
            smallDis.innerText += convertOp(e.key)
            operator = convertOp(e.key)
            isOpPressed = true
            divideByZero()
        } else {
            operator = convertOp(e.key)
            firstInt = display.innerText
            smallDis.innerText += convertOp(e.key)
            isOpPressed = true
            isEqualPressed = false
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

function roundResult(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100
}
