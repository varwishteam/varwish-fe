import api from '../utils/api';
import { USER } from './userActions';

/**
 * Log the user in
 *
 * @param {Object} obj
 * @param {string} obj.username
 * @param {string} obj.password
 * @param {boolean} obj.rememberLogin
 *
 * @return {Promise} resolves on successful, rejects on error
 */
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

/**
 * Log the user out
 *
 * @return {Promise} resolves on logout
 */
export const logOut = () => dispatch => {
  api.post(api.ENDPOINTS.LOGOUT);
  dispatch({
    type: USER.LOGOUT,
  });
  return Promise.resolve('logged_out');
};

/**
 * Sign up new user
 * @param {Object} obj
 * @param {Object} obj.firstName First name
 * @param {Object} obj.lastName Last name
 * @param {Object} obj.username Username
 * @param {Object} obj.email Email
 * @param {Object} obj.passwordSet Password
 * @param {Object} obj.passwordConfirm Password again for confiramtion
 */
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
