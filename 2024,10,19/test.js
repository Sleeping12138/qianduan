const express = require('express');

let app = express();

app.get('/test', (req, res) => {
    const callback = req.query.callback;
    const ret = {
        name: 'zhangsan',
        age: 18
    }
    res.jsonp(ret)
})

app.all('/fetch', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.send('hello fetch');
})

app.listen(9000, () => {
    console.log('9000端口已经启动...');
})














