import api from '../utils/api';
import { WISHLIST } from './wishlistsActions';

export const createWishlist = wishlist => (dispatch, getState) => {
  return api
    .post(api.ENDPOINTS.WISHLISTS, {
      name: wishlist.wishlistName,
      description: wishlist.wishlistDescription,
      user: getState().userReducer.user.id,
      items: wishlist.items || [],
    })
    .then(response => {
      dispatch({ type: WISHLIST.CREATE.SUCCESS, payload: response });
      return response;
    })
    .catch(error => {
      dispatch({ type: WISHLIST.CREATE.ERROR, payload: error });
      throw error;
    });
};

export const getAllWishlists = () => (dispatch, getState) => {
  return api
    .get(api.ENDPOINTS.WISHLISTS)
    .then(wishlists => {
      dispatch({ type: WISHLIST.GET_ALL.SUCCESS, payload: wishlists });
      return wishlists;
    })
    .catch(error => {
      dispatch({ type: WISHLIST.GET_ALL.ERROR, payload: error });
      throw error;
    });
};

export const getWishlist = wishlistId => (dispatch, getState) => {
  return api
    .get(api.ENDPOINTS.WISHLISTS, wishlistId)
    .then(wishlist => {
      dispatch({ type: WISHLIST.GET.SUCCESS, payload: wishlist });
      return wishlist;
    })
    .catch(error => {
      dispatch({ type: WISHLIST.GET.ERROR, payload: error });
      throw error;
    });
};

export const updateWishlist = wishlist => (dispatch, getState) => {
  return api
    .put(api.ENDPOINTS.WISHLISTS + '/' + wishlist.wishlistId, {
      name: wishlist.wishlistName,
      description: wishlist.wishlistDescription,
      user: getState().userReducer.user.id,
      items: wishlist.items || [],
    })
    .then(response => {
      dispatch({ type: WISHLIST.UPDATE.SUCCESS, payload: response });
      return response;
    })
    .catch(error => {
      dispatch({ type: WISHLIST.UPDATE.ERROR, payload: error });
      throw error;
    });
};

export const deleteWishlist = wishlist => dispatch => {
  return api
    .delete(api.ENDPOINTS.WISHLISTS + '/' + wishlist.id)
    .then(response => {
      dispatch({ type: WISHLIST.DELETE.SUCCESS, payload: response });
      return response;
    })
    .catch(error => {
      dispatch({ type: WISHLIST.DELETE.ERROR, payload: error });
      // throw error;   // FIXME: We should propagate this error and handle it in the UI (e.g. show "Delete failed" alert)
    });
};
