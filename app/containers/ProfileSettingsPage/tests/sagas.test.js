/**
 * Test  sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { cancel, take, put, takeLatest } from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/lib/utils';

import { LOCATION_CHANGE } from 'react-router-redux';
import { REQUEST_SETTING_UPDATE } from '../constants';

import {
  updateSettingSuccess,
  updateSettingFail,
} from '../actions';


import {
  requestSettingUpdate,
  userSettingsUpdate,
} from '../sagas'


// const reqSettingsUpdateGen = contractsData();

// describe('defaultSaga Saga', () => {
//   it('Expect to have unit tests specified', () => {
//     expect(true).toEqual(false);
//   });
// });

describe('requestSettingUpdate Saga', () => {
  let reqSettingsUpdateGen;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    reqSettingsUpdateGen = requestSettingUpdate();
    const callDescriptor = reqSettingsUpdateGen.next().value; // eslint-disable-line no-unused-vars
  });

  it('should dispatch the updateSettingSuccess action if it requests the data successfully', () => {
    const responseFixture = [{
      message: 'updated succesfuly',
      error: false,
    }];

    const putDescriptor = reqSettingsUpdateGen.next(responseFixture).value;
    expect(putDescriptor).toEqual(put(updateSettingSuccess(responseFixture)));
  });

  it('should call the updateSettingFail action if the response errors', () => {
    const errorFixture = new Error('Some error');
    const putDescriptor = reqSettingsUpdateGen.throw(errorFixture).value;
    expect(putDescriptor).toEqual(put(updateSettingFail(errorFixture)));
  });
});


describe('contractsData Saga', () => {
  const userSettingsUpdateGen = userSettingsUpdate();
  const mockedTask = createMockTask();

  it('should start task to watch for REQUEST_SETTING_UPDATE action', () => {
    const takeLatestDescriptor = userSettingsUpdateGen.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(REQUEST_SETTING_UPDATE, requestSettingUpdate));
  });

  it('should yield until LOCATION_CHANGE action', () => {
    const takeDescriptor = userSettingsUpdateGen.next(mockedTask).value;
    expect(takeDescriptor).toEqual(take(LOCATION_CHANGE));
  });

  it('should cancel the forked task when LOCATION_CHANGE happens', () => {
    const cancelDescriptor = userSettingsUpdateGen.next().value;
    expect(cancelDescriptor).toEqual(cancel(mockedTask));
  });
});


/*


// import expect from 'expect';
import { takeLatest } from 'redux-saga';
import {
  put,
  fork,
} from 'redux-saga/effects';

import {
  LOAD_PROFILE,
} from '../constants';

import {
  // getUserProfileData, // action triggered in the router (see app/routes.js)
  getUserProfileDataSuccess,
  getUserProfileDataFail,
} from '../actions';

import { userData, getUserData, getUserDataWatcher } from '../sagas'


describe('userData Saga', () => {
  let getProfileGen;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    const actionFixture = { slug: 'someslug' }
    getProfileGen = getUserData(actionFixture);

    // init generator
    const genInit = getProfileGen.next().value; // eslint-disable-line no-unused-vars
  });

  it('should dispatch the getUserProfileDataSuccess action if it requests the data successfully', () => {
    const responseFixture = {
      name: 'bil',
      someProp: 'someVal',
    };
    const putDescriptor = getProfileGen.next(responseFixture).value;
    expect(putDescriptor).toEqual(put(getUserProfileDataSuccess(responseFixture)));
  });

  it('should call the getUserProfileDataFail action if the response errors', () => {
    const errorFixture = new Error('Some error');
    const putDescriptor = getProfileGen.throw(errorFixture).value;
    expect(putDescriptor).toEqual(put(getUserProfileDataFail(errorFixture)));
  });
});

describe('getUserDataWatcher Saga', () => {
  const getUserGen = getUserDataWatcher();

  it('should watch for LOAD_REPOS action', () => {
    const takeDescriptor = getUserGen.next().value;
    expect(takeDescriptor).toEqual(fork(takeLatest, LOAD_PROFILE, getUserData));
  });
});

describe('userData Saga', () => {
  const userDataSaga = userData();

  let forkDescriptor;

  it('should asyncronously fork getUserDataWatcher saga', () => {
    forkDescriptor = userDataSaga.next();
    expect(forkDescriptor.value).toEqual(fork(getUserDataWatcher));
  });

  // it('should yield until LOCATION_CHANGE action', () => {
  //   const takeDescriptor = userDataSaga.next();
  //   expect(takeDescriptor.value).toEqual(take(LOCATION_CHANGE));
  // });

  // it('should finally cancel() the forked getUserDataWatcher saga',
  //    function* githubDataSagaCancellable() {
  //     // reuse open fork for more integrated approach
  //      forkDescriptor = userDataSaga.next(put(LOCATION_CHANGE));
  //      expect(forkDescriptor.value).toEqual(cancel(forkDescriptor));
  //    }
  //  );
});


*/
