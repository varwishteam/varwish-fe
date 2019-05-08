import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  deleteWishlist,
  MODAL_TYPE,
  openModal,
  deleteItem,
  getWishlist,
} from '../actions';
import { withRouter } from 'react-router-dom';
import {
  Modal,
  UpdateWishlistForm,
  CreateItemForm,
  UpdateItemForm,
} from '../components';
import './wishlistDetail/WishlistDetail.scss';
import ItemCard from '../components/ItemCard';

/**
 * Wishlist detailed view, with options to edit/detele the wishlist and manage it's items, tags etc.
 */
class WishlistDetail extends Component {
  componentDidMount() {
    this.props.getWishlist();
  }

  renderItems = items => {
    return (
      <>
        <ul className="list-unstyled items-list">
          {items.map((item, i) => (
            <li key={item.id}>
              <ItemCard
                item={item}
                onUpdate={this.props.openUpdateItemModal}
                onDelete={this.handleDeleteItem}
              />
            </li>
          ))}
        </ul>
      </>
    );
  };

  renderHeader = () => {
    const {
      openWishlistUpdateModal,
      wishlist,
      dispatchDeleteWishlist,
      openCreateItemModal,
    } = this.props;
    return (
      <div className="nav header">
        <h1 className="nav-item header__title">{wishlist.name}</h1>
        <p className="header__description">{wishlist.description}</p>
        <div
          className="btn-group d-block header__buttons header__buttons--right"
          role="group"
          aria-label="Wihslist actions"
        >
          <button
            type="button"
            className="btn btn-secondary btn-icon"
            onClick={openWishlistUpdateModal}
          >
            <i className="material-icons">edit</i>
            Edit
          </button>

          <button
            type="button"
            className="btn btn-danger btn-icon"
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
        <div className="btn-group d-block header__buttons header__buttons--left">
          <button
            className="btn btn-primary btn-icon new-item-btn"
            onClick={openCreateItemModal}
          >
            <i className="material-icons">add</i>
            New item
          </button>
        </div>
      </div>
    );
  };

  handleDeleteItem = item => {
    item.wishlist = this.props.wishlist.id;
    this.props.dispatchDeleteItem(item).then(() => this.forceUpdate());
  };

  render() {
    const { match, wishlist, items } = this.props;

    return (
      <>
        {wishlist === undefined ? (
          <p>Wishlist with id: {match.params.wishlistId} was not found!</p>
        ) : (
          <div className="wishlist-detail">
            {this.renderHeader()}

            <section className="items-section">
              {items && this.renderItems(items)}
            </section>

            <aside>
              <Modal
                title={`Editing ${wishlist.name}`}
                modalType={MODAL_TYPE.WISHLIST.UPDATE}
              >
                <UpdateWishlistForm wishlist={wishlist} />
              </Modal>
              <Modal title="New item" modalType={MODAL_TYPE.ITEM.CREATE}>
                <CreateItemForm wishlistId={wishlist.id} />
              </Modal>
              <Modal
                title={`Editing ${this.props.currentlyEditedItem.item_name}`}
                modalType={MODAL_TYPE.ITEM.UPDATE}
              >
                <UpdateItemForm
                  wishlistId={wishlist.id}
                  item={this.props.currentlyEditedItem}
                />
              </Modal>
            </aside>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  wishlist: state.wishlists.filter(wishlist => {
    return wishlist.id === ownProps.match.params.wishlistId;
  })[0],
  items: state.items.filter(
    item => item.wishlist === ownProps.match.params.wishlistId,
  ),
  openedModal: state.modalReducer.openedModal,
  currentlyEditedItem: state.modalReducer.currentlyEditedItem,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getWishlist: () => dispatch(getWishlist(ownProps.match.params.wishlistId)),
  dispatchDeleteWishlist: wishlist => {
    dispatch(deleteWishlist(wishlist)).then(() => {
      ownProps.history.push('/');
    });
  },
  openWishlistUpdateModal: () =>
    dispatch(openModal({ modalType: MODAL_TYPE.WISHLIST.UPDATE })),
  openCreateItemModal: () =>
    dispatch(openModal({ modalType: MODAL_TYPE.ITEM.CREATE })),
  openUpdateItemModal: item =>
    dispatch(openModal({ modalType: MODAL_TYPE.ITEM.UPDATE, item })),
  dispatchDeleteItem: item => dispatch(deleteItem(item)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WishlistDetail),
);
