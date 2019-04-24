import api from '../utils/api';
import { USER } from './userActions';

export const logIn = (username, password) => dispatch => {
  return api
    .post(api.ENDPOINTS.LOGIN, { username, password })
    .then(response => {
      if (response.user && response.key) {
        dispatch({
          type: USER.LOGIN.SUCCESS,
          payload: {
            id: response.user,
            key: response.key,
          },
        });
      } else {
        dispatch({
          type: USER.LOGIN.ERROR,
          payload: {
            error: response,
          },
        });
      }
    });
};

export const logOut = () => dispatch => {
  return api.post(api.ENDPOINTS.LOGOUT).then(response => {
    dispatch({
      type: USER.LOGOUT,
    });
  });
};
