import api from '../utils/api';
import { USER } from './userActions';

export const logIn = ({ username, password, rememberLogin }) => dispatch => {
  return api
    .post(api.ENDPOINTS.LOGIN, { username, password })
    .then(response => {
      if (response.user && response.key) {
        dispatch({
          type: USER.LOGIN.SUCCESS,
          payload: {
            id: response.user,
            key: response.key,
            rememberLogin: rememberLogin,
          },
        });
      } else {
        dispatch({
          type: USER.LOGIN.ERROR,
          payload: response,
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

export const signUp = ({
  firstName,
  lastName,
  username,
  email,
  passwordSet,
  passwordConfirm,
}) => dispatch => {
  return api
    .post(api.ENDPOINTS.SIGN_UP, {
      username: username,
      email: email,
      password1: passwordSet,
      password2: passwordConfirm,
      first_name: firstName,
      last_name: lastName,
    })
    .then(response => {
      console.log(response);
      if (response.user && response.key) {
        dispatch({
          type: USER.SIGN_UP.SUCCESS,
          payload: {
            id: response.user,
            key: response.key,
          },
        });
      } else {
        dispatch({
          type: USER.SIGN_UP.ERROR,
          payload: {
            error: response,
          },
        });
      }
    });
};
