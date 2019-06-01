import React from 'react';
import { shallow } from 'enzyme';

import PartiesRow from './PartiesRow';

describe('<PartiesRow />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PartiesRow />);
  });

  it('should render without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
