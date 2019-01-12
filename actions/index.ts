export enum actionTypes {
  ADD = 'ADD',
  TICK = 'TICK',
  UPDATE_RUN_STATUS = 'UPDATE_RUN_STATUS',
}

// ACTIONS
export const serverRenderClock = isServer => dispatch => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() });
};

export const startClock = () => dispatch => {
  return setInterval(
    () => dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() }),
    1000,
  );
};

export const addCount = () => dispatch => {
  return dispatch({ type: actionTypes.ADD });
};

export const updateRunStatus = () => dispatch => {
  return dispatch({ type: actionTypes.UPDATE_RUN_STATUS });
};
