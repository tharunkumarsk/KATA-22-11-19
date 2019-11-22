function game() {
    this.currentPlayer = "X";
   

    this.gameBoard = [];

    this.playOnPosition = function (position) {
        if(this.gameBoard[position] || position > 8){
            return;
        }
        this.gameBoard[position] = this.currentPlayer;
        switchPlayer();

    }

    const switchPlayer = () => {
        this.currentPlayer = updateCurrentPlayer();
    }

    const updateCurrentPlayer = () => {
        if (this.currentPlayer === "X") {
            return "O"
        }
        return "X"
    }
}

module.exports = game