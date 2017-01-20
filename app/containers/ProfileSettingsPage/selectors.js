import { createSelector } from 'reselect';

/**
 * Direct selector to the profileSettingsPage state domain
 */
const selectProfileSettingsPageDomain = () => (state) => state.get('profileSettingsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProfileSettingsPage
 */

const selectProfileSettingsPage = () => createSelector(
  selectProfileSettingsPageDomain(),
  (substate) => substate.toJS()
);

export default selectProfileSettingsPage;
export {
  selectProfileSettingsPageDomain,
};
