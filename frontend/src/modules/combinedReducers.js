import { combineReducers } from 'redux';

import inputData from './inputData/reducer';

const reducersCombined = combineReducers({
  inputData,
});

export default reducersCombined;
