import { actionTypes } from '../actions';

export type State = {
  tempo: number;
};

const initialState: State = {
  tempo: 120,
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.UPDATE_TEMPO:
      return {
        ...state,
        tempo: action.payload,
      };
    default:
      return state;
  }
};
