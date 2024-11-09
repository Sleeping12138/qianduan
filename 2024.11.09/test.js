const express = require('express');

let app = express();

app.get('/test', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.send('hello world');
})

app.listen(9000, () => {
    console.log('9000端口已经启动...');
})