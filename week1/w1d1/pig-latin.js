/* Write a program that takes any number of command line arguments,
converts each to pig latin, then puts the translated words together
into one sentence logged to the console.

Convert a word to pig latin by taking its first letter, moving it to the
end of the word, then adding "ay" after it all. */

// Assigns command line arguments to var input
var input = process.argv.slice(2);
// Create an empty array
var revisedArray = [];

function reverse(textToChange) {
  // Iterate through each item
  textToChange.forEach(function (element) {
    // Push to new array: String with first character placed at end, adding "ay"
    revisedArray.push(element.substring(1) + element[0] + "ay");
  });
  // Display the array of revised words, with blank space between each item
  console.log(revisedArray.join(" "));
}

// Call the function
reverse(input);
