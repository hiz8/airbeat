import { actionTypes } from '../actions';

export type State = {
  listDisplayStatus: boolean;
};

const initialState: State = {
  listDisplayStatus: false,
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.TOGGLE_LIST_MENU:
      return {
        ...state,
        listDisplayStatus: !state.listDisplayStatus,
      };
    default:
      return state;
  }
};
