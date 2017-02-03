
// import expect from 'expect';
import { shallow, mount } from 'enzyme';
import React from 'react';

// import LanguageProvider from 'containers/LanguageProvider'
import { IntlProvider } from 'react-intl';
// import { translationMessages } from '../../../translations/en.json';

import Header from '../index';


const renderComponent = (props = {}) =>
  shallow(<Header pathname={ '/' } { ...props } />)

describe('<Header />', () => {
  it('should render a nav', () => {
    expect(renderComponent().type()).toEqual('nav');
  });

  it('should render an active classname depending on the route', () => {
    const props = {}
    const fullyRenderedComp =
      mount(
        <IntlProvider locale="fr" >
          <Header pathname={ '/a-propos' } { ...props } />
        </IntlProvider>
      )

    const activeRouteLink = fullyRenderedComp.find('a.active-route span')
    // const activeRouteLink = fullyRenderedComp.findAllInRenderedTree('a.active-route span')

    console.log(activeRouteLink)

    expect(activeRouteLink.text()).toEqual('A propos')
  })
});
