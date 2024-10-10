// const express = require('express');

// let api = express.Router();

// api.get('/home', (req, res) => {
//     res.json({
//         code: '0000',
//         msg: '访问成功',
//         data: 'home'
//     })
// })

// module.exports = api;

const express = require('express');

let api = express.Router();

api.get('/test', (req, res) => {
    res.send('hello world');
})

module.exports = api;