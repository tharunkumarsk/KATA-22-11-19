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
   
});