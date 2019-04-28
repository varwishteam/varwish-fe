import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllWishlists, openModal, MODAL_TYPE } from '../actions';
import { Modal, CreateWishlistForm } from '../components';

const renderWishlists = wishlists => {
  return wishlists.map(wishlist => (
    <Link
      to={`/wishlists/${wishlist.id}`}
      className="w-50"
      key={wishlist.id || 'id-not-yet-available'}
    >
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
    this.props.isLoggedIn && this.props.getAllWishlists();
  }

  render() {
    const { isLoggedIn, wishlists, openWishlistCreateModal } = this.props;

    if (isLoggedIn) {
      return (
        <main className="d-flex flex-row flex-wrap">
          <button
            type="button"
            className="btn btn-dark w-50 btn-icon"
            onClick={openWishlistCreateModal}
          >
            <i className="material-icons">add</i>
            New Wishlist
          </button>
          {wishlists && renderWishlists(wishlists)}

          <Modal title="New wishlist" modalType={MODAL_TYPE.WISHLIST.CREATE}>
            <CreateWishlistForm />
          </Modal>
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
  openWishlistCreateModal: () =>
    dispatch(openModal(MODAL_TYPE.WISHLIST.CREATE)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
