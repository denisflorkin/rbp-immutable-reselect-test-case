/**
 * Gets the default data of the user contracts
 */
// import { takeLatest } from 'redux-saga';
import { takeLatest, take, call, put, cancel } from 'redux-saga/effects';
import request from 'utils/request';

import { LOCATION_CHANGE } from 'react-router-redux';
import { REQUEST_SETTING_UPDATE } from './constants';

import {
  // fetchContracts,
  updateSettingSuccess,
  updateSettingFail,
} from './actions';

export function* requestSettingUpdate(action) { // eslint-disable-line no-unused-vars
  const requestURL =
    'https://localhost/projects/neoapi/userinfos/POST.update.php'

  // console.log(' *requestSettingUpdate', action)

  try {
    const contracts = yield call(request, requestURL);
    // console.log(' *requestSettingUpdate contracts', contracts)

    yield put(updateSettingSuccess(contracts));
  } catch (err) {
    yield put(updateSettingFail(err));
  }
}

/**
 * Watches for LOAD_DEFAULT_DATA actions and calls getDefaultData when one comes in.
 * By using `takeLatest` only the result of the latest API call is applied.
 */
// export function* getContractsWatcher() {
//   yield fork(takeLatest, FETCH_CONTRACTS, requestSettingUpdate);
// }

/**
 * Root saga manages watcher lifecycle
 */
export function* userSettingsUpdate() {
  /* Should this be canceled on LOCATION_CHANGE ?? */

  // Fork watcher so we can continue execution
  const watcher = yield takeLatest(REQUEST_SETTING_UPDATE, requestSettingUpdate);

  // const watcher = yield fork(getContractsWatcher);
  // yield fork(getUserDataWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  userSettingsUpdate,
];
