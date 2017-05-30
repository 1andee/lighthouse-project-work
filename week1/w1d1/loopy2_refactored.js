/* EXAMPLE INPUT:

  loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

*/

function loopyLighthouse (range, multiples, words) {

//  USER DEFINED RANGE
  var i = range[0];
  var max = range[1];

//  USER DEFINED MULTIPLES
  var firstMultiple = multiples[0];
  var secondMultiple = multiples[1];

//  USER DEFINED WORDS
  var firstWord = words[0];
  var secondWord = words[1];
  var concatWord = firstWord + secondWord;

//  WHILE STATEMENT
  while (i <= max) {
    if (i % firstMultiple === 0 && i % secondMultiple === 0) {
      console.log(concatWord);
    } else if (i % firstMultiple === 0) {
      console.log(firstWord);
    } else if (i % secondMultiple === 0) {
      console.log(secondWord);
    } else {
      console.log(i);
    }
    i++;
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
