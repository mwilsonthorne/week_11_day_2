const assert = require('assert');
const Game = require('../game.js');
// const Player = require('../player.js');
const Card = require('../card.js');

describe ('Game', function (){

  let game;
  let card1;
  let card2;
  // let player1;
  // let player2;
  let deck;

  beforeEach(function(){
    card1 = new Card('Scarlet Witch', 7, 10, 5);
    card2 = new Card('Black Widow', 8, 6, 9);
    deck = [card1, card2];
    // player1 = new Player();
    // player2 = new Player();
    game = new Game(deck);
  });

  it('should have deck of cards', function(){
    const actual = game.deck.length;
    assert.strictEqual(actual, 2);

  });

});
