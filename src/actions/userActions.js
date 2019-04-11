/**
 * Redux user actions
 */

export const USER = {
  CREATE: 'USER_CREATE',
  UPDATE: 'USER_UPDATE',
  DELETE: 'USER_DELETE',
  LOGIN: {
    SUCCESS: 'USER_LOGIN_SUCCESS',
    ERROR: 'USER_LOGIN_ERROR'
  },
  LOGIN_: 'USER_LOGIN_ERROR',
  LOGOUT: 'USER_LOGOUT'
};

// export function loginUser() {
//   return dispatch => {
//     // simulation fetch to API
//     setTimeout(() => {
//       dispatch({
//         type: USER.LOGIN,
//         payload: {
//           firstName: 'Don', // FIXME:
//           lastName: 'Joe' // FIXME:
//         }
//       });
//     }, 1000);
//   };
// }

// export function logoutUser() {
//   return {
//     type: USER.LOGOUT
//   };
// }
