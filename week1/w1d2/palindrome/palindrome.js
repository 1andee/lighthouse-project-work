function isPalindrome(str) {
  str = str.split(" ").join("").toLowerCase();
  console.log(str);

  var mid = Math.floor(str.length/2);
  var last = str.length;

//    iterate through each character of the string
//    checks if the index of the string is NOT equal to the last letter of the string

if (str.length === 1) return true;

  for (var i = 0; i < mid; i++) {
    if (str[i] !== str[last - i]) return false;
  }
return true;
}

//
// Test driver code. These should all log true.
console.log(isPalindrome('p') === true);      // OK
console.log(isPalindrome('foo') === false);   //  OK
console.log(isPalindrome('racecar') === true);    // OK
console.log(isPalindrome('Kayak') === true);      // OK
console.log(isPalindrome('a santa at NASA') === true);    // OK
console.log(isPalindrome('live without evil') === false);   // OK
console.log(isPalindrome('just some random words') === false);   // OK
