import { createSelector } from 'reselect';

/**
 * Direct selector to the contracts state domain
 */
const selectContractsDomain = () => (state) => state.get('contracts');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Contracts
 */

const makeSelectContracts = () => createSelector(
  selectContractsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectContracts;
export {
  selectContractsDomain,
};
