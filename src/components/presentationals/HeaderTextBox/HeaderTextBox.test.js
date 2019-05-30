import React from 'react';
import { shallow } from 'enzyme';

import HeaderTextBox from './HeaderTextBox';

describe('<HeaderTextBox />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HeaderTextBox />);
  });

  it('should render without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
