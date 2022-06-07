import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import ScrollToTop from './Component/carousel/ScrollToTop';
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const client = process.env.REACT_APP_AUTH0_CLIENT_ID

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Auth0Provider
    domain={domain}
    clientId={client}
    redirectUri={window.location.origin}
    >
     <BrowserRouter>
     <ScrollToTop>
    <App />
    </ScrollToTop>
  </BrowserRouter>
  </Auth0Provider>
  </PersistGate>
  </Provider>,
  document.getElementById('root')
);


