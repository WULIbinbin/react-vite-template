import React from 'react';

export enum Theme {
  light = 'light',
  dark = 'dark',
}
export interface IContext {
  theme?: Theme;
  setDarkTheme?: (value: boolean) => void;
}

export const LayoutContext = React.createContext<IContext>({});
