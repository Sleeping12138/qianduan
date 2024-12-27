// let n: number = 100;
// console.log(n);

// class People {
//     constructor(public name: string, public age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     public hello() {
//         console.log('hello world');
//     }
// }

// class Student extends People {
//     constructor(name: string, age: number) {
//         super(name, age);
//     }

//     override hello(): void {
//         console.log('student hello world');
//     }
// }

// let stu = new Student('zhangsan', 18);
// console.log(stu);


// interface IPhone {
//     name: string;
//     price: number;
//     call(): void;
// }

// let phone: IPhone = {
//     name: 'zhangsan',
//     price: 2999,
//     call() {
//         console.log('call...');
//     },
// }

// class xiaomi implements IPhone {
//     constructor(public name: string, public price: number) {
//     }
//     call(): void {
//         console.log('call phone...');
//     }
// }

// function test<T>(n: T) {
//     console.log(n);
// }
// test(100)
// test('hello world')
// test(true);

// interface ITest {
//     (a: number, b: number): number;
// }

// const fn: ITest = (a, b) => {
//     return a + b;
// }

// function Demo(target: Function) {
//     console.log(target);
// }

// @Demo
// class People {
//     constructor(public name: string, public age: number) {

//     }

// }

// function StuToString(target: Function) {
//     target.prototype.toString = function () {
//         return JSON.stringify(this);
//     }
//     // 封锁对象
//     Object.seal(target.prototype);
// }

// @StuToString
// class Student {
//     constructor(public name: string, public age: number) { };
// }

// let stu = new Student('zhangsan', 18);
// console.log(stu.toString());

// // @ts-ignore
// Student.prototype.number = 100;
// console.log(Object.getPrototypeOf(stu).number);


// type Constructor = new (...args: any[]) => {};
// type Constructor = {
//     new(...args: any[]): {},
//     str: string
// }
// type Constructor = new (...args: any[]) => {};

// function Temp(target: Constructor) {
//     return class Person {
//         test() {
//             console.log(222);
//             console.log(222);
//             console.log(222);
//         }
//     }
// }

// @Temp
// class People {
//     test() {
//         console.log(111);
//     }
// }

// console.log(People);
//

// type Constructor = new (...args: any[]) => {};

// function Temp<T extends Constructor>(target: T) {
//     return class Person extends target {
//         public time: Date;
//         constructor(...args: any[]) {
//             super(...args);
//             this.time = new Date();
//         }
//         public getTime() {
//             return this.time;
//         }
//     }
// }

// class People {
//     constructor(public name: string, public age: number) { };
// }

// let a: number = 100;
// let b: number = 100;
// console.log(a + b);

// let a = 100;
// let num: number = 9;
// function isSu(n: number): boolean {
//     for (let i: number = 2; i <= Math.sqrt(num); i++) {
//         if (num % i == 0) return false;
//     }
//     return true;
// }
// console.log(isSu(num));




// let num = 100;
// let a;
// let b:any;
// b = 'hello';
// b = 100;
// let a;

// let a: unknown;
// a = 100;
// a = 'hello';

// // if (typeof a === 'string') {
// //     let str: string = a;
// // }

// let b:string;
// b = <string>a;

// function test(): void {
//     console.log('hello world');
// }

// test();

// let a = [1, 2, 3, 4];
// for (const ele of a) {
//     console.log(ele);
// }

// let p: {
//     name: string,
//     age?: number
// }

// p = {
//     name: 'zhangsan'
// // }
// let obj: {
//     name: string,
//     age: number,
//     sex?: string
// }

// let p: {
//     name: string,
//     age?: number,
//     [key: string]: any
// }

// p = {
//     name: 'zzz',
//     age: 18,
//     sex: 'male',
//     height: '180'
// }

// let test: (a: number, b: number)=> any;

// let arr: Array<string> = ["a", "b"];
// let arr2: string[] = ["a", "b"];


// let arr: Array<string>;

// let arr: [string, number, number];
// arr = ['hello', 100, 100];
// for (const element of arr) {
//     console.log(element);
// }
// let arr: [string, ...number[]];
// arr = ['hello', 1, 2, 3, 4];
// for (const element of arr) {
//     console.log(element);
// }

// let arr: [string, ...boolean[]];

// enum Direction {
//     UP = 'a',
//     DOWN = 'b',
//     LEFT = 'c',
//     RIGHT = 'd'
// }

