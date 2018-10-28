import { actionTypes } from '../actions';

export type State = {
  count: number;
};

const initialState: State = {
  count: 0,
};

const add = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default add;
