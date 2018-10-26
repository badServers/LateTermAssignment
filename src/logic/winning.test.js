const winning = require('./winning');
//Horizontal winner
function X_winner_horizontal(expected){
   describe("Is X a winner horizontal?", () => {
     it("Should return an X (testing X horizontal)", () => 
       {
         expect(winning.isWinner(expected, "X",false)).toBe("X");
       });
   });
}

function X_winner_vertically(expected){
   describe("Is X a winner horizontal?", () => {
      it("Should return an X (testing X vertically)", () =>
        {
	  expect(winning.isWinner(expected, "X", false)).toBe("X");
        });
   });
}
//Horizontal testing
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
	        "X", "X", "X"
	       ];
X_winner_horizontal(testing_third_row_horizontal_X);
//Horizontal testing finished

//Vertical testing
var testing_first_row_vertically_X = 
	       ["X", "X", "O",
		"X", "O", "O",
		"X", "O", "X"
	       ];
X_winner_vertically(testing_first_row_vertically_X);

var testing_second_row_vertically_X = 
	       ["O", "X", "O",
	        "X", "X", "O",
		"O", "X", "X"
	       ]; 

X_winner_vertically(testing_second_row_vertically_X);
