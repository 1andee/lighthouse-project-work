var https = require('https');
var getHTML = require('./getHTML');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  var reversedText = "";
  pageLength = html.length - 1;
  for (i = pageLength; i > 0; i--) {
    reversedText += html[i];
  }
  console.log(reversedText);
}

getHTML(requestOptions, printReverse);
