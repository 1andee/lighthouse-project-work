# Github Avatar Downloader

## Challenge
Build a command-line HTTP client that will request the avatars for all contributors to a given project on GitHub, and download them to disk.

## Usage
The program is executed from the command line in the following manner:
```
GITHUB_USER=<Your Username> GITHUB_TOKEN=<Your API Token> node download_avatars.js jquery jquery
```

Any valid repo-owner + repo combination can be used, such as this:
```
GITHUB_USER=<Your Username> GITHUB_TOKEN=<Your API Token> node download_avatars.js nodejs node
```

A subdirectory named 'avatars' will be created and images of all repo contributors will be downloaded into this folder.
