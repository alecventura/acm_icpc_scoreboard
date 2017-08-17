import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setLoading } from './../../../../src/modules/main/action';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Main actions', () => {
  test('Test enable loading', () => {
    const expectedAction = {
      type: 'ENABLE_LOADING',
    };
    const store = mockStore();
    store.dispatch(setLoading(true));
    const actions = store.getActions();
    expect(actions).toEqual([expectedAction]);
  });

  test('Test disable loading', () => {
    const expectedAction = {
      type: 'DISABLE_LOADING',
    };
    const store = mockStore();
    store.dispatch(setLoading(false));
    const actions = store.getActions();
    expect(actions).toEqual([expectedAction]);
  });
});
