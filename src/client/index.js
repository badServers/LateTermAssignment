const functions = require("./functions");
const isGameOver = require("../logic/gameboard");

$(document).ready(function() {
    // DOM Objects
    var message = $('#message-banner');
    var board = $('#board-container div');
    var resetButton = $('#reset-button');
    var xScoreText = $('#x-score');
    var oScoreText = $('#o-score');

    // Fetches board status from API and renders it
    function loadBoard() {
        boardStatus = functions.fetchBoard();
        boardStatus.then(function(result) {
            functions.renderBoard(board, result);
        });
    }

    loadBoard();

    // Gameboard on click event
    if(!isGameOver.gameOverYet()) {
      board.on('click', function() {
          var response = functions.tileClick($(this)[0].id);
          response.then(function(result) {
              if (result.result == "Board updated") {
                  loadBoard();
              }
          });
      });
    }

    resetButton.on('click', function () {
        var boardStatus = functions.resetBoard();
        boardStatus.then(function(result) {
            functions.renderBoard(board, result);
        });
    });
});
