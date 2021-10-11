import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getAccounts } from './accountsAPI';

export interface Account {
    name: string,
    category: string,
    id: string,
}

export interface AccountsState {
  list: Array<Account>;
}

const initialState: AccountsState= {
  list: [],
};

export const refreshAccounts = createAsyncThunk(
  'accounts/refreshAccounts',
  async () => {
    try {
      const response: any = await getAccounts();
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(refreshAccounts.fulfilled, (state, action) => { state.list = action.payload });
  },
});

export const selectAccounts = (state: RootState) => state.accounts.list;

export default accountsSlice.reducer;
