import React from 'react';
import {CardList, BoardCards, PrivateCards} from './card_list';
import ChipStack from './chip_stack';

class CommunityInformation extends React.Component {
  boardCards() {
    return (<BoardCards key='board-cards' cards={this.props.cards}/>);
  }
  potChips() {
    return <ChipStack key='pot-chips' amount={this.props.potChips}/>;
  }
  render() {
    let l = [this.boardCards(), this.potChips()]
    return <div className='community-information'>{l}</div>;
  }
}
export {CommunityInformation}
