import { Navigate, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { routes } from './routes';
import Container from '@/layout/container';
import { IRouter } from '@/types/router';
import { resolve } from '@/utils/path';

type TMapRoutes = (routes: IRouter[], parentPath?: string, breadcrumb?: string[]) => React.ReactNode[];

export const mapRoutes: TMapRoutes = (routes, parentPath = '', breadcrumb = []) =>
  routes.map((route, idx: number) => {
    const { component: Component, children, redirect, meta, index = false } = route;
    const currentPath = resolve(parentPath, route.path);
    let currentBreadcrumb = breadcrumb;
    if (meta?.title) {
      currentBreadcrumb = currentBreadcrumb.concat([meta?.title]);
    }

    const renderChild = children ? mapRoutes(children, currentPath, currentBreadcrumb) : null;

    if (redirect) {
      // 重定向
      return (
        <Route key={idx} path={currentPath} element={<Navigate to={redirect} replace />}>
          {renderChild}
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
            <Container breadcrumbs={currentBreadcrumb}>
              <Component />
            </Container>
          }
        />
      );
    }
    // 无路由菜单
    return renderChild;
  });

export default function RouteMain() {
  return (
      <Suspense>
        <Routes>{mapRoutes(routes)}</Routes>
      </Suspense>
  );
}