// function test():void{
//     if(Direction.UP) console.log(object);
// }
// console.log(Direction);

// const enum Direction {
//     UP,
//     DOWN,
//     LEFT,
//     RIGHT
// }

// function test(n: Direction) {
//     if (n === Direction.UP) console.log('up');
//     else if (n === Direction.DOWN) console.log('down');

// }

// enum Direction {
//     UP = "up"
// }

// type num = number;

// let a: num = 100;
// console.log(a);

// type obj = {
//     name: string,
//     age: number,
//     sex?: string
// }

// let a: obj;

// type sex = 'male' | 'female';
// type sex = "male" | 'female';
// let a: sex = 'zhangsan';

// type People = {
//     name: string,
//     age: number
// }

// type Human = {
//     height: number,
//     weight: number
// }

// type Student = People & Human;
// let stu:Student = {

// }

// class People {
//     public name: string;
//     public age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     public eat(): void {
//         console.log('eatting...');
//     }
// }

// class Student extends People {
//     readonly id: number;
//     constructor(name: string, age: number, id: number) {
//         super(name, age);
//         this.id = id;
//     }
//     public study(): void {
//         console.log('studying...');
//     }
//     override eat(): void {
//         console.log('student is eatting...');
//     }
// }
// let stu = new Student('zhangsan', 18, 12345);
// console.log(stu);
// stu.eat()
// console.log(stu.name);
// // console.log(stu.id);

// stu.id = 10000;


// let p = new People('zhangsan', 18);
// console.log(p);

// 抽象类
// abstract class People {
//     constructor(public name: string, public age: number) { };
//     abstract eat(): void;
//     abstract sleep(): void;
//     abstract getAge(): number;
// }

// class Student extends People {
//     constructor(public name: string, public age: number) {
//         super(name, age);
//     };
//     eat(): void {
//         console.log('eatting');
//     }
//     sleep(): void {
//         console.log('sleeping...');
//     }
//     getAge(): number {
//         return this.age;
//     }
// }

// let stu = new Student('lisi', 18);
// // console.log(stu);
// let p = new People('lisi', 18);


// interface IPeople {
//     name: string;
//     age: number;
//     eat(): void;
// }

// class Student implements IPeople {
//     constructor(public name: string, public age: number) {
//         this.name = name;
//         this.age = age;;
//     }
//     eat(): void {
//         console.log('eatting....');
//     }

// }

// class Student {
//     constructor(public name: string, public age: number) { }
// }
// interface Student {
//     sex: string;
// }
// let stu = new Student('zhangsan', 18);
// stu.sex = 'male';
// console.log(stu);


// interface obj {
//     name: string;
//     age: number;
//     sex: string;
//     eat(): void;
// }

// let p: obj = {
//     name: "zhangsan",
//     age: 18,
//     sex: "male",
//     eat: function (): void {
//         console.log('eatting');
//     }
// }

// interface fn {
//     (a: number, b: number): number;
// }

// let test: fn = (a, b) => a + b;
// console.log(test(10, 20));
// 可以给类进行继承，也可以定义类型

// interface IPeople {
//     name: string;
//     age: number;
// }

// interface IHuman extends IPeople {
//     height: number;
//     weight: number;
// }

// class Student implements IHuman{
//     height: number;
//     weight: number;
//     name: string;
//     age: number;
//     constructor(){}
// }

// function test<T>(n: T) {
//     console.log(n);
// }

// test('hello');
// test(123);
// test(true)

// class Student<T> {
//     constructor(public name: string, public age: number, public introduce: T) {
//         this.name = name;
//         this.age = age;
//         this.introduce = introduce;
//     };
// }


// import * as m from './demo1.js';
// console.log(m.add(1, 2));
// console.log(m.num);

// 装饰器会在类定义之前进行执行
// function Test(target: Function) {
//     console.log(target);
// }
// @Test // == Test(Student)

// 在类定义之前进行执行
function getToString(target: Function) {
    target.prototype.toString = function () {
        return JSON.stringify(this);
    }
    // 该方法的作用是将参数封锁，使其不能被操作
    Object.seal(target.prototype);
}

@getToString
class Student {
    constructor(public name: string, public age: number) { };
}
let stu = new Student("lisi", 18);
console.log(stu.toString());
interface Student {
    number: number;
}
// 报错
Object.getPrototypeOf(stu).number = 100;
console.log(Student.prototype.number);



