// let a = 100;
// console.log(a);
"use strict";
//可变参数 - 方法参数不确定时
// function sum() {
//     let ret = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         ret += arguments[i];
//     }
//     return ret;
// }
// let result = sum(1, 2, 3, 4, 5);
// console.log(result);

//使用...
// function sum(...element) {
//     return element.reduce((a, b) => {
//         return a + b;
//     });
// }
// let ret = sum(1, 2, 3, 4, 5);
// console.log(ret);

//call + apply + bind方法
// class Person {
//     name;
//     age;
//     constructor(name, age) {
//         this.name = name;
//         this.age = age
//     }
// }

// const p1 = new Person("zhangsan", 18);
// const p2 = new Person("lisi", 18);
// function introduce() {
//     console.log(this.name + " " + this.age);
// }

// introduce.call(p2);
//call参数一个一个传，apply参数为数组
//bind 绑定之后不可以进行修改

//数组的解构
// let array = [1, 2, 3, 4, 5];
// let [a, b, c] = array;
// console.log(a, b, c);

// let array = [1, 2, 3, 4, 5];
// let [a, b, ...c] = array;
// console.log(a, b, c);

//数组的解构还可以进行数据的交换
// let num1 = 100;
// let num2 = 200;
// console.log(num1, num2);
// [num1, num2] = [num2, num1];
// console.log(num1, num2);

// const person = {
//     name: "zhangsan",
//     age: 18,
//     show() {
//         console.log(this.name + " " + this.age);
//     }
// }
// person.speak = function () {
//     console.log("this is a test !");
// }
// console.log(person);
// person.speak();

// class Student {
//     name;
//     age;
//     gender;
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//
//直接存储在其原型对象上
//     show() {
//         console.log(`姓名：${this.name}`);
//     }
// }

// const s1 = new Student("zhangsan", 18, "男")
// const s2 = new Student("lisi", 18, "女")
// console.log(s1.show === s2.show);
// console.log(s1.prototype);

//原型对象的访问
/**
 * __proto__
 * getprototypeof
 * prototype - 只能使用类来访问
 */

