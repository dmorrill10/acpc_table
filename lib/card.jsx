import React from 'react';

class Card extends React.Component {
  faceUpCardProps() {
    return [(
        <div key='top-left-rank' className='top-left-rank'>
          {this.props.rank}
        </div>
      ), (
        <div key='suit' className='suit'>
          {this.props.suit}
        </div>
      ), (
        <div key='bottom-right-rank' className='bottom-right-rank'>
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
