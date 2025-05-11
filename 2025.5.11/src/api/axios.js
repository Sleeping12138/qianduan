import axios from 'axios';

const http = axios.create({
    timeout: 10000
});

http.interceptors.request.use(
    (config) => {
        // 例如添加 token
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

// 响应拦截器
http.interceptors.response.use(
    (response) => {
        // 可统一处理业务状态码
        const res = response.data
        if (res.code !== 200) {
            return Promise.reject(res.message || '请求错误')
        }
        return res
    },
    (error) => {
        // 可统一处理 HTTP 错误
        console.error('响应错误:', error)
        return Promise.reject(error)
    }
)

export default http;