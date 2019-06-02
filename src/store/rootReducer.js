import { combineReducers } from 'redux';
import { authReducer } from './modules/auth';
import { partiesReducer } from './modules/parties';

export default combineReducers({
  auth: authReducer,
  parties: partiesReducer,
});
