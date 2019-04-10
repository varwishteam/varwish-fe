import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import wishlistsReducer from './reducers/wishlistsReducer';

/**
 * Redux, redux-persist, redux-thunk and Redux Dev Tools setup
 */

const rootReducer = combineReducers({
  wishlistsReducer,
  userReducer
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
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

export const persistor = persistStore(store);
