import React from 'react';

class Card extends React.Component {
  static htmlRank(rank) {
    rank = rank.toUpperCase();
    if (rank === 'T') {
      return '10';
    } else {
      return rank;
    }
  }
  static htmlSuit(suit) {
    return this.HTML_SUITS[suit];
  }
  htmlRank() {
    return this.constructor.htmlRank(this.props.rank);
  }
  htmlSuit() {
    return this.constructor.htmlSuit(this.props.suit);
  }
  faceUpCardProps() {
    return [(
        <div key='top-left-rank' className='top-left-rank'>
          {this.htmlRank()}
        </div>
      ), (
        <div key='suit' className='suit'>
          {this.htmlSuit()}
        </div>
      ), (
        <div key='bottom-right-rank' className='bottom-right-rank'>
          {this.htmlRank()}
        </div>
      )];
  }

  render() {
    let classNames = undefined;
    let cardProps = undefined;
    if (this.props.rank && this.props.suit) {
      classNames = 'card-face-up-' + this.props.suit;
      cardProps = this.faceUpCardProps();
    } else {
      classNames = 'card';
      cardProps = <div className='logo'></div>;
    }
    return <div className={classNames}>{cardProps}</div>;
  }
}
Card.HTML_SUITS = {
  'c': '&clubs;',
  'd': '&diams;',
  'h': '&hearts;',
  's': '&spades;'
};
module.exports = Card;
