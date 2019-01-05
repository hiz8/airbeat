import { actionTypes } from '../actions';

export type State = {
  lastUpdate: number;
  light: boolean;
};

const initialState: State = {
  lastUpdate: 0,
  light: false,
};

const tick = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.TICK:
      return {
        ...state,
        lastUpdate: action.ts,
        light: !!action.light,
      };
    default:
      return state;
  }
};

export default tick;