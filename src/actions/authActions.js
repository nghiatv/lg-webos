import ACTION_TYPES from './types';

export default {
  LoginRequested: () => ({ type: ACTION_TYPES.AUTH_LOGIN_REQUESTED }),
  LoginCancelled: () => ({ type: ACTION_TYPES.AUTH_LOGIN_COMPLETED }),
  LoginCompleted: () => ({ type: ACTION_TYPES.AUTH_LOGIN_COMPLETED }),
  logout: () => ({ type: ACTION_TYPES.AUTH_LOGOUT_REQUESTED }),
};
