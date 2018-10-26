const winning = require('./winning');
//Testing functions for X
//Horizontal winner testing function for X
function X_winner_horizontal(expected){
   describe("Is X a winner horizontal?", () => {
     it("Should return an X (testing X horizontal)", () => 
       {
         expect(winning.isWinner(expected, "X",false)).toBe("X");
       });
     it("Should return an empty string if inserted O", () =>
       {
         expect(winning.isWinner(expected, "O", false)).toBe("");
       });
   });
}
//Vertical winner testing function for X
function X_winner_vertically(expected){
   describe("Is X a winner vertically?", () => {
      it("Should return an X (testing X vertically)", () =>
        {
	  expect(winning.isWinner(expected, "X", false)).toBe("X");
        });
      it("Should return an empty string if inserted O", () =>
        {
	  expect(winning.isWinner(expected, "O", false)).toBe("");
	});
   });
}
//Winning diagonally for X
function X_winner_diagonally(expected){
   describe("Is X a winner diagonally?", () => {
      it("Should return an X (testing X diagonally)", () =>
        {
	  expect(winning.isWinner(expected, "X", false)).toBe("X");
	});
      it("Should return an empty string for input O (testing X diagonally", ()=>        {
	  expect(winning.isWinner(expected, "O", false)).toBe("");
        });
   });
}

//End of testing functions for X

//Testing functions for O
//Horizontal winner testing function
function O_winner_horizontally(expected){
   describe("Is O a winner horizontally? ", () => {
      it("Should return an O (testing O horizontally)", () =>
        {
	  expect(winning.isWinner(expected, "O", false)).toBe("O");
	});
      it("Should return an empty string if input is X (testing O horizontally)", () => 
	{
          expect(winning.isWinner(expected, "X", false)).toBe("");
	});
  });
}
//Vetical winner testing function
function O_winner_vertically(expected){
    describe("Is O a winner vertically?", () => {
       it("Should return an O (testing O vertically)", () =>
         {
	   expect(winning.isWinner(expected, "O", false)).toBe("O");
         });
       it("Should return an empty string if input is X (testing O vertically)" ,    () => 
	 {
          expect(winning.isWinner(expected, "X", false)).toBe("");
	 });
    });
}
//End of testing functions for O

//Horizontal testing for X
var testing_first_row_horizontal_X = 
	       ["X", "X", "X",
	         "O", "O", "X",
	         "O", "X", "O"
               ];
var testing_second_row_horizontal_X =
	       ["O", "X", "O",
	        "X", "X", "X",
	        "O", "O", "X"
	       ];
var testing_third_row_horizontal_X = 
	       ["O", "X", "X",
	        "X", "O", "O",
	        "X", "X", "X"
	       ];
X_winner_horizontal(testing_first_row_horizontal_X);
X_winner_horizontal(testing_second_row_horizontal_X);
X_winner_horizontal(testing_third_row_horizontal_X);
//Horizontal testing finished for X

//Vertical testing for X
var testing_first_row_vertically_X = 
	       ["X", "X", "O",
		"X", "O", "O",
		"X", "O", "X"
	       ];
var testing_second_row_vertically_X = 
	       ["O", "X", "O",
	        "X", "X", "O",
		"O", "X", "X"
	       ]; 
var testing_third_row_vertically_X =
	      ["O", "X", "X",
	       "X", "O", "X",
	       "X", "O", "X"
	      ];
X_winner_vertically(testing_first_row_vertically_X);
X_winner_vertically(testing_second_row_vertically_X);
X_winner_vertically(testing_third_row_vertically_X);

//Vertical testing for X finished

//Horizontal testing for O
var testing_first_row_horizontally_O = 
	      ["O", "O", "O",
	       "X", "X", "O",
	       "O", "O", "X"
	      ];
var testing_second_row_horizontally_O =
	     ["X", "O", "X",
	      "O", "O", "O",
	      "X", "X", "O"
	     ];
var testing_third_row_horizontally_O =
	    ["X", "O", "X",
	     "O", "X", "O",
	     "O", "O", "O"];

O_winner_horizontally(testing_first_row_horizontally_O);
O_winner_horizontally(testing_second_row_horizontally_O);
O_winner_horizontally(testing_third_row_horizontally_O);
//Horizontal testing for O finished

//Vertical testing for O
var testing_first_row_vertically_O =
	["O", "X", "X",
	 "O", "X", "O",
	 "O", "O", "X"
	];
var testing_second_row_vertically_O =
	["X", "O", "X",
	 "O", "O", "X",
	 "X", "O", "O"
	];
var testing_third_row_vertically_O =
	["X", "O", "O",
	 "X", "X", "O",
	 "O", "X", "O"
	];

O_winner_vertically(testing_first_row_vertically_O);
O_winner_vertically(testing_second_row_vertically_O);
O_winner_vertically(testing_third_row_vertically_O);
//Vertical testing for O finished










