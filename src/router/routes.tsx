import { ELayoutStyle } from '@/types/layout.d';
import { IRouter } from '@/types/router.d';
import { lazy } from 'react';

const Index = lazy(() => import(/* webpackChunkName: "main" */ '@/views/index/index'));
const Login = lazy(() => import(/* webpackChunkName: "main" */ '@/views/account/login/index'));
const Error = lazy(() => import(/* webpackChunkName: "main" */ '@/views/error/index'));
const Order = lazy(() => import(/* webpackChunkName: "order" */ '@/views/order/index'));
const InvoiceQuery = lazy(() => import(/* webpackChunkName: "invoice" */ '@/views/invoice/invoice-query/index'));
const InvoiceCheck = lazy(() => import(/* webpackChunkName: "invoice" */ '@/views/invoice/invoice-check/index'));
const InvoiceDetail = lazy(() => import(/* webpackChunkName: "invoice" */ '@/views/invoice/invoice-detail/index'));

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
    redirect: '/account/login',
  },
  {
    path: '/index',
    meta: { title: '首页', showBreadcrumb: true, layoutStyle: ELayoutStyle.Mix },
    component: Index,
  },
  {
    path: '/account',
    redirect: '/account/login',
  },
  {
    path: '/account',
    children: [
      {
        path: '/login',
        meta: { title: '用户登录', layoutStyle: ELayoutStyle.FullPage },
        component: Login,
      },
    ],
  },
  {
    path: '/invoice',
    meta: { title: '发票管理', showBreadcrumb: true },
    children: [
      {
        path: '/invoice-query',
        meta: { title: '发票查询', showBreadcrumb: true, layoutStyle: ELayoutStyle.Mix },
        component: InvoiceQuery,
      },
      {
        path: '/invoice-detail',
        meta: { title: '发票详情', showBreadcrumb: true, layoutStyle: ELayoutStyle.FullPage },
        component: InvoiceDetail,
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
