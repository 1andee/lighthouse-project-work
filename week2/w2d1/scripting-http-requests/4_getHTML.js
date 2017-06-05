/* PRINTING WITH CALLBACKS

Create a fourth function, getHTML. This function will look and behave almost the
same as your third function, except:

- The function definition will accept a callback as a second parameter.
- The function body will invoke (call) the callback when the data is fully
received, in place of the original console.log.
- Ensure the callback function printHTML gets passed as an argument when you call getHTML */

var https = require('https');

function getHTML (options, callback) {

  https.get(options, function (response) {

    var html = [];
    response.setEncoding('utf8');

    console.log('[--START OF REQUESTED HTML--]');

    response.on('data', function (data) {
      html.push(data);
    });

    response.on('end', function() {
      console.log(html.join(""));
      console.log('[--END OF HTML--].');
    });

  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);


module.exports = getHTML
