var express = require('express');
var md5 = require('md5');
var router = express.Router();
const mysql = require(__dirname + '/../../db/db.js');

router.get('/reg', (req, res) => {
    res.render('auth/reg')
})

router.post('/reg', (req, res) => {
    let sql = "INSERT INTO user1 (name,password) VALUES (?,?);";
    let { username, password } = req.body;
    mysql.query(sql, [username, md5(password)], (err, data) => {
        if (err) {
            console.error('数据库插入错误:', err)
            res.status(500).send('注册失败...');
            return;
        }
        res.render('success', { msg: '注册成功', url: "/login" })
    })
})

router.get('/login', (req, res) => {
    res.render('auth/login')
})

router.post('/login', (req, res) => {
    let { username, password } = req.body;
    let sql = "SELECT * FROM user1 WHERE name = ? AND password = ?;"
    mysql.query(sql, [username, password], (err, data) => {
        if (err) {
            res.status(500).send('登录失败...');
            return;
        }
        if (!data) {
            return res.send('用户或密码错误...');
        }

        req.session.username = data[0].username;
        req.session.password = data[0].password;

        res.render('success', { msg: '登录成功', url: "/account" })
    })
})

module.exports = router;