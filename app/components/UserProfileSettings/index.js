/**
*
* UserProfileSettings
*
*/

import React, { PropTypes } from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Avatar from '../Avatar/'


export function UserProfileSettings(props) { // eslint-disable-line no-unused-vars
  /**
   *    extract props
   */
  const userData = props
  const { userID, username, level, avatarURL } = userData
  return (
    <div data-userID={ userID }>
      <h1><FormattedMessage { ...messages.header } /></h1>
      <Avatar
        src={ avatarURL }
        title={ `${messages.profilPicOf.defaultMessage} ${username}` }
        alt={ `${messages.profilPicOf.defaultMessage} ${username}` }
      />
      <button> EDIT </button>
      <h2>{ username }</h2><button> EDIT </button>
      <p>{ level }</p><button> EDIT </button>
    </div>
  );
}


/**
 * waiting for 'real passed props' to initiate propTypes check
 *
 */

UserProfileSettings.propTypes = {
  username: PropTypes.string,
  userID: PropTypes.string,
  level: PropTypes.string,
  avatarURL: PropTypes.string,
};

export default UserProfileSettings;
