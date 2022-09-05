import { ELayoutStyle } from './layout';

export interface IRouter {
  path: string;
  index?: boolean;
  redirect?: string;
  component?: React.FC<BrowserRouterProps> | (() => any);
  meta?: {
    title?: string;
    showBreadcrumb?: boolean;
    layoutStyle?: ELayoutStyle;
  };
  children?: IRouter[];
}

export interface ISidebar {
  name: string;
  to: string;
  children?: ISidebar[];
}
