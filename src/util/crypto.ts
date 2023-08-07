const CryptoJS = require('crypto-js');

export function encryptWithAES(text: string) {
  const passphrase = process.env.PASSPHRASE;
  return CryptoJS.AES.encrypt(text, passphrase).toString();
}

export function decryptWithAES(ciphertext: string) {
  const passphrase = process.env.PASSPHRASE;
  const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
}
