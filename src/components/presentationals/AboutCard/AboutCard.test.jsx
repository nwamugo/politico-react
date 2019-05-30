import React from 'react';
import { shallow } from 'enzyme';

import AboutCard from './AboutCard';

describe('<AboutCard />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AboutCard />);
  });

  it('should render without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
