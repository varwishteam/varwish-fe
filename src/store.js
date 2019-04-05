import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import wishlists from 'modules/wishlists';

/**
 * Redux setup
 */

const rootReducer = combineReducers({
  wishlists
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension : f => f
  )
);

export default store;
