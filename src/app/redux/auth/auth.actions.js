// @flow
import { createActions } from 'redux-actions';

export const auth = createActions({
  user: {
    login: {
      request: [
        ({ username, password }) => ({
          grant_type: 'password',
          client_id: 'react',
          client_secret: 'secret-react',
          username,
          password,
        }),
        () => ({ endpoint: 'oauth/token', method: 'POST' }),
      ],
      success: () => undefined,
      failure: () => undefined,
    },
  },
});
