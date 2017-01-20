/*
 * ProfilePageReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  LOAD_PROFILE,
  LOAD_PROFILE_SUCCESS,
  LOAD_PROFILE_FAIL,
} from './constants';


// The initial state of the App
const initialState = fromJS({
  // userID: Cookie.get('userID'),            // read from cookie
  // userID: 'eHRSQHqergrz8tyjQetyjEtyry8G4P3',  // mock for now
  userData: false,
  isFetching: false,
  error: false,
});

function ProfilePageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PROFILE:
      return state
        .set('isFetching', true)
        .set('error', false)
        .set('userData', false);

    case LOAD_PROFILE_SUCCESS:
      return state
        .set('isFetching', false)
        .set('error', false)
        .set('userData', action.profile);

    case LOAD_PROFILE_FAIL:
      return state
        .set('isFetching', false)
        .set('error', action.error)
        .set('userData', false);

    default:
      return state;
  }
}

export default ProfilePageReducer;
