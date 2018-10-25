function playerTurn(tile, gameOver, player) {
	if (tile.attr('class') !== 'played' && gameOver === false) {
		tile.html('<p>' + player + '</p>');
		tile.addClass('played');
	}
}

function changePlayer(player) {
	if (player === "X") {
		return "O";
	}
	return "X";
}

module.exports = {
	playerTurn,
	changePlayer
}