import { endpointMiddleware } from './endpoint.middleware';
import { RSAA } from 'redux-api-middleware';

const API_URL = process.env.REACT_APP_API_URL;

describe('EndpointMiddleware', () => {
  const createFakeStore = fakeData => ({
    getState() {
      return fakeData;
    },
  });

  const dispatchWithStoreOf = (storeData, action) => {
    let dispatched = null;

    const dispatch = endpointMiddleware(createFakeStore(storeData))(actionAttempt => dispatched = actionAttempt);

    dispatch(action);

    return dispatched;
  };

  it('should dispatch if callApi is undefined', () => {
    const action = {
      type: 'MOCK',
    };

    expect(dispatchWithStoreOf({}, action)).toEqual(action);
  });

  it('should change endpoint if callApi is defined', () => {
    const action = {
      [RSAA]: {
        endpoint: 'example',
      },
    };

    expect(dispatchWithStoreOf({}, action)[RSAA]).toEqual({
      endpoint: API_URL + 'example',
    });
  });

  it('should not change endpoint if it starts with i18n', () => {
    const action = {
      [RSAA]: {
        endpoint: '/i18n/example',
      },
    };

    expect(dispatchWithStoreOf({}, action)[RSAA]).toEqual(action[RSAA]);
  });

  ['http://dev.loc/', 'https://dev.loc/', API_URL].forEach(url => {
    it(`has to pass unchanged endpoint when its already given, like: ${url}`, () => {
      const action = {
        [RSAA]: {
          endpoint: `${url}endpoint`,
        },
      };
      expect(dispatchWithStoreOf({}, action)[RSAA]).toEqual(action[RSAA]);
    });
  });
});
