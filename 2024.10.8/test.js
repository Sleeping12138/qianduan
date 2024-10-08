// const express = require('express');
// const api = require('./api.js');

// let app = express();

// app.use(express.json())
// app.use(express.urlencoded())


// app.use(api);

// app.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })

const express = require('express');
const cookieParser = require('cookie-parser');

let app = express();

app.use(cookieParser());

app.get('/test', (req, res) => {
    // res.cookie('name', 'zhangsan');
    res.cookie("name", 'zhangsan');
    res.send("hello world");
})

app.get('/test-rm', (req, res) => {
    // res.cookie('name', 'zhangsan');
    res.clearCookie("name");
    res.send("delete");
})

app.get('/test-get', (req, res) => {
    // res.cookie('name', 'zhangsan');
    console.log(req.cookies);
    res.send(`welcome ${req.cookies.name}`);
})

app.listen(9000, () => {
    console.log('9000端口已经启动...');
})













