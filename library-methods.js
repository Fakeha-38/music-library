// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function () {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};
const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three",
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003",
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952",
    },
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] },
  },
  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  printPlaylists: function () {
  let playlists = this.playlists;
  for (let p in playlists) {
    console.log(
      `${p}: ${playlists[p].name} - ${playlists[p].tracks.length} tracks`,
    );
  }
},
// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
printTracks: function () {
  let tracks = this.tracks;
  for (let t in tracks) {
    console.log(
      `${t}: ${tracks[t].name} by ${tracks[t].artist} (${tracks[t].album})`,
    );
  }
},

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
printPlaylist: function (playlistId) {
  let playlist = this.playlists[playlistId];
  console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length}`);
  let trackList = playlist.tracks;
  for (let t in trackList) {
    let track = trackList[t];
    console.log(
      `${track}: ${this.tracks[track].name} by ${this.tracks[track].artist} (${this.tracks[track].album})`,
    );
  }
},
// adds an existing track to an existing playlist
addTrackToPlaylist: function (trackId, playlistId) {
  let playlist = this.playlists[playlistId];
  playlist.tracks.push(trackId);
},
// adds a track to the library
addTrack: function (name, artist, album) {
  let trackId = generateUid();
  trackId = "t" + trackId;
  this.tracks[trackId] = {
    id: trackId,
    name: name,
    artist: artist,
    album: album,
  };
},
// adds a playlist to the library
addPlaylist: function (name) {
  let newPlaylistId = generateUid();
  newPlaylistId = "p" + newPlaylistId;
  library.playlists[newPlaylistId] = {
    id: newPlaylistId,
    name: name,
    tracks: [],
  };
}
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////


console.log("========================");
console.log("Print Playlists Function:");
library.printPlaylists();
console.log("========================");
console.log("Print Track Function:");
library.printTracks();
console.log("========================");
console.log("Print Pkaylist (Detailed) Function:");
library.printPlaylist("p01");
console.log("========================");
console.log("Add an existing track to an existing playlist:");
library.addTrackToPlaylist("t01", "p02");
console.log(library.playlists.p02);
console.log("========================");
library.addTrack("Royals", "Lorde", "Royals");
console.log(library.tracks);
console.log("========================");
console.log("Add a playlist to the library:");
library.addPlaylist("My New Playlist");
console.log(library.playlists);
console.log("========================");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
// const printSearchResults = function (query) {};
