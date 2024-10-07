// const mysql = require('mysql');
// const express = require('express');

// let exp = express();

// const connect = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'woshizjy12138',
//     database: 'test01'
// })

// connect.connect(err => {
//     console.log(err, '如果为null 就是连接成功');
// })

// exp.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })
// 导包
// const mysql = require('mysql');

// // 初始化连接
// let connect = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'woshizjy12138',
//     database: 'test01'
// })

// // 开启连接
// connect.connect((err) => {
//     if (err) {
//         console.log('连接失败');
//     } else {
//         console.log('连接成功');
//     }
// })

// // 关闭连接
// connect.end();

// 数据库的连接
// const mysql = require('mysql');

// let connect = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'woshizjy12138',
//     database: 'test01'
// })

// connect.connect((err) => {
//     if (err) {
//         console.log('连接失败');
//     } else {
//         console.log('连接成功');
//     }
// })

// connect.query("select * from exam", (err, ret) => {
//     if (err) {
//         console.log('错误');
//         return;
//     } else {
//         console.log(ret);
//     }
// })

// let sql = "INSERT INTO exam VALUES (8,'张三',80,90,70)";
// connect.query(sql, (err, ret) => {
//     if (err) {
//         console.log(err);
//         return;
//     } else {
//         console.log(ret);
//     }
// });

// let sql = "insert into exam value (?,?,?,?,?);";
// let params = [8, '李四', 70, 60, 80];
// connect.query(sql, params, (err, ret) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(ret);
//     }
// })


// connect.query("DELETE FROM exam WHERE name = '李四';", (err, ret) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(ret);
//     }
// })

// connect.end();

const mysql = require('mysql');

let connect = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'woshizjy12138',
    database: 'test01'
})

connect.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log('连接成功');
    }
});

let sql = "INSERT INTO exam VALUES (8,'张三',80,90,70)";
connect.query(sql, (err, ret) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log(ret);
    }
});

connect.end();






