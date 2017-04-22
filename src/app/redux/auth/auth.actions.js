// @flow
import { createActions } from 'redux-actions';
import { RSAA } from 'redux-api-middleware';

export const auth = createActions({
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
    types: [auth.user.login.request(data), auth.user.login.success(), auth.user.login.failure()],
    endpoint: 'oauth/token',
    method: 'POST',
  },
});
