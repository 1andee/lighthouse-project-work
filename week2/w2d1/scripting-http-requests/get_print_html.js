/*  Create a second function that uses a buffering technique to append each
chunk of data to a variable as it is received, and then console.log the data
once all of the data has been received.

Buffering in this context means the technique you've used before (usually in loops
or conditionals) of creating an empty variable and addingdata to it. */

var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

https.get(requestOptions, function (response) {

  var dataArray = [];
  response.setEncoding('utf8');

  response.on('data', function (data) {
    dataArray.push(data);
  });

  response.on('end', function() {
    console.log(dataArray.join(""));
    console.log('\n');
    console.log('Request complete. All data displayed');
  });

});

}

getAndPrintHTML();
