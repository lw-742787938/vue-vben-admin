import { acceptHMRUpdate, defineStore } from 'pinia';

interface BasicUserInfo {
  [key: string]: any;
  /**
   * 用户角色
   */
  // roles?: string[];
  /**
   * 用户id
   */
  id?: string;
  /**
   * 用户名
   */
  loginName?: string;
  /**
   * 头像
   */
  // avatar: string;
  /**
   * 用户昵称
   */
  name: string;
}

interface AccessState {
  /**
   * 公司名
   */
  companyName: string;
  /**
   * 用户信息
   */
  userInfo: BasicUserInfo | null;
  /**
   * 用户角色
   */
  userRoles: string[];
}

/**
 * @zh_CN 用户信息相关
 */
export const useUserStore = defineStore('core-user', {
  actions: {
    setCompanyName(value: string) {
      this.companyName = value;
    },
    setUserInfo(userInfo: BasicUserInfo | null) {
      // 设置用户信息
      this.userInfo = userInfo;
      // 设置角色信息
      const roles = userInfo?.roles ?? [];
      this.setUserRoles(roles);
    },
    setUserRoles(roles: string[]) {
      this.userRoles = roles;
    },
  },
  persist: true,
  state: (): AccessState => ({
    companyName: '',
    userInfo: null,
    userRoles: [],
  }),
});

// 解决热更新问题
const hot = import.meta.hot;
if (hot) {
  hot.accept(acceptHMRUpdate(useUserStore, hot));
}
