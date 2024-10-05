// const express = require('express');

// // 创建应用对象
// let exp = express();

// // 创建路由
// exp.get('/home', (require, response) => {
//     response.end('hello home');
// })

// exp.post('/test', (require, response) => {
//     response.end('hello test');
// })

// // 用来最后兜底用的
// exp.all('*', (require, response) => {
//     response.end('hello *');
// })

// // 分配端口,开启
// exp.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })


// express中对请求头数据的获取
// const express = require('express');

// let exp = express();

// exp.get('/test', (request, response) => {
//     // console.log(request.method);
//     // console.log(request.url);
//     // console.log(request.httpVersion);
//     // console.log(request.headers);
//     // console.log(request.path);
//     // console.log(request.query);
//     console.log(request.get('host'));

//     response.send('hello test')
// })

// exp.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })

// const express = require('express');

// let exp = express();

// exp.get('/:id/test', (request, response) => {
//     // 路径中的动态部分就是路由参数
//     console.log(request.params.id);
//     response.end('hello world')
// })

// exp.listen(9000, () => {
//     console.log('9000端口已将启动...');
// })

// const package = require('./package.json');

// console.log(package);

// const express = require('express');

// let exp = express();

// exp.get('/test', (request, response) => {
//     // console.log(response.statusCode);
//     // console.log(response.statusMessage);
//     // console.log(response.setHeader('text', 'abc`'));
//     // // 会自动田间content-type
//     // response.send('你好')

//     response.status(404);
//     response.set('zjy', '123');
//     response.send('你好啊')
// })

// exp.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })

// express中的响应的其他方法
// const express = require('express');

// let exp = express();

// exp.get('/test', (request, response) => {
// response.redirect('http://www.baidu.com');
// response.download(__dirname + '/package.json')
// response.json({
//     "name": "express",
//     "version": "1.0.0",
//     "main": "index.js",
//     "scripts": {
//         "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "author": "",
//     "license": "ISC",
//     "description": "",
//     "dependencies": {
//         "express": "^4.21.0"
//     }
// })

//     response.sendFile(__dirname + '/index.html');
// })

// exp.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })

// const express = require('express');

// let exp = express();

// exp.get('/test', (request, response) => {
//     response.end();
// })

//全局中间件的使用
// const express = require('express');
// const fs = require('fs');
// const path = require('path');

// let exp = express();
// function recordMiddleware(req, res, next) {
//     let { url, ip } = req;
//     fs.appendFileSync(path.resolve(__dirname, './text.txt'), `${url}  ${ip}\r\n`);
//     // 继续接下来的路由回调
//     next();
// }

// // 定义完之后要使用中间件函数
// exp.use(recordMiddleware);


// exp.get('/test', (request, response) => {
//     response.send('hello test');
// })
// exp.get('/home', (request, response) => {
//     response.send('hello home');
// })
// exp.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })

// 路由中间件的使用
// const express = require('express');

// let exp = express();

// // 路由中间件直接在对应的地方进行使用即可
// function checkMiddleware(req, res, next) {
//     if (req.query.num === '521') {
//         next();
//     } else {
//         res.send('参数错误');
//     }
// }

// exp.get('/test', (request, response) => {
//     response.end('hello test');
// })

// exp.get('/admin', checkMiddleware, (request, response) => {
//     response.end('hello admin');
// })
// exp.get('/setting', checkMiddleware, (request, response) => {
//     response.end('hello setting');
// })

// exp.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })


const express = require('express');
const path = require('path');

let exp = express();

exp.get('/:id/test', (req, res) => {
    res.send(req.params.id);
})

exp.get('/', (request, response) => {
    response.send('hello java');
})

// 默认打开的静态资源是index.html
exp.use(express.static(path.resolve(__dirname, './source')));

exp.listen(9000, () => {
    console.log('9000端口已经启动...');
})














