function game(){
    this.currentPlayer = "X";
    this.gameBoard = [];

    this.play = function (player, position){
        this.gameBoard[position] = player;

        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    }


}
    
module.exports = game