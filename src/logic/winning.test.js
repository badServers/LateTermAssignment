const winning = require('./winning');

describe("Is X a winner horizontal?", () => {
  var expected = ["X","X","X",
                    "O","O","X",
                    "O","X","O"];

  it("Should return an X (testing first row horizontal)", () => {
    expect(winning.isWinner(expected,"X",false)).toBe("X");
  });

  it("Should return an empty string (testing for first row horizontal)", () => {
     expect(winning.isWinner(expected, "O",false)).toBe("");
  });

  expected = ["O","X","O",
	      "X", "X", "X",
	      "O", "O", "X"];
  it("Should return an X (testing second row horizontal)", () => {
     expect(winning.isWinner(expected, "X", false)).toBe("X");
  });
  
  it("Should return an empty string (testing second row horizontal", () => {
      expect(winning.isWinner(expected, "O", false)).toBe("");
  });
  
  expected = ["O","X", "X",
              "X", "O", "O",
               "X", "X", "X"];
  
  it("Should return an X (testing third row horizontal)", () => {
      expect(winning.isWinner(expected, "X", false)).toBe("X");
  });
  
  it("Should return an empty string (testing third row horizontal)", () => {
      expect(winning.isWinner(expected, "O", false)).toBe("");
  });
  
});


