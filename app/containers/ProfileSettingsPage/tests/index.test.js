
import { shallow } from 'enzyme';
import React from 'react';

import { ProfileSettingsPage } from '../index';


const renderComponent = (props = {}) => shallow(
  <ProfileSettingsPage { ...props } />
)

describe('<ProfileSettingsPage />', () => {
  it('should render a div', () => {
    expect(renderComponent({}).find('div').length).toEqual(1);
  });
});
