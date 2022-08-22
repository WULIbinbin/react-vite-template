import Layout from "@/layout/index";
import Index from "@/views/index/index";
import Tree from "@/views/binaryTree/index";
import { Navigate, useRoutes } from "react-router-dom";

export default function RouteMain() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/index",
          element: <Index />,
        },
        {
          path: "/tree",
          element: <Tree />,
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
