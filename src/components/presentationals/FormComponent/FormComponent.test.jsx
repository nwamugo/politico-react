import React from 'react';
import { shallow } from 'enzyme';

import FormComponent from './FormComponent';
import { findByTestAttr } from '../../../utils/testHelpers';

const setUp = (props = {}) => {
  const component = shallow(<FormComponent {...props} />);
  return component;
};

describe('<FormComponent />', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAttr(component, 'FormComponent');
    expect(wrapper.length).toBe(1);
  });
});
