
import { fromJS } from 'immutable';
import contractsReducer from '../reducer';

describe('contractsReducer', () => {
  it('returns the initial state', () => {
    expect(contractsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
