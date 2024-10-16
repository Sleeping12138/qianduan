const express = require('express');

let app = express();

app.get('/server', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('hello world');
})
app.post('/server', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('hello Ajax post');
})

let ret = {
    name: "zhangsan",
    age: 18
}
app.get('/json-server', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let str = JSON.stringify(ret);
    res.send(str);
})
app.get('/delay', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        res.send('hello world');
    }, 3000);
})
app.listen(9000, () => {
    console.log('9000服务已经启动...');
})











