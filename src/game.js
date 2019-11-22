function game(){
    this.currentPlayer = "X";
    this.gameBoard = [];

    this.play = function (player, position){
        this.gameBoard[position] = player;
    }


}
    
module.exports = game