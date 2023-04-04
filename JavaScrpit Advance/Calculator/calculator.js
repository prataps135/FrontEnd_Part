var inputBox = document.getElementById("input-box");
var currentNumber = "";
var currentOperator = "";
var result = 0;

// Function to add a number to the input
function addNumber(number) {
    currentNumber += number;
    inputBox.value = currentNumber;
}

// Function to add an operator to the input
function addOperator(operator) {
    if (currentNumber !== "") {
        currentOperator = operator;
        result = parseFloat(currentNumber);
        currentNumber = "";
    }
}

// Function to perform the calculation and display the result
function calculate() {
    if (currentOperator === "+") {
        result += parseFloat(currentNumber);
    } else if (currentOperator === "-") {
        result -= parseFloat(currentNumber);
    } else if (currentOperator === "*") {
        result *= parseFloat(currentNumber);
    } else if (currentOperator === "/") {
        result /= parseFloat(currentNumber);
    }
    inputBox.value = result;
    currentNumber = "";
    currentOperator = "";
}

// Function to clear the input
function clearInput() {
    inputBox.value = "";
    currentNumber = "";
    currentOperator = "";
    result = 0;
}
