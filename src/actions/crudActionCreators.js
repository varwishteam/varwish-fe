import api from '../utils/api';
import { ACTIONS } from '.';
import itemsHelper from '../utils/itemsHelper';

export const create = (entityName, data) => (dispatch, getState) => {
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

export const getAll = entityName => (dispatch, getState) => {
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

export const getOne = (entityName, id) => (dispatch, getState) => {
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

export const update = (entityName, data) => (dispatch, getState) => {
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
