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

//listener on numbers buttons
numbers.forEach((num) => {
  num.addEventListener("click", () => {
    if (operator === "" && result !== undefined) {
      //if evaluation occured and number is clicked next instead of op
      num1 = "";
      num2 = "";
      result = undefined; // Reset result
    }
    num1 += num.textContent; // Always append to num1
    displayScreen.textContent = num1;
  });
});
//operator listener and logic
operators.forEach((op) => {
  op.addEventListener("click", () => {
    if (op.textContent == "X") operator = "*"; //handles * text content
    else operator = op.textContent;

    if (num1 !== "" && num2 !== "") { //if clicked n num1 n 2 not empty then evaluate
      evaluate();  //ex 1 + 1 + > (2) + next number
      operator = op.textContent; //maintains operator for next chained operation
    } else if (num1 !== "" && num2 === "") {
      num2 = num1; // Move num1 to num2 for chaining on initial input of num1
      num1 = "";
    } else if (result !== undefined) {
      // If equal was pressed, use the result for chaining
      num2 = result;
      num1 = "";
    }
  });
});
equalBtn.addEventListener("click", () => {
  evaluate();
});
const evaluate = () => { //if needed paramaters exist
  if (num1 !== "" && num2 !== "" && operator !== "") {
    result = operate(Number(num2), operator, Number(num1));
    num2 = result; // Store result in num2 for chaining
    num1 = ""; // Reset num1 for the next number
    operator = ""; // Reset operator
    displayScreen.textContent = result;
    console.log(result);
  }
};
//math functions
const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
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
