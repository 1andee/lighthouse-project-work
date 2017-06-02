// Require the multiplication module and set the exported object to var multiplication
var multiplication = require("./multiplication");

// Call the timesTwo function in multiplication.js, passing in 500 as argument

// console.log(multiplication.timesTwo(500));
// Practice using template literal:
console.log(`500 times two is ${multiplication.timesTwo(500)}`);
console.log(`The square root of 3 is ${multiplication.squareRoot(3)}`);
