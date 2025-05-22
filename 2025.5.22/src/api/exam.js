import axios from '@/utils/require.js';

/**
 * 获取竞赛列表
 * @param {*} param 
 * @returns 
 */
export function getExamList(param) {
    return axios.get('/exam/getExamList', { params: param });
}


/**
 * 添加竞赛
 * @param {*} data 
 * @returns 
 */
export function addExam(data) {
    return axios.post('/exam/addExam', data);
}


/**
 * 添加竞赛相关题目
 * @param {*} data 
 * @returns 
 */
export function addExamQuestion(data) {
    return axios.post('/exam/addExamQuestion', data);
}


/**
 * 获取竞赛详细信息
 * @param {*} param 
 * @returns 
 */
export function getExamDetail(param) {
    return axios.get('/exam/getExamDetail', { params: param });
}


/**
 * 保存修改之后的数据
 * @param {*} param 
 * @returns 
 */
export function editExamDetail(param) {
    return axios.post('/exam/editExamDetail', param);
}


/**
 * 删除竞赛的某个题目
 * @param {*} examId 
 * @param {*} questionId 
 * @returns 
 */
export function deleteQuestion(examId, questionId) {
    return axios.delete('/exam/deleteQuestion', { params: { examId, questionId } });
}


/**
 * 删除竞赛
 * @param {*} examId 
 * @returns 
 */
export function deleteExam(examId) {
    return axios.delete('/exam/deleteExam', { params: { examId: examId } });
}


/**
 * 发布竞赛
 * @param {*} examId 
 * @returns 
 */
export function publishExam(examId) {
    return axios.put('/exam/publishExam', null, { params: { examId: examId } });
}


/**
 * 撤销发布
 * @param {*} examId 
 * @returns 
 */
export function cancelPublishExam(examId) {
    return axios.put('/exam/cancelPublishExam', null, { params: { examId: examId } });
}