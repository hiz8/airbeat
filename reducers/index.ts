import { combineReducers } from 'redux';
import { reducer as updateRunStatusReducer } from './updateRunStatus';
import { reducer as updateTempoReducer } from './updateTempo';
import { reducer as updateBeatReducer } from './updateBeat';

// REDUCERS
export default combineReducers({
  updateRunStatus: updateRunStatusReducer,
  updateTempo: updateTempoReducer,
  updateBeat: updateBeatReducer,
});
