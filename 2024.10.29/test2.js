const axios = require('axios');

axios({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
})
    .then(response => {
        console.log('GET 请求响应数据：', response.data);
    })
    .catch(error => {
        console.error('GET 请求错误：', error.message);
    });

axios({
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: {
        title: 'New Post',
        body: 'This is a new post.',
        userId: 1
    }
})
    .then(response => {
        console.log('POST 请求响应数据：', response.data);
    })
    .catch(error => {
        console.error('POST 请求错误：', error.message);
    });