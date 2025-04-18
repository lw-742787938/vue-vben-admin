namespace exportApi {
  /** 导出返回值 */
  export interface exportResult {
    code: number;
    msg: string;
    data: Array<unknown>;
  }
}

export type { exportApi };
