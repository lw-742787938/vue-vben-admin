/*
 * @Author: lw
 * @Date: 2025-05-29 15:51:21
 * @LastEditors: lw
 * @LastEditTime: 2025-07-10 11:24:24
 * @Mailbox: lw@lw.com
 * @FilePath: \Cashier-Terminal-SAAS\apps\web-naive\src\api\main\login.js
 * @Descripttion:
 */

import { requestClient, baseRequestClient } from '#/api/request';

/**
 * 登录
 */
export function getloginToken(data) {
  return requestClient.post('/system/getloginToken', data);
}

/**
 * 退出
 */
export function loginOut(data) {
  return requestClient.get('/system/loginOut', data);
}

/**
 * 获取用户信息
 */
export function companyStaffinfo14(data) {
  return requestClient.post('/system/companyStaff/info14', data);
}
/**
 * 获取商家信息
 */
export function companyinfo(data) {
  return requestClient.post('/system/company/info', data);
}
/**
 * 获取商家配置信息
 */
export function systemmarketVersiongetById(data) {
  return requestClient.post('/system/marketVersion/getById', data);
}
/**
 * 获取支付配置
 */
export function marketPaymentType(data) {
  return requestClient.post('/system/marketPaymentType/page', data);
}
/**
 * 授权
 */
export function authorizationLogin(data) {
  return requestClient.post('/cashier/authorizationLogin', data);
}
/**
 * 会员授权
 */
export function membergetMemberInfoUrl(data) {
  return requestClient.post('/member/getMemberInfoUrl', data);
}

/**
 * 获取所有支付方式
 */
export function cashsendpayment_type_query_all(data, params = '') {
  return requestClient.post('/cashsend/payment_type_query_all' + params, data);
}
/**
 * 根据ID获取支付方式
 */
export function cashsendpayment_type_query_by_pay_id(data, params) {
  return requestClient.post(
    '/cashsend/payment_type_query_by_pay_id' + params,
    data,
  );
}
