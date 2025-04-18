/** 客户 */
namespace customerApi {
  /** 列表参数 */
  export interface listParams {
    curPage: number;
    rowNum: number;
    name?: string;
    phone?: string;
    status?: null | number;
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
    tel?: string;
    contactor?: string;
    phone?: string;
    email?: string;
    address?: string;
    status?: number;
    extend1?: string;
    extend2?: string;
    extend3?: string;
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
    tel?: string;
    contactor?: string;
    phone?: string;
    email?: string;
    address?: string;
    status?: number;
    extend1?: string;
    extend2?: string;
    extend3?: string;
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

  /** 详情参数 */
  export interface detailParams {
    id?: number;
  }

  /** 详情返回值 */
  export interface detailResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }

  /** 查询项目所属客户参数 */
  export interface queryProJectParams {
    projectId?: number;
  }

  /** 查询项目所属客户返回值 */
  export interface queryProJectResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }
}

/** 供应商 */
namespace supplierApi {
  /** 列表参数 */
  export interface listParams {
    curPage: number;
    rowNum: number;
    name?: string;
    phone?: string;
    status?: null | number;
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
    tel?: string;
    contactor?: string;
    phone?: string;
    email?: string;
    address?: string;
    status?: number;
    valid?: number;
    extend1?: string;
    accountName?: string;
    accountNo?: string;
    bankName?: string;
    bankAddress?: string;
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
    tel?: string;
    contactor?: string;
    phone?: string;
    email?: string;
    address?: string;
    status?: number;
    valid?: number;
    extend1?: string;
    accountName?: string;
    accountNo?: string;
    bankName?: string;
    bankAddress?: string;
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

  /** 详情参数 */
  export interface detailParams {
    id?: number;
  }

  /** 详情返回值 */
  export interface detailResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }
}

export type { customerApi, supplierApi };
