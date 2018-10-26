const winning = require('./winning');
//Horizontal winner
describe("Is X a winner horizontal?", () => {
  var expected = ["X","X","X",
                    "O","O","X",
                    "O","X","O"];

  it("Should return an X (testing first row horizontal)", () => 
  {
    expect(winning.isWinner(expected,"X",false)).toBe("X");
  });

  it("Should return an empty string if O (testing for first row horizontal)", ()  => {
     expect(winning.isWinner(expected, "O",false)).toBe("");
  });

  expected = ["O","X","O",
	      "X", "X", "X",
	      "O", "O", "X"];
  it("Should return an X (testing second row horizontal)", () => 
  {
     expect(winning.isWinner(expected, "X", false)).toBe("X");
  });
  
  it("Should return an empty string if O (testing second row horizontal", () =>   {
      expect(winning.isWinner(expected, "O", false)).toBe("");
  });
  
  expected = ["O","X", "X",
              "X", "O", "O",
               "X", "X", "X"];
  
  it("Should return an X (testing third row horizontal)", () => 
  {
      expect(winning.isWinner(expected, "X", false)).toBe("X");
  });
  
  it("Should return an empty string if O (testing third row horizontal)", () =>   {
      expect(winning.isWinner(expected, "O", false)).toBe("");
  });
  
});
//Vertically winner
describe("Is X a winner vertically?", () => {
    var expected = ["X","O","X",
                    "X", "X", "O",
                    "X", "X", "X"];
   it("Should return an X (testing first row vertically)", () => 
    {
        expect(winning.isWinner(expected, "X", false)).toBe("X");
    });
    
    it("Should return an empty string if O (testing first row vertically)",() =>    {
       expect(winning.isWinner(expected, "O", false)).toBe("");	   
    });

    expected = ["O", "X", "X",
                "O", "X", "O",
                "X", "X", "X"];
    
    it("Should return an X (testing second row vertically)", () =>
     {
	 expect(winning.isWinner(expected, "X", false)).toBe("X");
     });

     it("Should return an empty string (testing second row vertically)", () =>
     {
          expect(winning.isWinner(expected, "O", false)).toBe("");
     });
});
