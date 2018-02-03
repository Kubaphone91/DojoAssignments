 /*jshint esversion: 6 */
function Deck(){
  this.deck = [];
  this.value = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];
  this.suit = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
}

Deck.prototype.assembleDeck = function(){
  for(let s = 0; s < this.suit.length; s++){
    for(let v = 0; v < this.value.length; v++){
      this.deck.push(`${this.value[v]} of ${this.suit[s]}`);
    }
  }
  return this.shuffle();
};

Deck.prototype.shuffle = function(){
  var n = this.deck.length, temp, index;
  while (n){
    index = Math.floor(Math.random() * n--);
    temp = this.deck[n];
    this.deck[n] = this.deck[index];
    this.deck[index] = this.deck[temp];
  }
  return this;
};

Deck.prototype.deal = function(){
  let random_index = Math.floor(Math.random() * this.deck.length);
  const card = this.deck[random_index];
  this.deck.splice(random_index, 1);
  return card;
};

function Player(name){
  this.name = name;
  this.hand = [];
}

Player.prototype.dealHand = function(numCards, deck){
  for(let i = 1; i <= numCards; i++){
    this.hand.push(deck.deal());
  }
  console.log(this.hand);
  return this;
};

let deck1 = new Deck();
let player1 = new Player("Kuba");
deck1.assembleDeck();
console.log(player1.name);
player1.dealHand(4, deck1);
