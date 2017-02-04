
import { fromJS } from 'immutable';

import {
  selectGlobal,
  makeSelectUserData,
  makeSelectLocationState,
  makeSelectUserID,
} from 'containers/App/selectors';


describe('App selectors', () => {
  describe('selectGlobal', () => {
    const globalSelector = selectGlobal();
    it('should select the global state', () => {
      const globalState = fromJS({});
      const mockedState = fromJS({
        global: globalState,
      });
      expect(globalSelector(mockedState))
        .toEqual(globalState);
    });
  });

  describe('makeSelectUserData', () => {
    const userDataSelector = makeSelectUserData()

    it('should select userData as a plain JS object', () => {
      const userDataFix = fromJS({
        username: 'billy',
      });
      // const mockedState = fromJS({
      //     userData,
      // });
      const mockedGlobalState = fromJS({
        global: {
          userData: userDataFix
        }
      });
      expect(userDataSelector(mockedGlobalState))
        .toEqual(userDataFix.toJS());
    });
  });

  describe('makeSelectUserID', () => {
    const userDataSelector = makeSelectUserID()

    it('should select userID in userData as a plain JS object', () => {
      const userIdFix = 'someuserid'
      const userDataFix = fromJS({
        userID: userIdFix,
      });
      // const mockedState = fromJS({
      //     userData,
      // });
      const mockedGlobalState = fromJS({
        global: {
          userData: userDataFix
        }
      });
      expect(userDataSelector(mockedGlobalState))
        .toEqual(userIdFix);
    });
  });

  describe('makeSelectLocationState', () => {
    const locationSelector = makeSelectLocationState()
    it('should select the route as a plain JS object', () => {
      const route = fromJS({
        locationBeforeTransitions: null,
      });
      const mockedState = fromJS({
        route,
      });
      expect(locationSelector(mockedState))
        .toEqual(route.toJS());
    });
  });
})

/**
 * Something is wrong here :

  describe('selectUserData', () => {
    const userDataSelector = selectUserData()
    const globalSelector = selectGlobal();


    it('should select the userData', () => {
      const userData = fromJS({
        userID: 'myUserID',
      });
      const mockedState = fromJS({
        userData,
      });

      // console.log(selectUserData()(mockedState))
      expect(userDataSelector())
        .toEqual(userData.toJS());
    });
  });

*/
