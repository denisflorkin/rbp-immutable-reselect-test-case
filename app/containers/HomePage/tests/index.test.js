
// import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import HomePage from '../index';


describe('<HomePage />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(
      <HomePage />
    );
    expect(renderedComponent.find('div').length).toEqual(1);
  });
});
