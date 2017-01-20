/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import Link from '../../components/Link'


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    // const fakeID = 'eHRSQHqergrz8tyjQetyjEtyry8G4P32'
    const fakeUN = 'eHRSQHqergrz8tyjQetyjEtyry8G4P32'
    // const fakeID1 = 'eHRSQHqergrz8tyjQetyjEtyry8G4P3'
    const fakeUN1 = 'eHRSQHqergrz8tyjQetyjEtyry8G4P3'
    return (
      <div>
        <Helmet
          title="Dashboard"
          meta={[
            { name: 'description', content: 'Description of ProfilePage' },
          ]}
        />
        <h1>
          <FormattedMessage { ...messages.header } />
          <p><Link to={ `/profile/${fakeUN}` } key="zergzerg" >Billy</Link></p>
          <p><Link to={ `/profile/${fakeUN1}` } key="sdfbsfdb" >marc</Link></p>
        </h1>
      </div>
    );
  }
}
