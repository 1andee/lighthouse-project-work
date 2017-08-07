# Github Avatar Downloader

## Challenge
Build a command-line HTTP client that will request the avatars for all contributors to a given project on GitHub, and download them to disk.

## Usage
1. Fork and clone this repository.
2. Run `npm install` to download the required dependencies.
3. Enter your GitHub account and your GitHub API personal access token in the `.env.example` file. Rename this file `.env` once this has been completed.
4. Execute the program from the command line in the following manner:  
   ```node download_avatars.js <account> <reponame>```

   Any valid repo-owner & repo combination can be used, for example:  
   ```node download_avatars.js jquery jquery```  
   ```node download_avatars.js 1andee pairwise```

5. A subdirectory named 'avatars' will be created and images of all repo contributors will be downloaded into this folder.

## Dependencies
- dotenv
- request

## Problem Statement
Given a GitHub repository name and owner, download all the contributors' profile images and save them to a subdirectory, avatars/.

## User Stories
As an open source project leader, I want a folder with the avatars of all of my github project's contributors  so that I can use them in a website.

## Functional Requirements
- When I execute your file using node, providing a github user and repository as command-line arguments For example: $ node download_avatars.js nodejs node, then I should find a folder called avatars in my current directory.
- The avatars folder should contain images corresponding to the avatars of the contributors of the repo.
- The name of each image file should be the contributor's name and the file extension (ex. johnny.png).
- Program uses 'request' npm library to make the HTTP requests
- Program uses git for version control
