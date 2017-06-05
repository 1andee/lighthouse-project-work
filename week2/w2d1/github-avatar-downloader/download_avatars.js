var https = require('https');
var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "1andee";
var GITHUB_TOKEN = "839db10ba9c796bd7b1f1c4a0fd08023ac1f9ee3";
var USER_AGENT = {headers: {
  'User-Agent': '1anDee GitHub Avatar Downloader - LHL Student Project'
  }
}

function getRepoContributors(repoOwner, repoName, cb) {
var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
console.log(requestURL);
request.get(requestURL, USER_AGENT)
.on('error', function (err) {
  throw err;
})
.on('response', function (response) {
  console.log('Response Status Code: ', response.statusCode);
  console.log('Response Status Message: ', response.statusMessage);
  console.log('Response Content Type: ', response.headers['content-type']);
})
//.pipe(fs.createWriteStream('./future.jpg'));
// .on('end', function () {
//   console.log('Download Complete');
// })
};

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});
