// Exercise 4: CHAINING THE STREAMS (DECOMPRESS)
// Run main.js in node first, so that input.txt.gz is created

var fs = require("fs");
var zlib = require('zlib');

// Decompress the file input.txt.gz to input.txt
fs.createReadStream('input.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('input_decompressed.txt'));

console.log("File Decompressed.");
