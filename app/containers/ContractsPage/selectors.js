import { createSelector } from 'reselect';

/**
 * Direct selector to the contracts state domain
 */
const selectContractsPageDomain = () => (state) => state.get('contractsPage');

/**
 * Other specific selectors
 */
const makeSelectContracts = () => createSelector(
  selectContractsPageDomain(),
  (substate) => substate.get('contracts').toJS()
);

const makeSelectIsFetching = () => createSelector(
  selectContractsPageDomain(),
  (substate) => substate.get('isFetching')// .toJS() // because go figure out why ('cause primitive value ?)
);

const makeSelectError = () => createSelector(
  selectContractsPageDomain(),
  (substate) => substate.get('error').toJS()
);

/**
 * Default selector used by ContractsPage
 */


export {
  selectContractsPageDomain,
  makeSelectContracts,
  makeSelectIsFetching,
  makeSelectError,
};
