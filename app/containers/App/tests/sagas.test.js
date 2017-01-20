/**
 * Tests for App sagas
 */
import request from 'utils/request';
import { takeLatest } from 'redux-saga';
import {
  // take,
  call,
  put,
  // select,
  fork,
  // cancel,
} from 'redux-saga/effects';
// import { LOCATION_CHANGE } from 'react-router-redux';

import {
  getDefaultData,
  getDefaultDataWatcher,
  defaultData,
} from '../sagas';
import { LOAD_DEFAULT_DATA } from '../../App/constants';
import {
  loadDefaultDataSuccess,
  loadDefaultDataFail,
} from '../../App/actions';


describe('getDefaultData Saga', () => {
  let getDefaultDataGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getDefaultDataGenerator = getDefaultData();

    const requestURL = 'https://localhost/projects/neoapi/me/GET.json';
    const callDescriptor = getDefaultDataGenerator.next().value;
    expect(callDescriptor).toEqual(call(request, requestURL));
  });

  it('should dispatch the loadDefaultDataSuccess action if it requests the data successfully', () => {
    const response = [{
      name: 'First repo',
    }, {
      name: 'Second repo',
    }];
    const putDescriptor = getDefaultDataGenerator.next(response).value;
    expect(putDescriptor)
      .toEqual(put(loadDefaultDataSuccess(response)));
  });

  it('should call the loadDefaultDataFail action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getDefaultDataGenerator.throw(response).value;
    expect(putDescriptor)
      .toEqual(put(loadDefaultDataFail(response)));
  });
});

describe('getDefaultDataWatcher Saga', () => {
  const getDefaultDataWatcherGenerator =
    getDefaultDataWatcher();

  it('should watch for LOAD_DEFAULT_DATA action', () => {
    const takeDescriptor =
      getDefaultDataWatcherGenerator.next().value;
    expect(takeDescriptor)
      .toEqual(fork(takeLatest, LOAD_DEFAULT_DATA, getDefaultData));
  });
});

describe('defaultData Saga', () => {
  const defaultDataSaga = defaultData();

  let forkDescriptor;

  it('should asyncronously fork getDefaultDataWatcher saga', () => {
    forkDescriptor = defaultDataSaga.next();
    expect(forkDescriptor.value).toEqual(fork(getDefaultDataWatcher));
  });
/*
  it('should yield until LOCATION_CHANGE action', () => {
    const takeDescriptor = defaultDataSaga.next();
    expect(takeDescriptor.value).toEqual(take(LOCATION_CHANGE));
  });

  it('should finally cancel() the forked getDefaultDataWatcher saga',
     function* githubDataSagaCancellable() {
      // reuse open fork for more integrated approach
       forkDescriptor = defaultDataSaga.next(put(LOCATION_CHANGE));
       expect(forkDescriptor.value).toEqual(cancel(forkDescriptor));
     }
   )
   */
});
