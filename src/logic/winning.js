function isWinner(board, player, gameOver) {
  if(board[0].innerText === player && board[1].innerText === player && board[2].innerText === player) {
    gameOver = true;
    return player;
  }
  else if(board[3].innerText === player && board[4].innerText === player && board[5].innerText === player) {
    gameOver = true;
    return player;
  }
  else if(board[6].innerText === player && board[7].innerText === player && board[8].innerText === player) {
    gameOver = true;
    return player;
  }
  else if(board[0].innerText === player && board[3].innerText === player && board[6].innerText === player) {
    gameOver = true;
    return player;
  }
  else if(board[1].innerText === player && board[4].innerText === player && board[7].innerText === player) {
    gameOver = true;
    return player;
  }
  else if(board[2].innerText === player && board[5].innerText === player && board[8].innerText === player) {
    gameOver = true;
    return player;
  }
  else if(board[0].innerText === player && board[4].innerText === player && board[8].innerText === player) {
    gameOver = true;
    return player;
  }
  else if(board[2].innerText === player && board[4].innerText === player && board[6].innerText === player) {
    gameOver = true;
    return player;
  }
  else {
    return "";
  }
}

module.exports = {
  isWinner
}
