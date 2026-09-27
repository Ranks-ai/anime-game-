(function (global) {
  function applyPenalties(score, skipPenalty, teamDebuff) { return score - (skipPenalty || 0) - (teamDebuff || 0); }
  global.AnimeRouletteScoring = { applyPenalties };
})(window);
