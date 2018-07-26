// Card = function(suit, value) {
//   this.suit = suit;
//   this.value = value;

//   this.toString = function() {
//     return this.value + ' of ' + this.suit;
//   };
// };

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }

  toString() {
    return this.value + ' of ' + this.suit;
  }

  getNumericValue() {
    switch(this.value) {
      case 'Ace':
        return 1;
      case 'Two':
        return 2;
      case 'Three':
        return 3;
      case 'Four':
        return 4;
      case 'Five':
        return 5;
      case 'Six':
        return 6;
      case 'Seven':
        return 7;
      case 'Eight':
        return 8;
      case 'Nine':
        return 9;
      default:
        return 10;
    }
  }
}


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes