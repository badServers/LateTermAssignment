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

  it("Should return that the game is over (true)", () => {
    expect(winning.isWinner(xWin,"X",false,5)).toBe(true);
  });
  it("Should return that the game is over (true)", () => {
    expect(winning.isWinner(oWin,"O",false,8)).toBe(true);
  });
  it("Should return that the game is not over (false)", () => {
    expect(winning.isWinner(noWin,"X",false,0)).toBe(false);
  });
  it("Should return that the game is over (true)", () => {
    expect(winning.isWinner(noWin,"X",false,9)).toBe(true);
  });
});
