const winning = require('./winning');
function X_winner_horizontal(expected){
   describe("Is X a winner horizontal?", () => {
     it("Should return an X (testing horizontal)", () => 
       {
         expect(winning.isWinner(expected, "X",false)).toBe("X");
       });
   });
}

var testing_first_row_horizontal_X = 
	       ["X", "X", "X",
	         "O", "O", "X",
	         "O", "X", "O"
               ];

X_winner_horizontal(testing_first_row_horizontal_X);

var testing_second_row_horizontal_X =
	       ["O", "X", "O",
	        "X", "X", "X",
	        "O", "O", "X"
	       ];
X_winner_horizontal(testing_second_row_horizontal_X);

var testing_third_row_horizontal_X = 
	       ["O", "X", "X",
	        "X", "O", "O",
	        "X", "X", "X"];
X_winner_horizontal(testing_third_row_horizontal_X);
