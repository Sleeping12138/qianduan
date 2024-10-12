var express = require('express');
const moment = require('moment');
const mysql = require(__dirname + '/../../db/db.js');
var router = express.Router();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync(__dirname + '/../../data/db.json')
const db = low(adapter)

router.get('/account', function (req, res, next) {
  let sql = "SELECT * FROM node;";
  mysql.query(sql, (err, data) => {
    if (err) {
      res.status(500).send('数据获取失败...');
    } else {
      res.render('list', { account: data, moment: moment });
    }
  })
});

router.get('/account/create', function (req, res, next) {
  res.render('create');
});

router.post('/account', (req, res) => {
  let { title, time, type, account, remarks } = req.body;
  time = moment(time).toDate();
  let sql = "INSERT INTO node (title,time,type,account,remarks) VALUES (?,?,?,?,?);"
  mysql.query(sql, [title, time, type, account, remarks], (err, data) => {
    if (err) {
      res.status(500).send('插入失败...');
      return;
    } else {
      res.render('success', { msg: '提交成功', url: "/account" })
    }
  })
});

router.get('/account/:id', (req, res) => {
  let param = req.params.id;
  let sql = "DELETE FROM node WHERE id = ?";
  mysql.query(sql, [param], (err, data) => {
    if (err) {
      res.status(500).send('删除失败...');
      return;
    }
    res.render('success', { msg: '删除成功', url: "/account" });
  })
})

module.exports = router;
