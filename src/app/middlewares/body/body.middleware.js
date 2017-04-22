import { RSAA } from 'redux-api-middleware';

// Based on https://gist.github.com/ghinda/8442a57f22099bdb2e34
function objectToFormData(obj, form, namespace) {
  let fd = form || new FormData();
  let formKey;

  for (let property of Object.keys(obj)) {
    if (namespace) {
      formKey = namespace + '[' + property + ']';
    } else {
      formKey = property;
    }

    if (!obj[property] && obj[property] !== '' && obj[property] !== 0) {
      continue;
    }

    if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
      objectToFormData(obj[property], fd, formKey);
    } else {
      fd.append(formKey, obj[property]);
    }
  }

  return fd;
}

export const bodyMiddleware = () =>
  next =>
    action => {
      const callAPI = action[RSAA];

      if (typeof callAPI === 'undefined' || !callAPI.body) {
        return next(action);
      }

      if ('POST' === callAPI.method) {
        return next({
          [RSAA]: {
            ...callAPI,
            body: objectToFormData(callAPI.body),
          },
        });
      }

      return next({
        [RSAA]: {
          ...callAPI,
          headers: {
            ...callAPI.headers,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(callAPI.body),
        },
      });
    };
