require('dotenv').config();
var https = require('https');
var request = require('request');
var fs = require('fs');

// User's GitHub username and API token required:
var GITHUB_USER = process.env.GITHUB_USER;
var GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Error handling for .env params
if (!process.env.GITHUB_USER ||
    !process.env.GITHUB_TOKEN ) {
      console.log("=============================================================")
      console.log("Error: Your GitHub username & token are required in .env file");
      console.log("=============================================================")
      return;
    };

// Takes the user-supplied account and repo from Command Line to generate request:
var userInput = process.argv.slice(2);
var githubAccount = userInput[0];
var githubRepo = userInput[1];

// Error handling for user-supplied account/repo params
if (userInput.length !== 2) {
  console.log('============================================================')
  console.log('Error: Please provide a valid GitHub account and Repository.');
  console.log('       The required inputs are: <owner> <repo>');
  console.log('============================================================')
  return;
};


console.log('Welcome to the GitHub Avatar Downloader! Commencing download in 3...2...1...');

function getRepoContributors(owner, repo, callback) {

  // Creates URL for HTTP GET Request using requestor's username and API token
  // and desired repository account / repo name to pull thumbnails from:
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + owner + '/' + repo + '/contributors';

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
};

// Iterates through JSON data, passing avatar URL and user ID into downloadImageByURL():
getRepoContributors(githubAccount, githubRepo, function(error, response) {
  if (response.message === 'Not Found') {
    console.log('==================================================')
    console.log('Error: That account/repository couldn\'t be found.');
    console.log('       Please try again.');
    console.log('==================================================')
    return;
  }
  if (response.message === 'Bad credentials') {
    console.log('========================================================')
    console.log('Error: Your GitHub API token wasn\'t recognized.');
    console.log('       Change the token in your .env file and try again.');
    console.log('========================================================')
    return;
  }
  if (error) {
    throw error;
    return;
  };

  if (!fs.existsSync('./avatars/')) {
    fs.mkdirSync('./avatars/')
    console.log ("Folder './avatars/' has been created");
  };

  response.forEach(function (response) {
    downloadImageByURL(response.avatar_url, response.login);
    console.log('Downloading avatar for contributor ' + response.login)
  });
  console.log('Avatars for all contributors downloaded. Have a nice day!');
});
