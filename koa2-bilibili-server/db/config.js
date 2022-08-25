var mongoose = require('mongoose');

 mongoose.connect('mongodb://127.0.0.1:27017/bilibili-zx').then(res => {
  console.log('bilibili数据库已连接--------------------------');
}).catch(err =>{
  console.log('数据库连接出现错误');
  throw err;
});



