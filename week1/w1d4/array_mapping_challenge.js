// Pair programmed with Katia on 01 June 2017
//
// If you recall Pythagorean Theorem (x^2 + y^2 = z^2), then this should be a breeze.
//
// Complete the following code for the assertion to pass. The result should be an array of numbers corresponding to the x-y pairs provided in the input array (ie: calculate z given x and y).

var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(num) {
  return Math.sqrt((num.x * num.x) + (num.y * num.y));
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);


// Additional example using Math.pow
var resultPow = input.map(function(num) {
  return Math.sqrt((Math.pow(num.x, 2)) + (Math.pow(num.y, 2)));    // Can use Math Pow here
});

console.log(resultPow[0] === 5);
console.log(resultPow[1] === 13);
console.log(resultPow[2] === 17);
