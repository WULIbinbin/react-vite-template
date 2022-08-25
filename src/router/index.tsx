import { Navigate, useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "@/layout/index";



const Index = lazy(() => import("@/views/index/index"));
const Order = lazy(() => import("@/views/order/index"));
const InvoiceQuery = lazy(() => import("@/views/invoice/invoice-query/index"));
const InvoiceCheck = lazy(() => import("@/views/invoice/invoice-check/index"));

export default function RouteMain() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/index",
          element: (
            <Suspense>
              <Index />
            </Suspense>
          ),
        },
        {
          path: "/invoice-check",
          element: (
            <Suspense>
              <InvoiceCheck />
            </Suspense>
          ),
        },
        {
          path: "/invoice-query",
          element: (
            <Suspense>
              <InvoiceQuery />
            </Suspense>
          ),
        },
        {
          path: "/order",
          element: (
            <Suspense>
              <Order />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/",
      index: true,
      element: <Navigate to="/index" />,
    },
    {
      path: "*",
      element: <Navigate to="/index" />,
    },
  ];
  return useRoutes(routes);
}
