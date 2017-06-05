var https = require('https');
var getHTML = require('./getHTML');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  console.log(html.toUpperCase());
}

getHTML(requestOptions, printUpperCase);
