import axios from 'axios';

const http = axios.create({
    // baseURL: 'https:/v3pz.itndedu.com/v3pz',
    timeout: 10000,
    headers: { 'terminal': 'h5' }
})

// Add a request interceptor
http.interceptors.request.use(function (config) {
    // Do something before request is sent
    // token可以理解为本地存储
    const token = localStorage.getItem('h5_token');
    let whiteUrl = ['/login'];
    if (token && !whiteUrl.includes(config.url)) {
        config.headers['h5-token'] = token
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
http.interceptors.response.use(function (response) {
    if (response.data.code === -1) {
    }
    if (response.data.code === -2) {
        localStorage.removeItem('h5_token');
        localStorage.removeItem('h5_userInfo');
        window.location.href = window.location.origin;
    }
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default http;