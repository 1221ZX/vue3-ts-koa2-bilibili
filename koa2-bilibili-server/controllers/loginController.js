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
        if (result) {
          let token = jwt.generate(result);
          // console.log(token);
          // body中携带token
          // ctx.headers.authorization = token
          ctx.set('authorization', token)
          ctx.body = {
            code: 200,
            msg: '查询用户成功',
            data: result,
          }
        }else{
          ctx.body = {
            code: 400,
            msg: '不存在该数据',
            data: result,
          }
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