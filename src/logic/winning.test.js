const winning = require('./winning');
//Testing functions for X
//Horizontal winner testing function for X
function X_winner_horizontal(expected){
   describe("Is X a winner horizontal?", () => {
     it("Should return an X (testing X horizontal)", () => 
       {
         expect(winning.isWinner(expected, "X",0)).toEqual( { "winner": "X"});
       });
     it("Should return an empty string if inserted O", () =>
       {
         expect(winning.isWinner(expected, "O", 0)).toEqual( { "winner": "X"} );
       });
   });
}
//Vertical winner testing function for X
function X_winner_vertically(expected){
   describe("Is X a winner vertically?", () => {
      it("Should return an X (testing X vertically)", () =>
        {
	  expect(winning.isWinner(expected, "X", 0)).toEqual( {"winner": "X"});
        });
      it("Should return an empty string if inserted O", () =>
        {
	  expect(winning.isWinner(expected, "O", 0)).toEqual( { "winner": ""} );
	});
   });
}
//Winning diagonally for X
function X_winner_diagonally(expected){
   describe("Is X a winner diagonally?", () => {
      it("Should return an X (testing X diagonally)", () =>
        {
	  expect(winning.isWinner(expected, "X", 0)).toEqual( {"winner": "X" });
	});
      it("Should return an empty string for input O (testing X diagonally", ()=>        {
	  expect(winning.isWinner(expected, "O", 0)).toEqual( {"winner": ""});
        });
   });
}
//End of testing functions for X
//Draw
function DrawTest(){
  describe("Is it a draw?", () => {
      it("Should return that there was a draw", () => {
    expect(winning.isWinner(draw,"X",9)).toEqual({ "winner": "Draw" });
  });
});
}
//Draw testing function end

//Testing functions for O
//Horizontal winner testing function
function O_winner_horizontally(expected){
   describe("Is O a winner horizontally? ", () => {
      it("Should return an O (testing O horizontally)", () =>
        {
	  expect(winning.isWinner(expected, "O", 0)).toEqual( { "winner": "O" } );
	});
      it("Should return an empty string if input is X (testing O horizontally)", () => 
	{
          expect(winning.isWinner(expected, "X", 0)).toEqual( {"winner": ""} );
	});
  });
}
//Vetical winner testing function
function O_winner_vertically(expected){
    describe("Is O a winner vertically?", () => {
       it("Should return an O (testing O vertically)", () =>
         {
	   expect(winning.isWinner(expected, "O", 0)).toEqual( {"winner": "O"} );
         });
       it("Should return an empty string if input is X (testing O vertically)" ,    () => 
	 {
          expect(winning.isWinner(expected, "X", false)).toEqual( {"winner": ""} );
	 });
    });
}
//Diagonally winner testing function
function O_winner_diagonally(expected){
    describe("Is O a winner diagonally?", () => {
       it("Should return an O (testing O diagonally)", () =>
	 {
          expect(winning.isWinner(expected, "O", 0)).toEqual( {"winner": "O"});
	 });
       it("Should return an empty string if input is X (testing X diagonally)" ,
       () =>
       {
	 expect(winning.isWinner(expected, "X", false)).toEqual( {"winner": ""});
       });
    });
};
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

//Diagonally testing for X
var testing_X_diagonally_from_left_top =
	["X", "X", "O",
	 "X", "X", "O",
	 "O", "O", "X"
	];
var testing_X_diagonally_from_left_bottom =
	["X", "O", "X",
	 "O", "X", "O",
	 "X", "O", "O"
	];
X_winner_diagonally(testing_X_diagonally_from_left_top);
X_winner_diagonally(testing_X_diagonally_from_left_bottom);
//Diagonally testing for X finished

//Diagonally testing for O
var testing_O_diagonally_from_left_top =
	["O", "X", "O",
	 "O", "O", "X",
         "X", "X", "O"
	];
var testing_O_diagonally_from_left_bottom = 
	["O", "X", "O",
	 "X", "O", "X",
	 "O", "X", "X"
	];
O_winner_diagonally(testing_O_diagonally_from_left_top);
O_winner_diagonally(testing_O_diagonally_from_left_bottom);
//Diagonally testing for O finished

//Draw test
const draw = ["X","O","X",
				"O","X","O",
				"O","X","O"];
DrawTest(draw);
//End Draw test





