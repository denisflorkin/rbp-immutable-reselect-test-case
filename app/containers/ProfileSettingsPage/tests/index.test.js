
import { shallow/* , mount */ } from 'enzyme';
import React from 'react';
// import Helmet from 'react-helmet';

import { ProfileSettingsPage, mapDispatchToProps } from '../index';

import { updateSetting } from '../actions'

const renderComponent = (props = {}) => shallow(
  <ProfileSettingsPage { ...props } />
)

describe('<ProfileSettingsPage />', () => {
  it('should render a div', () => {
    expect(renderComponent({}).find('div').length).toEqual(1);
  });
/*
  describe('<ProfileSettingsPage /> getHelmet method', () => {
    it('render the meta appropriately if NO user data is passed', () => {
      const wrapper = renderComponent();
      const getHelmet = wrapper.instance().getHelmet

      const usreDataFix = false
      const result = getHelmet(usreDataFix)

      expect(result).toEqual(<Helmet
        title={ 'ProfilePage edit : loading' }
        meta={ [
          { name: 'description', content: 'ProfilePage Edit' },
        ] }
      />)
    })

    it('render the meta appropriately if user data IS passed', () => {
      const wrapper = renderComponent();
      const getHelmet = wrapper.instance().getHelmet

      const usreDataFix = { username: 'bil' }
      const result = getHelmet(usreDataFix)

      expect(result).toEqual(<Helmet
        title={ 'ProfilePage edit : bil' }
        meta={ [
          { name: 'description', content: 'ProfilePage Edit' },
        ] }
      />)
    })
  })
  describe('<ProfileSettingsPage /> preRenderUserProfile method', () => {
    it('renders a <p /> with "loading" string as child if userData are NOT passed', () => {
      const wrapper = renderComponent();
      const getHelmet = wrapper.instance().preRenderUserProfile

      const usreDataFix = { username: 'bil' }
      const result = getHelmet(usreDataFix)

      expect(result).toEqual(<p>loading</p>)
    })

    it('renders a <UserProfileSettings /> if userData are passed', () => {
      const renderComponent = (props = {}) => mount(
        <ProfileSettingsPage { ...props } />
      )
      const wrapper = renderComponent();
      const getHelmet = wrapper.instance().preRenderUserProfile

      const usreDataFix = { username: 'bil' }
      const result = getHelmet(usreDataFix)

      expect(result).toContain(<UserProfileSettings { ...userData } />)
    })
  })
  */

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
