const crypto = require('crypto-js')
const key  = process.env.SECRET_KEY
module.exports = {
  encrypt(text) {
    const result = crypto.AES.encrypt(text, key);
    return result.toString();
  },
  decrypt(text) {
    const result = crypto.AES.decrypt(text, key);
    return result.toString(crypto.enc.Utf8);
  },
};
