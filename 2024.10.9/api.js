const express = require('express');
const session = require('express-session');

let api = express.Router();

api.get('/get', (req, res) => {
    if (req.session.name && req.session.age) {
        res.json({
            code: '0000',
            msg: '获取成功',
            data: req.session
        })
    } else {
        res.send('error');
    }
})

api.get('/delete', (req, res) => {
    req.session.destroy(() => {
        console.log('删除成功..');
    });
    res.send('delete');
})

module.exports = api;