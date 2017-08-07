# Github Avatar Downloader

## Challenge
Build a command-line HTTP client that will request the avatars for all contributors to a given project on GitHub, and download them to disk.

## Usage
1. Fork and clone this repository.
2. Run `npm install` to download the required dependencies.
3. Enter your GitHub account and your GitHub API personal access token in the `.env.example` file. Rename this file `.env` once this has been completed.
4. Execute the program from the command line in the following manner:
`node download_avatars.js <account> <reponame>`

Any valid repo-owner & repo combination can be used, for example:
`node download_avatars.js jquery jquery`
`node download_avatars.js 1andee pairwise`

5. A subdirectory named 'avatars' will be created and images of all repo contributors will be downloaded into this folder.

## Dependencies
- dotenv
- request
