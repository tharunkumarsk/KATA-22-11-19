const Game = require('../src/game.js');

const assert = require("chai").assert

describe('Game', function () {

    it('X- should be the currentPlayer', function () {
        var game = new Game();
        assert.equal(game.currentPlayer ,"X")
    });

   
});