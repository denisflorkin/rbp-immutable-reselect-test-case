
import { fromJS } from 'immutable';

import contractsReducer from '../reducer';

import {
  fetchContracts,
  fetchContractsSuccess,
  fetchContractsFail,
} from '../actions';

// import {
//   FETCH_CONTRACTS,
//   FETCH_CONTRACTS_SUCCESS,
//   FETCH_CONTRACTS_FAIL,
// } from '../constants';


describe('contractsReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      contracts: false,
      isFetching: false,
      error: false,
    })
  })


  it('returns the initial state', () => {
    expect(contractsReducer(undefined, {}))
      .toEqual(state)
  });

  it('handles fetchContracts action correctly', () => {
    const userID = 'someUserID'

    const expectedResult = state
      .set('isFetching', true)
      .set('error', false)
      .set('contracts', false)

    expect(contractsReducer(state, fetchContracts(userID)))
      .toEqual(expectedResult);
  });

  it('handles fetchContractsSuccess action correctly', () => {
    const contracts = [{ some: 'sstuff' }]

    const expectedResult = state
      .set('isFetching', false)
      .set('error', false)
      .set('contracts', contracts)

    expect(contractsReducer(state, fetchContractsSuccess(contracts)))
      .toEqual(expectedResult);
  });

  it('handles fetchContractsFail action correctly', () => {
    const error = { some: 'error msg' }

    const expectedResult = state
      .set('isFetching', false)
      .set('error', error)
      .set('contracts', false)

    expect(contractsReducer(state, fetchContractsFail(error)))
      .toEqual(expectedResult);
  });
});
