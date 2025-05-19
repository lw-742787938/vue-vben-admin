/*
 * @Author: lw
 * @Date: 2025-04-18 11:29:11
 * @LastEditors: lw
 * @LastEditTime: 2025-05-19 17:21:31
 * @Mailbox: 742787938@qq.com
 * @FilePath: \Cashier-Terminal-SAAS\apps\web-naive\src\mixin\day.js
 * @Descripttion:
 */
import dayjs from 'dayjs';

export const dateNowForMat = (format = 'YYYY-MM-DD') => {
  return dayjs().format(format);
};
export const dateForMat = (date, format = 'YYYY-MM-DD') => {
  if (!date) date = dayjs();
  return dayjs(date).format(format);
};
