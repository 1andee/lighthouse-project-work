
var waysToDisplay = {
  console: function (array) {
    console.log("console.log ", array);
  },
  nice: function (array) {
    console.log("nicer display");
    for (let i of array) {
      console.log("- ", i);
    }
  },
  oneline: function (array) {
    console.log("--> ",array," <--");
  },
  numbered: function (array) {
    for (i = 0; i < array.length; i++) {
    console.log(`${(i + 1)}. ${array[i]}`);
    }
  }
}

// HERE ARE MY TEST CASES

function displayData (callback) {
  var tweeps = ["@albatross", "@gull", "@horned lark"];

  if (callback)
    callback(tweeps);
  else
  return tweeps;
}


displayData (waysToDisplay.numbered);
console.log('----------------');
displayData (waysToDisplay.nice);
console.log('----------------')
displayData (waysToDisplay.console);
