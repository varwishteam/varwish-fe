import api from '../utils/api';
import { ACTIONS } from '.';

export const create = (entityName, data) => (dispatch, getState) => {
  const endpoint =
    entityName === 'ITEM'
      ? api.ENDPOINTS.ITEMS(data.wishlist)
      : api.ENDPOINTS[entityName];
  return api
    .post(endpoint, {
      ...data,
      user: getState().userReducer.user.id,
    })
    .then(response => (entityName === 'WISHLIST' ? response[0] : response))
    .then(response => {
      dispatch({ type: ACTIONS[entityName].CREATE.SUCCESS, payload: response });
      return response;
    })
    .catch(error => {
      dispatch({ type: ACTIONS[entityName].CREATE.ERROR, payload: error });
      throw error;
    });
};

export const getAll = entityName => (dispatch, getState) => {
  return api
    .get(api.ENDPOINTS[entityName])
    .then(wishlists => {
      dispatch({
        type: ACTIONS[entityName].GET_ALL.SUCCESS,
        payload: wishlists,
      });
      return wishlists;
    })
    .catch(error => {
      dispatch({ type: ACTIONS[entityName].GET_ALL.ERROR, payload: error });
      throw error;
    });
};

export const getOne = (entityName, id) => (dispatch, getState) => {
  return api
    .get(api.ENDPOINTS[entityName] + '/' + id)
    .then(wishlist => {
      dispatch({ type: ACTIONS[entityName].GET.SUCCESS, payload: wishlist });
      return wishlist;
    })
    .catch(error => {
      dispatch({ type: ACTIONS[entityName].GET.ERROR, payload: error });
      throw error;
    });
};

export const update = (entityName, data) => (dispatch, getState) => {
  const endpoint =
    entityName === 'ITEM'
      ? api.ENDPOINTS.ITEMS(data.wishlist)
      : api.ENDPOINTS[entityName];
  return api
    .put(endpoint + '/' + data.id, {
      ...data,
      user: getState().userReducer.user.id,
    })
    .then(response => {
      dispatch({ type: ACTIONS[entityName].UPDATE.SUCCESS, payload: response });
      return response;
    })
    .catch(error => {
      dispatch({ type: ACTIONS[entityName].UPDATE.ERROR, payload: error });
      throw error;
    });
};

export const remove = (entityName, data) => dispatch => {
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
