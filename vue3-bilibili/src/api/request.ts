import axios from 'axios'

let requests = axios.create({
  baseURL: '/api',
  timeout: 10000
})

// 请求拦截
requests.interceptors.request.use(config => {
  let token = localStorage.getItem('token')
  
  if (token && token != undefined) {
    config.headers!.Authorization = 'Bearer ' + token
  }
  return config
}, error => {
  return Promise.reject(new Error(error))
})


// 响应拦截
requests.interceptors.response.use(config => {
  let data = config.data;

  let token = config.headers!.authorization;

  localStorage.setItem('token',token)
  if (data.code >= 200 || data.code <= 300) {
    return Promise.resolve(data)
  }
}, error => {
  if (error.response.status) {
    switch (error.response.status) {
      case 404:
        console.log(`请求路径错误,请仔细核对${error}`)
        break;
      case 500 || 501 || 502:
        console.log(`内部服务器错误${error}`)
        break;
      default:
        console.log(`错误${error}`)
        break;
    }
  }
});

export default requests
