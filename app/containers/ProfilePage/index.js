/*
 * ProfilePage
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';

import { selectProfileData } from './selectors';
import { makeSelectUserData } from '../App/selectors';

import Link from '../../components/Link'

import messages from './messages';
import UserProfile from '../../components/UserProfile'


export class ProfilePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    userData: PropTypes.oneOfType([ PropTypes.object, PropTypes.bool ]),
    profileData: PropTypes.oneOfType([ PropTypes.object, PropTypes.bool ]),
  }

  getProfileSettingsLink(loggedInUserData, profileData) {
    return (
      loggedInUserData && profileData &&
      loggedInUserData.userID === profileData.userID) ?
        (<Link to="/profile-settings" >EDIT</Link>) : ([])
  }

  getHelmet(profileData) {
    const username =
      profileData ? profileData.username : 'loading'
    return (
      <Helmet
        title={ `ProfilePage : ${username}` }
        meta={ [
          { name: 'description', content: 'ProfilePage' },
        ] }
      />)
  }

  preRenderUserProfile(profileData) {
    return profileData ?
      (<UserProfile { ...profileData } />) : (<p>loading</p>)
  }

  render() {
    const profileData = this.props.profileData
    const loggedInUserData = this.props.userData
    return (
      <div>
        <FormattedMessage { ...messages.header } />
        { this.getHelmet(profileData) }
        { this.getProfileSettingsLink(loggedInUserData, profileData) }
        { this.preRenderUserProfile(profileData) }
      </div>
    );
  }
}

// prep `mapStateToProps`for react-reduc connect
const mapStateToProps = createStructuredSelector({
  userData: makeSelectUserData(),
  profileData: selectProfileData(),
});

// prep `mapDispatchToProps`for react-reduc connect
export function mapDispatchToProps(dispatch) { // eslint-disable-line no-unused-vars
  return {}
    // dispatch,   // no actions here so this one if to just pass something I guess
    // the load_profile action is dispatch in the router in app/routes.js
  // };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
