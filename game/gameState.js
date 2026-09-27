(function (global) {
  function createGameState() {
    return {
      roomId: "",
      status: "waiting",
      currentTurn: 1,
      turnNumber: 1,
      players: {
        player1: { name: "", team: [], roles: {} },
        player2: { name: "", team: [], roles: {} }
      },
      availableCharacters: [],
      selectedCharacters: [],
      momentum: { player1: 0, player2: 0 },
      winner: null
    };
  }

  function syncGameState(gameState, roomData, runtimeState, scores) {
    const p1Roles = roomData?.players?.Player1?.slots || {};
    const p2Roles = roomData?.players?.Player2?.slots || {};
    const bothTeamsReady = Object.keys(p1Roles).length === 7 && Object.keys(p2Roles).length === 7;
    const p1Name = roomData?.players?.Player1?.name || "";
    const p2Name = roomData?.players?.Player2?.name || "";

    gameState.roomId = runtimeState.room || "";
    gameState.status = bothTeamsReady ? "complete" : (p1Name && p2Name ? "active" : "waiting");
    gameState.currentTurn = roomData?.turn === "Player2" ? 2 : 1;
    gameState.turnNumber = Math.max(1, (roomData?.turnCount || 0) + 1);
    gameState.players.player1 = { name: p1Name, team: Object.values(p1Roles), roles: p1Roles };
    gameState.players.player2 = { name: p2Name, team: Object.values(p2Roles), roles: p2Roles };
    gameState.availableCharacters = [...(runtimeState.characters || [])];
    gameState.selectedCharacters = [...Object.values(p1Roles), ...Object.values(p2Roles)];
    gameState.momentum.player1 = roomData?.momentum?.Player1 || 0;
    gameState.momentum.player2 = roomData?.momentum?.Player2 || 0;
    gameState.winner = bothTeamsReady && scores
      ? (scores.player1 === scores.player2 ? "tie" : (scores.player1 > scores.player2 ? "player1" : "player2"))
      : null;
    return gameState;
  }

  global.AnimeRouletteGameState = { createGameState, syncGameState };
})(window);
