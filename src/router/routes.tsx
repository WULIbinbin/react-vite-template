import { ELayoutStyle } from '@/types/layout.d';
import { IRouter } from '@/types/router.d';
import { lazy } from 'react';

const Index = lazy(() => import('@/views/index/index'));
const Order = lazy(() => import('@/views/order/index'));
const InvoiceQuery = lazy(() => import('@/views/invoice/invoice-query/index'));
const InvoiceCheck = lazy(() => import('@/views/invoice/invoice-check/index'));
const Error = lazy(() => import('@/views/error/index'));

export const routes: IRouter[] = [
  {
    path: '*',
    redirect: '/error/404',
  },
  {
    path: '/error/:type',
    meta: { title: '跳转错误', layoutStyle: ELayoutStyle.FullPage },
    component: Error,
  },
  {
    path: '/',
    index: true,
    // 默认重定向到首页
    redirect: '/index',
  },
  {
    path: '/index',
    meta: { title: '首页', showBreadcrumb: true, layoutStyle: ELayoutStyle.Mix },
    component: Index,
  },
  {
    path: '/invoice',
    meta: { title: '发票管理' },
    children: [
      {
        path: '/invoice-query',
        meta: { title: '发票查询', showBreadcrumb: true, layoutStyle: ELayoutStyle.Mix },
        component: InvoiceQuery,
      },
      {
        path: '/invoice-check',
        meta: { title: '发票查验', showBreadcrumb: true, layoutStyle: ELayoutStyle.Mix },
        component: InvoiceCheck,
      },
    ],
  },
  {
    path: '/invoice',
    redirect: '/invoice/invoice-query',
  },
  {
    path: '/order',
    meta: { title: '订单管理', showBreadcrumb: true, layoutStyle: ELayoutStyle.Topbar },
    component: Order,
  },
];
