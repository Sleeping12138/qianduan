// let str = "hello world"
// let str = "hello world"

// let str = "hello world";
// function test() {
//     // 当其在函数的内部找不到变量的时候就会到函数外部寻找
//     console.log(str);
// }
// test();

// function test() {
//     var str = "hello world"
// }
// console.log(str);

// console.log(str);
// var str = 'hello world'

// const STR;
// STR = 'hello world';
// console.log(STR);

// let array = ['a', 'b', 'c', 'd'];
// let [a, b, c, d] = array;
// console.log(a, b, c, d);


// let people = {
//     name: 'zhangsan',
//     age: 18,
//     sex: 'male'
// }

// // 变量名必须和对象中的变量名相同，否则就需要重命名
// let { name: n, age: a, sex } = people;
// console.log(n, a, sex);

// let name = 'zhangsan';
// console.log(`我的名字是${name}`);

// let people = {
//     test: function () {
//         console.log('这是原版的写法');
//     },
//     test2() {
//         console.log('这是简化的写法');
//     }
// }

// let t = () => {
//     console.log(arguments);
// }

// t(1, 2);

// function test(a, b, c = 100) {
//     console.log(a + b + c);
// }

// // 使用arguments
// function test1() {
//     console.log(arguments);
// }

// // 使用rest参数
// function test2(a, b, ...rest) {
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// }

// test2(1, 2, 3, 4, 5, 6, 7);

// //扩展运算符
// let array = ['a', 'b', 'c', 'd'];
// function test() {
//     console.log(arguments);
// }
// test(...array);

// 为集合——伪数组
// const divs = document.querySelector('div')
// let array = [...divs];

// let s1 = Symbol('hello')
// let s2 = Symbol('hello')
// // console.log(s1 === s2);
// // console.log(s1, s2);

// // console.log(s1.toString());
// // console.log(typeof (s1));
// // console.log(s1);
// // console.log(typeof (s1.toString()));
// console.log(s1.description);
// console.log(typeof (s1.description));

// let name = Symbol();
// let people = {
//     [name]: 'zhangsan'
// }

// console.log(people[name]);


// let a = Symbol('a');
// let b = Symbol('b');

// const obj = {};
// obj[a] = 'Hello';
// obj[b] = 'World';

// const objectSymbols = Object.getOwnPropertySymbols(obj);

// // [Symbol(a), Symbol(b)]
// console.log(objectSymbols);

// 第一次创建
// let s1 = Symbol.for('foo');
// //第二次复用
// let s2 = Symbol.for('foo');

// // true
// console.log(s1 === s2);

// let play = { /*...*/ };

// let method = {
//     up: Symbol(),
//     down: Symbol()
// }

// play[method.up] = function () {
//     console.log('up方法...');
// }
// play[method.down] = function () {
//     console.log('down方法...');
// }

// function test[Symbol.hasInstance](obj){
//     return obj instanceof Array;
// }
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// array2[Symbol.isConcatSpreadable] = false;
// // [ 1, 2, 3, [ 4, 5, 6, [Symbol(Symbol.isConcatSpreadable)]: false ] ]
// console.log(array1.concat(array2));

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const value of array) {
//     console.log(value);
// }

// let str = 'hello world'
// for (const e of str) {
//     console.log(e);
// }

// 使用迭代器完成自定义对象的遍历
// let group = {
//     id: 1,
//     member: ['A', 'B', 'C', 'D'],
//     // 给内置的Symbol对象设置一个函数
//     [Symbol.iterator]() {
//         let index = 0;
//         // 迭代器需要返回一个指针对象
//         return {
//             // 每次调用next方法
//             next: () => {
//                 if (index < this.member.length) {
//                     // 都要返回一个value——done的对象
//                     let ret = { value: this.member[index], done: false };
//                     index++;
//                     return ret;
//                 } else {
//                     return { value: undefined, done: true };
//                 }
//             }
//         }
//     }
// }

// for (let value of group) {
//     console.log(value);
// }

// let classroom = {
//     id: 1,
//     student: ['A', 'B', 'C', 'D'],
//     [Symbol.iterator]() {
//         let index = 0;
//         return {
//             next: () => {
//                 if (index < this.student.length) {
//                     return { value: this.student[index++], done: false };
//                 } else {
//                     return { value: undefined, done: true };
//                 }
//             }
//         }
//     }
// }
// for (let e of classroom) {
//     console.log(e);
// }

// function* test() {
//     let ret1 = yield 'hello'
//     console.log(ret1);
//     let ret2 = yield 'the'
//     console.log(ret2);
//     let ret3 = yield 'world'
//     console.log(ret3);
// }
// let iterator = test();
// for (let ret of iterator) {
//     console.log(ret);
// }

// let iterator = test();
// console.log(iterator.next('aaa'));
// iterator.next('bbb');
// iterator.next('ccc');
// iterator.next('ddd');

// function * test(){

// }

// function asyncTask(message, delay) {
//     setTimeout(() => {
//         console.log(message);
//         gen.next();  // 异步任务完成后，恢复生成器执行
//     }, delay);
// }

// function* asyncGenerator() {
//     console.log("Start of generator");

//     yield asyncTask("Task 1 completed", 1000);  // 异步任务
//     yield asyncTask("Task 2 completed", 500);   // 异步任务

//     console.log("End of generator");
// }

// const gen = asyncGenerator();
// gen.next();  // 启动生成器
// 


function asyncTask(message, delay) {
    setTimeout(() => {
        console.log(message);
        gen.next();  // 异步任务完成后，恢复生成器执行
    }, delay);
}

function* asyncGenerator() {
    console.log("Start of generator");

    yield asyncTask("Task 1 completed", 1000);  // 异步任务
    yield asyncTask("Task 2 completed", 500);   // 异步任务

    console.log("End of generator");
}

const gen = asyncGenerator();
gen.next();  // 启动生成器
console.log('hello world');
/* Start of generator
hello world
Task 1 completed
Task 2 completed
End of generator
 */