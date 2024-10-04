// const index = require('./index.js');

// index.play();
// console.log(index.str);
// console.log(index);

const http = require('http');

let server = http.createServer((require, response) => {
    response.end('hello javascript');
})

server.listen(9000, () => {
    console.log('9000端口已经启动...');
})

// const http = require('http');










