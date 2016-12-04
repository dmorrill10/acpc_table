import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {Player, User, Opponent} from '../dist/player.js';

// TODO Not sure how to make this test less brittle and unwieldy

describe('User', () => {
  describe('not next to act', () => {
    const isNextToAct = false;
    describe('without the dealer button', () => {
      const isDealer = false;
      describe('with a hand of two face-down cards', () => {
        const cards = [{}, {}];
        describe('receiving no chips', () => {
          const winnings = 0;
          describe('betting no chips', () => {
            const contribution = 0;
            describe('holding no chips', () => {
              const chipStackAmount = 0;
              it('works', () => {
                const patient = (<User
                  name='player1'
                  hole-cards={cards}
                  dealer={isDealer}
                  acting={isNextToAct}
                  chip-stack-amount={chipStackAmount}
                  winnings={winnings}
                  contribution={contribution}/>);
                const wrapper = shallow(patient);

                expect(wrapper.find('.name').text()).toEqual('player1');
                expect(wrapper.find('.player').hasClass('acting')).toEqual(false);
                expect(renderer.create(patient).toJSON()).toMatchSnapshot();
              });
            });
            describe('holding chips', () => {
              const chipStackAmount = 9001;
              it('works', () => {
                const patient = (<User
                  name='player1'
                  hole-cards={cards}
                  dealer={isDealer}
                  acting={isNextToAct}
                  chip-stack-amount={chipStackAmount}
                  winnings={winnings}
                  contribution={contribution}/>);
                const wrapper = shallow(patient);

                expect(wrapper.find('.name').text()).toEqual('player1');
                expect(wrapper.find('.player').hasClass('acting')).toEqual(false);
                expect(renderer.create(patient).toJSON()).toMatchSnapshot();
              });
            });
          });
          describe('betting chips', () => {
            const contribution = 100;
            describe('holding no chips', () => {
              const chipStackAmount = 0;
              it('works', () => {
                const patient = (<User
                  name='player1'
                  hole-cards={cards}
                  dealer={isDealer}
                  acting={isNextToAct}
                  chip-stack-amount={chipStackAmount}
                  winnings={winnings}
                  contribution={contribution}/>);
                const wrapper = shallow(patient);

                expect(wrapper.find('.name').text()).toEqual('player1');
                expect(wrapper.find('.player').hasClass('acting')).toEqual(false);
                expect(renderer.create(patient).toJSON()).toMatchSnapshot();
              });
            });
            describe('holding chips', () => {
              const chipStackAmount = 9001;
              it('works', () => {
                const patient = (<User
                  name='player1'
                  hole-cards={cards}
                  dealer={isDealer}
                  acting={isNextToAct}
                  chip-stack-amount={chipStackAmount}
                  winnings={winnings}
                  contribution={contribution}/>);
                const wrapper = shallow(patient);

                expect(wrapper.find('.name').text()).toEqual('player1');
                expect(wrapper.find('.player').hasClass('acting')).toEqual(false);
                expect(renderer.create(patient).toJSON()).toMatchSnapshot();
              });
            });
          });
        });
      });
    });
  });
});
