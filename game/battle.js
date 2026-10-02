(function (global) {
  function resolveWinner(player1Score, player2Score) { return player1Score === player2Score ? "tie" : (player1Score > player2Score ? "player1" : "player2"); }
  global.AnimeRouletteBattle = { resolveWinner };
})(window);
