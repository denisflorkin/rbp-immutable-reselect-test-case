// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

import AppWatcher from './containers/App/sagas'

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  // inject saga at "root" level (e.g. for no specific routes,
  // it's present on all routes )
  injectSagas(AppWatcher)

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/dashboard',
      name: 'dashboard',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/profile',
      name: 'myProfile',
      getComponent(location, cb) {
        System.import('containers/ProfilePage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/profile/:slug',
      name: 'userProfile',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ProfilePage/actions'),
          System.import('containers/ProfilePage/reducer'),
          System.import('containers/ProfilePage/sagas'),
          System.import('containers/ProfilePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([actions, reducer, sagas, component]) => {
          injectReducer('profilePage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
          store.dispatch(actions.getUserProfileData(nextState.params.slug))
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/profile-settings',
      name: 'profileSettingsPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ProfileSettingsPage/reducer'),
          System.import('containers/ProfileSettingsPage/sagas'),
          System.import('containers/ProfileSettingsPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('profileSettingsPage', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/contracts',
      name: 'contracts',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Contracts/reducer'),
          import('containers/Contracts/sagas'),
          import('containers/Contracts'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('contracts', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
