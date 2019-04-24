import { USER } from '../actions';

/**
 * User reducer, handles the manipulation of state for dispatched USER actions
 * @param {*} state
 * @param {type, payload} action
 */
export default function userReducer(state = {}, action) {
  switch (action.type) {
    case USER.CREATE.SUCCESS:
      return { ...state, user: action.payload };

    case USER.UPDATE.SUCCESS:
      return {
        ...state,
        user: action.payload,
      };

    case USER.DELETE.SUCCESS: {
      return {
        ...state,
        user: {},
      };
    }

    case USER.LOGIN.SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        loginError: null,
      };
    }

    case USER.LOGIN.ERROR: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        loginError: action.payload,
      };
    }

    case USER.LOGIN.RESET_ERRORS: {
      return {
        ...state,
        loginError: null,
      };
    }

    case USER.LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };
    }

    default:
      return state;
  }
}
