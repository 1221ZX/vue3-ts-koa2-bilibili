import request from './request'

// 获取用户信息
export const getuser = (id: string) => request({ url: '/getuser', method: 'post', data: { id } });

// 获取视频列表
export const getvideolist = () => request({ url: '/getvideolist', method: 'get' });

// 登录
export const login = (username:string,password:number) => request({ url: '/login', method: 'post',data:{username,password} });