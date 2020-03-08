import { createSlice } from '@reduxjs/toolkit';

type State = {
  listDisplayStatus: boolean;
};

const initialState: State = {
  listDisplayStatus: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // 楽曲リストのメニューを切り替え
    toggleListMenu: state => {
      state.listDisplayStatus = !state.listDisplayStatus;
    },
  },
});

export default uiSlice.reducer;

export const actions = {
  ...uiSlice.actions,
};
