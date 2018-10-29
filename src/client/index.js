const functions = require("./functions");

$(document).ready(function() {
    // DOM Objects
    var banner = $('#message-banner');
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

    function updateBanner() {
        var message = functions.fetchMessage();
        message.then(function(result) {
            functions.updateMessage(banner, result.result);
        });
    }

    function updateScores() {
        var scores = functions.fetchScores();
        scores.then(function(result) {
            functions.updateScores(xScoreText, oScoreText, result);
        });
    }

    loadBoard();

    // Gameboard on click event
    if(!functions.gameOverYet()) {
      board.on('click', function() {
          var response = functions.tileClick($(this)[0].id);
          response.then(function(result) {
              if (result.result == "Board updated") {
                  loadBoard();
              }
          });
          updateBanner();
      });
    }

    resetButton.on('click', function () {
        var boardStatus = functions.resetBoard();
        boardStatus.then(function(result) {
            functions.renderBoard(board, result);
        });
        updateBanner();
        updateScores();
    });
});
