var https = require('https');
var request = require('request');
var fs = require('fs');

// Handles the user-designated account and repo for processing:
var userArgs = process.argv.slice(2);
var githubAccount = userArgs[0];
var githubRepository = userArgs[1];

console.log('Welcome to the GitHub Avatar Downloader!');

// Requestor's username and API token required:
var GITHUB_USER = process.env.GITHUB_USER;
var GITHUB_TOKEN = process.env.GITHUB_TOKEN;

function getRepoContributors(repoOwner, repoName, callback) {

  // Creates URL for HTTP GET Request using requestor's username and API token
  // and desired repository account / repo name to pull thumbnails from:
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  // Assigns the URL and User-Agent for GET request:
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
    // Parses JSON body and assigns to 'users' variable:
    var users = JSON.parse(body);

    // Passes JSON data as response into getRepoContributors():
    callback(null, users);
  })
};

function downloadImageByURL(url, filePath) {
  request.get(url)
  .on('error', function (err) {
    throw err;
  })
  .on('end', function () {
  })
  // Assigns directory, filename, and file extension for downloaded images:
  .pipe(fs.createWriteStream('./avatars/' + filePath + '.jpg'));
}

// Iterates through JSON data, passing avatar URL and user ID into downloadImageByURL():
getRepoContributors(githubAccount, githubRepository, function(error, response) {
  response.forEach(function (response) {
    downloadImageByURL(response.avatar_url, response.login);
    console.log('Downloading avatar for contributor ' + response.login)
  });
  console.log('Avatars for all contributors downloaded. Have a nice day!');
});
