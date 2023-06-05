import './utils';

import React from 'react'
import { Provider } from 'react-redux';

import Router from './Router';
import store from './store';
import { createRoot } from 'react-dom/client';

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import config from '../aws-exports';

//You can (and should) import css like this
import 'bootstrap/dist/css/bootstrap.min.css';
import '@aws-amplify/ui-react/styles.css';


Amplify.configure(config)

const container = document.getElementById('root');
const root = createRoot(container);

/**
 * Provider for using redux store
 * Authenticator.Provider for using useAuthenticator from amplify
 */
root.render(
  <Provider store={store}>
    <Authenticator.Provider>
      <Router />
    </Authenticator.Provider>
  </Provider>
);