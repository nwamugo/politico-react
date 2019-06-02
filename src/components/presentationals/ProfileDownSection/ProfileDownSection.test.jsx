import React from 'react';
import { shallow } from 'enzyme';

import ProfileDownSection from './ProfileDownSection';
import { findByTestAttr } from '../../../utils/testHelpers';

const setUp = (props = {}) => {
  const component = shallow(<ProfileDownSection {...props} />);
  return component;
};

describe('<ProfileDownSection />', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttr(component, 'ProfileDownSectionComponent');
    expect(wrapper.length).toBe(1);
  });
});
