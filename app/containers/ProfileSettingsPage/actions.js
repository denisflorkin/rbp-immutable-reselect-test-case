/*
 *
 * ProfileSettingsPage actions
 *
 */

import {
  REQUEST_SETTINGS_UPDATE,
  REQUEST_SETTINGS_UPDATE_SUCCESS,
  REQUEST_SETTINGS_UPDATE_FAIL,
} from './constants';

export function updateSetting(payload) {
  return {
    type: REQUEST_SETTINGS_UPDATE,
    payload: {
      name: payload.name,
      value: payload.value,
    },
  };
}

export function updateSettingSuccess(response) {
  return {
    type: REQUEST_SETTINGS_UPDATE_SUCCESS,
    response,
  };
}

export function updateSettingFail(error) {
  return {
    type: REQUEST_SETTINGS_UPDATE_FAIL,
    error,
  };
}
