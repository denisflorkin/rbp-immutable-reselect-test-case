// import expect from 'expect';
import { fromJS } from 'immutable';

import appReducer from '../reducer';
import {
  loadDefaultData,
  loadDefaultDataFail,
  loadDefaultDataSuccess,
} from '../actions';


describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      // userID: Cookie.get('userID'),            // read from cookie
      // userID: 'eHRSQHqergrz8tyjQetyjEtyry8G4P3',  // mock for now
      userData: false,
      teamMembers: false,
      // profileData: {},
      isFetching: false,
      error: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadDefaultData action correctly', () => {
    const expectedResult = state
      .set('isFetching', true)
      .set('error', false)
      .set('userData', false);

    expect(appReducer(state, loadDefaultData()))
      .toEqual(expectedResult);
  });

  it('should handle the loadDefaultDataSuccess action correctly', () => {
    const fixture = {
      userID: 'eHRSQHqergrz8tyjQetyjEtyry8G4P32',
      username: 'Von Mac Dhhur',
      level: 'FREESGO',
    };
    // const username = 'test';
    const expectedResult = state
      .set('isFetching', false)
      .set('error', false)
      .set('userData', fixture);

    expect(appReducer(state, loadDefaultDataSuccess(fixture)))
      .toEqual(expectedResult);
  });

  it('should handle the loadDefaultDataFail action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state
      .set('isFetching', false)
      .set('error', fixture)
      .set('isFetching', false);

    expect(appReducer(state, loadDefaultDataFail(fixture)))
      .toEqual(expectedResult);
  });
});
