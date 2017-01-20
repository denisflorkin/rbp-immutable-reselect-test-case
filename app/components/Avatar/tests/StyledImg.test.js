
// import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import StyledImg from '../StyledImg';


const src = 'test.png';
const alt = 'test';
const renderComponent = (props = {}) => shallow(
  <StyledImg src={ src } alt={ alt } { ...props } />
);


describe('<StyledImg />', () => {
  it('given src and alt should render an <img>', () => {
    const renderedComponent =
      shallow(<StyledImg src={ src } alt={ alt } />);

    expect(renderedComponent.type())
      .toEqual('img');
  });

  it('should have an src attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('img').prop('src'))
      .toEqual(src);
  });

  it('should have an alt attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('img').prop('alt'))
      .toEqual(alt);
  });

  it('should have a className attribute as a styled-components', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('img').prop('className'))
      .toBeDefined();
  });

  it('should adopt a className attribute', () => {
    const className = 'test';
    const renderedComponent = renderComponent({ className });
    expect(renderedComponent.find('img').hasClass(className))
      .toBe(true);
  });

  it('should not adopt a srcset attribute', () => {
    const srcset = 'test-HD.png 2x';
    const renderedComponent = renderComponent({ srcset });
    expect(renderedComponent.find('img').prop('srcset'))
      .toBeUndefined();
  });
})
