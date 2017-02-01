/*
 *
 * Contracts reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FETCH_CONTRACTS,
  FETCH_CONTRACTS_SUCCESS,
  FETCH_CONTRACTS_FAIL,
} from './constants';

const initialState = fromJS({
  contracts: false,
  isFetching: false,
  error: false,
});

function contractsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTRACTS:
      return state
        .set('isFetching', true)
        .set('contracts', false)
        .set('error', false)

    case FETCH_CONTRACTS_SUCCESS:
      return state
        .set('isFetching', false)
        .set('error', false)
        .set('contracts', action.contracts)

    case FETCH_CONTRACTS_FAIL:
      return state
        .set('isFetching', false)
        .set('contracts', false)
        .set('error', action.error)

    default:
      return state;
  }
}

export default contractsReducer;
