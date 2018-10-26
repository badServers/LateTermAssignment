function playAgain(xScore, oScore, player, counter){
  xScore = 0;
  oScore = 0;
  player = 'X';
  counter = 0;
var board = $('#board-container div');
  board.find('p').each(function(){
    $(this).removeClass('cleantable');
  });
  $("#board-container p").remove();

  return player;
}
module.exports = {
  playAgain
}
