//正则表达式的创建
// let reg = /hello/;
// let reg = new RegExp("hello", "i");

//使用循环找出所有满足条件的结果
// const str = "在2023年，有123个项目，2024年计划新增456个项目。";
// let reg = /\d{3,4}/g;
// let ret = [];
// while (true) {
//     let temp = reg.exec(str);
//     if (temp !== null) {
//         ret.push(temp);
//     } else {
//         break;
//     }
// }
// console.log(ret);
// const str = "今天是2024年07月15日，明天是2024年07月16日。";
// const regex = /(\d{4})年(\d{2})月(\d{2})日/g;
// let ret = [];

// while (true) {
//     temp = regex.exec(str);
//     if (temp === null) {
//         break;
//     } else {
//         ret.push(temp[0]);
//     }

// }
// console.log(ret);

// const str = "今天是2024年07月15日，明天是2024年07月16日。";
// //只有这样才可以进行分组
// let reg = /\d{4}年\d+月(\d+)日/g;
// let array = [];
// while (true) {
//     let temp = reg.exec(str);
//     if (temp !== null) {
//         array.push(temp[1]);
//     } else {
//         break;
//     }
// }
// console.log(array);

//完全匹配
// const str = "hello world";
// //完全匹配
// let reg = /^hello world$/;
// console.log(reg.test(str));

//split拆分字符串
// const str = "he$ll#o &wo@rl*d";
// let reg = /[$#@&*]/;
// let ret = str.split(reg);
// console.log(ret);

//search - 返回第一个匹配的索引值

//replace - 替换第一个，加g替换所有
// const str = "hell123o worl123d";
// let reg = /\d+/g;
// let ret = str.replace(reg, "ZZ");
// console.log(ret);

//match可以替换exec，也可以进行分组
// const str = "今天是2024年07月15日。";
// let reg = /\d+/g;
// let ret = str.match(reg);
// console.log(ret);

//matchAll返回的是一
//强制全部 + 返回的是一个迭代器
// const str = "今天是2024年07月15日。";
// let reg = /\d+/g;
// let ret = str.matchAll(reg);
// //
// for (const x of ret) {
//     console.log(x);
// }

//JSON序列化
// const p = {
//     name: "zhangsan",
//     aege: 18,
// }
// let ret = JSON.stringify(p)
// console.log(ret);















