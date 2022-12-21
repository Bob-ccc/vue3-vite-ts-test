import axios, { AxiosPromise, Method } from 'axios'
import type { AxiosRequestConfig } from 'axios'
import router from '@/router';
import { message } from 'ant-design-vue';

export const getUrl = (): string => {
    console.log(window.location.protocol);

    const value: string = import.meta.env.VITE_AXIOS_BASE_URL as string
    return value ? value : window.location.protocol + '//' + window.location.host
}



/*
 * 创建Axios
 * 默认开启`reductDataFormat(简洁响应)`,返回类型为`ApiPromise`
 * 关闭`reductDataFormat`,返回类型则为`AxiosPromise`
 */
// function request(axiosConfig: AxiosRequestConfig, options: Options = {}, loading: LoadingOptions = {}): ApiPromise | AxiosPromise {
// const config = useConfig()
// const adminInfo = useAdminInfo()
// const userInfo = useUserInfo()
const Axios = axios.create({
    baseURL: getUrl(),
    timeout: 1000 * 10,
    // headers: {
    // 'Content-Type': 'application/json',
    // 'think-lang': config.lang.defaultLang,
    // server: true,
    // },
    // responseType: 'json',
})

// options = Object.assign(
//     {
//         CancelDuplicateRequest: true, // 是否开启取消重复请求, 默认为 true
//         loading: false, // 是否开启loading层效果, 默认为false
//         reductDataFormat: true, // 是否开启简洁的数据结构响应, 默认为true
//         showErrorMessage: true, // 是否开启接口错误信息展示,默认为true
//         showCodeMessage: true, // 是否开启code不为1时的信息提示, 默认为true
//         showSuccessMessage: false, // 是否开启code为1时的信息提示, 默认为false
//         anotherToken: '', // 当前请求使用另外的用户token
//     },
//     options
// )

// 请求拦截
Axios.interceptors.request.use(
    (config) => {

        // removePending(config)
        // options.CancelDuplicateRequest && addPending(config)
        // 创建loading实例
        // if (options.loading) {
        //     loadingInstance.count++
        //     if (loadingInstance.count === 1) {
        //         loadingInstance.target = ElLoading.service(loading)
        //     }
        // }

        // 自动携带token
        if (config.headers) {

            const token = localStorage.getItem('token')
            // if (token) config.headers.batoken = token
            // const userToken = options.anotherToken || userInfo.getToken()
            if (token) config.headers['Token'] = token
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 响应拦截
Axios.interceptors.response.use(
    (response) => {
        // removePending(response.config)
        // options.loading && closeLoading(options) // 关闭loading
        return Promise.resolve(response.data)

        // return Promise.reject(options.reductDataFormat ? response.data : response)
        // return options.reductDataFormat ? response.data : response

    },
    (error) => {

        if (error.response.status == 500) {
            message.warning(error.response.data.message)
            router.push({ name: 'Login' })
        }

        // error.config && removePending(error.config)
        // options.loading && closeLoading(options) // 关闭loading
        // options.showErrorMessage && httpErrorStatusHandle(error) // 处理错误状态码
        return Promise.reject(error.response) // 错误继续返回给到具体页面
    }
)

// return Axios(axiosConfig)
// }

export default Axios
