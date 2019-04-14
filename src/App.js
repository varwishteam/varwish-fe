import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './components/Routes';
import { store, persistor } from './store';

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
          <Router>
            <Routes />
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
