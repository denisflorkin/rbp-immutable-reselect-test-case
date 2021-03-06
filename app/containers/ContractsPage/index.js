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

import {
  makeSelectContracts,
  makeSelectIsFetching,
  makeSelectError,
} from './selectors';

import messages from './messages';


// const fakeData = [
//   {
//     title: 'some title',
//     value: 'foo',
//   }, {
//     title: 'some other title',
//     value: 'bar',
//   }, {
//     title: 'yet another title',
//     value: 'foobar',
//   },
// ]

export class ContractsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    // const isFetching = false;
    const { contracts, isFetching, error } = this.props
    return (
      <div>
        <Helmet
          title="Contracts"
          meta={ [
            { name: 'description', content: 'Description of Contracts' },
          ] }
        />
        <ContractsList
          contracts={ contracts }
          loading={ isFetching }
          error={ error }
        />
        <FormattedMessage { ...messages.header } />
      </div>
    );
  }
}

ContractsPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  contracts: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.array,
  ]).isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]).isRequired,
};

export const mapStateToProps = createStructuredSelector({
  contracts: makeSelectContracts(),
  isFetching: makeSelectIsFetching(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) { // eslint-disable-line no-unused-vars
  return {
    // dispatch, // default action trigger in routes.js
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContractsPage);

// export default connect(mapStateToProps, () => {})(ContractsPage);
