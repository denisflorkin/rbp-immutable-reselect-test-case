import { fromJS } from 'immutable';
// import expect from 'expect';

import {
  makeSelectLocationState,
  // selectUserData,
  selectGlobal,
} from 'containers/App/selectors';

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
