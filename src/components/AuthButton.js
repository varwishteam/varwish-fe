import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { logOut } from '../utils/api';
import { connect } from 'react-redux';

/**
 * This button displays 'Log In' when the user first comes to the page
 * and 'Log Out' when the user is logged in
 */
const AuthButton = withRouter(({ history, isLoggedIn }) =>
  isLoggedIn ? (
    <button
      type="button"
      className="btn btn-primary btn-block list-group-item"
      onClick={() => {
        logOut(() => history.push('/'));
      }}
    >
      <i className="material-icons">close</i>
      Log Out
    </button>
  ) : (
    <Link to="/login" color="inherit">
      <button type="button" className="btn btn-primary">
        Log In
      </button>
    </Link>
  )
);

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn
});

export default connect(
  mapStateToProps,
  null
)(AuthButton);
