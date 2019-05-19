import { default as userReducer } from '../userReducer';
import { USER } from '../../actions';

describe('User reducer tests', () => {
  test('User, all action types', () => {
    expect(
      userReducer({ type: USER.SIGN_UP.SUCCESS, payload: { user: {} } }),
    ).toEqual({
      isLoggedIn: true,
      user: {},
      signUpError: null,
    });

    expect(
      userReducer({ type: USER.SIGN_UP.ERROR, payload: { error: {} } }),
    ).toEqual({
      isLoggedIn: false,
      user: null,
      signUpError: {},
    });

    expect(
      userReducer({ type: USER.SIGN_UP.RESET_ERRORS, payload: {} }),
    ).toEqual({
      signUpError: null,
    });
  });
});
