import React from 'react';
import { shallow } from 'enzyme';

import NavBar from './NavBar';
import { findByTestAttr } from '../../../utils/testHelpers';

const setUp = (props = {}) => {
  const component = shallow(<NavBar {...props} />);
  return component;
};

describe('<NavBar />', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttr(component, 'NavBarComponent');
    expect(wrapper.length).toBe(1);
  });
});
