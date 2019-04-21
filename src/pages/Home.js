import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AuthButton from '../components/AuthButton';
import RegRedirectButton from '../components/RegRedirectButton';

/**
 * Home page, contains a list of wishlists
 */
function Home({ user, isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <main className="d-flex flex-row flex-wrap">
        <Link to="/wishlists/1" className="w-50">
          <button type="button" className="btn btn-primary">
            Wishlist 1
          </button>
        </Link>
        <Link to="/wishlists/2" className="w-50">
          <button type="button" className="btn btn-primary">
            Wishlist 2
          </button>
        </Link>
        <Link to="/wishlists/3" className="w-50">
          <button type="button" className="btn btn-primary">
            Wishlist 3
          </button>
        </Link>
      </main>
    );
  } else {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">VarWish</span>
          <div className="navbar-authbuttons">
            <AuthButton type="button" />
            <RegRedirectButton type="button" />
          </div>
        </nav>
        Not logged in
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user,
  isLoggedIn: state.userReducer.isLoggedIn,
});

export default connect(
  mapStateToProps,
  null,
)(Home);
