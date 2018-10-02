// import ACTION_TYPES from '../actions/types';
// import Immutable from 'immutable';
// const AccountReducer = (state = {
//   isLoggingIn: false,
//   isUpdating: false,
//   loggedIn: false,
//   user: null,
//   token: null,
// }, action) => {
//   switch (action.type) {
//     case ACTION_TYPES.FB_LOGIN_COMPLETED:
//       return state.set('isLoggingIn', true);
//     case ACTION_TYPES.AUTH_LOGIN_COMPLETED:
//       return state.set('isLoggingIn', false).set('loggedIn', true).set('user', action.payload.user).set('token', action.payload.token);
//     case ACTION_TYPES.AUTH_LOGOUT_REQUESTED:
//       return state.set('loggedIn', false).set('user', null).set('token', null);
//     case ACTION_TYPES.SAVE_HISTORY:
//       return state.set('history', action.payload);
//     case ACTION_TYPES.EDIT_SHIPPING_REQUESTED:
//       return state.set('isUpdating', true);
//     case ACTION_TYPES.EDIT_SHIPPING_COMPLETED:
//       return state.set('user', action.payload).set('isUpdating', false);
//     case ACTION_TYPES.EDIT_SHIPPING_FAILED:
//       return state.set('isUpdating', false);
//     default:
//       return state;
//   }
// };
// export default AccountReducer;
