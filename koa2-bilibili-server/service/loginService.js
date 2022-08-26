let  userModule  = require('../module/userModule')

// userModule
let loginService = {

  // 查找用户
  login: async (username,password) => {
    try {
      let result = await userModule.findOne({username,password});
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports =  loginService 