/* Create a function called wrapLog() that takes in a function (callback) and a string
(name) and returns a function that does the same thing as callback but also logs the
name, input parameters, and return value of the callback function. */

var wrapLog = function (cb, name) {

  /*
  - Log name of cb function
  - Log input params of cb fn
  - Return value of cb fn
  */

  return function() {
    var args = Array.prototype.slice.call(arguments);
    console.log(`${name}(${args.join(', ')}) => ${cb.apply(null, args)}`);
  };

};

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24
