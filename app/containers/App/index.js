/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
/** import actions */
import {
  loadDefaultData,
} from './actions'

/** import selectors */
// import {
//   selectUserID,
// } from './selectors'

import Header from '../../components/Header'
import Footer from '../../components/Footer'


export class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    onRequestDefaultData: PropTypes.func,
    children: PropTypes.node,
    router: PropTypes.shape({
      location: PropTypes.shape({
        pathname: PropTypes.string,
      }),
    }),
  };

  componentDidMount() {
    this.props.onRequestDefaultData()
  }


  render() {
    // extract pathname
    const { router: { location: { pathname } } } = this.props

    return (
      <div>
        <Header pathname={ pathname } />
        { React.Children.toArray(this.props.children) }
        <Footer />
      </div>
    );
  }
}
// export default App
export function mapDispatchToProps(dispatch) {
  return {
    onRequestDefaultData: () => {
      dispatch(loadDefaultData())
    },
  };
}

const mapStateToProps = createStructuredSelector({
  // userID: selectUserID(), // probably useless to have this here for nothing
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(App);
