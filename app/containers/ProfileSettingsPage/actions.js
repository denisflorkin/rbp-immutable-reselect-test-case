/*
 *
 * ProfileSettingsPage actions
 *
 */

import {
  REQUEST_SETTING_UPDATE,
  REQUEST_SETTING_UPDATE_SUCCESS,
  REQUEST_SETTING_UPDATE_FAIL,
} from './constants';

export function updateSetting(payload) {
  return {
    type: REQUEST_SETTING_UPDATE,
    payload: {
      name: payload.name,
      value: payload.value,
    },
  };
}

export function updateSettingSuccess(response) {
  return {
    type: REQUEST_SETTING_UPDATE_SUCCESS,
    response,
  };
}

export function updateSettingFail(error) {
  return {
    type: REQUEST_SETTING_UPDATE_FAIL,
    error,
  };
}
