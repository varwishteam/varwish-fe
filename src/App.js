import { CircularProgress } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './components/Routes';
import { store, persistor } from './store';
import theme from './themeConfig';

/**
 * The base of the app, setup for redux, redux-persist, material-ui theme and react-router
 */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<CircularProgress />} persistor={persistor}>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
              <Routes />
            </Router>
          </MuiThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
