const Game = require('../src/game.js');

const assert = require("chai").assert

describe('Game', function () {

    var game;

    this.beforeEach(function(){
        game = new Game();
    });

    it('X- should be the currentPlayer', function () {
        assert.equal(game.currentPlayer ,"X")
    });

    it('should record X move on the board on correct position', function(){
        game.playOnPosition(8);

        assert.equal(game.gameBoard[8], 'X');
    });

    it('Should "O" be the next player after X', function(){
        game.playOnPosition(8);

        assert.equal(game.currentPlayer,"O")
    });
   
    it('Should not allow to play on played positions', function(){
        game.playOnPosition(8);
        game.playOnPosition(8);

        assert.equal(game.currentPlayer,"O")
        assert.equal(game.gameBoard[8],"X")
    });

    it('should not allow to play on invalid positions', function(){
        game.playOnPosition(5);
        game.playOnPosition(9);

        assert.equal(game.currentPlayer,"O")
        assert.equal(game.gameBoard.length,6)
    });

   
});