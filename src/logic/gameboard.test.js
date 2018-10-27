const gameboard = require("./gameboard");

it("BoardStatus() should return the status of the board", () => {
    expect(gameboard.boardStatus()).toEqual({ 0: "-", 1: "-", 2: "-", 3: "-", 4: "-", 5: "-", 6: "-", 7: "-", 8: "-" });
});

it("gameOverYet() should return the gameOver variable value (false)", () => {
    expect(gameboard.gameOverYet()).toBe(false);
});

it("updateBoard() should return the status of the board after updating tile", () => {
    expect(gameboard.updateBoard(0)).toEqual({ "result": "Board updated" });
});
