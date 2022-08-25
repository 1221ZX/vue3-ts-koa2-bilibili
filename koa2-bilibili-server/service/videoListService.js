let { videoListModule, userModule } = require('../module/videoListModule');

// 对videoListModule对象进行增删改查
let videoListService = {
  // 添加数据
  addVideo: async (imgSrc, desc, playCount, commentCount, videoSrc) => {
    try {
      let result = await videoListModule.create({
        imgSrc,
        desc,
        playCount,
        commentCount,
        videoSrc
      })
      return result
    } catch (error) {
      throw error
    }

  },

  // 获取数据
  getVideoList: async () => {
    try {
      let result = videoListModule.find();
      // console.log(result);
      return result;
    } catch (error) {
      console.log('查询错误');
      throw error
    }

  }
}

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
    console.log(id);
    try {
      let result = await userModule.findById(id);
      return result
    } catch (error) {
      throw error
    }
  }
}


module.exports = { videoListService, userService };