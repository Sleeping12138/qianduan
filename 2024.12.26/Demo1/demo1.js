// let str = 'hello world';
// function test() {
//     var str = 'hello world';
//     console.log(str);
// }
// test();
// console.log(str);

// let a;
// a = 100;
// console.log(a);

// const A = 100;

// 对象的解构
// let p = {
//     name: 'zhangsan',
//     age: 18,
//     sex: 'male'
// }

// let { name: n, age, sex } = p;
// console.log(n, age, sex);

// let p = {
//     name,
//     age,
//     test() {
//         console.log(this.name, this.age);
//     },
//     test1: function () {
//         console.log(this.name, this.age);
//     }
// }
// console.log(p.name);

// let p = (a, b) => {
//     return a + b;
// }
// console.log(p(1, 2));

// function fn() {
//     console.log(arguments);
// }

// // console.log(fn(1, 2, 3));
// fn(1, 2, 3);

// function test(...rest) {
//     console.log(rest);
// }
// test(1, 2, 3);

// let array = [1, 2, 3, 4];
// function test() {
//     console.log(...arguments);
// }
// test(...array);


// let p = {/* ... */ };
// up = Symbol('up');
// down = Symbol('down');

// p[up] = function () {
//     console.log('up');
// }
// p[down] = function () {
//     console.log('down');
// }

// console.log(p);

// let s1 = Symbol();
// console.log(s1);

// const s2 = Symbol('hello world')
// const s3 = Symbol('hello world')
// console.log(s2 === s3);

// let s = Symbol('hello world')
// console.log(s);
// console.log(s.description);

// let p = {
//     name: 'zhangsan',
//     age: 18
// }

// let test = Symbol('hello world');
// p[test] = function () {
//     console.log('hello world');
// }

// p[test]();

// let temp = Symbol('hello')

// let p = {
//     name: 'zhangsan',
//     age: 18,
//     [temp]: 'ok'
// }

// console.log(p);

// test = Symbol('ok');
// p[test] = 'ok'
// console.log(Object.getOwnPropertySymbols(p));

// let s = Symbol('hhh');
// let s2 = Symbol.for('hhh');
// console.log(s === s2);

// let p = {
//     [Symbol.hasInstance](array) {
//         return array instanceof Array;
//     }
// }

// console.log(p instanceof Array);
// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];
// arr1.push(arr2);
// console.log(arr1);

// let str = 'hello world'
// for (const e of str) {
//     console.log(e);
// }

// function* test() {
//     console.log('start');
//     let ret1 = yield 'hello';
//     console.log(ret1);
//     let ret2 = yield 'the';
//     console.log(ret2);
//     let ret3 = yield 'world';
//     console.log(ret3);
// }

// let itertor = test();
// // console.log(itertor.next());
// for (const element of itertor) {
//     console.log(element);
// }

// let map = new Map();
// map.set('zhangsan', 18);
// map.set('zhangsan', 80);
// console.log(map);

// let a = 0.1 + 0.2;
// let b = 0.3;
// console.log(a === b);
// console.log(Math.abs(a - b) < Number.EPSILON);

// let f = Infinity;
// console.log(f);

// let num = 3.14;
// console.log(Math.trunc(num));

// import * as obj from './demo2.js';
// console.log(obj.number);
// console.log(obj.test());

// let array = [1, 2, 3, 4, 5];
// console.log(array.includes(4));

// let a = 10 ** 2;
// console.log(a);

// async function test() {
//     try {
//         let ret = await new Promise((resolve, reject) => {
//             resolve('hello world');
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


// let p = {
//     name: 'zhangsan',
//     age: 18,
//     sex: 'male'
// }

// console.log(Object.keys(p));
// console.log(Object.values(p));
// console.log(Object.entries(p));

// let p = {
//     name: 'zhangsan',
//     age: 18,
//     sex: 'male'
// }
// let pp = { ...p };
// console.log(pp);


// let reg = //
// let ret = RegExp('hello');
// console.log(ret);

// let str = '<a href="http://www.baidu.com">zhangsan</a>'
// // 使用括号对取出的数据进行分组
// let reg = /<a href="(?<url>.*)">(?<text>.*)<\/a>/;
// let ret = reg.exec(str);
// console.log(ret);

// let str = 'js123456hello666闸外';
// let reg = /\d+(?=闸)/;
// let reg2 = /(?<=hello)\d+/;
// console.log(reg.exec(str));
// console.log(reg2.exec(str));



// let str = '  hello  ';
// console.log(str.trim() + 11);

// let array = [1, 2, 3, 4, [[5, 6], [7, 8]]];
// console.log(array);
// let ret = array.flat(2);
// for (const element of ret) {
//     console.log(element);
// }

// let array = [1, 2, 3];
// let ret = array.map(item => {
//     return item + 2;
// })
// console.log(ret);
// let str = 'hello java,hello python,hello javascript';
// let reg = /hello \w+/g;
// let ret = str.matchAll(reg);
// for (const element of ret) {
//     console.log(element);
// }


// let array = [1, 2, 3, 4];
// console.log(array?.[5]);

// let p = {
//     name: 'lisi',
//     age: 18,
//     sex: 'female'
// }
// console.log(p?.age);

// let num = Number.MAX_SAFE_INTEGER;
// console.log(num);
// let num = BigInt(1000);
// console.log(typeof num);