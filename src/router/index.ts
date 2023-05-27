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
        {
          path: '/5',
          name: 'home5',
          component: () => import('@/views/home/index5.vue'),
          meta: {
            locale: '首页5',
            requiresAuth: false,
            roles: ['*'],
          },
        },
        {
          path: '/6',
          name: 'home6',
          component: () => import('@/views/home/index6.vue'),
          meta: {
            locale: '首页6',
            requiresAuth: false,
            roles: ['*'],
          },
        },
        {
          path: '/7',
          name: 'home7',
          component: () => import('@/views/home/index7.vue'),
          meta: {
            locale: '首页7',
            requiresAuth: false,
            roles: ['*'],
          },
        },
        {
          path: '/8',
          name: 'home8',
          component: () => import('@/views/home/index8.vue'),
          meta: {
            locale: '首页8',
            requiresAuth: false,
            roles: ['*'],
          },
        },
        {
          path: '/9',
          name: 'home9',
          component: () => import('@/views/home/index9.vue'),
          meta: {
            locale: '首页9',
            requiresAuth: false,
            roles: ['*'],
          },
        },
        {
          path: '/10',
          name: 'home10',
          component: () => import('@/views/home/index10.vue'),
          meta: {
            locale: '首页10',
            requiresAuth: false,
            roles: ['*'],
          },
        },
        // {
        //   path: '/11',
        //   name: 'home11',
        //   component: () => import('@/views/home/index11.vue'),
        //   meta: {
        //     locale: '首页11',
        //     requiresAuth: false,
        //     roles: ['*'],
        //   },
        // },
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
