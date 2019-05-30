import React from 'react';
import { shallow } from 'enzyme';

import Gallery from './Gallery';

describe('<Gallery />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Gallery />);
  });

  it('should render without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
