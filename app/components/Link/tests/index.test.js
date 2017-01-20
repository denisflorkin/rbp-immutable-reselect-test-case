/* eslint-disable */

/**
 * Testing our link component
 */

import Link from '../index';

// import expect from 'expect';
import { mount } from 'enzyme';
import React from 'react';

const route = '/';
const children = (<h1>Test</h1>);
const renderComponent = (props = {}) => mount(
  <Link to={ route } { ...props } > { children } </Link>
);

describe('<Link />', () => {

  it('should render an <a> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('a').length).toEqual(1);
  });

  /**
   * Something is wrong here

  it('should have an href attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.prop('href')).toEqual(route);
  });
  */


  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should have a className attribute', () => {
    const className = 'test';
    const renderedComponent = renderComponent({ className });
    expect(renderedComponent.find('a').hasClass(className)).toEqual(true);
  });

  it('should adopt a target attribute', () => {
    const target = '_blank';
    const renderedComponent = renderComponent({ target });
    expect(renderedComponent.prop('target')).toEqual(target);
  });

  // should it really ?
  it('should adopt a type attribute', () => {
    const type = 'text/html';
    const renderedComponent = renderComponent({ type });
    expect(renderedComponent.prop('type')).toEqual(type);
  });
});
