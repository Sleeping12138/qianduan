const express = require('express');

let exp = express.Router();

exp.get('/get', (req, res) => {
    let query = req.query;
    res.json({
        code: 0,
        msg: '成功',
        data: query
    })
})


exp.post('/post', (req, res) => {
    let body = req.body;
    res.json({
        code: 0,
        msg: '请求获取成功',
        data: body
    })
})

module.exports = exp;

