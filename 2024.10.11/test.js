// const cookieParser = require('cookie-parser')
// const express = require('express');
// const session = require('express-session')
// const jwt = require('jsonwebtoken');

// let app = express();
// app.use(cookieParser());


// app.use(session({
//     name: 'test',
//     secret: '123456',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         httpOnly: true,
//         maxAge: 60 * 1000
//     }
// }))



// // app.get('/test', (req, res) => {
// //     // 生命周期一直到关闭浏览器
// //     // res.cookie('name', 'zhangsan');

// //     // res.cookie('name', 'zhangsan', { maxAge: 60 * 1000 })
// //     // 删除cookie
// //     // res.clearCookie('name')

// //     console.log(req.cookies.name);
// //     res.send('hello world')
// // })

// app.get('/test', (req, res) => {
//     req.session.name = 'zhangsan',
//         req.session.age = '18',
//         res.send('hello world');
// })

// app.get('/source', (req, res) => {
//     console.log(req.session.name);
//     console.log(req.session.age);
//     res.send('get source');
// })

// app.get('/remove', (req, res) => {
//     req.session.destroy((err) => {
//         if (err) console.log(err);
//     })
//     res.send('delete source');
// })

// app.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })

const express = require('express');
const jwt = require('jsonwebtoken');

// 设置token
let ret = jwt.sign({
    name: 'zhangsan'
}, '123456', {
    expiresIn: 60
})

console.log(ret);

// 解析token
jwt.verify(ret, "123456", (err, data) => {
    if (err) console.log(err);
    console.log(data);
})




















