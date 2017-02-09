/**
 * Tests for HomePage sagas
 */

// import expect from 'expect';
// import { takeLatest } from 'redux-saga';
import {
  takeLatest,
  take,
  put,
  // fork,
  cancel
} from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/lib/utils';


import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_PROFILE } from '../constants';

import {
  // getUserProfileData, // action triggered in the router (see app/routes.js)
  getUserProfileDataSuccess,
  getUserProfileDataFail,
} from '../actions';

import { userProfileData, getUserProfileData } from '../sagas'


describe('userData Saga', () => {
  let getProfileGen;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    const actionPayload = { slug: 'someslug' }
    getProfileGen = getUserProfileData(actionPayload);
    const callDescriptor = getProfileGen.next().value; // eslint-disable-line no-unused-vars

    // init generator
    // const genInit = getProfileGen.next().value; // eslint-disable-line no-unused-vars
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

// describe('getUserProfileData Saga', () => {
//   const getUserProfileGen = getUserDataWatcher();
//
//   it('should watch for LOAD_REPOS action', () => {
//     const takeDescriptor = getUserProfileGen.next().value;
//     expect(takeDescriptor).toEqual(fork(takeLatest, LOAD_PROFILE, getUserData));
//   });
// });

describe('userProfileData Saga', () => {
  const userProfileDataSaga = userProfileData();
  const mockedTask = createMockTask();

  // let forkDescriptor;


  it('should start task to watch for LOAD_PROFILE action', () => {
    const takeLatestDescriptor = userProfileDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_PROFILE, getUserProfileData));
  });

  it('should yield until LOCATION_CHANGE action', () => {
    const takeDescriptor = userProfileDataSaga.next(mockedTask).value;
    expect(takeDescriptor).toEqual(take(LOCATION_CHANGE));
  });

  it('should cancel the forked task when LOCATION_CHANGE happens', () => {
    const cancelDescriptor = userProfileDataSaga.next().value;
    expect(cancelDescriptor).toEqual(cancel(mockedTask));
  });

  /*
  it('should asyncronously fork getUserDataWatcher saga', () => {
    forkDescriptor = userDataSaga.next();
    expect(forkDescriptor.value).toEqual(fork(getUserDataWatcher));
  });
*/
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
