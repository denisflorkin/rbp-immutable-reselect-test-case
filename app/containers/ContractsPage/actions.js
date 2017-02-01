/*
 *
 * Contracts actions
 *
 */

import {
  FETCH_CONTRACTS,
  FETCH_CONTRACTS_SUCCESS,
  FETCH_CONTRACTS_FAIL,
} from './constants';

export function fetchContracts(userID) {
  return {
    type: FETCH_CONTRACTS,
    userID,
  };
}

export function fetchContractsSuccess(contracts) {
  return {
    type: FETCH_CONTRACTS_SUCCESS,
    contracts,
  };
}

export function fetchContractsFail(error) {
  return {
    type: FETCH_CONTRACTS_FAIL,
    error,
  };
}
