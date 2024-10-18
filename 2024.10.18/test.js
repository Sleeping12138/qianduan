const express = require('express');

let app = express();

app.all('/test', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.send('hello world');
})

app.get('/delay', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        res.end('hello world');
    }, 4000);
})

app.get('/jQuery', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('hello jQuery');
})

let obj = {
    name: 'zhangsan',
    age: 18
}

app.post('/jQuery-post', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(JSON.stringify(obj));
})

app.get('/axios', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.send('hello world');
})

app.all('/axios', (req, res) => {
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('hello world');
})

app.listen(9000, () => {
    console.log('9000端口已经启动...');
})
















