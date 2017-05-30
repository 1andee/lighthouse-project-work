/* Pair programmed 30 May 2017 by Sean and Ian */

/* Write a program that takes a single parameter from the command line
 a number, and rolls that many six-sided dice. */

//Create a function that gives a random whole number from 1 to 6

function diceRoll() {
  return Math.ceil(Math.random() * 6);
}

//Take 1 number from the command line
var numberOfRolls = process.argv[2];

var printedDiceRolls = '';

//Generate that many dice rolls
for (var i = 0; i < numberOfRolls; i++) {
    printedDiceRolls = printedDiceRolls + diceRoll() + ', ';
}

printedDiceRolls = printedDiceRolls.substring(0, printedDiceRolls.length - 2);

//Log the dice roll values to the console
console.log('Rolled ' + numberOfRolls + ' dice: ' + printedDiceRolls + '.');
