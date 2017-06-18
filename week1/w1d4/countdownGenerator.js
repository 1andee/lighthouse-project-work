/* Implement a function countdownGenerator() that takes in a number x and
returns a function that counts down when it is called.  */

var countdownGenerator = function (x) {
  var currentNum = x;

  return function () {
    if (currentNum > 0) {
      console.log(`T-minus ${currentNum}...`);
    }

    if (currentNum === 0) {
      console.log(`Blast Off!`);
    }

    if (currentNum < 0) {
      console.log(`Rockets already gone, bub!`);
    }

    currentNum--;
  }
}

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
