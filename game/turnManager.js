(function (global) {
  function turnNumber(turnCount) { return Math.max(1, (turnCount || 0) + 1); }
  function playerNumber(player) { return player === "Player2" ? 2 : 1; }
  global.AnimeRouletteTurnManager = { turnNumber, playerNumber };
})(window);
