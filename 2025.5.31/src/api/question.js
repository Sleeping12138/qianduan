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


/**
 * 获取上一题
 * @param {*} data 
 * @returns 
 */
export function preQuestion(data) {
    return axios.get('/question/preQuestion', { params: data });
}


/**
 * 获取下一题
 * @param {*} data 
 * @returns 
 */
export function nextQuestion(data) {
    return axios.get('/question/nextQuestion', { params: data });
}