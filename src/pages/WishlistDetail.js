import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteWishlist, MODAL_TYPE, openModal } from '../actions';
import { withRouter } from 'react-router-dom';
import { Modal, UpdateWishlistForm } from '../components';

/**
 * Wishlist detailed view, with options to edit/detele the wishlist and manage it's items, tags etc.
 */
class WishlistDetail extends Component {
  renderItems = items => {
    return (
      <>
        <p className="h6 text-muted">Items:</p>
        <ul className="list-unstyled">
          {items.map((item, i) => (
            <li
              key={item.id}
              className={`d-flex flex-row ${i % 2 === 0 && 'bg-light'}`}
            >
              <span>{item.item_name}</span>
              <div className="flex-grow-1" />
              <button type="button" className="btn text-info bmd-btn-icon">
                <i className="material-icons">info</i>
              </button>
              <button type="button" className="btn bmd-btn-icon">
                <i className="material-icons">edit</i>
              </button>
              <button type="button" className="btn text-danger bmd-btn-icon">
                <i className="material-icons">delete</i>
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  };

  render() {
    const {
      match,
      openWishlistUpdateModal,
      wishlist,
      dispatchDeleteWishlist,
    } = this.props;

    return (
      <>
        {wishlist === undefined ? (
          <p>Wishlist with id: {match.params.wishlistId} was not found!</p>
        ) : (
          <>
            <nav className="nav">
              {/* <span className="h6 text-muted">Wishlist name:</span> */}
              <h1 className="nav-item">{wishlist.name}</h1>
              <div className="flex-grow-1" />
              <div
                className="btn-group d-block"
                role="group"
                aria-label="Wihslist actions"
              >
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={openWishlistUpdateModal}
                >
                  <i className="material-icons">edit</i>
                  Edit
                </button>

                <button
                  type="button"
                  className="btn btn-danger"
                  data-toggle="snackbar"
                  data-content={`Wishlist ${wishlist.name} deleted`}
                  data-html-allowed="true"
                  data-timeout="5000"
                  onClick={() => dispatchDeleteWishlist(wishlist)}
                >
                  <i className="material-icons">delete</i>
                  Delete
                </button>
              </div>
            </nav>

            <span className="h6 text-muted">Description:</span>
            <p>{wishlist.description}</p>

            {wishlist.items && this.renderItems(wishlist.items)}

            <Modal
              title={`Editing ${wishlist.name}`}
              modalType={MODAL_TYPE.WISHLIST.UPDATE}
            >
              <UpdateWishlistForm wishlist={wishlist} />
            </Modal>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  wishlist: state.wishlistsReducer.wishlists.filter(wishlist => {
    return wishlist.id === ownProps.match.params.wishlistId;
  })[0],
  openedModal: state.modalReducer.openedModal,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatchDeleteWishlist: wishlist => {
    dispatch(deleteWishlist(wishlist)).then(() => {
      ownProps.history.push('/');
    });
  },
  openWishlistUpdateModal: () =>
    dispatch(openModal(MODAL_TYPE.WISHLIST.UPDATE)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WishlistDetail),
);
