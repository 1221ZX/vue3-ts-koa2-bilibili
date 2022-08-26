let {userService} = require('../service/userService')

// 对用户数据进行操作
let userController = {
  // 添加数据
  adduser: async (ctx, next) => {
    let userInfo = ctx.request.body;
    try {
      let result = await userService.addUser(userInfo);
      ctx.body = {
        code: 200,
        msg: '添加user数据成功',
        data: result
      }
    } catch (error) {
      ctx.body = {
        code: 400,
        msg: '数据库出现错误,添加失败',
        data: error.message
      }
    }
  },

  // 查找用户数据
  getUser: async (ctx, next) => {
    let id = ctx.request.body.id
    if (id) {
      try {
        let result = await userService.getUser(id);
        ctx.body = {
          code: 200,
          msg: '查询用户成功',
          data: result
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
        msg: '查询用户失败,id为空',
      }
    }
  }
}

module.exports = userController 