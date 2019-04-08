import {
  Button,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { ExitToApp as ExitToAppIcon } from '@material-ui/icons';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fakeAuth } from '../utils/api';
import { connect } from 'react-redux';

const AuthButton = withRouter(({ history, type, isLoggedIn }) =>
  type === 'button' ? (
    isLoggedIn ? (
      <Button
        color="inherit"
        onClick={() => {
          fakeAuth.signout(() => history.push('/'));
        }}
      >
        <ExitToAppIcon />
        Log Out
      </Button>
    ) : (
      <Button component={Link} to="/login" color="inherit">
        <ExitToAppIcon />
        Log In
      </Button>
    )
  ) : isLoggedIn ? (
    <ListItem
      button
      color="inherit"
      onClick={() => {
        fakeAuth.signout(() => history.push('/'));
      }}
    >
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItem>
  ) : (
    <Link to="/login" style={{ textDecoration: 'none' }} color="inherit">
      <ListItem button>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Log In" />
      </ListItem>
    </Link>
  )
);

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  // login: loginUser(),
  // logout: logoutUser()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthButton);
