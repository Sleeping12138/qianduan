// path模块
// const path = require('path');

// let temp = path.resolve(__dirname + '/test.js');

//从右向左找到第一个绝对路径拼接
// let temp = path.resolve(__dirname, './hello.html');
// console.log(temp);

// const path = require('path');

// // 拼接的路径更标准
// // let temp = path.resolve(__dirname, './test.js');
// // console.log(temp);

// // console.log(path.sep);
// let temp = path.resolve(__dirname, './test.js');
// // let ret = path.parse(temp);
// // console.log(ret.ext);
// // console.log(path.basename(temp));

// console.log(path.extname(temp).slice(1));

// 导入http包
const http = require('http');

// 创建服务
let server = http.createServer((require, response) => {
    response.end('hello world');
})

// 绑定端口 + 启动服务
server.listen(9000, () => {
    console.log('9000端口已经启动...');
})

// 获取url中的路径以及查询字符串
// const http = require('http');
// const url = require('url');

// let server = http.createServer((require, response) => {
//     let temp = url.parse('http://127.0.0.1' + require.url, true);
//     console.log(temp.pathname);
//     console.log(temp.query.keyword);
//     console.log(temp.query.name);

//     response.end('hello world');
// })

// server.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })

// const http = require('http');

// let server = http.createServer((require, response) => {
//     let ret = new URL(require.url, 'http://127.0.0.1', true);
//     // console.log(ret);

//     console.log(ret.searchParams.get("keyword"));
//     console.log(ret.searchParams.get("name"));

//     response.end('hello world');
// })

// server.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })

// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// let server = http.createServer((require, response) => {
//     let root = path.resolve(__dirname, '..');
//     let url = new URL(require.url, 'http://127.0.0.1');
//     let temp = url.pathname;
//     let p = root + temp;

//     fs.readFile(p, (err, data) => {
//         if (err) {
//             console.log('读取失败');
//             return;
//         }
//         response.end(data);
//     })
// })

// server.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })




















