let  userModule  = require('../module/userModule')

// userModule
let loginService = {

  // 查找用户
  login: async (username,password) => {
    try {
      console.log(username,password);
      let result = await userModule.findOne({username:username,password:password});
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports =  loginService 