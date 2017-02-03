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

export function fetchContracts() {
  return {
    type: FETCH_CONTRACTS,
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
