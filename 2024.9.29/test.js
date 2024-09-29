// console.log("hello world");


// const fs = require('fs');
// // 异步操作
// fs.writeFile("./文章", "hello Node.js", (err) => {
//     if (err) {
//         console.log("写入失败");
//         return;
//     } else {
//         console.log("写入成功！！！");
//     }
// });
// console.log('hello world');
// fs.writeFileSync()

// fs.appendFile()

// const fs = require('fs');
// let temp = fs.createWriteStream("./文章");
// temp.write("hello\r\n");
// temp.write("hello\r\n");
// temp.write("hello\r\n");
// temp.write("hello\r\n");

// temp.close();

// 文件的读取
// readFile \ readFileSysc \ createReadStream;
// const fs = require('fs');
// fs.readFile('./文章', (err, data) => {
//     if (err) {
//         console.log('读取错误');
//         return;
//     }
//     // 返回的为一个Buffer
//     console.log(data.toString());
// });


// 同步读取
// const fs = require('fs');
// let data = fs.readFileSync('./文章');
// console.log(data.toString());


// 流都会返回对象
// const fs = require('fs');
// let ret = fs.createReadStream('./文章');
// ret.on("data", (chunk) => {
//     console.log(chunk.toString());
// })

// ret.on('end', () => {
//     console.log('读取结束！！！');
// })
// const fs = require('fs');
// let ret = fs.createReadStream('./zuizhong2.mp4');
// ret.on('data', chunk => {
//     console.log(chunk);
// })

// 文件的复制
// (1)使用readFile
// const fs = require('fs');
// const process = require('process');
// let ret = fs.readFileSync('./zuizhong2.mp4');
// fs.writeFileSync('./zuizhong3.mp4', ret);
// console.log(process.memoryUsage()); //41349120 // 39


// (使用流的方式)
// const fs = require('fs');
// const process = require('process');
// let read = fs.createReadStream('./zuizhong2.mp4');
// let wr = fs.createWriteStream('./zuizhong4.mp4');
// read.on('data', chunk => {
//     wr.write(chunk);
// })
// read.on('end', () => {
//     console.log(process.memoryUsage()); //38227968

// })

// 读写流的参数只有路径
// 流创建的读写操作都是异步的

// 文件名称的修改
// 本质上就是修改路径
// const fs = require('fs');
// fs.rename('./文章', './new/文章2', err => {
//     if (err) {
//         console.log('error');
//         return;
//     } else {
//         console.log('finish');
//     }
// })

// 修改文件的位置与名称
// const fs = require('fs');
// fs.rename('./文章2', './new/文章', err => {
//     if (err) {
//         console.log('error');
//         return;
//     } else {
//         console.log('achieve');
//     }
// });

// 文件删除
// 使用unlick
// const fs = require('fs');
// fs.unlink('./zuizhong2.mp4', err => {
//     if (err) {
//         console.log('error');
//         return;
//     } else {
//         console.log('achieve');
//     }
// });

// 使用rm
// const fs = require('fs');
// fs.rm('./zuizhong3.mp4', err => {
//     if (err) {
//         console.log('error');
//         return;
//     } else {
//         console.log('achieve');
//     }
// });

// 文件夹操作
// mkdir \ readdir \ rmdir \ rm
// 参数：路径 + 配置 + 回调
// const fs = require('fs');
// fs.mkdir('./testDir', err => {
//     if (err) {
//         console.log('error');
//         return;
//     } else {
//         console.log('achieve');
//     }
// })

// 递归创建
// const fs = require('fs');
// fs.mkdir('./a/b/c', { recursive: true }, err => {
//     if (err) {
//         console.log('error');
//         return;
//     } else {
//         console.log('achieve');
//     }
// })

// 访问文件夹
// const fs = require('fs');
// fs.readdir('./new', (err, data) => {
//     if (err) {
//         console.log('error');
//         return;
//     } else {
//         console.log(data);
//     }
// })

// 删除文件夹
// const fs = require('fs');
// fs.rmdir('./new', { recursive: true }, err => {
//     if (err) {
//         console.log('error');
//         return;
//     } else {
//         console.log('achieve');
//     }
// })
// fs.rm('./a', { recursive: true }, err => {
//     if (err) {
//         console.log('error');
//         return;
//     } else {
//         console.log('achieve');
//     }
// })

// 查看资源属性
// const fs = require('fs');
// fs.stat('./zuizhong4.mp4', (err, data) => {
//     if (err) {
//         console.log('error');
//         return;
//     } else {
//         // console.log(data.isFile());
//         console.log(data.isDirectory());
//     }
// })

// 创建文件就是写入
// const fs = require('fs');
// // __dirname代表当前文件所在的目录的绝对路径
// fs.writeFileSync(__dirname + '/test1', 'hello world');




