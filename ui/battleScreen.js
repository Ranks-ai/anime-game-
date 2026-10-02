(function (global) {
  function scoreLabel(score) { return `${Math.floor(score || 0)} pts`; }
  global.AnimeRouletteBattleScreen = { scoreLabel };
})(window);
