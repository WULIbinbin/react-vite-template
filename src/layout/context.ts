import React from "react";

export interface IContext {
  theme?: Theme;
  setDarkTheme?: (value: boolean) => void;
}

export enum Theme {
  light = "light",
  dark = "dark",
}

export const LayoutContext = React.createContext<IContext>({});
