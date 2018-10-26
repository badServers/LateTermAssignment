const winning = require('./winning');
function X_winner_horizontal(expected){
   it("Should return an X (testing first row horizontal)", () => 
   {
     expect(winning.isWinner(expected, "X",false)).toBe("X");
   });
}

var expected = ["X", "X", "X",
	         "O", "O", "X",
	         "O", "X", "O"
               ];

X_winner_horizontal(expected);
