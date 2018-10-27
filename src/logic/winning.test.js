const winning = require('./winning');

describe("isWinner", () => {
  const xWin = ["X","X","X",
                "O","O","-",
                "-","-","-"];
  const oWin = ["X","X","O",
                "O","O","X",
                "O","X","-"];
  const noWin = ["","","",
                 "","","",
                 "","",""];
  const draw = ["X","O","X",
				"O","X","O",
				"O","X","O"];

  it("Should return that the winner is X", () => {
    expect(winning.isWinner(xWin,"X",5)).toEqual({ "winner": "X" });
  });
  it("Should return that the winner is O", () => {
    expect(winning.isWinner(oWin,"O",8)).toEqual({ "winner": "O" });
  });
  it("Should return that the game is not over", () => {
    expect(winning.isWinner(noWin,"X",0)).toEqual({ "winner": "" });
  });
  it("Should return that there was a draw", () => {
    expect(winning.isWinner(draw,"X",9)).toEqual({ "winner": "Draw" });
  });
});
