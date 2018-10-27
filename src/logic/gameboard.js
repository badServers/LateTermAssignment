const checkForWinner = require("./winning")
var playerTurn = "X";
var gameOver = false;
var winner = "";
var round = 0;
var xScore = 0;
var oScore = 0;

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

function checkGameOver() {
    var result = checkForWinner.isWinner(board, playerTurn, round);

    if (result.winner != "") {
        gameOver = true;
        winner = result.winner;

        if (winner == "X") {
            xScore++;
        }
        else {
            oScore++;
        }
    }
    else if (result.winner == "Draw") {
        gameOver = true;
    }
}

function updateBoard(tile) {
    if (gameOver) {
        return { "result": "Game is over" };
    }

    if (board[tile] != "-") {
        return { "result": "Tile taken" };
    }

    board[tile] = playerTurn;
    round++;
    checkGameOver();

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
    gameOver = false;
    round = 0;
    xScore = 0;
    oScore = 0;

    for (var i = 0; i < 9; i++) {
        board[i] = "-";
    }

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

function updateScores() {
    return { "X": xScore, "O": oScore };
}

module.exports = {
    boardStatus,
    updateBoard,
    resetBoard,
    updateMessage,
    gameOverYet,
    updateScores
}
