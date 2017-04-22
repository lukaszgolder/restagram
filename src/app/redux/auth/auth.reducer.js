// @flow
import { handleActions } from 'redux-actions';
import { auth } from './auth.actions';

const initState = {
  loading: false,
  user: { username: null, name: null, email: null },
};

export const authReducer = handleActions(
  {
    [auth.user.login.request]: (state, { payload }) => ({
      ...state,
      loading: true,
    }),
    [auth.user.login.success]: (state, { payload: { access_token, user } }) => {
      localStorage.setItem('access_token', access_token);

      return {
        ...state,
        loading: false,
        user,
      };
    },
    [auth.user.login.failure]: (state, { payload }) => ({
      ...state,
      loading: false,
    }),
  },
  { ...initState },
);
