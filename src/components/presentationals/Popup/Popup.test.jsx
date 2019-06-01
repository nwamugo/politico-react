import React from 'react';
import { shallow } from 'enzyme';

import Popup from './Popup';

describe('<Popup />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Popup />);
  });

  it('should render without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
