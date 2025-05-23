import axios from 'axios';
import { getToken } from '@/utils/cookie.js';

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";


const service = axios.create({
    baseURL: '/dev-api',
    timeout: 5000
})


// 设置请求拦截器
service.interceptors.request.use(
    (config) => {
        if (getToken()) {
            config.headers["Authorization"] = "Bearer " + getToken();
        }
        return config;
    },
    (error) => {
        console.log(error)
        Promise.reject(error);
    }
);

// 设置响应拦截器
service.interceptors.response.use(
    (res) => {
        // 未设置状态码则默认成功状态
        const code = res.data.code;
        const msg = res.data.msg;
        if (code === 3001) {
            ElMessage.error(msg);
            this.$router.push('/oj/login')
        }
        if (code !== 200) {
            ElMessage.error(msg);
            return Promise.reject(new Error(msg));
        } else {
            return Promise.resolve(res.data);
        }
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default service;

