import axios from '@/utils/request.js';

/**
 * 发送短信验证码
 * @param {*} data 
 * @returns 
 */
export function sendMessage(data) {
    return axios.post('/user/sendMessage', data);
}


/**
 * 登录接口
 * @param {*} data 
 * @returns 
 */
export function login(data) {
    return axios.post('/user/login', data);
}