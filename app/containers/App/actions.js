
import {
  LOAD_DEFAULT_DATA,
  LOAD_DEFAULT_DATA_SUCCESS,
  LOAD_DEFAULT_DATA_FAIL,
} from './constants'

export function loadDefaultData() {
  console.log(loadDefaultData)
  return {
    type: LOAD_DEFAULT_DATA,
  }
}

export function loadDefaultDataFail(error) {
  return {
    type: LOAD_DEFAULT_DATA_FAIL,
    error,
  }
}

export function loadDefaultDataSuccess(data) {
  return {
    type: LOAD_DEFAULT_DATA_SUCCESS,
    data,
  }
}
