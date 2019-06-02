import React from 'react';
import { shallow } from 'enzyme';

import ProfileTopSection from './ProfileTopSection';
import { findByTestAttr } from '../../../utils/testHelpers';

const setUp = (props = {}) => {
  const component = shallow(<ProfileTopSection {...props} />);
  return component;
};

describe('<ProfileTopSection />', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttr(component, 'ProfileTopSectionComponent');
    expect(wrapper.length).toBe(1);
  });
});
