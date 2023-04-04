// Function to add two numbers
function add(num1, num2) {
    return num1 + num2;
}

// Function to subtract two numbers
function subtract(num1, num2) {
    return num1 - num2;
}

// Function to multiply two numbers
function multiply(num1, num2) {
    return num1 * num2;
}

// Function to divide two numbers
function divide(num1, num2) {
    return num1 / num2;
}

// Take user input for operation and numbers
var operation = prompt("Enter operation (+, -, *, /):");
var num1 = parseFloat(prompt("Enter first number:"));
var num2 = parseFloat(prompt("Enter second number:"));

// Perform calculation based on selected operation
if (operation === "+") {
    alert("Result: " + add(num1, num2));
} else if (operation === "-") {
    alert("Result: " + subtract(num1, num2));
} else if (operation === "*") {
    alert("Result: " + multiply(num1, num2));
} else if (operation === "/") {
    alert("Result: " + divide(num1, num2));
} else {
    alert("Invalid operation.");
}
