// Pair programmed with Katia on 01 June 2017
// The second argument/parameter is expected to be a function

function findWaldo(array, found) {
  // for (var i = 0; i < array.length; i++) {
  //   if (array[i] === "Waldo") {
  //     found(i);   // execute callback
  //   }
  // }

  array.forEach ( function (name, i) {
      if (name === "Waldo") {
        found(i);   // execute callback
      }
    })

}

function actionWhenFound(i) {
  console.log("Found him at index", i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
