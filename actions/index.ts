export enum actionTypes {
  ADD = 'ADD',
  TICK = 'TICK',
  UPDATE_PLAYING = 'UPDATE_PLAYING',
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

export const updatePlaying = () => dispatch => {
  return dispatch({ type: actionTypes.UPDATE_PLAYING });
};
