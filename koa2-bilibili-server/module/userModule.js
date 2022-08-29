let mongoose = require('mongoose');

// 获取Schema对象;
let Schema = mongoose.Schema;

let user = {
  id: {
    type: Number,
    required: false
  },
  attention: {
    type: Number,
    required: true
  },
  fans: {
    type: Number,
    required: true
  },
  gainpraise: {
    type: Number,
    required: true
  },
  userimg: {
    type: String,
    required: true
  },
  username:{
    type: String,
    required: true
  },
  password: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  userclass: {
    type: Number,
    required: true
  },
  userinfo: {
    type: String,
    required: false
  },
  bcimg: {
    type: String,
    required: true
  },
  code: {
    type: Number,
    required: true
  }
}



// 用户
let userModule = mongoose.model('users', new Schema(user))

module.exports = userModule ;
