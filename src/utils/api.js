// import { store } from '../store';
import config from '../config.js';

/**
 * Api helper methods
 */

let currentAuthToken = undefined;

const setToken = token => {
  console.log(`Setting currentAuthToken to ${token}`);
  currentAuthToken = token;
};

const ENDPOINTS = {
  LOGIN: 'rest-auth/login',
  LOGOUT: 'rest-auth/logout',
  SIGN_UP: 'sign-up',
  WISHLIST: 'wishlists',
  CATEGORY: 'categories',
  ITEMS: wishlistId => `wishlists/${wishlistId}/items`,
};

/**
 * Send a HTTP request to the server
 *
 * @param {string} method HTTP method (GET, POST, PUT, DELETE)
 * @param {string} endpoint only for example /wishlists/*, do not pass in the server url, it will be added from config
 * @param {Object} data JSON data to be sent
 */
const request = (method, endpoint, data) => {
  return fetch(config.apiUrl + endpoint + '/', {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: currentAuthToken && `Token  ${currentAuthToken}`,
      Origin: config.originUrl,
    },
    body: JSON.stringify(data),
  }).then(response => {
    if (response.ok) {
      if (method === 'delete') return 'deleted';
      else return response.json();
    } else return response.json().then(error => Promise.reject(error));
  });
};

export default {
  get: (endpoint, data) => {
    return request('get', endpoint, data);
  },
  post: (endpoint, data) => {
    return request('post', endpoint, data);
  },
  put: (endpoint, data) => {
    return request('put', endpoint, data);
  },
  delete: (endpoint, data) => {
    return request('delete', endpoint, data);
  },
  setToken,
  ENDPOINTS,
};
