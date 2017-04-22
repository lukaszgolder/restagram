import { bodyMiddleware } from './body.middleware';
import { RSAA } from 'redux-api-middleware';

describe('BodyMiddleware', () => {
  const createFakeStore = fakeData => ({
    getState() {
      return fakeData;
    },
  });

  const dispatchWithStoreOf = (storeData, action) => {
    let dispatched = null;

    const dispatch = bodyMiddleware(createFakeStore(storeData))(actionAttempt => dispatched = actionAttempt);

    dispatch(action);

    return dispatched;
  };

  it('should dispatch same object if callApi is undefined', () => {
    const action = {
      type: 'MOCK',
    };

    expect(dispatchWithStoreOf({}, action)).toEqual(action);
  });

  it('should dispatch same object if body property is undefined', () => {
    const action = {
      [RSAA]: {
        endpoint: 'example',
      },
    };

    expect(dispatchWithStoreOf({}, action)[RSAA]).toEqual(action[RSAA]);
  });

  it('should change body property object to formData if method is POST', () => {
    const file = new Blob();
    const action = {
      [RSAA]: {
        body: {
          foo: {
            bar: [1, 2, 3],
            baz: null,
          },
          baz: 'foo',
          qux: file,
          qax: '',
        },
        method: 'POST',
      },
    };

    let formData = new FormData();

    formData.append('foo[bar]', 1);
    formData.append('foo[bar]', 2);
    formData.append('foo[bar]', 3);
    formData.append('baz', 'foo');
    formData.append('qux', file);
    formData.append('qax', '');

    expect(dispatchWithStoreOf({}, action)[RSAA]).toEqual({
      body: formData,
      method: 'POST',
    });
  });

  it('should send body as json if method is different from POST', () => {
    const action = {
      [RSAA]: {
        method: 'PUT',
        body: {
          foo: 'bar',
        },
      },
    };

    expect(dispatchWithStoreOf({}, action)[RSAA]).toEqual({
      body: JSON.stringify({
        foo: 'bar',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT',
    });
  });
});
