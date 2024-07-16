// "use strict";
// //正则表达式
// const str = "今天是2024年7月16日，星期二";
// //在字符串中注意会可能有转义
// let reg = new RegExp("\\d+", "g");
// // let reg = /\d+/g;
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


//正则表达式分组
// const str = "今天是2024年7月16日，星期二";
// //在字符串中注意会可能有转义
// let reg = /今天是(\d+)年(\d+)月(\d+)日/g
// // let reg = /\d+/g;
// let ret = [];
// while (true) {
//     let temp = reg.exec(str);
//     if (temp !== null) {
//         ret.push(temp[3]);
//     } else {
//         break;
//     }
// }
// console.log(ret);

//String类中有关正则表达式的方法
// const str = "he@ll%o w%o$r&l#d";
// let reg = /[#@&%$]/g;
// let ret = str.split(reg);
// console.log(ret);

//search - 搜索于正则表达式相关的第一个出现的位置
// const str = "hello world";
// let reg = /\s/g;
// let ret = str.replace(reg, "------");
// console.log(ret);

//match - exec
//match也可以添加组
// const str = "he12llo w123orl4d";
// let reg = /(\d+)/g;
// let ret = str.match(reg);
// console.log(ret);

// const str = "he12llo w123orl4d";
// let reg = /\d+/g;
// let ret = str.matchAll(reg);
// for (const t of ret) {
//     console.log(t);
// }

//包装类 - 提供基本数据类型类的对象 + 提供其中的方法
//包装类的创建
// let strObject = new String("hello");
// console.log(strObject.toUpperCase());

//自动拆装箱
// let str = "hello world";
// console.log(str.toUpperCase());

//DOM
/**
 * D - document - 整个网页
 * O - Object - 对象
 * M - Medal - 模型
 */

//文档节点
//html
//document 的属性
// console.log(document.documentElement);
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.links);

// let obj = document.getElementsByTagName("div")[0];
// console.log(obj);

// let obj = document.getElementById("inner");
// console.log(obj);

// let obj = document.querySelector("#inner")
// console.log(obj);

let obj = document.getElementsByClassName("outer")[0];
obj.textContent = "hello world"
console.log(obj);

