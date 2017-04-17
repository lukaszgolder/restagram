// @flow
import { handleActions, combineActions } from 'redux-actions';
import { auth } from './auth.actions';

export const authReducer = handleActions(
  {
    [combineActions(auth.user.login.request, auth.user.login.success, auth.user.login.failure)]: (
      state,
      { username, name, email },
    ) => ({
      username,
      name,
      email,
    }),
  },
  { user: { username: null, name: null, email: null } },
);
