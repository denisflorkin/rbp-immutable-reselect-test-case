import { createSelector } from 'reselect';

/**
 * Direct selector to the profilePage state domain
 */
const selectGlobalDomain = () => (state) => state.get('global');

const selectProfilePageDomain = () => (state) => state.get('profilePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProfilePage
 */

const selectProfileData = () => createSelector(
  selectProfilePageDomain(),
  (substate) => substate.get('userData')
);

export default selectProfileData;
export {
  selectGlobalDomain,
  selectProfilePageDomain,
  selectProfileData,
};
