import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Button, Toolbar } from '@material-ui/core';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
              VarWish
            </Typography>
            <Button component={Link} to="/login" color="inherit">
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}
