// const http = require('http');
// const fs = require('fs');

// let server = http.createServer((require, response) => {
//     let url = new URL(require.url, 'http://127.0.0.1');
//     let path = url.pathname;
//     if (path === '/') {
//         let temp = fs.readFileSync('./practice.html');
//         response.end(temp);
//     } else if (path === '/practice.css') {
//         let temp = fs.readFileSync('./practice.css');
//         response.end(temp);
//     } else if (path === '/practice.js') {
//         let temp = fs.readFileSync('./practice.js');
//         response.end(temp);
//     } else {
//         response.end('404 Not Found');
//     }
// })

// server.listen(9000, () => {
//     console.log('9000端口已经启动....');
// })


const fs = require('fs');
const http = require('http');

let server = http.createServer((require, response) => {
    let url = new URL(require.url, 'http://127.0.0.1');
    let path = url.pathname;
    if (path === '/') {
        let temp = fs.readFileSync('./practice.html');
        response.end(temp);
    } else {
        // 就是因为路径和文件名重复可以进行化简
        // 没有.

        // 静态文件目录 、 网页根目录
        let root = __dirname;
        let newPath = root + path;

        // 使用读取的方式进行CV
        fs.readFile(newPath, (err, data) => {
            if (err) {
                console.log('读取失败');
                return;
            }
            response.end(data);
        })
    }
})

server.listen(9000, () => {
    console.log('9000端口已经启动...');
})















