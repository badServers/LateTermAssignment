function fetchBoard() {
    var board =
        fetch("/api/game/gameboard/status")
            .then((resp) => resp.json())
            .then(function(data) {
                return data;
            });
    return board;
}

function renderBoard(board) {
    console.log(board);
}

module.exports = {
    fetchBoard,
    renderBoard
}
