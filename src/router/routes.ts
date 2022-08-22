import { lazy } from "react";

export default [
  {
    path: "/",
    component: lazy(() => import("@/layout/index")),
    children: [
      {
        path: "index",
        component: lazy(() => import("@/views/index/index")),
        children: [],
      },
      {
        path: "tree",
        component: lazy(() => import("@/views/binaryTree/index")),
      },
    ],
  },
];
