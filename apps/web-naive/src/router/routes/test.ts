/*
 * @Author: lw
 * @Date: 2025-03-28 15:51:43
 * @LastEditors: lw
 * @LastEditTime: 2025-04-08 09:20:28
 * @Mailbox: 742787938@qq.com
 * @FilePath: \FeiFanHuiWu\apps\web-naive\src\router\routes\test.ts
 * @Descripttion:
 */
[
  {
    meta: {
      icon: 'lucide:file-badge',
      keepAlive: true,
      order: 995,
      title: 'business.index',
    },
    name: 'business',
    path: '/business',
    component: 'BasicLayout',
    children: [
      {
        meta: {
          title: 'business.todo.index',
        },
        name: 'todo-list',
        path: 'todo-list',
        component: '/business/todo-list/index',
      },
      {
        meta: {
          title: 'business.done.index',
        },
        name: 'done-list',
        path: 'done-list',
        component: '/business/done-list/index',
      },
      {
        meta: {
          title: 'business.approval.index',
        },
        name: 'approval-list',
        path: 'approval-list',
        component: '/business/approval-list/index',
      },
      {
        meta: {
          title: 'business.approval.set',
          hideInMenu: true,
        },
        name: 'approval-set',
        path: 'approval-set',
        component: '/business/approval-list/set',
      },
    ],
  },
  {
    meta: {
      icon: 'lucide:badge-japanese-yen',
      keepAlive: true,
      order: 997,
      title: 'finance.index',
    },
    name: 'finance',
    path: '/finance',
    component: 'BasicLayout',
    children: [
      // 项目账务
      {
        meta: {
          title: 'finance.project.index',
        },
        name: 'finance-project',
        path: 'finance-project',
        component: '/finance/project/index',
      },
      {
        meta: {
          title: 'finance.project.info',
          hideInMenu: true,
        },
        name: 'finance-project-info',
        path: 'finance-project-info',
        component: '/finance/project/info/index',
      },
      // 收入管理
      {
        meta: {
          title: 'finance.sale.index',
        },
        name: 'finance-sale',
        path: 'finance-sale',
        component: '/finance/project-sale/index',
      },
      // 付款管理
      {
        meta: {
          title: 'finance.payment.index',
        },
        name: 'finance-payment',
        path: 'finance-payment',
        component: '/finance/payment/list/index',
      },
      {
        meta: {
          title: 'finance.payment.add',
          hideInMenu: true,
        },
        name: 'finance-payment-add',
        path: 'finance-payment-add',
        component: '/finance/payment/add/index',
      },
      {
        meta: {
          title: 'finance.payment.edit',
          hideInMenu: true,
        },
        name: 'finance-payment-edit',
        path: 'finance-payment-edit',
        component: '/finance/payment/edit/index',
      },
      {
        meta: {
          title: 'finance.payment.info',
          hideInMenu: true,
        },
        name: 'finance-payment-info',
        path: 'finance-payment-info',
        component: '/finance/payment/info/index',
      },
      {
        meta: {
          title: 'finance.payment.apply',
          hideInMenu: true,
        },
        name: 'finance-payment-apply',
        path: 'finance-payment-apply',
        component: '/finance/payment/info/index',
      },
      // 发票管理
      {
        meta: {
          title: 'finance.invoice.index',
        },
        name: 'finance-invoice',
        path: 'finance-invoice',
        component: '/finance/invoice/list/index',
      },
      {
        meta: {
          title: 'finance.invoice.add',
          hideInMenu: true,
        },
        name: 'finance-invoice-add',
        path: 'finance-invoice-add',
        component: '/finance/invoice/add/index',
      },
      {
        meta: {
          title: 'finance.invoice.edit',
          hideInMenu: true,
        },
        name: 'finance-invoice-edit',
        path: 'finance-invoice-edit',
        component: '/finance/invoice/edit/index',
      },
      {
        meta: {
          title: 'finance.invoice.info',
          hideInMenu: true,
        },
        name: 'finance-invoice-info',
        path: 'finance-invoice-info',
        component: '/finance/invoice/info/index',
      },
    ],
  },
  {
    meta: {
      icon: 'lucide:users-round',
      keepAlive: true,
      order: 999,
      title: 'merchant.index',
    },
    name: 'merchant',
    path: '/merchant',
    component: 'BasicLayout',
    children: [
      {
        meta: {
          title: 'merchant.customer.index',
        },
        name: 'customer',
        path: 'customer',
        component: '/merchant/customer/index',
      },
      {
        meta: {
          title: 'merchant.customer.add',
          hideInMenu: true,
        },
        name: 'customer-add',
        path: 'customer-add',
        component: '/merchant/customer/add',
      },
      {
        meta: {
          title: 'merchant.customer.edit',
          hideInMenu: true,
        },
        name: 'customer-edit',
        path: 'customer-edit',
        component: '/merchant/customer/edit',
      },
      {
        meta: {
          title: 'merchant.supplier.index',
        },
        name: 'supplier',
        path: 'supplier',
        component: '/merchant/supplier/index',
      },
      {
        meta: {
          title: 'merchant.supplier.add',
          hideInMenu: true,
        },
        name: 'supplier-add',
        path: 'supplier-add',
        component: '/merchant/supplier/add',
      },
      {
        meta: {
          title: 'merchant.supplier.edit',
          hideInMenu: true,
        },
        name: 'supplier-edit',
        path: 'supplier-edit',
        component: '/merchant/supplier/edit',
      },
    ],
  },
  {
    meta: {
      icon: 'lucide:file-text',
      keepAlive: true,
      order: 996,
      title: 'project.index',
    },
    name: 'project',
    path: '/project',
    component: 'BasicLayout',
    children: [
      // 立项管理
      {
        meta: {
          title: 'project.approval.index',
        },
        name: 'project-approval-list',
        path: 'project-approval-list',
        component: '/project/project-approval/list/index',
      },
      {
        meta: {
          title: 'project.approval.add',
          hideInMenu: true,
        },
        name: 'project-approval-add',
        path: 'project-approval-add',
        component: '/project/project-approval/add/index',
      },
      {
        meta: {
          title: 'project.approval.edit',
          hideInMenu: true,
        },
        name: 'project-approval-edit',
        path: 'project-approval-edit',
        component: '/project/project-approval/edit/index',
      },
      {
        meta: {
          title: 'project.approval.info',
          hideInMenu: true,
        },
        name: 'project-approval-info',
        path: 'project-approval-info',
        component: '/project/project-approval/info/index',
      },
      {
        meta: {
          title: 'project.approval.apply',
          hideInMenu: true,
        },
        name: 'project-approval-apply',
        path: 'project-approval-apply',
        component: '/project/project-approval/info/index',
      },
      // 项目列表
      {
        meta: {
          title: 'project.list.index',
        },
        name: 'project-list-list',
        path: 'project-list-list',
        component: '/project/project-list/list/index',
      },
      {
        meta: {
          title: 'project.list.info',
          hideInMenu: true,
        },
        name: 'project-list-info',
        path: 'project-list-info',
        component: '/project/project-list/info/index',
      },
      // 项目预算
      {
        meta: {
          title: 'project.budget.list',
          hideInMenu: true,
        },
        name: 'project-budget-list',
        path: 'project-budget-list',
        component: '/project/project-budget/index',
      },
      // 项目合同
      {
        meta: {
          title: 'project.contract.list',
          hideInMenu: true,
        },
        name: 'project-contract-list',
        path: 'project-contract-list',
        component: '/project/project-contract/index',
      },
      // 项目收入
      {
        meta: {
          title: 'project.sale.list',
          hideInMenu: true,
        },
        name: 'project-sale-list',
        path: 'project-sale-list',
        component: '/project/project-sale/index',
      },
      // 项目成本
      {
        meta: {
          title: 'project.buy.list',
          hideInMenu: true,
        },
        name: 'project-buy-list',
        path: 'project-buy-list',
        component: '/project/project-buy/index',
      },
      // 项目预警
      {
        meta: {
          title: 'project.warning.index',
        },
        name: 'project-warning-index',
        path: 'project-warning-index',
        component: '/project/project-warning/index',
      },
    ],
  },
  {
    meta: {
      icon: 'lucide:layout-grid',
      keepAlive: true,
      order: 1000,
      title: 'system.index',
    },
    name: 'system',
    path: '/system',
    component: 'BasicLayout',
    children: [
      {
        meta: {
          title: 'system.department.index',
        },
        name: 'department-manage',
        path: 'department-manage',
        component: '/system/department-manage/index',
      },
      {
        meta: {
          title: 'system.user.index',
        },
        name: 'user-manage',
        path: 'user-manage',
        component: '/system/user-manage/index',
      },
      {
        meta: {
          title: 'system.roles.index',
        },
        name: 'roles-manage',
        path: 'roles-manage',
        component: '/system/roles-manage/index',
      },
      {
        meta: {
          title: 'system.dict.index',
        },
        name: 'dict',
        path: 'dict',
        component: '/system/dict/index',
      },
    ],
  },
];
