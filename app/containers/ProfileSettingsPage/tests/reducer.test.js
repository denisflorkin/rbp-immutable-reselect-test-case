// import expect from 'expect';
import { fromJS } from 'immutable';

import profileSettingsPageReducer from '../reducer';

import {
  updateSetting,
  updateSettingSuccess,
  updateSettingFail,
} from '../actions'


describe('profileSettingsPageReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      isFetching: false,
      requestedSettingUpdateName: false,
      requestedSettingUpdateValue: false,
      error: false,
      successResponse: false,
    })
  })

  it('returns the initial state', () => {
    expect(profileSettingsPageReducer(undefined, {}))
      .toEqual(state);
  });

  it('handles updateSetting action correctly', () => {
    const name = 'someName'
    const value = 'someValue'
    const payload = { name, value }

    const expectedResult = state
      .set('isFetching', true)
      .set('error', false)
      .set('successResponse', false)
      .set('requestedSettingUpdateName', name)
      .set('requestedSettingUpdateValue', value)

    expect(profileSettingsPageReducer(state, updateSetting(payload)))
      .toEqual(expectedResult);
  });

  it('handles updateSettingSuccess action correctly', () => {
    const response = { data: 'some data' }

    const expectedResult = state
      .set('isFetching', false)
      .set('successResponse', response)

    expect(profileSettingsPageReducer(state, updateSettingSuccess(response)))
      .toEqual(expectedResult);
  });

  it('handles updateSettingFail action correctly', () => {
    const error = { msg: 'some err mssg' }

    const expectedResult = state
      .set('isFetching', false)
      .set('successResponse', false)
      .set('error', error)

    expect(profileSettingsPageReducer(state, updateSettingFail(error)))
      .toEqual(expectedResult);
  });
});
