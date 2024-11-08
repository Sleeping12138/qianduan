const express = require('express');

let app = express();

app.get('/test', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(temp);
})

app.listen(9000, () => {
    console.log('9000端口已经启动...');
})

let temp = {
    name: 'zhangsan',
    age: 18
}