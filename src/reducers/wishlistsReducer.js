import { WISHLIST } from '../actions';
/**
 * Wishlists reducer, handles the manipulation of state for dispatched WISHLIST actions
 * @param {*} state
 * @param {type, payload} action
 */
export default function wishlistsReducer(state = {}, action) {
  switch (action.type) {
    case WISHLIST.CREATE.SUCCESS:
      return { ...state, wishlists: [...state.wishlists, action.payload] };

    case WISHLIST.GET_ALL.SUCCESS:
      return { ...state, wishlists: action.payload };

    case WISHLIST.GET.SUCCESS:
      return { ...state, wishlists: [...state.wishlists, action.payload] };

    case WISHLIST.UPDATE.SUCCESS:
      return {
        ...state,
        wishlists: [
          state.wishlists.filter(wishlist => wishlist.id !== action.payload.id),
          action.payload,
        ],
      };

    case WISHLIST.DELETE.SUCCESS: {
      return {
        ...state,
        wishlists: [
          state.wishlists.filter(wishlist => wishlist.id !== action.payload.id),
        ],
      };
    }

    default:
      return state;
  }
}
