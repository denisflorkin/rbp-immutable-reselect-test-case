// import expect from 'expect';
import { fromJS } from 'immutable';

import profileSettingsPageReducer from '../reducer';


describe('profileSettingsPageReducer', () => {
  it('returns the initial state', () => {
    expect(profileSettingsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
