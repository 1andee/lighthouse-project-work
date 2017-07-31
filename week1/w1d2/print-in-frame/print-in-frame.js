

function printInFrame(list) {
  // splits the argument into characters
  var list = list.split(' ');
  // assigns length of argument to var 'longest'
  var longest = longestStr(list).length;
  // executes repeat() for the length of the argument, assigns to var border
  var border = repeat('*', longest+3);

    console.log(border);
    for (word of list) {
      console.log('* ' + word + repeat(' ', longest - word.length) + '*');
    }
    console.log(border);
  }

  function repeat(str, times) {
    var result = str;

    for (var i = 0; i < times; i++) {
      result += str;
    }

    return result;
  }

  function longestStr(list) {
    var longest = list[0];

    for (str of list) {
      if (str.length > longest.length) {
        longest = str;
      }
    }

    return longest;
  }

// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');
