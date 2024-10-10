const express = require('express');

let ret = express.Router();

ret.get('/test', (req, res) => {
    res.send('welcome to home...')
})

module.exports = ret;