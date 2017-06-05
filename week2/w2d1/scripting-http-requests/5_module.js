// MAKE IT A MODULE

var https = require('https');
var getHTML = require('./4_getHTML');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);
