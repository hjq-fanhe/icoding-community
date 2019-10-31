//使用 axios 发送网络请求
import Axios from 'axios'

export function axios(config) {
  const instance = Axios.create({
    baseURL: process.env.VUE_APP_ICODING_DEV_BASEURL,
    timeout: 2000
  })

  instance.interceptors.request.use(config => {
    // if (config.data.grant_type != undefined){
    //   config.baseURL = '/gitee'
    // }
    console.log(config)
    return config
  }, error => {

  })
  instance.interceptors.response.use(res => {
    return res;
  }, error => {
  })
  return instance(config)
}

