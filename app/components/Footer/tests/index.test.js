
// import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import Footer from '../index';


describe('<Footer />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(
      <Footer />
    );
    expect(renderedComponent.find('div').length).toEqual(1);
  });
});
