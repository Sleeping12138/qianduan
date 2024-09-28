// let buf = Buffer.alloc(10);
// const { log } = require('console');
// console.log(buf);

// let buf_1 = Buffer.alloc(10000);
// console.log(buf_1);

// 使用这种方式创建Buffer缓冲区可能会有遗留数据
// let buf_2 = Buffer.allocUnsafe(10000);
// console.log(buf_2);

// let buf_3 = Buffer.from("hello");
// let buf_3 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
// console.log(buf_3);

// Buffer 的三种创建方式 —— alloc \ allocUnsafe \ from

// let buf_3 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
// console.log(buf_3.toString());
// console.log(buf_3);
// buf_3[0] = 99;
// console.log(buf_3);

// console.log(buf_3[0].toString(2));

// Buffer - 字节数组
// toString（）转换为字符串

// 导入fs包
// 向文件中写入
// const fs = require('fs');
// fs.writeFile('./名人名言', 'hello world', err => {
//     if (err) {
//         console.log("写入失败");
//         return;
//     } else {
//         console.log("写入成功");
//     }
// });

// 同步写入
// const fs = require('fs');
// fs.writeFileSync('./名人名言', 'i love you');
// console.log('hello world');


// 异步写入
// const fs = require('fs');
// // 会放到消息队列中，最后在拿出来执行
// fs.writeFile('./名人名言', 'i love you', err => {
//     if (err) {
//         console.log("写入失败");
//     } else {
//         console.log("写入成功");
//     }
// });
// console.log("hello");

// // 追加信息
// const fs = require("fs");

// // 使用\r\n进行换行
// fs.appendFileSync('./名人名言', '\r\ni hate you');

// 使用writeFile修改配置之后就可以进行追加
// const { error } = require('console');
// const fs = require('fs');
// fs.writeFile('./名人名言', '\r\ni hate you', { flag: "a" }, error => {

// });

// 频繁的进行写入
const fs = require('fs');
let ws = fs.createWriteStream('./名人名言');

ws.write("1\r\n");
ws.write("2\r\n");
ws.write("3\r\n");
ws.write("4\r\n");


ws.close();


