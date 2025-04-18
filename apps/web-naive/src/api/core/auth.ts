/*
 * @Author: lw
 * @Date: 2025-03-11 11:25:52
 * @LastEditors: lw
 * @LastEditTime: 2025-03-31 15:10:25
 * @Mailbox: 742787938@qq.com
 * @FilePath: \FeiFanHuiWu\apps\web-naive\src\api\core\auth.ts
 * @Descripttion:
 */
import { baseRequestClient, requestClient } from '#/api/request';

interface BasicUserInfo {
  [key: string]: any;
  /**
   * 用户角色
   */
  // roles?: string[];
  /**
   * 用户id
   */
  id: string;
  /**
   * 用户名
   */
  loginName: string;
  /**
   * 头像
   */
  // avatar: string;
  /**
   * 用户昵称
   */
  name: string;
}
export namespace AuthApi {
  /** 登录接口参数 */
  export interface LoginParams {
    password?: string;
    loginName?: string;
  }

  /** 登录接口返回值 */
  export interface LoginResult {
    accessToken: string;
    token: string;
    user: BasicUserInfo;
    [key: string]: any;
  }

  export interface RefreshTokenResult {
    data: string;
    status: number;
  }
}

/**
 * 登录
 */
export async function loginApi(data: AuthApi.LoginParams) {
  // return requestClient.post<AuthApi.LoginResult>('/auth/login', data);
  return requestClient.post<AuthApi.LoginResult>('/login', data);
}

/**
 * 刷新accessToken
 */
export async function refreshTokenApi() {
  return baseRequestClient.post<AuthApi.RefreshTokenResult>('/auth/refresh', {
    withCredentials: true,
  });
}

/**
 * 退出登录
 */
export async function logoutApi() {
  return baseRequestClient.post('/auth/logout', {
    withCredentials: true,
  });
}

/**
 * 获取用户权限码
 */
export async function getAccessCodesApi() {
  return requestClient.get<string[]>('/auth/codes');
}
