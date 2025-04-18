/** 项目立项 */
namespace projectApprovalApi {
  export interface listRecordsT {
    createTime: number;
    curPage: number;
    id: number;
    name: string;
    rowNum: number;
  }

  /** 列表参数 */
  export interface listParams {
    curPage: number;
    rowNum: number;
    createStartTime?: string;
    createEndTime?: string;
    code?: string;
    name?: string;
    status?: null | number | string;
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

  /** 项目立项申请参数 */
  export interface applyParams {
    file: any[] | Blob | File;
    apply: string;
    [key: string]: any;
  }

  /** 项目立项申请返回值 */
  export interface applyResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }

  /** 项目立项修改参数 */
  export interface applyEditParams {
    file: any[] | Blob | File;
    apply: string;
    [key: string]: any;
  }

  /** 项目立项修改返回值 */
  export interface applyEditResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }

  /** 删除参数 */
  export interface delParams {
    id?: number | string | undefined;
  }

  /** 删除返回值 */
  export interface delResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }
}
/** 项目列表 */
namespace projectListApi {
  export interface listRecordsT {
    createTime: number;
    curPage: number;
    id: number;
    name: string;
    rowNum: number;
  }

  /** 列表参数 */
  export interface listParams {
    curPage: number;
    rowNum: number;
    createStartTime?: string;
    createEndTime?: string;
    code?: string;
    name?: string;
    status?: null | number | string;
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

  /** 详情参数 */
  export interface detailParams {
    id?: number | string | undefined;
  }

  /** 详情返回值 */
  export interface detailResult {
    code: number;
    msg: string;
    data: Array<unknown>;
    [key: string]: any;
  }
}
/** 项目预算 */
namespace projectBudgetApi {
  export interface listRecordsT {
    createTime: number;
    curPage: number;
    id: number;
    name: string;
    rowNum: number;
  }

  /** 列表参数 */
  export interface listParams {
    curPage: number;
    rowNum: number;
    createStartTime?: string;
    createEndTime?: string;
    projectId?: null | string | undefined;
    code?: string;
    name?: string;
    status?: null | number | string;
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
    records: projectBudgetApi.listRecordsT[];
    searchCount: boolean;
    size: number;
    total: number;
  }

  /** 详情参数 */
  export interface detailParams {
    id?: number | string | undefined;
  }

  /** 详情返回值 */
  export interface detailResult {
    code: number;
    msg: string;
    data: Array<unknown>;
    [key: string]: any;
  }

  export interface AddListRecordsT {
    name: string;
    qty: number;
    price: number;
    totalPrice: number;
    unit: string;
    remark: string;
  }

  /** 新增参数 */
  export interface saveParams {
    file: any[] | Blob | File;
    budgetVO: string;
    [key: string]: any;
  }

  /** 新增返回值 */
  export interface saveResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }

  /** 修改参数 */
  export interface editParams {
    file: any[] | Blob | File;
    budgetVO: string;
    [key: string]: any;
  }

  /** 修改返回值 */
  export interface editResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }

  /** 删除参数 */
  export interface delParams {
    id?: number | string | undefined;
  }

  /** 删除返回值 */
  export interface delResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }
}
/** 项目收入 */
namespace projectSaleApi {
  export interface listRecordsT {
    createTime: number;
    curPage: number;
    id: number;
    name: string;
    rowNum: number;
  }

  /** 列表参数 */
  export interface listParams {
    curPage: number;
    rowNum: number;
    createStartTime?: string;
    createEndTime?: string;
    projectId?: null | string | undefined;
    code?: string;
    name?: string;
    status?: null | number | string;
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
    records: projectBudgetApi.listRecordsT[];
    searchCount: boolean;
    size: number;
    total: number;
  }

  /** 详情参数 */
  export interface detailParams {
    id?: number | string | undefined;
  }

  /** 详情返回值 */
  export interface detailResult {
    code: string;
    msg: string;
    data: Array<unknown>;
    [key: string]: any;
  }

  /** 新增参数 */
  export interface AddListRecordsT {
    name: null | string | undefined;
    qty: null | string | undefined;
    price: null | number | string | undefined;
    totalPrice: null | number | string | undefined;
    unit: null | string | undefined;
    remark?: null | string | undefined;
  }
  export interface saveParams {
    file: any[] | Blob | File;
    saleVO: string;
    [key: string]: any;
  }

  /** 新增返回值 */
  export interface saveResult {
    code: number | string;
    msg: string;
    data: Array<unknown>;
  }

  /** 修改参数 */
  export interface editParams {
    file: any[] | Blob | File;
    saleVO: string;
    [key: string]: any;
  }

