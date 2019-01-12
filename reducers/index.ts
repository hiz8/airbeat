import { combineReducers } from 'redux';
import { reducer as updateRunStatusReducer } from './updateRunStatus';

// REDUCERS
export default combineReducers({
  updateRunStatus: updateRunStatusReducer,
});
