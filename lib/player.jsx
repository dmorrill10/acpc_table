import React from 'react';
import CardSet from './card_set';
import ChipStack from './chip_stack';

class Player extends React.Component {
  heldPlayerInformation() {
    const l = [(
        <div key='name' className='name'>{this.props.name}</div>
      ), (<CardSet key='card_set' cards={this.props['hole-cards']}/>), (<ChipStack key='chip_stack' amount={this.props['chip-stack-amount']}/>)];
    return (
      <div key='held_player_information' className='held_player_information'>
        {l}
      </div>
    );
  }
  outerPlayerInformation() {
    const l = [
      this.props.dealer && (
        <div key='dealer_button' className='dealer_button'>'Dealer'</div>
      ),
      this.props.winnings && (
        <div key='stack_taken_from_pot' className='stack_taken_from_pot'>
          <ChipStack amount={this.props.winnings}/>
        </div>
      ),
      this.props.chip_contributions && (
        <div key='stack_added_to_pot' className='stack_added_to_pot'>
          <ChipStack amount={this.props.chip_contributions}/>
        </div>
      )
    ];
    return (
      <div key='outer_player_information' className='outer_player_information'>
        {l}
      </div>
    );
  }
  playerContents() {
    return [];
  }
  render() {
    let c = 'player';
    if (this.props.active) {
      c += ' active';
    }
    return <div className={c}>{this.playerContents()}</div>;
  }
}
class User extends Player {
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
