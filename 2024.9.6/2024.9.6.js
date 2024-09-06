"use strict";
// // 事件的委派
// const temp = document.getElementsByTagName("li");
// let arr = Array.from(temp);

// const ulObj = document.querySelector("ul");
// ulObj.addEventListener("click", function (e) {
//     let element = e.target;
//     // 只是父元素不会进行冒泡
//     e.stopPropagation();
//     if (arr.includes(element)) {
//         console.log(element.textContent);
//     }
// })

// const liObj = document.getElementById("second");
// liObj.addEventListener("click", function (ele) {
//     console.log("hello world");
//     ele.stopPropagation();
// })

// const liObj = document.querySelector("li");

// // // 只能获取内联样式
// // console.log(liObj.style.color);

// // 使用计算过后的样式
// let ret = getComputedStyle(liObj);
// console.log(ret.color);

// const liObj = document.querySelector("li");
// // const button = document.getElementsByTagName("button")[0];
// // button.addEventListener("click", function () {
// //     liObj.classList.add("temp")
// // })
// console.log(liObj.classList.contains("color"));

// const button = document.querySelector("button");
// const liObj = document.querySelectorAll("li");
// let ret = Array.from(liObj);
// button.addEventListener("click", function () {
//     for (let i = 0; i < ret.length; i++) {
//         ret[i].classList.toggle("temp");
//     }
// })

// const liObj = document.querySelector("li");
// // 用于查找是否有这个类名 - 不是属性名
// console.log(liObj.classList.contains("color"));

// const liObj = document.querySelector("li");
// // 只可以查询内联样式
// console.log(liObj.style.color);

// const liObj = document.querySelector("li");
// let ret = getComputedStyle(liObj);
// console.log(ret.color);

// const liObj = document.querySelectorAll("li");
// let temp = Array.from(liObj);

// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//     for (let i = 0; i < temp.length; i++) {
//         temp[i].classList.toggle("temp");
//     }
// })

// const ulObj = document.querySelector("ul");
// console.log(ulObj.classList.contains("zzz"));

// const button = document.querySelector("button")
// button.addEventListener("click", function () {

// }, true);

// BOM - window\navigator\location\hisotry\screen

// 存储了浏览器的信息
// console.log(window.navigator.userAgent);

// console.log(location.href);
// location.assign(url);


// let ret = setTimeout(function () {
//     alert("hello world");
// }, 100);
// clearTimeout(ret);

// 时间间隔到了之后会放入消息队列当中
// setInterval(function () {
//     alert("hello world");
// }, 1000);

// setTimeout(function fn() {
//     alert("hello world");
//     setTimeout(fn, 3000);
// }, 3000);

// 获取DOM对象
// const liObj = document.querySelector("li");

// // 获取jQuery对象
// let obj = $("div")

// // DOM -> jQuery
// $(DOM对象);

// // jQuery -> DOM
// $()[0] \ $().get(索引);































