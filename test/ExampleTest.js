const Game = require('../src/game.js');

const assert = require("chai").assert

describe('Game', function () {

    it('X- should be the currentPlayer', function () {
        var game = new Game();
        assert.equal(game.currentPlayer ,"X")
    });

    it('should record X move on the board on correct position', function(){
        var game = new Game();
        
        game.play("X", 8);

        assert.equal(game.gameBoard[8], 'X');
    });

    it('Should "O" be the next player after X', function(){
        var game = new Game();

        game.play("X", 8);

        assert.equal(game.currentPlayer,"O")
    });
   
});