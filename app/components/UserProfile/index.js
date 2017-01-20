/**
*
* UserProfile
*
*/

import React, { PropTypes } from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Avatar from './Avatar/'


export function UserProfile(props) { // eslint-disable-line no-unused-vars
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
      <h2>{ username }</h2>
      <p>{ level }</p>
    </div>
  );
}


/**
 * waiting for 'real passed props' to initiate propTypes check
 *
 */

UserProfile.propTypes = {
  username: PropTypes.string,
  userID: PropTypes.string,
  level: PropTypes.string,
  avatarURL: PropTypes.string,
};

export default UserProfile;
