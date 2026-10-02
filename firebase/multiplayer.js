(function (global) {
  function playerKey(playerNumber) { return playerNumber === 2 ? "Player2" : "Player1"; }
  global.AnimeRouletteMultiplayer = { playerKey };
})(window);
