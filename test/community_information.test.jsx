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
          suit: 'h'
        }, {
          rank: '3',
          suit: 'd'
        }, {
          rank: '10',
          suit: 's'
        }, {
          rank: 'A',
          suit: 'c'
        }, {
          rank: 'K',
          suit: 'd'
        }
      ];
      const patient = <CommunityInformation cards={cards} potChips={100}/>;
      const wrapper = shallow(patient);
      expect(renderer.create(patient).toJSON()).toMatchSnapshot();
    });
  });
});
