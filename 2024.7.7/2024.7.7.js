// let a = 100;
// console.log(a);

"use strict";

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(array);

//三种输出语句
// asserts("hello")
//console.log()
// let float = 3.14;
// console.log(float);

// let number;
// number = prompt("请输入一个整数", "整数");
// if (number > 100) {
//     console.log("YES");
// } else {
//     console.log("NO");
// }

// window.document("hello world");
// document.write("hello world");
// document.write("Hello, world!");

//console.log常用于测试，alert常用于告知用户
//JavaScript用于网页中与用户进行交互用的

//变量的创建 - let and var

// let number = 100;
// console.log(number);
// console.log(number);
// var number = 200;

// {
//     let a = 100;
//     var b = 200;
//     console.log(a, b);
// }
// //var声明的变量是没有作用域的
// console.log(a,b);

//有名称的函数
// let ret = sum(10, 20);
// console.log(ret);
// //函数会发生提升
// function sum(a, b) {
//     return a + b;
// }

// function(a, b) {
//     return a + b;
// }

// let ret = (a, b) => {
//     return a + b;
// }
// console.log(ret);

// //箭头函数
// let ret = (10, 20)=> {
//     return 10 + 20;
// }

// const fun = (a, b) => {
//     return a + b;
// }
// console.log(fun(10, 20));
//箭头函数可以直接在参数位置
//有名函数 + 匿名函数 + 箭头函数
// function doubles(x) {
//     return x ** 2;
// }
// console.log(doubles(1));
// console.log(doubles(2));
// console.log(doubles(3));
// console.log(doubles(4));

//箭头函数
// const doubles = x => {
//     return x ** 2;
// }
// console.log(doubles(1));
// console.log(doubles(2));
// console.log(doubles(3));
// console.log(doubles(4));

// //常量的创建 - const
// const num = 100;
// console.log(num);
// num = 200;
// console.log(num);

//数据的类型
//Number + BigInt + String + Boolean + Null + Undefined + Symbol
//使用typedef可以检测类型
// let ret = 100;
// console.log(typeof ret);
// let ret1 = 10000000000
// console.log(typeof ret1);
// let str = "hello";
// console.log(typeof str);
// let b = true;
// console.log(typeof b);
// let nu;
// console.log(typeof nu);

//在JavaScript中变量和数据是分开存储的

//变量类型之间的转换
// let number = 100;
// console.log(typeof number);
// console.log(typeof number.toString());

// let b = true;
// console.log(typeof b);
// console.log(typeof b.toString());

// const num = 200;
// console.log(typeof num);
// console.log(typeof String(num));

// const num = 200;
// console.log(typeof num);
// console.log(typeof (num + ""));

//使用toString（） + 使用String（） + ""；

// let str = "1234";
// console.log(typeof str);
// console.log(typeof Number(str));

// let ret = Null;
// let ret = "          "
// console.log(Number(ret));

// let ret;
// console.log(Number(ret));

// let ret = "1234";
// console.log(ret);
// console.log(typeof (+ret));

// let ret = 1;
// console.log(typeof Boolean(ret));
// console.log(Boolean(ret));
// let str = "";
// console.log(Boolean(str));

// console.log(!!1);

//使用！！来进行转换
// console.log(!!"");

//数组的创建
//(1)
// const array = [1, 2, 3, 4, 5];
// console.log(array);

// let array = [1, 2, 3, 4, 5];
// array.forEach(array, e => { console.log(e) });
// let array = [1, 2, 3, 4, 5];
// //第一个为元素，第二个为索引，第三个为数组
// array.forEach((e, i, a) => { console.log(e, i, a); })

//（2）
// let array = new Array(3);
// console.log(array);
//只想有一个元素的话就直接使用Array。of
// let array = Array.of(3);
// console.log(array);

//函数的创建
// let array1 = [1, 2, 3, 4, 5];
// let array2 = new Array(1, 2, 3, 4, 5);
// array1.forEach(e => console.log(e));
// array2.forEach(e => console.log(e));

//数组的遍历
//使用for循环
// let array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

//使用for - of
// let array = [1, 2, 3, 4, 5];
// for (const ret of array) {
//     console.log(ret);
// }

//使用foreach函数
// let array = [1, 2, 3, 4, 5];
// array.forEach(e => console.log(e));

//二维数组
// let array = [[1, 2, 3], [2, 3, 4], [3, 4, 5]];
// console.log(array);
//使用for循环输出
// for (let i = 0; i < array.length; i++) {
//     for (let k = 0; k < array[i].length; k++) {
//         console.log(array[i][k]);
//     }
// }

//使用forof输出
// for (const temp of array) {
//     for (const ret of temp) {
//         console.log(ret);
//     }
// }

// array.forEach(e => console.log(e.forEach(el => console.log(el))));

//数组中的常见方法
//for
// let array = [1, 2, 3, 4, 5];
// // console.log(array);
// for (const ret of array) {
//     console.log(ret);
// }

// let array = [1, 2, 3, 4, 5];
// let array1 = [6, 7, 8, 9, 10];
// // console.log(array.at(0));
// // console.log(array.at(1));
// // console.log(array.at(2));
// // console.log(array.at(3));
// // // //可以倒着数
// // // console.log(array.at(-1));
// // //连接两个数组
// // let ret = array.concat(array1);
// // console.log(ret);

