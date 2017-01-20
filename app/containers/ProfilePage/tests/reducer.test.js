// import expect from 'expect';
import { fromJS } from 'immutable';

import profilePageReducer from '../reducer';

import {
  getUserProfileData,
  getUserProfileDataSuccess,
  getUserProfileDataFail,
} from '../actions';


describe('ProfilePageReducer', () => {
  let state;

  beforeEach(() => {
    state = fromJS({
      userData: false,
      isFetching: false,
      error: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(profilePageReducer(undefined, {}))
      .toEqual(expectedResult);
  });

  it('should handle the getUserProfileData action correctly', () => {
    // const fixture = 'mxstbr';
    const expectedResult = state
      .set('isFetching', true)
      .set('error', false)
      .set('userData', false);

    expect(profilePageReducer(state, getUserProfileData()))
     .toEqual(expectedResult);
  });

  it('should handle the getUserProfileDataSuccess action correctly', () => {
    const profileFixture = {
      someProp: 'someVal',
      foo: 'bar',
    }

    const expectedResult = state
      .set('isFetching', false)
      .set('error', false)
      .set('userData', profileFixture);

    expect(profilePageReducer(state, getUserProfileDataSuccess(profileFixture)))
     .toEqual(expectedResult);
  });

  it('should handle the getUserProfileDataFail action correctly', () => {
    const errorFixture = { msg: 'someError' };
    const expectedResult = state
      .set('isFetching', false)
      .set('error', errorFixture)
      .set('userData', false);

    expect(profilePageReducer(state, getUserProfileDataFail(errorFixture)))
     .toEqual(expectedResult);
  });
});
