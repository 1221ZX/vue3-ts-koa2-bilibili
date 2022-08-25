let mongoose = require('mongoose');

// 获取Schema对象;
let Schema = mongoose.Schema;

// 配置vdieo视频列表类型
let videoList = {
  id: Number,
  imgSrc: String,
  desc: String,
  playCount: Number,
  commentCount: Number,
  videoSrc: String
};

let user = {
  id: {
    type:Number,
    required:false
  },
  attention:{
    type:Number,
    required:true
  },
  fans: {
    type:Number,
    required:true
  },
  gainpraise: {
    type:Number,
    required:true
  },
  userimg: {
    type:String,
    required:true
  },
  username: {
    type:String,
    required:true
  },
  userclass:{
    type:Number,
    required:true
  },
  userinfo: {
    type:String,
    required:false
  },
  bcimg: {
    type:String,
    required:true
  },
  code: {
    type:Number,
    required:true
  },
}

// 将video列表类型生成字段
let videoListModule = mongoose.model('videolist', new Schema(videoList));

// 用户
let userModule = mongoose.model('user', new Schema(user))

module.exports = { videoListModule, userModule };


