var gameOver = false;
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

function updateBoard(tile, player) {
    if (gameOver)
        return { "result": "Game is over" };

    if (board[tile] != "-")
        return { "result": "Tile taken" };

    board[tile] = '"' + player + '"';
    return { "result": "Board updated" };
}

module.exports = {
    boardStatus,
    updateBoard
}
