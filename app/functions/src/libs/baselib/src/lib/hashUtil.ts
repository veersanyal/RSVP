import md5 from "crypto-js/md5";
import CryptoJS from "crypto-js";

export function generateMD5Hash(data: string) {
  return CryptoJS.MD5(data).toString();
}
