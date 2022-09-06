import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CheckSession,Login } from '@/api/account';

enum ELoginStatus {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  LOGERR = 'LOGERR',
}
interface IAccount {
  accountInfo: {
    name?: string;
  };
  loginStatus: ELoginStatus;
}

const initialState: IAccount = {
  accountInfo: {
    name: '',
  },
  loginStatus: ELoginStatus.LOGOUT,
};

const checkSession = createAsyncThunk('account/checkSession', async () => {
  try {
    const res = await CheckSession();
    return res.data;
  } catch (error) {
    return null;
  }
});

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkSession.fulfilled, (state) => {
      state.loginStatus = ELoginStatus.LOGIN;
    });
    builder.addCase(checkSession.rejected, (state) => {
      state.loginStatus = ELoginStatus.LOGERR;
    });
  },
});

export { checkSession };

export default accountSlice;
