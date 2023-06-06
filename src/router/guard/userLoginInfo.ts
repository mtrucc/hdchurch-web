import type { Router, LocationQueryRaw } from 'vue-router';
import NProgress from 'nprogress'; // progress bar

import { useUserStore } from '@/store';
import { isLogin } from '@/utils/auth';

export default function setupUserLoginInfoGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    NProgress.start();
    const userStore = useUserStore();
    if (isLogin()) {
      next();
      if (userStore.role) {
        next();
      } else {
        try {
          await userStore.info();
          next();
        } catch (error) {
          await userStore.logout();
          next({
            name: 'login',
            query: {
              redirect: to.name,
              ...to.query,
            } as LocationQueryRaw,
          });
        }
      }
    } else {
      if (to.name === 'login') {
        next();
        return;
      }
      // if (to.name === 'home') {
      //   next();
      //   return;
      // }
      // if (to.name === 'home2') {
      //   next();
      //   return;
      // }
      // if (to.name === 'home3') {
      //   next();
      //   return;
      // }
      // if (to.name === 'home4') {
      //   next();
      //   return;
      // }
      // if (to.name === 'home5') {
      //   next();
      //   return;
      // }
      // if (to.name === 'home6') {
      //   next();
      //   return;
      // }
      // 如果包含home 跳过
      // @ts-ignore
      if (to.name?.includes('home')) {
        next();
        return;
      }
      // @ts-ignore
      if (to.name?.includes('info')) {
        next();
        return;
      }
      // @ts-ignore
      if (to.name?.includes('juhui')) {
        next();
        return;
      }
      // @ts-ignore
      if (to.name?.includes('ziyuan')) {
        next();
        return;
      }
      // @ts-ignore
      if (to.name?.includes('onepage')) {
        next();
        return;
      }
      // @ts-ignore
      if (to.name?.includes('leftMenuPage')) {
        next();
        return;
      }
      // @ts-ignore
      if (to.name?.includes('tuanqi')) {
        next();
        return;
      }
      // @ts-ignore
      if (to.name?.includes('juhuidian')) {
        next();
        return;
      }
      next({
        name: 'login',
        query: {
          redirect: to.name,
          ...to.query,
        } as LocationQueryRaw,
      });
    }
  });
}
