// 使用函数封装，返回一个Promise对象的函数

// 封装为一个函数便于后期的使用Pormise
const { rejects } = require('assert');
const fs = require('fs');
// 封装fs模块
function getFs(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        })
    })
}

getFs('http://127.0.0.1:9000/test').then(val => {
    console.log(val);
}, reason => {
    console.log(reason);
})

//封装使用xhr发送Ajax模块
function sendAjax(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('get', url);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.status);
                }
            }
        }
    })
}

sendAjax('http://127.0.0.1:9000/test').then(val => {
    console.log(val);
}, reason => {
    console.log(reason);
})