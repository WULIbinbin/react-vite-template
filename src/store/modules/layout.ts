import { ELayoutStyle, ETheme } from '@/types/layout.d';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface IState {
  layoutStyle: ELayoutStyle;
  theme: ETheme;
}

const initialState: IState = {
  layoutStyle: ELayoutStyle.Mix,
  theme: ETheme.light,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    switchTheme(state, action) {
      if (action?.payload) {
        state.theme = ETheme.dark;
        document.documentElement.setAttribute('theme-mode', 'dark');
      } else {
        state.theme = ETheme.light;
        document.documentElement.removeAttribute('theme-mode');
      }
    },
  },
});

export default layoutSlice;
