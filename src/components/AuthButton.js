import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { logOut } from '../actions';
import { connect } from 'react-redux';

/**
 * This button displays 'Log In' when the user first comes to the page
 * and 'Log Out' when the user is logged in
 *
 * @example <AuthButton />
 */
const AuthButton = withRouter(({ history, isLoggedIn, dispatchLogOut }) =>
  isLoggedIn ? (
    <button
      type="button"
      className="btn btn-primary btn-block list-group-item"
      onClick={() => {
        dispatchLogOut().then(() => history.push('/'));
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
  ),
);

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  dispatchLogOut: () => dispatch(logOut()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthButton);
