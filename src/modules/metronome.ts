import { createSlice } from '@reduxjs/toolkit';

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

const metronomeSlice = createSlice({
  name: 'metronome',
  initialState,
  reducers: {
    // ビートを更新
    updateBeat: (state, action) => {
      state.beat = action.payload;
    },
    // 再生・停止のステータスを切り替え
    updateRunStatus: state => {
      state.runStatus = !state.runStatus;
    },
    // テンポを更新
    updateTempo: (state, action) => {
      state.tempo = action.payload;
    },
  },
});

export default metronomeSlice.reducer;

export const actions = {
  ...metronomeSlice.actions,
};
