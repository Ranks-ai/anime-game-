(function (global) {
  function countSeries(team, seriesMap) { return (team || []).reduce((counts, character) => { const series = seriesMap?.[character.name]; if (series) counts[series] = (counts[series] || 0) + 1; return counts; }, {}); }
  global.AnimeRouletteSynergy = { countSeries };
})(window);
