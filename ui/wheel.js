(function (global) {
  function rarityForScore(score) { return score >= 10 ? "legendary" : score >= 9 ? "epic" : score >= 8 ? "rare" : score >= 7 ? "uncommon" : "common"; }
  global.AnimeRouletteWheel = { rarityForScore };
})(window);
