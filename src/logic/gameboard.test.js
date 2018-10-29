const gameboard = require("./gameboard");

it("BoardStatus() should return the status of the board", () => {
    expect(gameboard.boardStatus()).toEqual({ 0: "-", 1: "-", 2: "-", 3: "-", 4: "-", 5: "-", 6: "-", 7: "-", 8: "-" });
});

it("gameOverYet() should return the gameOver variable value (false)", () => {
    expect(gameboard.gameOverYet()).toEqual({ "result": false });
});

it("updateBoard() should return the status of the board after updating tile", () => {
    expect(gameboard.updateBoard(0)).toEqual({ "result": "Board updated" });
});

it("ResetBoard() should reset the board to empty and return it", () => {
    expect(gameboard.resetBoard()).toEqual({ 0: "-", 1: "-", 2: "-", 3: "-", 4: "-", 5: "-", 6: "-", 7: "-", 8: "-" });
});

it("UpdateMessage() should return 'X, it's your turn' at the start of a game", () => {
    expect(gameboard.updateMessage()).toEqual({ "result": "X, it's your turn!" });
});

it("UpdateScores() X: 0, O: 0 at the start of a game", () => {
    expect(gameboard.updateScores()).toEqual({ "X": 0, "O": 0 });
});
