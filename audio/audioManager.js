(function (global) {
  function clampVolume(value) { return Math.max(0, Math.min(1, value)); }
  global.AnimeRouletteAudioManager = { clampVolume };
})(window);
