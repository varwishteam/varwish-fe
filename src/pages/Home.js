import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
    return <>Not logged in</>;
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
