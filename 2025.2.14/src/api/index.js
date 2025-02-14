import request from '../utils/axios.js';

export default {
    login(data) {
        return request.post('/api/login', data);
    }
}