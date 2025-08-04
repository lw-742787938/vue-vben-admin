/*
 * @Author: lw
 * @Date: 2025-05-29 17:21:20
 * @LastEditors: lw
 * @LastEditTime: 2025-06-13 15:08:24
 * @Mailbox: lw@lw.com
 * @FilePath: \Cashier-Terminal-SAAS\apps\sass\src\store\login.js
 * @Descripttion:
 */
import { defineStore } from 'pinia';
import {
  companyStaffinfo14,
  companyinfo,
  systemmarketVersiongetById,
  marketPaymentType,
  getCurrentStaff,
} from '#/api';
export const useLoginStore = defineStore('login', {
  state: () => {
    return {
      loading: 0,
      loginData: {},
      userInfo: {}, // 用户信息
      companyData: {}, // 商家信息
      companySetData: {}, // 商家配置信息
    };
  },
  getters: {},
  actions: {
    // 获取用户信息
    getcompanyStaffinfo14() {
      return new Promise((resolve, reject) => {
        companyStaffinfo14().then((res) => {
          this.userInfo = res;
          resolve(res);
        });
      });
    },
    // 获取商家信息
    getcompanyinfo() {
      return new Promise((resolve, reject) => {
        companyinfo().then((res) => {
          this.companyData = res;
          resolve(res);
        });
      });
    },
    // 获取商家配置信息
    getmarketVersiongetById() {
      return new Promise((resolve, reject) => {
        systemmarketVersiongetById().then((res) => {
          this.companySetData = res;
          resolve(res);
        });
      });
    },
  },
  persist: true,
});
