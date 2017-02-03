/**
 * Gets the default data of the user
 */
// import { takeLatest } from 'redux-saga';
import { takeLatest, take, call, put, cancel } from 'redux-saga/effects';
import request from 'utils/request';

import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_PROFILE } from './constants';

import {
  // getUserProfileData, // action triggered in the router (see app/routes.js)
  getUserProfileDataSuccess,
  getUserProfileDataFail,
} from './actions';


export function* getUserProfileData(action) {
  const requestURL =
    `https://localhost/projects/neoapi/user/${action.slug}/GET.json`

  try {
    const userprofile = yield call(request, requestURL);

    yield put(getUserProfileDataSuccess(userprofile));
  } catch (err) {
    yield put(getUserProfileDataFail(err));
  }
}

/**
 * Watches for LOAD_DEFAULT_DATA actions and calls getDefaultData when one comes in.
 * By using `takeLatest` only the result of the latest API call is applied.
 */
// export function* getUserProfileDataWatcher() {
//   yield fork(takeLatest, LOAD_PROFILE, getUserProfileData);
// }

/**
 * Root saga manages watcher lifecycle
 */
export function* userProfileData() {
  /* Should this be canceled on LOCATION_CHANGE ?? */

  // Fork watcher so we can continue execution
  const watcher = yield takeLatest(LOAD_PROFILE, getUserProfileData); // no need to sotre if no cancel
  // yield fork(getUserProfileDataWatcher);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  userProfileData,
];
