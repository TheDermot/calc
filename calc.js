// calc.js

//DOM Elements
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const deleteBtn = document.getElementById("delete");
const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equal");
const decimalBtn = document.getElementById("decimal");
let displayScreen = document.querySelector(".display p");

//Global variables
let num1 = "";
let num2 = "";
let operator = "";
let result;
let decimalClickedAfterEqual = false; //decimal tracker so decimal  can be clicked after =
const maxDigits = 23; //based off casio user guide

//window event listener for keyboard input
window.addEventListener("keydown", (e) => {
  if (e.key >= 0 && e.key <= 9) {
    numbers.forEach((num) => {
      //matches e.key with num text content
      if (num.textContent == e.key) num.click();
    });
  } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "*") {
    operators.forEach((op) => {
      if (op.textContent == e.key) op.click();
    });
  } else if (e.key === "Backspace" || e.key === "Delete") deleteBtn.click();
  else if (e.key === "=" || e.key === "Enter") equalBtn.click();
  else if (e.key === ".") decimalBtn.click();
});

const evaluate = () => {
  //if needed paramaters exist
  if (num1 !== "" && num2 !== "" && operator !== "") {
    if (operator == "X") operator = "*"; //handles * text content
    result = operate(Number(num2), operator, Number(num1));
    result = parseFloat(result.toFixed(4));
    num2 = result; // Store result in num2 for chaining
    num1 = ""; // Reset num1 for the next number
    operator = ""; // Reset operator
    displayScreen.textContent = result;
    decimalClickedAfterEqual = false; // Reset the flag
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

//listener on numbers buttons
numbers.forEach((num) => {
  num.addEventListener("click", () => {
    if (operator === "" && result !== undefined) {
      //if evaluation occured and number is clicked next instead of op
      if (decimalClickedAfterEqual);
      else num1 = "";
      num2 = "";
      result = undefined; // Reset result
    }
    if (num1.length < maxDigits) {
      num1 += num.textContent; // Always append to num1
      displayScreen.textContent = num1;
      decimalClickedAfterEqual = false; // Reset the flag after a number is clicked
    }
  });
});
//operator listener and logic
operators.forEach((op) => {
  op.addEventListener("click", () => {
    if (op.textContent == "X") operator = "*"; //handles * text content
    else operator = op.textContent;

    if (num1 !== "" && num2 !== "") {
      //if clicked n num1 n 2 not empty then evaluate
      evaluate(); //ex 1 + 1 + > (2) + next number
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
decimalBtn.addEventListener("click", () => {
  //checks decimal isnt already included
  if (!num1.includes(".") && num1.length < maxDigits) {
    if (num1 !== "") {
      num1 += ".";
      displayScreen.textContent = num1;
    } else {
      num1 += "0.";
      displayScreen.textContent = num1;
    }
    //set decimal tracker to true
    decimalClickedAfterEqual = true;
  }
});
equalBtn.addEventListener("click", () => {
  evaluate();
});
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

//add keyboard support and maybe change colors
