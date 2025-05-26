import axios from '@/utils/request.js';


/**
 * 获取题目列表
 * @param {*} param 
 * @returns 
 */
export function getQuestionList(param) {
    return axios.get('/question/semiLogin/getQuestionList', { params: param });
}