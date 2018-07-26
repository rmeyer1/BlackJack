

class Hand {
  constructor(deck, hideFirst=false) {
    // TODO: Add argument for hiding first card.
    this.hideFirst = hideFirst;
    this.cards = [ deck.getNextCard(), deck.getNextCard() ];
  }

  getScore(isGameOver=false) {
    let score = 0;
    let hasAce = false;

    let i = 0;
    if(this.hideFirst && !isGameOver) {
      i = 1;
    }

    for (; i < this.cards.length; i++) {
      let card = this.cards[i];
      score += card.getNumericValue();
      if (card.value === 'Ace') {
        hasAce = true;
      }
    }

    if (hasAce && score + 10 <= 21) {
      return score + 10;
    }

    return score;
  }

  hit(deck) {
    this.cards.push(deck.getNextCard());
  }

  toString(isGameOver=false) {
    let cardString = "";

    let i = 0;
    if(this.hideFirst && !isGameOver) {
      cardString = "[[Hidden Card]]\n";
      i = 1;
    }

    for (; i < this.cards.length; i++) {
      cardString += this.cards[i].toString() + '\n';
    }

    return cardString;
  }
}