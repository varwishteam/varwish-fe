import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * Wishlist detailed view, with options to edit/detele the wishlist and manage it's items, tags etc.
 */
class WishlistDetail extends Component {
  state = {};

  componentWillMount() {
    this.setState({
      wishlist: this.props.wishlists.filter(
        wishlist => wishlist.id === this.props.match.params.wishlistId,
      ),
    });
    if (this.state.wishlist === [] || this.state.wishlist === undefined)
      this.setState({ notFound: true });
  }

  render() {
    const { match } = this.props;
    const { wishlist } = this.state;

    if (this.state.notFound) {
      return <p>Wishlist with id: {match.params.wishlistId} was not found!</p>;
    } else {
      return (
        <>
          <span>{match.params.wishlistId}</span>
          <h1>{wishlist.name}</h1>
          <p>{wishlist.description}</p>
        </>
      );
    }
  }
}

const mapStateToProps = state => ({
  wishlists: state.wishlistsReducer.wishlists,
});

export default connect(
  mapStateToProps,
  null,
)(WishlistDetail);
