(function (global) {
  function isComplete(roles) { return Object.keys(roles || {}).length === 7; }
  function nextPlayer(player) { return player === "Player1" ? "Player2" : "Player1"; }
  global.AnimeRouletteGameEngine = { isComplete, nextPlayer };
})(window);
