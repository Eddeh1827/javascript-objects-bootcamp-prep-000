var playlist = {};
function updatePlaylist(playlist,artistName,songTitle) {
  return Object.assign({}, { ['Phil Ochs', "Here's to the State of Mississippi"] })
};
function removeFromPlaylist(playlist,artistName) {
  delete playlist.artistName
}
