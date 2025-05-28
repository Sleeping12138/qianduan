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


/**
 * 退出登录
 * @returns 
 */
export function logout() {
    return axios.post('/user/logout');
}


/**
 * 获取用户信息
 * @returns 
 */
export function getLoginUserInfo() {
    return axios.get('/user/getLoginUserInfo');
}


/**
 * 获取用户详细信息
 * @returns 
 */
export function getUserDetailInfo() {
    return axios.get('/user/getUserDetailInfo')
}


/**
 * 更新用户数据
 * @param {*} data 
 * @returns 
 */
export function editUserInfo(data) {
    return axios.post('/user/editUserInfo', data);
}


/**
 * 更新数据库头像信息
 * @param {*} data 
 * @returns 
 */
export function headImageUpdate(data) {
    return axios.post('/user/head-image/update', data);
}