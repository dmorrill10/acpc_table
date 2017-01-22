import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {AcpcTable} from '../dist/acpc_table.js';

describe('AcpcTable', () => {
  describe("with 2-player Texas hold'em table on the river", () => {
    it('works', () => {
      const boardCards = [
        {
          rank: '2',
          suit: '&hearts;'
        }, {
          rank: '3',
          suit: '&diamonds;'
        }, {
          rank: '10',
          suit: '&spades;'
        }, {
          rank: 'A',
          suit: '&clubs;'
        }, {
          rank: 'K',
          suit: '&diamonds;'
        }
      ];
      const user = {
        name: 'player1',
        holeCards: [
          {}, {}
        ],
        dealer: true,
        acting: true,
        chipStackAmount: 1000,
        winnings: 0,
        contribution: 400
      };
      const opponents = [
        {
          name: 'player2',
          holeCards: [
            {}, {}
          ],
          dealer: false,
          acting: false,
          chipStackAmount: 800,
          winnings: 0,
          contribution: 600
        }
      ];
      const patient = (<AcpcTable
        boardCards={boardCards}
        potChips={1000}
        user={user}
        opponents={opponents}/>);
      const wrapper = shallow(patient);
      expect(renderer.create(patient).toJSON()).toMatchSnapshot();
    });
  });
});
