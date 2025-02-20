// calc.js

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const deleteBtn = document.getElementById("delete");
const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equal");
const decimalBtn = document.getElementById("decimal");
let displayScreen = document.querySelector(".display p");

let num1 = "";
let num2 = "";
let operator = "";
let result;

numbers.forEach((num) => {
  num.addEventListener("click", () => {
    if (num2 !== "" && operator === "") {
      // If equal was pressed, reset and start a new calculation
      num1 = "";
      num2 = "";
    }
    num1 += num.textContent;
    displayScreen.textContent = num1;
  });
});
operators.forEach((op) => {
  op.addEventListener("click", () => {
    if (op.textContent == "X") operator = "*";
    else operator = op.textContent;
    console.log(operator);

    if (num1 !== "" && num2 !== "") {
      evaluate(); // Evaluate the previous operation
    } else if (num1 !== "" && num2 === "") {
      num2 = num1; // Move num1 to num2 for chaining
      num1 = "";
    }
  });
});
equalBtn.addEventListener("click", () => {
  evaluate();
});
const evaluate = () => {
  if (num1 !== "" && num2 !== "" && operator !== "") {
    result = operate(Number(num2), operator, Number(num1));
    operator = "";
    num2 = result; // Store result in num2 for chaining
    num1 = ""; // Reset num1 for the next number
    displayScreen.textContent = result;
    console.log(result);
  }
};
//math functions
const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return b - a;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const power = function (a, b) {
  return a ** b;
};

//calc

const operate = (num1, operator, num2) => {
  if (operator === "/" && num2 === 0) return "Error"; // Handle division by zero
  if (operator == "+") return add(num1, num2);
  else if (operator == "-") return subtract(num1, num2);
  else if (operator == "*") return multiply(num1, num2);
  else if (operator == "/") return divide(num1, num2);
  else return null;
};

clearBtn.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  operator = "";
  displayScreen.textContent = "0";
});
deleteBtn.addEventListener("click", () => {
  num1 = num1.slice(0, -1); // Remove the last character
  displayScreen.textContent = num1 || "0"; // If num1 is empty, show "0"
});