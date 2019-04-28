import { WISHLIST, ITEM } from '../actions';
/**
 * Wishlists reducer, handles the manipulation of state for dispatched WISHLIST actions
 * @param {*} state
 * @param {type, payload} action
 */
export default function wishlistsReducer(state = {}, action) {
  let wishlist;

  switch (action.type) {
    case WISHLIST.CREATE.SUCCESS:
      return { ...state, wishlists: [...state.wishlists, action.payload[0]] };

    case WISHLIST.GET_ALL.SUCCESS:
      return { ...state, wishlists: action.payload };

    case WISHLIST.GET.SUCCESS:
      return {
        ...state,
        wishlists: [
          ...state.wishlists.filter(
            wishlist => wishlist.id !== action.payload.id,
          ),
          action.payload,
        ],
      };

    case WISHLIST.UPDATE.SUCCESS:
      return {
        ...state,
        wishlists: [
          ...state.wishlists.filter(
            wishlist => wishlist.id !== action.payload.id,
          ),
          action.payload,
        ],
      };

    case WISHLIST.DELETE.SUCCESS:
      return {
        ...state,
        wishlists: state.wishlists.filter(
          wishlist => wishlist.id !== action.payload.id,
        ),
      };

    // ITEM ACTIONS
    case ITEM.CREATE.SUCCESS:
      wishlist = state.wishlists.filter(
        wishlist => wishlist.id === action.payload.wishlist,
      )[0];
      wishlist.items = [...wishlist.items, action.payload];
      return {
        ...state,
        wishlists: [
          ...state.wishlists.filter(
            wishlist => wishlist.id !== action.payload.wishlist,
          ),
          wishlist,
        ],
      };

    case ITEM.UPDATE.SUCCESS:
      wishlist = state.wishlists.filter(
        wishlist => wishlist.id === action.payload.wishlist,
      )[0];
      wishlist.items = [
        ...wishlist.items.filter(item => item.id !== action.payload.id),
        action.payload,
      ];
      return {
        ...state,
        wishlists: [
          ...state.wishlists.filter(
            wishlist => wishlist.id !== action.payload.wishlist,
          ),
          wishlist,
        ],
      };

    case ITEM.DELETE.SUCCESS:
      wishlist = state.wishlists.filter(
        wishlist => wishlist.id === action.payload.wishlistId,
      )[0];

      wishlist.items = wishlist.items.filter(
        item => item.id !== action.payload.itemId,
      );

      return {
        ...state,
        wishlists: [
          ...state.wishlists.filter(
            wishlist => wishlist.id !== action.payload.wishlistId,
          ),
          wishlist,
        ],
      };

    default:
      return state;
  }
}
