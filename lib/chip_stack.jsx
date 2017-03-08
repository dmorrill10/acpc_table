import React from 'react';

class ChipStack extends React.Component {
  render() {
    if (this.props.amount && this.props.amount > 0) {
      const l = [(
          <div key='amount' className='amount'>{this.props.amount}</div>
        ), (
          <div key='image' className='image'></div>
        )];
      return (
        <div className='chip-stack'>
          {l}
        </div>
      );
    } else {
      return null;
    }
  }
}
module.exports = ChipStack;
