import axios from '@/utils/request.js';


/**
 * 获取题目列表
 * @param {*} param 
 * @returns 
 */
export function getQuestionList(param) {
    return axios.get('/question/semiLogin/getQuestionList', { params: param });
}


/**
 * 获取题目详细信息
 * @param {*} questionId 
 * @returns 
 */
export function getQuestionInfo(data) {
    return axios.get('/question/getQuestionInfo', { params: data });
}