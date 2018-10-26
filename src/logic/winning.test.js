const winning = require('./winning');

describe("Is X a Winner?", () => {
  const expected = ["X","X","X",
                    "O","O","X",
                    "O","X","O"];

  it("Should return an X (testing first row horizontal)", () => {
    expect(winning.isWinner(expected,"X",false)).toBe("X");
  });

  it("Should return an O (testing for first row horizontal)", () => {
     expect(winning.isWinner(expected, "O",false)).toBe("");
  });

  expected = ["O","X","O",
	      "X", "X", "X",
	      "O", "O", "X"];
  it("Should return an X (testing second row horizontal)", () => {
     expect(winning.isWinner(expected, "X", false)).toBe("X");
  });
  
  it("Should return an O")
});
