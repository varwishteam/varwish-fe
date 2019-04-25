import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteWishlist } from '../actions';
import { withRouter } from 'react-router-dom';

/**
 * Wishlist detailed view, with options to edit/detele the wishlist and manage it's items, tags etc.
 */
class WishlistDetail extends Component {
  state = {
    wishlist: {},
  };

  componentDidMount() {
    this.setState({
      wishlist: this.props.wishlists.filter(wishlist => {
        return wishlist.id === this.props.match.params.wishlistId;
      })[0],
    });
  }

  renderItems = items => {
    return (
      <>
        <p className="h6 text-muted">Items:</p>
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.item_name}</li>
          ))}
        </ul>
      </>
    );
  };

  deleteWishlist = () => {
    this.props.dispatchDeleteWishlist(this.state.wishlist).then(() => {
      this.props.history.push('/');
    });
  };

  render() {
    const { match } = this.props;
    const { wishlist } = this.state;
    return (
      <>
        {wishlist === undefined ? (
          <p>Wishlist with id: {match.params.wishlistId} was not found!</p>
        ) : (
          <>
            <span className="h6 text-muted">Wishlist name:</span>
            <h1>{wishlist.name}</h1>

            <div
              className="btn-group d-block"
              role="group"
              aria-label="Wihslist actions"
            >
              <button type="button" className="btn btn-success">
                <i className="material-icons">edit</i>
                Edit
              </button>

              <button
                type="button"
                className="btn btn-danger"
                data-toggle="snackbar"
                data-content="Wishlist deleted"
                data-html-allowed="true"
                data-timeout="5000"
                onClick={() => this.deleteWishlist()}
              >
                <i className="material-icons">delete</i>
                Delete
              </button>
            </div>

            <span className="h6 text-muted">Wishlist description:</span>
            <p>{wishlist.description}</p>

            {wishlist.items && this.renderItems(wishlist.items)}
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  wishlists: state.wishlistsReducer.wishlists,
});

const mapDispatchToProps = dispatch => ({
  dispatchDeleteWishlist: wishlist => dispatch(deleteWishlist(wishlist)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WishlistDetail),
);
