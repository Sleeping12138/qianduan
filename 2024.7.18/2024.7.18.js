"use strict";
//DOM
/**
 * D - 网页
 * O - 对象
 * M - 对象之间的关系
 */

//节点
//文档节点的属性
// console.log(document.documentElement);
// console.log(document.title);
// console.log(document.head);
// console.log(document.links);

//使用文档节点获取元素对象
// let obj = document.getElementById("text");
// console.log(obj);
// let obj2 = document.getElementsByClassName("outer")[0];
// console.log(obj2);
// let obj3 = document.getElementsByTagName("p")[0];
// console.log(obj3);

// let obj = document.querySelectorAll("li");
// // console.log(obj);
// for (let ret of obj) {
//     console.log(ret);
// }

//创建新的对象并插入
// let liObj = document.querySelector("ul");
// let temp = document.createElement("li");
// temp.textContent = "New Object";
// liObj.appendChild(temp);
// console.log(temp);

//文档节点 - 文档节点的属性 +  文档节点获取其他元素节点 + 创建新的节点

//元素节点

// const obj = document.getElementsByTagName("ul")[0];
// const childNode = obj.children;
// // const childNode = obj.childNodes;
// let ret = Array.from(childNode);
// console.log(ret);
//将集合转换为数组的方式：
/**
 * 使用Array.from
 * 使用[...]进行展开
 */

// const ulObj = document.querySelector("ul");
// let ret = ulObj.firstElementChild;
// console.log(ret);
// let lastRet = ulObj.lastElementChild;
// console.log(lastRet);

//获取其孩子节点

//获取其兄弟节点
// const liObj = document.querySelector(".second");
// // const ret = liObj.previousElementSibling;
// const ret = liObj.nextElementSibling;
// console.log(ret);

//获取其父节点
// const liObj = document.querySelector(".second");
// const ret = liObj.parentElement;
// console.log(ret);
// const ret1 = liObj.parentNode;
// console.log(ret1);

// const liObj = document.getElementsByClassName("second")[0];
// let ret = liObj.tagName;
// console.log(ret);

//使用元素获取其他的元素

//元素节点的CRUD

//appendChild - 在该元素的内部的后面添加元素
// const liObj = document.querySelector(".second");
// const InsertObj = document.createElement("li");
// InsertObj.textContent = "this is a test";
// // liObj.appendChild(InsertObj);
// liObj.insertAdjacentElement("beforebegin", InsertObj)
// console.log(InsertObj);

//insertAdjacentHTML直接向对象中插入代码
// const liObj = document.querySelector(".second");
// liObj.insertAdjacentHTML("afterend", "<li>this is a test !</li>")

//元素的插入 - appendChild + insertAdjacentElement + insertAdjacentHTML

// const newObj = document.createElement("li");
// const liObj = document.querySelector(".second");
// const ret = liObj.previousElementSibling;
// // let ret1 = ret.remove();
// ret.replaceWith(newObj)
// console.log(ret1);

// const liObj = document.querySelector(".second");
// //参数为true内部的文本也会拷贝
// const temp = liObj.cloneNode(true);
// liObj.insertAdjacentElement("beforebegin", temp);

//CRUD - 增删改克隆

//文本节点
// const ulObj = document.querySelector("ul");
// const lastObj = ulObj.lastElementChild
// console.log(lastObj.innerHTML);

//（1）直接使用对象.属性名
// const inputObj = document.getElementsByTagName("input")[0];
// inputObj.name = "xiugai";
// // console.log(inputObj.name);
// console.log(inputObj.className);

// const inputObj = document.querySelector("input");
// console.log(inputObj.getAttribute("name"));
// // inputObj.setAttribute("name", "kuku")
// inputObj.removeAttribute("name");
// inputObj.removeAttribute("placeholder");

//属性节点 - 可以直接获取修改 + 也可以使用XXXArrtibute来进行修改

// const button = document.querySelector("button");
// //绑定事件
// button.onclick = function () {
//     alert("按钮被按下")
// }

// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//     alert("按钮被按下");
// })

//使用直接绑定后面的会覆盖前面的
//使用addEventListener可以绑定多个事件

//

//事件的冒泡 - 只要父类有子类相同的事件就会发生
// const obj1 = document.querySelector(".parent");
// const obj2 = document.querySelector(".chlid");
// obj1.addEventListener("click", function () {
//     alert("parent !!!");
//     alert("hello world");
// });


// obj2.addEventListener("click", function () {
//     alert("child !!!");
//     //停止冒泡传导
//     // stopPropagation()
// })

// const ulObj = document.querySelector("ul");
// console.log(ulObj);
// ulObj.addEventListener("click",function(){
//     if()
// })
// const button = document.querySelector("button");
// const ulObj = document.querySelector("ul");
// button.addEventListener("click", function () {
//     ulObj.insertAdjacentHTML("beforeend", "<li><a class='link' href='javascript:;'>新增链接</a></li>");
// })

// const link = document.querySelectorAll(".link");
// //将事件绑定在其父类的身上,使用事件的委派
// ulObj.addEventListener("click", function (event) {
//     //转换为数组之后判断是否在数组内部
//     if ([...link].includes(event.target)) {
//         alert(event.target.textContent);
//     }
// })

//绑定事件的流程
/**
 * 选择合适的父类
 * 绑定事件
 * 响应事件
 * 判断响应者的来源
 */

// const link = document.querySelectorAll(".link");
// console.log(link);
// const ulObj = document.querySelector("ul");
// ulObj.addEventListener("click", function (event) {
//     if ([...link].includes(event.target)) {
//         alert(event.target.textContent);
//     }
// }, true)

//事件绑定在父类的身上所以只会alert一次
const link = document.querySelectorAll(".link");
const ulObj = document.querySelector("ul");
ulObj.addEventListener("click", function (event) {
    if ([...link].includes(event.target)) {
        alert(event.target.textContent);
    }
}, true);
