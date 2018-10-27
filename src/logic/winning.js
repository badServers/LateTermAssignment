function isWinner(board, player, gameOver, round) {
  if(board[0] === player && board[1] === player && board[2] === player) {
    gameOver = true;
    return gameOver;
  }
  else if(board[3] === player && board[4] === player && board[5] === player) {
    gameOver = true;
    return gameOver;
  }
  else if(board[6] === player && board[7] === player && board[8] === player) {
    gameOver = true;
    return gameOver;
  }
  else if(board[0] === player && board[3] === player && board[6] === player) {
    gameOver = true;
    return gameOver;
  }
  else if(board[1] === player && board[4] === player && board[7] === player) {
    gameOver = true;
    return gameOver;
  }
  else if(board[2] === player && board[5] === player && board[8] === player) {
    gameOver = true;
    return gameOver;
  }
  else if(board[0] === player && board[4] === player && board[8] === player) {
    gameOver = true;
    return gameOver;
  }
  else if(board[2] === player && board[4] === player && board[6] === player) {
    gameOver = true;
    return gameOver;
  }
  else if(round === 9) {
	gameOver = true;
	return gameOver;
  }
  else {
    return false;
  }
}

module.exports = {
  isWinner
}
