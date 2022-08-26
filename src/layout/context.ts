import { ETheme } from '@/types/layout.d';
import React from 'react';

export interface IContext {
  theme?: ETheme;
  setDarkTheme?: (value: boolean) => void;
}

export const LayoutContext = React.createContext<IContext>({});
