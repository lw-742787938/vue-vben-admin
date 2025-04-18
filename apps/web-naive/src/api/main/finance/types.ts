/** 付款管理 */
namespace paymentApi {
  /** 列表参数 */
  export interface listParams {
    curPage: number;
    rowNum: number;
    name?: string;
    phone?: string;
    status?: null | number;
  }

  export interface listRecordsT {
    curPage: number;
    rowNum: number;
    createStartTime?: null | string | undefined;
    createEndTime?: null | string | undefined;
    projectName?: number | string;
    projectId?: number | string;
    orderId?: number | string;
    name?: string | undefined;
    status?: null | string | undefined;
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
    records: paymentApi.listRecordsT[];
    searchCount: boolean;
    size: number;
    total: number;
  }

  /** 新增参数 */
  export interface AddListRecordsT {
    buyId: null | string | undefined;
    buyName: null | string | undefined;
    payPrice: null | string | undefined;
  }
  export interface saveParams {
    file: any[] | Blob | File;
    billVO: string;
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
    billVO: string;
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
    id: number | string;
  }

  /** 删除返回值 */
  export interface delResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }

  /** 详情参数 */
  export interface detailParams {
    id: number | string;
  }

  /** 详情返回值 */
  export interface detailResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }

  /** 剩余金额参数 */
  export interface getPriceRecordsT {
    buyId: number;
  }
  export interface getPriceParams {
    billDetailVOList: paymentApi.getPriceRecordsT[];
  }

  /** 详情返回值 */
  export interface getPriceResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }
}

/** 发票管理 */
namespace invoiceApi {
  /** 列表参数 */
  export interface listParams {
    createStartTime: null | string | undefined;
    createEndTime: null | string | undefined;
    curPage: number;
    rowNum: number;
    projectName?: string;
    name?: string;
  }

  export interface listRecordsT {
    curPage: number;
    rowNum: number;
    createStartTime: null | string | undefined;
    createEndTime: null | string | undefined;
    projectId: number | string;
    code: number | string;
    name: string | undefined;
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
    records: paymentApi.listRecordsT[];
    searchCount: boolean;
    size: number;
    total: number;
  }

  /** 新增参数 */
  export interface AddListRecordsT {
    targetId: number | string | undefined;
    targetType: null | number | undefined;
    targetName: string | undefined;
    payPrice: string | undefined;
  }
  export interface saveParams {
    file: any[] | Blob | File;
    invoiceVO: string;
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
    invoiceVO: string;
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
    id: number | string;
  }

  /** 删除返回值 */
  export interface delResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }

  /** 详情参数 */
  export interface detailParams {
    id: number | string;
  }

  /** 详情返回值 */
  export interface detailResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }

  /** 剩余金额参数 */
  export interface getPriceRecordsT {
    targetId: number;
    targetType: number;
  }
  export interface getPriceParams {
    invoiceDetailVOList: invoiceApi.getPriceRecordsT[];
  }

  /** 详情返回值 */
  export interface getPriceResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }
}

export type { invoiceApi, paymentApi };
