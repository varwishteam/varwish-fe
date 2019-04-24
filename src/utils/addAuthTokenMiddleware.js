import api from './api';
import { USER } from '../actions';

export const addAuthTokenMiddleware = store => next => action => {
  if (action.type === USER.LOGIN.SUCCESS) api.setToken(action.payload.key);
  if (action.type === 'persist/REHYDRATE' && action.payload)
    api.setToken(action.payload.userReducer.user.key);

  // Remove token on logout
  if (action.type === USER.LOGOUT) api.setToken(null);

  // continue processing this action
  return next(action);
};
