
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
          <Header pathname={ '/about' } { ...props } />
        </IntlProvider>
      )

    const activeRouteLink = fullyRenderedComp.find('.active-route')

    expect(activeRouteLink.text()).toBe('About')
  })
});
