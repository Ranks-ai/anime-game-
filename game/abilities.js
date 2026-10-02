(function (global) {
  function abilityLabel(character) { return character?.ability?.name || character?.passiveAbility?.name || "No Ability"; }
  global.AnimeRouletteAbilities = { abilityLabel };
})(window);
