import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getAllWishlists,
  getAllCategories,
  openModal,
  MODAL_TYPE,
} from '../actions';
import { Modal, CreateWishlistForm, WishlistCard } from '../components';

const renderWishlists = wishlists => {
  return wishlists.map(wishlist => (
    <WishlistCard
      key={wishlist.id || 'id-not-yet-available'}
      wishlist={wishlist}
    />
  ));
};

/**
 * Home page, contains a list of wishlists
 */
class Home extends Component {
  componentDidMount() {
    this.props.isLoggedIn && this.props.getAllWishlists();
    this.props.isLoggedIn && this.props.getAllCategories();
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
          {wishlists && wishlists.length > 0 && renderWishlists(wishlists)}

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
  wishlists: state.wishlists,
});

const mapDispatchToProps = dispatch => ({
  getAllWishlists: () => dispatch(getAllWishlists()),
  getAllCategories: () => dispatch(getAllCategories()),
  openWishlistCreateModal: () =>
    dispatch(openModal({ modalType: MODAL_TYPE.WISHLIST.CREATE })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
