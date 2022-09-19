import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import useIndexStore from '../store'
import { Toast } from 'vant'
import { Base64 } from 'js-base64'
import { LoginDate } from '../types'

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
} as AxiosRequestConfig)
const store = useIndexStore()
instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        if (config.method !== 'get') {
            store.addLoading()
        }
        if (config.headers) {
            if (sessionStorage.getItem('user')) {
                const user: LoginDate = JSON.parse(<string>sessionStorage.getItem('user'))
                config.headers['pitaya-Auth'] = 'bearer ' + user.access_token // 请求头带上token
            }
            config.headers['Authorization'] = `Basic ${Base64.encode(`saber:saber_secret`)}`
        }
        return config
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error)
    }
)
instance.interceptors.response.use(
    (response: AxiosResponse) => {
        store.subLoading()
        // Do something before request is sent
        if ((response.config.url as string).indexOf('/xf-auth') > -1) {
            return response.data
        }
        if (response.config.responseType === 'blob') {
            return response.data
        }
        if (response.data && response.data.code !== 200) {
            if (response.data.code === 401) {
                // 401, token失效
                sessionStorage.removeItem('user')
            }
            Toast(response.data.message || response.data.error_description)
        }
        return response.data
    },
    (error) => {
        Toast(error.response.data.msg || error.response.data.error_description)
        store.subLoading()
        return Promise.reject(error)
    }
)
export default instance
