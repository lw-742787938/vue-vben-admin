import type { customerApi, supplierApi } from './types';

import { requestClient } from '#/api/request';

// ------------------------------------ 客户 start ------------------------------------
/**
 * 获取列表
 */
export async function customerPageListApi(data: customerApi.listParams) {
  return requestClient.post<customerApi.listResult>('/customer/pagelist', data);
}

/**
 * 新增
 */
export async function customerSaveApi(data: customerApi.saveParams) {
  return requestClient.post<customerApi.saveResult>(
    '/customer/saveCpsCustomer',
    data,
  );
}

/**
 * 修改
 */
export async function customerEditApi(data: customerApi.editParams) {
  return requestClient.post<customerApi.editResult>(
    '/customer/editCpsCustomer',
    data,
  );
}

/**
 * 删除
 */
export async function customerDelApi(data: customerApi.delParams) {
  return requestClient.post<customerApi.delResult>('/customer/delete', data);
}

/**
 * 详情
 */
export async function customerDetailApi(data: customerApi.detailParams) {
  return requestClient.post<customerApi.detailResult>('/customer/detail', data);
}
/**
 * 查询项目所属客户
 */
export async function customerQueryProJectApi(
  data: customerApi.queryProJectParams,
) {
  return requestClient.post<customerApi.queryProJectResult>(
    '/customer/queryCpsCustomerIds',
    data,
  );
}

// ------------------------------------ 客户 end ------------------------------------

// ------------------------------------ 供应商 start ------------------------------------
/**
 * 获取列表
 */
export async function supplierPageListApi(data: supplierApi.listParams) {
  return requestClient.post<supplierApi.listResult>('/supplier/pagelist', data);
}

/**
 * 新增
 */
export async function supplierSaveApi(data: supplierApi.saveParams) {
  return requestClient.post<supplierApi.saveResult>(
    '/supplier/saveCpsSupplier',
    data,
  );
}

/**
 * 修改
 */
export async function supplierEditApi(data: supplierApi.editParams) {
  return requestClient.post<supplierApi.editResult>(
    '/supplier/editCpsSupplier',
    data,
  );
}

/**
 * 删除
 */
export async function supplierDelApi(data: supplierApi.delParams) {
  return requestClient.post<supplierApi.delResult>('/supplier/delete', data);
}

/**
 * 详情
 */
export async function supplierDetailApi(data: customerApi.detailParams) {
  return requestClient.post<customerApi.detailResult>('/supplier/detail', data);
}

// ------------------------------------ 供应商 end ------------------------------------
