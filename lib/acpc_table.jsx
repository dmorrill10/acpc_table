import React from 'react';
import {CommunityInformation} from './community_information';
import {_, User, Opponent} from './player';

class AcpcTable extends React.Component {
  communityInformation() {
    return (<CommunityInformation
      key='community-information'
      cards={this.props.boardCards}
      potChips={this.props.potChips}/>);
  }
  user() {
    return (<User
      key='user'
      name={this.props.user.name}
      hole-cards={this.props.user.holeCards}
      dealer={this.props.user.dealer}
      acting={this.props.user.acting}
      chip-stack-amount={this.props.user.chipStackAmount}
      winnings={this.props.user.winnings}
      contribution={this.props.user.contribution}/>);
  }
  opponents() {
    let o = [];
    for (let i = 0; i < this.props.opponents.length; ++i) {
      let opponent = this.props.opponents[i];
      o.push(
        <li key={i}><Opponent
          name={opponent.name}
          hole-cards={opponent.holeCards}
          dealer={opponent.dealer}
          acting={opponent.acting}
          chip-stack-amount={opponent.chipStackAmount}
          winnings={opponent.winnings}
          contribution={opponent.contribution}/></li>
      );
    }
    return <ol key='opponents' className='opponents'>{o}</ol>;
  }
  render() {
    let l = [this.opponents(), this.communityInformation(), this.user()];
    return (
      <div className='acpc-table'>{l}</div>
    );
  }
}

export {AcpcTable};