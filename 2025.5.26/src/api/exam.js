import axios from '@/utils/request.js';


/**
 * 取竞赛列表（从redis中获取竞赛列表）
 * @returns 
 */
export function getExamListFromRedis(param) {
    return axios.get('/exam//semiLogin/redis/getExamList', { params: param });
}


/**
 * 报名竞赛按钮
 * @param {*} data 
 * @returns 
 */
export function enter(data) {
    return axios.post('/user/exam/enter', data);
}


/**
 * 获取用户报名竞赛列表
 * @param {*} param 
 * @returns 
 */
export function getUserExamList(param) {
    return axios.get('/user/exam/getUserExamList', { params: param });
}