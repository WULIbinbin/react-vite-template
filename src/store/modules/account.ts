import { createSlice } from '@reduxjs/toolkit';

interface IAccount {
  accountInfo: {
    name?: string;
  };
}

const initialState: IAccount = {
  accountInfo: {
    name: '',
  },
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    
  },
});

export default accountSlice;
