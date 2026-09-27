(function (global) {
  function roomRef(db, roomId) { return db.ref(`rooms/${roomId}`); }
  global.AnimeRouletteRoom = { roomRef };
})(window);
