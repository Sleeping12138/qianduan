// 使用Promise来执行fs模块

// const fs = require('fs');
// let p = new Promise((resolve, reject) => {
//     // 将异步操作包裹在Promise对象中
//     fs.readFile('./text', (err, data) => {
//         if (err) reject(err);
//         else {
//             resolve(data);
//         }
//     })
// });
// // 对其进行处理
// p.then(value => {
//     console.log(value.toString());
// }, reason => {
//     console.log(reason);
// })

// const express = require('express');

// let app = express();

// app.get('/test', (req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.send('hello Promise');
// })

// app.listen(9000, () => {
//     console.log('连接成功...');
// })
// const fs = require('fs');
// function getFs(path) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }

// getFs('./text').then(value => {
//     console.log(value.toString());
// }, reason => {
//     console.log(reason);
// })

// const util = require('util');
// const fs = require('fs');

// let getPromiseOfFs = util.promisify(fs.readFile);
// getPromiseOfFs('./text').then(value => {
//     console.log(value.toString());
// }, reason => {
//     console.log(reason);
// })


// resolve \ reject \ all
let p = Promise.resolve('iloveyou')
console.log(p);













