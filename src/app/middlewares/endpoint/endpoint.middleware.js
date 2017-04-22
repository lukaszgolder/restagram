import { RSAA } from 'redux-api-middleware';

const API_URL = process.env.REACT_APP_API_URL;

const prepareEndpoint = ({ endpoint }) => {
  if (endpoint.startsWith('http://') || endpoint.startsWith('https://')) {
    return endpoint;
  }

  return API_URL + endpoint;
};

export const endpointMiddleware = () =>
  next =>
    action => {
      const callAPI = action[RSAA];

      if (typeof callAPI === 'undefined') {
        return next(action);
      }

      return next({
        [RSAA]: { ...callAPI, endpoint: prepareEndpoint(callAPI) },
      });
    };
