/*
 *
 * ProfileSettingsPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect'

import UserProfileSettings from 'components/UserProfileSettings'
// import selectProfileSettingsPage from './selectors';
import { selectUserData } from 'containers/App/selectors'

import messages from './messages';


export class ProfileSettingsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    userData: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.object,
    ]),
  }

  preRenderUserProfile(userData) {
    return userData ?
      (<UserProfileSettings { ...userData } />) : (<p>loading</p>)
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

  render() {
    const { userData } = this.props


    return (
      <div>
        { this.getHelmet(userData) }
        { this.preRenderUserProfile(userData) }
        {/* <FormattedMessage { ...messages.header } /> */}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  userData: selectUserData(),
})
// selectProfileSettingsPage();

function mapDispatchToProps(/* dispatch */) {
  return {}
    // dispatch,
  // };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettingsPage);
