import { configureStore, combineReducers } from '@reduxjs/toolkit';
import metronomeReducer from './modules/metronome';
import uiReducer from './modules/ui';

const rootReducer = combineReducers({
  metronome: metronomeReducer,
  ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;