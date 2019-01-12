export enum actionTypes {
  UPDATE_RUN_STATUS = 'UPDATE_RUN_STATUS',
}

// ACTIONS
export const updateRunStatus = () => dispatch => {
  return dispatch({ type: actionTypes.UPDATE_RUN_STATUS });
};
