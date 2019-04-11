import {
  Button,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { ExitToApp as ExitToAppIcon } from '@material-ui/icons';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import fakeAuth from '../utils/api';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/Link.scss';

/**
 * This button displays 'Log In' when the user first comes to the page
 * and 'Log Out' when the user is logged in
 */
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
    <Link to="/login" color="inherit" className="link--no-underline">
      <ListItem button>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Log In" />
      </ListItem>
    </Link>
  )
);

AuthButton.propTypes = {
  /* Type of AuthButton, classical button or styled as a list item */
  type: PropTypes.oneOf(['button', 'list-item'])
};

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn
});

export default connect(
  mapStateToProps,
  null
)(AuthButton);
