import { combineReducers } from 'redux';
import tick, { State as TickState } from './tick';
import add, { State as AddState } from './add';

export type RootState = {
  TickState;
  AddState;
};

// REDUCERS
export default combineReducers({
  tick,
  add,
});
