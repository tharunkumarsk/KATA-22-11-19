function game(){
    this.currentPlayer = "X";
    this.gameBoard = [];

    this.playOnPosition = function (position){
        this.gameBoard[position] = this.currentPlayer;

        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    }


}
    
module.exports = game