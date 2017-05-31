/*
Pair programmed with Meagan on 31 May 2017
Re-factored countLetters.js to track character position count
*/

function countLetters(string) {
  objectOfChars = { };
  stringArray = string.split("").join("").toLowerCase();

  for (var i = 0; i < stringArray.length; i++) {
      // Line 12 assigns variable to current character
      var currentChar = stringArray[i];
      // Line 14 handles first instance of a character
      if (objectOfChars[currentChar] === undefined) {
          /*
          Lines 19-21 convert single instances to a string
          May require cleaning up
          */
          var num = [i];
          var convertedNum = [num].toString();
          objectOfChars[currentChar] = convertedNum;
          } else {
          // Line 24 handles multiple instances
            objectOfChars[currentChar] += ', ' + [i];
          }
      }
  delete objectOfChars[' '];      // Removes spaces from appearing in character count
  return objectOfChars;
}

console.log(countLetters("Lighthouse in the house"));

// Expected output:
// l: 0
// i: 1, 11
// g: 2
// h: 3, 5, 15, 18
// t: 4, 14
// o: 6, 19
// u: 7, 20
// s: 8, 21
// e: 9, 16, 22
// n: 12
