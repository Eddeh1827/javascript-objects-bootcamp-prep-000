var playlist = {
  'Jay Z': 'Big Pimpin\'',
  'Kanye West': 'Jesus Walks'
};
function updatePlaylist(playlist,artistName,songTitle) {
  return Object.assign({}, playlist, { ['Phil Ochs', "Here's to the State of Mississippi"] })
};
function removeFromPlaylist(Obj,artistName) {
  delete playlist.artistName.Kanye
}
