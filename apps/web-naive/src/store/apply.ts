/*
 * @Author: lw
 * @Date: 2025-03-19 16:02:04
 * @LastEditors: lw
 * @LastEditTime: 2025-04-08 15:59:05
 * @Mailbox: 742787938@qq.com
 * @FilePath: \FeiFanHuiWu\apps\web-naive\src\store\apply.ts
 * @Descripttion:
 */

import { useUserStore } from '@vben/stores';

import { defineStore } from 'pinia';

import { dateForMat, dateNowForMat } from '#/mixin/day';

export const useApplyStore = defineStore('apply', {
  actions: {
    /**
     * 审批层级处理
     * @param data
     * @returns
     */
    approvalInit(data: any) {
      const temp: any[] = [];
      data.forEach((elm: any) => {
        if (!temp.some((item: any) => item.level === elm.level)) {
          temp.push({
            number: data.filter((item: any) => item.level === elm.level).length,
            level: elm.level,
            levelText: `${elm.level}级审批`,
            children: data.filter((item: any) => item.level === elm.level),
            content: data
              .filter((item: any) => item.level === elm.level)
              .map((item: any) => item.auditUserName)
              .join(','),
          });
        }
      });
      temp.sort((a, b) => a.level - b.level);
      return temp;
    },

    /**
     * 新增审批
     * @param data
     * @returns
     */
    initApplyInitiate(data: any) {
      const userStore = useUserStore();
      const tempList = this.approvalInit(data);
      tempList.unshift({
        number: 1,
        level: 0,
        levelText: '发起人',
        content: userStore.userInfo ? userStore.userInfo.name : '',
        time: dateNowForMat('YYYY-MM-DD HH:mm:ss'),
      });
      return tempList;
    },
    /**
     *  审批层级状态处理
     * @param data
     * @param keyLevel
     * @returns
     */
    initApproversStatus(data: any[], keyLevel: string = 'level') {
      const temp: any[] = [];
      data.forEach((elm) => {
        if (!temp.some((item) => item.level === elm[keyLevel])) {
          temp.push({
            number: data.filter((item: any) => item.level === elm.level).length,
            level: elm[keyLevel],
            levelText: `${elm[keyLevel]}级审批`,
            children: data.filter((item) => item[keyLevel] === elm[keyLevel]),
            content: data
              .filter((item: any) => item[keyLevel] === elm[keyLevel])
              .map((item: any) => item.auditUserName)
              .join(','),
            tidateUpdatedme: elm.time,
          });
        }
      });
      temp.forEach((item: any) => {
        const tempIndex = item.children.findIndex((v: any) => {
          return v.result === 'y' || v.result === 'n';
        });
        if (tempIndex === -1) {
          item.status = 'wait';
        } else {
          item.tidateUpdatedme = dateForMat(
            item.children[tempIndex].auditTime,
            'YYYY-MM-DD HH:mm:ss',
          );
          item.resultObj = item.children[tempIndex];
          item.status =
            item.children[tempIndex].result === 'y' ? 'finish' : 'error';
        }
      });
      return temp;
    },
    /**
     * 审批状态处理
     * @param data
     * @returns
     */
    applyStatus(data: any, createObj: { creater: string; createTime: number }) {
      const tempList = this.initApproversStatus(data);
      const { current, status } = this.appleStepIndex(tempList);
      tempList.unshift({
        number: 1,
        level: 0,
        levelText: '发起人',
        content: createObj.creater || '',
        time: dateForMat(
          createObj.createTime || Date.now(),
          'YYYY-MM-DD HH:mm:ss',
        ),
      });
      return {
        list: tempList,
        current,
        status,
      };
    },

    appleStepIndex(data: any) {
      let current: number = 1;
      const status: string = '';
      for (const key in data) {
        if (
          data[key].children &&
          data[key].children.some(
            (elm: any) => elm.result === 'y' || elm.result === 'n',
          )
        ) {
          current = data[key].level + 1;
          // if (data[key].resultObj.result === 'y') status = 'finish';
          // if (data[key].resultObj.result === 'n') status = 'error';
          // if (data[key].resultObj.result === '0') status = 'process';
          continue;
        } else {
          current = data[key].level + 1;
          // status = 'process';
          break;
        }
      }
      return {
        current,
        status,
      };
    },
  },
  persist: true,
});
