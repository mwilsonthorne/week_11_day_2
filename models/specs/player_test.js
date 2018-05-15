const assert = require('assert');
const Game = require('../game.js');
const Player = require('../player.js');
const Card = require('../card.js');

describe('Player', function(){

  
  let player1;


  beforeEach(function(){
    player1 = new Player()
  });

  it('should have empty hand', function(){
    const actual = player1.hand.length;
    assert.strictEqual(actual, 0);

  });

});
