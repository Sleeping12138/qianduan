"use strict";
//获取对象
const next = document.querySelector("#next")
const prev = document.querySelector("#prev")
const auto = document.querySelector("#auto")
const image = document.querySelector("img")
const p = document.getElementsByTagName("p")[0];

let imgArray = ["./image/1.png", "./image/2.png", "./image/3.png", "./image/4.png", "./image/5.png"];

let index = 0;
p.textContent = `总共${imgArray.length}张图片，当前为第${index + 1}张`;
let timer;

next.addEventListener("click", function () {
    clearTimeout(timer);
    index++;
    if (index > imgArray.length - 1) {
        index = 0;
    }
    image.setAttribute("src", imgArray[index]);
    p.textContent = `总共${imgArray.length}张图片，当前为第${index + 1}张`;
});

auto.addEventListener("click", function () {
    //关闭定时器
    clearTimeout(timer);

    timer = setTimeout(function fn() {
        index++;
        if (index > imgArray.length - 1) {
            index = 0;
        }
        image.setAttribute("src", imgArray[index]);
        p.textContent = `总共${imgArray.length}张图片，当前为第${index + 1}张`;

        timer = setTimeout(fn, 1200);
    }, 1200);
})

prev.addEventListener("click", function () {
    clearTimeout(timer);
    index--;
    if (index < 0) {
        index = imgArray.length - 1;
    }
    image.setAttribute("src", imgArray[index]);
    p.textContent = `总共${imgArray.length}张图片，当前为第${index + 1}张`;

});