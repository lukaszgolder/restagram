// @flow
import { createActions } from 'redux-actions';
import { RSAA } from 'redux-api-middleware';

export const authActions = createActions({
  user: {
    login: {
      request: ({ username, password }) => ({
        grant_type: 'password',
        client_id: 'react',
        client_secret: 'secret-react',
        username,
        password,
      }),
      success: () => undefined,
      failure: () => undefined,
    },
  },
});

export const login = (data: any) => ({
  [RSAA]: {
    types: [authActions.user.login.request(data), authActions.user.login.success(), authActions.user.login.failure()],
    endpoint: 'oauth/token',
    method: 'POST',
  },
});
