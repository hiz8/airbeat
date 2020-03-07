// Actions
export enum actionTypes {
  UPDATE_RUN_STATUS = 'UPDATE_RUN_STATUS',
  UPDATE_TEMPO = 'UPDATE_TEMPO',
  UPDATE_BEAT = 'UPDATE_BEAT',
  TOGGLE_LIST_MENU = 'TOGGLE_LIST_MENU',
}

// Reducer
export enum Beats {
  OPTION1 = '4beat',
  DEFAULT = '8beat',
  OPTION2 = '16beat',
  OPTION3 = 'Triplet',
}

export type State = {
  beat: Beats;
  runStatus: boolean;
  tempo: number;
};

const initialState: State = {
  beat: Beats.DEFAULT,
  runStatus: false,
  tempo: 120,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case actionTypes.UPDATE_BEAT:
      return {
        ...state,
        beat: action.payload,
      };

    case actionTypes.UPDATE_RUN_STATUS:
      return {
        ...state,
        runStatus: !state.runStatus,
      };

    case actionTypes.UPDATE_TEMPO:
      return {
        ...state,
        tempo: action.payload,
      };

    default:
      return state;
  }
}

// Action Creators
/**
 * 再生・停止のステータスを切り替え
 */
const updateRunStatus = () => dispatch => {
  return dispatch({ type: actionTypes.UPDATE_RUN_STATUS });
};

/**
 * テンポを更新

 * @param value 変更後のテンポ
 */
const updateTempo = (value: number) => dispatch => {
  return dispatch({ type: actionTypes.UPDATE_TEMPO, payload: value });
};

const updateBeat = (value: string) => dispatch => {
  return dispatch({ type: actionTypes.UPDATE_BEAT, payload: value });
};

export const actions = {
  updateRunStatus,
  updateTempo,
  updateBeat,
};
