import type { AxiosRequestConfig, AxiosResponse } from 'axios';

import { beforeEach, describe, expect, it, vi } from 'vitest';

import { FileUploaderMultiple } from './uploaderMultiple';

describe('fileUploader', () => {
  let fileUploader: FileUploaderMultiple;
  // Mock the AxiosInstance
  const mockAxiosInstance = {
    post: vi.fn(),
  } as any;

  beforeEach(() => {
    fileUploader = new FileUploaderMultiple(mockAxiosInstance);
  });

  it('should create an instance of FileUploaderMultiple', () => {
    expect(fileUploader).toBeInstanceOf(FileUploaderMultiple);
  });

  it('should upload a file and return the response', async () => {
    const url = 'https://example.com/upload';
    const file = new File(['file content'], 'test.txt', { type: 'text/plain' });
    const mockResponse: AxiosResponse = {
      config: {} as any,
      data: { success: true },
      headers: {},
      status: 200,
      statusText: 'OK',
    };

    (
      mockAxiosInstance.post as unknown as ReturnType<typeof vi.fn>
    ).mockResolvedValueOnce(mockResponse);

    const result = await fileUploader.uploadMultiple(url, { file });
    expect(result).toEqual(mockResponse);
    expect(mockAxiosInstance.post).toHaveBeenCalledWith(
      url,
      expect.any(FormData),
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
  });

  it('should merge provided config with default config', async () => {
    const url = 'https://example.com/upload';
    const file = new File(['file content'], 'test.txt', { type: 'text/plain' });
    const mockResponse: AxiosResponse = {
      config: {} as any,
      data: { success: true },
      headers: {},
      status: 200,
      statusText: 'OK',
    };

    (
      mockAxiosInstance.post as unknown as ReturnType<typeof vi.fn>
    ).mockResolvedValueOnce(mockResponse);

    const customConfig: AxiosRequestConfig = {
      headers: { 'Custom-Header': 'value' },
    };

    const result = await fileUploader.uploadMultiple(
      url,
      { file },
      customConfig,
    );
    expect(result).toEqual(mockResponse);
    expect(mockAxiosInstance.post).toHaveBeenCalledWith(
      url,
      expect.any(FormData),
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Custom-Header': 'value',
        },
      },
    );
  });

  it('should handle errors gracefully', async () => {
    const url = 'https://example.com/upload';
    const file = new File(['file content'], 'test.txt', { type: 'text/plain' });
    (
      mockAxiosInstance.post as unknown as ReturnType<typeof vi.fn>
    ).mockRejectedValueOnce(new Error('Network Error'));

    await expect(fileUploader.uploadMultiple(url, { file })).rejects.toThrow(
      'Network Error',
    );
  });

  it('should handle empty URL gracefully', async () => {
    const url = '';
    const file = new File(['file content'], 'test.txt', { type: 'text/plain' });
    (
      mockAxiosInstance.post as unknown as ReturnType<typeof vi.fn>
    ).mockRejectedValueOnce(new Error('Request failed with status code 404'));

    await expect(fileUploader.uploadMultiple(url, { file })).rejects.toThrow(
      'Request failed with status code 404',
    );
  });

  it('should handle null URL gracefully', async () => {
    const url = null as unknown as string;
    const file = new File(['file content'], 'test.txt', { type: 'text/plain' });
    (
      mockAxiosInstance.post as unknown as ReturnType<typeof vi.fn>
    ).mockRejectedValueOnce(new Error('Request failed with status code 404'));

    await expect(fileUploader.uploadMultiple(url, { file })).rejects.toThrow(
      'Request failed with status code 404',
    );
  });
});
