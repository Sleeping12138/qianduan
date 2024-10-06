// const express = require('express');
// const bodyParser = require('body-parser')

// let exp = express();

// // 请求体为json格式
// var jsonParser = bodyParser.json()

// // 请求体为queryString格式
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// exp.get('/login', (req, res) => {
//     res.sendFile(__dirname + "/login.html");
// })
// exp.post('/login', urlencodedParser, (req, res) => {
//     res.send(req.body);
// })

// exp.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })

// const express = require('express');

// let exp = express();

exp.use((req, res, next) => {
    let referer = req.get('referer');
    if (referer) {
        let url = new URL(referer);
        // 防盗链的本质就是检查主机名
        if (url.hostname != '127.0.0.1') {
            res.status(404).send('<h2>404 Not Found!!!</h2>');
            return;
        }
    }
    next();
})

// exp.use(express.static(__dirname + '/image'))

// exp.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })

// 路由模块化

// const express = require('express');

// let exp = express();

// exp.get('/test', (req, res) => {

//     console.log(req.method);
//     console.log(req.url);
//     console.log(req.httpVersion);
//     console.log(req.headers);
//     console.log(req.path);
//     console.log(req.query);
//     console.log(req.get('host'));



//     res.send('hello world');
// })

// exp.listen(9000, () => {
//     console.log('9000端口已经启动...');
// })

const express = require('express');

let exp = express();

app.use(express.static('静态资源目录的地址'));

exp.get('/test', (req, res) => {

    console.log(res.statusCode);
    console.log(res.statusMessage);
    console.log(res.setHeader);
    res.send();
    res.end();

    console.log(res.status);
    res.set()
    res.redirect();
    res.download();
    res.json();
    res.sendFile()



    res.send('hello world');
})

exp.listen(9000, () => {
    console.log('9000端口已经启动...');
})















