// @flow
import { handleActions } from 'redux-actions';
import { authActions } from './auth.actions';

const initState = {
  loading: false,
  access_token: null,
  user: { username: null, name: null, email: null },
};

export const auth = handleActions(
  {
    [authActions.user.login.request]: (state, { payload }) => ({
      ...state,
      loading: true,
    }),
    [authActions.user.login.success]: (state, { payload: { access_token, user } }) => {
      localStorage.setItem('access_token', access_token);

      return {
        ...state,
        loading: false,
        access_token,
        user,
      };
    },
    [authActions.user.login.failure]: (state, { payload }) => ({
      ...state,
      loading: false,
    }),
  },
  { ...initState },
);
