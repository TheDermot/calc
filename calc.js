// calc.js
console.log("JavaScript is working!");

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

let num1 = 0;
let num2 = 0;
let operator = "";

const operate = (num1, operator, num2) => {
  if (operator == "add") return add(num1, num2);
  else if ((operator == "subtract")) return subtract(num1, num2);
  else if ((operator == "multiply")) return multiply(num1, num2);
  else if ((operator == "divide")) return divide(num1, num2);
};
