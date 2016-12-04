import React from 'react';
import renderer from 'react-test-renderer';
const Hand = require('../dist/hand.js');

test('Two face-down card hand works', () => {
  const cards = [{}, {}];
  const patient = <Hand cards={cards}/>;
  const tree = renderer.create(patient).toJSON();
  expect(tree).toMatchSnapshot();
});
test('Two face-up card hand works', () => {
  const cards = [
    {
      rank: '2',
      suit: '&hearts;'
    }, {
      rank: '3',
      suit: '&diamonds;'
    }
  ];
  const patient = <Hand cards={cards}/>;
  const tree = renderer.create(patient).toJSON();
  expect(tree).toMatchSnapshot();
});
