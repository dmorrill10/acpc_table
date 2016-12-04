import React from 'react';

class Card extends React.Component {
  faceUpCardProps() {
    return [(
        <div key='top_left_rank' className='top_left_rank'>
          {this.props.rank}
        </div>
      ), (
        <div key='suit' className='suit'>
          {this.props.suit}
        </div>
      ), (
        <div key='bottom_right_rank' className='bottom_right_rank'>
          {this.props.rank}
        </div>
      )];
  }

  render() {
    let classNames = undefined;
    let cardProps = undefined;
    if (this.props.rank && this.props.suit) {
      classNames = 'card-face-up';
      cardProps = this.faceUpCardProps();
    } else {
      classNames = 'card-face-down';
      cardProps = <div className='logo'></div>;
    }
    return <div className={classNames}>{cardProps}</div>;
  }
}
module.exports = Card;
