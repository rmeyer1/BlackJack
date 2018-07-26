class Game {
  constructor() {
    this.gameStarted = false;
    this.gameOver = false;
    this.deck = new Deck();
  }

  newGame() {
    this.gameStarted = true;
    this.gameOver = false;

    this.deck.reset();
    this.deck.shuffle();

    this.playerHand = new Hand(this.deck);
    this.dealerHand = new Hand(this.deck, true);
  }

  isStarted() {
    return this.gameStarted;
  }

  isOver() {
    return this.gameOver;
  }

  playerDidWin() {
    let playerScore = this.playerHand.getScore();
    let dealerScore = this.dealerHand.getScore(true);

    if (playerScore > 21) {
      return false;
    }
    else if (dealerScore > 21) {
      return true;
    }
    else if (this.gameOver) {
      return (playerScore > dealerScore);
    }
  }

  playerDidPush() {
    let playerScore = this.playerHand.getScore();
    let dealerScore = this.dealerHand.getScore(true);

    if (playerScore >= 17 && playerScore <= 21 && playerScore == dealerScore) {
      return true;
    }

    return false;
  }

  dealerDidWin() {
    let playerScore = this.playerHand.getScore();
    let dealerScore = this.dealerHand.getScore(true);

    if (playerScore > 21) {
      return true;
    }
    else if (dealerScore > 21) {
      return false;
    }
    else if (this.gameOver) {
      return (dealerScore > playerScore);
    }
  }
  getDealerHand() {
    return this.dealerHand;
  }

  getPlayerHand() {
    return this.playerHand;
  }

  doHit() {
    this.playerHand.hit(this.deck);

    if (this.playerHand.getScore() > 21) {
      this.finish();
    }
  }

  doStay() {
    this.finish();
  }

  finish() {
    let dealerScore = this.dealerHand.getScore(true);
    let playerScore = this.playerHand.getScore();

    while(dealerScore < 17) {
      this.dealerHand.hit(this.deck);

      dealerScore = this.dealerHand.getScore(true);
      playerScore = this.playerHand.getScore();
    }

    this.gameOver = true;
  }
}