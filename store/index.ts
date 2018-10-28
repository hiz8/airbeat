import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer, { RootState } from '../reducers';

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
};

export const initStore = (initialState: any = exampleInitialState) => {
  return createStore(
    reducer,
    initialState as any,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
};
