const functions = require("./functions");

function loadBoard() {
    board = functions.fetchBoard();
    board.then(function(result) {
        functions.renderBoard(result);
    });
}

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

    loadBoard();

    board.on('click', function() {
		var tile = $(this);
		console.log(tile);
    });
});
