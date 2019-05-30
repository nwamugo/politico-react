import React from 'react';
import { shallow } from 'enzyme';

import SecondaryHeading from './SecondaryHeading';

describe('<SecondaryHeading />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SecondaryHeading />);
  });

  it('should render without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
