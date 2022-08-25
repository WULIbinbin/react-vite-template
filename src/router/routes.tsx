const Index = () => import("@/views/index/index");
const Order = () => import("@/views/order/index");
const InvoiceQuery = () => import("@/views/invoice/invoice-query/index");
const InvoiceCheck = () => import("@/views/invoice/invoice-check/index");

export const routes = [
  {
    path: "/",
    index: true,
    redirect: "/index",
  },
  {
    path: "/index",
    meta: { title: "首页", showBreadcrumb: true, layoutStyle: "Sidebar" },
    component: Index,
  },
  {
    path: "/invoice",
    redirect: "/invoice-query",
    meta: { title: "发票管理" },
    children: [
      {
        path: "/invoice-query",
        meta: { title: "首页", showBreadcrumb: true, layoutStyle: "Sidebar" },
        component: InvoiceQuery,
      },
      {
        path: "/invoice-check",
        meta: { title: "首页", showBreadcrumb: true, layoutStyle: "Sidebar" },
        component: InvoiceCheck,
      },
    ],
  },
  {
    path: "/order",
    meta: { title: "订单管理", showBreadcrumb: true, layoutStyle: "FullPage" },
    component: Order,
  },
];
