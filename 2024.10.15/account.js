var express = require('express');
const moment = require('moment');
const mysql = require(__dirname + '/../../db/db.js');
const jwt = require('jsonwebtoken');
var router = express.Router();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync(__dirname + '/../../data/db.json')
const db = low(adapter)

let examTokenMiddle = require('../../middleware/examTokenMiddle');

router.get('/account', examTokenMiddle, (req, res) => {
    let sql = "SELECT * FROM node;";
    mysql.query(sql, (err, data) => {
        if (err) {
            res.json({
                code: '1001',
                msg: '获取失败...',
                data: null
            })
        } else {
            res.json({
                code: '0000',
                msg: '获取成功...',
                data: data
            })
        }
    })
});

router.post('/account', examTokenMiddle, (req, res) => {
    let { title, time, type, account, remarks } = req.body;
    time = moment(time).toDate();
    let sql = "INSERT INTO node (title,time,type,account,remarks) VALUES (?,?,?,?,?);"
    mysql.query(sql, [title, time, type, account, remarks], (err, data) => {
        if (err) {
            res.json({
                code: '1002',
                msg: '新增失败...',
                data: null
            })
            return;
        } else {
            res.json({
                code: '0000',
                msg: '新增成功...',
                data: data
            })
        }
    })
});

router.delete('/account/:id', examTokenMiddle, (req, res) => {
    let param = req.params.id;
    let sql = "DELETE FROM node WHERE id = ?";
    mysql.query(sql, [param], (err, data) => {
        if (err) {
            res.json({
                code: '1003',
                msg: '删除失败...',
                data: null
            })
            return;
        }
        res.json({
            code: '0000',
            msg: '删除成功...',
            data: {}
        })
    })
})

router.get('/account/:id', examTokenMiddle, (req, res) => {
    let id = req.params.id;
    let sql = "SELECT * FROM node WHERE id = ?;";
    mysql.query(sql, [id], (err, data) => {
        if (err) {
            res.json({
                code: '1003',
                msg: '获取指定id数据失败...',
                data: null
            })
        }
        res.json({
            code: '0000',
            msg: '获取指定id数据成功...',
            data: data
        })
    })
})

router.patch('/account/:id/:price', examTokenMiddle, (req, res) => {
    let id = req.params.id;
    let price = req.params.price;
    let sql = "UPDATE node set account = ? WHERE id = ?;";
    mysql.query(sql, [price, id], (err, data) => {
        if (err) {
            res.json({
                code: '1004',
                msg: '修改指定id数据失败...',
                data: null
            })
        } else {
            let sql = "SELECT * FROM node WHERE id = ?;";
            mysql.query(sql, [id], (err, data) => {
                if (err) {
                    res.json({
                        code: '1003',
                        msg: '获取指定id数据失败...',
                        data: null
                    })
                }
                res.json({
                    code: '0000',
                    msg: '修改指定id数据成功...',
                    data: data
                })
            })
        }
    })
})

module.exports = router;
