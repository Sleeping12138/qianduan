import axios from 'axios';

const http = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
})

axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default http;