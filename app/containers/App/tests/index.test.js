import React from 'react'
// import { IntlProvider } from 'react-intl';
import { shallow, /* mount */ } from 'enzyme'
// import sinon from 'sinon'

import { App } from '../index'
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

/** THis shit won't fucking work and doc is useless

  fit('should call requestDefaultData on componentDidMount', () => {
    const requestDefaultData = jest.fn()
    const wrapper = mount(
      <IntlProvider locale="fr" >
        <connectedApp
          router={{ ...router }}
        />
      </IntlProvider>
    )
    console.log(requestDefaultData.mock)
    expect(requestDefaultData.mock.calls.length).toBe(1);
  });
  */
});