  /** 修改返回值 */
  export interface editResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }

  /** 删除参数 */
  export interface delParams {
    id?: number | string | undefined;
  }

  /** 删除返回值 */
  export interface delResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }
}
/** 项目成本 */
namespace projectBuyApi {
  export interface listRecordsT {
    createTime: number;
    curPage: number;
    id: number;
    name: string;
    rowNum: number;
  }

  /** 列表参数 */
  export interface listParams {
    curPage: number;
    rowNum: number;
    createStartTime?: string;
    createEndTime?: string;
    projectId?: null | string | undefined;
    code?: string;
    name?: string;
    status?: null | number | string;
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
    records: projectBudgetApi.listRecordsT[];
    searchCount: boolean;
    size: number;
    total: number;
  }

  /** 详情参数 */
  export interface detailParams {
    id?: number | string | undefined;
  }

  /** 详情返回值 */
  export interface detailResult {
    code: string;
    msg: string;
    data: Array<unknown>;
    [key: string]: any;
  }

  /** 新增参数 */
  export interface AddListRecordsT {
    name: null | string | undefined;
    qty: null | string | undefined;
    price: null | number | string | undefined;
    totalPrice: null | number | string | undefined;
    unit: null | string | undefined;
    remark?: null | string | undefined;
  }
  export interface saveParams {
    file: any[] | Blob | File;
    buyVO: string;
    [key: string]: any;
  }

  /** 新增返回值 */
  export interface saveResult {
    code: number | string;
    msg: string;
    data: Array<unknown>;
  }

  /** 修改参数 */
  export interface editParams {
    file: any[] | Blob | File;
    buyVO: string;
    [key: string]: any;
  }

  /** 修改返回值 */
  export interface editResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }

  /** 删除参数 */
  export interface delParams {
    id?: number | string | undefined;
  }

  /** 删除返回值 */
  export interface delResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }
}
/** 项目合同 */
namespace projectContractApi {
  export interface listRecordsT {
    createTime: number;
    curPage: number;
    id: number;
    name: string;
    rowNum: number;
  }

  /** 列表参数 */
  export interface listParams {
    curPage: number;
    rowNum: number;
    createStartTime?: string;
    createEndTime?: string;
    projectId?: null | string | undefined;
    code?: string;
    name?: string;
    status?: null | number | string;
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
    records: projectBudgetApi.listRecordsT[];
    searchCount: boolean;
    size: number;
    total: number;
  }

  /** 详情参数 */
  export interface detailParams {
    id?: number | string | undefined;
  }

  /** 详情返回值 */
  export interface detailResult {
    code: string;
    msg: string;
    data: Array<unknown>;
    [key: string]: any;
  }

  /** 新增参数 */
  export interface saveParams {
    file: any[] | Blob | File;
    contractVO: string;
    [key: string]: any;
  }

  /** 新增返回值 */
  export interface saveResult {
    code: number | string;
    msg: string;
    data: Array<unknown>;
  }

  /** 修改参数 */
  export interface editParams {
    file: any[] | Blob | File;
    contractVO: string;
    [key: string]: any;
  }

  /** 修改返回值 */
  export interface editResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }

  /** 删除参数 */
  export interface delParams {
    id?: number | string | undefined;
  }

  /** 删除返回值 */
  export interface delResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }
}
/** 项目账务 */
namespace projectAccountApi {
  export interface listRecordsT {
    createTime: number;
    curPage: number;
    id: number;
    name: string;
    rowNum: number;
  }
  /** 列表参数 */
  export interface listParams {
    curPage: number;
    rowNum: number;
    createStartTime?: string;
    createEndTime?: string;
    code?: string;
    name?: string;
    status?: null | number | string;
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
    records: projectAccountApi.listRecordsT[];
    searchCount: boolean;
    size: number;
    total: number;
  }
  /** 详情参数 */
  export interface detailParams {
    id?: number | string | undefined;
  }

  /** 详情返回值 */
  export interface detailResult {
    code: string;
    msg: string;
    data: Array<unknown>;
    [key: string]: any;
  }
}
/** 项目预警 */
namespace projectWarningApi {
  /** 列表参数 */
  export interface listParams {
    id?: number | string | undefined;
    status?: null | number | string | undefined;
  }

  /** 列表返回值 */
  export interface listResult {
    name: string;
  }
}
/** 项目预警 */
namespace projectEndApi {
  /** 列表参数 */
  export interface endParams {
    id?: number | string | undefined;
  }

  /** 列表返回值 */
  export interface endResult {
    code: string;
    msg: string;
    data: Array<unknown>;
    [key: string]: any;
  }
}
namespace projectOtherApi {
  /** 列表参数 */
  export interface homePageParams {
    id?: number | string | undefined;
  }

  /** 列表返回值 */
  export interface homePageResult {
    code: string;
    msg: string;
    data: Array<unknown>;
    [key: string]: any;
  }
}

export type {
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
};
