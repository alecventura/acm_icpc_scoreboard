import reducer from './../../../modules/inputData/reducer';

describe('InputData reducer', () => {
  test('should return the initial state', () => {
    const expectedState = {
      inputData: '',
      result: '',
    };

    const state = undefined;
    const action = {};

    expect(reducer(state, action)).toEqual(expectedState);
  });

  test('should handle INPUT_CHANGED', () => {
    const valueString = 'testelalala';
    const expectedState = {
      inputData: valueString,
    };

    const state = {
      inputData: '',
    };
    const action = { type: 'INPUT_CHANGED', payload: valueString };

    expect(reducer(state, action)).toEqual(expectedState);
  });

  test('should handle UPDATE_OUTPUT', () => {
    const valueString = 'testelalala';
    const expectedState = {
      result: valueString,
    };

    const state = {
      result: '',
    };
    const action = { type: 'UPDATE_OUTPUT', payload: valueString };

    expect(reducer(state, action)).toEqual(expectedState);
  });
});
