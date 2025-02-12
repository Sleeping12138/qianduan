import axios from 'axios';
// Vue中进行了配置，而js中没有配置需要进行引入
import { ElMessage } from 'element-plus';

const http = axios.create({
    baseURL: 'https:/v3pz.itndedu.com/v3pz',
    timeout: 10000,
})

// Add a request interceptor
http.interceptors.request.use(function (config) {
    // Do something before request is sent
    // token可以理解为本地存储
    const token = localStorage.getItem('pz_token');
    let whiteUrl = ['/get/code', '/user/authentication', '/login'];
    if (token && !whiteUrl.includes(config.url)) {
        config.headers['x-token'] = token
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
http.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.data.code === -1) {
        ElMessage.warning(response.data.message);
    }
    if (response.data.code === -2) {
        localStorage.removeItem('pz_token');
        localStorage.removeItem('userInfo');
        localStorage.removeItem('menu');
        window.location.href = window.location.origin;
    }
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default http;