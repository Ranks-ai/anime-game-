(function (global) {
  function replayClass(element, className) { if (!element) return; element.classList.remove(className); void element.offsetWidth; element.classList.add(className); }
  global.AnimeRouletteAnimations = { replayClass };
})(window);
