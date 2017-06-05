// PRINTING WITH PARAMETERS

/* Create a function, getAndPrintHTML, that accepts a parameter, options,
which is an object that contains values for the host and path, exactly like requestOptions.

Considerations:
- Is there any reason not to just pass the URL as a string?
- Is there any reason not to pass the host and path as two individual parameters?
- Did you notice that the declaration of requestOptions has been moved? Do you understand why?
- What do you need to change about the way you call https.get to ensure it still works? */

var https = require('https');

  function getAndPrintHTML (options) {

    https.get(options, function (response) {

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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
