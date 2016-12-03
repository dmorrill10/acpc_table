import React from 'react';
import renderer from 'react-test-renderer';
const Card = require('../dist/card.js');

test('Face down card works', () => {
  const patient = <Card/>;
  const tree = renderer.create(patient).toJSON();
  expect(tree).toMatchSnapshot();
});
test('Face up card works', () => {
  const patient = <Card rank='A' suit='&spades;'/>;
  const tree = renderer.create(patient).toJSON();
  expect(tree).toMatchSnapshot();
});
