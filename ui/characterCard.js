(function (global) {
  function teamCardData(character, role, score) { return { character, role, score, ability: character?.ability, passive: character?.passiveAbility }; }
  global.AnimeRouletteCharacterCard = { teamCardData };
})(window);
