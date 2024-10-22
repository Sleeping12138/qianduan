// Promise.race方法的使用
// let p1 = Promise.reject('error');
// let p2 = Promise.resolve('OK');
// let p3 = Promise.resolve('Achieve');

// let p = Promise.race([p1, p2, p3]);
const fs = require('fs');
const util = require('util');
const getText = util.promisify(fs.readFile);

async function test() {
    let data1 = await getText('./text1');
    let data2 = await getText('./text2');
    let data3 = await getText('./text3');
    console.log(data1 + data2 + data3);
}

test();














