import React, { Component } from 'react';
import { connect } from 'react-redux';
import './home/Home.scss';

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
        <div className="home">
          <header className="nav header">
            <h1 className="header__title">Wishlists</h1>
            <button
              type="button"
              className="btn btn-primary btn-icon header__button"
              onClick={openWishlistCreateModal}
            >
              <i className="material-icons">add</i>
              New Wishlist
            </button>
          </header>
          <main className="main-content">
            {wishlists && wishlists.length > 0 && renderWishlists(wishlists)}
          </main>

          <aside>
            <Modal title="New wishlist" modalType={MODAL_TYPE.WISHLIST.CREATE}>
              <CreateWishlistForm />
            </Modal>
          </aside>
        </div>
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
