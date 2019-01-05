import { combineReducers } from 'redux';
import { reducer as tickReducer } from './tick';
import { reducer as addReducer } from './add';

// REDUCERS
export default combineReducers({
  tick: tickReducer,
  add: addReducer,
});
