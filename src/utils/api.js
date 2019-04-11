import { USER } from '../actions/userActions';
import { store } from '../store';
import config from '../config.js';
/**
 * All api call wrappers go in this file
 */

/** FIXME: Just for testing */
function authenticate(callback, email, password) {
  return new Promise((resolve, reject) => {
    fetch(config.apiUrl + '/rest-auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: email,
        email: email,
        password: password
      }) // FIXME: hash password
    })
      .then(response => {
        if (response.ok) {
          console.log('Success:', JSON.stringify(response));
          store.dispatch({
            type: USER.LOGIN.SUCCESS,
            payload: {
              firstName: 'Don',
              lastName: 'Joe'
            }
          });
          resolve();
        } else {
          console.error('Error:', response);
          reject('Login error'); // FIXME: add proper error message
        }
      })
      .catch(error => {
        console.error('Error:', error);
        reject('Login error'); // FIXME: add proper error message
      });
  });
}

function signout(callback) {
  setTimeout(callback, 100);
  store.dispatch({
    type: USER.LOGOUT
  });
}

export default { authenticate, signout };
