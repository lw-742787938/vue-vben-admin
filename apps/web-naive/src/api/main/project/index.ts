/*
 * @Author: lw
 * @Date: 2025-03-19 10:28:57
 * @LastEditors: lw
 * @LastEditTime: 2025-04-07 17:25:12
 * @Mailbox: 742787938@qq.com
 * @FilePath: \FeiFanHuiWu\apps\web-naive\src\api\main\project\index.ts
 * @Descripttion:
 */
import type { exportApi } from '../common';
import type {
  projectAccountApi,
  projectApprovalApi,
  projectBudgetApi,
  projectBuyApi,
  projectContractApi,
  projectEndApi,
  projectListApi,
  projectOtherApi,
  projectSaleApi,
  projectWarningApi,
} from './types';

import { requestClient } from '#/api/request';

// ------------------------------------ 项目立项 start ------------------------------------
/**
 * 项目立项列表
 */
export async function projectPageApplyListApi(
  data: projectApprovalApi.listParams,
) {
  return requestClient.post<projectApprovalApi.listResult>(
    '/project/pageApplyList',
    data,
  );
}

/**
 * 项目立项申请
 */
export async function projectApplyApi(data: projectApprovalApi.applyParams) {
  return requestClient.uploadMultiple<projectApprovalApi.applyResult>(
    '/project/apply',
    data,
  );
}

/**
 * 项目立项修改：（已经进入审核流程不能修改）
 */
export async function projectApplyEditApi(
  data: projectApprovalApi.applyEditParams,
) {
  return requestClient.uploadMultiple<projectApprovalApi.applyEditResult>(
    '/project/applyEdit',
    data,
  );
}

/**
 * 项目立项删除：（已经拒绝的才能删除）
 */
export async function projectApplyDeleteApi(
  data: projectApprovalApi.delParams,
) {
  return requestClient.post<projectApprovalApi.delResult>(
    '/project/applyDelete',
    data,
  );
}
/**
 * 导出
 */
export async function projectApplyExport(data: projectApprovalApi.listParams) {
  return requestClient.post<exportApi.exportResult>(
    '/project/ApplyListExcel',
    data,
  );
}
// ------------------------------------ 项目立项 end ------------------------------------

// ------------------------------------ 项目列表 start ------------------------------------
/**
 * 项目详情
 */
export async function projectApplyDetailApi(data: projectListApi.detailParams) {
  return requestClient.post<projectListApi.detailResult>(
    '/project/applyDetail',
    data,
  );
}

/**
 * 项目列表
 */
export async function projectPagelist(data: projectListApi.listParams) {
  return requestClient.post<projectListApi.listResult>(
    '/project/pageList',
    data,
  );
}

/**
 * 导出
 */
export async function projectPageExport(data: projectListApi.listParams) {
  return requestClient.post<exportApi.exportResult>(
    '/project/projectListExcel',
    data,
  );
}
// ------------------------------------ 项目列表 end ------------------------------------

// ------------------------------------ 项目预算 start ------------------------------------
/**
 * 项目预算列表
 */
export async function projectBudgetPageListApi(
  data: projectBudgetApi.listParams,
) {
  return requestClient.post<projectBudgetApi.listResult>(
    '/project/budgetPageList',
    data,
  );
}

/**
 * 项目预算详情
 */
export async function projectBudgetDetailApi(
  data: projectBudgetApi.detailParams,
) {
  return requestClient.post<projectBudgetApi.detailResult>(
    '/project/budgetDetail',
    data,
  );
}

/**
 * 项目预算新增
 */
export async function projectSaveBudgetApi(data: projectBudgetApi.saveParams) {
  return requestClient.uploadMultiple<projectBudgetApi.saveResult>(
    '/project/saveBudget',
    data,
  );
}

/**
 * 项目预算编辑
 */
export async function projectEditBudgetApi(data: projectBudgetApi.editParams) {
  return requestClient.uploadMultiple<projectBudgetApi.editResult>(
    '/project/editBudget',
    data,
  );
}

/**
 * 项目预算删除
 */
export async function projectDeleteBudgetApi(data: projectBudgetApi.delParams) {
  return requestClient.post<projectBudgetApi.delResult>(
    '/project/deleteBudget',
    data,
  );
}

/**
 * 导出
 */
export async function projectBudgetExport(data: projectBudgetApi.listParams) {
  return requestClient.post<exportApi.exportResult>(
    '/project/budgetPageListExcel',
    data,
  );
}
// ------------------------------------ 项目预算 end ------------------------------------

// ------------------------------------ 项目收入 start ------------------------------------
/**
 * 项目收入列表
 */
export async function projectSalePageListApi(data: projectSaleApi.listParams) {
  return requestClient.post<projectSaleApi.listResult>(
    '/project/salePageList',
    data,
  );
}

/**
 * 项目收入详情
 */
export async function projectSaleDetailApi(data: projectSaleApi.detailParams) {
  return requestClient.post<projectSaleApi.detailResult>(
    '/project/saleDetail',
    data,
  );
}

/**
 * 项目收入新增
 */
export async function projectSaveSaleApi(data: projectSaleApi.saveParams) {
  return requestClient.uploadMultiple<projectSaleApi.saveResult>(
    '/project/saveSale',
    data,
  );
}

/**
 * 项目收入编辑
 */
export async function projectEditSaleApi(data: projectSaleApi.editParams) {
  return requestClient.uploadMultiple<projectSaleApi.editResult>(
    '/project/editSale',
    data,
  );
}

