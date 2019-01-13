export enum actionTypes {
  UPDATE_RUN_STATUS = 'UPDATE_RUN_STATUS',
  UPDATE_TEMPO = 'UPDATE_TEMPO',
  UPDATE_BEAT = 'UPDATE_BEAT',
}

// ACTIONS
export const updateRunStatus = () => dispatch => {
  return dispatch({ type: actionTypes.UPDATE_RUN_STATUS });
};

export const updateTempo = () => dispatch => {
  return dispatch({ type: actionTypes.UPDATE_TEMPO });
};

export const updateBeat = () => dispatch => {
  return dispatch({ type: actionTypes.UPDATE_BEAT });
};
