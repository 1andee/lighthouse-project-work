# Github Avatar Downloader

## Challenge
Build a command-line HTTP client that will request the avatars for all contributors to a given project on GitHub, and download them to disk.

## Usage
The program is executed from the command line in the following manner:
```node download_avatars.js jquery jquery```

Any valid repo-owner + repo combination can be used, such as this:
```node download_avatars.js nodejs node```

A new subdirectory named 'avatars' will be created and images of all repo contributors will be downloaded into this folder.
