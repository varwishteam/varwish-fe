import api from '../utils/api';
import { ITEM } from '.';

export const createItem = item => (dispatch, getState) => {
  return api
    .post(api.ENDPOINTS.ITEMS(item.wishlist), {
      item_name: item.itemName,
      note: item.itemNote,
      link: item.itemLink,
      amount: item.itemAmount,
      price: item.itemPrice,
      wishlist: item.wishlist,
      user: getState().userReducer.user.id,
    })
    .then(response => {
      dispatch({ type: ITEM.CREATE.SUCCESS, payload: response });
      return response;
    })
    .catch(error => {
      dispatch({ type: ITEM.CREATE.ERROR, payload: error });
      throw error;
    });
};

export const updateItem = item => (dispatch, getState) => {
  return api
    .put(api.ENDPOINTS.ITEMS(item.wishlist) + '/' + item.itemId, {
      item_name: item.itemName,
      note: item.itemNote,
      link: item.itemLink,
      amount: item.itemAmount,
      price: item.itemPrice,
      wishlist: item.wishlist,
      user: getState().userReducer.user.id,
    })
    .then(response => {
      dispatch({ type: ITEM.UPDATE.SUCCESS, payload: response });
      return response;
    })
    .catch(error => {
      dispatch({ type: ITEM.UPDATE.ERROR, payload: error });
      throw error;
    });
};

export const deleteItem = item => dispatch => {
  return api
    .delete(api.ENDPOINTS.ITEMS(item.wishlist) + '/' + item.id)
    .then(response => {
      dispatch({
        type: ITEM.DELETE.SUCCESS,
        payload: { wishlistId: item.wishlist, itemId: item.id },
      });
      return response;
    })
    .catch(error => {
      console.log(error);

      dispatch({ type: ITEM.DELETE.ERROR, payload: error });
      // throw error;   // FIXME: We should propagate this error and handle it in the UI (e.g. show "Delete failed" alert)
    });
};
