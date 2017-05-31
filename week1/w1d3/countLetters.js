
function countLetters(string) {
  objectOfChars = {};                                                 // Creates an empty object
  stringArray = string.split(" ").join("").toLowerCase().split("");   // Converts string into array of characters

  for (var i = 0; i < stringArray.length; i++) {                      // Create for loop to iterate through each array item
    var currentChar = stringArray[i];                                 // Sets current array item to variable currentChar
    if (objectOfChars[currentChar] == undefined) {                    // If character doesn't exist in object, set count to one
      objectOfChars[currentChar] = 1;
      } else {
      objectOfChars[currentChar]++;                               // If character already exists in object, increment by one
      }
  }
  return objectOfChars;                                             // Return all of the characters
}

console.log(countLetters("Lighthouse in the house"));
