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

export function addQuestion(param) {
    return axios.post('/question/addQuestion', param);
}

export function getDetailById(questionId) {
    return axios.get('/question/getDetailById', { params: { questionId: questionId } });
}

export function changeQuestionInfo(params = {}) {
    return axios.post('/question/changeQuestionInfo', params);
}

export function deleteQuestion(questionId) {
    return axios.get('/question/deleteQuestion', { params: { questionId: questionId } })
}