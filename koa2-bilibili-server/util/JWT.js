const JWT = require('jsonwebtoken');

// 设置密钥 使用默认的HMAC SHA256生成
let mis = '17638389239zx'

let jwt = {
  // 生成token
  generate(value) { return JWT.sign({value}, mis,{ expiresIn:  '6d' }) },

  // 解析token
  verify(token) {
    try {
      return JWT.verify(token, mis);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = jwt;