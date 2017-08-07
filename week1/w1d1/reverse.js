/* Write a program that takes any number of command line arguments,
all strings, and reverses them before outputting them one at a time
to the console.

Do NOT use JavaScript's Array.prototype.reverse or Array.prototype.join
functions to solve this problem. */

var myArgs = process.argv.slice(2);

function reverse(myArgs) {

  myArgs.forEach((element) => {
    var reversedWord = "";
    for (i = element.length - 1; i >= 0; i--) {
      reversedWord += element[i];
    }
    console.log(reversedWord);
  });
}

reverse(myArgs);
