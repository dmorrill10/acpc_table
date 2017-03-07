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
                expect(wrapper.find('.player').hasClass('has-folded')).toEqual(false);
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
                expect(wrapper.find('.player').hasClass('has-folded')).toEqual(false);

                const heldPlayerInfo = wrapper.find('.player .held_player_information');
                expect(heldPlayerInfo.find('ChipStack').first().prop('amount')).toEqual(9001);

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
                expect(wrapper.find('.player').hasClass('has-folded')).toEqual(false);

                const outerPlayerInfo = wrapper.find('.player .outer_player_information');
                expect(outerPlayerInfo.find('ChipStack').first().prop('amount')).toEqual(100);

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
                expect(wrapper.find('.player').hasClass('has-folded')).toEqual(false);

                const heldPlayerInfo = wrapper.find('.player .held_player_information');
                expect(heldPlayerInfo.find('ChipStack').first().prop('amount')).toEqual(9001);

                const outerPlayerInfo = wrapper.find('.player .outer_player_information');
                expect(outerPlayerInfo.find('ChipStack').first().prop('amount')).toEqual(100);

                expect(renderer.create(patient).toJSON()).toMatchSnapshot();
              });
            });
          });
        });
      });
      describe('with an implicitly folded hand', () => {
        const cards = [];
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
                expect(wrapper.find('.player').hasClass('has-folded')).toEqual(true);
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
                expect(wrapper.find('.player').hasClass('has-folded')).toEqual(true);

                const heldPlayerInfo = wrapper.find('.player .held_player_information');
                expect(heldPlayerInfo.find('ChipStack').first().prop('amount')).toEqual(9001);

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
                expect(wrapper.find('.player').hasClass('has-folded')).toEqual(true);

                const outerPlayerInfo = wrapper.find('.player .outer_player_information');
                expect(outerPlayerInfo.find('ChipStack').first().prop('amount')).toEqual(100);

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
                expect(wrapper.find('.player').hasClass('has-folded')).toEqual(true);

                const heldPlayerInfo = wrapper.find('.player .held_player_information');
                expect(heldPlayerInfo.find('ChipStack').first().prop('amount')).toEqual(9001);

                const outerPlayerInfo = wrapper.find('.player .outer_player_information');
                expect(outerPlayerInfo.find('ChipStack').first().prop('amount')).toEqual(100);

                expect(renderer.create(patient).toJSON()).toMatchSnapshot();
              });
            });
          });
        });
      });
      describe('with an explicitly folded hand and two face-up cards', () => {
        const cards = [
          {
            rank: 'A',
            suit: 'c'
          }, {
            rank: 'K',
            suit: 'd'
          }
        ];
        const hasFolded = true;
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
                  contribution={contribution}
                  has-folded={hasFolded}/>);
                const wrapper = shallow(patient);

                expect(wrapper.find('.name').text()).toEqual('player1');
                expect(wrapper.find('.player').hasClass('acting')).toEqual(false);
                expect(wrapper.find('.player').hasClass('has-folded')).toEqual(hasFolded);
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
                  contribution={contribution}
                  has-folded={hasFolded}/>);
                const wrapper = shallow(patient);

                expect(wrapper.find('.name').text()).toEqual('player1');
                expect(wrapper.find('.player').hasClass('acting')).toEqual(false);
                expect(wrapper.find('.player').hasClass('has-folded')).toEqual(hasFolded);

                const heldPlayerInfo = wrapper.find('.player .held_player_information');
                expect(heldPlayerInfo.find('ChipStack').first().prop('amount')).toEqual(9001);

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
                  contribution={contribution}
                  has-folded={hasFolded}/>);
                const wrapper = shallow(patient);

                expect(wrapper.find('.name').text()).toEqual('player1');
                expect(wrapper.find('.player').hasClass('acting')).toEqual(false);
                expect(wrapper.find('.player').hasClass('has-folded')).toEqual(hasFolded);

                const outerPlayerInfo = wrapper.find('.player .outer_player_information');
                expect(outerPlayerInfo.find('ChipStack').first().prop('amount')).toEqual(100);

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
                  contribution={contribution}
                  has-folded={hasFolded}/>);
                const wrapper = shallow(patient);

                expect(wrapper.find('.name').text()).toEqual('player1');
                expect(wrapper.find('.player').hasClass('acting')).toEqual(false);
                expect(wrapper.find('.player').hasClass('has-folded')).toEqual(hasFolded);

                const heldPlayerInfo = wrapper.find('.player .held_player_information');
                expect(heldPlayerInfo.find('ChipStack').first().prop('amount')).toEqual(9001);

                const outerPlayerInfo = wrapper.find('.player .outer_player_information');
                expect(outerPlayerInfo.find('ChipStack').first().prop('amount')).toEqual(100);

                expect(renderer.create(patient).toJSON()).toMatchSnapshot();
              });
            });
          });
        });
      });
    });
  });
});
