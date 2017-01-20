
import { shallow } from 'enzyme';
import React from 'react';

import UserProfileSettings from '../index';


describe('<UserProfileSettings />', () => {
  const renderedComponent = shallow(<UserProfileSettings />);

  it('should render a div', () => {
    expect(renderedComponent.type()).toEqual('div');
  });
});
