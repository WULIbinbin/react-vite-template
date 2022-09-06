import { ELayoutStyle, ETheme } from '@/types/layout.d';
import { createSlice } from '@reduxjs/toolkit';

interface IState {
  layoutStyle: ELayoutStyle;
  theme: ETheme;
  showSidebar: boolean;
}

const initialState: IState = {
  layoutStyle: ELayoutStyle.Mix,
  theme: ETheme.light,
  showSidebar: true,
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
    toggleSidebar(state, action) {
      state.showSidebar = action.payload;
    },
    setLayoutStyle(state, action) {
      state.layoutStyle = action.payload;
    },
  },
});

export default layoutSlice;
