var https = require('https');

function getHTML (options, callback) {

  https.get(options, function (response) {

    var html = [];
    response.setEncoding('utf8');

    console.log('[--START OF REQUESTED HTML--]');

    response.on('data', function (data) {
      html.push(data);
    });

    response.on('end', function (data) {
      var joinedHTML = html.join("");
      callback(joinedHTML);
    });

  });
}

module.exports = getHTML;
