
import { shallow } from 'enzyme';
import React from 'react';

import { ProfileSettingsPage, mapDispatchToProps } from '../index';

import { updateSetting } from '../actions'

const renderComponent = (props = {}) => shallow(
  <ProfileSettingsPage { ...props } />
)

describe('<ProfileSettingsPage />', () => {
  it('should render a div', () => {
    expect(renderComponent({}).find('div').length).toEqual(1);
  });

  describe('mapDispatchToProps', () => {
    describe('onRequestSettingUpdate', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onRequestSettingUpdate).toBeDefined();
      });

      it('should dispatch updateSetting when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const payload = { name: 'name', value: 'val' }

        result.onRequestSettingUpdate(payload);

        expect(dispatch).toHaveBeenCalledWith(updateSetting(payload));
      });
    });
  });
});
