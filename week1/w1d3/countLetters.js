function countLetters(string) {
  objectOfChars = {};

  // Converts string into array of characters
  stringArray = string.split(" ").join("").toLowerCase().split("");

  // Iterate through array
  for (var i = 0; i < stringArray.length; i++) {
    var currentChar = stringArray[i];
    // If !character in object, set value to one
    if (objectOfChars[currentChar] == undefined) {
      objectOfChars[currentChar] = 1;
    } else {
      // Increment characters that already exist in object
      objectOfChars[currentChar]++;
    };
  };
  return objectOfChars;
};

console.log(countLetters("Lighthouse in the house"));
