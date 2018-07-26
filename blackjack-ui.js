class BlackJackUI {
  constructor() {
    this.game = new Game();

    this.header = document.getElementById('header-text-area');
    this.dealerTextArea = document.getElementById('dealer-text-area');
    this.playerTextArea = document.getElementById('player-text-area');
    this.resultTextArea = document.getElementById('result-text-area');

    this.newGameButton = document.getElementById('new-game-button');
    this.hitButton = document.getElementById('hit-button');
    this.stayButton = document.getElementById('stay-button');

    this.enableControls(false);
    this.setupEvents();

    this.update();
  }

  enableControls(enabled) {
    if (enabled) {
      this.newGameButton.style.display = 'none';
      this.hitButton.style.display = 'inline';
      this.stayButton.style.display = 'inline';
    } else {
      this.newGameButton.style.display = 'inline';
      this.hitButton.style.display = 'none';
      this.stayButton.style.display = 'none';
    }
  }

  setupEvents() {
    self = this;

    this.newGameButton.addEventListener('click', function() {
      self.game.newGame();

      self.enableControls(true);

      self.update();
    });

    this.hitButton.addEventListener('click', function() {
      self.game.doHit();
      self.update();
    });

    this.stayButton.addEventListener('click', function() {
      self.game.doStay();
      self.update();
    });
  }

  update() {
    this.header.innerText = 'Welcome to Blackjack!';
    this.dealerTextArea.innerText = '';
    this.playerTextArea.innerText = '';
    this.resultTextArea.innerText = '';

    if(this.game.isStarted()) {
      let dealerHand = this.game.getDealerHand();
      let playerHand = this.game.getPlayerHand();
      let dealerCardString = dealerHand.toString(this.game.isOver());
      let playerCardString = playerHand.toString();

      this.dealerTextArea.innerText =
        'Dealer has:\n\n' +
        dealerCardString +
        '\n(score: '+ dealerHand.getScore(this.game.isOver())  + ')\n\n';

      this.playerTextArea.innerText =
        'Player has:\n\n' +
        playerCardString +
        '\n(score: '+ playerHand.getScore()  + ')\n\n';

      if (this.game.isOver()) {
        if (this.game.playerDidPush()) {
          this.resultTextArea.innerText = "YOU PUSHED!"
        }
        else if (this.game.playerDidWin()) {
          this.resultTextArea.innerText = "YOU WIN!";
        }
        else if (this.game.dealerDidWin()){
          this.resultTextArea.innerText = "DEALER WINS";
        }

        this.enableControls(false);
      }
    }
  }
}