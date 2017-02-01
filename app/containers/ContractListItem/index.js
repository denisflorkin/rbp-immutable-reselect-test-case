import React from 'react';

import Item from './Item';
import Wrapper from './Wrapper';

function ContractListItem(props) {
  return (
    <Wrapper>
      <Item>
        <p>{ props.item.title }</p>
        <p>{ props.item.value }</p>
      </Item>
    </Wrapper>
  );
}

ContractListItem.propTypes = {
  item: React.PropTypes.object,
};

export default ContractListItem;
