// let a = 10;
// let b = 20;
// console.log(a + b);
// alert(a + b);

// document.write("hello world");

// 常量的创建
// const p = 100;
// console.log(p);
// p = 200;
// console.log(p);

// let str = "hello world";
// console.log(typeof str);

// console.log(typeof null);

// let number = 100;
// console.log(typeof number);

// let ret = number.toString();
// ret = String(number);
// ret = number + "";
// console.log(typeof ret);

// let str = "12134";
// console.log(typeof +str);
// console.log(typeof Number(str));
// console.log(typeof parseInt(str));

// let num = 1;
// console.log(typeof !!num);
// console.log(typeof Boolean(num));

// console.log(10 / 0);
// console.log(3 / 2);

// console.log(2 ** 4);
// console.log(null == undefined);
// console.log("1" == 1);

// console.log("1" === 1);

// for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= i; j++) {
//         console.log(i + " * " + j + " = " + (i * j));
//     }
// }

// 函数
// function test() {
//     alert("hello world");
// }

// test();

// // 匿名函数
// const fun = function () {
//     console.log("hello javascript!");
// }

// fun();

// const fu = (a = 100, b = 100) => {
//     return a + b;
// }

// console.log(fu());

// window.test();

// function fn() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total++;
//     }
//     return total;
// }

// console.log(fn(1, 2, 3, 4, 5));

// function fs(...js) {
//     let total = 0;
//     for (let i = 0; i < js.length; i++) {
//         total += js[i];
//     }
//     return total;
// }

// console.log(fs(1, 2, 3, 4, 5));

// // 数组
// const arr = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }
// console.log("-------------");

// const arr2 = new Array(1, 2, 3, 4, 5, 6);
// for (let i = 0; i < arr2.length; i++) {
//     const element = arr2[i];
//     console.log(element);

// }

// 高阶函数 - 参数为函数 / 返回值为函数

// 二维数组
// const arr = [[1, 2, 3], [4, 5, 6], [7, 8]];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }

// 数组的解构
// const arr = [1, 2, 3];
// [first, second, third] = arr;
// console.log(first, second, third);


// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// //可以使用逗号进行占位
// [, , a, b, c] = arr2;
// console.log(a, b, c);

// DOM
/**
 * D document 网页
 * O object 对象
 * M medal 对象之间的关系
 */

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.title);
// console.log(document.body);
// console.log(document.links);

// const ret = document.getElementById("second");
// const ret1 = document.getElementsByClassName("fourth")[0];
// console.log(ret, ret1);

// const ret2 = document.getElementsByTagName("li");
// console.log(ret2);

// const ret = document.querySelector("#second")
// const ret1 = document.querySelectorAll(".fourth");
// console.log(ret, ret1);

// const ret = document.createElement("li");
// console.log(ret);

// const ulObj = document.getElementsByTagName("ul")[0];
// // 获取所有的元素节点，包括文本节点
// let ret = ulObj.childNodes;
// // 只获取元素节点
// let ret1 = ulObj.children;
// console.log(ret, ret1);

// let ret2 = ulObj.firstElementChild;
// let ret3 = ulObj.lastElementChild;
// console.log(ret2, ret3);


// 获取兄弟节点
// const ulObj = document.getElementsByTagName("ul")[0];
// const temp = document.getElementById("second");
// let ret1 = temp.previousElementSibling;
// let ret2 = temp.nextElementSibling;
// console.log(ret1, ret2);

// const temp = document.getElementById("second");
// let ret = temp.parentElement;
// console.log(ret);

// const temp = document.getElementsByClassName("fourth")[0];
// let ret = temp.tagName;
// temp.insertAdjacentElement
// console.log(ret);

// 元素的插入
// const temp = document.createElement("li");
// temp.textContent = "zhuzhu";
// const ulObj = document.getElementsByTagName("ul")[0];
// ulObj.appendChild(temp);

// const liObj = document.getElementsByTagName("ul")[0].lastElementChild;
// liObj.remove();

// const ulObj = document.getElementsByTagName("ul")[0];
// const temp = document.createElement("li");
// temp.textContent = "temp";
// ulObj.insertAdjacentElement("beforebegin", temp);

// const temp = document.createElement("li");
// temp.textContent = "zhuzhu";

// const lii = document.getElementById("second");
// lii.replaceWith(temp);

// const ulObj = document.getElementsByTagName("ul")[0];
// const temp = document.createElement("li");
// temp.textContent = "temp";
// ulObj.append(temp);

// const temp = document.getElementsByClassName("fourth")[0];

// //克隆节点
// let ret = temp.cloneNode(true);
// const ulObj = document.getElementsByTagName("ul")[0];
// ulObj.append(ret);

// const temp = document.querySelector(".last");
// // // 不包含空格
// // console.log(temp.innerText);
// // // 包含空格
// // console.log(temp.textContent);

// const temp = document.getElementsByTagName("input")[0];
// console.log(temp.name);
// console.log(temp.className);

// temp.name = "hello";
// console.log(temp.name);

// const temp = document.querySelector(".temp");
// console.log(temp.getAttribute("name"));
// temp.setAttribute("name", "hello")
// console.log(temp.getAttribute("name"));

// temp.removeAttribute("name");

// const button = document.querySelector("button");
// // button.onclick = function () {
// //     alert("hello javascript");
// // }

// button.addEventListener("click", function () {
//     alert("hello world");
// })

const ulObj = document.querySelector("ul");
const liObj = document.querySelectorAll("li");
let arr = Array.from(liObj);
ulObj.addEventListener("click", function (event) {
    const temp = event.target;
    if (arr.includes(temp)) {
        console.log(temp.textContent);
    }
})


































