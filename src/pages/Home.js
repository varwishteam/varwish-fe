import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AuthButton from '../components/AuthButton';

/**
 * Home page
 */
function Home({ user, isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <React.Fragment>
        <Typography>
          Welcome {user.firstName} {user.lastName}
        </Typography>
        <Button component={Link} to="/wishlists/1">
          Wishlist 1
        </Button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              VarWish
            </Typography>
            <AuthButton type="button" />
          </Toolbar>
        </AppBar>
        Not logged in
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user,
  isLoggedIn: state.userReducer.isLoggedIn
});

export default connect(
  mapStateToProps,
  null
)(Home);
