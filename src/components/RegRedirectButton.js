import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * Shows only to NOT logged in users, redirects to SignUp Page
 * @param {*} props
 */
const RegRedirectButton = props => {
  const { isLoggedIn } = props;
  return (
    !isLoggedIn && (
      <Link to="/sign-up" color="inherit">
        <button type="button" className="btn btn-primary">
          Sign Up
        </button>
      </Link>
    )
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn,
});

export default connect(
  mapStateToProps,
  null,
)(RegRedirectButton);
