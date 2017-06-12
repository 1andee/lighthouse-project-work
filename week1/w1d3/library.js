var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function (library) {
  for (key in library.playlists) {
    var playlist = library.playlists[key];
     console.log(`${key}: ${playlist.name} - ${playlist.tracks.length} tracks`);
  }
};

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function (library) {
  for (key in library.tracks) {
    var track = library.tracks[key];
    console.log(`${track.id} : ${track.name} by ${track.artist} (${track.album})`);
  }
}

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var playlist = library.playlists[playlistId];
  console.log(`${playlistId}: ${playlist.name} - ${playlist.tracks.length} tracks`);

  var songsInPlayList = [];

  for (song in playlist.tracks) {
    songsInPlayList.push(playlist.tracks[song]);
  }

  for (value of songsInPlayList) {
    console.log(`${[value]}: ${library.tracks[value].name} by ${library.tracks[value].artist} (${library.tracks[value].album})`);
  }
}

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
library.playlists[playlistId].tracks.push(trackId)
}

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library

var addTrack = function (name, artist, album) {
  newObj = {}
  newObj.id = uid();
  newObj.name = name;
  newObj.artist = artist;
  newObj.album = album;
  library.tracks[newObj.id] = newObj;
}

// adds a playlist to the library

var addPlaylist = function (name) {
  newPlaylist = {}
  newPlaylist.id = uid();
  newPlaylist.name = name;
  newPlaylist.tracks = [];
  library.playlists[newPlaylist.id] = newPlaylist;
}

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
//
// var printSearchResults = function(query) {
//
// }
