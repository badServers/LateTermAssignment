const winning = require('./winning');
function X_winner_horizontal(expected){
   it("Should return an X (testing horizontal)", () => 
   {
     expect(winning.isWinner(expected, "X",false)).toBe("X");
   });
}

var testing_first_row_horizontal_X = ["X", "X", "X",
	         "O", "O", "X",
	         "O", "X", "O"
               ];

X_winner_horizontal(testing_first_row_horizontal_X);
