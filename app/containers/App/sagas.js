/**
 * Gets the default data of the user
 */
import request from 'utils/request';
import { takeLatest } from 'redux-saga';
import {
  // take,
  call,
  put,
  // select,
  fork,
  // cancel
} from 'redux-saga/effects';

// import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_DEFAULT_DATA } from './constants';
import {
  loadDefaultDataSuccess,
  loadDefaultDataFail,
} from './actions';

// import { selectUserID } from './selectors';


export function* getDefaultData() {
  // Select userID from store
  // const userID = yield select(selectUserID());
  const requestURL =
    'https://localhost/projects/neoapi/me/GET.json'

  try {
    // Call our request helper (see 'utils/request')
    const userData = yield call(request, requestURL);
    console.log('*getDefaultData userData', userData)
    yield put(loadDefaultDataSuccess(userData));
  } catch (err) {
    yield put(loadDefaultDataFail(err));
  }
  // return;
}

/**
 * Watches for LOAD_DEFAULT_DATA actions and calls getDefaultData when one comes in.
 * By using `takeLatest` only the result of the latest API call is applied.
 */
export function* getDefaultDataWatcher() {
  yield fork(takeLatest, LOAD_DEFAULT_DATA, getDefaultData);
}

/**
 * Root saga manages watcher lifecycle
 */
export function* defaultData() {
  console.log(' App *defaultData')
  // Fork watcher so we can continue execution
  const watcher = yield fork(getDefaultDataWatcher);  // eslint-disable-line no-unused-vars

  // Suspend execution until location changes
  // yield take(LOCATION_CHANGE);
  // yield cancel(watcher);
}

// Bootstrap sagas
export default [
  defaultData,
];
