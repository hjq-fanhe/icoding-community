//使用 axios 发送网络请求
import Axios from 'axios'

export function axios(config) {
    const instance = Axios.create({
        baseURL: process.env.VUE_APP_ICODING_DEV_APIURL,
        timeout: 2000
    })

    instance.interceptors.request.use(config => {
        if (config.params.state == "github") {
            config.baseURL = process.env.VUE_APP_GITHUB_APIURL
        } else {
            config.baseURL = process.env.VUE_APP_GITEE_APIURL
        }
        return config
    }, error => {

    })

    instance.interceptors.response.use(res => {

        return res;
    }, error => {

    })

    return instance(config)
}

