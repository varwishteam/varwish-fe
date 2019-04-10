import { WISHLIST } from '../actions/wishlistsActions';

/**
 * Wishlists reducer, handles the manipulation of state for dispatched WISHLIST actions
 * @param {*} state
 * @param {type, payload} action
 */
export default function wishlistsReducer(state = {}, action) {
  switch (action.type) {
    case WISHLIST.CREATE:
      return { ...state, wishlists: [...state.wishlists, action.payload] };

    case WISHLIST.UPDATE:
      return {
        ...state,
        wishlists: [
          state.wishlists.filter(wishlist => wishlist.id !== action.payload.id),
          action.payload
        ]
      };

    case WISHLIST.DELETE: {
      return {
        ...state,
        wishlists: [
          state.wishlists.filter(wishlist => wishlist.id !== action.payload.id)
        ]
      };
    }

    default:
      return state;
  }
}
