import React from 'react';
import { mount } from 'enzyme';

import ContractListItem from '../index';

describe('<ContractListItem />', () => {
  const contractFixture = {
    title: 'sometitle',
    value: 'somevalue',
  }

  it('should have a className', () => {
    const renderedComponent = mount(<ContractListItem item={ contractFixture } />);
    expect(renderedComponent.find('li').prop('className')).toBeDefined();
  });

  it('should render the "title" and "value" prop', () => {
    const renderedComponent = mount(
      <ContractListItem item={ contractFixture } />
    );
    expect(renderedComponent.contains(<p>{ contractFixture.title }</p>)).toBe(true);
  });
});
