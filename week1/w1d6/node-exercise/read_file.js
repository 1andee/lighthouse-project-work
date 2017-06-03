var fs = require("fs");

var filePath = "/tmp/test_async.txt";

var myArgs = process.argv.slice(2);
var fileData = JSON.stringify(myArgs);

fs.writeFile(filePath, fileData, function(err) {
  if (err) {
    throw err;
  }
  console.log("Successfully wrote to", filePath);
});
