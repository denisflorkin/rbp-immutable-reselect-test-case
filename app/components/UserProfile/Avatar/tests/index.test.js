
// import expect from 'expect';
// import { shallow } from 'enzyme';
import { mount } from 'enzyme';

import React from 'react';

import Avatar from '../index';


const src = 'test.png';
const alt = 'test';

const renderComponent = (props = {}) => mount(
  <Avatar src={ src } alt={ alt } { ...props } />
);


describe('<Avatar />', () => {
  it('should render an <figure> tag', () => {
    expect(renderComponent().find('figure').length).toEqual(1)
  });

  describe('<figure />', () => {
    it('should render an <img> tag', () => {
      expect(renderComponent().find('img').length).toEqual(1)
    });

    describe('<img />', () => {
      it('should have props.src ', () => {
        expect(renderComponent().props('src')).toBeDefined()
      });

      it('should have props.alt', () => {
        expect(renderComponent().props('alt')).toBeDefined()
      });
    });
  });
});
