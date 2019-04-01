import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import Login from './pages/Login';
import Home from './pages/Home';

/**
 * The base of the app, contains all first level routes
 */
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <CssBaseline />
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
