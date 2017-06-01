/* Implement your own version of the built-in array map function.

The first will be an array to map
The second will be a callback function.

The function will return a new array based on the results of the callback function.

Desired output should match [6, 7, 2, 5, 3]
*/

var words = ["ground", "control", "to", "major", "tom"];

var map = function(array, callback) {
  var outputArray = [];
  array.forEach( function (i) {
      outputArray.push((callback(i)));
  })
  return outputArray;
}

var somethingToExecute = function(word) {
  return word.length;
}


// Additional blank functions

var somethingElseToExecute = function(word) {
  // return xyz;
}

var yetAnotherThing = function(word) {
  // return jkl;
}

console.log(map(words, somethingToExecute));
