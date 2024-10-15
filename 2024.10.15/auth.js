var express = require('express');
var md5 = require('md5');
const jwt = require('jsonwebtoken');
var router = express.Router();
const mysql = require(__dirname + '/../../db/db.js');


router.post('/login', (req, res) => {
    let { username, password } = req.body;
    let sql = "SELECT * FROM user1 WHERE name = ? AND password = ?;"
    mysql.query(sql, [username, password], (err, data) => {
        if (err) {
            res.json({
                code: '2000',
                msg: '数据库错误',
                data: null
            })
            return;
        }
        if (!data) {
            res.json({
                code: '2001',
                msg: '用户名或错误',
                data: null
            })
            return;
        }

        let token = jwt.sign({
            "username": data[0].name,
            "password": data[0].password
        }, "12345", {
            expiresIn: 60 * 60 * 24 * 7
        })

        res.json({
            code: '0000',
            msg: '登录成功',
            data: token
        })
    })
})

router.post('/logout', (req, res) => {
    req.session.destroy(() => {
        res.render('success', { msg: '退出成功', url: "/login" })
    })
})

module.exports = router;