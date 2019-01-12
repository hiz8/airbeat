import { actionTypes } from '../actions';

export type State = {
  playing: boolean;
};

const initialState: State = {
  playing: false,
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.UPDATE_PLAYING:
      return {
        ...state,
        playing: !state.playing,
      };
    default:
      return state;
  }
};
