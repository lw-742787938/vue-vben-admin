import type { deptApi, dictApi, rolesApi, userApi } from './types';

import { requestClient } from '#/api/request';

// ------------------------------------ 角色 start ------------------------------------
/**
 * 获取角色列表
 */
export async function rolePageListApi(data: rolesApi.listParams) {
  return requestClient.post<rolesApi.listResult>('/role/pagelist', data);
}

/**
 * 角色新增
 */
export async function roleSaveApi(data: rolesApi.saveParams) {
  return requestClient.post<rolesApi.saveResult>('/role/save', data);
}

/**
 * 角色修改
 */
export async function roleEditApi(data: rolesApi.editParams) {
  return requestClient.post<rolesApi.editResult>('/role/edit', data);
}

/**
 * 角色删除
 */
export async function roleDelApi(data: rolesApi.delParams) {
  return requestClient.post<rolesApi.delResult>('/role/delete', data);
}

/**
 * 角色列表（全部）
 */
export async function roleListApi(data: rolesApi.selectListParams) {
  return requestClient.post<rolesApi.selectListResult>('/role/rolelist', data);
}
/**
 * 通过角色获取菜单权限
 */
export async function rolePermissionByRoleIdApi(data: rolesApi.byIdParams) {
  return requestClient.post<rolesApi.byIdResult>(
    '/role/getRolePermissionByRoleId',
    data,
  );
}
/**
 * 添加角色菜单权限
 */
export async function saveRolePermissionApi(data: rolesApi.saveIdParams) {
  return requestClient.post<rolesApi.saveIdResult>(
    '/role/saveRolePermission',
    data,
  );
}
/**
 * 获取所有菜单
 */
export async function rolePermissionAllApi(data: rolesApi.allIdParams) {
  return requestClient.post<rolesApi.allIdResult>(
    '/role/getRolePermissionAll',
    data,
  );
}
// ------------------------------------ 角色 end ------------------------------------

// ------------------------------------ 部门 start ------------------------------------
/**
 * 获取部门列表
 */
export async function deptPageListApi(data: deptApi.listParams) {
  return requestClient.post<deptApi.listResult>('/dept/pagelist', data);
}

/**
 * 部门新增
 */
export async function deptSaveApi(data: deptApi.saveParams) {
  return requestClient.post<deptApi.saveResult>('/dept/save', data);
}

/**
 * 部门修改
 */
export async function deptEditApi(data: deptApi.editParams) {
  return requestClient.post<deptApi.editResult>('/dept/edit', data);
}

/**
 * 部门删除
 */
export async function deptDelApi(data: deptApi.delParams) {
  return requestClient.post<deptApi.delResult>('/dept/delete', data);
}

/**
 * 部门下拉列表
 */
export async function deptList(data: deptApi.selectListParams = {}) {
  return requestClient.post<deptApi.selectListResult>('/dept/deptlist', data);
}
// ------------------------------------ 部门 end ------------------------------------

// ------------------------------------ 用户 start ------------------------------------
/**
 * 获取用户列表
 */
export async function userPageListApi(data: userApi.listParams) {
  return requestClient.post<userApi.listResult>('/user/pagelist', data);
}

/**
 * 获取全部用户
 */
export async function userListApi(data: userApi.listAllParams) {
  return requestClient.post<userApi.listAllResult>('/user/userlist', data);
}

/**
 * 用户新增
 */
export async function userSaveApi(data: userApi.saveParams) {
  return requestClient.post<userApi.saveResult>('/user/save', data);
}

/**
 * 用户修改
 */
export async function userEditApi(data: userApi.editParams) {
  return requestClient.post<userApi.editResult>('/user/edit', data);
}

/**
 * 用户删除
 */
export async function userDelApi(data: userApi.delParams) {
  return requestClient.post<userApi.delResult>('/user/delete', data);
}

/**
 * 获取当前用户已经绑定的角色
 */
export async function userRoleApi(data: userApi.roleParams) {
  return requestClient.post<userApi.roleResult>('/user/userRoleByUserId', data);
}

/**
 * 用户绑定角色
 */
export async function userSaveRoleApi(data: userApi.saveRoleParams) {
  return requestClient.post<userApi.saveRoleResult>('/user/saveUserRole', data);
}
// ------------------------------------ 用户 end ------------------------------------

// ------------------------------------ 字典管理 start ------------------------------------
/**
 * 列表
 */
export async function dictListApi(data: dictApi.listParams) {
  return requestClient.post<dictApi.listResult>('/dict/pagelist', data);
}
/**
 * 新增
 */
export async function dictSaveApi(data: dictApi.saveParams) {
  return requestClient.post<dictApi.saveResult>('/dict/save', data);
}
/**
 * 修改
 */
export async function dictEditApi(data: dictApi.editParams) {
  return requestClient.post<dictApi.editResult>('/dict/edit', data);
}
/**
 * 删除
 */
export async function dictDelApi(data: dictApi.delParams) {
  return requestClient.post<dictApi.delResult>('/dict/delete', data);
}
/**
 * 查询
 */
export async function dictGetApi(data: dictApi.getParams) {
  return requestClient.post<dictApi.getResult>('/dict/selectByType', data);
}
// ------------------------------------ 用户 end ------------------------------------
