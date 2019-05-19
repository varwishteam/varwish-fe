import api from './api';
import { USER, logOut } from '../actions';

/**
 * Sets the auth token in the api handlers
 */
export const addAuthTokenMiddleware = store => next => action => {
  if (action.type === USER.LOGIN.SUCCESS) api.setToken(action.payload.key);
  if (action.type === USER.SIGN_UP.SUCCESS) api.setToken(action.payload.key);
  if (action.type === 'persist/REHYDRATE' && action.payload)
    api.setToken(action.payload.userReducer.user.key);

  // Remove token on logout
  if (action.type === USER.LOGOUT) api.setToken(null);

  // Logout user when token becomes invalid
  if (action.payload && action.payload.detail === 'Invalid token.')
    store.dispatch(logOut());

  // continue processing this action
  return next(action);
};
