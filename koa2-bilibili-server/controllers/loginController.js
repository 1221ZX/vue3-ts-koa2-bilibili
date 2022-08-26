let loginService = require('../service/loginService')
let jwt = require('../util/JWT')

// 对用户数据进行操作
let loginController = {
  // 查找用户数据
  login: async (ctx, next) => {
    let { username, password } = ctx.request.body
    // console.log(username,password);
    if (username && password) {
      try {
        let result = await loginService.login(username, password);
        let token = jwt.generate(result);
        // 响应头中携带token
        ctx.body = {
          code: 200,
          msg: '查询用户成功',
          data: result,
          token
        }
      } catch (error) {
        ctx.body = {
          code: 400,
          msg: '查询用户失败',
          data: error.message
        }
      }
    } else {
      ctx.body = {
        code: 400,
        msg: '查询用户失败,账号或者密码为空',
      }
    }
  }
}

module.exports = loginController 