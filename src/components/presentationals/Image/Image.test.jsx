import React from 'react';
import { shallow } from 'enzyme';

import Image from './Image';

describe('<Image />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Image />);
  });

  it('should render without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
