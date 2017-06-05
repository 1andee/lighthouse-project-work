var https = require('https');
var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = process.env.GITHUB_USER;
var GITHUB_TOKEN = process.env.GITHUB_TOKEN;
var CONFIG = {headers: {
  'User-Agent': 'GitHub Avatar Downloader - LHL Student Project'
  }
}

function getRepoContributors(repoOwner, repoName, cb) {
var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
console.log(requestURL)
request.get(requestURL, CONFIG)
.on('error', function (err) {
  throw err;
})
.on('response', function (response) {
  console.log('Response Status Code: ', response.statusCode);
  console.log('Response Status Message: ', response.statusMessage);
  console.log('Response Content Type: ', response.headers['content-type']);
  // console.log(response);
  // console.log(response.avatar_url);
  // var json = JSON.parse(response)

  // THIS IS WHERE YOU WANT TO RETRIEVE THE AVATAR URLS FROM THE JSON FILE
  // cb(????)    // REPLACE WITH WHATEVER OBJECT YOU PLACE THE AVATARS INTO
})
};

getRepoContributors("jquery", "jquery", function(err, response) {
  // console.log("Errors:", err);
  // console.log("Result:", result);
});
