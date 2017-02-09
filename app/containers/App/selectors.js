// makeSelectLocationState expects a plain JS object for the routing state
import { createSelector } from 'reselect'
// import { fromJS } from 'immutable'

const selectGlobal = () => (state) => state.get('global');

// const makeSelectUserData = () => createSelector(
//   selectGlobal(),
//   (globalState) => globalState.get('userData')//.toJS() // why the toJS though ? because not a primitive ?
// );


const makeSelectUserData = () => {
  let prevUserDataState;
  let prevUserDataStateJS;

  return (state) => {
    // globlState
    const userDataState = state.get('userData'); // or state.route

    if (!userDataState.equals(prevUserDataState)) {
      prevUserDataState = userDataState;
      prevUserDataStateJS = prevUserDataState.toJS();
    }

    return prevUserDataStateJS;
  };
}


const makeSelectUserID = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.getIn([ 'userData', 'userID' ])
);

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  makeSelectUserData,
  makeSelectLocationState,
  makeSelectUserID,
};
