/*
 * @Author: lw
 * @Date: 2025-04-02 11:56:50
 * @LastEditors: lw
 * @LastEditTime: 2025-04-07 15:55:28
 * @Mailbox: 742787938@qq.com
 * @FilePath: \FeiFanHuiWu\packages\effects\request\src\request-client\modules\uploaderMultiple.ts
 * @Descripttion:
 */
import type { RequestClient } from '../request-client';
import type { RequestClientConfig } from '../types';

class FileUploaderMultiple {
  private client: RequestClient;

  constructor(client: RequestClient) {
    this.client = client;
  }

  public async uploadMultiple<T = any>(
    url: string,
    data: Record<string, any> & { file: any[] | Blob | File },
    config?: RequestClientConfig,
  ): Promise<T> {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === 'file') {
        value.forEach((elm: any) => {
          formData.append('files', elm.file);
        });
      } else {
        formData.append(key, value);
      }
    });

    const finalConfig: RequestClientConfig = {
      ...config,
      headers: {
        'Content-Type': 'multipart/form-data',
        ...config?.headers,
      },
    };

    return this.client.post(url, formData, finalConfig);
  }
}

export { FileUploaderMultiple };
