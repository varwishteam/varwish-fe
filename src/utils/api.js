import { USER } from '../actions/userActions';
import { store } from '../store';
import config from '../config.js';
/**
 * All api call wrappers go in this file
 */

function logIn(email, password) {
  return new Promise((resolve, reject) => {
    fetch(config.apiUrl + 'rest-auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Origin: config.originUrl,
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    })
      .then(response => {
        if (response.ok) {
          response.json().then(res => {
            store.dispatch({
              type: USER.LOGIN.SUCCESS,
              payload: {
                firstName: 'John', // FIXME: Name is just a placeholder
                lastName: 'Doe',
                key: res.key,
              },
            });
            resolve();
          });
        } else {
          response
            .json()
            .then(err => {
              reject(err.non_field_errors[0]); // FIXME: Rewrite to accept all kinds or errors
            })
            .catch(err => {
              console.error(err);
              reject('Error logging in.');
            });
        }
      })
      .catch(error => {
        console.error('Error:', error);
        reject('Login error'); // FIXME: add proper error message
      });
  });
}

function logOut(callback) {
  setTimeout(callback, 100);
  store.dispatch({
    type: USER.LOGOUT,
  });
}

function signUp(data) {
  const {
    firstName,
    lastName,
    username,
    email,
    passwordSet,
    passwordConfirm,
  } = data;
  return fetch(config.apiUrl + 'sign-up/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Origin: config.originUrl,
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password1: passwordSet,
      password2: passwordConfirm,
      first_name: firstName,
      last_name: lastName,
    }),
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
}

export { logIn, logOut, signUp };
