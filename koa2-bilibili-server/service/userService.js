let  userModule  = require('../module/userModule')

// userModule
let userService = {
  // 添加用户
  addUser: async (userInfo) => {
    /* 
      id?: number | undefined;
      attention?: number | undefined;   关注
      fans?: number | undefined;        粉丝
      gainpraise?: number | undefined;  获赞
      userimg?: string | undefined;     用户头像
      username?: string | undefined;    用户名
      userclass?: number | undefined;   用户等级
      userinfo?: string | undefined;    用户签名
      bcimg?: string | undefined;       用户首页背景图片
      code?: number | undefined;        用户权限等级
    */
    try {
      let result = await userModule.create({
        ...userInfo
      })
      return result
    } catch (error) {
      throw error;
    }
  },

  // 查找用户
  getUser: async (id) => {
    try {
      let result = await userModule.findById(id);
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = { userService }