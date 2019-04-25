import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllWishlists } from '../actions';

const renderWishlists = wishlists => {
  return wishlists.map(wishlist => (
    <Link to={`/wishlists/${wishlist.id}`} className="w-50" key={wishlist.id}>
      <button type="button" className="btn btn-primary">
        {wishlist.name}
      </button>
    </Link>
  ));
};

/**
 * Home page, contains a list of wishlists
 */
class Home extends Component {
  componentDidMount() {
    this.props.getAllWishlists();
  }

  render() {
    const { isLoggedIn, wishlists } = this.props;

    if (isLoggedIn) {
      return (
        <main className="d-flex flex-row flex-wrap">
          <button
            type="button"
            className="btn btn-dark w-50"
            data-toggle="modal"
            data-target="#createWishlistModal"
          >
            <i className="material-icons">add</i>
            New Wishlist
          </button>
          {wishlists && renderWishlists(wishlists)}
        </main>
      );
    } else {
      return <>Not logged in</>;
    }
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user,
  isLoggedIn: state.userReducer.isLoggedIn,
  wishlists: state.wishlistsReducer.wishlists,
});

const mapDispatchToProps = dispatch => ({
  getAllWishlists: () => dispatch(getAllWishlists()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
