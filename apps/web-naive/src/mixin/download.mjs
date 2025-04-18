/*
 * @Author: lw
 * @Date: 2025-04-01 12:07:31
 * @LastEditors: lw
 * @LastEditTime: 2025-04-01 12:08:20
 * @Mailbox: 742787938@qq.com
 * @FilePath: \FeiFanHuiWu\apps\web-naive\src\mixin\download.mjs
 * @Descripttion:
 */
export function download(url, name) {
  if (!url) return;
  const a = document.createElement('a');
  a.href = url;
  if (name !== undefined) {
    a.download = name;
  }
  document.body.append(a);
  a.click();
  a.remove();
}
