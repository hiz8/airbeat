import { actionTypes } from '../actions';

export type State = {
  beat: string;
};

export enum Beats {
  OPTION1 = '4beat',
  DEFAULT = '8beat',
  OPTION2 = '16beat',
}

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
