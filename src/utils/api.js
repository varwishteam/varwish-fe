import { USER } from '../actions/userActions';
import { store } from '../store';
/**
 * All api call wrappers go in this file
 */

/** FIXME: Just for testing */
export const fakeAuth = {
  authenticate(callback) {
    setTimeout(() => {
      callback();
      store.dispatch({
        type: USER.LOGIN.SUCCESS,
        payload: {
          firstName: 'Don',
          lastName: 'Joe'
        }
      });
    }, 1000); // fake async
  },
  signout(callback) {
    setTimeout(callback, 100);
    store.dispatch({
      type: USER.LOGOUT
    });
  }
};
