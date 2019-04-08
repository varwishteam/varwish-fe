import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import wishlistsReducer from './reducers/wishlistsReducer';

/**
 * Redux setup
 */

const rootReducer = combineReducers({
  wishlistsReducer,
  userReducer
});

const store = createStore(
  rootReducer,
  {
    userReducer: {
      isLoggedIn: false
    }
  },
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f // just a dummy function
  )
);

export default store;
