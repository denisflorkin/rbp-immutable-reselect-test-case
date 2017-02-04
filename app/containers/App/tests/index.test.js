import React from 'react'
// import { IntlProvider } from 'react-intl';
import { shallow, /* mount */ } from 'enzyme'
// import sinon from 'sinon'

import { App, mapDispatchToProps } from '../index'
// import decoratedApp from '../index'
// import connectedApp from '../index'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'


const pathname = '/'
const router = { location: { pathname } }

describe('<App />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(
      <App router={{ ...router }} />
    );
    expect(renderedComponent.find('div').length).toEqual(1);
  });

  it('should render the header and pass it pethname props', () => {
    const renderedComponent = shallow(
      <App router={{ ...router }} />
    );
    expect(renderedComponent.contains(<Header pathname={ pathname } />)).toEqual(true);
  });

  // it('should pass pathname prop to <Header />', () => {
  //   const renderedComponent = shallow(
  //     <App router={{ ...router }} />
  //   );
  //   expect(renderedComponent.contains(<Header pathname={ pathname } />)).toEqual(true);
  // });


  it('should render the footer', () => {
    const renderedComponent = shallow(
      <App router={{ ...router }} />
    );
    expect(renderedComponent.contains(<Footer />)).toEqual(true);
  });


  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <App router={{ ...router }} >{ children }</App>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });


  describe('mapDispatchToProps', () => {
    it('should return an object with onRequestDefaultData properties defiend on it', () => {
      const dispatchFix = () => {}
      const ret = mapDispatchToProps(dispatchFix)
      expect(ret.onRequestDefaultData).toBeDefined()
    })

    it('should dispatch loadDefaultData action on componentDidMount', () => {
      const renderedComponent = shallow(<App />)

      const componentDidMount = // eslint-disable-line no-unused-vars
        renderedComponent.instance().componentDidMount

      // then do something to test this out
      expect(true).toEqual(false)
    })
  })
});
