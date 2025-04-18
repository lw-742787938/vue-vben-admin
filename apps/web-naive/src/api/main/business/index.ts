import type { approveApi, auditApi } from './types';

import { requestClient } from '#/api/request';

// ------------------------------------ 业务管理 start ------------------------------------
/**
 * 获取待办已办列表
 */
export async function auditListApi(data: auditApi.listParams) {
  return requestClient.post<auditApi.listResult>('/audit/auditdetail', data);
}

/**
 * 审批
 */
export async function AuditApi(data: auditApi.auditParams) {
  return requestClient.post<auditApi.auditResult>('/audit/audit', data);
}

// ------------------------------------ 业务管理 end ------------------------------------

// ------------------------------------ 审批授权 start ------------------------------------
/**
 * 获取列表 - 流程列表
 */
export async function approveListApi() {
  return requestClient.post<approveApi.listResult>('/approve/list');
}

/**
 * 审批 - 获取流程当前审批信息
 */
export async function approveInfoApi(data: approveApi.detailParams) {
  return requestClient.post<approveApi.detailResult>(
    '/approve/getAuditUser',
    data,
  );
}

/**
 * 审批 - 流程设置
 */
export async function customerEditApi(data: approveApi.editParams) {
  return requestClient.post<approveApi.editResult>('/approve/editAudit', data);
}

// ------------------------------------ 审批授权 end ------------------------------------
