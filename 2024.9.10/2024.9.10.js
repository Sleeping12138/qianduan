// $(function () {
//     console.log($("div").offset());

// })

// let button = document.querySelector("button");
// let i = document.querySelector("input");
// button.addEventListener("click", function () {
//     console.log(i.value);
// })

// let button = document.querySelector("button");
// let input = document.querySelector("input");
// let index = 0;
// button.addEventListener("click", function () {
//     let text = input.value;

//     //向浏览器存储中存储数据
//     sessionStorage.setItem(index++, text);
// })

// let ret = sessionStorage.getItem(1);
// console.log(ret);

// sessionStorage.removeItem(1)

// sessionStorage.clear();

// let button = document.querySelector("button");
// let input = document.querySelector("input");

// let index = 0;
// button.addEventListener("click", function () {
//     let text = input.value;
//     localStorage.setItem(index++, text);
// })

// localStorage.clear();

// 需要注意Boolean类型的属性不可以使用setAttribute设置其属性值
// let input = document.querySelector("#txt");
// let check = document.querySelector("#check");

// if (localStorage.getItem("txt")) {
//     input.value = localStorage.getItem("txt");
//     check.checked = true;
// }

// check.addEventListener("change", function () {
//     if (check.checked) {
//         localStorage.setItem("txt", input.value);
//     } else {
//         localStorage.removeItem("txt");
//     }
// })

localStorage.getItem()



