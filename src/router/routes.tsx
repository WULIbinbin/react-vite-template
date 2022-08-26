import { ELayoutStyle } from '@/types/layout.d';
import { IRouter } from '@/types/router.d';
import { lazy } from 'react';

const Index = lazy(() => import('@/views/index/index'));
const Order = lazy(() => import('@/views/order/index'));
const InvoiceQuery = lazy(() => import('@/views/invoice/invoice-query/index'));
const InvoiceCheck = lazy(() => import('@/views/invoice/invoice-check/index'));

export const routes: IRouter[] = [
  {
    path: '/',
    index: true,
    redirect: '/index',
  },
  {
    path: '/index',
    meta: { title: '首页', showBreadcrumb: true, layoutStyle: ELayoutStyle.Mix },
    component: Index,
  },
  {
    path: '/invoice',
    redirect: '/invoice-query',
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
    path: '/order',
    meta: { title: '订单管理', showBreadcrumb: true, layoutStyle: ELayoutStyle.Topbar },
    component: Order,
  },
];
