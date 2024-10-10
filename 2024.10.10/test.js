// fs模块
// 文件的写入
// const fs = require('fs');

// // 使用异步的方式
// fs.writeFile('./text', 'hello world', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('写入成功...');
//     }
// })

// 同步的方式
// const fs = require('fs');

// fs.writeFileSync('./text', 'hello node.js');

// 使用写入流
// const fs = require('fs');

// let stream = fs.createWriteStream('./text');

// stream.write('hello\r\n');
// stream.write('the\r\n');
// stream.write('world\r\n');

// stream.close();

// 追加
// const fs = require('fs');

// fs.appendFileSync('./text', '?????');

// 文件的读取
// const fs = require('fs');
// fs.readFile('./text', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// console.log('over');

// const fs = require('fs');

// let ret = fs.readFileSync('./text');
// console.log(ret.toString());

// const fs = require('fs');

// let stream = fs.createReadStream('./text');

// stream.on('data', data => {
//     console.log(data.toString());
// })

// stream.on('end', () => {
//     console.log('over');
// })

// 文件的删除
// const fs = require('fs');
// fs.unlink('./text', err => {
//     if (err) console.log(err);

//     console.log('over');
// });


// 推荐使用rm
// const fs = require('fs');

// fs.rm('./text', (err) => {
//     if (err) console.log(err);
//     console.log('over');
// })

// const fs = require('fs');

// // 使用异步的方式
// fs.writeFile('./text', 'hello world', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('写入成功...');
//     }
// })

// const fs = require('fs');

// fs.renameSync
// fs.rename('./text', '../text.plus', err => {
//     if (err) console.log(err);
//     console.log('over');
// })

// 文件夹操作
// const fs = require('fs');

// fs.mkdir('./temp1', err => {
//     if (err) console.log(err);
//     console.log('over');
// })

// const fs = require('fs');
// fs.rmdir('./temp1', err => {
//     if (err) console.log(err);
//     console.log('over');
// })


// 推荐使用rm
// const fs = require('fs');

// // fs.mkdirSync('./a/b/c', { recursive: true });
// // console.log('over');
// fs.rm('./a', { recursive: true }, err => {
//     if (err) console.log(err);
// });

// const fs = require('fs');

// let ret = fs.readdirSync(__dirname);
// console.log(ret);

// const fs = require('fs');

// let ret = fs.statSync('../text.plus');
// console.log(ret);

// const path = require('path');
// // 拼接路径
// // let ret = path.resolve(__dirname, './test.js');

// // let ret = path.sep;
// let ret = path.parse(__dirname + '/test.js');
// console.log(ret);

// const http = require('http');

// let server = http.createServer((req, res) => {
//     res.end('hello world');
// })

// server.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })


// const http = require('http');
// const url = require('url');

// let server = http.createServer((req, res) => {
//     let u = new URL(req.url, 'http://127.0.0.1');
//     console.log(u.pathname);
//     console.log(u.query);
//     res.end('hello node.js');
// })

// server.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })


// 获取url中的路径和查询字符串
// const http = require('http');
// const url = require('url');

// let server = http.createServer((req, res) => {
//     // 添加true可以将query中的属性分开
//     let u = url.parse(req.url, true);
//     console.log(u.pathname);
//     console.log(u.query.name);
//     res.end('hello node.js');
// })

// server.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })


// const http = require('http');

// let server = http.createServer((req, res) => {
//     let url = new URL(req.url, 'http://127.0.0.1');
//     console.log(url.pathname);
//     console.log(url.searchParams.get('name'));
//     res.end('hello world');
// })

// server.listen(9000, () => {
//     console.log('9000端口已经启动....');
// })

// const http = require('http');

// let server = http.createServer((req, res) => {
//     // 解决中文乱码的问题
//     // res.setHeader('content-type', 'text/html;charset=utf-8');
//     res.setHeader('content-type', 'text/html;charset=utf-8');
//     res.end('你好世界');
// })

// server.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })
// const http = require('http');

// let server = http.createServer((req, res) => {
//     // 解决中文乱码的问题
//     // res.setHeader('content-type', 'text/html;charset=utf-8');
//     res.setHeader('content-type', 'text/html;charset=utf-8');
//     res.end('你好世界');
// })

