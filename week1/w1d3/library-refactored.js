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
             },


// prints a list of current playlists
printPlaylists: function () {
   for (key in this.playlists) {
     var playlist = this.playlists[key];
     console.log(`${key}: ${playlist.name} - ${playlist.tracks.length} tracks`);
   }
 },

// prints a list of tracks
printTracks: function () {
   for (key in this.tracks) {
     var track = this.tracks[key];
     console.log(`${track.id} : ${track.name} by ${track.artist} (${track.album})`);
   }
 },

 // prints a list of tracks for a given playlist
printPlaylist: function (playlistId) {
   var playlist = this.playlists[playlistId];
   console.log(`${playlistId}: ${playlist.name} - ${playlist.tracks.length} tracks`);

   var songsInPlayList = [];

   for (song in playlist.tracks) {
     songsInPlayList.push(playlist.tracks[song]);
   }

   for (value of songsInPlayList) {
     console.log(`${[value]}: ${this.tracks[value].name} by ${this.tracks[value].artist} (${this.tracks[value].album})`);
   }
 },

 //adds an existing track to an existing playlist
addTrackToPlaylist: function (trackId, playlistId) {
   this.playlists[playlistId].tracks.push(trackId)
 },

// generates random string for new track or playlist IDs
uid: function() {
   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
 },

// adds a new track to the library
addTrack: function (name, artist, album) {
   newObj = {}
   newObj.id = uid();
   newObj.name = name;
   newObj.artist = artist;
   newObj.album = album;
   this.tracks[newObj.id] = newObj;
 },

// adds a new playlist to the library
addPlaylist: function (name) {
   newPlaylist = {}
   newPlaylist.id = uid();
   newPlaylist.name = name;
   newPlaylist.tracks = [];
   this.playlists[newPlaylist.id] = newPlaylist;
 }

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
