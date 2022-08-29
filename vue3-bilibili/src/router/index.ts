import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  // 主页面
  { path: '/', component: () => import('../views/Home/index.vue') },
  // 视频页面
  { path: '/videoinfo', name: 'videoinfo', component: () => import('../views/Video/index.vue') },
  // 用户页面
  {path:'/user',component:()=> import('../views/User/index.vue')},
  // 用户页面
  {path:'/login',component:()=> import('../views/Login/index.vue')}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router