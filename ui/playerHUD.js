(function (global) {
  function displayName(player, fallback) { return player?.name || fallback; }
  global.AnimeRoulettePlayerHUD = { displayName };
})(window);
