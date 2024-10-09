// 创建mysql连接
/**
 * 导入mysql包
 * 初始化mysql数据库
 * 创建连接
 * sql操作
 * 断开连接
 */

// const mysql = require('mysql');

// let connect = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'woshizjy12138',
//     database: 'test01'
// })

// connect.connect((err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('连接成功...');
//     }
// });

// connect.query("INSERT INTO exam VALUES (9,'李四',70,80,70);", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

// connect.end();

// 进行删除操作

// const mysql = require('mysql');

// let connect = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'woshizjy12138',
//     database: 'test01'
// })

// connect.connect();

// connect.query("DELETE FROM exam WHERE name = '张三';", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

// connect.end();

// 使用session连接mysql数据库并进行操作

const express = require('express');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const mysql = require('mysql');
const api = require('./api.js');

let app = express();
app.use(express.json())


const options = {
    host: '127.0.0.1',
    user: 'root',
    password: 'woshizjy12138',
    database: 'test01'
};

const sessionStore = new MySQLStore(options);

// 使用完了之后在req中就会有session了
app.use(session({
    name: 'zzz',
    secret: '123456',
    store: sessionStore,
    resave: true,
    saveUninitialized: false
}));

app.get('/test', (req, res) => {
    if (req.query.name === 'zhangsan' && req.query.age === '18') {
        req.session.name = 'zhangsan';
        req.session.age = '18';
        res.send('yes');
    } else {
        res.send('no');
    }
})

app.use(api);

app.listen(9000, () => {
    console.log('9000端口已经启动...');
})











