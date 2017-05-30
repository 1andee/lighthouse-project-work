// Concatenates an array of concepts we learned on Week 1, Day 1 of Bootcamp

/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

 // a custom function written by you (you must define it too!)
var concepts = joinList(conceptList);

// Write your code here...

function joinList(array) {

  var concatenatedArray = "";

  for (var i = 0; i < array.length; i++) {
    concatenatedArray += (array[i] + ", ");
    }

  return concatenatedArray.substring(0,concatenatedArray.length-2);

}

console.log("Today I learned about " + concepts + ".");
