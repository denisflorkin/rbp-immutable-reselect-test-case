import { createSelector } from 'reselect';

/**
 * Direct selector to the contracts state domain
 */
const selectContractsPageDomain = () => (state) => state.get('contracts');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Contracts
 */

const makeSelectContracts = () => createSelector(
  selectContractsPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectContracts;
export {
  selectContractsPageDomain,
};
