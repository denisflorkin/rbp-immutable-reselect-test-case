// import expect from 'expect';

import {
  LOAD_PROFILE,
  LOAD_PROFILE_SUCCESS,
  LOAD_PROFILE_FAIL,
} from '../constants';

import {
  getUserProfileData,
  getUserProfileDataSuccess,
  getUserProfileDataFail,
} from '../actions';

describe('ProfilePage Actions', () => {
  describe('getUserProfileData', () => {
    it('should return the correct type and the passed slug', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: LOAD_PROFILE,
        slug: fixture,
      };

      expect(getUserProfileData(fixture)).toEqual(expectedResult);
    });
  });

  describe('getUserProfileDataSuccess', () => {
    it('should return the correct type and the passed profile', () => {
      const fixture = {
        some: 'data',
        foo: 'bar',
      };
      const expectedResult = {
        type: LOAD_PROFILE_SUCCESS,
        profile: fixture,
      };

      expect(getUserProfileDataSuccess(fixture)).toEqual(expectedResult);
    });
  });

  describe('getUserProfileDataFail', () => {
    it('should return the correct type and the passed error', () => {
      const fixture = {
        error: 'some error',
      };
      const expectedResult = {
        type: LOAD_PROFILE_FAIL,
        error: fixture,
      };

      expect(getUserProfileDataFail(fixture)).toEqual(expectedResult);
    });
  });
});