// server.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })

// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// let server = http.createServer((req, res) => {
//     // 设置MIME类型
//     res.setHeader('content-type', 'text/html')
//     let url = new URL(req.url, 'http://127.0.0.1');
//     console.log(url.pathname);
//     console.log(__dirname, './' + url.pathname.split(0));
//     // 将文件读取到响应体中
//     // res.end(fs.readFileSync(path.resolve(__dirname, url.pathname)));
//     res.end('hello world');
// })

// server.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })


// 模块化
// const express = require('express');
// const route = require('./route.js');
// const api = require('./api.js');


// let app = express();
// app.use(express.json());
// app.use(route);
// app.use(api);

// app.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })

// express 框架的基本使用
// const express = require('express');

// let app = express();

// app.get('/test', (req, res) => {
//     res.send('hello test');
// })

// app.post('/home', (req, res) => {
//     res.send('hello home')
// })

// app.listen(3000, () => {
//     console.log('9000端口已经启动...');
// })

// 报文内容的获取
// const express = require('express');
// const bodyParser = require('body-parser')
// let app = express();
// app.use(express.json())

// app.get('/test', (req, res) => {
//     // console.log(req.method);
//     // console.log(req.url);
//     // console.log(req.path);
//     // console.log(req.query);
//     // console.log(req.httpVersion);
//     // console.log(req.headers);
//     // console.log(req.body);

//     console.log(res.status());
//     console.log(res.statusMessage);
//     console.log(res.setHeader());



//     res.send('test');
// })

// app.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })

// const express = require('express');

// let app = express();

// app.get('/:id/test', (req, res) => {
//     // 获取路由参数
//     res.send(req.params.id);
// })

// app.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })

// const express = require('express');
// let examine = (req, res, next) => {
//     if (req.params.id === '10000') {
//         res.send('YES');
//     } else {
//         next();
//     }
// }

// let app = express();

// app.use(examine);

// app.get('/:id/test', (req, res) => {
//     // 获取路由参数
//     res.send(req.params.id);
// })

// app.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })

// const express = require('express');

// // let examine = (req, res, next) => {
// //     if (req.params.id === '10000') {
// //         return res.send('YES'); // 直接返回响应
// //     }
// //     next(); // 继续处理其他路由
// // };

// let app = express();

// // 全局中间件
// // app.use(examine);
// app.use(express.static(__dirname));

// // 路由处理
// app.get('/:id/test', (req, res) => {
//     // 仅在 examine 中间件没有响应时，这里会被调用
//     res.send(req.params.id);
// });

// app.listen(9000, () => {
//     console.log('9000端口已经启动...');
// });
// let arr = ['A', 'B', 'C', 'D'];
// const express = require('express');
// let app = express();

// app.set('view engine', 'ejs');
// app.set('views', __dirname);

// app.get('/test', (req, res) => {
//     res.render('./test.ejs', { item: arr });
// });

// app.listen(9000, () => {
//     console.log('9000端口已经启动...');
// });

// let arr = ['A', 'B', 'C', 'D'];
// const express = require('express');

// let app = express();

// // 必须设置视图引擎
// app.set('view engine', 'ejs');
// // 必须指定视图的资源目录
// app.set('views', __dirname);

// app.get('/home', (req, res) => {
//     // 直接写文件的名称
//     res.render('test.ejs', { arr: arr });
// })

// app.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })

// 对数据库的连接
// const mysql = require('mysql');

// let connect = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'woshizjy12138',
//     database: 'test01'
// })

// connect.connect(err => {
//     if (err) console.log(err);
//     console.log('连接成功...');
// });

// connect.end();

// const mysql = require('mysql');

// let connect = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'woshizjy12138',
//     database: 'test01'
// })

// connect.connect();

// // connect.query("INSERT INTO exam VALUES (8,'zhangsan',80,90,70);", (err, data) => {
// //     if (err) console.log(err);
// //     console.log(data);
// // })

// connect.query("DELETE FROM exam WHERE name = 'zhangsan'", (err, data) => {
//     if (err) console.log(err);
//     console.log(data);
// })

// connect.end();


const express = require('express');
const api = require('./api.js');

let app = express();

app.use(api);

app.listen(9000, () => {
    console.log('9000端口启动...');
})