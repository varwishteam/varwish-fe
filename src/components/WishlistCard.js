import React from 'react';
import { Link } from 'react-router-dom';

import './wishlistCard/wishlistCard.scss';

const sliceWishlistItems = wishlistItems => {
  if (wishlistItems.length <= 5) {
    return wishlistItems;
  }
  return wishlistItems.slice(0, 5);
};

/**
 * Render a card with the wishlist summary and up to 5 first items
 *
 * @param {Object} obj
 * @param {Object} obj.wishlist Wishlist data
 * @param {Array} obj.items Wishlist items
 *
 */
const WishlistCard = ({ wishlist, items }) => {
  return (
    <Link to={`/wishlists/${wishlist.id}`} className="homepage-wishlist">
      <div className="card homepage-wishlist--container">
        <div className="card-body">
          <div className="card-title homepage-wishlist--title">
            {wishlist.name}
          </div>
          <div className="card-text homepage-wishlist--text">
            {items && items.length > 0 && (
              <ul>
                {sliceWishlistItems(items).map(wishlistItem => (
                  <li key={wishlistItem.id}>{wishlistItem.item_name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WishlistCard;
