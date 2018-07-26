const suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];

const values = ['Ace', 'King', 'Queen', 'Jack',
                'Ten', 'Nine', 'Eight', 'Seven', 'Six',
                'Five', 'Four', 'Three', 'Two'];

class Deck {
  constructor() {
    this.cards = this.reset();
  }

  reset() {
    this.cards = [];

    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
      for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
        let card = new Card(suits[suitIdx], values[valueIdx]);
        this.cards.push(card);
      }
    }

    return this.cards;
  }

  shuffle() {
    for (let i = 0; i < this.cards.length; i++) {
      let swapIdx = Math.trunc(Math.random() * this.cards.length);
      let tmp = this.cards[swapIdx];
      this.cards[swapIdx] = this.cards[i];
      this.cards[i] = tmp;
    }
  }

  getNextCard() {
    return this.cards.shift();
  }
}