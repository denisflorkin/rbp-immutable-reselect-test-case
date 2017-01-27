import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

import Link from '../Link'

function Header(props) {
  const { pathname } = props
  return (
    <nav>
      <Link
        to="/"
        className={ pathname === '/' ? 'active-route' : '' }
      >
        <FormattedMessage { ...messages.links.homepage } />
      </Link>
      <Link
        to="/contracts"
        className={ pathname === '/contracts' ? 'active-route' : '' }
      >
        <FormattedMessage { ...messages.links.contracts } />
      </Link>
      <Link
        to="/about"
        className={ pathname === '/about' ? 'active-route' : '' }
      >
        {/* About */}
        <FormattedMessage { ...messages.links.about } />
      </Link>
    </nav>
  );
}

Header.propTypes = {
  pathname: React.PropTypes.string,
}

export default Header;
