/*
 *
 * Contracts
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import ContractsList from 'components/ContractsList'

import { makeSelectContracts } from './selectors';
import messages from './messages';


const fakeData = [
  {
    title: 'some title',
    value: 'foo',
  }, {
    title: 'some other title',
    value: 'bar',
  }, {
    title: 'yet another title',
    value: 'foobar',
  },
]

export class ContractsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const isFetching = false;
    return (
      <div>
        <Helmet
          title="Contracts"
          meta={ [
            { name: 'description', content: 'Description of Contracts' },
          ] }
        />
        <ContractsList
          contracts={ fakeData }
          loading={ isFetching }
          error={ false }
        />
        <FormattedMessage { ...messages.header } />
      </div>
    );
  }
}

ContractsPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  contracts: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  contracts: makeSelectContracts(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContractsPage);
