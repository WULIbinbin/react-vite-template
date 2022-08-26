export default [
  {
    name: "仪表盘",
    to: "/index",
  },
  {
    name: "发票管理",
    to: "/invoice",
    children: [
      {
        name: "发票查询",
        to: "/invoice/invoice-query",
      },
      {
        name: "发票查验",
        to: "/invoice/invoice-check",
      },
    ],
  },
  {
    name: "订单管理",
    to: "/order",
  },
];
