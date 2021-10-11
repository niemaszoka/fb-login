import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface AppState {
  isFbSdkLoaded: boolean;
}

const initialState: AppState = {
  isFbSdkLoaded: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setFbSdkLoaded: (state: AppState, action: PayloadAction<boolean>) => {
      state.isFbSdkLoaded = action.payload;
    },
  },
});

export const { setFbSdkLoaded } = appSlice.actions;
export const selectIsFbSdkLoaded= (state: RootState) => state.app.isFbSdkLoaded;

export default appSlice.reducer;
