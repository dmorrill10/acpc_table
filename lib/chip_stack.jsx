import React from 'react';

class ChipStack extends React.Component {
  render() {
    if (this.props.amount && this.props.amount > 0) {
      return (
        <div className='chip-stack'>
          <div className='amount'>{this.props.amount}</div>
        </div>
      );
    } else {
      return null;
    }
  }
}
module.exports = ChipStack;
