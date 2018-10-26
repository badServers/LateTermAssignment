const winning = require('./winning');

describe("isWinner", () => {
  const expected = ["X","X","",
                    "O","O","",
                    "","",""];
  it("Should return an empty string", () => {
    expect(winning.isWinner(expected,"X",false)).toBe("");
  });
});
