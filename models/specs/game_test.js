const assert = require('assert');
const Game = require('../game.js');
const Player = require('../player.js');
const Card = require('../card.js');

describe ('Game', function (){

  let game;
  let card1;
  let card2;
  let player1;
  let player2;
  let deck;

  beforeEach(function(){
    card1 = new Card('Scarlet Witch', 7, 10, 5);
    card2 = new Card('Black Widow', 8, 6, 9);
    deck = [card1, card2];
    player1 = new Player();
    player2 = new Player();
    game = new Game(deck, player1, player2);
  });

  it('should have deck of cards', function(){
    const actual = game.deck.length;
    assert.strictEqual(actual, 2);

  });

  it('should pop a card', function(){
    game.popACard();
    const actual = game.deck.length;
    assert.strictEqual(actual, 1);
  });

  it('should deal', function(){
    game.deal();
    const actual1 = game.player1.hand.length;
    assert.strictEqual(actual1, 1);
    const actual2 = game.player2.hand.length;
    assert.strictEqual(actual2, 1);
  })

  it('deck is empty after dealing', function(){
    game.deal();
    const actual = game.deck.length;
    assert.strictEqual(actual, 0);
  })

});
