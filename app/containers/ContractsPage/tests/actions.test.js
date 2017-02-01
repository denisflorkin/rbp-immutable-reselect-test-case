
import {
  fetchContracts,
  fetchContractsSuccess,
  fetchContractsFail,
} from '../actions';
import {
  FETCH_CONTRACTS,
  FETCH_CONTRACTS_SUCCESS,
  FETCH_CONTRACTS_FAIL,
} from '../constants';


const contractsFix = [
  {
    title: 'some title',
    value: 'foo',
  }, {
    title: 'some other title',
    value: 'bar',
  }, {
    title: 'yet another title',
    value: 'foobar',
  },
]

describe('Contracts actions', () => {
  describe('fetchContracts action', () => {
    it('has a type of FETCH_CONTRACTS', () => {
      const userIDFix = 'someUserID'
      const expected = {
        type: FETCH_CONTRACTS,
        userID: userIDFix,
      };

      expect(fetchContracts(userIDFix)).toEqual(expected);
    });
  });

  describe('fetchContractsSuccess action', () => {
    it('has a type of FETCH_CONTRACTS_SUCCESS', () => {
      const expected = {
        type: FETCH_CONTRACTS_SUCCESS,
        contracts: contractsFix,
      };

      expect(fetchContractsSuccess(contractsFix)).toEqual(expected);
    });
  });

  describe('fetchContractsFail action', () => {
    it('has a type of FETCH_CONTRACTS_FAIL', () => {
      const errorFix = { message: 'some error msg' }
      const expected = {
        type: FETCH_CONTRACTS_FAIL,
        error: errorFix,
      };

      expect(fetchContractsFail(errorFix)).toEqual(expected);
    });
  });
});