// class Student {
//     name;
//     age;
//     gender;
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     show() {
//         console.log(`姓名：${this.name}`);
//     }
// }

// const s1 = new Student("zhangsan", 18, "男")
// const s2 = new Student("lisi", 18, "女")

// console.log(s1.__proto__);
// console.log(Object.getPrototypeOf(s2));
// console.log(Student.prototype);
// s1.__proto__.classroom = "113";
// console.log(Object.getPrototypeOf(s1));
// console.log(Student.prototype);

// Student.prototype.speak = function () {
//     console.log("hello world");
// }
// s1.speak();
// let obj = Object.getPrototypeOf(s1);
// obj.classroom = "113";
// console.log(obj);
// class A {
//     gender;
// }
// class People extends A {
//     name;
//     age;
//     constructor(name, age) {
//         super()
//         this.name = name;
//         this.age = age;
//     }

//     show() {
//         console.log(this.name + " " + this.age);
//     }
// }

// // People.prototype.gender = "男";

// const p1 = new People("zhangsan", 18);
// // if (p1 instanceof temp) {
// //     console.log("true");
// // } else {
// //     console.log("false");
// // }
// console.log(p1.hasOwnProperty("gender"));

// class Animal {
//     #name;
//     #age;
//     constructor(name, age) {
//         this.#name = name;
//         this.#age = age;
//     }
//     show() {
//         console.log(this.#name + " " + this.#age);
//     }

//     getName() {
//         return this.#name;
//     }

//     get age() {
//         return this.#age;
//     }
// }
// const animal = new Animal("coco", 2);
// // console.log(animal.#name);
// console.log(animal.getName());
// console.log(animal.age);

//封装 - 使用get、set方法 + 使用get + 属性名

// class Test {
//     #number;
//     constructor(number) {
//         this.number = number;
//     }

//     get number() {
//         return this.#number
//     }

//     set number(number) {
//         this.#number = number;
//     }
// }

// const t = new Test();
// console.log(t.number);
// t.number = 100;
// console.log(t.number);

//JavaScript中的三大特性
//封装
// class Animal {
//     #name;
//     #age;
//     constructor(name, age) {
//         this.#name = name;
//         this.#age = age;
//     }

//     getName() {
//         return this.#name;
//     }

//     set name(name) {
//         this.#name = name;
//     }
// }
// const animal = new Animal("wowo", 2);
// console.log(animal.getName());


//多态
// class Animal {
//     name;
//     age;
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     show() {
//         console.log(this.name + " " + this.age);
//     }

//     speak() {
//         console.log("xxxxxxx");
//     }
// }
// class Dog extends Animal {
//     constructor(name, age) {
//         super(name, age);
//     }
//     speak() {
//         console.log("wangwangwang");
//     }
// }
// class Cat extends Animal {
//     constructor(name, age) {
//         super(name, age);
//     }
//     speak() {
//         console.log("miaomiaomiao");
//     }
// }

// const animal1 = new Dog("coco", 1);
// const animal2 = new Cat("mimi", 2);
// function fn(animal) {
//     animal.speak();
// }
// fn(animal1);
// fn(animal2);

//数组的解构 - 将数组中的值快速的赋值给变量
//对象的解构 - 将对象中的属性值快速的赋值给变量

// const person = {
//     name: "zhangsan",
//     age: 18,
// }
// let { name, age } = person;
// console.log(name, age);

// class Person {
//     name;
//     age;
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// const p = new Person("wangwu", 11);
// //变量的重命名
// let { name: A, age: B } = p;
// console.log(A, B);

//对象的拷贝
// const p = {
//     name: "lisi",
//     age: 10,
// }
// console.log(p);
// //浅拷贝
// // let ret = Object.assign(p)
// //深拷贝
// let ret = structuredClone(p)
// console.log(ret);
/**
 * Object.assign()
 * structuredClone()
 */

//JSON序列化
// const p = {
//     name: "zhangsan",
//     age: 18,
//     gender: "男",
// }
// console.log(p);
// let ret = JSON.stringify(p);
// console.log(ret);

// //手动书写一个JSON字符串
// let str = { "name": "zhangsan", "age": 18 };

//使用JSON来实现深拷贝
// const p = {
//     name: "zhangsan",
//     age: 18,
//     gender: "男",
// }
// let temp = JSON.stringify(p);
// let ret = JSON.parse(temp);
// console.log(p);
// ret.name = "lisi";
// ret.age = 11;
// console.log(ret);

// //String
// let str = "hello world";
// console.log(typeof str);


// let str = "hello world";
// //JavaScript中的字符串可以使用索引来直接访问
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

//String类中常用API
// let str = "hello world";
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

// let str = "hello world";
// console.log(str.at(-2));

//concat
// let str1 = "hello";
// let str2 = " world";
// console.log(str1.concat(str2));

// let str = "hello world";
// console.log(str.includes("wor "));

// let str = "woow";
// let ret = str.padStart(10, "*");
// console.log(ret);

//
// let str = "hello world";
// let ret = str.replace("hello", "wow");
// console.log(ret);

// let str = "hello world";
// let ret = str.toUpperCase(str);
// console.log(ret);

// let str = "     str    ";
// let ret = str.trim();
// console.log(ret);

//split - 切分字符串
// let str = "hello the world !";
// let ret = str.split(" ");
// console.log(ret);

//正则表达式
//创建
// let reg = /hello/;
// let str = "hello world";
// console.log(reg.test(str));

// let reg = new RegExp("hello", "i");
// let str = "hello world";
// console.log(reg.test(str));

/**
 * //
 * new RegExp()
 */

// let reg = new RegExp("#%", "g");
// let str = "hel#lo * w%or#ld !";
// let ret = reg.exec(str);
// console.log(ret);