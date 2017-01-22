import React from 'react';
import Card from './card';

class CardList extends React.Component {
  myClass() {
    return 'card-list';
  }
  render() {
    let cards = []
    for (let i = 0; i < this.props.cards.length; ++i) {
      let card = this.props.cards[i];
      cards.push(
        <li key={i}><Card rank={card.rank} suit={card.suit}/></li>
      );
    }
    return <ol className={this.myClass()}>{cards}</ol>;
  }
}
class BoardCards extends CardList {
  myClass() {
    return 'board-cards';
  }
}
class PrivateCards extends CardList {
  myClass() {
    return 'private-cards';
  }
}
export {CardList, BoardCards, PrivateCards}
