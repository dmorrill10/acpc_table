import React from 'react';
import Card from './card';

class Hand extends React.Component {
  render() {
    let cards = []
    for (let i = 0; i < this.props.cards.length; ++i) {
      let card = this.props.cards[i];
      cards.push(
        <li key={i}><Card rank={card.rank} suit={card.suit}/></li>
      );
    }
    return <ol className='hand'>{cards}</ol>;
  }
}
module.exports = Hand;