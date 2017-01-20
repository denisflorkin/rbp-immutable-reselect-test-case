
import { shallow } from 'enzyme';
import React from 'react';

import StyledFigure from '../StyledFigure';


describe('<StyledFigure />', () => {
  it('should render an <figure> tag', () => {
    const renderedComponent = shallow(<StyledFigure />);
    expect(renderedComponent.type()).toEqual('figure');
  });

  it('should have a className attribute as a styled-components', () => {
    const renderedComponent = shallow(<StyledFigure />);
    expect(renderedComponent.find('figure').prop('className')).toBeDefined();
  });
})
