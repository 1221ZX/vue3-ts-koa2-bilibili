const router = require('koa-router')()
let  {videoListController}  = require('../controllers/videoListController')

router.prefix('/api')

router.get('/addvideo', videoListController.addVideo)

router.get('/getvideolist',videoListController.getVideoList)

module.exports = router
