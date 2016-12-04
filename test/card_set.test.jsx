import React from 'react';
import renderer from 'react-test-renderer';
const CardSet = require('../dist/card_set.js');

test('with two face-down cards works', () => {
  const cards = [{}, {}];
  const patient = <CardSet cards={cards}/>;
  const tree = renderer.create(patient).toJSON();
  expect(tree).toMatchSnapshot();
});
test('with two face-up cards works', () => {
  const cards = [
    {
      rank: '2',
      suit: '&hearts;'
    }, {
      rank: '3',
      suit: '&diamonds;'
    }
  ];
  const patient = <CardSet cards={cards}/>;
  const tree = renderer.create(patient).toJSON();
  expect(tree).toMatchSnapshot();
});
