
import { fromJS } from 'immutable';
import contractsReducer from '../reducer';

describe('contractsReducer', () => {
  const initialContractsStateFixture = fromJS({
    contracts: false,
    isFetching: false,
    error: false,
  })


  it('returns the initial state', () => {
    expect(contractsReducer(undefined, {}))
      .toEqual(initialContractsStateFixture)
  });
});
