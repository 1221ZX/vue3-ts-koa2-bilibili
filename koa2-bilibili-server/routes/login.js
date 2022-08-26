const loginController = require('../controllers/loginController');
const router = require('koa-router')();

router.prefix('/api');

// 获取用户
router.post('/login',loginController.login);

module.exports = router;