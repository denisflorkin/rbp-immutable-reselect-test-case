/*
 * AppReducer
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
  LOAD_DEFAULT_DATA,
  LOAD_DEFAULT_DATA_SUCCESS,
  LOAD_DEFAULT_DATA_FAIL,
} from './constants';


// The initial state of the App
const initialState = fromJS({
  // userID: Cookie.get('userID'),            // read from cookie
  // userID: 'eHRSQHqergrz8tyjQetyjEtyry8G4P3',  // mock for now
  userData: false,
  teamMembers: false,
  // profileData: {},
  isFetching: false,
  error: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DEFAULT_DATA:
      // console.log('disaptcher : LOAD_DEFAULT_DATA case')
      return state
        .set('isFetching', true)
        .set('error', false)
        .set('userData', false);

    case LOAD_DEFAULT_DATA_SUCCESS:
      console.log('disaptcher : LOAD_DEFAULT_DATA_SUCCESS case', action)
      return state
        .set('isFetching', false)
        .set('error', false)
        .set('userData', action.data);

    case LOAD_DEFAULT_DATA_FAIL:
      // console.log('disaptcher : LOAD_DEFAULT_DATA_FAIL case', action)
      return state
        .set('isFetching', false)
        .set('error', action.error)
        .set('isFetching', false);

    default:
      return state;
  }
}

export default appReducer;
