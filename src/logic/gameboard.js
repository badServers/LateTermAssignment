const checkForWinner = require("./winning")
var playerTurn = "X";
var gameOver = false;
var round = 0;
var board = {
    0: "-",
    1: "-",
    2: "-",
    3: "-",
    4: "-",
    5: "-",
    6: "-",
    7: "-",
    8: "-",
    9: "-",
}

function boardStatus() {
    return board;
}

function gameOverYet() {
  return gameOver;
}

function updateBoard(tile) {
    if (gameOver)
        return { "result": "Game is over" };

    if (board[tile] != "-")
        return { "result": "Tile taken" };

    board[tile] = playerTurn;
    gameOver = checkForWinner.isWinner(board, playerTurn, gameOver, round);
    if(playerTurn === "X") {
      playerTurn = "O";
    }
    else if (playerTurn === "O") {
      playerTurn = "X";
    }
    round++;
    return { "result": "Board updated" };
}

function resetBoard() {
    playerTurn = "X";
    gameOver = false;
    round = 0;

    for (var i = 0; i < 9; i++)
        board[i] = "-";

    return board;
}

module.exports = {
    boardStatus,
    updateBoard,
    resetBoard,
    gameOverYet
}
