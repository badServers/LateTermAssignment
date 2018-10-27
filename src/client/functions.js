// Fetch board status from API
function fetchBoard() {
    var board =
        fetch("/api/game/gameboard/status")
            .then((resp) => resp.json())
            .then(function(data) {
                return data;
            });
    return board;
}

// Update the board in the browser
function renderBoard(board, boardStatus) {
    for (var i = 0; i < 9; i++) {
        if (boardStatus[i] == "X" || boardStatus[i] == "O") {
            $(board[i]).html('<p>' + boardStatus[i] + '</p>');
        }
        else {
            $(board[i]).html('<p></p>');
        }
    }
}

// Tile click event function
function tileClick(tile) {
    var response =
        fetch("/api/game/gameboard/updateBoard/" + tile)
            .then((resp) => resp.json())
            .then(function(data) {
                return data
            });
    return response;
}

function resetBoard() {
    var board =
        fetch("/api/game/gameboard/resetBoard")
            .then((resp) => resp.json())
            .then(function(data) {
                return data;
            });
    return board;
}

function fetchMessage() {
    var message =
        fetch("/api/game/gameboard/updateMessage")
            .then((resp) => resp.json())
            .then(function(data) {
                return data;
            });
    return message;
}

function updateMessage(banner, message) {
    console.log(message);
    $(banner).html(message);
}

module.exports = {
    fetchBoard,
    renderBoard,
    tileClick,
    resetBoard,
    fetchMessage,
    updateMessage
}
