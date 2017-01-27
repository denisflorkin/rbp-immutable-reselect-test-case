import React, { PropTypes } from 'react';

import List from 'components/List';
import ContractListItem from 'containers/ContractListItem';
import LoadingIndicator from 'components/LoadingIndicator';
// import RepoContactsListItem from 'containers/RepoContactsListItem';

function ContractsList({ loading, error, contracts }) {
  if (loading) {
    return <List component={ LoadingIndicator } />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ContractListItem item={ 'Something went wrong, please try again!' } />
    );
    return <List component={ ErrorComponent } />;
  }

  if (contracts !== false) {
    return <List items={ contracts } component={ ContractListItem } />;
  }

  return null;
}

ContractsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  contracts: PropTypes.any,
};

export default ContractsList;
