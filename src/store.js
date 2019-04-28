import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { userReducer, wishlistsReducer, modalReducer } from './reducers';
import { reducer as formReducer } from 'redux-form';
import { addAuthTokenMiddleware } from './utils/addAuthTokenMiddleware';
/**
 * Redux, redux-persist, redux-thunk and Redux Dev Tools setup
 */

const rootReducer = combineReducers({
  wishlistsReducer,
  userReducer,
  modalReducer,
  form: formReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['modalReducer', 'form'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {
  userReducer: {
    isLoggedIn: false,
    user: {},
  },
  wishlistsReducer: {
    wishlists: [],
  },
  modalReducer: {
    openedModal: null,
    currentlyEditedItem: {},
  },
};

export const store = createStore(
  persistedReducer,
  initialState,
  compose(
    applyMiddleware(thunk, addAuthTokenMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f, // just a dummy function
  ),
);

export const persistor = persistStore(store);
