
import { shallow } from 'enzyme';
import React from 'react';

import NotFoundPage from '../index';


describe('<NotFoundPage />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(
      <NotFoundPage />
    );
    expect(renderedComponent.type()).toEqual('h1');
  });
});
