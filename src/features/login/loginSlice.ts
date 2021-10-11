import {
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {
    fbLogin,
    fbLogout,
    getFbAuthData,
} from './loginAPI';

export interface LoginState {
  status: 'pending' | 'loggedIn' | 'notAuthenticated';
}

const initialState: LoginState = {
  status: 'pending',
};

function handleAuthSuccessful(state: LoginState) {
    state.status = 'loggedIn';
}
function resetAuth(state: LoginState) {
    state.status = 'notAuthenticated';
}
function handleAuthPending(state: LoginState) {
    state.status = 'pending';
}

function handleLoginError(error: Error) {
    if (error.message !== 'NOT_LOGGED_IN') {
        console.error(error);
    }
    throw error;
}

export const refreshLoginData = createAsyncThunk(
  'login/refreshLoginData',
  async () => {
      try {
          return await getFbAuthData();
        } catch (error) {
          handleLoginError(error);
        }
  }
);

export const loginWithFb = createAsyncThunk(
    'login/loginWithFb',
    async () => {
      try {
          return await fbLogin();
      } catch (error) {
          handleLoginError(error);
      }
    }
);

export const logoutFb = createAsyncThunk(
    'login/logoutFb',
    async () => {
      try {
        await fbLogout();
      } catch (error) {
          console.error(error);
          throw error;
      }
    }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(refreshLoginData.pending, handleAuthPending)
      .addCase(refreshLoginData.fulfilled, handleAuthSuccessful)
      .addCase(refreshLoginData.rejected, resetAuth)
      .addCase(loginWithFb.pending, handleAuthPending)
      .addCase(loginWithFb.fulfilled, handleAuthSuccessful)
      .addCase(loginWithFb.rejected, resetAuth)
      .addCase(logoutFb.fulfilled, resetAuth);
  },
});

export const selectLoginStatus = (state: RootState) => state.login.status;
export const selectIsUserLoggedIn = (state: RootState) => state.login.status === 'loggedIn';


export default loginSlice.reducer;
