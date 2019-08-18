import { actionTypes } from '../actions';

export enum Beats {
  OPTION1 = '4beat',
  DEFAULT = '8beat',
  OPTION2 = '16beat',
}

export type State = {
  beat: Beats;
};

const initialState: State = {
  beat: Beats.DEFAULT,
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.UPDATE_BEAT:
      return {
        ...state,
        beat: action.payload,
      };
    default:
      return state;
  }
};
