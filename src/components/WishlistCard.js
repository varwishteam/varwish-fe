import React from 'react';
import { Link } from 'react-router-dom';

import './wishlistCard/wishlistCard.scss';

const sliceWishlistItems = wishlistItems => {
  if (wishlistItems.length <= 5) {
    return wishlistItems;
  }
  return wishlistItems.slice(0, 5);
};

const WishlistCard = ({ wishlist }) => {
  return (
    <Link to={`/wishlists/${wishlist.id}`} className="w-50 homepage-wishlist">
      <button
        type="button"
        className="btn btn-primary homepage-wishlist--container"
      >
        <div className="card">
          <div className="card-body">
            <div className="card-title homepage-wishlist--title">
              {wishlist.name}
            </div>
            <div className="card-text homepage-wishlist--text">
              {wishlist.items && wishlist.items.length > 0 && (
                <ul>
                  {sliceWishlistItems(wishlist.items).map(wishlistItem => (
                    <li key={wishlistItem.id}>{wishlistItem.item_name}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </button>
    </Link>
  );
};

export default WishlistCard;
