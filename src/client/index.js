const turnFunctions = require("../logic/playerturn");
const playAgainButton = require("../logic/playAgain");
$(document).ready(function() {

    // DOM Objects
    var message = $('#message-banner');
    var board = $('#board-container div');
    var resetButton = $('#reset-button');
    var xScoreText = $('#x-score');
    var oScoreText = $('#o-score');
    // Variables
    var player = "X";
    var gameOver = false;
    var draw = false;
    var winner = "";
    var xScore = 0;
    var oScore = 0;
    var counter = 0;

	// Board click event
    board.on('click', function() {
		var tile = $(this);
		turnFunctions.playerTurn(tile, gameOver, player);
		player = turnFunctions.changePlayer(player);
    });

    resetButton.on('click', function () {
      playAgainButton.playAgain(xScore, oScore, player, counter);
    });

});
