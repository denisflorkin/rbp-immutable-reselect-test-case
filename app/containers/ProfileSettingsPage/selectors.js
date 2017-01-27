import { createSelector } from 'reselect';

/**
 * Direct selector to the profileSettingsPage state domain
 */
const selectProfileSettingsPageDomain = () => (state) => state.get('profileSettingsPage');


/**
 * Default selector used by ProfileSettingsPage (take th eMap and return JS)
 */
const selectProfileSettingsPage = () => createSelector(
  selectProfileSettingsPageDomain(),
  (substate) => substate.toJS()
);


/**
 * Other specific selectors
 */
const selectError = () => createSelector(
  selectProfileSettingsPageDomain(),
  (substate) => substate.get('error')
);

const selectIsFetching = () => createSelector(
  selectProfileSettingsPageDomain(),
  (substate) => substate.get('isFetching')
);

const selectRequestedSettingUpdateName = () => createSelector(
  selectProfileSettingsPageDomain(),
  (substate) => substate.get('requestedSettingUpdateName')
);

const selectRequestedSettingUpdateValue = () => createSelector(
  selectProfileSettingsPageDomain(),
  (substate) => substate.get('requestedSettingUpdateValue')
);

const selectSuccessResponse = () => createSelector(
  selectProfileSettingsPageDomain(),
  (substate) => substate.get('successResponse')
);


export default selectProfileSettingsPageDomain;
export {
  selectProfileSettingsPage,

  selectError,
  selectIsFetching,
  selectRequestedSettingUpdateName,
  selectRequestedSettingUpdateValue,
  selectSuccessResponse,
};
