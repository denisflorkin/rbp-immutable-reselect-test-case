/**
*
* Footer
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import A from '../A'

function Footer() {
  return (
    <div>
      <FormattedMessage { ...messages.header } />
      <A href="http://example.com" target="_blank">
        Liens externe
      </A>
    </div>
  );
}

export default Footer;
