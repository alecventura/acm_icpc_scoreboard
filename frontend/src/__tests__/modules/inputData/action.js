import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from './../../../../src/modules/inputData/action';
import { API_URL } from './../../../../src/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('InputData actions', () => {
  test('Test input value update', () => {
    const expectedAction = {
      type: 'INPUT_CHANGED',
      payload: 'test123',
    };
    expect(actions.handleChange({ target: { value: 'test123' } })).toEqual(expectedAction);
  });

  test('Test input value update', () => {
    // moxios.install();
    // moxios.stubRequest(`${API_URL}/process-input/`, { status: 200, response: 'A nice test result' });
    // const store = mockStore();

    // store.dispatch(actions.handleSubmit('anyData'));
    // const actionsResult = store.getActions();
    // expect(actionsResult).toEqual([{ type: 'UPDATE_OUTPUTT', payload: 'A nice test result' }]);

    // return store.dispatch(actions.handleSubmit('anyData'))
    //   .then(() => {
    //     expect(store.getActions()).toEqual([
    //       { type: 'UPDATE_OUTPUTT', payload: 'A nice test result' },
    //     ]);
    //   });
  });
});
