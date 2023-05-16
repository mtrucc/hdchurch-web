import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';

import { appRoutes } from './routes';
import { REDIRECT_MAIN, NOT_FOUND_ROUTE, HOME_LAYOUT } from './routes/base';
import createRouteGuard from './guard';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HOME_LAYOUT,
      meta: {
        requiresAuth: false,
      },
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/home/index.vue'),
          meta: {
            locale: '首页',
            requiresAuth: false,
            roles: ['*'],
          },
        },
        {
          path: '/2',
          name: 'home2',
          component: () => import('@/views/home/index2.vue'),
          meta: {
            locale: '首页2',
            requiresAuth: false,
            roles: ['*'],
          },
        },
        {
          path: '/3',
          name: 'home3',
          component: () => import('@/views/home/index3.vue'),
          meta: {
            locale: '首页3',
            requiresAuth: false,
            roles: ['*'],
          },
        },
        {
          path: '/4',
          name: 'home4',
          component: () => import('@/views/home/index4.vue'),
          meta: {
            locale: '首页4',
            requiresAuth: false,
            roles: ['*'],
          },
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/:markdown',
      name: 'markdown',
      component: HOME_LAYOUT,
      meta: {
        requiresAuth: false,
      },
      children: [
        {
          path: 'markdownView',
          name: 'markdownView',
          component: () => import('@/views/markdown/view/index.vue'),
          meta: {
            locale: 'MarkDown',
            requiresAuth: false,
            roles: ['*'],
          },
        },
      ],
    },
    ...appRoutes,
    REDIRECT_MAIN,
    NOT_FOUND_ROUTE,
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

createRouteGuard(router);

export default router;