// let array = [1, 2, 3, 4, 5];
// //indexof()里面直接就是元素
// console.log(array.indexOf(0));
// console.log(array.indexOf(1));
// console.log(array.indexOf(2));
// console.log(array.indexOf(3));



// let array = [1, 2, 5, 4, 5];
// console.log(array.lastIndexOf(5));
// let array = [1, 2, 3, 4, 5];
// //数组中包不包含一个元素
// console.log(array.includes(3));
// console.log(array.includes(10));

//连接一个数组中的每个元素
// let array = [1, 2, 3, 4, 5];
// let ret = array.join("--");
// console.log(ret);
// console.log(typeof ret);

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let ret = array.slice(2, 5);
// console.log(ret);

// //也可以用于浅克隆
// let newArray = array.slice();
// console.log(newArray);

// let array = [1, 2, 3, 4, 5];
// //深克隆的方式
// let ret = structuredClone(array);
// console.log(ret);

//push - 尾插
// let array = [1, 2, 3, 4, 5];
// for (let i = 0; i < 5; i++) {
//     array.push(i + 6);
// }
// console.log(array);
// //尾删
// for (let i = 0; i < 5; i++) {
//     array.pop()
// }
// console.log(array);

// let array = [1, 2, 3, 4, 5];
// for (let i = 0; i < 5; i++) {
//     array.unshift(i + 6);
// }
// console.log(array);
// for (let i = 0; i < 5; i++) {
//     array.shift();
// }
// console.log(array);

//倒置数组
// let array = [1, 2, 3, 4, 5];
// console.log(array);
// let ret = array.reverse();
// console.log(ret);

//splice函数
// let array = [1, 2, 3, 4, 5, 6];
// //开始位置 - 要删除元素的个数 - 插入元素
// array.splice(0, 0, 100);
// console.log(array);

// let array = ["hello", "the", "world"];
// array.splice(1, 0, "makabaka");
// console.log(array);

//数组中的高阶函数
//排序
// let array = [1, 2, 3, 4, 5];
// array.sort((a, b) => b - a);
// console.log(array);

// let array = ["hello", "the", "world"];
// array.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()));
// console.log(array);

// let str = "HELLO";
// console.log(str);
// let ret = str.toLowerCase()
// console.log(ret);

// let str = "hello";
// let ret = str.toUpperCase();
// console.log(ret);

//sort函数
// let array = [2, 1, 4, 8, 7, 9, 4, 0, 10];
// array.sort((a, b) => a - b);
// console.log(array);

// let strArray = ["hello", "the", "world", "wow", "makabaka"];
// strArray.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()));
// console.log(strArray);

//foreach函数
// let array = [5, 4, 3, 2, 1];
// array.forEach(e => console.log(e));

// let array = [1, 4, 8, 5, 9, 10, 2, 3, 4, 7];
// let ret = array.filter(e => e > 5);
// console.log(ret);

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let ret = array.filter(e => e % 2 === 0);
// console.log(ret);

//数组中的reduce函数
// let array = [1, 2, 3, 4, 5];
// let ret = array.reduce((a, b) => a * b, 2);
// console.log(ret);


// let array = ["hello", "the", "world"];
// array.forEach(e => console.log(e.toUpperCase()));
// console.log(array);

// let array = ["hello", "the", "world"];
// array.map(e => console.log(e.toUpperCase()))
// console.log(array);

//map和foreach的区别 - map会创建一个新的数组而foreach不会
// let array = [1, 2, 3, 4, 5];
// array.forEach((e, index) => {
//     array[index] = e * 2;
// })
// console.log(array);
/**
 *  let array = [1, 2, 3, 4, 5];
    array.forEach(e => e * 2)
    console.log(array);
    //e*2没了
 */

// let array = [1, 2, 3, 4, 5];
// array.forEach(function (element, index) {
//     array[index] = element * 2;
// })
// console.log(array);


// let array = [1, 2, 3, 4, 5];
// let ret = array.map(e => e * 2)
// console.log(ret);
//map会返回一个新的数组

//reduce
// let array = [1, 2, 3, 4, 5];
// let ret = array.reduce((a, b) => a * b);
// console.log(ret);

//数组的解构
// let array = ["hello", "the", "world"];
// let [a, b, c] = array;
// console.log(a);
// console.log(b);
// console.log(c);

//可以使用“ ， ”来隔开元素
// let array = [1, 2, 3];
// let [first, , third] = array;
// console.log(first, third);

// let array = [1, 2, 3, 4, 5];
// let [a, ...b] = array;
// console.log(a);
// console.log(b);

// let array = [1, 2];
// let [a, b, c] = array;
// console.log(a, b, c);

//数组的解构可以交互数值
// let a = 10;
// let b = 20;
// [a, b] = [b, a];
// console.log(a, b);

// let str1 = "hello";
// let str2 = "world";
// [str1, str2] = [str2, str1];
// console.log(str1, str2);

//数组的解构 - 它可以让你快速地将数组中的元素分配给多个变量。