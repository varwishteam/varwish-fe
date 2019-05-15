import api from '../utils/api';
import { ACTIONS } from '.';
import itemsHelper from '../utils/itemsHelper';

/**
 * Create action creator
 * @param {string} entityName 'WISHLIST', 'CATEGORY' or 'ITEM'
 * @param {*} data
 */
const create = (entityName, data) => (dispatch, getState) => {
  const endpoint =
    entityName === 'ITEM'
      ? api.ENDPOINTS.ITEMS(data.wishlist)
      : api.ENDPOINTS[entityName];
  const body = data;
  if (entityName === 'WISHLIST') body.user = getState().userReducer.user.id;
  return api
    .post(endpoint, body)
    .then(response =>
      entityName === 'WISHLIST' || entityName === 'ITEM'
        ? response[0]
        : response,
    )
    .then(response => {
      dispatch({ type: ACTIONS[entityName].CREATE.SUCCESS, payload: response });
      return response;
    })
    .catch(error => {
      dispatch({ type: ACTIONS[entityName].CREATE.ERROR, payload: error });
      throw error;
    });
};

/**
 * Get all action creator
 * @param {string} entityName 'WISHLIST', 'CATEGORY' or 'ITEM'
 */
const getAll = entityName => (dispatch, getState) => {
  return api
    .get(api.ENDPOINTS[entityName])
    .then(response => {
      if (entityName === 'WISHLIST') {
        itemsHelper(response);
        response.forEach(wishlist => {
          delete wishlist['items'];
        });
      }
      dispatch({
        type: ACTIONS[entityName].GET_ALL.SUCCESS,
        payload: response,
      });
      return response;
    })
    .catch(error => {
      dispatch({ type: ACTIONS[entityName].GET_ALL.ERROR, payload: error });
      throw error;
    });
};

/**
 * Get one action creator
 * @param {string} entityName 'WISHLIST', 'CATEGORY' or 'ITEM'
 */
const getOne = (entityName, id) => (dispatch, getState) => {
  return api
    .get(api.ENDPOINTS[entityName] + '/' + id)
    .then(response => {
      dispatch({ type: ACTIONS[entityName].GET.SUCCESS, payload: response });
      return response;
    })
    .catch(error => {
      dispatch({ type: ACTIONS[entityName].GET.ERROR, payload: error });
      throw error;
    });
};

/**
 * Update action creator
 * @param {string} entityName 'WISHLIST', 'CATEGORY' or 'ITEM'
 */
const update = (entityName, data) => (dispatch, getState) => {
  const endpoint =
    entityName === 'ITEM'
      ? api.ENDPOINTS.ITEMS(data.wishlist)
      : api.ENDPOINTS[entityName];
  const body = data;
  if (entityName === 'WISHLIST') body.user = getState().userReducer.user.id;
  return api
    .put(endpoint + '/' + data.id, body)
    .then(response => {
      dispatch({ type: ACTIONS[entityName].UPDATE.SUCCESS, payload: response });
      return response;
    })
    .catch(error => {
      dispatch({ type: ACTIONS[entityName].UPDATE.ERROR, payload: error });
      throw error;
    });
};

/**
 * Remove action creator
 * @param {string} entityName 'WISHLIST', 'CATEGORY' or 'ITEM'
 */
const remove = (entityName, data) => dispatch => {
  const endpoint =
    entityName === 'ITEM'
      ? api.ENDPOINTS.ITEMS(data.wishlist)
      : api.ENDPOINTS[entityName];
  return api
    .delete(endpoint + '/' + data.id)
    .then(response => {
      console.log(response);

      dispatch({
        type: ACTIONS[entityName].DELETE.SUCCESS,
        payload: data.id,
      });
      return response;
    })
    .catch(error => {
      dispatch({ type: ACTIONS[entityName].DELETE.ERROR, payload: error });
      // throw error;   // FIXME: We should propagate this error and handle it in the UI (e.g. show "Delete failed" alert)
    });
};

export const createWishlist = data => create('WISHLIST', data);
export const getWishlist = data => getOne('WISHLIST', data);
export const getAllWishlists = () => getAll('WISHLIST');
export const updateWishlist = data => update('WISHLIST', data);
export const deleteWishlist = data => remove('WISHLIST', data);

export const createCategory = data => create('CATEGORY', data);
export const getCategory = data => getOne('CATEGORY', data);
export const getAllCategories = () => getAll('CATEGORY');
export const updateCategory = data => update('CATEGORY', data);
export const deleteCategory = data => remove('CATEGORY', data);

export const createItem = data => create('ITEM', data);
export const updateItem = data => update('ITEM', data);
export const deleteItem = data => remove('ITEM', data);
