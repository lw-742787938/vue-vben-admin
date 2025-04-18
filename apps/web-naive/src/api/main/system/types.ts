/*
 * @Author: lw
 * @Date: 2025-03-12 14:18:46
 * @LastEditors: lw
 * @LastEditTime: 2025-04-02 16:43:31
 * @Mailbox: 742787938@qq.com
 * @FilePath: \FeiFanHuiWu\apps\web-naive\src\api\main\system\types.ts
 * @Descripttion:
 */
/** 角色 */
namespace rolesApi {
  /** 列表参数 */
  export interface listParams {
    curPage: number;
    rowNum: number;
    name?: string;
  }

  export interface listRecordsT {
    createTime: number;
    curPage: number;
    id: number;
    name: string;
    rowNum: number;
  }

  /** 列表返回值 */
  export interface listResult {
    asc: boolean;
    current: number;
    limit: number;
    offset: number;
    offsetCurrent: number;
    orders: [];
    pages: number;
    records: listRecordsT[];
    searchCount: boolean;
    size: number;
    total: number;
  }

  /** 新增参数 */
  export interface saveParams {
    name?: string;
    code?: string;
    remark?: string;
  }

  /** 新增返回值 */
  export interface saveResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }

  /** 修改参数 */
  export interface editParams {
    id: number;
    name?: string;
    code?: string;
    remark?: string;
  }

  /** 修改返回值 */
  export interface editResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }

  /** 删除参数 */
  export interface delParams {
    id?: number;
  }

  /** 删除返回值 */
  export interface delResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }

  /** 下拉列表参数 */
  export interface selectListParams {
    name?: string;
  }

  /** 下拉列表返回值 */
  export interface selectListResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }

  /** 通过角色获取菜单权限参数 */
  export interface byIdParams {
    roleId?: number;
  }

  /** 通过角色获取菜单权限返回值 */
  export interface byIdResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }

  /** 添加角色菜单权限参数 */
  export interface saveIdParams {
    roleId?: number;
    ids?: Array<unknown>;
  }

  /** 添加角色菜单权限返回值 */
  export interface saveIdResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }

  /** 获取所有菜单参数 */
  export interface allIdParams {
    roleId?: number;
  }

  /** 获取所有菜单返回值 */
  export interface allIdResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }
}

/** 部门 */
namespace deptApi {
  /** 列表参数 */
  export interface listParams {
    curPage: number;
    rowNum: number;
    name?: string;
  }

  export interface listRecordsT {
    createTime: number;
    curPage: number;
    id: number;
    name: string;
    rowNum: number;
  }

  /** 列表返回值 */
  export interface listResult {
    asc: boolean;
    current: number;
    limit: number;
    offset: number;
    offsetCurrent: number;
    orders: [];
    pages: number;
    records: listRecordsT[];
    searchCount: boolean;
    size: number;
    total: number;
  }

  /** 新增参数 */
  export interface saveParams {
    name?: string;
    code?: string;
    remark?: string;
  }

  /** 新增返回值 */
  export interface saveResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }

  /** 修改参数 */
  export interface editParams {
    id: number;
    name?: string;
    code?: string;
    remark?: string;
  }

  /** 修改返回值 */
  export interface editResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }

  /** 删除参数 */
  export interface delParams {
    id?: number;
  }

  /** 删除返回值 */
  export interface delResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }

  /** 下拉列表参数 */
  export interface selectListParams {
    name?: string;
  }

  /** 下拉列表返回值 */
  export interface selectListResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }
}

/** 用户 */
namespace userApi {
  /** 列表参数 */
  export interface listParams {
    curPage: number;
    rowNum: number;
    name?: string;
  }

  export interface listRecordsT {
    createTime: number;
    curPage: number;
    id: number;
    name: string;
    rowNum: number;
  }

  /** 列表返回值 */
  export interface listResult {
    asc: boolean;
    current: number;
    limit: number;
    offset: number;
    offsetCurrent: number;
    orders: [];
    pages: number;
    records: listRecordsT[];
    searchCount: boolean;
    size: number;
    total: number;
  }

  /** 列表参数 */
  export interface listAllParams {
    name?: string;
  }

  /** 列表返回值 */
  export interface listAllResult {
    asc: boolean;
    current: number;
    limit: number;
    offset: number;
    offsetCurrent: number;
    orders: [];
    pages: number;
    records: listRecordsT[];
    searchCount: boolean;
    size: number;
    total: number;
  }

  /** 新增参数 */
  export interface saveParams {
    name?: string;
    code?: string;
    remark?: string;
  }

  /** 新增返回值 */
  export interface saveResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }

  /** 修改参数 */
  export interface editParams {
    id?: number;
    name?: string;
    code?: string;
    remark?: string;
  }

  /** 修改返回值 */
  export interface editResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }

  /** 删除参数 */
  export interface delParams {
    id?: number;
  }

  /** 删除返回值 */
  export interface delResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }

  /** 角色参数 */
  export interface roleParams {
    userId?: number;
  }

  /** 角色返回值 */
  export interface roleResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }
  /** 绑定角色参数 */
  export interface saveRoleParams {
    userId?: number;
    ids?: Array<number>;
  }

  /** 绑定角色返回值 */
  export interface saveRoleResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }
}

/** 用户 */
namespace dictApi {
  /** 列表参数 */
  export interface listParams {
    curPage: number;
    rowNum: number;
    name?: string;
  }

  export interface listRecordsT {
    id: null | number | string | undefined;
    type: null | number | string | undefined;
    name: null | number | string | undefined;
    createTime: null | number | string | undefined;
  }

  /** 列表返回值 */
  export interface listResult {
    asc: boolean;
    current: number;
    limit: number;
    offset: number;
    offsetCurrent: number;
    orders: [];
    pages: number;
    records: listRecordsT[];
    searchCount: boolean;
    size: number;
    total: number;
  }

  /** 新增参数 */
  export interface saveParams {
    name?: null | number | string | undefined;
    type?: null | number | string | undefined;
  }

  /** 新增返回值 */
  export interface saveResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }

  /** 修改参数 */
  export interface editParams {
    id?: number | string;
    name?: null | number | string | undefined;
    type?: null | number | string | undefined;
  }

  /** 修改返回值 */
  export interface editResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }

  /** 删除参数 */
  export interface delParams {
    id?: number;
  }

  /** 删除返回值 */
  export interface delResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }
  /** 删除参数 */
  export interface getParams {
    type?: string | undefined;
  }

  /** 删除返回值 */
  export interface getResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }
}
export type { deptApi, dictApi, rolesApi, userApi };
