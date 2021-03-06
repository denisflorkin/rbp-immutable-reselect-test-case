/*
 *
 * ProfileSettingsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect'

import UserProfileSettings from 'components/UserProfileSettings'

import { makeSelectUserData } from 'containers/App/selectors'

import // selectProfileSettingsPageDomain,
{
  selectProfileSettingsPage,
  selectError,
  selectIsFetching,
  selectSuccessResponse,
  selectRequestedSettingUpdateName,
  selectRequestedSettingUpdateValue,
} from './selectors'


import {
  updateSetting,
} from './actions'

import messages from './messages';


export class ProfileSettingsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    userData: PropTypes.oneOfType([ PropTypes.bool, PropTypes.object ]),
    isFetching: PropTypes.bool,
    error: PropTypes.oneOfType([ PropTypes.bool, PropTypes.object ]),
    successResponse: PropTypes.oneOfType([ PropTypes.bool, PropTypes.object ]),
    settingUpdateName: PropTypes.oneOfType([ PropTypes.bool, PropTypes.string ]),
    settingUpdateValue: PropTypes.oneOfType([ PropTypes.bool, PropTypes.string ]),
  }

  getHelmet(userData) {
    const username =
      userData ? userData.username : 'loading'
    return (
      <Helmet
        title={ `ProfilePage edit : ${username}` }
        meta={ [
          { name: 'description', content: 'ProfilePage Edit' },
        ] }
      />)
  }

  preRenderUserProfile(userData) {
    return userData ?
      (<UserProfileSettings {...userData} />) : (<p>loading</p>)
  }

  render() {
    const { userData } = this.props
    const {               // eslint-disable-line no-unused-vars
      error,              // eslint-disable-line no-unused-vars
      isFetching,         // eslint-disable-line no-unused-vars
      settingUpdateName,  // eslint-disable-line no-unused-vars
      settingUpdateValue, // eslint-disable-line no-unused-vars
      successResponse,    // eslint-disable-line no-unused-vars
    } = this.props        // eslint-disable-line no-unused-vars

    return (
      <div>
        { this.getHelmet(userData) }
        <FormattedMessage {...messages.header} />
        { this.preRenderUserProfile(userData) }
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  userData: makeSelectUserData(),
  profileSettingsPage: selectProfileSettingsPage(),
  error: selectError(),
  isFetching: selectIsFetching(),
  successResponse: selectSuccessResponse(),
  requestedSettingUpdateName: selectRequestedSettingUpdateName(),
  requestedSettingUpdateValue: selectRequestedSettingUpdateValue(),
})

export function mapDispatchToProps(dispatch) {
  return {
    onRequestSettingUpdate: (payload) => {
      dispatch(updateSetting(payload))
    },
    // onRequestSettingUpdateSuccess: () => {
    //   dispatch(updateSettingSuccess())
    // },
    // onRequestSettingUpdateFail: () => {
    //   dispatch(updateSettingFail())
    // },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettingsPage);
