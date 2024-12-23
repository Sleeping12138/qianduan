// let set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(4);
// for (let e of set) {
//     console.log(e);
// }

// let set = new Set([1, 2, 3, 4]);
// for (const element of set) {
//     console.log(element);
// }

// console.log(set.has(3));

// let arr1 = [1, 2, 3, 4, 5, 4, 3, 2, 1];
// let arr2 = [4, 5, 6, 5, 6];

// console.log(ret);

// 交集
// let temp = [...new Set(arr1)];
// let set = new Set(arr2);
// let ret = temp.filter(ele => set.has(ele))
// console.log(ret);

// 并集
// let ret = [...new Set([...arr1, ...arr2])];
// console.log(ret);

// let temp = [...new Set(arr1)];
// let set = new Set(arr2);
// let ret = temp.filter(e => !set.has(e));
// console.log(ret);

// let map = new Map();
// map.set('zhangsan', 18);
// map.set('lisi', 18);
// map.set('wangwu', 19);
// for (const element of map) {
//     console.log(element);
// }
// map.set('zhangsan', 20);
// for (const element of map) {
//     console.log(element);
// }


//class的使用
// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     test() {
//         console.log('hello world');
//     }
// }

// let s1 = new Student('zhangsan', 18);
// console.log(s1);

// class Teacher {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     teach() {
//         console.log('老师教书...');
//     }
// }

// let t1 = new Teacher('wangming', 30);
// console.log(t1);

// class Phone {
//     // 静态属性属于类
//     static tpye = '华为';
//     constructor(name) {
//         this.name = name;
//     }
//     call() {
//         console.log('call phone...');
//     }
// }
// let p = new Phone('zzz');
// console.log(p.name);
// console.log(p.tpye);
// console.log(Phone.tpye);

// class People {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     dothing() {
//         console.log('work');
//     }
// }

// class Student extends People {
//     constructor(name, age, id) {
//         super(name, age);
//         this.id = id;
//     }
//     // 方法的重写
//     dothing() {
//         console.log('studying...');
//     }
// }
// let stu = new Student('zhangsan', 18, 1);
// console.log(stu);
// stu.dothing();

// class People {
//     // 私有变量
//     #id;
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     get getId() {
//         return this.#id;
//     }
//     set setId(id) {
//         this.#id = id;
//     }
//     work() {
//         console.log('work');
//     }
// }

// let p = new People('zhangsan', 18);
// p.setId = 100;
// console.log(p.getId);

// class People {
//     static type = 'male';
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         console.log('eatting');
//     }
// }

// function equal(a, b) {
//     return Math.abs(a - b) < Number.EPSILON;
// }
// // true
// console.log(equal(0.1 + 0.2, 0.3));

// 二进制
// let b = 0b1111;
// // 八进制
// let o = 0o17;
// // 十六进制
// let x = 0xF;
// // 15 15 15
// console.log(b, o, x);


// Number.isFinite()

// Number.isNaN();

// Number.isInteger();

// let str1 = "1234abc";
// let str2 = "3.14abc";
// // 1234
// console.log(Number.parseInt(str1));
// // 3.14
// console.log(Number.parseFloat(str2));

// let number = 3.14;
// // 3
// console.log(Math.trunc(number));

// // true
// console.log(Object.is(NaN, NaN));
// // false
// console.log(NaN === NaN);
// // false
// console.log(Object.is(121, "121"));

// Object.assign()

// let p1 = {
//     name: 'zhangsan',
//     age: 18,
//     sex: 'male'
// }
// let p2 = {
//     name: 'lisi',
//     age: 19,
//     test: 'hello world'
// }
// // { name: 'lisi', age: 19, sex: 'male' }
// // 将后边的对象中的数据覆盖到前面,如果前面有后面没有,则不覆盖,后面有,前面没有则添加
// console.log(Object.assign(p1, p2));

// 分别暴露
// export let name = "zhangsan";
// export function test() {
//     console.log('hello world');
// }

// let name = "zhangsan";
// function test() {
//     console.log('test...');
// }

// export {
//     name, test
// }

// 默认暴露
// export default {
//     name: "zhangsan",
//     test() {
//         console.log('test...');
//     }
// }

// let array = [1, 2, 3, 4];
// console.log(array.includes(3));
// console.log(array.includes(5));

// async function test() {
//     let ret = await new Promise((resolve, reject) => {
//         resolve("hello world")
//     })
//     // hello world
//     return ret
// }

// async function test2() {
//     try {
//         let ret = new Promise((resolve, reject) => {
//             reject('error');
//         })
//         return ret;
//     } catch (err) {
//         console.log(err);
//     }
// }
// test().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// const fs = require('fs');
// function test1() {
//     return new Promise((resolve, reject) => {
//         fs.readFile('./text1', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }
// function test2() {
//     return new Promise((resolve, reject) => {
//         fs.readFile('./text2', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }
// function test3() {
//     return new Promise((resolve, reject) => {
//         fs.readFile('./text3', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }

// async function show() {
//     let ret1 = await test1();
//     let ret2 = await test2();
//     let ret3 = await test3();

//     console.log(ret1.toString(), ret2.toString(), ret3.toString());
// }

// show();
// console.log('hello world');

// function test(path) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open('get', path);
//         xhr.send();
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4) {
//                 resolve(xhr.response)
//             } else {
//                 reject(xhr.status);
//             }
//         }
//     })
// }

// async function main(path) {
//     let ret = await test();
//     console.log(ret);
// }

// main();

// const people = {
//     name: 'zhangsan',
//     age: 18,
//     sex: 'male'
// }

// // 获取所有的键
// console.log(Object.keys(people));
// // 获取所有的值
// console.log(Object.values(people));
// // 获取所有的键值对
// console.log(Object.entries(people));

// let p = {
//     name: 'zhangsan',
//     age: 19,
//     sex: 'male'
// }
// const pp = { ...p };
// console.log(pp);

// let regexp = new RegExp('hello')
// console.log(regexp.test('hello world'));
// // console.log(regexp.test('world hello'));
// const regex = /hello/;
// console.log(regex.exec('hello world')); // ["hello"]
// console.log(regex.exec('world hello')); // null


// let str = '<a href="http://www.baidu.com">zhangsan</a>';
// let reg = /<a href="(?<url>.*)">(?<text>.*)<\/a>/;
// let ret = reg.exec(str);
// console.log(ret);

// let str = 'JS23402489hello555闸瓦';
// // 正向断言 —— 判断后面是否为闸
// let reg1 = /\d+(?=闸)/;
// // 反向断言 —— 判断前面是否为hello
// let reg2 = /(?<=hello)\d+/
// let ret = reg.exec(str);
// console.log(ret);

let str = `
    <ul>
        <li>
            <a>hello world</a>
            <p>这是一个测试...</p>
        </li>
    </ul>
`
let reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/s;
let ret = reg.exec(str);
console.log(ret);