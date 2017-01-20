
import {
  LOAD_PROFILE,
  LOAD_PROFILE_SUCCESS,
  LOAD_PROFILE_FAIL,
} from './constants'


export function getUserProfileData(slug) {
  return {
    type: LOAD_PROFILE,
    slug,
  };
}

export function getUserProfileDataSuccess(profile) {
  return {
    type: LOAD_PROFILE_SUCCESS,
    profile,
  };
}

export function getUserProfileDataFail(error) {
  return {
    type: LOAD_PROFILE_FAIL,
    error,
  };
}
