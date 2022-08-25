const { videoListService, userService } = require('../service/videoListService')

// 对视频数据进行操作
let videoListController = {
  // 添加数据
  addVideo: async (ctx, next) => {
    /* 
    imgSrc 封面路径 String, 
    desc 标语 String, 
    playCount 播放数 Number, 
    commentCount 点赞数 Number, 
    videoSrc 视频连接 String
  */
    let { imgSrc, desc, playCount, commentCount, videoSrc } = ctx.request.body
    try {
      let result = await videoListService.addVideo(imgSrc, desc, playCount, commentCount, videoSrc);
      ctx.body = {
        code: 200,
        msg: 'video添加成功',
        data: result
      }
    } catch (error) {
      ctx.body = {
        code: 400,
        msg: 'video添加失败',
        data: error
      }
    }
  },

  // 获取数据
  getVideoList: async (ctx, next) => {
    try {
      let result = await videoListService.getVideoList();
      ctx.body = {
        code: 200,
        msg: "查询成功",
        data: result
      }
    } catch (error) {
      ctx.body = {
        code: 400,
        msg: "查询失败",
        data: error
      }
    }
  }
}

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

module.exports = { videoListController, userController }