/*
 * @Author: lw
 * @Date: 2025-03-12 11:35:19
 * @LastEditors: lw
 * @LastEditTime: 2025-03-21 17:33:26
 * @Mailbox: 742787938@qq.com
 * @FilePath: \FeiFanHuiWu\apps\web-naive\src\mixin\index.ts
 * @Descripttion:
 */

// 定义颜色列表及其键类型
const colorsList = {
  submit: '#34BFA3', // 确定
  cancel: '#999999', // 取消
  search: '#34BFA3', // 查询
  reset: '#FF9800', // 重置
  delete: '#EB5454', // 删除
  refuse: '#EB5454', // 拒绝
  apply: '#34BFA3', // 审核 - 通过
  add: '#2A66EB', // 新增
  export: '#2A66EB', // 导出
} as const;

type ColorKey = keyof typeof colorsList;

// 定义表格列表及其键类型
const colorsTable = {
  show: '#2A66EB', // 查看
  contract: '#34BFA3', // 合同
  budget: '#FF9800', // 预算
  buy: '#6E82C8', // 成本
  sale: '#EB5454', // 收入
  end: '#984FE7', // 完结
  success: '#6E82C8', // 成
  set: '#34BFA3', // 设
  apply: '#FF9800', // 审核
  disable: '#EB5454', // 禁
  edit: '#414345', // 改
  delete: '#97999C', // 删除
} as const;

type ColorsTableKey = keyof typeof colorsTable;

// 定义表格列表及其键类型
const colorsTag = {
  success: {
    color: '#34BFA3',
    textColor: '#FFF',
    borderColor: '#34BFA3',
  }, // 成功
  fail: {
    color: '#EB5454',
    textColor: '#FFF',
    borderColor: '#EB5454',
  }, // 失败
  warning: {
    color: '#FF9800',
    textColor: '#FFF',
    borderColor: '#FF9800',
  }, // 警告
} as const;

type ColorsTagKey = keyof typeof colorsTag;

export function useCustomColors() {
  // 表格查询
  const getFormBtnColors = (key: ColorKey) => {
    return colorsList[key];
  };
  // 表格列表
  const getTableBtnColors = (key: ColorsTableKey) => {
    return colorsTable[key];
  };
  // 自定义tag
  const getTagColors = (key: ColorsTagKey) => {
    return colorsTag[key];
  };

  return {
    getFormBtnColors,
    getTableBtnColors,
    getTagColors,
  };
}
