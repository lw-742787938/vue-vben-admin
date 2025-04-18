import type { exportApi } from '../common';
import type { invoiceApi, paymentApi } from './types';

import { requestClient } from '#/api/request';

// ------------------------------------ 付款管理 start ------------------------------------
/**
 * 获取列表
 */
export async function payListApi(data: paymentApi.listParams) {
  return requestClient.post<paymentApi.listResult>('/pay/pageList', data);
}

/**
 * 新增
 */
export async function paySaveApi(data: paymentApi.saveParams) {
  return requestClient.uploadMultiple<paymentApi.saveResult>('/pay/save', data);
}

/**
 * 修改
 */
export async function payEditApi(data: paymentApi.editParams) {
  return requestClient.uploadMultiple<paymentApi.editResult>('/pay/edit', data);
}

/**
 * 删除
 */
export async function payDelApi(data: paymentApi.delParams) {
  return requestClient.post<paymentApi.delResult>('/pay/delete', data);
}

/**
 * 详情
 */
export async function payDetailApi(data: paymentApi.detailParams) {
  return requestClient.post<paymentApi.detailResult>('/pay/detail', data);
}
/**
 * 获取剩余金额
 */
export async function payGetPriceApi(data: paymentApi.getPriceParams) {
  return requestClient.post<paymentApi.getPriceResult>(
    '/pay/getPayPrice',
    data,
  );
}
/**
 * 导出
 */
export async function payExport(data: paymentApi.listParams) {
  return requestClient.post<exportApi.exportResult>('/pay/ListExcel', data);
}

// ------------------------------------ 付款管理 end ------------------------------------

// ------------------------------------ 发票管理 start ------------------------------------
/**
 * 获取列表
 */
export async function invoiceListApi(data: invoiceApi.listParams) {
  return requestClient.post<invoiceApi.listResult>('/invoice/pageList', data);
}

/**
 * 新增
 */
export async function invoiceSaveApi(data: invoiceApi.saveParams) {
  return requestClient.uploadMultiple<invoiceApi.saveResult>(
    '/invoice/save',
    data,
  );
}

/**
 * 修改
 */
export async function invoiceEditApi(data: invoiceApi.editParams) {
  return requestClient.uploadMultiple<invoiceApi.editResult>(
    '/invoice/edit',
    data,
  );
}

/**
 * 删除
 */
export async function invoiceDelApi(data: invoiceApi.delParams) {
  return requestClient.post<invoiceApi.delResult>('/invoice/delete', data);
}

/**
 * 详情
 */
export async function invoiceDetailApi(data: invoiceApi.detailParams) {
  return requestClient.post<invoiceApi.detailResult>('/invoice/detail', data);
}

/**
 * 获取剩余金额
 */
export async function invoiceGetPriceApi(data: invoiceApi.getPriceParams) {
  return requestClient.post<invoiceApi.getPriceResult>(
    '/invoice/getInvoicePrice',
    data,
  );
}

// ------------------------------------ 发票管理 end ------------------------------------
