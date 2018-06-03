/* global describe beforeEach it */

import { expect } from 'chai';
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Cardset from './Cardset';

const adapter = new Adapter();
enzyme.configure({ adapter });

describe('The `Cardset` component', () => {
  let set;
  const contents = ['a', 'b', 'c', 'd', 'e'];
  const indexedContents = { wnryubva: 'a', dmfufnen: 'b', muncroie: 'c', agtjrbtb: 'd', quixeowy: 'e' };

  describe('Outputs based on props', () => {
    describe('Outputs based on the `contents` prop', () => {
      it('Renders a `Card` component for each item in the `contents` prop');
      it('Utilizes object keys for keys in each React `Card` component');
      it('Defaults to indices for keys if an array passed in');
    });

    describe('Outputs based on the size prop');
  });

});
