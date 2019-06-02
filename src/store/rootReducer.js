import { combineReducers } from 'redux';
import { authReducer } from './modules/auth';
import { partiesReducer } from './modules/parties';
import { resultsReducer } from './modules/results';

export default combineReducers({
  auth: authReducer,
  parties: partiesReducer,
  results: resultsReducer,
});
