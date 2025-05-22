import axios from '@/utils/require.js';

/**
 * 获取题目列表
 * @param {*} param 
 * @returns 
 */
export function getQuestionList(param) {
    return axios.get('/question/getQuestionList', {
        params: param
    })
}


/**
 * 添加题目
 * @param {*} param 
 * @returns 
 */
export function addQuestion(param) {
    return axios.post('/question/addQuestion', param);
}


/**
 * 获取题目详细信息
 * @param {*} questionId 
 * @returns 
 */
export function getDetailById(questionId) {
    return axios.get('/question/getDetailById', { params: { questionId: questionId } });
}


/**
 * 修改题目信息
 * @param {*} params 
 * @returns 
 */
export function changeQuestionInfo(params = {}) {
    return axios.post('/question/changeQuestionInfo', params);
}


/**
 * 删除题目
 * @param {*} questionId 
 * @returns 
 */
export function deleteQuestion(questionId) {
    return axios.get('/question/deleteQuestion', { params: { questionId: questionId } })
}