const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const jwt = require('./util/JWT')

const videos = require('./routes/video')
const user = require('./routes/user')
const login = require('./routes/login')

// 测试数据库连接
// let videoListService = require('./service/videoListService');
// videoListService.addVideo();

// error handler
onerror(app)

// 定义功能函数
app.use(async (ctx, next) =>{
  if (ctx.url.includes('login')) {
    await next()
    return 
  }
  // console.log(ctx.headers.authorization);
  let token = ctx.headers.authorization?.split(' ')[1]
  if (token) {
    const playLoad = jwt.verify(token);
    if(playLoad){
      const newToken = jwt.generate(playLoad);
      ctx.set('authorization',newToken)
      await next()
    }else{
      ctx.status(401).body({
        msg:'token过期'
      })
      await next()
    }
  }else{
    await next()
  }
})

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(videos.routes(), videos.allowedMethods())
app.use(user.routes(),user.allowedMethods())
app.use(login.routes(),login.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
