import axios from '@/utils/require.js';

export function getExamList(param) {
    return axios.get('/exam/getExamList', { params: param });
}

export function addExam(data) {
    return axios.post('/exam/addExam', data);
}

export function addExamQuestion(data) {
    return axios.post('/exam/addExamQuestion', data);
}