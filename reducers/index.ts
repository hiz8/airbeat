import { combineReducers } from 'redux';
import { reducer as tickReducer } from './tick';
import { reducer as addReducer } from './add';
import { reducer as updatePlayingReducer } from './updatePlayin';

// REDUCERS
export default combineReducers({
  tick: tickReducer,
  add: addReducer,
  updatePlaying: updatePlayingReducer,
});
