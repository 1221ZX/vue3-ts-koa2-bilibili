const { userController } = require('../controllers/videoListController');
const router = require('koa-router')();

router.prefix('/api');

// 添加用户列表
router.get('/adduser',userController.adduser);

// 获取用户
router.post('/getuser',userController.getUser);

module.exports = router;