import { shallow, mount } from 'enzyme';
import React from 'react';
import { IntlProvider } from 'react-intl';

import ContractListItem from 'containers/ContractListItem'
// import ListItem from 'components/ListItem'
import List from 'components/List'
import LoadingIndicator from 'components/LoadingIndicator'
import ContractsList from '../index'


describe('<ContractsList />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(
      <ContractsList loading />
    );
    expect(renderedComponent.contains(<List component={ LoadingIndicator } />))
      .toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <ContractsList
          loading={ false }
          error={{ message: 'Loading failed!' }}
        />
      </IntlProvider>
    );
    expect(renderedComponent.text()).toMatch(/Something went wrong/);
  });

  it('should render the contracts if loading was successful', () => {
    const contractsFixture = [
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

    const renderedComponent = shallow(
      <ContractsList
        contracts={ contractsFixture }
        error={ false }
      />
    );

    expect(renderedComponent.contains(
      <List items={ contractsFixture } component={ ContractListItem } />))
        .toEqual(true);
  });

  it('should not render anything if nothing interesting is provided', () => {
    const renderedComponent = shallow(
      <ContractsList
        contracts={ false }
        error={ false }
        loading={ false }
      />
    );

    expect(renderedComponent.html()).toEqual(null);
  });
});
