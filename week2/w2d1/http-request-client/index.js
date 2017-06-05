// Scripting HTTP Requests with the Request Package
// Write a HTTPS client using request to download an image from the internet.

/* Create a new .js file and using request, make a 'GET' request to
'https://sytantris.github.io/http-examples/future.jpg' using chaining.

The chain should:
- Use .on('error') to handle any errors
- Use .on('response') to log the HTTPS response code, response message (response.statusMessage)
  and content type (response.headers['content-type'])
- Use piping and fs.createWriteStream to save the file to your working directory ('./future.jpg')

Considerations:

You might wish to let the user know what is happening, perhaps with:
  console.log('Downloading image...');
  console.log('Download complete.');

Where would you insert those console.log statements to ensure they occur in order
and at the right time?

Although you have a good spot to place the 'downloading' statement, if you tried
logging 'complete' after the .pipe, what did you notice?

Which function could you chain to mark the end of a writable stream?  */

var request = require('request');
var fs = require('fs');

console.log("Commencing Download...");
request.get('https://sytantris.github.io/http-examples/future.jpg')
.on('error', function (err) {
  throw err;
})
.on('response', function (response) {
  console.log('Response Status Code: ', response.statusCode);
  console.log('Response Status Message: ', response.statusMessage);
  console.log('Response Content Type: ', response.headers['content-type']);
})
.on('end', function () {
  console.log('Download Complete');
})
.pipe(fs.createWriteStream('./future.jpg'));
