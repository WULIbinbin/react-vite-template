import { Navigate, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { routes } from './routes';
import Container from '@/layout/container';
import { IRouter } from '@/types/router';

type TMapRoutes = (routes: IRouter[], parentPath?: string, breadcrumb?: string[]) => React.ReactNode[];

export const mapRoutes: TMapRoutes = (routes, parentPath = '', breadcrumb = []) =>
  routes.map((route, idx: number) => {
    const { component: Component, children, redirect, meta, index } = route;
    const currentPath = parentPath;
    let currentBreadcrumb = breadcrumb;

    if (meta?.title) {
      currentBreadcrumb = currentBreadcrumb.concat([meta?.title]);
    }

    if (redirect) {
      // 重定向
      return <Route key={idx} path={currentPath} element={<Navigate to={redirect} replace />} />;
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
    return children ? mapRoutes(children, currentPath, currentBreadcrumb) : null;
  });

export default function RouteMain() {
  return (
    <Suspense>
      <Routes>{mapRoutes(routes)}</Routes>
    </Suspense>
  );
}