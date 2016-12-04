import React from 'react';
import renderer from 'react-test-renderer';
import {Player, User, Opponent} from '../dist/player.js';

// TODO Add tests

test('User without dealer, with a hand of two face-down cards, and has no chips, who i' +
    's not next to act',
() => {
  const cards = [{}, {}];
  const patient = (<User
    name='player1'
    hole-cards={cards}
    dealer={false}
    acting={false}
    chip-stack-amount={0}/>);
  const tree = renderer.create(patient).toJSON();
  expect(tree).toMatchSnapshot();
});
