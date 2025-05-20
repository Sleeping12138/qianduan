import axios from '@/utils/require.js';


/**
 * OJ平台登录
 * @param {*} userAccount 
 * @param {*} password 
 * @returns 
 */
export function login(userAccount, password) {
    return axios.post('/sysUser/login',
        {
            userAccount: userAccount,
            password: password
        })
}


/**
 * 获取登录者昵称信息
 * @returns 
 */
export function getLoginUserInfo() {
    return axios.get('/sysUser/getLoginUserInfo');
}


/**
 * 退出登录
 * @returns 
 */
export function logout() {
    return axios.get('/sysUser/logout');
}
