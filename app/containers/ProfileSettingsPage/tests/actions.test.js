// import expect from 'expect';
import {
  updateSetting,
  updateSettingSuccess,
  updateSettingFail,
} from '../actions'

import {
  REQUEST_SETTINGS_UPDATE,
  REQUEST_SETTINGS_UPDATE_SUCCESS,
  REQUEST_SETTINGS_UPDATE_FAIL,
} from '../constants';

describe('ProfileSettingsPage actions', () => {
  describe('updateSetting', () => {
    it('has a type of REQUEST_SETTINGS_UPDATE', () => {
      const name = 'n'
      const value = 'foo'
      const expected = {
        type: REQUEST_SETTINGS_UPDATE,
        payload: {
          name,
          value,
        },
      };
      expect(updateSetting(name, value)).toEqual(expected);
    });
  });


  describe('updateSettingSuccess', () => {
    fit('has a type of REQUEST_SETTINGS_UPDATE_SUCCESS', () => {
      const response = { someKey: 'stuff' }
      const expected = {
        type: REQUEST_SETTINGS_UPDATE_SUCCESS,
        response,
      };
      expect(updateSettingSuccess(response)).toEqual(expected);
    });
  });

  describe('updateSettingFail', () => {
    it('has a type of REQUEST_SETTINGS_UPDATE_FAIL', () => {
      const error = new Error('some error message')
      const expected = {
        type: REQUEST_SETTINGS_UPDATE_FAIL,
        error,
      };
      expect(updateSettingFail(error)).toEqual(expected);
    });
  });
});
