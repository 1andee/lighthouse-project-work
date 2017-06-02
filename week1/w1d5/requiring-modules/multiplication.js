function timesTwo(num) {
  return num * 2;
}

function logTimesTwo(userNum) {
  console.log(`${userNum} times two is ${timesTwo(userNum)}`);
}

function squareRoot(num) {
  return (num * num);
}

function logSquareRoot(userNum) {
  console.log(`The square root of ${userNum} is ${squareRoot(userNum)}`)
}

module.exports = {
  logTimesTwo: logTimesTwo,
  logSquareRoot: logSquareRoot
}
