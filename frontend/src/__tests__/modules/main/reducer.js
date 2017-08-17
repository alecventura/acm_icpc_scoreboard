import reducer from './../../../modules/main/reducer';

describe('Main reducer', () => {
  test('should return the initial state', () => {
    const expectedState = {
      loading: false,
    };

    const state = undefined;
    const action = {};

    expect(reducer(state, action)).toEqual(expectedState);
  });

  test('should handle ENABLE_LOADING', () => {
    const expectedState = {
      loading: true,
    };

    const state = {
      loading: false,
    };
    const action = { type: 'ENABLE_LOADING' };

    expect(reducer(state, action)).toEqual(expectedState);
  });

  test('should handle DISABLE_LOADING', () => {
    const expectedState = {
      loading: false,
    };

    const state = {
      loading: true,
    };
    const action = { type: 'DISABLE_LOADING' };

    expect(reducer(state, action)).toEqual(expectedState);
  });
});
