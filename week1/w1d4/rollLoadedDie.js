// create a "cheat" die that returns numbers in a row from a hardcoded list.

// 1. call anonymous function
// 2. console.log or return value of first item in list array
// 3. add one to array index
// 4. return

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var i = 0;

    return function () {
      return list[i++];
      // once all array items are returned / exhausted, function will return undefined
      // needs to push item to back of array
    }
  }

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
