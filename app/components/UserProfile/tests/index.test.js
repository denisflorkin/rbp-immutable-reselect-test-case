
// import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import UserProfile from '../index';


describe('<UserProfile />', () => {
  const renderedComponent = shallow(<UserProfile />);

  it('should render a div', () => {
    expect(renderedComponent.type()).toEqual('div');
  });
});
