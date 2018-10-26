const turnFunctions = require("../logic/playerturn");
<<<<<<< HEAD
const playAgainButton = require("../logic/playAgain");
=======
const winning = require("../logic/winning");
>>>>>>> 0dd45ad9addee737d633bebf7a180913a8307088
$(document).ready(function() {

    // DOM Objects
    var message = $('#message-banner');
    var board = $('#board-container div');
    var resetButton = $('#reset-button');
    var xScoreText = $('#x-score');
    var oScoreText = $('#o-score');
<<<<<<< HEAD
=======

>>>>>>> 0dd45ad9addee737d633bebf7a180913a8307088
    // Variables
    var player = "X";
    var gameOver = false;
    var draw = false;
    var winner = "";
    var xScore = 0;
    var oScore = 0;
<<<<<<< HEAD
    var counter = 0;
=======
>>>>>>> 0dd45ad9addee737d633bebf7a180913a8307088

	// Board click event
    board.on('click', function() {
		var tile = $(this);
		turnFunctions.playerTurn(tile, gameOver, player);
		winner = winning.isWinner(board, player, gameOver);
		if(winner == "") {
		    player = turnFunctions.changePlayer(player);
		}
		else {
		    console.log("Winner is " + winner);
		}
    });
<<<<<<< HEAD

    resetButton.on('click', function () {
      playAgainButton.playAgain(xScore, oScore, player, counter);
    });

=======
>>>>>>> 0dd45ad9addee737d633bebf7a180913a8307088
});
