import request from './axios.js';

// get方式传递的是参数
export function getUserInfoList(params) {
    return request.get('/api/user/getUserInfoList', { params });
}

// post传递的是JSON对象
export function register(data) {
    return request.post('/api/user/register', data);
}