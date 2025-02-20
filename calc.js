// calc.js
console.log("JavaScript is working!");

//math functions
const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  if (arr.length == 0) return 0;
  return arr.reduce((a, b) => a + b);
};

const multiply = function (arr) {
  return arr.reduce((a, b) => a * b);
};

const power = function (a, b) {
  return a ** b;
};

// const factorial = function (a) {
//   if (a == 0 || a == 1) return 1;
//   let temp = 1;
//   for (let i = 2; i <= a; i++) {
//     temp = temp * i;
//   }
//   return temp;
// };
