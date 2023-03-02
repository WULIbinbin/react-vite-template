import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CheckSession, Login } from '@/api/account';
import { anyAwait } from '@/utils/methods';

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

export const checkSession = createAsyncThunk('account/checkSession', async () => {
  try {
    const res = await CheckSession();
    return res.data;
  } catch (error) {
    return null;
  }
});

export const login = createAsyncThunk('account/login', async () => {
  const [err, res] = await anyAwait(Login());
  if (err) return Promise.reject(err);
  return res.data;
});

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state) => {
      console.log(state);
      state.loginStatus = ELoginStatus.LOGIN;
    });
    builder.addCase(login.rejected, (state) => {
      state.loginStatus = ELoginStatus.LOGERR;
    });
  },
  // extraReducers: {
  //   [login.fulfilled](state, action) {
  //     console.log(state, action);
  //   },
  // },
});

export default accountSlice;
