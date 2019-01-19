export enum actionTypes {
  UPDATE_RUN_STATUS = 'UPDATE_RUN_STATUS',
  UPDATE_TEMPO = 'UPDATE_TEMPO',
  UPDATE_BEAT = 'UPDATE_BEAT',
  TOGGLE_LIST_MENU = 'TOGGLE_LIST_MENU',
}

/**
 * 再生・停止のステータスを切り替え
 */
export const updateRunStatus = () => dispatch => {
  return dispatch({ type: actionTypes.UPDATE_RUN_STATUS });
};

/**
 * テンポを更新

 * @param value 変更後のテンポ
 */
export const updateTempo = (value: number) => dispatch => {
  return dispatch({ type: actionTypes.UPDATE_TEMPO, payload: value });
};

export const updateBeat = (value: string) => dispatch => {
  return dispatch({ type: actionTypes.UPDATE_BEAT, payload: value });
};

/**
 * 楽曲リストのメニューを切り替え
 */
export const toggleListMenu = () => dispatch => {
  return dispatch({ type: actionTypes.TOGGLE_LIST_MENU });
};
