import axios from 'axios'

let requests = axios.create({
  baseURL: '/api',
  timeout: 10000
})

// 请求拦截
requests.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(new Error(error))
})


// 响应拦截
requests.interceptors.response.use(config => {
  let data = config.data;

  if (data.code >= 200 || data.code <= 300) {
    return Promise.resolve(data)
  }
}, error => {
  if (error.response.status) {
    switch (error.response.status) {
      case 404:
        alert(`请求路径错误,请仔细核对${error}`)
        break;
      case 500 || 501 || 502:
        alert(`内部服务器错误${error}`)
        break;
      default:
        alert(`错误${error}`)
        break;
    }
  }
});

export default requests
