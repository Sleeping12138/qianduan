import axios from '@/utils/request.js';

/**
 * 获取用户消息列表
 * @param {*} data 
 * @returns 
 */
export function getUserMessageList(data) {
    return axios.get('/message/getUserMessageList', data);
}