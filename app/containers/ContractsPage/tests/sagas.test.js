/**
 * Test  sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { cancel, take, put, takeLatest } from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/lib/utils';

import { LOCATION_CHANGE } from 'react-router-redux';
import { FETCH_CONTRACTS } from '../constants';

import {
  // fetchContracts,
  fetchContractsSuccess,
  fetchContractsFail,
} from '../actions';

import {
  contractsData,
  getContractData,
  // getContractDataWatcher,
} from '../sagas'


// const contractsDataGen = contractsData();

// describe('defaultSaga Saga', () => {
//   it('Expect to have unit tests specified', () => {
//     expect(true).toEqual(false);
//   });
// });

describe('getContractData Saga', () => {
  let contractsDataGen;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    contractsDataGen = getContractData();
    const callDescriptor = contractsDataGen.next().value; // eslint-disable-line no-unused-vars
  });

  it('should dispatch the fetchContractsSuccess action if it requests the data successfully', () => {
    const responseFixture = [{
      name: 'bil',
      someProp: 'someVal',
    }];

    const putDescriptor = contractsDataGen.next(responseFixture).value;
    expect(putDescriptor).toEqual(put(fetchContractsSuccess(responseFixture)));
  });

  it('should call the fetchContractsFail action if the response errors', () => {
    const errorFixture = new Error('Some error');
    const putDescriptor = contractsDataGen.throw(errorFixture).value;
    expect(putDescriptor).toEqual(put(fetchContractsFail(errorFixture)));
  });
});


describe('contractsData Saga', () => {
  const contractsDataSaga = contractsData();
  const mockedTask = createMockTask();

  it('should start task to watch for FETCH_CONTRACTS action', () => {
    const takeLatestDescriptor = contractsDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(FETCH_CONTRACTS, getContractData));
  });

  it('should yield until LOCATION_CHANGE action', () => {
    const takeDescriptor = contractsDataSaga.next(mockedTask).value;
    expect(takeDescriptor).toEqual(take(LOCATION_CHANGE));
  });

  it('should cancel the forked task when LOCATION_CHANGE happens', () => {
    const cancelDescriptor = contractsDataSaga.next().value;
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
