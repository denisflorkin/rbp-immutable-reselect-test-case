/*
 *
 * ProfileSettingsPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_SETTING_UPDATE,
  REQUEST_SETTING_UPDATE_SUCCESS,
  REQUEST_SETTING_UPDATE_FAIL,
} from './constants';

const initialState = fromJS({
  isFetching: false,
  requestedSettingUpdateName: false,
  requestedSettingUpdateValue: false,
  error: false,
  successResponse: false,
});

function profileSettingsPageReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SETTING_UPDATE:
      return state
        .set('isFetching', true)
        .set('error', false)
        .set('successResponse', false)
        .set('requestedSettingUpdateName', action.payload.name)
        .set('requestedSettingUpdateValue', action.payload.value)

    case REQUEST_SETTING_UPDATE_SUCCESS:
      return state
        .set('isFetching', false)
        .set('successResponse', action.response)

    case REQUEST_SETTING_UPDATE_FAIL:
      return state
        .set('isFetching', false)
        .set('successResponse', false)
        .set('error', action.error)

    default:
      return state;
  }
}

export default profileSettingsPageReducer;
