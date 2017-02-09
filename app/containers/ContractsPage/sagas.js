/**
 * Gets the default data of the user contracts
 */
// import { takeLatest } from 'redux-saga';
import { takeLatest, take, call, put, cancel } from 'redux-saga/effects';
import request from 'utils/request';

import { LOCATION_CHANGE } from 'react-router-redux';
import { FETCH_CONTRACTS } from './constants';

import {
  // fetchContracts,
  fetchContractsSuccess,
  fetchContractsFail,
} from './actions';


export function* getContractData(action) { // eslint-disable-line no-unused-vars
  const requestURL =
    'https://localhost/projects/neoapi/contracts/GET.json'

  // console.log(' *getContractData', action)

  try {
    const contracts = yield call(request, requestURL);
    // console.log(' *getContractData contracts', contracts)

    yield put(fetchContractsSuccess(contracts));
  } catch (err) {
    yield put(fetchContractsFail(err));
  }
}

/**
 * Watches for LOAD_DEFAULT_DATA actions and calls getDefaultData when one comes in.
 * By using `takeLatest` only the result of the latest API call is applied.
 */
// export function* getContractsWatcher() {
//   yield fork(takeLatest, FETCH_CONTRACTS, getContractData);
// }

/**
 * Root saga manages watcher lifecycle
 */
export function* contractsData() {
  /* Should this be canceled on LOCATION_CHANGE ?? */

  // Fork watcher so we can continue execution
  const watcher = yield takeLatest(FETCH_CONTRACTS, getContractData);

  // const watcher = yield fork(getContractsWatcher);
  // yield fork(getUserDataWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  contractsData,
];
