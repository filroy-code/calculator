let x = 0
let y = 1
let answer
let display = ""
let value1 = 0
let value2 = 0
let operatorReturn = []
let isOperatorClicked = false
let op

function add(x, y) {
    return x + y
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

function operate(op, val1, val2) {
    // op must be in quotes
    switch(op) {
        case '+': answer = add(val1, val2);
        break;
        case '-': answer = subtract(val1, val2);
        break;
        case 'x': answer = multiply(val1, val2);
        break;
        case '÷': answer = divide(val1, val2);
        break;
    }
    return answer;
}

const numberButton = document.querySelectorAll(".numberButton");
const operatorButton = document.querySelectorAll(".operatorButton");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clearButton");
const calculatorDisplay = document.querySelector("#calcDisplay");

function clicker() {
numberButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (isOperatorClicked) {
            calculatorDisplay.innerHTML = "";
            isOperatorClicked = false;
            display = ""
            }
        display += (e.target.innerHTML)
        calculatorDisplay.innerHTML = display}
    )
})}

function opClick(operatorReturn) {
    isOperatorClicked = operatorReturn[2]
    op = operatorReturn[0]
    val1 = +operatorReturn[1]
}

function operatorButtonClick() {
    operatorButton.forEach((butt) => {
        butt.addEventListener('click', (e) => {
            chosen = (e.target.innerHTML)
            operatorReturn[0] = chosen
            // console.log(`You chose ${chosen}`)
            // console.log(+value1)
            if (value1) {
                value2 = +calculatorDisplay.innerHTML
                calculatorDisplay.innerHTML = operate(op, +value1, +value2)
                value1 = calculatorDisplay.innerHTML
                operatorReturn[2] = true
                operatorReturn[1] = value1
                opClick(operatorReturn)
            } else {
                value1 = calculatorDisplay.innerHTML
                operatorReturn[1] = value1
                operatorReturn[2] = true
                console.log(operatorReturn)
                opClick(operatorReturn)}
        }
        )
    })
    return operatorReturn;
}

function equalsClick() {
    equalsButton.addEventListener('click', () => {
        if (op) {
            value2 = calculatorDisplay.innerHTML
            calculatorDisplay.innerHTML = operate(op, +value1, +value2)
            value1 = 0}
    })
}

function clear() {
    clearButton.addEventListener('click', () => {
        // problems might arise with op, val1. code is working before they were "let" defined above.
        calculatorDisplay.innerHTML = "";
        x = 0
        y = 1
        answer
        display = ""
        value1 = 0
        value2 = 0
        operatorReturn = []
        isOperatorClicked = false
        op = undefined
    })
}

function calculatorOn() {
    clicker();
    operatorButtonClick();
    equalsClick();
    clear();
}

// let blah = operate(add, 4, 7)
// alert(blah)