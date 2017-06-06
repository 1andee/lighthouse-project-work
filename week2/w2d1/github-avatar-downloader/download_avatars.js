var https = require('https');
var request = require('request');
var fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader!');

// Requestor's username and API token required
var GITHUB_USER = process.env.GITHUB_USER;
var GITHUB_TOKEN = process.env.GITHUB_TOKEN;

function getRepoContributors(repoOwner, repoName, callback) {

  // Creates URL for HTTP GET Request using requestor's username and API token
  // and desired repository account / repo name to pull thumbnails from
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  // Assigns the URL and User-Agent for GET request
  var options = {
    'url': requestURL,
    'method': 'GET',
    'headers': {
      'User-Agent': 'GitHub Avatar Downloader - LHL Student Project'
    }
  }

request(options, function (error, response, body) {
  if (error) {
    console.log(error);
  };
  // Parses JSON body and assigns to 'users' variable
  var users = JSON.parse(body);

  // Map avatar URLs into new array
  var avatarLinkList = users.map(function (user) {
    return user.avatar_url;
  });

  callback(null, avatarLinkList);

})
};

function downloadImageByURL(url, filePath) {
request.get(url)
.on('error', function (err) {
  throw err;
})
.on('end', function () {
})
.pipe(fs.createWriteStream(filePath));
}

// getRepoContributors('jquery', 'jquery', function(error, response) {
//   console.log('Errors:', error);
//   console.log('Result:', response);
// });
