import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {CommunityInformation} from '../dist/community_information.js';

describe('CommunityInformation', () => {
  describe('without board cards', () => {
    it('works', () => {
      const patient = <CommunityInformation cards={[]} potChips={100}/>;
      const wrapper = shallow(patient);
      expect(renderer.create(patient).toJSON()).toMatchSnapshot();
    });
  });
  describe('with five board cards', () => {
    it('works', () => {
      const cards = [
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
      const patient = <CommunityInformation cards={cards} potChips={100}/>;
      const wrapper = shallow(patient);
      expect(renderer.create(patient).toJSON()).toMatchSnapshot();
    });
  });
});
