/*
 *
 * ProfileSettingsPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import selectProfileSettingsPage from './selectors';
import messages from './messages';


export class ProfileSettingsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="ProfileSettingsPage"
          meta={[
            { name: 'description', content: 'Description of ProfileSettingsPage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

const mapStateToProps = selectProfileSettingsPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettingsPage);
