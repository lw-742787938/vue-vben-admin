/*
 * @Author: lw
 * @Date: 2025-04-18 11:29:11
 * @LastEditors: lw
 * @LastEditTime: 2025-05-19 17:37:44
 * @Mailbox: 742787938@qq.com
 * @FilePath: \Cashier-Terminal-SAAS\apps\web-naive\src\store\auth.ts
 * @Descripttion:
 */
/*
 * @Author: lw
 * @Date: 2025-03-11 11:25:52
 * @LastEditors: lw
 * @LastEditTime: 2025-04-08 16:58:04
 * @Mailbox: 742787938@qq.com
 * @FilePath: \FeiFanHuiWu\apps\web-naive\src\store\auth.ts
 * @Descripttion:
 */
import type { Recordable, UserInfo } from '@vben/types';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { DEFAULT_HOME_PATH, LOGIN_PATH } from '@vben/constants';
import { resetAllStores, useAccessStore, useUserStore } from '@vben/stores';

import { defineStore } from 'pinia';

import { notification } from '#/adapter/naive';
import { getUserInfoApi, loginApi, logoutApi } from '#/api';
import { $t } from '#/locales';

export const useAuthStore = defineStore('auth', () => {
  const accessStore = useAccessStore();
  const userStore = useUserStore();
  const router = useRouter();
  const loginLoading = ref(false);

  /**
   * 异步处理登录操作
   * Asynchronously handle the login process
   * @param params 登录表单数据
   */
  async function authLogin(
    params: Recordable<any>,
    onSuccess?: () => Promise<void> | void,
  ) {
    // 异步处理用户登录操作并获取 accessToken
    let userInfo = null;
    try {
      loginLoading.value = true;

      // const { token: accessToken, user } = await loginApi(params);
      const userLoginData = await loginApi(params);
      // 如果成功获取到 accessToken
      if (userLoginData.token) {
        // 将 accessToken 存储到 accessStore 中
        accessStore.setAccessToken(userLoginData.token);

        // 获取用户信息并存储到 accessStore 中
        // const [fetchUserInfoResult, accessCodes] = await Promise.all([
        //   fetchUserInfo(),
        //   getAccessCodesApi(),
        // ]);

        // userInfo = fetchUserInfoResult;
        userInfo = userLoginData.user;

        userStore.setUserInfo(userInfo);
        userStore.setCompanyName(userLoginData.companyName);

        accessStore.setBaseMenuList(userLoginData.permissionList);
        const routerList: any[] = initAllMenu(userLoginData.permissionList);
        routerList.unshift({
          name: 'workspace',
          path: '/workspace',
          component: 'dashboard/home/index',
          meta: {
            affixTab: true,
            icon: 'lucide:house',
            title: 'page.dashboard.workspace',
            order: -1,
          },
        });
        accessStore.setMenuList(routerList);
        accessStore.setAccessCodes([]);

        if (accessStore.loginExpired) {
          accessStore.setLoginExpired(false);
        } else {
          onSuccess
            ? await onSuccess?.()
            : await router.push(userInfo.homePath || DEFAULT_HOME_PATH);
        }

        if (userInfo?.name) {
          notification.success({
            content: $t('authentication.loginSuccess'),
            description: `${$t('authentication.loginSuccessDesc')}:${userInfo?.name}`,
            duration: 3000,
          });
        }
      }
    } finally {
      loginLoading.value = false;
    }

    return {
      userInfo,
    };
  }

  async function logout(redirect: boolean = true) {
    try {
      await logoutApi();
    } catch {
      // 不做任何处理
    }
    resetAllStores();
    accessStore.setLoginExpired(false);

    // 回登录页带上当前路由地址
    await router.replace({
      path: LOGIN_PATH,
      query: redirect
        ? {
            redirect: encodeURIComponent(router.currentRoute.value.fullPath),
          }
        : {},
    });
  }

  async function fetchUserInfo() {
    let userInfo: null | UserInfo = null;
    userInfo = await getUserInfoApi();
    userStore.setUserInfo(userInfo);
    return userInfo;
  }

  function $reset() {
    loginLoading.value = false;
  }

  // 菜单
  function initAllMenu(list: any[]) {
    if (!(list && list.length > 0)) {
      return [];
    }
    const tempList: any[] = list
      .filter((elm: any) => elm.parentId === 0)
      .map((elm: any) => {
        const childrenList = list
          .filter((val) => val.parentId === elm.id)
          .map((val) => {
            return {
              meta: {
                icon: val.icon,
                keepAlive: val.creator === 'true',
                hideInMenu: val.permission === 'true',
                order: val.ordNum,
                title: val.functionEname,
                functionName: val.functionName,
              },
              id: val.id,
              name: val.functionLevel,
              path: val.description,
              component: val.value,
            };
          });
        return {
          meta: {
            icon: elm.icon,
            keepAlive: elm.creator === 'true',
            order: elm.ordNum,
            title: elm.functionEname,
            functionName: elm.functionName,
          },
          id: elm.id,
          name: elm.functionLevel,
          path: elm.description,
          // component: 'BasicLayout',
          children: childrenList,
        };
      });
    return tempList;
  }
  // 菜单按钮新增权限
  function btnCodeAccess(code: string) {
    const baseMenuList = accessStore.baseMenuList;
    return baseMenuList.some((elm: any) => {
      return elm.functionLevel === code;
    });
  }

  return {
    $reset,
    authLogin,
    fetchUserInfo,
    loginLoading,
    btnCodeAccess,
    logout,
    initAllMenu,
  };
});
