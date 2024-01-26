let displayValue = '';
let operator = '';
let firstOperand = '';

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function setOperator(op) {
    operator = op;
    firstOperand = displayValue;
    displayValue += operator; // Append the operator to the display
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    operator = '';
    firstOperand = '';
    updateDisplay();
}

function calculate() {
    let result = '';
    const secondOperand = displayValue.slice(firstOperand.length + 1); // Exclude the operator from the second operand

    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            result = 'Error';
    }

    displayValue = result.toString();
    operator = '';
    firstOperand = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
