import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import { CreateWishlistModal } from './components';

import { Routes } from './modules';

/**
 * The base of the app, setup for redux, redux-persist, material-ui theme and react-router
 */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          }
          persistor={persistor}
        >
          <Router basename="/varwish-fe">
            <Routes />
          </Router>
          <CreateWishlistModal />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
