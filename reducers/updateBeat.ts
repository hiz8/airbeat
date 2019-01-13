import { actionTypes } from '../actions';

export type State = {
  beat: string;
};

const initialState: State = {
  beat: '8beat',
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.UPDATE_BEAT:
      return {
        ...state,
        tempo: !state.beat,
      };
    default:
      return state;
  }
};
