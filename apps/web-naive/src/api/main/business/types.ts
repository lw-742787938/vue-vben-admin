/** 业务管理 */
namespace auditApi {
  /** 列表参数 */
  export interface listParams {
    curPage: number;
    rowNum: number;
    targetName?: string;
    result?: null | number | string;
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

  /** 审批参数 */
  export interface auditParams {
    targetId: number | string;
    auditType: number;
    auditUse: number | string;
    result: number | string;
    remark: string;
  }

  /** 审批返回值 */
  export interface auditResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }
}

/** 业务管理 */
namespace approveApi {
  /** 列表参数 */
  export interface listParams {
    curPage: number;
    rowNum: number;
    targetName?: string;
    result?: null | number | string;
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

  /** 获取流程当前审批信息参数 */
  export interface detailParams {
    id?: number | string;
  }

  /** 获取流程当前审批信息返回值 */
  export interface detailResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }

  /** 修改参数 */
  export interface auditList {
    approveId: number;
    auditUser?: string;
    auditUserName?: string;
    status?: string;
    level?: number;
    levelStr?: string;
  }

  export interface editParams {
    auditList: auditList[];
  }

  /** 修改返回值 */
  export interface editResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }
}

export type { approveApi, auditApi };
