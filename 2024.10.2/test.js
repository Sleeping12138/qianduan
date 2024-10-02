// const fs = require('fs');
// fs.writeFileSync('./test', 'hello world');
// console.log('finish');

// const path = require('path');
// // console.log(path.resolve(__dirname, './test.js'));
// console.log(path.resolve(__dirname, 'test.js'));

// const path = require('path');
// console.log(path.sep);

// const path = require('path');
// // 解析路径并返回对象
// let temp = path.parse(path.resolve(__dirname, 'test.js'));
// console.log(temp);
// console.log(path.basename(path.resolve(__dirname, 'test.js')));

// 创建HTTP服务
// const http = require('http');
// let server = http.createServer((require, response) => {
//     response.end('hello world');
// })

// server.listen(9000, () => {
//     console.log("9000端口正在执行中...");
// })

// const http = require('http');

// let server = http.createServer((require, response) => {
//     response.setHeader('content-type', 'text/html;charset=utf-8');
//     response.end('你好!!!');
// })

// server.listen(9000, () => {
//     console.log("9000端口正在运行中...");
// })

// const http = require('http');

// let server = http.createServer((require, response) => {
//     response.end('hello world');
// })

// server.listen(9000, () => {
//     console.log('9000端口开始使用...');
// })

// 请求报文的获取
// const http = require('http');

// let server = http.createServer((require, response) => {
//请求报文的内容获取
// console.log(require.method);

// 只有路径和查询字符
// console.log(require.url);

// console.log(require.headers);

//     console.log(require.httpVersion);

//     response.end('hello world');
// })

// server.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })

// const http = require('http');

// let server = http.createServer((require, response) => {
//     let body = '';
//     require.on('data', chunk => {
//         body += chunk;
//     })
//     require.on('end', () => {
//         console.log(body);

//         // 绑定响应体
//         response.end('hello world');
//     })
// })

// server.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })

//第一种获取url的方式
// const http = require('http');
// const url = require('url');

// let server = http.createServer((require, response) => {
//     // console.log(require.url);

//     // 先解析url
//     let ret = url.parse(require.url, true);
//     console.log(ret);

//     // 返回不同的数据
//     console.log(ret.pathname);
//     console.log(ret.query.keyword);
//     console.log(ret.query.name);





//     response.end('hello world');
// })

// server.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })

// 第二种方式（推荐使用）
// const http = require('http');

// let server = http.createServer((require, response) => {
//     //使用URL对象进行获取
//     let url = new URL(require.url, 'http://127.0.0.1');
//     // console.log(url1);
//     console.log(url.pathname);

//     console.log(url.searchParams.get('keyword'));
//     // 需要使用get方法
//     console.log(url.searchParams.get('name'));

//     response.end('hello world');
// })

// server.listen(9000, () => {
//     console.log('9000端口已经开启...');
// })


// const http = require('http');

// let server = http.createServer((require, response) => {
//     response.setHeader('content-type', 'text/html;charset=utf-8');

//     let md = require.method;
//     let url = new URL(require.url, 'http://127.0.0.1');
//     let pathname = url.pathname;

//     if (md === 'GET' && pathname === '/login') {
//         response.end('登录界面');
//     } else if (md === 'GET' && pathname === '/reg') {
//         response.end('注册页面');
//     } else {
//         response.end('Not Found');
//     }
// })

// server.listen(9000, () => {
//     console.log('9000端口已经启动....');
// })

// 相应报文的设置
// const http = require('http');

// let server = http.createServer((require, response) => {
//     // 状态码的设置
//     response.statusCode = 200;

//     // 状态描述
//     response.statusMessage = 'okokok';

//     // 设置相应头
//     response.setHeader('content-type', 'text/html;charset=utf-8');
//     // response.setHeader('hahaha', 'hahaha')

//     // 设置响应体
//     response.write('hello')
//     response.write('the')
//     response.write('world')
//     response.end('欢迎来到我的世界');
//     // response.end('hello world');
// })

// server.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })

const http = require('http');
const fs = require('fs');

let server = http.createServer((require, response) => {
    // 添加的时候不要添加.
    let ret = fs.readFileSync(__dirname + '/practice.html');
    response.end(ret);
})

server.listen(9000, () => {
    console.log('9000端口开始运行...');
})





