import { Navigate, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { routes } from './routes';
import Container from '@/layout/container';
import { IRouter } from '@/types/router';
import { resolve } from '@/utils/path';
import { ELayoutStyle } from '@/types/layout.d';
import { Loading } from 'tdesign-react';

type TMapRoutes = (routes: IRouter[], parentPath?: string, breadcrumb?: string[]) => React.ReactNode[];

export const mapRoutes: TMapRoutes = (routes, parentPath = '', breadcrumb = []) =>
  routes.map((route, idx: number) => {
    const { component: Component, children, redirect, meta, index = false } = route;
    const currentPath = resolve(parentPath, route.path);
    let renderChildRoute = null;
    let currentBreadcrumb = breadcrumb;
    const layoutStyle = meta?.layoutStyle || ELayoutStyle.Mix;

    if (meta?.showBreadcrumb && meta?.title) {
      currentBreadcrumb = currentBreadcrumb.concat([meta?.title]);
    }

    if (children) {
      renderChildRoute = mapRoutes(children, currentPath, currentBreadcrumb);
    }

    if (redirect) {
      // 重定向
      return (
        <Route key={idx} path={currentPath} element={<Navigate to={redirect} replace />}>
          {renderChildRoute}
        </Route>
      );
    }

    if (Component) {
      // 有路由菜单
      return (
        <Route
          key={idx}
          path={currentPath}
          index={index}
          element={
            <Container breadcrumbs={currentBreadcrumb} layoutStyle={layoutStyle}>
              <Suspense
                fallback={
                  <Loading
                    delay={200}
                    fullscreen={true}
                    indicator
                    inheritColor={false}
                    loading
                    preventScrollThrough
                    showOverlay
                    size='medium'
                  />
                }
              >
                <Component />
              </Suspense>
            </Container>
          }
        />
      );
    }
    // 无路由菜单
    return renderChildRoute;
  });

export default function RouteMain() {
  return (
    <Suspense>
      <Routes>{mapRoutes(routes)}</Routes>
    </Suspense>
  );
}
