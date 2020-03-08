import { configureStore, combineReducers } from '@reduxjs/toolkit';
import metronomeReducer from '../modules/metronome';
import uiReducer from '../modules/ui';

const rootReducer = combineReducers({
  metronome: metronomeReducer,
  ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export function configureAppStore(initialState: RootState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
}
