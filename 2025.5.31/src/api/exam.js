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


/**
 * 获取竞赛的第一道题目
 * @param {*} data 
 * @returns 
 */
export function getQuestionOfFirst(data) {
    return axios.get('/exam/getQuestionOfFirst', { params: data })
}


/**
 * 获取竞赛的上一道题目
 * @param {*} examId 
 * @param {*} questionId 
 * @returns 
 */
export function examPreQuestion(examId, questionId) {
    return axios.get('/exam/preQuestion', { params: { examId, questionId } });
}


/**
 * 获取竞赛的下一道题目
 * @param {*} examId 
 * @param {*} questionId 
 * @returns 
 */
export function examNextQuestion(examId, questionId) {
    return axios.get('/exam/nextQuestion', { params: { examId, questionId } });
}


/**
 * 获取竞赛排名列表
 * @param {*} data 
 * @returns 
 */
export function getExamRankInfo(data) {
    return axios.get('/exam/getExamRankInfo', data);
}