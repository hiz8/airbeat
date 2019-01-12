import { actionTypes } from '../actions';

export type State = {
  runStatus: boolean;
};

const initialState: State = {
  runStatus: false,
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.UPDATE_RUN_STATUS:
      return {
        ...state,
        runStatus: !state.runStatus,
      };
    default:
      return state;
  }
};
