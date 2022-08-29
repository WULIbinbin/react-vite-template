export enum ELayoutStyle {
  Topbar = 'Topbar',
  Mix = 'Mix',
  FullPage = 'FullPage',
}

export enum ETheme {
  light = 'light',
  dark = 'dark',
}

export interface IContainer {
  breadcrumbs?: string[];
  children?: JSX.Element;
  layoutStyle?: ELayoutStyle;
}
