const checkForWinner = require("./winning")
var playerTurn = "X";
var gameOver = false;
var winner = "";

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

function updateBoard(tile) {
    if (gameOver)
        return { "result": "Game is over" };

    if (board[tile] != "-")
        return { "result": "Tile taken" };

    board[tile] = playerTurn;
    checkForWinner.isWinner(board, playerTurn, gameOver);
    if(playerTurn === "X") {
      playerTurn = "O";
    }
    else if (playerTurn === "O") {
      playerTurn = "X";
    }

    return { "result": "Board updated" };
}

function resetBoard() {
    playerTurn = "X";

    for (var i = 0; i < 9; i++)
        board[i] = "-";

    return board;
}

function updateMessage() {
    if (gameOver) {
        if (winner == "X") {
            return { "result": "Winner is X!" };
        }
        else if (winner == "O") {
            return { "result": "Winner is O!" };
        }
        else {
            return { "result": "Draw!" };
        }
    }
    else {
        return { "result": playerTurn + ", it's your turn!" };
    }
}

module.exports = {
    boardStatus,
    updateBoard,
    resetBoard,
    updateMessage
}
