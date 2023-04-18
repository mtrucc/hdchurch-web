import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const MARKDOWN: AppRouteRecordRaw = {
  path: '/markdown',
  name: 'markdown',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'MarkDown',
    requiresAuth: true,
    icon: 'icon-exclamation-circle',
    order: 0,
  },
  children: [
    {
      path: 'edit',
      name: 'edit',
      component: () => import('@/views/markdown/edit/index.vue'),
      meta: {
        locale: '编辑',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
    {
      path: 'view',
      name: 'view',
      component: () => import('@/views/markdown/view/index.vue'),
      meta: {
        locale: '预览',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default MARKDOWN;
