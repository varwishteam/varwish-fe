import { USER } from '../actions/userActions';

/**
 * User reducer, handles the manipulation of state for dispatched USER actions
 * @param {*} state
 * @param {type, payload} action
 */
export default function userReducer(state = {}, action) {
  switch (action.type) {
    case USER.CREATE:
      return { ...state, user: action.payload };

    case USER.UPDATE:
      return {
        ...state,
        user: action.payload
      };

    case USER.DELETE: {
      return {
        ...state,
        user: {}
      };
    }

    case USER.LOGIN.SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
      };
    }

    case USER.LOGIN.ERROR: {
      return {
        ...state,
        isLoggedIn: false
      };
    }

    case USER.LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: {}
      };
    }

    default:
      return state;
  }
}