/**
 * 项目收入删除
 */
export async function projectDeleteSaleApi(data: projectSaleApi.delParams) {
  return requestClient.post<projectSaleApi.delResult>(
    '/project/deleteSale',
    data,
  );
}

/**
 * 导出
 */
export async function projectSaleExport(data: projectSaleApi.listParams) {
  return requestClient.post<exportApi.exportResult>(
    '/project/salePageListExcel',
    data,
  );
}
// ------------------------------------ 项目收入 end ------------------------------------

// ------------------------------------ 项目成本 start ------------------------------------
/**
 * 项目成本列表
 */
export async function projectBuyPageListApi(data: projectBuyApi.listParams) {
  return requestClient.post<projectBuyApi.listResult>(
    '/project/buyPageList',
    data,
  );
}

/**
 * 项目成本详情
 */
export async function projectBuyDetailApi(data: projectBuyApi.detailParams) {
  return requestClient.post<projectBuyApi.detailResult>(
    '/project/buyDetail',
    data,
  );
}

/**
 * 项目成本新增
 */
export async function projectSaveBuyApi(data: projectBuyApi.saveParams) {
  return requestClient.uploadMultiple<projectBuyApi.saveResult>(
    '/project/saveBuy',
    data,
  );
}

/**
 * 项目成本编辑
 */
export async function projectEditBuyApi(data: projectBuyApi.editParams) {
  return requestClient.uploadMultiple<projectBuyApi.editResult>(
    '/project/editBuy',
    data,
  );
}

/**
 * 项目成本删除
 */
export async function projectDeleteBuyApi(data: projectBuyApi.delParams) {
  return requestClient.post<projectBuyApi.delResult>(
    '/project/deleteBuy',
    data,
  );
}
/**
 * 导出
 */
export async function projectBuyExport(data: projectBuyApi.listParams) {
  return requestClient.post<exportApi.exportResult>(
    '/project/buyPageListExcel',
    data,
  );
}
// ------------------------------------ 项目成本 end ------------------------------------

// ------------------------------------ 项目合同 start ------------------------------------
/**
 * 项目合同列表
 */
export async function projectContractPageListApi(
  data: projectContractApi.listParams,
) {
  return requestClient.post<projectContractApi.listResult>(
    '/project/contractPageList',
    data,
  );
}

/**
 * 项目合同详情
 */
export async function projectContractDetailApi(
  data: projectContractApi.detailParams,
) {
  return requestClient.post<projectContractApi.detailResult>(
    '/project/contractDetail',
    data,
  );
}

/**
 * 项目合同新增
 */
export async function projectSaveContractApi(
  data: projectContractApi.saveParams,
) {
  return requestClient.uploadMultiple<projectContractApi.saveResult>(
    '/project/saveContract',
    data,
  );
}

/**
 * 项目合同编辑
 */
export async function projectEditContractApi(
  data: projectContractApi.editParams,
) {
  return requestClient.uploadMultiple<projectContractApi.editResult>(
    '/project/editContract',
    data,
  );
}

/**
 * 项目合同删除
 */
export async function projectDeleteContractApi(
  data: projectContractApi.delParams,
) {
  return requestClient.post<projectContractApi.delResult>(
    '/project/deleteContract',
    data,
  );
}
// ------------------------------------ 项目合同 end ------------------------------------

// ------------------------------------ 项目预警 start ------------------------------------
/**
 * 项目预警
 */
export async function projectWarnList(data: projectWarningApi.listParams) {
  return requestClient.post<[projectWarningApi.listResult]>(
    '/project/queryWarnList',
    data,
  );
}
// ------------------------------------ 项目预警 end ------------------------------------

// ------------------------------------ 项目完结 start ------------------------------------
/**
 * 完结
 */
export async function projectEnd(data: projectEndApi.endParams) {
  return requestClient.post<[projectEndApi.endResult]>(
    '/project/projectEnd',
    data,
  );
}
/**
 * 反完结
 */
export async function projectNoEnd(data: projectEndApi.endParams) {
  return requestClient.post<[projectEndApi.endResult]>(
    '/project/projectNoEnd',
    data,
  );
}
// ------------------------------------ 项目完结 end ------------------------------------

// ------------------------------------ 项目账务 start ------------------------------------
/**
 * 账务列表
 */
export async function projectAccountList(data: projectAccountApi.listParams) {
  return requestClient.post<[projectAccountApi.listResult]>(
    '/project/queryAccountList',
    data,
  );
}
/**
 * 账务详情
 */
export async function projectAccountInfoApi(
  data: projectAccountApi.detailParams,
) {
  return requestClient.post<[projectAccountApi.detailResult]>(
    '/project/accountDetail',
    data,
  );
}
/**
 * 导出
 */
export async function projectAccountExport(data: projectAccountApi.listParams) {
  return requestClient.post<exportApi.exportResult>(
    '/project/queryAccountListExcel',
    data,
  );
}
// ------------------------------------ 项目账务 end ------------------------------------
// ------------------------------------ 项目其他 start ------------------------------------

/**
 * 首页项目收入支出
 * @param data -
 * @returns
 */
export async function projectHomePage(data: projectOtherApi.homePageParams) {
  return requestClient.post<[projectOtherApi.homePageResult]>(
    '/project/homePageSum',
    data,
  );
}
// ------------------------------------ 项目其他 end ------------------------------------
