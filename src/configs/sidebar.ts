import { ISidebar } from '@/types/router.d';

const sidebar: ISidebar[] = [
  {
    name: '仪表盘',
    to: '/index',
  },
  {
    name: '发票管理',
    to: '/invoice',
    children: [
      {
        name: '发票查询',
        to: '/invoice/invoice-query',
      },
      {
        name: '发票查验',
        to: '/invoice/invoice-check',
      },
    ],
  },
  {
    name: '表单管理',
    to: '/form',
    children: [
      {
        name: '表单设计',
        to: '/form/form-sandbox',
      },
    ],
  },
];

export default sidebar;
