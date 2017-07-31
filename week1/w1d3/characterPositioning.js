/*
Pair programmed with Meagan on 31 May 2017
Re-factored countLetters.js to track character position count
*/

function countLetters(string) {
  objectOfChars = {};
  stringArray = string.split("").join("").toLowerCase();

  for (var i = 0; i < stringArray.length; i++) {
      // Assigns variable to current character
      var currentChar = stringArray[i];
      // Handle first instance of a character
      if (objectOfChars[currentChar] === undefined) {
          // Convert first instance of a char to string
          var convertedNum = [i].toString();
          objectOfChars[currentChar] = convertedNum;
          } else {
          // Handle multiple instances of a character
            objectOfChars[currentChar] += ', ' + [i];
          };
      };
  // Removes spaces from character count
  delete objectOfChars[' '];

  return objectOfChars;
};

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
