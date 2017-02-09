
// import expect from 'expect';
import { shallow, mount } from 'enzyme';
import React from 'react';

// import LanguageProvider from 'containers/LanguageProvider'
import { IntlProvider } from 'react-intl';
// import { translationMessages } from '../../../translations/en.json';

// import Link from 'components/Link';

import Header from '../index';


const renderComponent = (props = {}) =>
  shallow(<Header pathname={ '/' } { ...props } />)

describe('<Header />', () => {
  it('should render a nav', () => {
    expect(renderComponent().type()).toEqual('nav');
  });

  it('should render an active classname depending on the route', () => {
    // const props = {}
    const fullyRenderedComp =
      // shallow(
      mount(
        <IntlProvider locale="fr" >
          <Header pathname={ '/a-propos' } />
        </IntlProvider>
      )
    console.log(fullyRenderedComp.nodes)
    const activeRouteLinkWrapper = fullyRenderedComp.children().find('.active-route')
    // const activeRouteLinkWrapper = fullyRenderedComp.find('.active-route')
    // const activeRouteLinkWrapper = fullyRenderedComp.findAllInRenderedTree('a.active-route span')
    console.log(activeRouteLinkWrapper)
    expect(activeRouteLinkWrapper.text()).toEqual('A propos')
/*
    console.log(fullyRenderedComp.contains(<span></span>))
    console.log(fullyRenderedComp.children())
    expect(fullyRenderedComp.contains(<Link className="active-route"><span>A propos</span></Link>))
      .toEqual(true)
*/
  })
});
