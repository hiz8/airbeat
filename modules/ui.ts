// Actions
export enum actionTypes {
  TOGGLE_LIST_MENU = 'TOGGLE_LIST_MENU',
}

// Reducer
export type State = {
  listDisplayStatus: boolean;
};

const initialState: State = {
  listDisplayStatus: false,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case actionTypes.TOGGLE_LIST_MENU:
      return {
        ...state,
        listDisplayStatus: !state.listDisplayStatus,
      };
    default:
      return state;
  }
}

// Action Creators
/**
 * 楽曲リストのメニューを切り替え
 */
const toggleListMenu = () => dispatch => {
  return dispatch({ type: actionTypes.TOGGLE_LIST_MENU });
};

export const actions = {
  toggleListMenu,
};
