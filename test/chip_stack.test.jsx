import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
const ChipStack = require('../dist/chip_stack.js');

describe('ChipStack', () => {
  it('shows up for amounts greater than zero', () => {
    const patient = <ChipStack amount={9001}/>;
    const wrapper = shallow(patient);
    expect(wrapper.text()).toEqual('9001');
    expect(wrapper.hasClass('chip-stack')).toEqual(true);
    expect(renderer.create(patient).toJSON()).toMatchSnapshot();
  });
  it('does not show up for amounts less than 1', () => {
    const patient = <ChipStack amount={0}/>;
    const wrapper = shallow(patient);
    expect(wrapper.type()).toEqual(null);
  });
});
