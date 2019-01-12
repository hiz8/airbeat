import { combineReducers } from 'redux';
import { reducer as tickReducer } from './tick';
import { reducer as addReducer } from './add';
import { reducer as updateRunStatusReducer } from './updateRunStatus';

// REDUCERS
export default combineReducers({
  tick: tickReducer,
  add: addReducer,
  updateRunStatus: updateRunStatusReducer,
});
