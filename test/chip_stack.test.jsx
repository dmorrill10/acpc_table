import React from 'react';
import renderer from 'react-test-renderer';
const ChipStack = require('../dist/chip_stack.js');

test('works', () => {
  const patient = <ChipStack amount='9001'/>;
  const tree = renderer.create(patient).toJSON();
  expect(tree).toMatchSnapshot();
});
