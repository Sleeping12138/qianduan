"use strict";
//什么是DOM
/**
 * D - document
 * O - Object
 * M - Model
 */

//文档节点 - document
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.title);
// console.log(document.links);

// const ulObj = document.getElementsByTagName("ul")[0];
// console.log(ulObj);

// const obj = document.querySelectorAll("li");
// //展开集合 - 使用Array.from 、[...]
// const array = [...obj]
// console.log(array);

// const obj = document.getElementsByClassName("text")[0];
// console.log(obj);

// const obj2 = document.querySelector(".text");
// console.log(obj2);

// const ulObj = document.getElementsByTagName("ul")[0];
//获取所有节点 - 包括文本节点
// const ret = ulObj.childNodes;
// //只是获取元素节点
// const ret1 = ulObj.children;
// console.log(ret);
// console.log(ret1);

// const text = ulObj.firstElementChild
// console.log(text);

// const liObj = document.querySelector("#second");
// // const next = liObj.nextElementSibling;
// // const previous = liObj.previousElementSibling;
// // console.log(next);
// // console.log(previous);

// console.log(liObj.parentNode);

// const button = document.querySelector("button");
// const ulObj = document.querySelector("ul");
// button.addEventListener("click", function () {
//     const temp = ulObj.lastElementChild;
//     if (temp !== null) {
//         temp.remove();
//     }
// })

//修改 - replaceWith

// const button = document.querySelector("button");
// const ulObj = document.getElementsByTagName("ul")[0];

// button.addEventListener("click", function () {
//     const temp = ulObj.lastElementChild;
//     //如果将内部的参数变为true，那么内部的文本也会被拷贝
//     const ret = temp.cloneNode(true);
//     ulObj.insertAdjacentElement("beforeend", ret);

// })

//文本节点 - innerText - textContent - innerHTML

//属性节点 - 与样式不同
// const inputObj = document.querySelector("input");
// // console.log(inputObj.className);
// // inputObj.className = "wow"
// // console.log(inputObj.getAttribute("class"));

// inputObj.removeAttribute("name")

//事件的绑定
// const button = document.querySelector("button");
// //后来的会覆盖前面定义的
// // button.onclick = function () {
// //     alert("按钮已经被点击了")
// // }

// button.addEventListener("click", function () {
//     alert("按钮已经被点击了");
// })

// button.addEventListener("click", function () {
//     alert("OK");
// })

//this - target - currentTarget

//事件的委派
// const liObj = document.querySelectorAll("a");
// const liArray = [...liObj];

// const ulObj = document.querySelector("ul");
// ulObj.addEventListener("click", function (event) {
//     if (liArray.includes(event.target)) {
//         event.preventDefault();
//         alert(event.target.textContent + "被点击了");
//     }
// })

//css样式的修改
/**
 * 使用对象.style.样式名
 * getComputeredStyle
 * 使用classList修改
 */


//直接使用style
// const pObj = document.querySelector("p");
// pObj.style.fontSize = "30px"
// pObj.style.color = "orange"

//使用getComputeredStyle
// const pObj = document.querySelector("p");
// const ret = getComputedStyle(pObj);
// console.log(ret.fontSize);


//使用class类来修改css属性
// const pObj = document.querySelector("p")
// const button = document.querySelector("button")
// button.addEventListener("click", function () {
//     pObj.classList.toggle("item1")
// })

// console.log(navigator.userAgent);

// console.log(history.length);

// const ulObj = document.querySelector("ul");
// const firstA = ulObj.firstElementChild;
// console.log(firstA);
// firstA.addEventListener("click", function () {
//     location.replace("https://www.baidu.com/");
// })

//正则表达式
//正则表达式的创建
const reg1 = new RegExp("[a-zA-Z]");
const reg2 = /"[a-zA-Z]/


