(function (global) {
  function cloneCharacters(characters) { return [...(characters || [])]; }
  global.AnimeRouletteCharacters = { cloneCharacters };
})(window);
