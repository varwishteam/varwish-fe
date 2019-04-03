import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Login from './pages/Login';
import Home from './pages/Home';

import theme from './themeConfig';

/**
 * The base of the app, contains all first level routes
 */
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
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
