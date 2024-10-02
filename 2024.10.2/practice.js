const http = require('http');
const fs = require('fs');

let server = http.createServer((require, response) => {

    // 使用读入文件的方式导入文件
    let ret = fs.readFileSync('./practice.html');
    response.end(ret);
})

server.listen(9000, () => {
    console.log('9000端口已经启动...');
})