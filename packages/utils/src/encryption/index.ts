/*
 * @Author: lw
 * @Date: 2025-03-27 11:26:41
 * @LastEditors: lw
 * @LastEditTime: 2025-03-28 09:24:13
 * @Mailbox: 742787938@qq.com
 * @FilePath: \FeiFanHuiWu\packages\utils\src\encryption\index.ts
 * @Descripttion:
 */
import * as CryptoJS from 'crypto-js';

const VITE_APP_ETITLE: string = location.hostname;
// 十六位十六进制数作为密钥
const _PAW: string = `${VITE_APP_ETITLE}_ADMIN`;
const PAW = CryptoJS.enc.Utf8.parse(CryptoJS.MD5(_PAW).toString());
// 十六位十六进制数作为密钥偏移量
const _IV = `${VITE_APP_ETITLE}_IV`;
const IV = CryptoJS.enc.Utf8.parse(CryptoJS.MD5(_IV).toString());
// 加密方法
function Encrypt(word: string) {
  const key = CryptoJS.enc.Utf8.parse(PAW.toString());
  const srcs = CryptoJS.enc.Utf8.parse(word);
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: IV,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
}
// 解密方法
function Decrypt(word: string) {
  const key = CryptoJS.enc.Utf8.parse(PAW.toString());
  const decrypt = CryptoJS.AES.decrypt(word, key, {
    iv: IV,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}

export { Decrypt, Encrypt };
