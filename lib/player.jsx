import React from 'react';
import {CardList, BoardCards, PrivateCards} from './card_list';
import ChipStack from './chip_stack';

class Player extends React.Component {
  heldPlayerInformation() {
    const l = [(
        <div key='name' className='name'>{this.props.name}</div>
      ), (<CardList key='card-list' cards={this.props['hole-cards']}/>), (
        <div key='player_stack' className='player_stack'>
          <ChipStack key='chip_stack' amount={this.props['chip-stack-amount']}/>
        </div>
      )];
    return (
      <li key='held_player_information' className='held_player_information'>
        {l}
      </li>
    );
  }
  outerPlayerInformation() {
    let l = []
    if (this.props.dealer) {
      l.push(
        <div key='dealer_button' className='dealer_button'>Dealer</div>
      );
    }
    if (this.props.winnings && this.props.winnings > 0) {
      l.push((
        <div key='winnings' className='winnings'>
          <ChipStack amount={this.props.winnings}/>
        </div>
      ))
    } else if (this.props.contribution && this.props.contribution > 0) {
      l.push(
        <div key='contribution' className='contribution'>
          <ChipStack amount={this.props.contribution}/>
        </div>
      )
    } else {
      l.push(
        <div key='chip-stack-placeholder' className='chip-stack-placeholder'></div>
      );
    }
    return (
      <li key='outer_player_information' className='outer_player_information'>
        {l}
      </li>
    );
  }
  playerContents() {
    return [];
  }
  classes() {
    let c = 'player';
    if (this.props.acting) {
      c += ' acting';
    }
    if (this.props['has-folded'] || !this.props['hole-cards'] || this.props['hole-cards'].length < 1) {
      c += ' has-folded';
    }
    return c;
  }
  render() {
    return <ol className={this.classes()}>{this.playerContents()}</ol>;
  }
}
class User extends Player {
  classes() {
    return super.classes() + ' user';
  }
  playerContents() {
    return [this.outerPlayerInformation(), this.heldPlayerInformation()];
  }
}
class Opponent extends Player {
  playerContents() {
    return [this.heldPlayerInformation(), this.outerPlayerInformation()];
  }
}
export {Player, User, Opponent}
